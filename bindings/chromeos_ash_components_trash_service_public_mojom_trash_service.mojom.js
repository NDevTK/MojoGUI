// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/trash_service/public/mojom/trash_service.mojom
// Module: ash.trash_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.trash_service = ash.trash_service || {};
ash.trash_service.mojom = ash.trash_service.mojom || {};


// Interface: TrashService
ash.trash_service.mojom.TrashServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.trash_service.mojom.TrashService';
  }

  parseTrashInfoFile(trash_info_file) {
    // Method: ParseTrashInfoFile
    return new Promise((resolve) => {
      // Call: ParseTrashInfoFile(trash_info_file)
      resolve({});
    });
  }

};

ash.trash_service.mojom.TrashServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
