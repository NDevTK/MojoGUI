// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/resource_provider.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Interface: AudioStreamCreatorClient
mirroring.mojom.AudioStreamCreatorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mirroring.mojom.AudioStreamCreatorClient';
  }

  streamCreated(stream, client_receiver, data_pipe) {
    // Method: StreamCreated
    // Call: StreamCreated(stream, client_receiver, data_pipe)
  }

};

mirroring.mojom.AudioStreamCreatorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ResourceProvider
mirroring.mojom.ResourceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mirroring.mojom.ResourceProvider';
  }

  bindGpu(receiver) {
    // Method: BindGpu
    // Call: BindGpu(receiver)
  }

  events() {
    // Method: events
    // Call: events()
  }

  getVideoCaptureHost(receiver) {
    // Method: GetVideoCaptureHost
    // Call: GetVideoCaptureHost(receiver)
  }

  getVideoEncoderMetricsProvider(receiver) {
    // Method: GetVideoEncoderMetricsProvider
    // Call: GetVideoEncoderMetricsProvider(receiver)
  }

  getNetworkContext(receiver) {
    // Method: GetNetworkContext
    // Call: GetNetworkContext(receiver)
  }

  createAudioStream(client, param, shared_memory_count) {
    // Method: CreateAudioStream
    // Call: CreateAudioStream(client, param, shared_memory_count)
  }

  connectToRemotingSource(remoter, receiver) {
    // Method: ConnectToRemotingSource
    // Call: ConnectToRemotingSource(remoter, receiver)
  }

};

mirroring.mojom.ResourceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
