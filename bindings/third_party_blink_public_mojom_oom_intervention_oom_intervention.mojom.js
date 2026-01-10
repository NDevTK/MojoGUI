// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/oom_intervention/oom_intervention.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DetectionArgsSpec = { $: {} };
blink.mojom.OomInterventionHost = {};
blink.mojom.OomInterventionHost.$interfaceName = 'blink.mojom.OomInterventionHost';
blink.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec = { $: {} };
blink.mojom.OomIntervention = {};
blink.mojom.OomIntervention.$interfaceName = 'blink.mojom.OomIntervention';
blink.mojom.OomIntervention_StartDetection_ParamsSpec = { $: {} };

// Struct: DetectionArgs
mojo.internal.Struct(
    blink.mojom.DetectionArgsSpec, 'blink.mojom.DetectionArgs', [
      mojo.internal.StructField('private_footprint_threshold', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: OomInterventionHost
mojo.internal.Struct(
    blink.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec, 'blink.mojom.OomInterventionHost_OnHighMemoryUsage_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

blink.mojom.OomInterventionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHighMemoryUsage();
          break;
        }
      }
    });
  }
};

blink.mojom.OomInterventionHostReceiver = blink.mojom.OomInterventionHostReceiver;

blink.mojom.OomInterventionHostPtr = blink.mojom.OomInterventionHostRemote;
blink.mojom.OomInterventionHostRequest = blink.mojom.OomInterventionHostPendingReceiver;


// Interface: OomIntervention
mojo.internal.Struct(
    blink.mojom.OomIntervention_StartDetection_ParamsSpec, 'blink.mojom.OomIntervention_StartDetection_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.OomInterventionHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('detection_args', 8, 0, blink.mojom.DetectionArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_pause_enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('navigate_ads_enabled', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('purge_v8_memory_enabled', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled],
      false);
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

blink.mojom.OomInterventionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.OomIntervention_StartDetection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startDetection(params.host, params.detection_args, params.renderer_pause_enabled, params.navigate_ads_enabled, params.purge_v8_memory_enabled);
          break;
        }
      }
    });
  }
};

blink.mojom.OomInterventionReceiver = blink.mojom.OomInterventionReceiver;

blink.mojom.OomInterventionPtr = blink.mojom.OomInterventionRemote;
blink.mojom.OomInterventionRequest = blink.mojom.OomInterventionPendingReceiver;

