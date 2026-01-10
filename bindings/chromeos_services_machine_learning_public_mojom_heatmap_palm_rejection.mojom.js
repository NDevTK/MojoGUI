// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/heatmap_palm_rejection.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.machine_learning.mojom = chromeos.machine_learning.machine_learning.mojom || {};


// Enum: LoadHeatmapPalmRejectionResult
chromeos.machine_learning.machine_learning.mojom.mojom.LoadHeatmapPalmRejectionResult = {
  OK: 0,
  LOAD_MODEL_ERROR: 1,
  CREATE_GRAPH_EXECUTOR_ERROR: 2,
  OPEN_DEVICE_ERROR: 3,
};
chromeos.machine_learning.machine_learning.mojom.mojom.LoadHeatmapPalmRejectionResultSpec = { $: mojo.internal.Enum() };

// Struct: HeatmapPalmRejectionConfig
chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HeatmapPalmRejectionConfig',
      packedSize: 48,
      fields: [
        { name: 'tf_model_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'heatmap_hidraw_device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_node', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'output_node', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'palm_threshold', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 1 },
        { name: 'crop_heatmap', packedOffset: 24, packedBitOffset: 0, type: chromeos.machine_learning.mojom.CropHeatmapSpec, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 48}, {version: 3, packedSize: 48}]
    }
  }
};

// Struct: HeatmapProcessedEvent
chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapProcessedEventSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HeatmapProcessedEvent',
      packedSize: 24,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'is_palm', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CropHeatmap
chromeos.machine_learning.machine_learning.mojom.mojom.CropHeatmapSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.CropHeatmap',
      packedSize: 16,
      fields: [
        { name: 'bottom_crop', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'left_crop', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'right_crop', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'top_crop', packedOffset: 3, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: HeatmapPalmRejectionClient
chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClient = {};

chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHeatmapProcessedEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec,
      null,
      [event]);
  }

};

chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClient.getRemote = function() {
  let remote = new chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnHeatmapProcessedEvent
chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClient_OnHeatmapProcessedEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient.OnHeatmapProcessedEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.HeatmapProcessedEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientPtr = chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientRemote;
chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientRequest = chromeos.machine_learning.machine_learning.mojom.mojom.HeatmapPalmRejectionClientPendingReceiver;

