// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sms/webotp_service.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SmsStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.WebOTPService = {};
blink.mojom.WebOTPService.$interfaceName = 'blink.mojom.WebOTPService';
blink.mojom.WebOTPService_Receive_ParamsSpec = { $: {} };
blink.mojom.WebOTPService_Receive_ResponseParamsSpec = { $: {} };
blink.mojom.WebOTPService_Abort_ParamsSpec = { $: {} };

// Enum: SmsStatus
blink.mojom.SmsStatus = {
  kSuccess: 0,
  kUnhandledRequest: 1,
  kCancelled: 2,
  kAborted: 3,
  kTimeout: 4,
  kBackendNotAvailable: 5,
};

// Interface: WebOTPService
mojo.internal.Struct(
    blink.mojom.WebOTPService_Receive_ParamsSpec, 'blink.mojom.WebOTPService_Receive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebOTPService_Receive_ResponseParamsSpec, 'blink.mojom.WebOTPService_Receive_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.SmsStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('otp', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebOTPService_Abort_ParamsSpec, 'blink.mojom.WebOTPService_Abort_Params', [
    ],
    [[0, 8]]);

blink.mojom.WebOTPServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebOTPServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebOTPService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebOTPServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebOTPServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  receive() {
    return this.$.receive();
  }
  abort() {
    return this.$.abort();
  }
};

blink.mojom.WebOTPServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebOTPService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  receive() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebOTPService_Receive_ParamsSpec,
      blink.mojom.WebOTPService_Receive_ResponseParamsSpec,
      [],
      false);
  }

  abort() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WebOTPService_Abort_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.WebOTPService.getRemote = function() {
  let remote = new blink.mojom.WebOTPServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebOTPService',
    'context');
  return remote.$;
};

blink.mojom.WebOTPServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebOTPService', [
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
             decoder.decodeStructInline(blink.mojom.WebOTPService_Receive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebOTPService_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebOTPService_Receive_ParamsSpec.$.structSpec);
          const result = this.impl.receive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebOTPService_Receive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebOTPService_Abort_ParamsSpec.$.structSpec);
          const result = this.impl.abort();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WebOTPServiceReceiver = blink.mojom.WebOTPServiceReceiver;

blink.mojom.WebOTPServicePtr = blink.mojom.WebOTPServiceRemote;
blink.mojom.WebOTPServiceRequest = blink.mojom.WebOTPServicePendingReceiver;

