// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder_factory_process.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecoderFactoryProcess
media.mojom.VideoDecoderFactoryProcess = {};

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
      [gpu_feature_info, receiver, gpu_remote]);
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

// ParamsSpec for InitializeVideoDecoderFactory
media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderFactoryProcess.InitializeVideoDecoderFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'gpu_feature_info', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.GpuFeatureInfoSpec, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'gpu_remote', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoDecoderFactoryProcessPtr = media.mojom.VideoDecoderFactoryProcessRemote;
media.mojom.VideoDecoderFactoryProcessRequest = media.mojom.VideoDecoderFactoryProcessPendingReceiver;

