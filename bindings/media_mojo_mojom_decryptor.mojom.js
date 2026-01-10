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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.Decryptor_Initialize_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.audio_pipe, params.video_pipe, params.decrypt_pipe, params.decrypted_pipe);
          break;
        }
        case 1: {
          const params = media.mojom.Decryptor_Decrypt_ParamsSpec.$.decode(message.payload);
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
          const params = media.mojom.Decryptor_CancelDecrypt_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.cancelDecrypt');
          const result = this.impl.cancelDecrypt(params.stream_type);
          break;
        }
        case 3: {
          const params = media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec.$.decode(message.payload);
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
          const params = media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec.$.decode(message.payload);
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
          const params = media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec.$.decode(message.payload);
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
          const params = media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec.$.decode(message.payload);
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
          const params = media.mojom.Decryptor_ResetDecoder_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.resetDecoder');
          const result = this.impl.resetDecoder(params.stream_type);
          break;
        }
        case 8: {
          const params = media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec.$.decode(message.payload);
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
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

