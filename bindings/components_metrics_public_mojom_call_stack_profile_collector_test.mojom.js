// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/call_stack_profile_collector_test.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Interface: CallStackProfileCollectorTest
metrics.mojom.CallStackProfileCollectorTest = {};

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
      metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ParamsSpec.$,
      metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ResponseParamsSpec.$,
      [in]);
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

// ParamsSpec for BounceSampledProfile
metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.CallStackProfileCollectorTest.BounceSampledProfile_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

metrics.mojom.CallStackProfileCollectorTest_BounceSampledProfile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.CallStackProfileCollectorTest.BounceSampledProfile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
metrics.mojom.CallStackProfileCollectorTestPtr = metrics.mojom.CallStackProfileCollectorTestRemote;
metrics.mojom.CallStackProfileCollectorTestRequest = metrics.mojom.CallStackProfileCollectorTestPendingReceiver;

