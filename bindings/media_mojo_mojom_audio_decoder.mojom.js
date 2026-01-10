// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.SupportedAudioDecoderConfigSpec = { $: {} };
media.mojom.AudioDecoder = {};
media.mojom.AudioDecoder.$interfaceName = 'media.mojom.AudioDecoder';
media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoder_Construct_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Initialize_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoder_SetDataSource_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Decode_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Decode_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoder_Reset_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Reset_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoderClient = {};
media.mojom.AudioDecoderClient.$interfaceName = 'media.mojom.AudioDecoderClient';
media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec = { $: {} };
media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec = { $: {} };

// Struct: SupportedAudioDecoderConfig
mojo.internal.Struct(
    media.mojom.SupportedAudioDecoderConfigSpec, 'media.mojom.SupportedAudioDecoderConfig', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile', 8, 0, media.mojom.AudioCodecProfileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AudioDecoder
mojo.internal.Struct(
    media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec, 'media.mojom.AudioDecoder_GetSupportedConfigs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec, 'media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParams', [
      mojo.internal.StructField('supported_configs', 0, 0, mojo.internal.Array(media.mojom.SupportedAudioDecoderConfigSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Construct_ParamsSpec, 'media.mojom.AudioDecoder_Construct_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('media_log', 8, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Initialize_ParamsSpec, 'media.mojom.AudioDecoder_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cdm_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Initialize_ResponseParamsSpec, 'media.mojom.AudioDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decoder_type', 8, 0, media.mojom.AudioDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('needs_bitstream_conversion', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_SetDataSource_ParamsSpec, 'media.mojom.AudioDecoder_SetDataSource_Params', [
      mojo.internal.StructField('receive_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Decode_ParamsSpec, 'media.mojom.AudioDecoder_Decode_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Decode_ResponseParamsSpec, 'media.mojom.AudioDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Reset_ParamsSpec, 'media.mojom.AudioDecoder_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Reset_ResponseParamsSpec, 'media.mojom.AudioDecoder_Reset_ResponseParams', [
    ],
    [[0, 8]]);

media.mojom.AudioDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioDecoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioDecoderPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedConfigs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec,
      media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec,
      [],
      false);
  }

  construct(client, media_log) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioDecoder_Construct_ParamsSpec,
      null,
      [client, media_log],
      false);
  }

  initialize(config, cdm_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioDecoder_Initialize_ParamsSpec,
      media.mojom.AudioDecoder_Initialize_ResponseParamsSpec,
      [config, cdm_id],
      false);
  }

  setDataSource(receive_pipe) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioDecoder_SetDataSource_ParamsSpec,
      null,
      [receive_pipe],
      false);
  }

  decode(buffer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.AudioDecoder_Decode_ParamsSpec,
      media.mojom.AudioDecoder_Decode_ResponseParamsSpec,
      [buffer],
      false);
  }

  reset() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.AudioDecoder_Reset_ParamsSpec,
      media.mojom.AudioDecoder_Reset_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.AudioDecoder.getRemote = function() {
  let remote = new media.mojom.AudioDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioDecoder',
    'context');
  return remote.$;
};

media.mojom.AudioDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        
        // Try Method 0: GetSupportedConfigs
        try {
             decoder.decodeStruct(media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSupportedConfigs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: Construct
        try {
             decoder.decodeStruct(media.mojom.AudioDecoder_Construct_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Construct (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: Initialize
        try {
             decoder.decodeStruct(media.mojom.AudioDecoder_Initialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: SetDataSource
        try {
             decoder.decodeStruct(media.mojom.AudioDecoder_SetDataSource_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDataSource (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: Decode
        try {
             decoder.decodeStruct(media.mojom.AudioDecoder_Decode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decode (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: Reset
        try {
             decoder.decodeStruct(media.mojom.AudioDecoder_Reset_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reset (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSupportedConfigs');
          const result = this.impl.getSupportedConfigs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoder_Construct_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.construct');
          const result = this.impl.construct(params.client, params.media_log);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoder_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.config, params.cdm_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoder_SetDataSource_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDataSource');
          const result = this.impl.setDataSource(params.receive_pipe);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoder_Decode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decode');
          const result = this.impl.decode(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_Decode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoder_Reset_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reset');
          const result = this.impl.reset();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_Reset_ResponseParamsSpec);
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

media.mojom.AudioDecoderReceiver = media.mojom.AudioDecoderReceiver;

media.mojom.AudioDecoderPtr = media.mojom.AudioDecoderRemote;
media.mojom.AudioDecoderRequest = media.mojom.AudioDecoderPendingReceiver;


// Interface: AudioDecoderClient
mojo.internal.Struct(
    media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec, 'media.mojom.AudioDecoderClient_OnBufferDecoded_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec, 'media.mojom.AudioDecoderClient_OnWaiting_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.WaitingReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioDecoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioDecoderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBufferDecoded(buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onWaiting(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec,
      null,
      [reason],
      false);
  }

};

media.mojom.AudioDecoderClient.getRemote = function() {
  let remote = new media.mojom.AudioDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioDecoderClient',
    'context');
  return remote.$;
};

media.mojom.AudioDecoderClientReceiver = class {
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
        
        // Try Method 0: OnBufferDecoded
        try {
             decoder.decodeStruct(media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferDecoded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnWaiting
        try {
             decoder.decodeStruct(media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWaiting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBufferDecoded');
          const result = this.impl.onBufferDecoded(params.buffer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWaiting');
          const result = this.impl.onWaiting(params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioDecoderClientReceiver = media.mojom.AudioDecoderClientReceiver;

media.mojom.AudioDecoderClientPtr = media.mojom.AudioDecoderClientRemote;
media.mojom.AudioDecoderClientRequest = media.mojom.AudioDecoderClientPendingReceiver;

