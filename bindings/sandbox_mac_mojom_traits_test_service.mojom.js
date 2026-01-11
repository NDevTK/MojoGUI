// Auto-generated MojoJS binding
// Source: chromium_src/sandbox/mac/mojom/traits_test_service.mojom
// Module: sandbox.mac.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var sandbox = sandbox || {};
sandbox.mac = sandbox.mac || {};
sandbox.mac.mojom = sandbox.mac.mojom || {};

sandbox.mac.mojom.TraitsTestService = {};
sandbox.mac.mojom.TraitsTestService.$interfaceName = 'sandbox.mac.mojom.TraitsTestService';
sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec = { $: {} };
sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec = { $: {} };

// Interface: TraitsTestService
mojo.internal.Struct(
    sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec, 'sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_Params', [
      mojo.internal.StructField('in', 0, 0, sandbox.mac.mojom.SeatbeltExtensionTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec, 'sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, sandbox.mac.mojom.SeatbeltExtensionTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

sandbox.mac.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sandbox.mac.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'sandbox.mac.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sandbox.mac.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new sandbox.mac.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoSeatbeltExtensionToken(in) {
    return this.$.echoSeatbeltExtensionToken(in);
  }
};

sandbox.mac.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
      { explicit: null },
    ]);
  }

  echoSeatbeltExtensionToken(in) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec,
      sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec,
      [in],
      false);
  }

};

sandbox.mac.mojom.TraitsTestService.getRemote = function() {
  let remote = new sandbox.mac.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sandbox.mac.mojom.TraitsTestService',
    'context');
  return remote.$;
};

sandbox.mac.mojom.TraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec.$.structSpec);
          const result = this.impl.echoSeatbeltExtensionToken(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec);
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

sandbox.mac.mojom.TraitsTestServiceReceiver = sandbox.mac.mojom.TraitsTestServiceReceiver;

sandbox.mac.mojom.TraitsTestServicePtr = sandbox.mac.mojom.TraitsTestServiceRemote;
sandbox.mac.mojom.TraitsTestServiceRequest = sandbox.mac.mojom.TraitsTestServicePendingReceiver;

