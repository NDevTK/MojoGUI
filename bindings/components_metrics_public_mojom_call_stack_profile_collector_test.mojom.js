// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/call_stack_profile_collector_test.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};

metrics.mojom.CallStackProfileCollectorTest = {};
metrics.mojom.CallStackProfileCollectorTest.$interfaceName = 'metrics.mojom.CallStackProfileCollectorTest';
metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ParamsSpec = { $: {} };
metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ResponseParamsSpec = { $: {} };

// Interface: CallStackProfileCollectorTest
mojo.internal.Struct(
    metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ParamsSpec, 'metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_Params', [
      mojo.internal.StructField('in', 0, 0, metrics.mojom.SampledProfileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ResponseParamsSpec, 'metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, metrics.mojom.SampledProfileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

metrics.mojom.CallStackProfileCollectorTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.CallStackProfileCollectorTestRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.CallStackProfileCollectorTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.CallStackProfileCollectorTestPendingReceiver,
      handle);
    this.$ = new metrics.mojom.CallStackProfileCollectorTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.CallStackProfileCollectorTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bounceSampledProfile(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ParamsSpec,
      metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ResponseParamsSpec,
      [in],
      false);
  }

};

metrics.mojom.CallStackProfileCollectorTest.getRemote = function() {
  let remote = new metrics.mojom.CallStackProfileCollectorTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.CallStackProfileCollectorTest',
    'context');
  return remote.$;
};

metrics.mojom.CallStackProfileCollectorTestReceiver = class {
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
          const params = metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bounceSampledProfile(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

metrics.mojom.CallStackProfileCollectorTestReceiver = metrics.mojom.CallStackProfileCollectorTestReceiver;

metrics.mojom.CallStackProfileCollectorTestPtr = metrics.mojom.CallStackProfileCollectorTestRemote;
metrics.mojom.CallStackProfileCollectorTestRequest = metrics.mojom.CallStackProfileCollectorTestPendingReceiver;

