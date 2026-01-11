// Auto-generated MojoJS binding
// Source: chromium_src/components/on_load_script_injector/on_load_script_injector.mojom
// Module: on_load_script_injector.mojom

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
  addOnLoadScript(script) {
    return this.$.addOnLoadScript(script);
  }
  clearOnLoadScripts() {
    return this.$.clearOnLoadScripts();
  }
};

on_load_script_injector.mojom.OnLoadScriptInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OnLoadScriptInjector', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addOnLoadScript(script) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec,
      null,
      [script],
      false);
  }

  clearOnLoadScripts() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OnLoadScriptInjector', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_load_script_injector.mojom.OnLoadScriptInjector_AddOnLoadScript_ParamsSpec.$.structSpec);
          const result = this.impl.addOnLoadScript(params.script);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_load_script_injector.mojom.OnLoadScriptInjector_ClearOnLoadScripts_ParamsSpec.$.structSpec);
          const result = this.impl.clearOnLoadScripts();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

on_load_script_injector.mojom.OnLoadScriptInjectorReceiver = on_load_script_injector.mojom.OnLoadScriptInjectorReceiver;

on_load_script_injector.mojom.OnLoadScriptInjectorPtr = on_load_script_injector.mojom.OnLoadScriptInjectorRemote;
on_load_script_injector.mojom.OnLoadScriptInjectorRequest = on_load_script_injector.mojom.OnLoadScriptInjectorPendingReceiver;

