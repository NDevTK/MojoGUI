// Auto-generated MojoJS binding
// Source: chromium_src/components/services/quarantine/public/mojom/quarantine.mojom
// Module: quarantine.mojom

'use strict';

// Module namespace
var quarantine = quarantine || {};
quarantine.mojom = quarantine.mojom || {};


// Enum: QuarantineFileResult
quarantine.mojom.QuarantineFileResult = {
  OK: 0,
};

// Interface: Quarantine
quarantine.mojom.QuarantinePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'quarantine.mojom.Quarantine';
  }

  quarantineFile(full_path, source_url, referrer_url, request_initiator, client_guid) {
    // Method: QuarantineFile
    return new Promise((resolve) => {
      // Call: QuarantineFile(full_path, source_url, referrer_url, request_initiator, client_guid)
      resolve({});
    });
  }

};

quarantine.mojom.QuarantineRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
