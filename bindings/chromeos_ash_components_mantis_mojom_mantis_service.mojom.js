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

};

mantis.mojom.MantisServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
