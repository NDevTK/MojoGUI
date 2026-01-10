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

    # Extract imports
    imports = re.findall(r'import\s+"([^"]+)"', content)
    result['imports'] = imports

    # Remove comments for cleaner parsing
    content_no_comments = re.sub(r'//[^\n]*', '', content)
    content_no_comments = re.sub(r'/\*.*?\*/', '', content_no_comments, flags=re.DOTALL)

    # Extract interfaces with their methods
    interface_pattern = r'interface\s+(\w+)[^{]*\{'
    for match in re.finditer(interface_pattern, content_no_comments):
        interface_name = match.group(1)
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
        method_pattern = r'([a-zA-Z][a-zA-Z0-9_]*)(?:@(\d+))?\s*\(([^)]*)\)\s*(?:=>\s*\(([^)]*)\))?'
        for method_match in re.finditer(method_pattern, interface_body):
            method_name = method_match.group(1)
            ordinal_str = method_match.group(2)
            params_str = method_match.group(3).strip()
            returns_str = method_match.group(4)
            
            # Skip false positives
            if method_name in ('TODO', 'NOTE', 'FIXME', 'DEPRECATED', 'If', 'For', 'While', 'Switch'):
                continue
            
            params = parse_params(params_str) if params_str else []
            returns = parse_params(returns_str) if returns_str is not None else None
            
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

    # Extract enums
    enum_pattern = r'enum\s+(\w+)\s*\{([^}]*)\}'
    for match in re.finditer(enum_pattern, content_no_comments, re.DOTALL):
        enum_name = match.group(1)
        enum_body = match.group(2)
        values = []
        for line in enum_body.split(','):
            line = line.strip()
            if line:
                # Match name and optional value
                val_match = re.search(r'([a-zA-Z_]\w*)(?:\s*=\s*(.*?))?$', line)
                if val_match:
                    v_name = val_match.group(1)
                    v_val = val_match.group(2).strip() if val_match.group(2) else None
                    values.append({'name': v_name, 'value': v_val})
        result['enums'].append({'name': enum_name, 'values': values})

    # Extract structs
    struct_pattern = r'struct\s+(\w+)\s*\{([^}]*)\}'
    for match in re.finditer(struct_pattern, content_no_comments, re.DOTALL):
        struct_name = match.group(1)
        struct_body = match.group(2)
        fields = parse_params(struct_body)
        result['structs'].append({'name': struct_name, 'fields': fields})

    # Extract constants
    const_pattern = r'const\s+([\w\.]+)\s+(\w+)\s*=\s*([^;]+);'
    for match in re.finditer(const_pattern, content_no_comments):
        c_type = match.group(1)
        c_name = match.group(2)
        c_value = match.group(3).strip()
        result['constants'].append({'name': c_name, 'type': c_type, 'value': c_value})

    # Extract unions
    union_pattern = r'union\s+(\w+)\s*\{([^}]*)\}'
    for match in re.finditer(union_pattern, content_no_comments, re.DOTALL):
        union_name = match.group(1)
        union_body = match.group(2)
        fields = parse_params(union_body)
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
    """Parse a single parameter like 'string name'."""
    param_str = param_str.strip()
    if not param_str:
        return None
    
    param_str = re.sub(r'//.*$', '', param_str, flags=re.MULTILINE).strip()
    
    # Extract MinVersion
    min_version_match = re.search(r'\[MinVersion=(\d+)\]', param_str)
    min_version = int(min_version_match.group(1)) if min_version_match else 0
    param_str = re.sub(r'\[.*?\]', '', param_str).strip() # Remove attributes
    
    ordinal_match = re.search(r'@(\d+)', param_str)
    ordinal = int(ordinal_match.group(1)) if ordinal_match else None
    param_str = re.sub(r'@\d+', '', param_str).strip() # Remove explicit ordinals
    
    # Capture default value if exists
    default_value = None
    default_match = re.search(r'=\s*([^;@\[]+)', param_str)
    if default_match:
        default_value = default_match.group(1).strip()
    
    param_str = re.sub(r'=.*$', '', param_str).strip()
    param_str = param_str.rstrip(';').strip()
    
    if not param_str:
        return {'name': None, 'type': None, 'min_version': min_version, 'ordinal': ordinal, 'default_value': default_value}
    
    optional = '?' in param_str
    param_str = param_str.replace('?', '').strip()
    
    if param_str.endswith('&'):
        param_str = f"pending_receiver<{param_str[:-1].strip()}>"
    
    parts = param_str.split()
    if len(parts) >= 2:
        param_type = ' '.join(parts[:-1])
        param_name = parts[-1]
    elif len(parts) == 1:
        param_type = parts[0]
        param_name = ""
    else:
        return None
    
    if param_name and not re.match(r'^[a-zA-Z_][a-zA-Z0-9_]*$', param_name):
        return None
    
    return {'type': param_type, 'name': param_name, 'optional': optional, 'ordinal': ordinal, 'min_version': min_version, 'default_value': default_value}

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
    
    # Look up in type map
    if type_clean in TYPE_MAPPING:
        return TYPE_MAPPING[type_clean]
    
    # For unknown types (likely structs/enums), default to pointer
    return 'mojo.internal.Pointer'


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
    
    imports = parsed.get('imports', [])

    def find_type_module(name):
        # 1. Local?
        if name in valid_types:
            return current_ns
        
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
        
        return None

    def resolve_mojo_type(type_name):
        # Recursive parsing for complex types (Array/Map)
        type_name = type_name.strip()
        
        if type_name.startswith('array<'):
            is_nullable = False
            if type_name.endswith('?'):
                is_nullable = True
                type_name = type_name[:-1].strip()
            
            inner = type_name[6:-1].strip()
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
        
        # Pending Types
        if type_name.startswith('pending_remote<'):
            inner = type_name[15:-1].strip()
            return f"mojo.internal.InterfaceProxy({resolve_mojo_type_raw(inner)})"
        if type_name.startswith('pending_receiver<'):
            inner = type_name[17:-1].strip()
            return f"mojo.internal.InterfaceRequest({resolve_mojo_type_raw(inner)})"
        
        # Check local types or imports
        clean_name = type_name.replace('?', '').strip()
        
        # Explicit FQN?
        if '.' in clean_name and not clean_name.startswith('mojo.'):
            parts = clean_name.split('.')
            iface_name = parts[-1]
            mod_prefix = '.'.join(parts[:-1])
            
            kind = global_kind_map.get(clean_name)
            suffix = 'Spec'
            if kind == 'interface': suffix = 'Remote'
            
            res_type = f"{mod_prefix}.{iface_name}{suffix}"
            if kind != 'interface': res_type += '.$'
            
            if kind == 'interface': return f"mojo.internal.InterfaceProxy({res_type})"
            return res_type

        # Unqualified name - Find Module
        target_mod = find_type_module(clean_name)
        if target_mod:
            fqn = f"{target_mod}.{clean_name}"
            kind = global_kind_map.get(fqn)
            
            suffix = 'Spec'
            if kind == 'interface': suffix = 'Remote'
            
            res_type = f"{target_mod}.{clean_name}{suffix}"
            if kind != 'interface': res_type += '.$'
            
            if kind == 'interface': return f"mojo.internal.InterfaceProxy({res_type})"
            return res_type
        
        # Fallback
        if clean_name and clean_name[0].isupper():
            return f"{current_ns}.{clean_name}Spec.$"

        return 'mojo.internal.Pointer'

    def resolve_mojo_type_raw(type_name):
        """Helper to get the raw Spec/Remote name."""
        type_name = type_name.strip()
        clean_name = type_name.replace('?', '').strip()
        
        if type_name in TYPE_MAPPING: return TYPE_MAPPING[type_name]
        
        if '.' in clean_name and not clean_name.startswith('mojo.'):
            parts = clean_name.split('.')
            iface_name = parts[-1]
            mod_prefix = '.'.join(parts[:-1])
            
            kind = global_kind_map.get(clean_name)
            suffix = 'Spec'
            if kind == 'interface': suffix = 'Remote'
            
            return f"{mod_prefix}.{iface_name}{suffix}"

        if clean_name in valid_types:
            fqn = f"{module}.{clean_name}"
            if global_kind_map.get(fqn) == 'interface':
                return f"{current_ns}.{clean_name}Remote"
            return f"{current_ns}.{clean_name}Spec"

        target_mod = find_type_module(clean_name)
        if target_mod:
            fqn = f"{target_mod}.{clean_name}"
            kind = global_kind_map.get(fqn)
            suffix = 'Spec'
            if kind == 'interface': suffix = 'Remote'
            return f"{target_mod}.{clean_name}{suffix}"

        if clean_name and clean_name[0].isupper():
             return f"{current_ns}.{clean_name}Spec"

        return 'mojo.internal.Pointer'

    def get_struct_layout(params):
        """Calculate field offsets and size using Mojo's Best Fit algorithm."""
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
            
            is_primitive = p_type in ('mojo.internal.Bool', 'mojo.internal.Int8', 'mojo.internal.Uint8', 'mojo.internal.Int16', 'mojo.internal.Uint16', 'mojo.internal.Int32', 'mojo.internal.Uint32', 'mojo.internal.Int64', 'mojo.internal.Uint64', 'mojo.internal.Float', 'mojo.internal.Double')
            
            if is_nullable and is_primitive:
                expanded_params.append({
                    'name': f"{param['name']}_$flag",
                    'type': 'mojo.internal.Bool',
                    'original_name': param['name'],
                    'original_type': p_type,
                    'is_flag': True,
                    'ordinal': ordinal,
                    'sub_ordinal': 0,
                    'min_version': min_version,
                    'nullable': False
                })
                expanded_params.append({
                    'name': f"{param['name']}_$value",
                    'type': p_type,
                    'original_name': param['name'],
                    'is_value': True,
                    'ordinal': ordinal,
                    'sub_ordinal': 1,
                    'min_version': min_version,
                    'nullable': False
                })
            else:
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
        
        expanded_params.sort(key=lambda x: (x['ordinal'], x['sub_ordinal']))
        
        def get_size_alignment(p_type):
            if p_type == 'mojo.internal.Bool': return 1, 1
            if p_type in ('mojo.internal.Int8', 'mojo.internal.Uint8'): return 1, 1
            if p_type in ('mojo.internal.Int16', 'mojo.internal.Uint16'): return 2, 2
            if p_type in ('mojo.internal.Int32', 'mojo.internal.Uint32', 'mojo.internal.Float', 'mojo.internal.Handle'): return 4, 4
            if p_type in ('mojo.internal.Int64', 'mojo.internal.Uint64', 'mojo.internal.Double'): return 8, 8
            if 'Interface' in p_type: return 8, 8
            spec_name = p_type.replace('Spec', '')
            kind = global_kind_map.get(spec_name)
            if kind == 'enum': return 4, 4
            if kind == 'union': return 16, 8
            return 8, 8
        
        def get_pad(offset, alignment):
            return (alignment - (offset % alignment)) % alignment

        if not expanded_params:
            return [], 8, "[[0, 8]]"
            
        for p in expanded_params:
            s, a = get_size_alignment(p['type'])
            p['size'] = s
            p['alignment'] = a

        expanded_params.sort(key=lambda x: (
            x.get('min_version', 0), 
            -x.get('size', 0), 
            x.get('ordinal', 0), 
            x.get('sub_ordinal', 0)
        ))
        
        packed_fields = []
        current_offset = 0
        current_bool_byte = -1
        current_bool_bit = 0
        
        for p in expanded_params:
            size = p['size']
            align = p['alignment']
            
            if p['type'] == 'mojo.internal.Bool':
                if current_bool_byte != -1 and current_bool_bit < 7:
                    p['offset'] = current_bool_byte
                    p['bit'] = current_bool_bit + 1
                    current_bool_bit += 1
                else:
                    pad = get_pad(current_offset, 1)
                    p['offset'] = current_offset + pad
                    p['bit'] = 0
                    current_bool_byte = p['offset']
                    current_bool_bit = 0
                    current_offset = p['offset'] + 1
            else:
                pad = get_pad(current_offset, align)
                p['offset'] = current_offset + pad
                p['bit'] = 0
                current_offset = p['offset'] + size
                current_bool_byte = -1
            
            packed_fields.append(p)
        
        fields_code = []
        for f in packed_fields:
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
                     try:
                         float(raw_def)
                         js_def = raw_def
                     except:
                         js_def = "0" 
            
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
        
        sorted_fields_for_versions = sorted(packed_fields, key=lambda x: (x['min_version'], x['offset']))
        versions = []
        current_version = -1
        current_max_offset = 0
        
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
        
        versions_code = "[" + ", ".join([f"[{v[0]}, {v[1]}]" for v in versions]) + "]"
        packed_size = versions[-1][1] if versions else 8
        
        return fields_code, packed_size, versions_code

    
    # Clean template logic (centralized SHA256/MojoScrambler)
    js_code = f'''// Auto-generated MojoJS binding
// Source: {parsed['path']}
// Module: {module}

'use strict';
(function() {{
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
}})();

// Module namespace
var {module_parts[0]} = {module_parts[0]} || {{}};
'''
    
    current_ns = module_parts[0]
    for part in module_parts[1:]:
        js_code += f"{current_ns}.{part} = {current_ns}.{part} || {{}};\n"
        current_ns += f".{part}"
    
    declared_roots = set()
    declared_roots.add(module_parts[0])
    
    for imp in parsed.get('imports', []):
        mod = None
        if imp in file_to_module:
            mod = file_to_module[imp]
        else:
            for k, v in file_to_module.items():
                if k.endswith(imp):
                    mod = v
                    break
        
        if mod:
            root = mod.split('.')[0]
            if root not in declared_roots:
                js_code += f"var {root} = {root} || {{}};\n"
                declared_roots.add(root)
        else:
             parts = imp.split('/')
             roots = ['blink', 'ui', 'gfx', 'skia', 'url', 'content', 'ash', 'chromeos', 'components', 'services', 'network', 'media', 'webview']
             for r in roots:
                 if r in parts and r not in declared_roots:
                     js_code += f"var {r} = {r} || {{}};\n"
                     declared_roots.add(r)
    
    js_code += "\n"
    
    for enum in parsed.get('enums', []):
        js_code += f"{current_ns}.{enum['name']}Spec = {{ $: mojo.internal.Enum() }};\n"
    for union in parsed.get('unions', []):
        js_code += f"{current_ns}.{union['name']}Spec = {{ $: {{}} }};\n"
    for struct in parsed.get('structs', []):
        js_code += f"{current_ns}.{struct['name']}Spec = {{ $: {{}} }};\n"
    for interface in parsed.get('interfaces', []):
        iface_name = interface['name']
        js_code += f"{current_ns}.{iface_name} = {{}};\n"
        js_code += f"{current_ns}.{iface_name}.$interfaceName = '{module}.{iface_name}';\n"
        for method in interface.get('methods', []):
            js_code += f"{current_ns}.{iface_name}_{method['name']}_ParamsSpec = {{ $: {{}} }};\n"
            if not method.get('is_one_way'):
                js_code += f"{current_ns}.{iface_name}_{method['name']}_ResponseParamsSpec = {{ $: {{}} }};\n"

    for const in parsed.get('constants', []):
        js_code += f"\n{current_ns}.{const['name']} = {const['value']};\n"

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
                    pass
            else:
                last_val += 1
            js_code += f"  {v_name}: {last_val},\n"
        js_code += "};\n"

    for union in parsed.get('unions', []):
        union_name = union['name']
        full_name = f"{current_ns}.{union_name}"
        
        js_code += f"\n// Union: {union_name}\n"
        js_code += f"mojo.internal.Union(\n"
        js_code += f"    {full_name}Spec, '{module}.{union_name}', {{\n"
        
        for i, field in enumerate(union['fields']):
            f_type = resolve_mojo_type(field['type'])
            f_ordinal = field.get('ordinal', i)
            if f_ordinal is None: f_ordinal = i
            
            f_nullable = 'true' if field.get('optional') or '?' in field.get('type', '') else 'false'
            js_code += f"      '{field['name']}': {{\n"
            js_code += f"        'ordinal': {f_ordinal},\n"
            js_code += f"        'type': {f_type},\n"
            js_code += f"        'nullable': {f_nullable},\n"
            js_code += "      },\n"
            
        js_code += "    });\n"

    for struct in parsed.get('structs', []):
        struct_name = struct['name']
        full_name = f"{current_ns}.{struct_name}"
        fields_code, packed_size, versions_code = get_struct_layout(struct.get('fields', []))
        
        js_code += f"\n// Struct: {struct_name}\n"
        js_code += f"mojo.internal.Struct(\n"
        js_code += f"    {full_name}Spec, '{module}.{struct_name}', [\n"
        for field in fields_code:
            js_code += f"      mojo.internal.StructField({field}),\n"
        js_code += f"    ],\n"
        js_code += f"    {versions_code});\n"
    
    for interface in parsed.get('interfaces', []):
        iface_name = interface['name']
        full_name = f"{current_ns}.{iface_name}"
        interface_string = f"{module}.{iface_name}"
        
        js_code += f"\n// Interface: {iface_name}\n"
        
        for method in interface.get('methods', []):
            method_name = method['name']
            params = method.get('params', [])
            param_struct_name = f"{iface_name}_{method_name}_Params"
            p_fields, p_size, p_versions = get_struct_layout(params)
            
            js_code += f"mojo.internal.Struct(\n"
            js_code += f"    {current_ns}.{param_struct_name}Spec, '{module}.{param_struct_name}', [\n"
            for field in p_fields:
                js_code += f"      mojo.internal.StructField({field}),\n"
            js_code += f"    ],\n"
            js_code += f"    {p_versions});\n\n"

            if not method.get('is_one_way'):
                resp_params = method.get('returns', [])
                resp_struct_name = f"{iface_name}_{method_name}_ResponseParams"
                r_fields, r_size, r_versions = get_struct_layout(resp_params)
                
                js_code += f"mojo.internal.Struct(\n"
                js_code += f"    {current_ns}.{resp_struct_name}Spec, '{module}.{resp_struct_name}', [\n"
                for field in r_fields:
                    js_code += f"      mojo.internal.StructField({field}),\n"
                js_code += f"    ],\n"
                js_code += f"    {r_versions});\n\n"

        js_code += f"{full_name}PendingReceiver = class {{\n"
        js_code += "  constructor(handle) {\n"
        js_code += "    this.handle = handle;\n"
        js_code += "  }\n"
        js_code += "};\n\n"
        
        js_code += f"{full_name}Remote = class {{\n"
        js_code += f"  static get $interfaceName() {{\n"
        js_code += f"    return '{interface_string}';\n"
        js_code += "  }\n\n"
        
        js_code += "  constructor(handle = undefined) {\n"
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
        
        js_code += f"{full_name}RemoteCallHandler = class {{\n"
        js_code += "  constructor(proxy) {\n"
        js_code += "    this.proxy = proxy;\n"
        js_code += f"    this.ordinals = window.mojoScrambler.getOrdinals('{iface_name}', [\n"
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
        
        js_code += f"{full_name}.getRemote = function() {{\n"
        js_code += f"  let remote = new {full_name}Remote();\n"
        js_code += "  let receiver = remote.bindNewPipeAndPassReceiver();\n"
        js_code += f"  mojo.internal.interfaceSupport.bind(\n"
        js_code += f"    receiver.handle,\n"
        js_code += f"    '{interface_string}',\n"
        js_code += "    'context');\n"
        js_code += "  return remote.$;\n"
        js_code += "};\n\n"
        
        js_code += f"{full_name}Receiver = class {{\n"
        js_code += "  constructor(impl) {\n"
        js_code += "    this.impl = impl;\n"
        js_code += "    this.endpoint = null;\n"
        js_code += "    this.ordinalMap = new Map();\n"
        js_code += f"    const ordinals = window.mojoScrambler.getOrdinals('{iface_name}', [\n"
        for method in interface.get('methods', []):
            ord_val = method.get('ordinal')
            js_code += f"      {{ explicit: {'null' if ord_val is None else ord_val} }},\n"
        js_code += "    ]);\n"
        js_code += "    ordinals.forEach((ord, idx) => {\n"
        js_code += "      this.ordinalMap.set(ord, idx);\n"
        js_code += "      this.ordinalMap.set(idx, idx);\n"
        js_code += "    });\n"
        js_code += "  }\n"
        js_code += "  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }\n"
        js_code += "  bind(handle) {\n"
        js_code += "    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);\n"
        js_code += "    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);\n"
        js_code += "    this.endpoint.start({ onMessageReceived: (...args) => {\n"
        js_code += "      try {\n"
        js_code += "      let message = args[0];\n"
        js_code += "      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {\n"
        js_code += "        let payload = args[2];\n"
        js_code += "        const headerSize = args[1].headerSize;\n"
        js_code += "        if (payload instanceof ArrayBuffer) {\n"
        js_code += "           payload = new DataView(payload, headerSize);\n"
        js_code += "        }\n"
        js_code += "        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};\n"
        js_code += "      }\n"
        js_code += "      const header = message && message.header;\n"
        js_code += "      if (!header) return;\n"
        js_code += "      let dispatchId = this.ordinalMap.get(header.ordinal);\n"
        
        js_code += "      if (dispatchId === undefined) {\n"
        js_code += "        const decoder = new mojo.internal.Decoder(message.payload, message.handles);\n"
        for idx, method in enumerate(interface.get('methods', [])):
             method_name = method['name']
             param_struct_name = f"{iface_name}_{method_name}_Params"
             js_code += f"        if (dispatchId === undefined) {{\n"
             js_code += "           try {\n"
             js_code += f"             decoder.decodeStructInline({current_ns}.{param_struct_name}Spec);\n"
             js_code += f"             this.mapOrdinal(header.ordinal, {idx});\n"
             js_code += f"             dispatchId = {idx};\n"
             js_code += "           } catch (e) {}\n"
             js_code += "        }\n"

        js_code += "        if (dispatchId === undefined) return;\n"
        js_code += "      }\n"
        
        js_code += "      switch (dispatchId) {\n"
        for idx, method in enumerate(interface.get('methods', [])):
            method_name = method['name']
            method_name_camel = to_camel_case(method_name)
            js_code += f"        case {idx}: {{\n"
            param_struct_name = f"{iface_name}_{method_name}_Params"
            js_code += f"          const decoder = new mojo.internal.Decoder(message.payload, message.handles);\n"
            js_code += f"          const params = decoder.decodeStructInline({current_ns}.{param_struct_name}Spec.$.structSpec);\n"
            param_names = [p['name'] for p in method.get('params', []) if p and p.get('name')]
            args_js = ", ".join([f"params.{name}" for name in param_names])
            js_code += f"          const result = this.impl.{method_name_camel}({args_js});\n"
            if not method.get('is_one_way'):
                resp_struct_name = f"{iface_name}_{method_name}_ResponseParams"
                js_code += f"          if (header.expectsResponse) {{\n"
                js_code += f"            Promise.resolve(result).then(response => {{\n"
                js_code += f"              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, {current_ns}.{resp_struct_name}Spec);\n"
                js_code += "               responder(response);\n"
                js_code += "            });\n"
                js_code += "          }\n"
            js_code += "          break;\n"
            js_code += "        }\n"
        
        js_code += "      }\n"
        js_code += "      } catch (err) {}\n"
        js_code += "    }});\n"
        js_code += "  }\n"
        js_code += "};\n\n"
        
        js_code += f"{current_ns}.{iface_name}Receiver = {full_name}Receiver;\n\n"
        js_code += f"{full_name}Ptr = {full_name}Remote;\n"
        js_code += f"{full_name}Request = {full_name}PendingReceiver;\n\n"
     
    return js_code



