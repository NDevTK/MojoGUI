// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/interface_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.VideoDecoderTracker = {};
media.mojom.VideoDecoderTracker.$interfaceName = 'media.mojom.VideoDecoderTracker';
media.mojom.InterfaceFactory = {};
media.mojom.InterfaceFactory.$interfaceName = 'media.mojom.InterfaceFactory';
media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateCdm_ParamsSpec = { $: {} };
media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec = { $: {} };

// Interface: VideoDecoderTracker
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

media.mojom.VideoDecoderTrackerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

media.mojom.VideoDecoderTrackerReceiver = media.mojom.VideoDecoderTrackerReceiver;

media.mojom.VideoDecoderTrackerPtr = media.mojom.VideoDecoderTrackerRemote;
media.mojom.VideoDecoderTrackerRequest = media.mojom.VideoDecoderTrackerPendingReceiver;


// Interface: InterfaceFactory
mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec, 'media.mojom.InterfaceFactory_CreateAudioDecoder_Params', [
      mojo.internal.StructField('audio_decoder', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioDecoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec, 'media.mojom.InterfaceFactory_CreateVideoDecoder_Params', [
      mojo.internal.StructField('video_decoder', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoDecoderRemote), null, false, 0, undefined),
      mojo.internal.StructField('dst_video_decoder', 8, 0, mojo.internal.InterfaceProxy(media.mojom.VideoDecoderRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec, 'media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoDecoderRemote), null, false, 0, undefined),
      mojo.internal.StructField('tracker', 8, 0, mojo.internal.InterfaceProxy(media.mojom.VideoDecoderTrackerRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec, 'media.mojom.InterfaceFactory_CreateAudioEncoder_Params', [
      mojo.internal.StructField('audio_encoder', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioEncoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateDefaultRenderer_Params', [
      mojo.internal.StructField('audio_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('renderer', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateCastRenderer_Params', [
      mojo.internal.StructField('overlay_plane_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_Params', [
      mojo.internal.StructField('media_log', 0, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
      mojo.internal.StructField('renderer', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
      mojo.internal.StructField('renderer_extension', 16, 0, mojo.internal.InterfaceRequest(media.mojom.MediaFoundationRendererExtensionRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec, 'media.mojom.InterfaceFactory_CreateFlingingRenderer_Params', [
      mojo.internal.StructField('presentation_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_extension', 8, 0, mojo.internal.InterfaceProxy(media.mojom.FlingingRendererClientExtensionRemote), null, false, 0, undefined),
      mojo.internal.StructField('renderer', 16, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateCdm_ParamsSpec, 'media.mojom.InterfaceFactory_CreateCdm_Params', [
      mojo.internal.StructField('cdm_config', 0, 0, media.mojom.CdmConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec, 'media.mojom.InterfaceFactory_CreateCdm_ResponseParams', [
      mojo.internal.StructField('cdm', 0, 0, mojo.internal.InterfaceProxy(media.mojom.ContentDecryptionModuleRemote), null, true, 0, undefined),
      mojo.internal.StructField('cdm_context', 8, 0, media.mojom.CdmContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status', 16, 0, media.mojom.CreateCdmStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [audio_decoder],
      false);
  }

  createVideoDecoder(video_decoder, dst_video_decoder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder, dst_video_decoder],
      false);
  }

  createVideoDecoderWithTracker(receiver, tracker) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec,
      null,
      [receiver, tracker],
      false);
  }

  createAudioEncoder(audio_encoder) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec,
      null,
      [audio_encoder],
      false);
  }

  createDefaultRenderer(audio_device_id, renderer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec,
      null,
      [audio_device_id, renderer],
      false);
  }

  createCastRenderer(overlay_plane_id, renderer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec,
      null,
      [overlay_plane_id, renderer],
      false);
  }

  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec,
      null,
      [media_log, renderer, renderer_extension],
      false);
  }

  createFlingingRenderer(presentation_id, client_extension, renderer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec,
      null,
      [presentation_id, client_extension, renderer],
      false);
  }

  createCdm(cdm_config) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.InterfaceFactory_CreateCdm_ParamsSpec,
      media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec,
      [cdm_config],
      false);
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

media.mojom.InterfaceFactoryReceiver = class {
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
          const params = media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createAudioDecoder(params.audio_decoder);
          break;
        }
        case 1: {
          const params = media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVideoDecoder(params.video_decoder, params.dst_video_decoder);
          break;
        }
        case 2: {
          const params = media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVideoDecoderWithTracker(params.receiver, params.tracker);
          break;
        }
        case 3: {
          const params = media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createAudioEncoder(params.audio_encoder);
          break;
        }
        case 4: {
          const params = media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDefaultRenderer(params.audio_device_id, params.renderer);
          break;
        }
        case 5: {
          const params = media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCastRenderer(params.overlay_plane_id, params.renderer);
          break;
        }
        case 6: {
          const params = media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createMediaFoundationRenderer(params.media_log, params.renderer, params.renderer_extension);
          break;
        }
        case 7: {
          const params = media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createFlingingRenderer(params.presentation_id, params.client_extension, params.renderer);
          break;
        }
        case 8: {
          const params = media.mojom.InterfaceFactory_CreateCdm_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCdm(params.cdm_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

media.mojom.InterfaceFactoryReceiver = media.mojom.InterfaceFactoryReceiver;

media.mojom.InterfaceFactoryPtr = media.mojom.InterfaceFactoryRemote;
media.mojom.InterfaceFactoryRequest = media.mojom.InterfaceFactoryPendingReceiver;

