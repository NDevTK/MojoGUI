// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaService
media.mojom.MediaServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaService';
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Method: CreateInterfaceFactory
    // Call: CreateInterfaceFactory(factory, frame_interfaces)
  }

};

media.mojom.MediaServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
