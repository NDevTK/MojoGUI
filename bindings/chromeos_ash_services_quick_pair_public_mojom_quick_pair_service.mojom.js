// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/quick_pair/public/mojom/quick_pair_service.mojom
// Module: ash.quick_pair.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_pair = ash.quick_pair || {};
ash.quick_pair.mojom = ash.quick_pair.mojom || {};


// Interface: QuickPairService
ash.quick_pair.mojom.QuickPairServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.quick_pair.mojom.QuickPairService';
  }

  connect(fast_pair_data_parser) {
    // Method: Connect
    // Call: Connect(fast_pair_data_parser)
  }

};

ash.quick_pair.mojom.QuickPairServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
