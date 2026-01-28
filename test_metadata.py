import json
import os
from pathlib import Path

# Configuration
BINDINGS_DIR = Path("bindings")
INDEX_FILE = BINDINGS_DIR / "index.json"

def main():
    if not INDEX_FILE.exists():
        print(f"❌ Error: {INDEX_FILE} not found. Run generate_bindings.py first.")
        return

    print(f"Loading {INDEX_FILE}...")
    try:
        with open(INDEX_FILE, "r") as f:
            data = json.load(f)
    except Exception as e:
        print(f"❌ Failed to parse JSON: {e}")
        return

    interfaces = {i['name']: i for i in data['interfaces']}
    full_interfaces = {f"{i['module']}.{i['name']}": i for i in data['interfaces']}
    
    targets = [
        "device.mojom.XREnvironmentIntegrationProvider", # Explicitly Associated
        "blink.mojom.LocalFrameHost",               # Inferred Associated (Not in BinderMap)
        "blink.mojom.ShareService",                 # Direct (Found in BinderMap)
        "device.mojom.BatteryMonitor"               # Control: Direct Usage
    ]
    
    print("\nVerifying Targets:")
    for target in targets:
        if target in full_interfaces:
            info = full_interfaces[target]
            usage = info.get('metadata', {}).get('usage', {})
            assoc = usage.get('associated', [])
            
            print(f"\n[Target]: {target}")
            if assoc:
                print(f"   [+] Detected {len(assoc)} associated usages:")
                for src in assoc:
                    print(f"       -> {src}")
            else:
                print(f"   [!]  No associated usage found (Direct only?)")
                print(f"        Direct usages: {len(usage.get('direct', []))}")
        else:
             print(f"\n[Target]: {target} NOT FOUND in index.json")

    print("\nDone.")

if __name__ == "__main__":
    main()
