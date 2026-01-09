// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/dcomp_surface_registry.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: DCOMPSurfaceRegistry
media.mojom.DCOMPSurfaceRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.DCOMPSurfaceRegistry';
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    // Method: RegisterDCOMPSurfaceHandle
    return new Promise((resolve) => {
      // Call: RegisterDCOMPSurfaceHandle(surface_handle)
      resolve({});
    });
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Method: UnregisterDCOMPSurfaceHandle
    // Call: UnregisterDCOMPSurfaceHandle(token)
  }

};

media.mojom.DCOMPSurfaceRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
