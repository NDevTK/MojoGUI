// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/dcomp_surface_registry.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: DCOMPSurfaceRegistry
media.mojom.DCOMPSurfaceRegistry = {};

media.mojom.DCOMPSurfaceRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DCOMPSurfaceRegistryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DCOMPSurfaceRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DCOMPSurfaceRegistryPendingReceiver,
      handle);
    this.$ = new media.mojom.DCOMPSurfaceRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.DCOMPSurfaceRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec,
      media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      [surface_handle]);
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec,
      null,
      [token]);
  }

};

media.mojom.DCOMPSurfaceRegistry.getRemote = function() {
  let remote = new media.mojom.DCOMPSurfaceRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DCOMPSurfaceRegistry',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterDCOMPSurfaceHandle
media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DCOMPSurfaceRegistry.RegisterDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'surface_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DCOMPSurfaceRegistry.RegisterDCOMPSurfaceHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnregisterDCOMPSurfaceHandle
media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DCOMPSurfaceRegistry.UnregisterDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.DCOMPSurfaceRegistryPtr = media.mojom.DCOMPSurfaceRegistryRemote;
media.mojom.DCOMPSurfaceRegistryRequest = media.mojom.DCOMPSurfaceRegistryPendingReceiver;

