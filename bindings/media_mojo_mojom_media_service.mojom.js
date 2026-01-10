// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var sandbox = sandbox || {};

media.mojom.MediaService = {};
media.mojom.MediaService.$interfaceName = 'media.mojom.MediaService';
media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec = { $: {} };

media.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kNoSandbox;

media.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kGpu;

media.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kService;

// Interface: MediaService
mojo.internal.Struct(
    media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec, 'media.mojom.MediaService_CreateInterfaceFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(media.mojom.InterfaceFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('frame_interfaces', 8, 0, mojo.internal.InterfaceProxy(media.mojom.FrameInterfaceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.MediaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaServicePendingReceiver,
      handle);
    this.$ = new media.mojom.MediaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec,
      null,
      [factory, frame_interfaces],
      false);
  }

};

media.mojom.MediaService.getRemote = function() {
  let remote = new media.mojom.MediaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaService',
    'context');
  return remote.$;
};

media.mojom.MediaServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateInterfaceFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateInterfaceFactory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createInterfaceFactory');
          const result = this.impl.createInterfaceFactory(params.factory, params.frame_interfaces);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.MediaServiceReceiver = media.mojom.MediaServiceReceiver;

media.mojom.MediaServicePtr = media.mojom.MediaServiceRemote;
media.mojom.MediaServiceRequest = media.mojom.MediaServicePendingReceiver;

