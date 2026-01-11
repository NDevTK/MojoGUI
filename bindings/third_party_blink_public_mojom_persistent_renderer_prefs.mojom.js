// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/persistent_renderer_prefs.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PersistentRendererPrefsService = {};
blink.mojom.PersistentRendererPrefsService.$interfaceName = 'blink.mojom.PersistentRendererPrefsService';
blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec = { $: {} };

// Interface: PersistentRendererPrefsService
mojo.internal.Struct(
    blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec, 'blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PersistentRendererPrefsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PersistentRendererPrefsServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PersistentRendererPrefsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PersistentRendererPrefsServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PersistentRendererPrefsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setViewSourceLineWrapping(value) {
    return this.$.setViewSourceLineWrapping(value);
  }
};

blink.mojom.PersistentRendererPrefsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PersistentRendererPrefsService', [
      { explicit: null },
    ]);
  }

  setViewSourceLineWrapping(value) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec,
      null,
      [value],
      false);
  }

};

blink.mojom.PersistentRendererPrefsService.getRemote = function() {
  let remote = new blink.mojom.PersistentRendererPrefsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PersistentRendererPrefsService',
    'context');
  return remote.$;
};

blink.mojom.PersistentRendererPrefsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PersistentRendererPrefsService', [
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
             decoder.decodeStructInline(blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec.$.structSpec);
          const result = this.impl.setViewSourceLineWrapping(params.value);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.PersistentRendererPrefsServiceReceiver = blink.mojom.PersistentRendererPrefsServiceReceiver;

blink.mojom.PersistentRendererPrefsServicePtr = blink.mojom.PersistentRendererPrefsServiceRemote;
blink.mojom.PersistentRendererPrefsServiceRequest = blink.mojom.PersistentRendererPrefsServicePendingReceiver;

