// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_document_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: MediaFoundationCdmData
media.mojom.MediaFoundationCdmData = class {
  constructor(values = {}) {
    this.cdm_store_path_root = values.cdm_store_path_root !== undefined ? values.cdm_store_path_root : 0;
  }
};

// Interface: CdmDocumentService
media.mojom.CdmDocumentServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmDocumentService';
  }

  challengePlatform(service_id, challenge) {
    // Method: ChallengePlatform
    return new Promise((resolve) => {
      // Call: ChallengePlatform(service_id, challenge)
      resolve({});
    });
  }

  getStorageId(version) {
    // Method: GetStorageId
    return new Promise((resolve) => {
      // Call: GetStorageId(version)
      resolve({});
    });
  }

  isVerifiedAccessEnabled() {
    // Method: IsVerifiedAccessEnabled
    return new Promise((resolve) => {
      // Call: IsVerifiedAccessEnabled()
      resolve({});
    });
  }

  getMediaFoundationCdmData() {
    // Method: GetMediaFoundationCdmData
    return new Promise((resolve) => {
      // Call: GetMediaFoundationCdmData()
      resolve({});
    });
  }

  setCdmClientToken(client_token) {
    // Method: SetCdmClientToken
    // Call: SetCdmClientToken(client_token)
  }

  onCdmEvent(event, hresult) {
    // Method: OnCdmEvent
    // Call: OnCdmEvent(event, hresult)
  }

};

media.mojom.CdmDocumentServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
