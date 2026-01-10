// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/dcomp_surface_registry.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.DCOMPSurfaceRegistry = {};
media.mojom.DCOMPSurfaceRegistry.$interfaceName = 'media.mojom.DCOMPSurfaceRegistry';
media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec = { $: {} };
media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec = { $: {} };
media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec = { $: {} };

// Interface: DCOMPSurfaceRegistry
mojo.internal.Struct(
    media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec, 'media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_Params', [
      mojo.internal.StructField('surface_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec, 'media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec, 'media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [surface_handle],
      false);
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec,
      null,
      [token],
      false);
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

media.mojom.DCOMPSurfaceRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: RegisterDCOMPSurfaceHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterDCOMPSurfaceHandle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UnregisterDCOMPSurfaceHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterDCOMPSurfaceHandle (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerDCOMPSurfaceHandle');
          const result = this.impl.registerDCOMPSurfaceHandle(params.surface_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unregisterDCOMPSurfaceHandle');
          const result = this.impl.unregisterDCOMPSurfaceHandle(params.token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.DCOMPSurfaceRegistryReceiver = media.mojom.DCOMPSurfaceRegistryReceiver;

media.mojom.DCOMPSurfaceRegistryPtr = media.mojom.DCOMPSurfaceRegistryRemote;
media.mojom.DCOMPSurfaceRegistryRequest = media.mojom.DCOMPSurfaceRegistryPendingReceiver;

