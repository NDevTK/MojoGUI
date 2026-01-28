import os
import json
import re
import datetime
from pathlib import Path

# Configuration
ROOT_DIR = 'chromium_src'

TYPE_MAPPING = {
    'bool': 'mojo.internal.Bool',
    'int8': 'mojo.internal.Int8',
    'int16': 'mojo.internal.Int16',
    'int32': 'mojo.internal.Int32',
    'int64': 'mojo.internal.Int64',
    'uint8': 'mojo.internal.Uint8',
    'uint16': 'mojo.internal.Uint16',
    'uint32': 'mojo.internal.Uint32',
    'uint64': 'mojo.internal.Uint64',
    'float': 'mojo.internal.Float',
    'double': 'mojo.internal.Double',
    'string': 'mojo.internal.String',
    'handle': 'mojo.internal.Handle',
}

# Per-interface scramble map: { "module.Interface": should_scramble }
INTERFACE_SCRAMBLE_MAP = {}
CHROME_VERSION_SALT = ""
FALLBACK_VERSION_STRING = "120.0.0.0"

def load_chrome_version():
    """Load chrome/VERSION to use as scrambling salt and fallback version."""
    global CHROME_VERSION_SALT, FALLBACK_VERSION_STRING
    version_path = os.path.join(ROOT_DIR, 'chrome', 'VERSION')
    if os.path.exists(version_path):
        with open(version_path, 'r') as f:
            CHROME_VERSION_SALT = f.read().strip()
        print(f"[Scramble] Loaded chrome version salt: {CHROME_VERSION_SALT[:50]}...")
        # Parse VERSION into version string for fallback
        major = minor = build = patch = "0"
        for line in CHROME_VERSION_SALT.split('\n'):
            if '=' in line:
                key, val = line.split('=', 1)
                if key == 'MAJOR': major = val.strip()
                elif key == 'MINOR': minor = val.strip()
                elif key == 'BUILD': build = val.strip()
                elif key == 'PATCH': patch = val.strip()
        FALLBACK_VERSION_STRING = f"{major}.{minor}.{build}.{patch}"
        print(f"[Scramble] Fallback version: {FALLBACK_VERSION_STRING}")
    else:
        CHROME_VERSION_SALT = "MAJOR=120\nMINOR=0\nBUILD=0\nPATCH=0"
        FALLBACK_VERSION_STRING = "120.0.0.0"
        print("[Scramble] Using default version salt")

