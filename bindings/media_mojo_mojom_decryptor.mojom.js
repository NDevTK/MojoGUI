// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/decryptor.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: Decryptor
media.mojom.Decryptor = {};

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
      null,
      [audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe],
      undefined,
      undefined
    );
  }

  decrypt(stream_type, encrypted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Decryptor_Decrypt_ParamsSpec,
      media.mojom.Decryptor_Decrypt_ResponseParamsSpec,
      media.mojom.Decryptor_Decrypt_ResponseParamsSpec,
      [stream_type, encrypted],
      undefined,
      undefined
    );
  }

  cancelDecrypt(stream_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Decryptor_CancelDecrypt_ParamsSpec,
      null,
      null,
      [stream_type],
      undefined,
      undefined
    );
  }

  initializeAudioDecoder(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec,
      media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec,
      media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec,
      [config],
      undefined,
      undefined
    );
  }

  initializeVideoDecoder(config) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec,
      media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec,
      media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec,
      [config],
      undefined,
      undefined
    );
  }

  decryptAndDecodeAudio(encrypted) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec,
      [encrypted],
      undefined,
      undefined
    );
  }

  decryptAndDecodeVideo(encrypted) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec,
      media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec,
      [encrypted],
      undefined,
      undefined
    );
  }

  resetDecoder(stream_type) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.Decryptor_ResetDecoder_ParamsSpec,
      null,
      null,
      [stream_type],
      undefined,
      undefined
    );
  }

  deinitializeDecoder(stream_type) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec,
      null,
      null,
      [stream_type],
      undefined,
      undefined
    );
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

// ParamsSpec for Initialize
media.mojom.Decryptor_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.Initialize_Params',
      packedSize: 40,
      fields: [
        { name: 'audio_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'video_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'decrypt_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'decrypted_pipe', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for Decrypt
media.mojom.Decryptor_Decrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.Decrypt_Params',
      packedSize: 24,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'encrypted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.Decryptor_Decrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.Decrypt_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CancelDecrypt
media.mojom.Decryptor_CancelDecrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.CancelDecrypt_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeAudioDecoder
media.mojom.Decryptor_InitializeAudioDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeAudioDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.Decryptor_InitializeAudioDecoder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeAudioDecoder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeVideoDecoder
media.mojom.Decryptor_InitializeVideoDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeVideoDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.Decryptor_InitializeVideoDecoder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.InitializeVideoDecoder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecryptAndDecodeAudio
media.mojom.Decryptor_DecryptAndDecodeAudio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeAudio_Params',
      packedSize: 16,
      fields: [
        { name: 'encrypted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.Decryptor_DecryptAndDecodeAudio_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeAudio_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'audio_buffers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DecryptAndDecodeVideo
media.mojom.Decryptor_DecryptAndDecodeVideo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeVideo_Params',
      packedSize: 16,
      fields: [
        { name: 'encrypted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.Decryptor_DecryptAndDecodeVideo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DecryptAndDecodeVideo_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'video_frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'releaser', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResetDecoder
media.mojom.Decryptor_ResetDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.ResetDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeinitializeDecoder
media.mojom.Decryptor_DeinitializeDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Decryptor.DeinitializeDecoder_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.DecryptorPtr = media.mojom.DecryptorRemote;
media.mojom.DecryptorRequest = media.mojom.DecryptorPendingReceiver;


// Interface: FrameResourceReleaser
media.mojom.FrameResourceReleaser = {};

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

// Legacy compatibility
media.mojom.FrameResourceReleaserPtr = media.mojom.FrameResourceReleaserRemote;
media.mojom.FrameResourceReleaserRequest = media.mojom.FrameResourceReleaserPendingReceiver;

