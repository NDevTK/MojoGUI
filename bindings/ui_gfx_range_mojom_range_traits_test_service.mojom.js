// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/range/mojom/range_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.RangeTraitsTestService = {};
gfx.mojom.RangeTraitsTestService.$interfaceName = 'gfx.mojom.RangeTraitsTestService';
gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec = { $: {} };

// Interface: RangeTraitsTestService
mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRange_Params', [
      mojo.internal.StructField('p', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRangeF_Params', [
      mojo.internal.StructField('p', 0, 0, gfx.mojom.RangeFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RangeFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

gfx.mojom.RangeTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.RangeTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.RangeTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.RangeTraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.RangeTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gfx.mojom.RangeTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoRange(p) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec,
      [p],
      false);
  }

  echoRangeF(p) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec,
      [p],
      false);
  }

};

gfx.mojom.RangeTraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.RangeTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.RangeTraitsTestService',
    'context');
  return remote.$;
};

gfx.mojom.RangeTraitsTestServiceReceiver = class {
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
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoRange(params.p);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoRangeF(params.p);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

gfx.mojom.RangeTraitsTestServiceReceiver = gfx.mojom.RangeTraitsTestServiceReceiver;

gfx.mojom.RangeTraitsTestServicePtr = gfx.mojom.RangeTraitsTestServiceRemote;
gfx.mojom.RangeTraitsTestServiceRequest = gfx.mojom.RangeTraitsTestServicePendingReceiver;

