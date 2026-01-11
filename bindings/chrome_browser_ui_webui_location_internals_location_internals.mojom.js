// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/location_internals/location_internals.mojom
// Module: mojom

// Module namespace
var mojom = mojom || {};
var device = device || {};

mojom.LocationInternalsHandler = {};
mojom.LocationInternalsHandler.$interfaceName = 'mojom.LocationInternalsHandler';
mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec = { $: {} };

// Interface: LocationInternalsHandler
mojo.internal.Struct(
    mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec, 'mojom.LocationInternalsHandler_BindInternalsInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationInternalsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.LocationInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.LocationInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.LocationInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.LocationInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.LocationInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindInternalsInterface(receiver) {
    return this.$.bindInternalsInterface(receiver);
  }
};

mojom.LocationInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocationInternalsHandler', [
      { explicit: null },
    ]);
  }

  bindInternalsInterface(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

mojom.LocationInternalsHandler.getRemote = function() {
  let remote = new mojom.LocationInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.LocationInternalsHandler',
    'context');
  return remote.$;
};

mojom.LocationInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocationInternalsHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec.$.structSpec);
          const result = this.impl.bindInternalsInterface(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.LocationInternalsHandlerReceiver = mojom.LocationInternalsHandlerReceiver;

mojom.LocationInternalsHandlerPtr = mojom.LocationInternalsHandlerRemote;
mojom.LocationInternalsHandlerRequest = mojom.LocationInternalsHandlerPendingReceiver;

