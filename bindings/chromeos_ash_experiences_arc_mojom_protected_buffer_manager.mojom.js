// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/protected_buffer_manager.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  deprecatedGetProtectedSharedMemoryFromHandle(dummy_handle) {
    return this.$.deprecatedGetProtectedSharedMemoryFromHandle(dummy_handle);
  }
  getProtectedSharedMemoryFromHandle(dummy_handle) {
    return this.$.getProtectedSharedMemoryFromHandle(dummy_handle);
  }
  getProtectedNativePixmapHandleFromHandle(dummy_handle) {
    return this.$.getProtectedNativePixmapHandleFromHandle(dummy_handle);
  }
  isProtectedNativePixmapHandle(dummy_handle) {
    return this.$.isProtectedNativePixmapHandle(dummy_handle);
  }
};

arc.mojom.ProtectedBufferManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProtectedBufferManager', [
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  deprecatedGetProtectedSharedMemoryFromHandle(dummy_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec,
      arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec,
      [dummy_handle],
      false);
  }

  getProtectedSharedMemoryFromHandle(dummy_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec,
      arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ResponseParamsSpec,
      [dummy_handle],
      false);
  }

  getProtectedNativePixmapHandleFromHandle(dummy_handle) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec,
      arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ResponseParamsSpec,
      [dummy_handle],
      false);
  }

  isProtectedNativePixmapHandle(dummy_handle) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProtectedBufferManager', [
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec.$.structSpec);
          const result = this.impl.deprecatedGetProtectedSharedMemoryFromHandle(params.dummy_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.ProtectedBufferManagerReceiver = arc.mojom.ProtectedBufferManagerReceiver;

arc.mojom.ProtectedBufferManagerPtr = arc.mojom.ProtectedBufferManagerRemote;
arc.mojom.ProtectedBufferManagerRequest = arc.mojom.ProtectedBufferManagerPendingReceiver;

