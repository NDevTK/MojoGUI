// Auto-generated MojoJS binding
// Source: chromium_src/components/on_load_script_injector/on_load_script_injector.mojom
// Module: on_load_script_injector.mojom

'use strict';

// Module namespace
var on_load_script_injector = on_load_script_injector || {};
on_load_script_injector.mojom = on_load_script_injector.mojom || {};


// Interface: OnLoadScriptInjector
on_load_script_injector.mojom.OnLoadScriptInjectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_load_script_injector.mojom.OnLoadScriptInjector';
  }

  addOnLoadScript(script) {
    // Method: AddOnLoadScript
    // Call: AddOnLoadScript(script)
  }

  clearOnLoadScripts() {
    // Method: ClearOnLoadScripts
    // Call: ClearOnLoadScripts()
  }

};

on_load_script_injector.mojom.OnLoadScriptInjectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
