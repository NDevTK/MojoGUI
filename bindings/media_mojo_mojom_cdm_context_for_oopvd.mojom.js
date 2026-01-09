// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_context_for_oopvd.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: DecryptStatus
media.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};

// Enum: CdmContextEvent
media.mojom.CdmContextEvent = {
  kHasAdditionalUsableKey: 0,
  kHardwareContextReset: 1,
};

// Interface: CdmContextEventCallback
media.mojom.CdmContextEventCallbackPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmContextEventCallback';
  }

  eventCallback(event) {
    // Method: EventCallback
    // Call: EventCallback(event)
  }

};

media.mojom.CdmContextEventCallbackRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CdmContextForOOPVD
media.mojom.CdmContextForOOPVDPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmContextForOOPVD';
  }

  getChromeOsCdmContext() {
    // Method: GetChromeOsCdmContext
    // Call: GetChromeOsCdmContext()
  }

  getHwKeyData(decrypt_config, hw_identifier) {
    // Method: GetHwKeyData
    return new Promise((resolve) => {
      // Call: GetHwKeyData(decrypt_config, hw_identifier)
      resolve({});
    });
  }

  registerEventCallback(callback) {
    // Method: RegisterEventCallback
    // Call: RegisterEventCallback(callback)
  }

  getChromeOsCdmContext() {
    // Method: GetChromeOsCdmContext
    // Call: GetChromeOsCdmContext()
  }

  getHwConfigData() {
    // Method: GetHwConfigData
    return new Promise((resolve) => {
      // Call: GetHwConfigData()
      resolve({});
    });
  }

  getChromeOsCdmContext() {
    // Method: GetChromeOsCdmContext
    // Call: GetChromeOsCdmContext()
  }

  getScreenResolutions() {
    // Method: GetScreenResolutions
    return new Promise((resolve) => {
      // Call: GetScreenResolutions()
      resolve({});
    });
  }

  getChromeOsCdmContext() {
    // Method: GetChromeOsCdmContext
    // Call: GetChromeOsCdmContext()
  }

  allocateSecureBuffer(size) {
    // Method: AllocateSecureBuffer
    return new Promise((resolve) => {
      // Call: AllocateSecureBuffer(size)
      resolve({});
    });
  }

  getChromeOsCdmContext() {
    // Method: GetChromeOsCdmContext
    // Call: GetChromeOsCdmContext()
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Method: ParseEncryptedSliceHeader
    return new Promise((resolve) => {
      // Call: ParseEncryptedSliceHeader(secure_handle, offset, stream_data)
      resolve({});
    });
  }

  getDecryptor() {
    // Method: GetDecryptor
    // Call: GetDecryptor()
  }

  decryptVideoBuffer(buffer, bytes) {
    // Method: DecryptVideoBuffer
    return new Promise((resolve) => {
      // Call: DecryptVideoBuffer(buffer, bytes)
      resolve({});
    });
  }

};

media.mojom.CdmContextForOOPVDRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
