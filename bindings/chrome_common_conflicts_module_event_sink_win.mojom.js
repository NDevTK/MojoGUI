// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/conflicts/module_event_sink_win.mojom
// Module: mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojom = mojom || {};

mojom.ModuleEventSink = {};
mojom.ModuleEventSink.$interfaceName = 'mojom.ModuleEventSink';
mojom.ModuleEventSink_OnModuleEvents_ParamsSpec = { $: {} };

// Interface: ModuleEventSink
mojo.internal.Struct(
    mojom.ModuleEventSink_OnModuleEvents_ParamsSpec, 'mojom.ModuleEventSink_OnModuleEvents_Params', [
      mojo.internal.StructField('module_load_addresses', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.ModuleEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ModuleEventSinkRemote = class {
  static get $interfaceName() {
    return 'mojom.ModuleEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ModuleEventSinkPendingReceiver,
      handle);
    this.$ = new mojom.ModuleEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onModuleEvents(module_load_addresses) {
    return this.$.onModuleEvents(module_load_addresses);
  }
};

mojom.ModuleEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ModuleEventSink', [
      { explicit: null },
    ]);
  }

  onModuleEvents(module_load_addresses) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.ModuleEventSink_OnModuleEvents_ParamsSpec,
      null,
      [module_load_addresses],
      false);
  }

};

mojom.ModuleEventSink.getRemote = function() {
  let remote = new mojom.ModuleEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ModuleEventSink',
    'context');
  return remote.$;
};

mojom.ModuleEventSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ModuleEventSink', [
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
             decoder.decodeStructInline(mojom.ModuleEventSink_OnModuleEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ModuleEventSink_OnModuleEvents_ParamsSpec.$.structSpec);
          const result = this.impl.onModuleEvents(params.module_load_addresses);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mojom.ModuleEventSinkReceiver = mojom.ModuleEventSinkReceiver;

mojom.ModuleEventSinkPtr = mojom.ModuleEventSinkRemote;
mojom.ModuleEventSinkRequest = mojom.ModuleEventSinkPendingReceiver;

