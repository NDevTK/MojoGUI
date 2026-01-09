// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder_factory_process.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecoderFactoryProcess
media.mojom.VideoDecoderFactoryProcessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoDecoderFactoryProcess';
  }

  initializeVideoDecoderFactory(gpu_feature_info, receiver, gpu_remote) {
    // Method: InitializeVideoDecoderFactory
    // Call: InitializeVideoDecoderFactory(gpu_feature_info, receiver, gpu_remote)
  }

};

media.mojom.VideoDecoderFactoryProcessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
