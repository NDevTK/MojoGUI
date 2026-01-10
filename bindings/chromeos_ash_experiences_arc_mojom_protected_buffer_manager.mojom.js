// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/protected_buffer_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

arc.mojom.ProtectedBufferManager = {};
arc.mojom.ProtectedBufferManager.$interfaceName = 'arc.mojom.ProtectedBufferManager';
arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec = { $: {} };
arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec = { $: {} };
arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec = { $: {} };
arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParamsSpec = { $: {} };
arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec = { $: {} };
arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParamsSpec = { $: {} };
arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec = { $: {} };
arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ResponseParamsSpec = { $: {} };

// Interface: ProtectedBufferManager
mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec, 'arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_Params', [
      mojo.internal.StructField('dummy_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec, 'arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParams', [
      mojo.internal.StructField('shared_memory_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec, 'arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_Params', [
      mojo.internal.StructField('dummy_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParamsSpec, 'arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParams', [
      mojo.internal.StructField('unsafe_region', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec, 'arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_Params', [
      mojo.internal.StructField('dummy_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParamsSpec, 'arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParams', [
      mojo.internal.StructField('native_pixmap_handle', 0, 0, media.stable.mojom.NativePixmapHandleSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec, 'arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_Params', [
      mojo.internal.StructField('dummy_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ResponseParamsSpec, 'arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ResponseParams', [
      mojo.internal.StructField('is_protected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ProtectedBufferManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ProtectedBufferManagerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ProtectedBufferManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ProtectedBufferManagerPendingReceiver,
      handle);
    this.$ = new arc.mojom.ProtectedBufferManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ProtectedBufferManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  deprecatedGetProtectedSharedMemoryFromHandle(dummy_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec,
      arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec,
      [dummy_handle],
      false);
  }

  getProtectedSharedMemoryFromHandle(dummy_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec,
      arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParamsSpec,
      [dummy_handle],
      false);
  }

  getProtectedNativePixmapHandleFromHandle(dummy_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec,
      arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParamsSpec,
      [dummy_handle],
      false);
  }

  isProtectedNativePixmapHandle(dummy_handle) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec,
      arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ResponseParamsSpec,
      [dummy_handle],
      false);
  }

};

arc.mojom.ProtectedBufferManager.getRemote = function() {
  let remote = new arc.mojom.ProtectedBufferManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ProtectedBufferManager',
    'context');
  return remote.$;
};

arc.mojom.ProtectedBufferManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deprecatedGetProtectedSharedMemoryFromHandle(params.dummy_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProtectedSharedMemoryFromHandle(params.dummy_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProtectedNativePixmapHandleFromHandle(params.dummy_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isProtectedNativePixmapHandle(params.dummy_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.ProtectedBufferManagerReceiver = arc.mojom.ProtectedBufferManagerReceiver;

arc.mojom.ProtectedBufferManagerPtr = arc.mojom.ProtectedBufferManagerRemote;
arc.mojom.ProtectedBufferManagerRequest = arc.mojom.ProtectedBufferManagerPendingReceiver;