def parse_build_gn_for_scrambling():
    """
    Parse BUILD.gn files to find mojom() targets with scramble_message_ids settings.
    Returns a dict mapping .mojom file paths to their scrambling preference.
    """
    mojom_file_scramble = {}  # { "relative/path/to.mojom": False } means NO scrambling
    
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'BUILD.gn' in files:
            build_path = os.path.join(root, 'BUILD.gn')
            try:
                with open(build_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                # Find mojom() targets using bracket counting for proper nesting
                pos = 0
                while True:
                    # Find next mojom( declaration
                    mojom_start = content.find('mojom(', pos)
                    if mojom_start == -1:
                        break
                    
                    # Find the opening brace
                    brace_start = content.find('{', mojom_start)
                    if brace_start == -1:
                        pos = mojom_start + 6
                        continue
                    
                    # Count braces to find matching close
                    depth = 1
                    idx = brace_start + 1
                    while idx < len(content) and depth > 0:
                        if content[idx] == '{':
                            depth += 1
                        elif content[idx] == '}':
                            depth -= 1
                        idx += 1
                    
                    block_content = content[brace_start+1:idx-1]
                    pos = idx
                    
                    # Check for scramble_message_ids = false
                    has_no_scramble = 'scramble_message_ids = false' in block_content or \
                                     'scramble_message_ids=false' in block_content
                    
                    if has_no_scramble:
                        # Extract sources from this block
                        sources_match = re.search(r'sources\s*=\s*\[([^\]]+)\]', block_content, re.DOTALL)
                        if sources_match:
                            sources_str = sources_match.group(1)
                            # Extract individual .mojom files
                            for mojom_match in re.finditer(r'"([^"]+\.mojom)"', sources_str):
                                mojom_file = mojom_match.group(1)
                                # Make path relative to the BUILD.gn directory
                                rel_dir = os.path.relpath(root, ROOT_DIR)
                                full_mojom_path = os.path.normpath(os.path.join(rel_dir, mojom_file))
                                mojom_file_scramble[full_mojom_path] = False
                                print(f"[Scramble] Found no-scramble: {full_mojom_path}")
            except Exception as e:
                pass  # Skip files that can't be parsed
    
    return mojom_file_scramble

def build_interface_scramble_map(all_parsed_files, mojom_file_scramble):
    """
    Build a map from interface FQN to scramble setting.
    Interfaces in files with scramble_message_ids=false get False, others get True (default scrambled).
    """
    global INTERFACE_SCRAMBLE_MAP
    
    for parsed in all_parsed_files:
        if not parsed or not parsed.get('module'):
            continue
        
        module = parsed['module']
        file_path = parsed.get('path', '')
        
        # Normalize path for lookup - strip ROOT_DIR prefix
        if file_path.startswith(ROOT_DIR):
            rel_path = file_path[len(ROOT_DIR):].lstrip(os.sep).lstrip('/')
        else:
            rel_path = file_path
        rel_path = os.path.normpath(rel_path)
        
        # Check if this file is in the no-scramble list
        should_scramble = True  # Default: scramble
        for no_scramble_path, setting in mojom_file_scramble.items():
            if rel_path.endswith(no_scramble_path) or no_scramble_path in rel_path:
                should_scramble = setting
                break
        
        # Map each interface to the scramble setting
        for iface in parsed.get('interfaces', []):
            fqn = f"{module}.{iface['name']}"
            INTERFACE_SCRAMBLE_MAP[fqn] = should_scramble
    
    print(f"[Scramble] Built map with {len(INTERFACE_SCRAMBLE_MAP)} interfaces")
    no_scramble_count = sum(1 for v in INTERFACE_SCRAMBLE_MAP.values() if not v)
    print(f"[Scramble] {no_scramble_count} interfaces marked as no-scramble")

# Feature flags for EnableIf
# This should ideally be configurable, but for now we default to a Windows Desktop environment
# matching the user's OS context where typical debugging happens.
ENABLED_FEATURES = {
    'is_win': True,
    'is_android': False,
    'is_linux': False,
    'is_mac': False,
    'is_chromeos': False,
    'is_ios': False,
    'is_fuchsia': False,
    'USE_RENDERER_SPELLCHECKER': True, # Enabled to include CallSpellingService
    'USE_BROWSER_SPELLCHECKER': True,
    'USE_BROWSER_SPELLCHECKER_AND_SPELLING_SERVICE': True,
    'file_path_is_string': False,
    'file_path_is_string16': True,
}

def check_enable_if(attributes):
    if not attributes:
        return True
    
    # Parse EnableIf=Condition (supports OR with |)
    enable_if_matches = re.finditer(r'EnableIf=([^,\]]+)', attributes)
    for m in enable_if_matches:
        condition_expr = m.group(1).strip()
        
        # Handle OR operator: is_chromeos|is_linux means ANY must be true
        conditions = [c.strip() for c in condition_expr.split('|')]
        
        any_enabled = False
        for condition in conditions:
            if condition in ENABLED_FEATURES:
                if ENABLED_FEATURES[condition]:
                    any_enabled = True
                    break
            else:
                # Unknown flag handling
                if condition.startswith('is_'):
                    # Unknown platform flag - don't count as enabled
                    pass
                else:
                    # Unknown feature flag - assume enabled (safer)
                    any_enabled = True
                    break
        
        if not any_enabled:
            return False
    
    # Parse EnableIfNot=Condition (supports OR with |)
    enable_if_not_matches = re.finditer(r'EnableIfNot=([^,\]]+)', attributes)
    for m in enable_if_not_matches:
        condition_expr = m.group(1).strip()
        
        # Handle OR operator: EnableIfNot=is_chromeos|is_linux means exclude if ANY is true
        conditions = [c.strip() for c in condition_expr.split('|')]
        
        for condition in conditions:
            if condition in ENABLED_FEATURES and ENABLED_FEATURES[condition]:
                return False  # One of the excluded conditions is enabled
    
    return True

def parse_mojom(file_path):
    """Parse a .mojom file and extract interface definitions using regex."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except Exception as e:
        return None


    result = {
        'path': str(file_path),
        'module': None,
        'imports': [],
        'interfaces': [],
        'structs': [],
        'unions': [],
        'enums': [],
        'constants': []
    }

    # Extract module name
    module_match = re.search(r'module\s+([\w.]+)\s*;', content)
    if module_match:
        result['module'] = module_match.group(1)

    # Extract imports (with optional [EnableIf/EnableIfNot] attributes)
    # Pattern matches: [Attributes] import "path";
    import_pattern = r'(?:\[([^\]]+)\]\s*)?import\s+"([^"]+)"'
    imports = []
    for match in re.finditer(import_pattern, content):
        attributes = match.group(1)
        import_path = match.group(2)
        
        # Check EnableIf/EnableIfNot conditions
        if check_enable_if(attributes):
            imports.append(import_path)
    
    result['imports'] = imports

    # Remove comments for cleaner parsing (but preserve // inside strings!)
    # Use a state machine approach to handle strings properly
    def remove_comments_preserve_strings(text):
        result = []
        i = 0
        in_string = False
        string_char = None
        
        while i < len(text):
            # Handle string literals
            if not in_string and text[i] in '"\'':
                in_string = True
                string_char = text[i]
                result.append(text[i])
                i += 1
            elif in_string:
                if text[i] == '\\' and i + 1 < len(text):
                    # Escape sequence - add both characters
                    result.append(text[i])
                    result.append(text[i + 1])
                    i += 2
                elif text[i] == string_char:
                    # End of string
                    in_string = False
                    string_char = None
                    result.append(text[i])
                    i += 1
                else:
                    result.append(text[i])
                    i += 1
            # Handle // comments (only outside strings)
            elif text[i:i+2] == '//':
                # Skip until newline
                while i < len(text) and text[i] != '\n':
                    i += 1
            # Handle /* */ comments (only outside strings)
            elif text[i:i+2] == '/*':
                # Skip until */
                i += 2
                while i < len(text) - 1 and text[i:i+2] != '*/':
                    i += 1
                i += 2  # Skip the */
            else:
                result.append(text[i])
                i += 1
        
        return ''.join(result)
    
    content_no_comments = remove_comments_preserve_strings(content)

    # Extract interfaces with their methods
    # Fix: Allow inheritance (e.g. interface A : B {) by matching usually non-brace chars until {
    # Also handle [EnableIf=...] and other attributes like [ServiceSandbox=...]
    interface_pattern = r'(?:\[([^\]]+)\]\s*)?interface\s+(\w+)[^{]*\{'

    for match in re.finditer(interface_pattern, content_no_comments):
        attributes = match.group(1)
        interface_name = match.group(2)
        
        # Check EnableIf/EnableIfNot conditions
        if not check_enable_if(attributes):
            continue
            
        start_pos = match.end()
        
        # Find matching closing brace
        brace_count = 1
        end_pos = start_pos
        while brace_count > 0 and end_pos < len(content_no_comments):
            if content_no_comments[end_pos] == '{':
                brace_count += 1
            elif content_no_comments[end_pos] == '}':
                brace_count -= 1
            end_pos += 1
        
        interface_body = content_no_comments[start_pos:end_pos-1]
        
        methods = []
        # Capture optional Ordinal: Name@123(...)
        # Fix: Use re.DOTALL (via flag or inline) to allow parameters to span multiple lines
        # Update: Capture Attributes [Attr] preceding method
        method_pattern = r'((?:\[[^\]]+\]\s*)*)([a-zA-Z][a-zA-Z0-9_]*)(?:@(\d+))?\s*\((.*?)\)\s*(?:=>\s*\((.*?)\))?'
        
        for method_match in re.finditer(method_pattern, interface_body, re.DOTALL):
            attributes_str = method_match.group(1)
            method_name = method_match.group(2)
            ordinal_str = method_match.group(3)
            params_str = method_match.group(4).strip()
            returns_str = method_match.group(5)
            
            # Skip false positives
            if method_name in ('TODO', 'NOTE', 'FIXME', 'DEPRECATED', 'If', 'For', 'While', 'Switch', 'const', 'enum', 'struct', 'union'):
                continue

            # Check EnableIf
            if not check_enable_if(attributes_str):
                continue
            
            params = parse_params(params_str) if params_str else []
            # returns_str might be None if no => present, or empty string if => ()
            returns = parse_params(returns_str) if (returns_str is not None and returns_str.strip()) else ([] if returns_str is not None else None)
            
            methods.append({
                'name': method_name,
                'ordinal': int(ordinal_str) if ordinal_str else None,
                'params': params,
                'returns': returns,
                'is_one_way': returns is None
            })
        
        # Deduplicate methods
        seen = set()
        unique_methods = []
        for m in methods:
            if m['name'] not in seen:
                seen.add(m['name'])
                unique_methods.append(m)
        
        result['interfaces'].append({
            'name': interface_name,
            'methods': unique_methods
        })

    # Extract enums (handle both defined { ... } and native/forward declared ;)
    # Also handle [EnableIf=...] attributes
    enum_pattern = r'(?:\[([^\]]+)\]\s*)?enum\s+(\w+)\s*(?:\{([^}]*)\}|;)'
    for match in re.finditer(enum_pattern, content_no_comments, re.DOTALL):
        attributes = match.group(1)
        enum_name = match.group(2)
        enum_body = match.group(3)
        
        # Check EnableIf/EnableIfNot conditions
        if not check_enable_if(attributes):
            continue
            
        values = []
        
        if enum_body:
            for line in enum_body.split(','):
                line = line.strip()
                if line:
                    # Match name and optional value
                    val_match = re.search(r'([a-zA-Z_]\w*)(?:\s*=\s*(.*?))?$', line)
                    if val_match:
                        v_name = val_match.group(1)
                        v_val = val_match.group(2).strip() if val_match.group(2) else None
                        values.append({'name': v_name, 'value': v_val})
        
        # If native/empty, values is empty list, which is fine (treated as integer/opaque)
        result['enums'].append({'name': enum_name, 'values': values})

    # Extract structs (regular and native ;)
    # Fix: Use manual brace counting to handle nested enums/structs correctly
    
    # Universal Fix 4.0: Parse Native/Forward-Declared Structs (e.g. "[Stable] struct Foo;")
    # Also handle [EnableIf=...] attributes
    native_struct_pattern = r'(?:\[([^\]]+)\]\s*)?struct\s+(\w+)\s*;'
    for match in re.finditer(native_struct_pattern, content_no_comments):
        attributes = match.group(1)
        struct_name = match.group(2)
        
        # Check EnableIf/EnableIfNot conditions
        if not check_enable_if(attributes):
            continue
            
        # Add as empty struct (opaque handle/native type behavior)
        result['structs'].append({'name': struct_name, 'fields': []})

    # Regular structs with bodies - also handle [EnableIf=...] attributes
    struct_start_pattern = r'(?:\[([^\]]+)\]\s*)?struct\s+(\w+)[^{]*\{'
    for match in re.finditer(struct_start_pattern, content_no_comments):
        attributes = match.group(1)
        struct_name = match.group(2)
        
        # Check EnableIf/EnableIfNot conditions
        if not check_enable_if(attributes):
            continue
            
        start_pos = match.end()
        
        brace_count = 1
        end_pos = start_pos
        while brace_count > 0 and end_pos < len(content_no_comments):
            if content_no_comments[end_pos] == '{':
                brace_count += 1
            elif content_no_comments[end_pos] == '}':
                brace_count -= 1
            end_pos += 1
        
        struct_body = content_no_comments[start_pos:end_pos-1]
        
        # Remove nested definitions and constants from body before parsing fields
        # We don't need to parse them recursively here, just ignore them for field parsing
        body_clean = struct_body
        while True:
            nested_match = re.search(r'(?:enum|struct|union)\s+\w+\s*\{[^{}]*\}|const\s+[\w\.]+\s+\w+\s*=[^;]+;', body_clean)
            if not nested_match: break
            # Replace with empty string or semicolon to maintain separation
            body_clean = body_clean[:nested_match.start()] + ";" + body_clean[nested_match.end():]
        
        # Also handle natives which don't have body (regex for native not needed if we iterate headers)
        
        fields = parse_params(body_clean) if body_clean else []
        result['structs'].append({'name': struct_name, 'fields': fields})

    # Extract constants (module level and interface level, with attribute support)
    # Pattern matches: [Attributes] const Type Name = Value;
    const_pattern = r'(?:\[([^\]]+)\]\s*)?const\s+([\w\.]+)\s+(\w+)\s*=\s*([^;]+);'
    for match in re.finditer(const_pattern, content_no_comments):
        attributes = match.group(1)
        c_type = match.group(2)
        c_name = match.group(3)
        c_value = match.group(4).strip()
        
        # Check EnableIf/EnableIfNot conditions using unified function
        if check_enable_if(attributes):
            result['constants'].append({'name': c_name, 'type': c_type, 'value': c_value})

    # Extract unions (regular and native ;)
    # Also handle [EnableIf=...] attributes
    union_pattern = r'(?:\[([^\]]+)\]\s*)?union\s+(\w+)\s*(?:\{([^}]*)\}|;)'
    for match in re.finditer(union_pattern, content_no_comments, re.DOTALL):
        attributes = match.group(1)
        union_name = match.group(2)
        union_body = match.group(3)
        
        # Check EnableIf/EnableIfNot conditions
        if not check_enable_if(attributes):
            continue
            
        fields = parse_params(union_body) if union_body else []
        # Unions in Mojo have ordinals, often explicit. parse_params handles basic "Type Name".
        # We need to ensure ordinals are parsed if possible, or auto-assigned.
        # For now, simple parsing is enough as we reuse parse_params.
        result['unions'].append({'name': union_name, 'fields': fields})

    return result

def parse_params(params_str):
    """Parse parameter string into list of param objects."""
    if not params_str:
        return []
    
    params = []
    depth = 0
    current = ""
    for char in params_str:
        if char in '<([':
            depth += 1
        elif char in '>)]':
            depth -= 1
        elif (char == ',' or char == ';') and depth == 0:
            if current.strip():
                p = parse_single_param(current.strip())
                if p:
                    params.append(p)
            current = ""
            continue
        current += char
    
    if current.strip():
        p = parse_single_param(current.strip())
        if p:
            params.append(p)
                
    return params

def parse_single_param(param_str):
    """Parse a single parameter like '[EnableIf=is_win] string name'."""
    param_str = param_str.strip()
    if not param_str:
        return None
    
    # 1. Remove comments
    param_str = re.sub(r'//.*$', '', param_str, flags=re.MULTILINE).strip()
    
    # 2. Extract and check ALL attribute blocks
    attribute_blocks = re.findall(r'\[([^\]]+)\]', param_str)
    for attr_content in attribute_blocks:
        if not check_enable_if(attr_content):
            return None # Skip this field entirely
            
    # 3. Strip all attribute blocks from the string for further parsing
    param_str = re.sub(r'\[[^\]]+\]', '', param_str).strip()
    
    # 4. Extract explicit ordinal (@123)
    ordinal = None
    ordinal_match = re.search(r'@(\d+)', param_str)
    if ordinal_match:
        ordinal = int(ordinal_match.group(1))
        param_str = re.sub(r'@\d+', '', param_str).strip()
    
    # 5. Extract default value (= value)
    default_value = None
    if '=' in param_str:
        parts = param_str.split('=', 1)
        param_str = parts[0].strip()
        default_value = parts[1].strip().rstrip(';').strip()
    
    # 6. Detect optionality
    optional = '?' in param_str
    param_str = param_str.replace('?', '').strip()
    
    # 7. Parse Type and Name
    if param_str.endswith('&'):
        param_str = f"pending_receiver<{param_str[:-1].strip()}>"
        
    # Handle types with spaces like 'handle<data_pipe_producer>'
    # Strategy: find the last segment which is the name
    param_str = param_str.strip()
    if not param_str: return None
    
    # Check for name after closing bracket/brace/parens
    # e.g. "array<uint8> data" or "handle<data_pipe_producer> pipe"
    last_space_idx = -1
    depth = 0
    for i, char in enumerate(param_str):
        if char in '<([': depth += 1
        elif char in '>)]': depth -= 1
        elif char == ' ' and depth == 0:
            last_space_idx = i
            
    if last_space_idx != -1:
        param_type = param_str[:last_space_idx].strip()
        raw_name = param_str[last_space_idx+1:].strip().rstrip(';')
        param_name = raw_name if raw_name.startswith('arg_') else "arg_" + raw_name
    else:
        param_type = param_str.rstrip(';')
        param_name = "arg_val"
    
    # MinVersion was handled in the attribute loop
    min_version = 0 
    
    return {
        'type': param_type, 
        'name': param_name, 
        'optional': optional, 
        'ordinal': ordinal, 
        'min_version': min_version, 
        'default_value': default_value
    }

def to_camel_case(name):
    """Convert PascalCase to camelCase."""
    if name and name[0].isupper():
        return name[0].lower() + name[1:]
    components = name.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

def mojo_type_map(mojom_type):
    """Map mojom types to mojo.internal types."""
    type_clean = mojom_type.replace('?', '').strip()
    
    # Check for arrays
    if type_clean.startswith('array<'):
        return 'mojo.internal.Array'
    
    # Check for maps
    if type_clean.startswith('map<'):
        return 'mojo.internal.Map'
    
    # Check for pending_receiver/pending_remote
    if type_clean.startswith('pending_receiver<'):
        return 'mojo.internal.InterfaceRequest'
    if type_clean.startswith('pending_remote<'):
        return 'mojo.internal.InterfaceProxy'
    if type_clean.startswith('pending_associated_receiver<'):
        return 'mojo.internal.AssociatedInterfaceRequest'
    if type_clean.startswith('pending_associated_remote<'):
        return 'mojo.internal.AssociatedInterfaceProxy'
    
    # Check for raw handles with types
    if type_clean.startswith('handle<'):
        if 'data_pipe_producer' in type_clean: return 'mojo.internal.Handle'
        if 'data_pipe_consumer' in type_clean: return 'mojo.internal.Handle'
        if 'message_pipe' in type_clean: return 'mojo.internal.Handle'
        return 'mojo.internal.Handle'
    
    # Look up in type map
    if type_clean in TYPE_MAPPING:
        return TYPE_MAPPING[type_clean]
    
    # For unknown types (likely structs/enums), default to pointer
    return 'mojo.internal.OpaqueStruct'


def generate_js_binding(parsed, global_kind_map={}, file_to_module={}):
    """Generate JavaScript binding code that works with the Mojo runtime."""
    if not parsed or not parsed.get('module'):
        return None
    
    module = parsed['module']
    current_ns = module # Used for local references
    module_parts = module.split('.') # Used for namespace generation
    
    # Build set of valid types for this module
    valid_types = set()
    for s in parsed.get('structs', []): valid_types.add(s['name'])
    for e in parsed.get('enums', []): valid_types.add(e['name'])
    for i in parsed.get('interfaces', []): valid_types.add(i['name'])
    
    # Track external type references for stub generation
    external_type_refs = set()  # (module, type_name, kind)
    
    imports = parsed.get('imports', [])

    def find_type_module(name):
        # 1. Local?
        if name in valid_types:
            return module
        
        # 2. Check imports
        for imp in imports:
            imp_mod = file_to_module.get(imp)
            if not imp_mod:
                for k, v in file_to_module.items():
                   if k.endswith(imp):
                       imp_mod = v
                       break
            
            if imp_mod:
                fqn = f"{imp_mod}.{name}"
                if fqn in global_kind_map:
                    return imp_mod
        
        # 3. Global FQN match (if name itself is a FQN)?
        if name in global_kind_map:
            # Name is already fully qualified, return its module part
            return '.'.join(name.split('.')[:-1])
        
        # 4. Check all modules in global_kind_map for this name (Aggressive fallback)
        # This handles cases where imports might be missing or unresolved
        for fqn, kind in global_kind_map.items():
            if fqn.endswith(f".{name}"):
                return '.'.join(fqn.split('.')[:-1])

        return None

    def resolve_mojo_type(type_name):
        # Recursive parsing for complex types (Array/Map)
        type_name = type_name.strip().replace('\n', ' ')
        # Normalize whitespace
        type_name = ' '.join(type_name.split())
        
        if not type_name or any(c in type_name for c in '(),'):
             # If it's not a known container and has junk, it's a failed parse
             if not (type_name.startswith('array<') or type_name.startswith('map<') or 
                     type_name.startswith('pending_') or type_name.startswith('handle<')):
                 return 'mojo.internal.OpaqueStruct'

        if type_name.startswith('array<'):
            is_nullable = False
            if type_name.endswith('?'):
                is_nullable = True
                type_name = type_name[:-1].strip()
            
            inner = type_name[6:-1].strip()
            # Parsing logic for comma...
            depth = 0; comma_idx = -1
            for i, char in enumerate(inner):
                if char == '<': depth += 1
                elif char == '>': depth -= 1
                elif char == ',' and depth == 0:
                    comma_idx = i; break
            
            if comma_idx != -1: inner = inner[:comma_idx].strip()
            return f"mojo.internal.Array({resolve_mojo_type(inner)}, {'true' if is_nullable else 'false'})"

        if type_name.startswith('map<'):
            is_nullable = False
            if type_name.endswith('?'):
                is_nullable = True
                type_name = type_name[:-1].strip()
            content = type_name[4:-1].strip()
            depth = 0; comma_idx = -1
            for i, char in enumerate(content):
                if char == '<': depth += 1
                elif char == '>': depth -= 1
                elif char == ',' and depth == 0:
                    comma_idx = i; break
            
            if comma_idx != -1:
                key_type = content[:comma_idx].strip()
                val_type = content[comma_idx+1:].strip()
                return f"mojo.internal.Map({resolve_mojo_type(key_type)}, {resolve_mojo_type(val_type)}, {'true' if is_nullable else 'false'})"
            return 'mojo.internal.Map'

        # Basic types
        if type_name in TYPE_MAPPING:
             return TYPE_MAPPING[type_name]
        
        # Raw Handles
        if type_name.startswith('handle<'):
            return 'mojo.internal.Handle'
        
        # Pending Types
        if type_name.startswith('pending_remote<'):
            inner = type_name[15:-1].strip()
            return f"mojo.internal.InterfaceProxy({resolve_mojo_type_raw(inner)})"
        if type_name.startswith('pending_receiver<'):
            inner = type_name[17:-1].strip()
            return f"mojo.internal.InterfaceRequest({resolve_mojo_type_raw(inner, interface_suffix='PendingReceiver')})"
        
        if type_name.startswith('pending_associated_remote<'):
            inner = type_name[26:-1].strip()
            return f"mojo.internal.AssociatedInterfaceProxy({resolve_mojo_type_raw(inner)})"

        if type_name.startswith('pending_associated_receiver<'):
            inner = type_name[28:-1].strip()
            return f"mojo.internal.AssociatedInterfaceRequest({resolve_mojo_type_raw(inner, interface_suffix='PendingReceiver')})"
        
        # Check local types or imports
        clean_name = type_name.replace('?', '').strip()

        # Universal Fix 3.0: Scoped Local Type Resolution
        # Handle cases like "InterestGroup.ExecutionMode" where "ExecutionMode" is a local Enum/Struct.
        # Since MojoJS flattens definitions, we should check if the leaf name is valid locally.
        if '.' in clean_name:
            leaf_name = clean_name.split('.')[-1]
            if leaf_name in valid_types:
                # It's a local type referenced with scope!
                fqn = f"{module}.{leaf_name}"
                if global_kind_map.get(fqn) == 'interface':
                     return f"{current_ns}.{leaf_name}Remote"
                return f"{current_ns}.{leaf_name}Spec"
        
        # Explicit FQN?
        if '.' in clean_name and not clean_name.startswith('mojo.'):
            # Validate FQN module
            parts = clean_name.split('.')
            iface_name = parts[-1]
            mod_prefix = '.'.join(parts[:-1])
            
            kind = global_kind_map.get(clean_name)
            suffix = 'Spec'
            if kind == 'interface': suffix = 'Remote'
            
            res_type = f"mojo.internal.bindings.{mod_prefix}.{iface_name}{suffix}"
            
            # Track external reference for stub generation
            if mod_prefix != module or iface_name not in valid_types:
                external_type_refs.add((mod_prefix, iface_name, kind or 'struct'))
            
            if kind == 'interface': return f"mojo.internal.InterfaceProxy({res_type})"
            return res_type

        # Unqualified name - Find Module
        target_mod = find_type_module(clean_name)
        if target_mod:
            fqn = f"{target_mod}.{clean_name}"
            kind = global_kind_map.get(fqn)
            
            suffix = 'Spec'
            if kind == 'interface': suffix = 'Remote'
            
            res_type = f"mojo.internal.bindings.{target_mod}.{clean_name}{suffix}"
            
            # Track external reference for stub generation
            if target_mod != module or clean_name not in valid_types:
                external_type_refs.add((target_mod, clean_name, kind or 'struct'))
            
            if kind == 'interface': return f"mojo.internal.InterfaceProxy({res_type})"
            return res_type
        
        # Fallback heuristic - unknown type, assume it's external
        if clean_name and clean_name[0].isupper():
            # Track as potential external for stub generation
            # We don't know the module, so guess current module or use fallback
            external_type_refs.add((module, clean_name, 'struct'))
            ns = current_ns
            if not ns.startswith('mojo.internal.bindings'):
                 ns = f"mojo.internal.bindings.{module}"
            # Return spec reference (will be stubbed if not defined)
            return f"{ns}.{clean_name}Spec"

        return 'mojo.internal.OpaqueStruct'

    def resolve_mojo_type_raw(type_name, interface_suffix='Remote'):
        """Helper to get the raw Spec/Remote name without Proxy/Request wrappers."""
        type_name = type_name.strip()
        clean_name = type_name.replace('?', '').strip()
        
        # Basics
        if type_name in TYPE_MAPPING: return TYPE_MAPPING[type_name]
        
        # Explicit FQN?
        if '.' in clean_name and not clean_name.startswith('mojo.'):
            parts = clean_name.split('.')
            iface_name = parts[-1]
            mod_prefix = '.'.join(parts[:-1])
            
            kind = global_kind_map.get(clean_name)
            suffix = 'Spec'
            kind = global_kind_map.get(clean_name)
            suffix = 'Spec'
            if kind == 'interface': suffix = interface_suffix
            
            # Track external reference for stub generation
            if mod_prefix != module or iface_name not in valid_types:
                external_type_refs.add((mod_prefix, iface_name, kind or 'struct'))
            
            return f"mojo.internal.bindings.{mod_prefix}.{iface_name}{suffix}"

        # Local or Imported
        if clean_name in valid_types:
            # Wait, if it's an interface locally, we need Remote.
            # But valid_types set doesn't store kind.
            # However, global_kind_map does!
            fqn = f"{module}.{clean_name}"
            if global_kind_map.get(fqn) == 'interface':
                return f"{current_ns}.{clean_name}{interface_suffix}"
            return f"{current_ns}.{clean_name}Spec"

        # Unqualified name - Find Module
        target_mod = find_type_module(clean_name)
        if target_mod:
            fqn = f"{target_mod}.{clean_name}"
            kind = global_kind_map.get(fqn)
            suffix = 'Spec'
            if kind == 'interface': suffix = interface_suffix
            # Track external reference
            if target_mod != module or clean_name not in valid_types:
                external_type_refs.add((target_mod, clean_name, kind or 'struct'))
            return f"mojo.internal.bindings.{target_mod}.{clean_name}{suffix}"

        # Fallback heuristic
        if clean_name and clean_name[0].isupper():
             external_type_refs.add((module, clean_name, 'struct'))
             return f"{current_ns}.{clean_name}Spec"

        return 'mojo.internal.OpaqueStruct'

    def get_struct_layout(params):
        """Calculate field offsets and size using Mojo's Best Fit algorithm."""
        
        # 1. Expand Nullable Primitives (int32? -> bool + int32)
        expanded_params = []
        ordinal_counter = 0
        
        for param in params:
            if not param or not param.get('name'): continue
            
            p_type = resolve_mojo_type(param.get('type', 'string'))
            is_nullable = param.get('optional') or '?' in param.get('type', '')
            ordinal = param.get('ordinal')
            if ordinal is None:
                ordinal = ordinal_counter
            ordinal_counter = ordinal + 1
            min_version = param.get('min_version', 0)
            
            # Check if this is a nullable primitive (not pointer/handle)
            is_pointer = p_type == 'mojo.internal.String' or p_type.startswith('mojo.internal.Array') or p_type.startswith('mojo.internal.Map') or p_type.endswith('Spec') or p_type.startswith('mojo.internal.Interface')
            # Handle/Encoding types are 4 bytes but treated as opaque
            
            # Simplification: If it's a primitive number/bool and nullable, split it.
            is_primitive = p_type in ('mojo.internal.Bool', 'mojo.internal.Int8', 'mojo.internal.Uint8', 'mojo.internal.Int16', 'mojo.internal.Uint16', 'mojo.internal.Int32', 'mojo.internal.Uint32', 'mojo.internal.Int64', 'mojo.internal.Uint64', 'mojo.internal.Float', 'mojo.internal.Double')
            
            if is_nullable and is_primitive:
                # Split!
                # 1. HasValue (Bool)
                expanded_params.append({
                    'name': f"{param['name']}_$flag",
                    'type': 'mojo.internal.Bool',
                    'original_name': param['name'],
                    'original_type': p_type,
                    'is_flag': True,
                    'ordinal': ordinal,
                    'sub_ordinal': 0,
                    'min_version': min_version,
                    'nullable': False # The flag itself is not nullable
                })
                # 2. Value (Primitive, Un-nullable kind)
                expanded_params.append({
                    'name': f"{param['name']}_$value",
                    'type': p_type,
                    'original_name': param['name'],
                    'is_value': True,
                    'ordinal': ordinal,
                    'sub_ordinal': 1,
                    'min_version': min_version,
                    'nullable': False # The value storage is not nullable
                })
            else:
                # Normal field
                expanded_params.append({
                    'name': param['name'],
                    'type': p_type,
                    'original_name': param['name'],
                    'ordinal': ordinal,
                    'sub_ordinal': 0,
                    'min_version': min_version,
                    'nullable': is_nullable,
                    'default_value': param.get('default_value')
                })
        
        # 2. Sort by Ordinal (Temporary, will resort by size for packing)
        expanded_params.sort(key=lambda x: (x['ordinal'], x['sub_ordinal']))
        
        # 3. Best Fit Algorithm: Sort by Version -> Size (desc) -> Ordinal
        
        def get_size_alignment(p_type):
            if p_type == 'mojo.internal.Bool': return 1, 1 # Bit packed later
            if p_type in ('mojo.internal.Int8', 'mojo.internal.Uint8'): return 1, 1
            if p_type in ('mojo.internal.Int16', 'mojo.internal.Uint16'): return 2, 2
            if p_type in ('mojo.internal.Int32', 'mojo.internal.Uint32', 'mojo.internal.Float', 'mojo.internal.Handle'): return 4, 4
            if p_type in ('mojo.internal.Int64', 'mojo.internal.Uint64', 'mojo.internal.Double'): return 8, 8
            
            # Interface Requests (Receivers) are just handles (4 bytes)
            if 'InterfaceRequest' in p_type or 'AssociatedInterfaceRequest' in p_type: return 4, 4
            
            # Interface Proxies (Remotes) are Handle+Version (8 bytes), but Alignment is 4 (2x uint32)
            if 'Interface' in p_type: return 8, 4
            
            # Pointers (Structs, Arrays, Maps, Unions)
            # Fix: Strip mojo.internal.bindings prefix to match global_kind_map keys
            # Fix: Only strip Spec if it is a suffix
            spec_name = p_type.replace('mojo.internal.bindings.', '')
            if spec_name.endswith('Spec'):
                spec_name = spec_name[:-4]
            kind = global_kind_map.get(spec_name)
            if kind == 'enum': return 4, 4
            if kind == 'union': return 16, 8
            return 8, 8
        
        def get_pad(offset, alignment):
            return (alignment - (offset % alignment)) % alignment

        if not expanded_params:
            return [], 8, "[[0, 8]]"
            
        # Pre-calculate size/align for sorting
        for p in expanded_params:
            s, a = get_size_alignment(p['type'])
            p['size'] = s
            p['alignment'] = a

        # Sort: Ordinal (asc), SubOrdinal (asc) - Standard Mojo input order
        expanded_params.sort(key=lambda x: (x.get('ordinal', 0), x.get('sub_ordinal', 0)))
        
        packed_fields = []
        if expanded_params:
            # 1. Place first field at offset 0
            first = expanded_params[0]
            first['offset'] = 0
            first['bit'] = 0
            packed_fields.append(first)
            
            # 2. Pack remaining fields into holes or append
            for p in expanded_params[1:]:
                inserted = False
                
                # Try to insert into holes between existing packed fields
                last = packed_fields[0]
                for i in range(1, len(packed_fields)):
                    next_f = packed_fields[i]
                    
                    # Calculate candidate offset if placed after 'last'
                    cand_offset = -1
                    cand_bit = 0
                    
                    if p['type'] == 'mojo.internal.Bool' and last['type'] == 'mojo.internal.Bool' and last['bit'] < 7:
                        cand_offset = last['offset']
                        cand_bit = last['bit'] + 1
                    else:
                        # Align
                        start = last['offset'] + last['size']
                        pad = get_pad(start, p['alignment'])
                        cand_offset = start + pad
                        cand_bit = 0
                    
                    # Check if it fits before next_f
                    if cand_offset + p['size'] <= next_f['offset']:
                        p['offset'] = cand_offset
                        p['bit'] = cand_bit
                        packed_fields.insert(i, p)
                        inserted = True
                        break
                    
                    last = next_f
                    
                if not inserted:
                    # Append to end
                    last = packed_fields[-1]
                    if p['type'] == 'mojo.internal.Bool' and last['type'] == 'mojo.internal.Bool' and last['bit'] < 7:
                        p['offset'] = last['offset']
                        p['bit'] = last['bit'] + 1
                    else:
                        start = last['offset'] + last['size']
                        pad = get_pad(start, p['alignment'])
                        p['offset'] = start + pad
                        p['bit'] = 0
                    packed_fields.append(p)
        
        # Generate JavaScript Argument Lists for StructField
        fields_code = []
        for f in packed_fields:
            # Map default value
            raw_def = f.get('default_value')
            p_type = f['type']
            
            if raw_def is None:
                js_def = "null"
                if p_type == 'mojo.internal.Bool': js_def = "false"
                elif p_type in ('mojo.internal.Int8', 'mojo.internal.Uint8', 'mojo.internal.Int16', 'mojo.internal.Uint16', 'mojo.internal.Int32', 'mojo.internal.Uint32', 'mojo.internal.Int64', 'mojo.internal.Uint64', 'mojo.internal.Float', 'mojo.internal.Double'):
                    js_def = "0"
            else:
                if p_type == 'mojo.internal.Bool':
                    js_def = "true" if raw_def == "true" else "false"
                elif "INFINITY" in raw_def:
                    js_def = "Infinity"
                elif "NAN" in raw_def:
                    js_def = "NaN"
                elif raw_def.startswith('0x'):
                    js_def = str(int(raw_def, 16))
                else:
                     # Check if it's a number literal
                     try:
                         float(raw_def)
                         js_def = raw_def
                     except:
                         # Reference handles (like kLevel) or other literals
                         js_def = "0" 
            
            # Nullable props
            props_js = "undefined"
            if f.get('is_flag'):
                props_js = f"{{ isPrimary: true, linkedValueFieldName: '{f['original_name']}_$value', originalFieldName: '{f['original_name']}' }}"
            elif f.get('is_value'):
                props_js = f"{{ isPrimary: false, linkedValueFieldName: '{f['original_name']}_$flag', originalFieldName: '{f['original_name']}' }}"

            arg_list = [
                f"'{f['name']}'",
                f"{f['offset']}",
                f"{f['bit']}",
                f"{p_type}",
                js_def,
                "true" if f.get('nullable') else "false",
                f"{f['min_version']}",
                props_js
            ]
            fields_code.append(", ".join(arg_list))
        
        # 5. Calculate Versions
        sorted_fields_for_versions = sorted(packed_fields, key=lambda x: (x['min_version'], x['offset']))
        versions = []
        current_version = -1
        current_max_offset = 0
        
        # Ensure version 0 is always present
        versions.append([0, 8]) 
        
        for field in sorted_fields_for_versions:
            field_ver = field.get('min_version', 0)
            field_end_offset = field['offset'] + field['size']
            
            if field_ver > current_version:
                if current_version != -1:
                    aligned_max_offset = (current_max_offset + 7) // 8 * 8
                    versions[-1][1] = 8 + aligned_max_offset
                
                versions.append([field_ver, 0])
                current_version = field_ver
                current_max_offset = field_end_offset
            else:
                if field_end_offset > current_max_offset:
                    current_max_offset = field_end_offset
        
        if versions:
            aligned_max_offset = (current_max_offset + 7) // 8 * 8
            versions[-1][1] = 8 + aligned_max_offset
        
        if len(versions) > 1 and versions[0][0] == 0 and versions[1][0] == 0:
            versions.pop(0)
        
        if not sorted_fields_for_versions and not versions:
            versions = [[0, 8]]
        
        versions_code = "[" + ", ".join([f"[{v[0]}, {v[1]}]" for v in versions]) + "]"
        packed_size = versions[-1][1] if versions else 8
        
        return fields_code, packed_size, versions_code

    
    # Serialize the per-interface scramble map for JavaScript
    scramble_map_json = json.dumps(INTERFACE_SCRAMBLE_MAP)
    
    # Build namespace chain
    js_code = f'''// Auto-generated MojoJS binding
 // Source: {parsed['path']}
 // Module: {module}

 'use strict';
 (function() {{
   const SHA256 = (s) => {{
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {{
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {{
         if (j < 16) w[j] = b[i + j];
         else {{
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }}
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }}
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }}
     return h[0];
   }};
    window.mojoScrambler = window.mojoScrambler || {{
      // Per-interface scramble map (generated from BUILD.gn analysis)
      _interfaceScrambleMap: {scramble_map_json},
      // Lazy cache: keyed by "version|ifaceName"
      _ordinalCache: {{}},
      _lastVersion: null,
      getOrdinals: function(ifaceName, methodSpecs) {{
        const params = new URLSearchParams(window.location.search);
        const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
        
        // Check per-interface setting from BUILD.gn
        const shouldScramble = this._interfaceScrambleMap[ifaceName];
        if (shouldScramble === false || forceNoScramble) {{
          // No scrambling: use explicit ordinals or sequential index
          return methodSpecs.map((ms, idx) => ms.explicit !== null ? ms.explicit : idx);
        }}
        
        // Get current version (may change after async detection)
        const versionStr = window.mojoVersion || '{FALLBACK_VERSION_STRING}';
        
        // Invalidate cache if version changed
        if (this._lastVersion !== versionStr) {{
          this._ordinalCache = {{}};
          this._lastVersion = versionStr;
        }}
        
        // Check cache
        const cacheKey = ifaceName;
        if (this._ordinalCache[cacheKey]) {{
          return this._ordinalCache[cacheKey];
        }}
        
        // Scrambling enabled: use SHA256 hash
        const p = versionStr.split('.');
        const salt = 'MAJOR=' + p[0] + '\\n' + 'MINOR=' + (p[1]||0) + '\\n' + 'BUILD=' + (p[2]||0) + '\\n' + 'PATCH=' + (p[3]||0) + '\\n';
        const shortName = ifaceName.split('.').pop();
        
        const seen = new Set();
        methodSpecs.forEach(ms => {{ if (ms.explicit !== null) seen.add(ms.explicit); }});
        let i = 0;
        const ordinals = methodSpecs.map((ms, idx) => {{
          if (ms.explicit !== null) return ms.explicit;
          while (true) {{
            i++;
            const h0 = SHA256(salt + shortName + i);
            const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
            if (!seen.has(ord)) {{
              seen.add(ord);
              return ord;
            }}
          }}
        }});
        
        // Cache the result
        this._ordinalCache[cacheKey] = ordinals;
        return ordinals;
      }}
    }};
  }})();

 // Module namespace
 var mojo = mojo || {{}};
 mojo.internal = mojo.internal || {{}};
 mojo.internal.bindings = mojo.internal.bindings || {{}};
 
 // Fallback opaque struct type for unknown external types
 mojo.internal.OpaqueStruct = mojo.internal.OpaqueStruct || {{
   $: {{
     structSpec: {{ name: 'OpaqueStruct', packedSize: 8, fields: [], versions: [{{version: 0, packedSize: 8}}] }},
     encode: function(value, encoder, byteOffset, bitOffset, nullable) {{
       if (value !== null && value !== undefined) {{
         console.warn('[MojoJS] Encoding OpaqueStruct! Field may be missing its real spec.', value);
       }}
       encoder.encodeOffset(byteOffset, 0);
     }},
     encodeNull: function(encoder, byteOffset) {{ }},
     decode: function(decoder, byteOffset, bitOffset, nullable) {{
       try {{
         const offset = decoder.decodeOffset(byteOffset);
         return offset ? {{ _opaqueOffset: offset }} : null;
       }} catch (e) {{
         return null;
       }}
     }},
     arrayElementSize: nullable => 8,
     isValidObjectKeyType: false,
   }}
 }};

 '''
     
    current_ns = "mojo.internal.bindings"
    for part in module_parts:
        js_code += f"{current_ns}.{part} = {current_ns}.{part} || {{}};\n"
        current_ns += f".{part}"
    
    # Declare external namespaces from imports (dynamic)
    declared_roots = set()
    # Add current module root to avoid redeclaration or logic error
    declared_roots.add(module_parts[0])
    
    # Ensure mojo_base is always available
    js_code += "mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};\n"
    js_code += "mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};\n"
    declared_roots.add('mojo_base')
    
    for imp in parsed.get('imports', []):
        mod = None
        # Try exact path match
        if imp in file_to_module:
            mod = file_to_module[imp]
        else:
            # Try suffix match
            for k, v in file_to_module.items():
                if k.endswith(imp):
                    mod = v
                    break
        
        if mod:
            root = mod.split('.')[0]
            if root not in declared_roots:
                js_code += f"mojo.internal.bindings.{root} = mojo.internal.bindings.{root} || {{}};\n"
                declared_roots.add(root)
        else:
             # Fallback heuristic for standard libraries if not in file list
             parts = imp.split('/')
             roots = ['blink', 'ui', 'gfx', 'skia', 'url', 'content', 'ash', 'chromeos', 'components', 'services', 'network', 'media', 'webview']
             for r in roots:
                 if r in parts and r not in declared_roots:
                     js_code += f"mojo.internal.bindings.{r} = mojo.internal.bindings.{r} || {{}};\n"
                     declared_roots.add(r)
    
    js_code += "\n"
    
    # Pre-declare all Spec objects to handle circular dependencies
    for enum in parsed.get('enums', []):
        full_name = f"{current_ns}.{enum['name']}Spec"
        js_code += f"{full_name} = {full_name} || {{ $: mojo.internal.Enum().$ }};\n"
    for union in parsed.get('unions', []):
        full_name = f"{current_ns}.{union['name']}Spec"
        js_code += f"{full_name} = {full_name} || {{ $: {{}} }};\n"
        js_code += f"if ({full_name}.$.structSpec && {full_name}.$.structSpec.name === 'OpaqueStruct') {full_name}.$ = {{}};\n"
    for struct in parsed.get('structs', []):
        full_name = f"{current_ns}.{struct['name']}Spec"
        js_code += f"{full_name} = {full_name} || {{ $: {{}} }};\n"
        js_code += f"if ({full_name}.$.structSpec && {full_name}.$.structSpec.name === 'OpaqueStruct') {full_name}.$ = {{}};\n"
    for interface in parsed.get('interfaces', []):
        iface_name = interface['name']
        full_name = f"{current_ns}.{iface_name}"
        js_code += f"{full_name} = {full_name} || {{}};\n"
        js_code += f"{full_name}Spec = {full_name}Spec || {{ $ : {{}} }};\n"
        js_code += f"if ({full_name}Spec.$.structSpec && {full_name}Spec.$.structSpec.name === 'OpaqueStruct') {full_name}Spec.$ = {{}};\n"
        js_code += f"{full_name}.$interfaceName = '{module}.{iface_name}';\n"
        for method in interface.get('methods', []):
            p_spec = f"{full_name}_{method['name']}_ParamsSpec"
            js_code += f"{p_spec} = {p_spec} || {{ $: {{}} }};\n"
            js_code += f"if ({p_spec}.$.structSpec && {p_spec}.$.structSpec.name === 'OpaqueStruct') {p_spec}.$ = {{}};\n"
            if not method.get('is_one_way'):
                r_spec = f"{full_name}_{method['name']}_ResponseParamsSpec"
                js_code += f"{r_spec} = {r_spec} || {{ $: {{}} }};\n"
                js_code += f"if ({r_spec}.$.structSpec && {r_spec}.$.structSpec.name === 'OpaqueStruct') {r_spec}.$ = {{}};\n"

    # Pre-process structs, unions, interfaces to collect external type refs
    # We call resolve_mojo_type on all fields to populate external_type_refs
    for struct in parsed.get('structs', []):
        for field in struct.get('fields', []):
            if field and field.get('type'):
                resolve_mojo_type(field['type'])
    for union in parsed.get('unions', []):
        for field in union.get('fields', []):
            if field and field.get('type'):
                resolve_mojo_type(field['type'])
    for interface in parsed.get('interfaces', []):
        for method in interface.get('methods', []):
            for param in method.get('params', []):
                if param and param.get('type'):
                    resolve_mojo_type(param['type'])
            for ret in (method.get('returns') or []):
                if ret and ret.get('type'):
                    resolve_mojo_type(ret['type'])
    
    # Generate external type stubs with fallback decode
    if external_type_refs:
        js_code += "\n// External type stubs (from imports)\n"
        declared_externals = set()
        for (ext_mod, ext_name, ext_kind) in sorted(external_type_refs):
            # Build namespace chain for external module
            ext_ns = "mojo.internal.bindings"
            for part in ext_mod.split('.'):
                ext_ns += f".{part}"
            
            full_ext_name = f"{ext_ns}.{ext_name}Spec"
            if full_ext_name in declared_externals:
                continue
            declared_externals.add(full_ext_name)
            
            # Ensure namespace chain exists (all intermediate levels)
            ns_chain = "mojo.internal.bindings"
            for part in ext_mod.split('.'):
                ns_chain += f".{part}"
                js_code += f"{ns_chain} = {ns_chain} || {{}};\n"
            
            # Create stub with fallback to Pointer (has valid encode/decode)
            if ext_kind == 'enum':
                js_code += f"{full_ext_name} = {full_ext_name} || {{ $: mojo.internal.Enum().$ }};\n"
            else:
                js_code += f"{full_ext_name} = {full_ext_name} || {{ $: mojo.internal.OpaqueStruct.$ }};\n"
                
            # If it's an interface, we also need a Remote stub because InterfaceProxy expects a constructor
            if ext_kind == 'interface':
                remote_name = f"{ext_ns}.{ext_name}Remote"
                js_code += f"{remote_name} = {remote_name} || class {{}};\n"
                
                receiver_name = f"{ext_ns}.{ext_name}PendingReceiver"
                js_code += f"{receiver_name} = {receiver_name} || class {{ constructor(handle) {{ this.handle = handle; }} }};\n"

    # Buffer specs to append at the end (to avoid capturing undefined in InterfaceProxy)
    specs_code = ""

    # Generate constants
    for const in parsed.get('constants', []):
        val = str(const['value'])
        # Normalize whitespace (multi-line values)
        val = ' '.join(val.split())
        
        if not val:  # Skip empty values
            continue
            
        # Heuristic for FQN references
        if not val.startswith(('0x', "'", '"', 'true', 'false', '-')) and not val[0].isdigit() and val not in ('Infinity', 'NaN'):
            # Use regex to replace all occurrences of `mod.mojom.Type` with `mojo.internal.bindings.mod.mojom.Type`
            # This handles bitmasks like `A | B`
            val = re.sub(r'(?<!mojo\.internal\.bindings\.)([a-zA-Z0-9_]+\.mojom\.[a-zA-Z0-9_.]+)', r'mojo.internal.bindings.\1', val)
            
            # Handle local references if no dots/mojo/bindings after replacement
            if '.' not in val and ' ' not in val and not val.startswith('mojo'):
                 val = f"{current_ns}.{val}"
            elif '.' in val and '.mojom' not in val and not val.startswith('mojo'):
                 # Local Enum? MyEnum.VAL, but ensure it's not a float like -1.0
                 if not re.match(r'^-?\d+\.\d+$', val):
                     val = f"{current_ns}.{val}"

        js_code += f"\n{current_ns}.{const['name']} = {val};\n"

    # Generate enums
    for enum in parsed.get('enums', []):
        js_code += f"\n// Enum: {enum['name']}\n"
        js_code += f"{current_ns}.{enum['name']} = {{\n"
        last_val = -1
        for entry in enum['values']:
            v_name = entry['name']
            v_val = entry['value']
            if v_val is not None:
                try:
                    last_val = int(v_val, 0)
                except:
                    pass # Could be another constant reference, but we prefer literal
            else:
                last_val += 1
            js_code += f"  {v_name}: {last_val},\n"
        js_code += "};\n"
        # EnumSpec already pre-declared



    # Generate unions
    for union in parsed.get('unions', []):
        union_name = union['name']
        full_name = f"{current_ns}.{union_name}"
        
        specs_code += f"\n// Union: {union_name}\n"
        specs_code += f"mojo.internal.Union(\n"
        specs_code += f"    {full_name}Spec, '{module}.{union_name}', {{\n"
        
        for i, field in enumerate(union['fields']):
            f_type = resolve_mojo_type(field['type'])
            f_ordinal = field.get('ordinal', i) # Fallback to index if no ordinal
            if f_ordinal is None: f_ordinal = i
            
            f_nullable = 'true' if field.get('optional') or '?' in field.get('type', '') else 'false'
            specs_code += f"      '{field['name']}': {{\n"
            specs_code += f"        'ordinal': {f_ordinal},\n"
            specs_code += f"        'type': {f_type},\n"
            specs_code += f"        'nullable': {f_nullable},\n"
            specs_code += "      },\n"
            
        specs_code += "    });\n"

    # Generate structs
    for struct in parsed.get('structs', []):
        struct_name = struct['name']
        full_name = f"{current_ns}.{struct_name}"
        fields_code, packed_size, versions_code = get_struct_layout(struct.get('fields', []))
        
        specs_code += f"\n// Struct: {struct_name}\n"
        specs_code += f"mojo.internal.Struct(\n"
        specs_code += f"    {full_name}Spec, '{module}.{struct_name}', [\n"
        for field in fields_code:
            specs_code += f"      mojo.internal.StructField({field}),\n"
        specs_code += f"    ],\n"
        specs_code += f"    {versions_code});\n"
    
    # Generate interface classes with proper getRemote() method
    for interface in parsed.get('interfaces', []):
        iface_name = interface['name']
        full_name = f"{current_ns}.{iface_name}"
        interface_string = f"{module}.{iface_name}"
        
        # Interface object already pre-declared bit metadata added
        js_code += f"\n// Interface: {iface_name}\n"
        
        # Generate Method Structs (Params & Responses)
        for method in interface.get('methods', []):
            method_name = method['name']
            
            # Request Params
            params = method.get('params', [])
            param_struct_name = f"{iface_name}_{method_name}_Params"
            p_fields, p_size, p_versions = get_struct_layout(params)
            
            specs_code += f"mojo.internal.Struct(\n"
            specs_code += f"    {current_ns}.{param_struct_name}Spec, '{module}.{param_struct_name}', [\n"
            for field in p_fields:
                specs_code += f"      mojo.internal.StructField({field}),\n"
            specs_code += f"    ],\n"
            specs_code += f"    {p_versions});\n\n"

            # Response Params
            if not method.get('is_one_way'):
                resp_params = method.get('returns', [])
                resp_struct_name = f"{iface_name}_{method_name}_ResponseParams"
                r_fields, r_size, r_versions = get_struct_layout(resp_params)
                
                specs_code += f"mojo.internal.Struct(\n"
                specs_code += f"    {current_ns}.{resp_struct_name}Spec, '{module}.{resp_struct_name}', [\n"
                for field in r_fields:
                    specs_code += f"      mojo.internal.StructField({field}),\n"
                specs_code += f"    ],\n"
                specs_code += f"    {r_versions});\n\n"

        # Generate PendingReceiver class first (needed by Remote)
        js_code += f"{full_name}PendingReceiver = class {{\n"
        js_code += "  constructor(handle) {\n"
        js_code += "    this.handle = handle;\n"
        js_code += "    if (handle) {\n"
        js_code += "      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);\n"
        js_code += "    }\n"
        js_code += "  }\n"
        js_code += "};\n\n"
        
        # Generate Remote class with getRemote() static method
        js_code += f"{full_name}Remote = class {{\n"
        js_code += f"  static get $interfaceName() {{\n"
        js_code += f"    return '{interface_string}';\n"
        js_code += "  }\n\n"
        
        js_code += "  constructor(handle = undefined) {\n"
        js_code += "    this.__mojoHandle = handle;\n"
        js_code += f"    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(\n"
        js_code += f"      {full_name}PendingReceiver,\n"
        js_code += "      handle);\n"
        js_code += f"    this.$ = new {full_name}RemoteCallHandler(this.proxy);\n"
        js_code += "  }\n\n"
        
        js_code += "  bindNewPipeAndPassReceiver() {\n"
        js_code += "    return this.proxy.bindNewPipeAndPassReceiver();\n"
        js_code += "  }\n\n"
        
        js_code += "  close() {\n"
        js_code += "    this.proxy.close();\n"
        js_code += "  }\n"

        for method in interface.get('methods', []):
            method_name_camel = to_camel_case(method['name'])
            params_list = [p['name'] for p in method.get('params', []) if p and p.get('name')]
            params_str = ', '.join(params_list)
            js_code += f"  {method_name_camel}({params_str}) {{\n"
            js_code += f"    return this.$.{method_name_camel}({params_str});\n"
            js_code += "  }\n"

        js_code += "};\n\n"
        
        # Generate RemoteCallHandler with methods
        js_code += f"{full_name}RemoteCallHandler = class {{\n"
        js_code += "  constructor(proxy) {\n"
        js_code += "    this.proxy = proxy;\n"
        js_code += f"    this.ordinals = window.mojoScrambler.getOrdinals('{module}.{iface_name}', [\n"
        for method in interface.get('methods', []):
            ord_val = method.get('ordinal')
            js_code += f"      {{ explicit: {'null' if ord_val is None else ord_val} }},\n"
        js_code += "    ]);\n"
        js_code += "  }\n\n"
        
        for idx, method in enumerate(interface.get('methods', [])):
            params_list = [p['name'] for p in method.get('params', []) if p and p.get('name')]
            params_str = ', '.join(params_list)
            method_name_camel = to_camel_case(method['name'])
            
            js_code += f"  {method_name_camel}({params_str}) {{\n"
            js_code += "    return this.proxy.sendMessage(\n"
            js_code += f"      this.ordinals[{idx}],  // ordinal\n"
            js_code += f"      {full_name}_{method['name']}_ParamsSpec,\n"
            if not method.get('is_one_way'):
                js_code += f"      {full_name}_{method['name']}_ResponseParamsSpec,\n"
            else:
                js_code += "      null,\n"
            js_code += f"      [{params_str}],\n"
            js_code += "      false);\n"
            js_code += "  }\n\n"
        
        js_code += "};\n\n"
        
        # Generate static getRemote() factory function
        js_code += f"{full_name}.getRemote = function() {{\n"
        js_code += f"  let remote = new {full_name}Remote();\n"
        js_code += "  let receiver = remote.bindNewPipeAndPassReceiver();\n"
        js_code += f"  mojo.internal.interfaceSupport.bind(\n"
        js_code += f"    receiver.handle,\n"
        js_code += f"    '{interface_string}',\n"
        js_code += "    'context');\n"
        js_code += "  return remote.$;\n"
        js_code += "};\n\n"
        
        # Generate Receiver class
        js_code += f"{full_name}Receiver = class {{\n"
        js_code += "  constructor(impl) {\n"
        js_code += "    this.impl = impl;\n"
        js_code += "    this.endpoint = null;\n"
        js_code += "    this.ordinalMap = new Map();\n"
        js_code += f"    const ordinals = window.mojoScrambler.getOrdinals('{module}.{iface_name}', [\n"
        for method in interface.get('methods', []):
            ord_val = method.get('ordinal')
            js_code += f"      {{ explicit: {'null' if ord_val is None else ord_val} }},\n"
        js_code += "    ]);\n"
        js_code += "    ordinals.forEach((ord, idx) => {\n"
        js_code += "      this.ordinalMap.set(ord, idx); // Scrambled/Explicit\n"
        
        js_code += "    });\n"
        js_code += "    console.log('[GeneratedReceiver] Constructed for ' + this.impl);\n"
        js_code += "  }\n"
        js_code += "  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }\n"
        js_code += "  bind(handle) {\n"
        js_code += "    console.log('[GeneratedReceiver] Binding handle...');\n"
        js_code += "    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);\n"
        js_code += "    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);\n"
        js_code += "    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },\n"
        js_code += "      onMessageReceived: (...args) => {\n"
        js_code += "      try {\n"
        js_code += "      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);\n"
        js_code += "      let message = args[0];\n"
        js_code += "      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)\n"
        js_code += "      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {\n"
        js_code += "        // Create a view of ONLY the payload (skipping the header)\n"
        js_code += "        let payload = args[2];\n"
        js_code += "        const headerSize = args[1].headerSize;\n"
        js_code += "        if (payload instanceof ArrayBuffer) {\n"
        js_code += "           payload = new DataView(payload, headerSize);\n"
        js_code += "        }\n"
        js_code += "        message = {\n"
        js_code += "          header: args[1],\n"
        js_code += "          payload: payload,\n"
        js_code += "          handles: args[3] || []\n"
        js_code += "        };\n"
        js_code += "      }\n"
        js_code += "      const header = message && message.header;\n"
        js_code += "      if (!header) return;\n"
        js_code += "      let dispatchId = this.ordinalMap.get(header.ordinal);\n"
        
        js_code += "      if (dispatchId === undefined) {\n"
        js_code += "           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);\n"
        js_code += "           return;\n"
        js_code += "      }\n"
        
        js_code += "      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);\n"
        js_code += "      \n"
        js_code += "      // FEEDBACK LOOP: Report the wire truth to the learner\n"
        js_code += "      this.mapOrdinal(header.ordinal, dispatchId);\n"
        js_code += "      \n"
        js_code += "      switch (dispatchId) {\n"
        
        for idx, method in enumerate(interface.get('methods', [])):
            # Use Index as the dispatch ID for internal switch logic (since discovery maps to idx)
            ordinal = idx 
            
            method_name = method['name']
            method_name_camel = to_camel_case(method_name)
            
            js_code += f"        case {idx}: {{\n"
            
            # Decode params MANUALLY
            param_struct_name = f"{iface_name}_{method_name}_Params"
            # js_code += f"          const params = {current_ns}.{param_struct_name}Spec.$.decode(message.payload);\n"
            # MANUAL DECODE with OFFSET
            js_code += f"          const decoder = new mojo.internal.Decoder(message.payload, message.handles);\n"
            # Use decodeStructInline because payload IS the struct, not a pointer
            js_code += f"          const params = decoder.decodeStructInline({current_ns}.{param_struct_name}Spec.$.structSpec);\n"
            
            # Call implementation
            param_names = [p['name'] for p in method.get('params', []) if p and p.get('name')]
            # name is already 'arg_...', so pass 'params.arg_...' directly
            params_list = [f"params.{name}" for name in param_names]
            params_str = ", ".join(params_list)
            
            js_code += f"          console.log('[GeneratedReceiver] Calling impl.{method_name_camel}');\n"
            js_code += f"          const result = this.impl.{method_name_camel}({params_str});\n"
            
            # Handle response
            if not method.get('is_one_way'):
                resp_struct_name = f"{iface_name}_{method_name}_ResponseParams"
                js_code += f"          const expectsResponse = header.expectsResponse || (header.flags & 1);\n"
                js_code += f"          if (expectsResponse) {{\n"
                js_code += f"            Promise.resolve(result).then(response => {{\n"
                returns = method.get('returns') or []
                if len(returns) == 1:
                    r_name = returns[0]['name']
                    # Use bracket notation for r_name to avoid issues if it has special chars
                    js_code += f"              const val = (response && typeof response === 'object' && '{r_name}' in response) ? response['{r_name}'] : response;\n"
                    js_code += f"              const resp_obj = {{ '{r_name}': val }};\n"
                else:
                    js_code += f"              const resp_obj = response;\n"
                
                js_code += f"              const message = new mojo.internal.Message(\n"
                js_code += f"                this.router_, 0, mojo.internal.kMessageFlagIsResponse,\n"
                js_code += f"                header.ordinal, header.requestId, {current_ns}.{resp_struct_name}Spec.$.structSpec, resp_obj);\n"
                js_code += f"              this.router_.send(message);\n"
                js_code += f"            }}).catch(e => console.error('[GeneratedReceiver] {method_name_camel} FAILED:', e));\n"
                js_code += "          }\n"
                
            js_code += "          break;\n"
            js_code += "        }\n"
        
        js_code += "      }\n" # End switch
        js_code += "      } catch (err) {\n"
        js_code += "        console.error('[GeneratedReceiver] Error processing message:', err);\n"
        js_code += "      }\n"
        js_code += "    }});\n" # End start
        js_code += "  }\n"
        js_code += "};\n\n"
        
        # Legacy/Lite Alias
        js_code += f"{full_name}Receiver = {full_name}Receiver;\n\n"
        
        # Legacy compatibility
        js_code += f"{full_name}Ptr = {full_name}Remote;\n"
        js_code += f"{full_name}Request = {full_name}PendingReceiver;\n\n"
     
    js_code += "\n// Specs (at the end to ensure classes are defined for InterfaceProxy)\n"
    js_code += specs_code
    
    return js_code



def main():
    bindings_dir = Path('bindings')
    
    with open('mojom_files.txt', 'r') as f:
        files = [line.strip() for line in f if line.strip()]
    
    print(f"Processing {len(files)} files...")
    
    success_count = 0
    
    index_data = {
        'generated_at': datetime.datetime.utcnow().isoformat() + 'Z',
        'version': os.environ.get('CHROMIUM_VERSION', FALLBACK_VERSION_STRING),
        'interfaces': [],
        'files': []
    }
    
    # Pass 1: Parse all files and build Global Type Map
    all_parsed = []
    global_kind_map = {}
    file_to_module = {} # Map file path -> module name
    
    for mojom_path in files:
        if not os.path.isfile(mojom_path):
            continue
        
        parsed = parse_mojom(mojom_path)
        if parsed:
            all_parsed.append({'path': mojom_path, 'data': parsed})
            
            # Map file to module for import resolution
            if parsed.get('module'):
                real_path = str(Path(mojom_path)) # normalize
                file_to_module[real_path] = parsed['module']
                # Also map the raw path as found in list
                file_to_module[mojom_path] = parsed['module']
            
            # Populate Global Map
            mod_prefix = f"{parsed['module']}." if parsed.get('module') else ""
            for s in parsed.get('structs', []): global_kind_map[f"{mod_prefix}{s['name']}"] = 'struct'
            for u in parsed.get('unions', []): global_kind_map[f"{mod_prefix}{u['name']}"] = 'union'
            for e in parsed.get('enums', []): global_kind_map[f"{mod_prefix}{e['name']}"] = 'enum'
            for i in parsed.get('interfaces', []): global_kind_map[f"{mod_prefix}{i['name']}"] = 'interface'
    
    print(f"Global Type Map detected {len(global_kind_map)} types.")

    # Load chrome version for scrambling salt
    load_chrome_version()
    
    # Parse BUILD.gn files for per-interface scramble settings
    mojom_file_scramble = parse_build_gn_for_scrambling()
    
    # Build the per-interface scramble map
    build_interface_scramble_map([item['data'] for item in all_parsed], mojom_file_scramble)

    # Pass 1.5: Analyze usage patterns (Associated vs Direct receivers)
    print("Analyzing interface usage patterns...")
    interface_usage_stats = {} # { fqn: { 'associated': [], 'direct': [] } }
    
    # Helper to resolve type to FQN
    def resolve_type_fqn(type_name, current_module, imports):
        base_type = type_name.strip().replace('?', '')
        # Handle array detection if needed, but usually receivers are simple types
        
        # 1. Check if already FQN
        if base_type in global_kind_map and global_kind_map[base_type] == 'interface':
            return base_type
            
        # 2. Check local module
        local_fqn = f"{current_module}.{base_type}"
        if local_fqn in global_kind_map and global_kind_map[local_fqn] == 'interface':
            return local_fqn
            
        # 3. Check imports
        # Heuristic: Scan global map for ending with .base_type and module matching an import
        # This is expensive but necessary since we don't have perfect symbol tables here
        for candidate_fqn, kind in global_kind_map.items():
            if kind == 'interface' and candidate_fqn.endswith(f".{base_type}"):
                # Check if the module part matches an import
                cand_mod = candidate_fqn.rsplit('.', 1)[0]
                if cand_mod in imports: # Exact module import
                    return candidate_fqn
                # Check file-based imports (path -> module)
                # This is tricky without the reverse map of import-path -> module available easily here
                # But we have file_to_module. 
                # Let's rely on the suffix match if it's unique enough or just try best effort
                pass
        
        # 4. Aggressive suffix match (if unique)
        matches = [k for k,v in global_kind_map.items() if v == 'interface' and k.endswith(f".{base_type}")]
        if len(matches) == 1:
            return matches[0]
            
        return None

    for item in all_parsed:
        parsed = item['data']
        if not parsed: continue
        
        mod = parsed.get('module', '')
        imports = parsed.get('imports', [])
        # Resolve imports to module names for better matching
        resolved_imports = set()
        for imp in imports:
            if imp in file_to_module:
                resolved_imports.add(file_to_module[imp])
                
        for interface in parsed.get('interfaces', []):
            for method in interface.get('methods', []):
                for param in method.get('params', []):
                    p_type = param['type']
                    
                    is_assoc = False
                    is_direct = False
                    
                    target_type = None
                    
                    if 'pending_associated_receiver<' in p_type:
                        is_assoc = True
                        match = re.search(r'pending_associated_receiver<([^>]+)>', p_type)
                        if match: target_type = match.group(1)
                    elif 'pending_receiver<' in p_type:
                        is_direct = True
                        match = re.search(r'pending_receiver<([^>]+)>', p_type)
                        if match: target_type = match.group(1)
                        
                    if target_type:
                        fqn = resolve_type_fqn(target_type, mod, resolved_imports)
                        if fqn:
                            if fqn not in interface_usage_stats:
                                interface_usage_stats[fqn] = {'associated': [], 'direct': []}
                            
                            source_info = f"{mod}.{interface['name']}.{method['name']}"
                            
                            if is_assoc:
                                interface_usage_stats[fqn]['associated'].append(source_info)
                            if is_direct:
                                interface_usage_stats[fqn]['direct'].append(source_info)

    # Pass 2: Generate Bindings
    for item in all_parsed:
        mojom_path = item['path']
        parsed = item['data']
        
        if parsed and (parsed.get('interfaces') or parsed.get('structs') or parsed.get('unions') or parsed.get('enums')):
            rel_path = mojom_path.replace('chromium_src/', '')
            out_filename = rel_path.replace('/', '_').replace('.mojom', '.mojom.js')
            out_path = bindings_dir / out_filename
            
            js_code = generate_js_binding(parsed, global_kind_map, file_to_module)
            if js_code:
                with open(out_path, 'w') as f:
                    f.write(js_code)
                success_count += 1
                
                
                # Analyze usage for this specific file's interfaces
                for interface in parsed['interfaces']:
                    fqn = f"{parsed['module']}.{interface['name']}"
                    usage = interface_usage_stats.get(fqn, {'associated': [], 'direct': []})
                    
                    # INFERENCE BY OMISSION:
                    # If an interface is never used as a 'pending_receiver<T>' in any Mojom file,
                    # it implies it cannot be bound using the standard Mojo.bindInterface() flow.
                    # We infer it is either explicitly associated, or implicitly associated (legacy/internal).
                    if not usage['associated'] and not usage['direct']:
                         usage['associated'].append("Inferred: No Direct Mojom Usage")

                    index_data['interfaces'].append({
                        'name': interface['name'],
                        'module': parsed['module'],
                        'file': out_filename,
                        'methods': [m['name'] for m in interface.get('methods', [])],
                        'metadata': {
                            'usage': usage
                        }
                    })
                
                index_data['files'].append({
                    'filename': out_filename,
                    'source': rel_path,
                    'module': parsed['module'],
                    'imports': parsed.get('imports', [])
                })
    
    # Write index.json
    with open(bindings_dir / 'index.json', 'w') as f:
        json.dump(index_data, f, indent=2)
    
    # Print summary
    print(f"\n=== Results ===")
    print(f"Generated bindings: {success_count} files")
    print(f"Total interfaces: {len(index_data['interfaces'])}")

if __name__ == '__main__':
    main()
