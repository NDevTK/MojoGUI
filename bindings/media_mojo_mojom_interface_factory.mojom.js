// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/interface_factory.mojom
// Module: media.mojom

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
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoderTracker', [
    ]);
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoderTracker', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
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
  createAudioDecoder(audio_decoder) {
    return this.$.createAudioDecoder(audio_decoder);
  }
  createVideoDecoder(video_decoder, dst_video_decoder) {
    return this.$.createVideoDecoder(video_decoder, dst_video_decoder);
  }
  createVideoDecoderWithTracker(receiver, tracker) {
    return this.$.createVideoDecoderWithTracker(receiver, tracker);
  }
  createAudioEncoder(audio_encoder) {
    return this.$.createAudioEncoder(audio_encoder);
  }
  createDefaultRenderer(audio_device_id, renderer) {
    return this.$.createDefaultRenderer(audio_device_id, renderer);
  }
  createCastRenderer(overlay_plane_id, renderer) {
    return this.$.createCastRenderer(overlay_plane_id, renderer);
  }
  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    return this.$.createMediaFoundationRenderer(media_log, renderer, renderer_extension);
  }
  createFlingingRenderer(presentation_id, client_extension, renderer) {
    return this.$.createFlingingRenderer(presentation_id, client_extension, renderer);
  }
  createCdm(cdm_config) {
    return this.$.createCdm(cdm_config);
  }
};

media.mojom.InterfaceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InterfaceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createAudioDecoder(audio_decoder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec,
      null,
      [audio_decoder],
      false);
  }

  createVideoDecoder(video_decoder, dst_video_decoder) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder, dst_video_decoder],
      false);
  }

  createVideoDecoderWithTracker(receiver, tracker) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec,
      null,
      [receiver, tracker],
      false);
  }

  createAudioEncoder(audio_encoder) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec,
      null,
      [audio_encoder],
      false);
  }

  createDefaultRenderer(audio_device_id, renderer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec,
      null,
      [audio_device_id, renderer],
      false);
  }

  createCastRenderer(overlay_plane_id, renderer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec,
      null,
      [overlay_plane_id, renderer],
      false);
  }

  createMediaFoundationRenderer(media_log, renderer, renderer_extension) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec,
      null,
      [media_log, renderer, renderer_extension],
      false);
  }

  createFlingingRenderer(presentation_id, client_extension, renderer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec,
      null,
      [presentation_id, client_extension, renderer],
      false);
  }

  createCdm(cdm_config) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InterfaceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCdm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioDecoder_ParamsSpec.$.structSpec);
          const result = this.impl.createAudioDecoder(params.audio_decoder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoder_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoDecoder(params.video_decoder, params.dst_video_decoder);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateVideoDecoderWithTracker_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoDecoderWithTracker(params.receiver, params.tracker);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateAudioEncoder_ParamsSpec.$.structSpec);
          const result = this.impl.createAudioEncoder(params.audio_encoder);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateDefaultRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.createDefaultRenderer(params.audio_device_id, params.renderer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCastRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.createCastRenderer(params.overlay_plane_id, params.renderer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateMediaFoundationRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.createMediaFoundationRenderer(params.media_log, params.renderer, params.renderer_extension);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateFlingingRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.createFlingingRenderer(params.presentation_id, params.client_extension, params.renderer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.InterfaceFactory_CreateCdm_ParamsSpec.$.structSpec);
          const result = this.impl.createCdm(params.cdm_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.InterfaceFactory_CreateCdm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.InterfaceFactoryReceiver = media.mojom.InterfaceFactoryReceiver;

media.mojom.InterfaceFactoryPtr = media.mojom.InterfaceFactoryRemote;
media.mojom.InterfaceFactoryRequest = media.mojom.InterfaceFactoryPendingReceiver;

