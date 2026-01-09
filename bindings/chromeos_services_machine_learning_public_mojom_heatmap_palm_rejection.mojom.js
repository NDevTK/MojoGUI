// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/heatmap_palm_rejection.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: LoadHeatmapPalmRejectionResult
chromeos.machine_learning.mojom.LoadHeatmapPalmRejectionResult = {
  OK: 0,
  LOAD_MODEL_ERROR: 1,
  CREATE_GRAPH_EXECUTOR_ERROR: 2,
  OPEN_DEVICE_ERROR: 3,
};

// Interface: HeatmapPalmRejectionClient
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

// Legacy compatibility
chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPtr = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRemote;
chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRequest = chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPendingReceiver;

