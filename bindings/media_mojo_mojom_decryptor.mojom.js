// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/decryptor.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.Decryptor = {};
media.mojom.Decryptor.$interfaceName = 'media.mojom.Decryptor';
media.mojom.Decryptor_Initialize_ParamsSpec = { $: {} };
media.mojom.Decryptor_Decrypt_ParamsSpec = { $: {} };
media.mojom.Decryptor_Decrypt_ResponseParamsSpec = { $: {} };
media.mojom.Decryptor_CancelDecrypt_ParamsSpec = { $: {} };
media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec = { $: {} };
media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec = { $: {} };
media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec = { $: {} };
media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec = { $: {} };
media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec = { $: {} };
media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec = { $: {} };
media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec = { $: {} };
media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec = { $: {} };
media.mojom.Decryptor_ResetDecoder_ParamsSpec = { $: {} };
media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec = { $: {} };
media.mojom.FrameResourceReleaser = {};
media.mojom.FrameResourceReleaser.$interfaceName = 'media.mojom.FrameResourceReleaser';

// Interface: Decryptor
mojo.internal.Struct(
    media.mojom.Decryptor_Initialize_ParamsSpec, 'media.mojom.Decryptor_Initialize_Params', [
      mojo.internal.StructField('audio_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('video_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('decrypt_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('decrypted_pipe', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.Decryptor_Decrypt_ParamsSpec, 'media.mojom.Decryptor_Decrypt_Params', [
      mojo.internal.StructField('stream_type', 0, 0, media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encrypted', 8, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.Decryptor_Decrypt_ResponseParamsSpec, 'media.mojom.Decryptor_Decrypt_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer', 8, 0, media.mojom.DecoderBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.Decryptor_CancelDecrypt_ParamsSpec, 'media.mojom.Decryptor_CancelDecrypt_Params', [
      mojo.internal.StructField('stream_type', 0, 0, media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec, 'media.mojom.Decryptor_InitializeAudioDecoder_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec, 'media.mojom.Decryptor_InitializeAudioDecoder_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec, 'media.mojom.Decryptor_InitializeVideoDecoder_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec, 'media.mojom.Decryptor_InitializeVideoDecoder_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeAudio_Params', [
      mojo.internal.StructField('encrypted', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_buffers', 8, 0, mojo.internal.Array(media.mojom.AudioBufferSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeVideo_Params', [
      mojo.internal.StructField('encrypted', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec, 'media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_frame', 8, 0, media.mojom.VideoFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('releaser', 16, 0, mojo.internal.InterfaceProxy(media.mojom.FrameResourceReleaserSpec), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.Decryptor_ResetDecoder_ParamsSpec, 'media.mojom.Decryptor_ResetDecoder_Params', [
      mojo.internal.StructField('stream_type', 0, 0, media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec, 'media.mojom.Decryptor_DeinitializeDecoder_Params', [
      mojo.internal.StructField('stream_type', 0, 0, media.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.DecryptorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DecryptorRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Decryptor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DecryptorPendingReceiver,
      handle);
    this.$ = new media.mojom.DecryptorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.DecryptorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.Decryptor_Initialize_ParamsSpec,
      null,
      [audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe],
      false);
  }

  decrypt(stream_type, encrypted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Decryptor_Decrypt_ParamsSpec,
      media.mojom.Decryptor_Decrypt_ResponseParamsSpec,
      [stream_type, encrypted],
      false);
  }

  cancelDecrypt(stream_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Decryptor_CancelDecrypt_ParamsSpec,
      null,
      [stream_type],
      false);
  }

  initializeAudioDecoder(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec,
      media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec,
      [config],
      false);
  }

  initializeVideoDecoder(config) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec,
      media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec,
      [config],
      false);
  }

  decryptAndDecodeAudio(encrypted) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec,
      [encrypted],
      false);
  }

  decryptAndDecodeVideo(encrypted) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec,
      [encrypted],
      false);
  }

  resetDecoder(stream_type) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.Decryptor_ResetDecoder_ParamsSpec,
      null,
      [stream_type],
      false);
  }

  deinitializeDecoder(stream_type) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec,
      null,
      [stream_type],
      false);
  }

};

media.mojom.Decryptor.getRemote = function() {
  let remote = new media.mojom.DecryptorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Decryptor',
    'context');
  return remote.$;
};

media.mojom.DecryptorReceiver = class {
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
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_Initialize_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Decrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_Decrypt_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decrypt (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelDecrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_CancelDecrypt_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelDecrypt (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: InitializeAudioDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeAudioDecoder (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InitializeVideoDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeVideoDecoder (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DecryptAndDecodeAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptAndDecodeAudio (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DecryptAndDecodeVideo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptAndDecodeVideo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResetDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_ResetDecoder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetDecoder (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DeinitializeDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeinitializeDecoder (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
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
          const params = decoder.decodeStructInline(media.mojom.Decryptor_Initialize_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.audio_pipe, params.video_pipe, params.decrypt_pipe, params.decrypted_pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_Decrypt_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.decrypt');
          const result = this.impl.decrypt(params.stream_type, params.encrypted);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Decryptor_Decrypt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_CancelDecrypt_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.cancelDecrypt');
          const result = this.impl.cancelDecrypt(params.stream_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.initializeAudioDecoder');
          const result = this.impl.initializeAudioDecoder(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.initializeVideoDecoder');
          const result = this.impl.initializeVideoDecoder(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.decryptAndDecodeAudio');
          const result = this.impl.decryptAndDecodeAudio(params.encrypted);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.decryptAndDecodeVideo');
          const result = this.impl.decryptAndDecodeVideo(params.encrypted);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_ResetDecoder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resetDecoder');
          const result = this.impl.resetDecoder(params.stream_type);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.deinitializeDecoder');
          const result = this.impl.deinitializeDecoder(params.stream_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.DecryptorReceiver = media.mojom.DecryptorReceiver;

media.mojom.DecryptorPtr = media.mojom.DecryptorRemote;
media.mojom.DecryptorRequest = media.mojom.DecryptorPendingReceiver;


// Interface: FrameResourceReleaser
media.mojom.FrameResourceReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FrameResourceReleaserRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FrameResourceReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FrameResourceReleaserPendingReceiver,
      handle);
    this.$ = new media.mojom.FrameResourceReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.FrameResourceReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.FrameResourceReleaser.getRemote = function() {
  let remote = new media.mojom.FrameResourceReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FrameResourceReleaser',
    'context');
  return remote.$;
};

media.mojom.FrameResourceReleaserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.FrameResourceReleaserReceiver = media.mojom.FrameResourceReleaserReceiver;

media.mojom.FrameResourceReleaserPtr = media.mojom.FrameResourceReleaserRemote;
media.mojom.FrameResourceReleaserRequest = media.mojom.FrameResourceReleaserPendingReceiver;

