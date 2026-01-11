// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder_factory_process.mojom
// Module: media.mojom

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
  initializeVideoDecoderFactory(gpu_feature_info, receiver, gpu_remote) {
    return this.$.initializeVideoDecoderFactory(gpu_feature_info, receiver, gpu_remote);
  }
};

media.mojom.VideoDecoderFactoryProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoderFactoryProcess', [
      { explicit: null },
    ]);
  }

  initializeVideoDecoderFactory(gpu_feature_info, receiver, gpu_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoderFactoryProcess', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec.$.structSpec);
          const result = this.impl.initializeVideoDecoderFactory(params.gpu_feature_info, params.receiver, params.gpu_remote);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.VideoDecoderFactoryProcessReceiver = media.mojom.VideoDecoderFactoryProcessReceiver;

media.mojom.VideoDecoderFactoryProcessPtr = media.mojom.VideoDecoderFactoryProcessRemote;
media.mojom.VideoDecoderFactoryProcessRequest = media.mojom.VideoDecoderFactoryProcessPendingReceiver;

