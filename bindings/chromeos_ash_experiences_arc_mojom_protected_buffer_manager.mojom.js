// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/protected_buffer_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ProtectedBufferManager
arc.mojom.mojom.ProtectedBufferManager = {};

arc.mojom.mojom.ProtectedBufferManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ProtectedBufferManagerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ProtectedBufferManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ProtectedBufferManagerPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ProtectedBufferManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ProtectedBufferManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  deprecatedGetProtectedSharedMemoryFromHandle(dummy_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec,
      arc.mojom.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec,
      [dummy_handle]);
  }

  getProtectedSharedMemoryFromHandle(dummy_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec,
      arc.mojom.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParamsSpec,
      [dummy_handle]);
  }

  getProtectedNativePixmapHandleFromHandle(dummy_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec,
      arc.mojom.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParamsSpec,
      [dummy_handle]);
  }

  isProtectedNativePixmapHandle(dummy_handle) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec,
      arc.mojom.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ResponseParamsSpec,
      [dummy_handle]);
  }

};

arc.mojom.mojom.ProtectedBufferManager.getRemote = function() {
  let remote = new arc.mojom.mojom.ProtectedBufferManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ProtectedBufferManager',
    'context');
  return remote.$;
};

// ParamsSpec for DeprecatedGetProtectedSharedMemoryFromHandle
arc.mojom.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.DeprecatedGetProtectedSharedMemoryFromHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'dummy_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'shared_memory_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProtectedSharedMemoryFromHandle
arc.mojom.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.GetProtectedSharedMemoryFromHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'dummy_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.GetProtectedSharedMemoryFromHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'unsafe_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProtectedNativePixmapHandleFromHandle
arc.mojom.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.GetProtectedNativePixmapHandleFromHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'dummy_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.GetProtectedNativePixmapHandleFromHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'native_pixmap_handle', packedOffset: 0, packedBitOffset: 0, type: media.stable.mojom.NativePixmapHandleSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsProtectedNativePixmapHandle
arc.mojom.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.IsProtectedNativePixmapHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'dummy_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProtectedBufferManager.IsProtectedNativePixmapHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_protected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ProtectedBufferManagerPtr = arc.mojom.mojom.ProtectedBufferManagerRemote;
arc.mojom.mojom.ProtectedBufferManagerRequest = arc.mojom.mojom.ProtectedBufferManagerPendingReceiver;

