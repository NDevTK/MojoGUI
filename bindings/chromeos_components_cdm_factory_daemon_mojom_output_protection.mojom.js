// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/output_protection.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Enum: ProtectionType
chromeos.cdm.mojom.ProtectionType = {
  NONE: 0,
  HDCP_TYPE_0: 1,
};

// Enum: LinkType
chromeos.cdm.mojom.LinkType = {
  NONE: 0,
  UNKNOWN: 1,
  INTERNAL: 2,
  VGA: 3,
  HDMI: 4,
  DVI: 5,
  DISPLAYPORT: 6,
  NETWORK: 7,
};

// Interface: OutputProtection
chromeos.cdm.mojom.OutputProtectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cdm.mojom.OutputProtection';
  }

};

chromeos.cdm.mojom.OutputProtectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