def main():
    bindings_dir = Path('bindings')
    
    if not os.path.isfile('mojom_files.txt'):
        print("mojom_files.txt not found. Please run sparse checkout first.")
        return

    with open('mojom_files.txt', 'r') as f:
        files = [line.strip() for line in f if line.strip()]
    
    print(f"Processing {len(files)} files...")
    
    success_count = 0
    
    index_data = {
        'generated_at': datetime.datetime.utcnow().isoformat() + 'Z',
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
            
            if parsed.get('module'):
                real_path = str(Path(mojom_path)) # normalize
                file_to_module[real_path] = parsed['module']
                file_to_module[mojom_path] = parsed['module']
            
            mod_prefix = f"{parsed['module']}." if parsed.get('module') else ""
            for s in parsed.get('structs', []): global_kind_map[f"{mod_prefix}{s['name']}"] = 'struct'
            for u in parsed.get('unions', []): global_kind_map[f"{mod_prefix}{u['name']}"] = 'union'
            for e in parsed.get('enums', []): global_kind_map[f"{mod_prefix}{e['name']}"] = 'enum'
            for i in parsed.get('interfaces', []): global_kind_map[f"{mod_prefix}{i['name']}"] = 'interface'
    
    print(f"Global Type Map detected {len(global_kind_map)} types.")

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
                
                for interface in parsed['interfaces']:
                    index_data['interfaces'].append({
                        'name': interface['name'],
                        'module': parsed['module'],
                        'file': out_filename,
                        'methods': [m['name'] for m in interface.get('methods', [])]
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
