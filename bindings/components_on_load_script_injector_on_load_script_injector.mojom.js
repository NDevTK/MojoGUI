// Auto-generated MojoJS binding
// Source: chromium_src/components/on_load_script_injector/on_load_script_injector.mojom
// Module: on_load_script_injector.mojom

'use strict';

// Module namespace
var on_load_script_injector = on_load_script_injector || {};
on_load_script_injector.mojom = on_load_script_injector.mojom || {};
var mojo_base = mojo_base || {};

on_load_script_injector.mojom.OnLoadScriptInjector = {};
on_load_script_injector.mojom.OnLoadScriptInjector.$interfaceName = 'on_load_script_injector.mojom.OnLoadScriptInjector';
on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec = { $: {} };
on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec = { $: {} };

// Interface: OnLoadScriptInjector
mojo.internal.Struct(
    on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec, 'on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_Params', [
      mojo.internal.StructField('script', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec, 'on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_Params', [
    ],
    [[0, 8]]);

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
      [script],
      false);
  }

  clearOnLoadScripts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec,
      null,
      [],
      false);
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

on_load_script_injector.mojom.OnLoadScriptInjectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.addOnLoadScript');
          const result = this.impl.addOnLoadScript(params.script);
          break;
        }
        case 1: {
          const params = on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.clearOnLoadScripts');
          const result = this.impl.clearOnLoadScripts();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

on_load_script_injector.mojom.OnLoadScriptInjectorReceiver = on_load_script_injector.mojom.OnLoadScriptInjectorReceiver;

on_load_script_injector.mojom.OnLoadScriptInjectorPtr = on_load_script_injector.mojom.OnLoadScriptInjectorRemote;
on_load_script_injector.mojom.OnLoadScriptInjectorRequest = on_load_script_injector.mojom.OnLoadScriptInjectorPendingReceiver;

