// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/fuchsia_media.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.VideoDecoderSecureMemoryModeSpec = { $: mojo.internal.Enum() };
media.mojom.CdmRequestSpec = { $: {} };
media.mojom.StreamProcessorRequestSpec = { $: {} };
media.mojom.FuchsiaMediaCdmProvider = {};
media.mojom.FuchsiaMediaCdmProvider.$interfaceName = 'media.mojom.FuchsiaMediaCdmProvider';
media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec = { $: {} };
media.mojom.FuchsiaMediaCodecProvider = {};
media.mojom.FuchsiaMediaCodecProvider.$interfaceName = 'media.mojom.FuchsiaMediaCodecProvider';
media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec = { $: {} };
media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec = { $: {} };
media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec = { $: {} };

// Enum: VideoDecoderSecureMemoryMode
media.mojom.VideoDecoderSecureMemoryMode = {
  CLEAR: 0,
  SECURE: 1,
  SECURE_OUTPUT: 2,
};

// Struct: CdmRequest
mojo.internal.Struct(
    media.mojom.CdmRequestSpec, 'media.mojom.CdmRequest', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StreamProcessorRequest
mojo.internal.Struct(
    media.mojom.StreamProcessorRequestSpec, 'media.mojom.StreamProcessorRequest', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FuchsiaMediaCdmProvider
mojo.internal.Struct(
    media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec, 'media.mojom.FuchsiaMediaCdmProvider_CreateCdm_Params', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cdm_request', 8, 0, media.mojom.CdmRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.FuchsiaMediaCdmProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FuchsiaMediaCdmProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCdmProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FuchsiaMediaCdmProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.FuchsiaMediaCdmProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCdm(key_system, cdm_request) {
    return this.$.createCdm(key_system, cdm_request);
  }
};

media.mojom.FuchsiaMediaCdmProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCdmProvider', [
      { explicit: null },
    ]);
  }

  createCdm(key_system, cdm_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec,
      null,
      [key_system, cdm_request],
      false);
  }

};

media.mojom.FuchsiaMediaCdmProvider.getRemote = function() {
  let remote = new media.mojom.FuchsiaMediaCdmProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCdmProvider',
    'context');
  return remote.$;
};

media.mojom.FuchsiaMediaCdmProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCdmProvider', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec.$.structSpec);
          const result = this.impl.createCdm(params.key_system, params.cdm_request);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.FuchsiaMediaCdmProviderReceiver = media.mojom.FuchsiaMediaCdmProviderReceiver;

media.mojom.FuchsiaMediaCdmProviderPtr = media.mojom.FuchsiaMediaCdmProviderRemote;
media.mojom.FuchsiaMediaCdmProviderRequest = media.mojom.FuchsiaMediaCdmProviderPendingReceiver;


// Interface: FuchsiaMediaCodecProvider
mojo.internal.Struct(
    media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec, 'media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_Params', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.VideoCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secure_mode', 8, 0, media.mojom.VideoDecoderSecureMemoryModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('stream_processor_request', 16, 0, media.mojom.StreamProcessorRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec, 'media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec, 'media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParams', [
      mojo.internal.StructField('supported_configs', 0, 0, mojo.internal.Array(media.mojom.SupportedVideoDecoderConfigSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.FuchsiaMediaCodecProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FuchsiaMediaCodecProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCodecProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FuchsiaMediaCodecProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.FuchsiaMediaCodecProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createVideoDecoder(codec, secure_mode, stream_processor_request) {
    return this.$.createVideoDecoder(codec, secure_mode, stream_processor_request);
  }
  getSupportedVideoDecoderConfigs() {
    return this.$.getSupportedVideoDecoderConfigs();
  }
};

media.mojom.FuchsiaMediaCodecProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCodecProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createVideoDecoder(codec, secure_mode, stream_processor_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec,
      null,
      [codec, secure_mode, stream_processor_request],
      false);
  }

  getSupportedVideoDecoderConfigs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec,
      media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.FuchsiaMediaCodecProvider.getRemote = function() {
  let remote = new media.mojom.FuchsiaMediaCodecProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCodecProvider',
    'context');
  return remote.$;
};

media.mojom.FuchsiaMediaCodecProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FuchsiaMediaCodecProvider', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoDecoder(params.codec, params.secure_mode, params.stream_processor_request);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec.$.structSpec);
          const result = this.impl.getSupportedVideoDecoderConfigs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec);
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

media.mojom.FuchsiaMediaCodecProviderReceiver = media.mojom.FuchsiaMediaCodecProviderReceiver;

media.mojom.FuchsiaMediaCodecProviderPtr = media.mojom.FuchsiaMediaCodecProviderRemote;
media.mojom.FuchsiaMediaCodecProviderRequest = media.mojom.FuchsiaMediaCodecProviderPendingReceiver;

