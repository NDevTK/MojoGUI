// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_service.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};


// Enum: MantisFeatureStatus
mantis.mojom.MantisFeatureStatus = {
  kARCVMDisabled: 0,
  kAvailable: 1,
};

// Enum: InitializeResult
mantis.mojom.InitializeResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
};

// Interface: PlatformModelProgressObserver
mantis.mojom.PlatformModelProgressObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mantis.mojom.PlatformModelProgressObserver';
  }

  0(progress) {
    // Method: 0
    // Call: 0(progress)
  }

};

mantis.mojom.PlatformModelProgressObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MantisService
mantis.mojom.MantisServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mantis.mojom.MantisService';
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  0(progress_observer, processor, dlc_uuid, text_classifier) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(progress_observer, processor, dlc_uuid, text_classifier)
      resolve({});
    });
  }

};

mantis.mojom.MantisServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
