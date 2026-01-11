// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/smart_card/smart_card.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.SmartCardService = {};
blink.mojom.SmartCardService.$interfaceName = 'blink.mojom.SmartCardService';
blink.mojom.SmartCardService_CreateContext_ParamsSpec = { $: {} };
blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec = { $: {} };

// Interface: SmartCardService
mojo.internal.Struct(
    blink.mojom.SmartCardService_CreateContext_ParamsSpec, 'blink.mojom.SmartCardService_CreateContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec, 'blink.mojom.SmartCardService_CreateContext_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardCreateContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SmartCardServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SmartCardServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SmartCardService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SmartCardServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SmartCardServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createContext() {
    return this.$.createContext();
  }
};

blink.mojom.SmartCardServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmartCardService', [
      { explicit: null },
    ]);
  }

  createContext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SmartCardService_CreateContext_ParamsSpec,
      blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.SmartCardService.getRemote = function() {
  let remote = new blink.mojom.SmartCardServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SmartCardService',
    'context');
  return remote.$;
};

blink.mojom.SmartCardServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmartCardService', [
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
             decoder.decodeStructInline(blink.mojom.SmartCardService_CreateContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SmartCardService_CreateContext_ParamsSpec.$.structSpec);
          const result = this.impl.createContext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SmartCardServiceReceiver = blink.mojom.SmartCardServiceReceiver;

blink.mojom.SmartCardServicePtr = blink.mojom.SmartCardServiceRemote;
blink.mojom.SmartCardServiceRequest = blink.mojom.SmartCardServicePendingReceiver;

