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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.machine_learning.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHeatmapProcessedEvent(params.event);
          break;
        }
      }
    });
  }
};

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientReceiver = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientReceiver;

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPtr = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote;
chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRequest = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPendingReceiver;

