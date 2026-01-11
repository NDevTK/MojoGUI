// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/oom_intervention/oom_intervention.mojom
// Module: blink.mojom

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
  onHighMemoryUsage() {
    return this.$.onHighMemoryUsage();
  }
};

blink.mojom.OomInterventionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OomInterventionHost', [
      { explicit: null },
    ]);
  }

  onHighMemoryUsage() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OomInterventionHost', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OomInterventionHost_OnHighMemoryUsage_ParamsSpec.$.structSpec);
          const result = this.impl.onHighMemoryUsage();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.OomInterventionHostReceiver = blink.mojom.OomInterventionHostReceiver;

blink.mojom.OomInterventionHostPtr = blink.mojom.OomInterventionHostRemote;
blink.mojom.OomInterventionHostRequest = blink.mojom.OomInterventionHostPendingReceiver;


// Interface: OomIntervention
mojo.internal.Struct(
    blink.mojom.OomIntervention_StartDetection_ParamsSpec, 'blink.mojom.OomIntervention_StartDetection_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.OomInterventionHostRemote), null, false, 0, undefined),
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
  startDetection(host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled) {
    return this.$.startDetection(host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled);
  }
};

blink.mojom.OomInterventionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OomIntervention', [
      { explicit: null },
    ]);
  }

  startDetection(host, detection_args, renderer_pause_enabled, navigate_ads_enabled, purge_v8_memory_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OomIntervention', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.OomIntervention_StartDetection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OomIntervention_StartDetection_ParamsSpec.$.structSpec);
          const result = this.impl.startDetection(params.host, params.detection_args, params.renderer_pause_enabled, params.navigate_ads_enabled, params.purge_v8_memory_enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.OomInterventionReceiver = blink.mojom.OomInterventionReceiver;

blink.mojom.OomInterventionPtr = blink.mojom.OomInterventionRemote;
blink.mojom.OomInterventionRequest = blink.mojom.OomInterventionPendingReceiver;

