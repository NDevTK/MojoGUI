// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/browser_cdm_factory.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Interface: BrowserCdmFactory
chromeos.cdm.mojom.BrowserCdmFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cdm.mojom.BrowserCdmFactory';
  }

  0(key_system) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(key_system)
      resolve({});
    });
  }

  1(output_protection) {
    // Method: 1
    // Call: 1(output_protection)
  }

  2() {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2()
      resolve({});
    });
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

  purpose(Android) {
    // Method: purpose
    // Call: purpose(Android)
  }

  4(key_id, hw_identifier) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(key_id, hw_identifier)
      resolve({});
    });
  }

  5(size) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(size)
      resolve({});
    });
  }

  6(secure_handle, offset, stream_data) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(secure_handle, offset, stream_data)
      resolve({});
    });
  }

};

chromeos.cdm.mojom.BrowserCdmFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
