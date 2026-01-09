// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/call_stack_profile_collector.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Enum: ProfileType
metrics.mojom.ProfileType = {
  kCPU: 0,
  kHeap: 1,
};
metrics.mojom.ProfileTypeSpec = { $: mojo.internal.Enum() };

// Struct: SampledProfile
metrics.mojom.SampledProfileSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.SampledProfile',
      packedSize: 16,
      fields: [
        { name: 'contents', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CallStackProfileCollector
metrics.mojom.CallStackProfileCollector = {};

metrics.mojom.CallStackProfileCollectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.CallStackProfileCollectorRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.CallStackProfileCollector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.CallStackProfileCollectorPendingReceiver,
      handle);
    this.$ = new metrics.mojom.CallStackProfileCollectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.CallStackProfileCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  collect(start_timestamp, profile_type, profile) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.CallStackProfileCollector_Collect_ParamsSpec,
      null,
      [start_timestamp, profile_type, profile]);
  }

};

metrics.mojom.CallStackProfileCollector.getRemote = function() {
  let remote = new metrics.mojom.CallStackProfileCollectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.CallStackProfileCollector',
    'context');
  return remote.$;
};

// ParamsSpec for Collect
metrics.mojom.CallStackProfileCollector_Collect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.CallStackProfileCollector.Collect_Params',
      packedSize: 32,
      fields: [
        { name: 'start_timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'profile_type', packedOffset: 8, packedBitOffset: 0, type: metrics.mojom.ProfileTypeSpec, nullable: false, minVersion: 0 },
        { name: 'profile', packedOffset: 16, packedBitOffset: 0, type: metrics.mojom.SampledProfileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
metrics.mojom.CallStackProfileCollectorPtr = metrics.mojom.CallStackProfileCollectorRemote;
metrics.mojom.CallStackProfileCollectorRequest = metrics.mojom.CallStackProfileCollectorPendingReceiver;

