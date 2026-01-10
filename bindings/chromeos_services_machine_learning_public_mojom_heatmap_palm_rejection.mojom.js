// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/heatmap_palm_rejection.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};
var mojo_base = mojo_base || {};

chromeos.machine_learning.mojom.LoadHeatmapPalmRejectionResultSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.HeatmapPalmRejectionConfigSpec = { $: {} };
chromeos.machine_learning.mojom.HeatmapProcessedEventSpec = { $: {} };
chromeos.machine_learning.mojom.CropHeatmapSpec = { $: {} };
chromeos.machine_learning.mojom.HeatmapPalmRejectionClient = {};
chromeos.machine_learning.mojom.HeatmapPalmRejectionClient.$interfaceName = 'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient';
chromeos.machine_learning.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec = { $: {} };

// Enum: LoadHeatmapPalmRejectionResult
chromeos.machine_learning.mojom.LoadHeatmapPalmRejectionResult = {
  OK: 0,
  UNKNOWN_ERROR: 1,
  LOAD_MODEL_ERROR: 2,
  CREATE_GRAPH_EXECUTOR_ERROR: 3,
  OPEN_DEVICE_ERROR: 4,
  MinVersion: 4,
  MinVersion: 4,
};

// Struct: HeatmapPalmRejectionConfig
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HeatmapPalmRejectionConfigSpec, 'chromeos.machine_learning.mojom.HeatmapPalmRejectionConfig', [
      mojo.internal.StructField('tf_model_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('heatmap_hidraw_device', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_node', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_node', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('palm_threshold', 24, 0, mojo.internal.Double, 0, false, 1, undefined),
      mojo.internal.StructField('crop_heatmap', 32, 0, chromeos.machine_learning.mojom.CropHeatmapSpec.$, null, true, 3, undefined),
    ],
    [[0, 32], [1, 40], [3, 48]]);

// Struct: HeatmapProcessedEvent
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HeatmapProcessedEventSpec, 'chromeos.machine_learning.mojom.HeatmapProcessedEvent', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_palm', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CropHeatmap
mojo.internal.Struct(
    chromeos.machine_learning.mojom.CropHeatmapSpec, 'chromeos.machine_learning.mojom.CropHeatmap', [
      mojo.internal.StructField('bottom_crop', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('left_crop', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('right_crop', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('top_crop', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: HeatmapPalmRejectionClient
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec, 'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_Params', [
      mojo.internal.StructField('event', 0, 0, chromeos.machine_learning.mojom.HeatmapProcessedEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHeatmapProcessedEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

chromeos.machine_learning.mojom.HeatmapPalmRejectionClient.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnHeatmapProcessedEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.machine_learning.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHeatmapProcessedEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHeatmapProcessedEvent');
          const result = this.impl.onHeatmapProcessedEvent(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientReceiver = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientReceiver;

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPtr = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote;
chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRequest = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPendingReceiver;

