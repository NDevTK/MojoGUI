// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/fuchsia_media.mojom
// Module: media.mojom

'use strict';

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
};

media.mojom.FuchsiaMediaCdmProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdm(key_system, cdm_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateCdm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCdm (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createCdm');
          const result = this.impl.createCdm(params.key_system, params.cdm_request);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

media.mojom.FuchsiaMediaCodecProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoDecoder(codec, secure_mode, stream_processor_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec,
      null,
      [codec, secure_mode, stream_processor_request],
      false);
  }

  getSupportedVideoDecoderConfigs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateVideoDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoDecoder (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetSupportedVideoDecoderConfigs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSupportedVideoDecoderConfigs (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createVideoDecoder');
          const result = this.impl.createVideoDecoder(params.codec, params.secure_mode, params.stream_processor_request);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSupportedVideoDecoderConfigs');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.FuchsiaMediaCodecProviderReceiver = media.mojom.FuchsiaMediaCodecProviderReceiver;

media.mojom.FuchsiaMediaCodecProviderPtr = media.mojom.FuchsiaMediaCodecProviderRemote;
media.mojom.FuchsiaMediaCodecProviderRequest = media.mojom.FuchsiaMediaCodecProviderPendingReceiver;

