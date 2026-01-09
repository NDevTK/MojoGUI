// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecoderTracker
media.mojom.VideoDecoderTrackerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoDecoderTracker';
  }

};

media.mojom.VideoDecoderTrackerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InterfaceFactory
media.mojom.InterfaceFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.InterfaceFactory';
  }

  createAudioDecoder(audio_decoder) {
    // Method: CreateAudioDecoder
    // Call: CreateAudioDecoder(audio_decoder)
  }

  videoDecoder() {
    // Method: VideoDecoder
    // Call: VideoDecoder()
  }

  createVideoDecoder(video_decoder, dst_video_decoder) {
    // Method: CreateVideoDecoder
    // Call: CreateVideoDecoder(video_decoder, dst_video_decoder)
  }

  createVideoDecoderWithTracker(receiver, tracker) {
    // Method: CreateVideoDecoderWithTracker
    // Call: CreateVideoDecoderWithTracker(receiver, tracker)
  }

  createAudioEncoder(audio_encoder) {
    // Method: CreateAudioEncoder
    // Call: CreateAudioEncoder(audio_encoder)
  }

  renderer() {
    // Method: Renderer
    // Call: Renderer()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  createDefaultRenderer(audio_device_id, renderer) {
    // Method: CreateDefaultRenderer
    // Call: CreateDefaultRenderer(audio_device_id, renderer)
  }

  castRenderer() {
    // Method: CastRenderer
    // Call: CastRenderer()
  }

  createCastRenderer(overlay_plane_id, renderer) {
    // Method: CreateCastRenderer
    // Call: CreateCastRenderer(overlay_plane_id, renderer)
  }

  mediaFoundationRenderer() {
    // Method: MediaFoundationRenderer
    // Call: MediaFoundationRenderer()
  }

  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    // Method: CreateMediaFoundationRenderer
    // Call: CreateMediaFoundationRenderer(media_log, renderer, renderer_extension)
  }

  flingingRenderer() {
    // Method: FlingingRenderer
    // Call: FlingingRenderer()
  }

  session(blink::RemotePlayback) {
    // Method: session
    // Call: session(blink::RemotePlayback)
  }

  createFlingingRenderer(presentation_id, client_extension, renderer) {
    // Method: CreateFlingingRenderer
    // Call: CreateFlingingRenderer(presentation_id, client_extension, renderer)
  }

  process(renderer) {
    // Method: process
    // Call: process(renderer)
  }

  createCdm(cdm_config) {
    // Method: CreateCdm
    return new Promise((resolve) => {
      // Call: CreateCdm(cdm_config)
      resolve({});
    });
  }

};

media.mojom.InterfaceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
