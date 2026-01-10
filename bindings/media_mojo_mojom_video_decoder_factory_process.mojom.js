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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoDecoderFactoryProcess_InitializeVideoDecoderFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initializeVideoDecoderFactory(params.gpu_feature_info, params.receiver, params.gpu_remote);
          break;
        }
      }
    });
  }
};

media.mojom.VideoDecoderFactoryProcessReceiver = media.mojom.VideoDecoderFactoryProcessReceiver;

media.mojom.VideoDecoderFactoryProcessPtr = media.mojom.VideoDecoderFactoryProcessRemote;
media.mojom.VideoDecoderFactoryProcessRequest = media.mojom.VideoDecoderFactoryProcessPendingReceiver;

