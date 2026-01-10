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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(4, 1); // Default ordinal 4 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DeprecatedGetProtectedSharedMemoryFromHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeprecatedGetProtectedSharedMemoryFromHandle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetProtectedSharedMemoryFromHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProtectedSharedMemoryFromHandle (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetProtectedNativePixmapHandleFromHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProtectedNativePixmapHandleFromHandle (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsProtectedNativePixmapHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsProtectedNativePixmapHandle (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProtectedBufferManager_DeprecatedGetProtectedSharedMemoryFromHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deprecatedGetProtectedSharedMemoryFromHandle');
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
          const params = decoder.decodeStruct(arc.mojom.ProtectedBufferManager_GetProtectedSharedMemoryFromHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getProtectedSharedMemoryFromHandle');
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
          const params = decoder.decodeStruct(arc.mojom.ProtectedBufferManager_GetProtectedNativePixmapHandleFromHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getProtectedNativePixmapHandleFromHandle');
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
          const params = decoder.decodeStruct(arc.mojom.ProtectedBufferManager_IsProtectedNativePixmapHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isProtectedNativePixmapHandle');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ProtectedBufferManagerReceiver = arc.mojom.ProtectedBufferManagerReceiver;

arc.mojom.ProtectedBufferManagerPtr = arc.mojom.ProtectedBufferManagerRemote;
arc.mojom.ProtectedBufferManagerRequest = arc.mojom.ProtectedBufferManagerPendingReceiver;

