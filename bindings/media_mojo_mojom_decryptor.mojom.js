// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/decryptor.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: Decryptor
media.mojom.DecryptorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.Decryptor';
  }

  type() {
    // Method: type
    // Call: type()
  }

  decryptAndDecodeAudio() {
    // Method: DecryptAndDecodeAudio
    // Call: DecryptAndDecodeAudio()
  }

  decryptAndDecodeVideo() {
    // Method: DecryptAndDecodeVideo
    // Call: DecryptAndDecodeVideo()
  }

  decrypt() {
    // Method: Decrypt
    // Call: Decrypt()
  }

  onDecryptDone() {
    // Method: OnDecryptDone
    // Call: OnDecryptDone()
  }

  initialize(audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe) {
    // Method: Initialize
    // Call: Initialize(audio_pipe, video_pipe, decrypt_pipe, decrypted_pipe)
  }

  decrypt(stream_type, encrypted) {
    // Method: Decrypt
    return new Promise((resolve) => {
      // Call: Decrypt(stream_type, encrypted)
      resolve({});
    });
  }

  cancelDecrypt(stream_type) {
    // Method: CancelDecrypt
    // Call: CancelDecrypt(stream_type)
  }

  initializeAudioDecoder(config) {
    // Method: InitializeAudioDecoder
    return new Promise((resolve) => {
      // Call: InitializeAudioDecoder(config)
      resolve({});
    });
  }

  initializeVideoDecoder(config) {
    // Method: InitializeVideoDecoder
    return new Promise((resolve) => {
      // Call: InitializeVideoDecoder(config)
      resolve({});
    });
  }

  closed(bound) {
    // Method: closed
    // Call: closed(bound)
  }

  decryptAndDecodeAudio(encrypted) {
    // Method: DecryptAndDecodeAudio
    return new Promise((resolve) => {
      // Call: DecryptAndDecodeAudio(encrypted)
      resolve({});
    });
  }

  decryptAndDecodeVideo(encrypted) {
    // Method: DecryptAndDecodeVideo
    return new Promise((resolve) => {
      // Call: DecryptAndDecodeVideo(encrypted)
      resolve({});
    });
  }

  resetDecoder(stream_type) {
    // Method: ResetDecoder
    // Call: ResetDecoder(stream_type)
  }

  initialization(false) {
    // Method: initialization
    // Call: initialization(false)
  }

  decode(ERROR) {
    // Method: decode
    // Call: decode(ERROR)
  }

};

media.mojom.DecryptorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameResourceReleaser
media.mojom.FrameResourceReleaserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.FrameResourceReleaser';
  }

};

media.mojom.FrameResourceReleaserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
