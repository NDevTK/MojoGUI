// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecoderTracker
media.mojom.VideoDecoderTracker = {};

media.mojom.VideoDecoderTrackerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecoderTrackerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoderTracker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecoderTrackerPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecoderTrackerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoDecoderTrackerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.VideoDecoderTracker.getRemote = function() {
  let remote = new media.mojom.VideoDecoderTrackerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoderTracker',
    'context');
  return remote.$;
};

// Legacy compatibility
media.mojom.VideoDecoderTrackerPtr = media.mojom.VideoDecoderTrackerRemote;
media.mojom.VideoDecoderTrackerRequest = media.mojom.VideoDecoderTrackerPendingReceiver;


// Interface: InterfaceFactory
media.mojom.InterfaceFactory = {};

media.mojom.InterfaceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.InterfaceFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.InterfaceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.InterfaceFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.InterfaceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.InterfaceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAudioDecoder(audio_decoder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec,
      null,
      null,
      [audio_decoder],
      undefined,
      undefined
    );
  }

  createVideoDecoder(video_decoder, dst_video_decoder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec,
      null,
      null,
      [video_decoder, dst_video_decoder],
      undefined,
      undefined
    );
  }

  createVideoDecoderWithTracker(receiver, tracker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec,
      null,
      null,
      [receiver, tracker],
      undefined,
      undefined
    );
  }

  createAudioEncoder(audio_encoder) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec,
      null,
      null,
      [audio_encoder],
      undefined,
      undefined
    );
  }

  createDefaultRenderer(audio_device_id, renderer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec,
      null,
      null,
      [audio_device_id, renderer],
      undefined,
      undefined
    );
  }

  createCastRenderer(overlay_plane_id, renderer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec,
      null,
      null,
      [overlay_plane_id, renderer],
      undefined,
      undefined
    );
  }

  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec,
      null,
      null,
      [media_log, renderer, renderer_extension],
      undefined,
      undefined
    );
  }

  createFlingingRenderer(presentation_id, client_extension, renderer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec,
      null,
      null,
      [presentation_id, client_extension, renderer],
      undefined,
      undefined
    );
  }

  createCdm(cdm_config) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.InterfaceFactory_CreateCdm_ParamsSpec,
      media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec,
      media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec,
      [cdm_config],
      undefined,
      undefined
    );
  }

};

media.mojom.InterfaceFactory.getRemote = function() {
  let remote = new media.mojom.InterfaceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.InterfaceFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateAudioDecoder
media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateAudioDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_decoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateVideoDecoder
media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateVideoDecoder_Params',
      packedSize: 24,
      fields: [
        { name: 'video_decoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'dst_video_decoder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateVideoDecoderWithTracker
media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateVideoDecoderWithTracker_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'tracker', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateAudioEncoder
media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateAudioEncoder_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_encoder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDefaultRenderer
media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateDefaultRenderer_Params',
      packedSize: 24,
      fields: [
        { name: 'audio_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'renderer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateCastRenderer
media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateCastRenderer_Params',
      packedSize: 24,
      fields: [
        { name: 'overlay_plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'renderer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateMediaFoundationRenderer
media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateMediaFoundationRenderer_Params',
      packedSize: 32,
      fields: [
        { name: 'media_log', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'renderer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'renderer_extension', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CreateFlingingRenderer
media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateFlingingRenderer_Params',
      packedSize: 32,
      fields: [
        { name: 'presentation_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'client_extension', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'renderer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CreateCdm
media.mojom.InterfaceFactory_CreateCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateCdm_Params',
      packedSize: 16,
      fields: [
        { name: 'cdm_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.InterfaceFactory.CreateCdm_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'cdm', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'cdm_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
media.mojom.InterfaceFactoryPtr = media.mojom.InterfaceFactoryRemote;
media.mojom.InterfaceFactoryRequest = media.mojom.InterfaceFactoryPendingReceiver;

