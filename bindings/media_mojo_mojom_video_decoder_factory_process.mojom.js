// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder_factory_process.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gpu = gpu || {};
var sandbox = sandbox || {};
var viz = viz || {};

media.mojom.VideoDecoderFactoryProcess = {};
media.mojom.VideoDecoderFactoryProcess.$interfaceName = 'media.mojom.VideoDecoderFactoryProcess';
media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec = { $: {} };

// Interface: VideoDecoderFactoryProcess
mojo.internal.Struct(
    media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec, 'media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_Params', [
      mojo.internal.StructField('gpu_feature_info', 0, 0, gpu.mojom.GpuFeatureInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.InterfaceFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('gpu_remote', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.GpuRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

media.mojom.VideoDecoderFactoryProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecoderFactoryProcessRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoderFactoryProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecoderFactoryProcessPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecoderFactoryProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoDecoderFactoryProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeVideoDecoderFactory(gpu_feature_info, receiver, gpu_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec,
      null,
      [gpu_feature_info, receiver, gpu_remote],
      false);
  }

};

media.mojom.VideoDecoderFactoryProcess.getRemote = function() {
  let remote = new media.mojom.VideoDecoderFactoryProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoderFactoryProcess',
    'context');
  return remote.$;
};

media.mojom.VideoDecoderFactoryProcessReceiver = class {
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
        
        // Try Method 0: InitializeVideoDecoderFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeVideoDecoderFactory (0)');
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
          const params = decoder.decodeStructInline(media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.initializeVideoDecoderFactory');
          const result = this.impl.initializeVideoDecoderFactory(params.gpu_feature_info, params.receiver, params.gpu_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoDecoderFactoryProcessReceiver = media.mojom.VideoDecoderFactoryProcessReceiver;

media.mojom.VideoDecoderFactoryProcessPtr = media.mojom.VideoDecoderFactoryProcessRemote;
media.mojom.VideoDecoderFactoryProcessRequest = media.mojom.VideoDecoderFactoryProcessPendingReceiver;

