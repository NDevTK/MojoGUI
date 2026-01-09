// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_factory_daemon.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Enum: CreateCdmStatus
chromeos.cdm.mojom.CreateCdmStatus = {
  kNoMoreInstances: 0,
  kInsufficientGpuResources: 1,
};

// Interface: CdmFactory
chromeos.cdm.mojom.CdmFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cdm.mojom.CdmFactory';
  }

};

chromeos.cdm.mojom.CdmFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CdmFactoryDaemon
chromeos.cdm.mojom.CdmFactoryDaemonPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cdm.mojom.CdmFactoryDaemon';
  }

};

chromeos.cdm.mojom.CdmFactoryDaemonRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
