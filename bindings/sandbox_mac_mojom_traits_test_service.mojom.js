// Auto-generated MojoJS binding
// Source: chromium_src/sandbox/mac/mojom/traits_test_service.mojom
// Module: sandbox.mac.mojom

'use strict';

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
};

sandbox.mac.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoSeatbeltExtensionToken(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
          const params = sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.echoSeatbeltExtensionToken');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

sandbox.mac.mojom.TraitsTestServiceReceiver = sandbox.mac.mojom.TraitsTestServiceReceiver;

sandbox.mac.mojom.TraitsTestServicePtr = sandbox.mac.mojom.TraitsTestServiceRemote;
sandbox.mac.mojom.TraitsTestServiceRequest = sandbox.mac.mojom.TraitsTestServicePendingReceiver;

