// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/decryptor.mojom
// Module: media.mojom

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
      mojo.internal.StructField('releaser', 16, 0, mojo.internal.InterfaceProxy(media.mojom.FrameResourceReleaserRemote), null, true, 0, undefined),
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
  initialize(audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe) {
    return this.$.initialize(audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe);
  }
  decrypt(stream_type, encrypted) {
    return this.$.decrypt(stream_type, encrypted);
  }
  cancelDecrypt(stream_type) {
    return this.$.cancelDecrypt(stream_type);
  }
  initializeAudioDecoder(config) {
    return this.$.initializeAudioDecoder(config);
  }
  initializeVideoDecoder(config) {
    return this.$.initializeVideoDecoder(config);
  }
  decryptAndDecodeAudio(encrypted) {
    return this.$.decryptAndDecodeAudio(encrypted);
  }
  decryptAndDecodeVideo(encrypted) {
    return this.$.decryptAndDecodeVideo(encrypted);
  }
  resetDecoder(stream_type) {
    return this.$.resetDecoder(stream_type);
  }
  deinitializeDecoder(stream_type) {
    return this.$.deinitializeDecoder(stream_type);
  }
};

media.mojom.DecryptorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Decryptor', [
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

  initialize(audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.Decryptor_Initialize_ParamsSpec,
      null,
      [audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe],
      false);
  }

  decrypt(stream_type, encrypted) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.Decryptor_Decrypt_ParamsSpec,
      media.mojom.Decryptor_Decrypt_ResponseParamsSpec,
      [stream_type, encrypted],
      false);
  }

  cancelDecrypt(stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.Decryptor_CancelDecrypt_ParamsSpec,
      null,
      [stream_type],
      false);
  }

  initializeAudioDecoder(config) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec,
      media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec,
      [config],
      false);
  }

  initializeVideoDecoder(config) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec,
      media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec,
      [config],
      false);
  }

  decryptAndDecodeAudio(encrypted) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec,
      [encrypted],
      false);
  }

  decryptAndDecodeVideo(encrypted) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec,
      [encrypted],
      false);
  }

  resetDecoder(stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.Decryptor_ResetDecoder_ParamsSpec,
      null,
      [stream_type],
      false);
  }

  deinitializeDecoder(stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Decryptor', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(media.mojom.Decryptor_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_Decrypt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_CancelDecrypt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_ResetDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.audio_pipe, params.video_pipe, params.decrypt_pipe, params.decrypted_pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_Decrypt_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(media.mojom.Decryptor_CancelDecrypt_ParamsSpec.$.structSpec);
          const result = this.impl.cancelDecrypt(params.stream_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(media.mojom.Decryptor_ResetDecoder_ParamsSpec.$.structSpec);
          const result = this.impl.resetDecoder(params.stream_type);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec.$.structSpec);
          const result = this.impl.deinitializeDecoder(params.stream_type);
          break;
        }
      }
      } catch (err) {}
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
    this.ordinals = window.mojoScrambler.getOrdinals('FrameResourceReleaser', [
    ]);
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
    const ordinals = window.mojoScrambler.getOrdinals('FrameResourceReleaser', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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

media.mojom.FrameResourceReleaserReceiver = media.mojom.FrameResourceReleaserReceiver;

media.mojom.FrameResourceReleaserPtr = media.mojom.FrameResourceReleaserRemote;
media.mojom.FrameResourceReleaserRequest = media.mojom.FrameResourceReleaserPendingReceiver;

