// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_foundation_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: GpuInfoObserver
media.mojom.GpuInfoObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.GpuInfoObserver';
  }

  onGpuInfoUpdate(gpu_info) {
    // Method: OnGpuInfoUpdate
    // Call: OnGpuInfoUpdate(gpu_info)
  }

};

media.mojom.GpuInfoObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaFoundationService
media.mojom.MediaFoundationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaFoundationService';
  }

  isKeySystemSupported(key_system) {
    // Method: IsKeySystemSupported
    return new Promise((resolve) => {
      // Call: IsKeySystemSupported(key_system)
      resolve({});
    });
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Method: CreateInterfaceFactory
    // Call: CreateInterfaceFactory(factory, frame_interfaces)
  }

};

media.mojom.MediaFoundationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaFoundationServiceBroker
media.mojom.MediaFoundationServiceBrokerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaFoundationServiceBroker';
  }

  updateGpuInfo(gpu_info) {
    // Method: UpdateGpuInfo
    return new Promise((resolve) => {
      // Call: UpdateGpuInfo(gpu_info)
      resolve({});
    });
  }

  getService(cdm_path, receiver) {
    // Method: GetService
    // Call: GetService(cdm_path, receiver)
  }

};

media.mojom.MediaFoundationServiceBrokerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
