// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: NFCProvider
device.mojom.NFCProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.NFCProvider';
  }

  getNFCForHost(host_id, receiver) {
    // Method: GetNFCForHost
    // Call: GetNFCForHost(host_id, receiver)
  }

  suspendNFCOperations() {
    // Method: SuspendNFCOperations
    // Call: SuspendNFCOperations()
  }

  resumeNFCOperations() {
    // Method: ResumeNFCOperations
    // Call: ResumeNFCOperations()
  }

};

device.mojom.NFCProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
