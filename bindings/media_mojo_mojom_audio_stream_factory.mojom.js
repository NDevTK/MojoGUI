// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_stream_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: LocalMuter
media.mojom.LocalMuterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.LocalMuter';
  }

};

media.mojom.LocalMuterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioStreamFactory
media.mojom.AudioStreamFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioStreamFactory';
  }

  requested(|processing_config|) {
    // Method: requested
    // Call: requested(|processing_config|)
  }

  platforms(far) {
    // Method: platforms
    // Call: platforms(far)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  createInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config) {
    // Method: CreateInputStream
    return new Promise((resolve) => {
      // Call: CreateInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config)
      resolve({});
    });
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Method: AssociateInputAndOutputForAec
    // Call: AssociateInputAndOutputForAec(input_stream_id, output_device_id)
  }

  createOutputStream(stream, observer, log, device_id, params, group_id) {
    // Method: CreateOutputStream
    return new Promise((resolve) => {
      // Call: CreateOutputStream(stream, observer, log, device_id, params, group_id)
      resolve({});
    });
  }

  createOutputStream() {
    // Method: CreateOutputStream
    // Call: CreateOutputStream()
  }

  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    // Method: CreateSwitchableOutputStream
    return new Promise((resolve) => {
      // Call: CreateSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id)
      resolve({});
    });
  }

  bindMuter(receiver, group_id) {
    // Method: BindMuter
    // Call: BindMuter(receiver, group_id)
  }

  createInputStream() {
    // Method: CreateInputStream
    // Call: CreateInputStream()
  }

  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    // Method: CreateLoopbackStream
    return new Promise((resolve) => {
      // Call: CreateLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id)
      resolve({});
    });
  }

};

media.mojom.AudioStreamFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
