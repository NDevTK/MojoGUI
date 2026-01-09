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
};

// Struct: HeatmapPalmRejectionConfig
chromeos.machine_learning.mojom.HeatmapPalmRejectionConfig = class {
  constructor(values = {}) {
    this.crop_heatmap = values.crop_heatmap !== undefined ? values.crop_heatmap : 0;
  }
};

// Struct: HeatmapProcessedEvent
chromeos.machine_learning.mojom.HeatmapProcessedEvent = class {
  constructor(values = {}) {
    this.is_palm = values.is_palm !== undefined ? values.is_palm : false;
  }
};

// Struct: CropHeatmap
chromeos.machine_learning.mojom.CropHeatmap = class {
  constructor(values = {}) {
    this.top_crop = values.top_crop !== undefined ? values.top_crop : 0;
  }
};

// Interface: HeatmapPalmRejectionClient
chromeos.machine_learning.mojom.HeatmapPalmRejectionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.HeatmapPalmRejectionClient';
  }

};

chromeos.machine_learning.mojom.HeatmapPalmRejectionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
