// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecoderTracker
media.mojom.mojom.VideoDecoderTracker = {};

media.mojom.mojom.VideoDecoderTrackerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoDecoderTrackerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoderTracker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoDecoderTrackerPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoDecoderTrackerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoDecoderTrackerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.mojom.VideoDecoderTracker.getRemote = function() {
  let remote = new media.mojom.mojom.VideoDecoderTrackerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoderTracker',
    'context');
  return remote.$;
};

// Legacy compatibility
media.mojom.mojom.VideoDecoderTrackerPtr = media.mojom.mojom.VideoDecoderTrackerRemote;
media.mojom.mojom.VideoDecoderTrackerRequest = media.mojom.mojom.VideoDecoderTrackerPendingReceiver;


// Interface: InterfaceFactory
media.mojom.mojom.InterfaceFactory = {};

media.mojom.mojom.InterfaceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.InterfaceFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.InterfaceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.InterfaceFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.InterfaceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.InterfaceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAudioDecoder(audio_decoder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec,
      null,
      [audio_decoder]);
  }

  createVideoDecoder(video_decoder, dst_video_decoder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder, dst_video_decoder]);
  }

  createVideoDecoderWithTracker(receiver, tracker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec,
      null,
      [receiver, tracker]);
  }

  createAudioEncoder(audio_encoder) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec,
      null,
      [audio_encoder]);
  }

  createDefaultRenderer(audio_device_id, renderer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec,
      null,
      [audio_device_id, renderer]);
  }

  createCastRenderer(overlay_plane_id, renderer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec,
      null,
      [overlay_plane_id, renderer]);
  }

  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec,
      null,
      [media_log, renderer, renderer_extension]);
  }

  createFlingingRenderer(presentation_id, client_extension, renderer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec,
      null,
      [presentation_id, client_extension, renderer]);
  }

  createCdm(cdm_config) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.mojom.InterfaceFactory_CreateCdm_ParamsSpec,
      media.mojom.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec,
      [cdm_config]);
  }

};

media.mojom.mojom.InterfaceFactory.getRemote = function() {
  let remote = new media.mojom.mojom.InterfaceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.InterfaceFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateAudioDecoder
media.mojom.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateAudioDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_decoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateVideoDecoder
media.mojom.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateVideoDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'video_decoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'dst_video_decoder', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateVideoDecoderWithTracker
media.mojom.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateVideoDecoderWithTracker_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'tracker', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateAudioEncoder
media.mojom.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateAudioEncoder_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_encoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDefaultRenderer
media.mojom.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateDefaultRenderer_Params',
      packedSize: 24,
      fields: [
        { name: 'audio_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'renderer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateCastRenderer
media.mojom.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateCastRenderer_Params',
      packedSize: 24,
      fields: [
        { name: 'overlay_plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'renderer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateMediaFoundationRenderer
media.mojom.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateMediaFoundationRenderer_Params',
      packedSize: 24,
      fields: [
        { name: 'media_log', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'renderer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'renderer_extension', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateFlingingRenderer
media.mojom.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateFlingingRenderer_Params',
      packedSize: 24,
      fields: [
        { name: 'presentation_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client_extension', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'renderer', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateCdm
media.mojom.mojom.InterfaceFactory_CreateCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateCdm_Params',
      packedSize: 16,
      fields: [
        { name: 'cdm_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateCdm_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'cdm', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'cdm_context', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmContextSpec, nullable: true, minVersion: 0 },
        { name: 'status', packedOffset: 12, packedBitOffset: 0, type: media.mojom.CreateCdmStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.InterfaceFactoryPtr = media.mojom.mojom.InterfaceFactoryRemote;
media.mojom.mojom.InterfaceFactoryRequest = media.mojom.mojom.InterfaceFactoryPendingReceiver;

