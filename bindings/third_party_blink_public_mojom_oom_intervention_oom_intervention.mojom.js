// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/oom_intervention/oom_intervention.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: OomInterventionHost
blink.mojom.OomInterventionHost = {};

blink.mojom.OomInterventionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.OomInterventionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OomInterventionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.OomInterventionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.OomInterventionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.OomInterventionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHighMemoryUsage() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.OomInterventionHost.getRemote = function() {
  let remote = new blink.mojom.OomInterventionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OomInterventionHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnHighMemoryUsage
blink.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OomInterventionHost.OnHighMemoryUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.OomInterventionHostPtr = blink.mojom.OomInterventionHostRemote;
blink.mojom.OomInterventionHostRequest = blink.mojom.OomInterventionHostPendingReceiver;


// Interface: OomIntervention
blink.mojom.OomIntervention = {};

blink.mojom.OomInterventionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.OomInterventionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OomIntervention';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.OomInterventionPendingReceiver,
      handle);
    this.$ = new blink.mojom.OomInterventionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.OomInterventionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startDetection(host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.OomIntervention_StartDetection_ParamsSpec,
      null,
      [host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled]);
  }

};

blink.mojom.OomIntervention.getRemote = function() {
  let remote = new blink.mojom.OomInterventionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OomIntervention',
    'context');
  return remote.$;
};

// ParamsSpec for StartDetection
blink.mojom.OomIntervention_StartDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OomIntervention.StartDetection_Params',
      packedSize: 48,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'detection_args', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'renderer_pause_enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'navigate_ads_enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'purge_v8_memory_enabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.OomInterventionPtr = blink.mojom.OomInterventionRemote;
blink.mojom.OomInterventionRequest = blink.mojom.OomInterventionPendingReceiver;

