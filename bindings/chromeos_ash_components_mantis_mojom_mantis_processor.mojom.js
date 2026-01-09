// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_processor.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};


// Enum: MantisError
mantis.mojom.MantisError = {
};

// Enum: SafetyClassifierVerdict
mantis.mojom.SafetyClassifierVerdict = {
};

// Enum: SegmentationMode
mantis.mojom.SegmentationMode = {
};

// Struct: TouchPoint
mantis.mojom.TouchPoint = class {
  constructor(values = {}) {
  }
};

// Interface: MantisProcessor
mantis.mojom.MantisProcessorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mantis.mojom.MantisProcessor';
  }

};

mantis.mojom.MantisProcessorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
