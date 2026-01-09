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

  1(client, storage, cdm, output_protection) {
    // Method: 1
    // Call: 1(client, storage, cdm, output_protection)
  }

  2(client, storage, output_protection, host, cdm) {
    // Method: 2
    // Call: 2(client, storage, output_protection, host, cdm)
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

  0(key_system) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(key_system)
      resolve({});
    });
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2(oemcryptor, protected_buffer_manager, output_protection) {
    // Method: 2
    // Call: 2(oemcryptor, protected_buffer_manager, output_protection)
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  4() {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4()
      resolve({});
    });
  }

  5() {
    // Method: 5
    // Call: 5()
  }

  6() {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6()
      resolve({});
    });
  }

  purpose(Android) {
    // Method: purpose
    // Call: purpose(Android)
  }

  7(key_id, hw_identifier) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(key_id, hw_identifier)
      resolve({});
    });
  }

  8(size) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(size)
      resolve({});
    });
  }

  9(secure_handle, offset, stream_data) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(secure_handle, offset, stream_data)
      resolve({});
    });
  }

};

chromeos.cdm.mojom.CdmFactoryDaemonRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
