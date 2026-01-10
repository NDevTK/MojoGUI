// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/oom_intervention/oom_intervention.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DetectionArgs
blink.mojom.mojom.DetectionArgsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DetectionArgs',
      packedSize: 16,
      fields: [
        { name: 'private_footprint_threshold', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: OomInterventionHost
blink.mojom.mojom.OomInterventionHost = {};

blink.mojom.mojom.OomInterventionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.OomInterventionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OomInterventionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.OomInterventionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.OomInterventionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.OomInterventionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHighMemoryUsage() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.OomInterventionHost.getRemote = function() {
  let remote = new blink.mojom.mojom.OomInterventionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OomInterventionHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnHighMemoryUsage
blink.mojom.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OomInterventionHost.OnHighMemoryUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.OomInterventionHostPtr = blink.mojom.mojom.OomInterventionHostRemote;
blink.mojom.mojom.OomInterventionHostRequest = blink.mojom.mojom.OomInterventionHostPendingReceiver;


// Interface: OomIntervention
blink.mojom.mojom.OomIntervention = {};

blink.mojom.mojom.OomInterventionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.OomInterventionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OomIntervention';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.OomInterventionPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.OomInterventionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.OomInterventionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startDetection(host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.OomIntervention_StartDetection_ParamsSpec,
      null,
      [host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled]);
  }

};

blink.mojom.mojom.OomIntervention.getRemote = function() {
  let remote = new blink.mojom.mojom.OomInterventionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OomIntervention',
    'context');
  return remote.$;
};

// ParamsSpec for StartDetection
blink.mojom.mojom.OomIntervention_StartDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OomIntervention.StartDetection_Params',
      packedSize: 32,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.OomInterventionHostRemote), nullable: false, minVersion: 0 },
        { name: 'detection_args', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DetectionArgsSpec, nullable: false, minVersion: 0 },
        { name: 'renderer_pause_enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'navigate_ads_enabled', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'purge_v8_memory_enabled', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.OomInterventionPtr = blink.mojom.mojom.OomInterventionRemote;
blink.mojom.mojom.OomInterventionRequest = blink.mojom.mojom.OomInterventionPendingReceiver;

