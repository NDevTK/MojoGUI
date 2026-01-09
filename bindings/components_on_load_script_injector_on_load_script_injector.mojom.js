// Auto-generated MojoJS binding
// Source: chromium_src/components/on_load_script_injector/on_load_script_injector.mojom
// Module: on_load_script_injector.mojom

'use strict';

// Module namespace
var on_load_script_injector = on_load_script_injector || {};
on_load_script_injector.mojom = on_load_script_injector.mojom || {};


// Interface: OnLoadScriptInjector
on_load_script_injector.mojom.OnLoadScriptInjectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_load_script_injector.mojom.OnLoadScriptInjectorRemote = class {
  static get $interfaceName() {
    return 'on_load_script_injector.mojom.OnLoadScriptInjector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_load_script_injector.mojom.OnLoadScriptInjectorPendingReceiver,
      handle);
    this.$ = new on_load_script_injector.mojom.OnLoadScriptInjectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_load_script_injector.mojom.OnLoadScriptInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addOnLoadScript(script) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec.$,
      null,
      [script]);
  }

  clearOnLoadScripts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec.$,
      null,
      []);
  }

};

on_load_script_injector.mojom.OnLoadScriptInjector.getRemote = function() {
  let remote = new on_load_script_injector.mojom.OnLoadScriptInjectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_load_script_injector.mojom.OnLoadScriptInjector',
    'context');
  return remote.$;
};

// ParamsSpec for AddOnLoadScript
on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_load_script_injector.mojom.OnLoadScriptInjector.AddOnLoadScript_Params',
      packedSize: 16,
      fields: [
        { name: 'script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearOnLoadScripts
on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_load_script_injector.mojom.OnLoadScriptInjector.ClearOnLoadScripts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
on_load_script_injector.mojom.OnLoadScriptInjectorPtr = on_load_script_injector.mojom.OnLoadScriptInjectorRemote;
on_load_script_injector.mojom.OnLoadScriptInjectorRequest = on_load_script_injector.mojom.OnLoadScriptInjectorPendingReceiver;

