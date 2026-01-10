// Auto-generated MojoJS binding
// Source: chromium_src/components/on_load_script_injector/on_load_script_injector.mojom
// Module: on_load_script_injector.mojom

'use strict';

// Module namespace
var on_load_script_injector = on_load_script_injector || {};
on_load_script_injector.mojom = on_load_script_injector.mojom || {};

on_load_script_injector.mojom.OnLoadScriptInjector = {};
on_load_script_injector.mojom.OnLoadScriptInjector.$interfaceName = 'on_load_script_injector.mojom.OnLoadScriptInjector';
on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec = { $: {} };
on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec = { $: {} };

// Interface: OnLoadScriptInjector
mojo.internal.Struct(
    on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec, 'on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_Params', [
      mojo.internal.StructField('script', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec, 'on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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
      on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec,
      null,
      [script]);
  }

  clearOnLoadScripts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec,
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

on_load_script_injector.mojom.OnLoadScriptInjectorPtr = on_load_script_injector.mojom.OnLoadScriptInjectorRemote;
on_load_script_injector.mojom.OnLoadScriptInjectorRequest = on_load_script_injector.mojom.OnLoadScriptInjectorPendingReceiver;

