// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/output_protection.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: ProtectionType
media.mojom.ProtectionType = {
  NONE: 0,
  HDCP: 1,
};

// Enum: LinkType
media.mojom.LinkType = {
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
media.mojom.OutputProtectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.OutputProtection';
  }

};

media.mojom.OutputProtectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
