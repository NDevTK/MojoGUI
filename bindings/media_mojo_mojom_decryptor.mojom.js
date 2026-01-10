// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/decryptor.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: Decryptor
media.mojom.mojom.Decryptor = {};

media.mojom.mojom.DecryptorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.DecryptorRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Decryptor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.DecryptorPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.DecryptorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.DecryptorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.Decryptor_Initialize_ParamsSpec,
      null,
      [audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe]);
  }

  decrypt(stream_type, encrypted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.Decryptor_Decrypt_ParamsSpec,
      media.mojom.mojom.Decryptor_Decrypt_ResponseParamsSpec,
      [stream_type, encrypted]);
  }

  cancelDecrypt(stream_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.Decryptor_CancelDecrypt_ParamsSpec,
      null,
      [stream_type]);
  }

  initializeAudioDecoder(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec,
      media.mojom.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec,
      [config]);
  }

  initializeVideoDecoder(config) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec,
      media.mojom.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec,
      [config]);
  }

  decryptAndDecodeAudio(encrypted) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec,
      media.mojom.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec,
      [encrypted]);
  }

  decryptAndDecodeVideo(encrypted) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec,
      media.mojom.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec,
      [encrypted]);
  }

  resetDecoder(stream_type) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.mojom.Decryptor_ResetDecoder_ParamsSpec,
      null,
      [stream_type]);
  }

  deinitializeDecoder(stream_type) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.mojom.Decryptor_DeinitializeDecoder_ParamsSpec,
      null,
      [stream_type]);
  }

};

media.mojom.mojom.Decryptor.getRemote = function() {
  let remote = new media.mojom.mojom.DecryptorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Decryptor',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
media.mojom.mojom.Decryptor_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.Initialize_Params',
      packedSize: 40,
      fields: [
        { name: 'audio_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'video_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'decrypt_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'decrypted_pipe', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for Decrypt
media.mojom.mojom.Decryptor_Decrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.Decrypt_Params',
      packedSize: 32,
      fields: [
        { name: 'stream_type', packedOffset: 16, packedBitOffset: 0, type: media.mojom.StreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'encrypted', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media.mojom.mojom.Decryptor_Decrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.Decrypt_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: media.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CancelDecrypt
media.mojom.mojom.Decryptor_CancelDecrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.CancelDecrypt_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StreamTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeAudioDecoder
media.mojom.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeAudioDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDecoderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeAudioDecoder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeVideoDecoder
media.mojom.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeVideoDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoDecoderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeVideoDecoder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecryptAndDecodeAudio
media.mojom.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeAudio_Params',
      packedSize: 24,
      fields: [
        { name: 'encrypted', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeAudio_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: media.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'audio_buffers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.AudioBufferSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DecryptAndDecodeVideo
media.mojom.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeVideo_Params',
      packedSize: 24,
      fields: [
        { name: 'encrypted', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeVideo_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: media.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'video_frame', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoFrameSpec, nullable: true, minVersion: 0 },
        { name: 'releaser', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.FrameResourceReleaserRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResetDecoder
media.mojom.mojom.Decryptor_ResetDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.ResetDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StreamTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeinitializeDecoder
media.mojom.mojom.Decryptor_DeinitializeDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DeinitializeDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StreamTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.DecryptorPtr = media.mojom.mojom.DecryptorRemote;
media.mojom.mojom.DecryptorRequest = media.mojom.mojom.DecryptorPendingReceiver;


// Interface: FrameResourceReleaser
media.mojom.mojom.FrameResourceReleaser = {};

media.mojom.mojom.FrameResourceReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.FrameResourceReleaserRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FrameResourceReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.FrameResourceReleaserPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.FrameResourceReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.FrameResourceReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.mojom.FrameResourceReleaser.getRemote = function() {
  let remote = new media.mojom.mojom.FrameResourceReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FrameResourceReleaser',
    'context');
  return remote.$;
};

// Legacy compatibility
media.mojom.mojom.FrameResourceReleaserPtr = media.mojom.mojom.FrameResourceReleaserRemote;
media.mojom.mojom.FrameResourceReleaserRequest = media.mojom.mojom.FrameResourceReleaserPendingReceiver;

