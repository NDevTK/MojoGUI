// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: CdmService
media.mojom.CdmServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmService';
  }

  createCdmFactory(factory, frame_interfaces) {
    // Method: CreateCdmFactory
    // Call: CreateCdmFactory(factory, frame_interfaces)
  }

};

media.mojom.CdmServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SeatbeltExtensionTokenProvider
media.mojom.SeatbeltExtensionTokenProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SeatbeltExtensionTokenProvider';
  }

  getTokens() {
    // Method: GetTokens
    return new Promise((resolve) => {
      // Call: GetTokens()
      resolve({});
    });
  }

};

media.mojom.SeatbeltExtensionTokenProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CdmServiceBroker
media.mojom.CdmServiceBrokerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmServiceBroker';
  }

  getService(cdm_path, token_provider, receiver) {
    // Method: GetService
    // Call: GetService(cdm_path, token_provider, receiver)
  }

};

media.mojom.CdmServiceBrokerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
