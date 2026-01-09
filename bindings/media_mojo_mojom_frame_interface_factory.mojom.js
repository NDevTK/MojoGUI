// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/frame_interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MuteStateObserver
media.mojom.MuteStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MuteStateObserver';
  }

  onMuteStateChange(muted) {
    // Method: OnMuteStateChange
    // Call: OnMuteStateChange(muted)
  }

};

media.mojom.MuteStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameInterfaceFactory
media.mojom.FrameInterfaceFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.FrameInterfaceFactory';
  }

  createProvisionFetcher(provision_fetcher) {
    // Method: CreateProvisionFetcher
    // Call: CreateProvisionFetcher(provision_fetcher)
  }

  createCdmStorage(cdm_storage) {
    // Method: CreateCdmStorage
    // Call: CreateCdmStorage(cdm_storage)
  }

  registerMuteStateObserver(site_mute_observer) {
    // Method: RegisterMuteStateObserver
    // Call: RegisterMuteStateObserver(site_mute_observer)
  }

  createDCOMPSurfaceRegistry(registry) {
    // Method: CreateDCOMPSurfaceRegistry
    // Call: CreateDCOMPSurfaceRegistry(registry)
  }

  getCdmOrigin() {
    // Method: GetCdmOrigin
    return new Promise((resolve) => {
      // Call: GetCdmOrigin()
      resolve({});
    });
  }

  bindEmbedderReceiver(receiver) {
    // Method: BindEmbedderReceiver
    // Call: BindEmbedderReceiver(receiver)
  }

};

media.mojom.FrameInterfaceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
