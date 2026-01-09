// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/resource_provider.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Interface: AudioStreamCreatorClient
mirroring.mojom.AudioStreamCreatorClient = {};

mirroring.mojom.AudioStreamCreatorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.AudioStreamCreatorClientRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.AudioStreamCreatorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.AudioStreamCreatorClientPendingReceiver,
      handle);
    this.$ = new mirroring.mojom.AudioStreamCreatorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mirroring.mojom.AudioStreamCreatorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  streamCreated(stream, client_receiver, data_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec,
      null,
      [stream, client_receiver, data_pipe]);
  }

};

mirroring.mojom.AudioStreamCreatorClient.getRemote = function() {
  let remote = new mirroring.mojom.AudioStreamCreatorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.AudioStreamCreatorClient',
    'context');
  return remote.$;
};

// ParamsSpec for StreamCreated
mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.AudioStreamCreatorClient.StreamCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'client_receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'data_pipe', packedOffset: 8, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mirroring.mojom.AudioStreamCreatorClientPtr = mirroring.mojom.AudioStreamCreatorClientRemote;
mirroring.mojom.AudioStreamCreatorClientRequest = mirroring.mojom.AudioStreamCreatorClientPendingReceiver;


// Interface: ResourceProvider
mirroring.mojom.ResourceProvider = {};

mirroring.mojom.ResourceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.ResourceProviderRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.ResourceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.ResourceProviderPendingReceiver,
      handle);
    this.$ = new mirroring.mojom.ResourceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mirroring.mojom.ResourceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGpu(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec,
      null,
      [receiver]);
  }

  getVideoCaptureHost(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec,
      null,
      [receiver]);
  }

  getVideoEncoderMetricsProvider(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec,
      null,
      [receiver]);
  }

  getNetworkContext(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec,
      null,
      [receiver]);
  }

  createAudioStream(client, param, shared_memory_count) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec,
      null,
      [client, param, shared_memory_count]);
  }

  connectToRemotingSource(remoter, receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec,
      null,
      [remoter, receiver]);
  }

};

mirroring.mojom.ResourceProvider.getRemote = function() {
  let remote = new mirroring.mojom.ResourceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.ResourceProvider',
    'context');
  return remote.$;
};

// ParamsSpec for BindGpu
mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.ResourceProvider.BindGpu_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVideoCaptureHost
mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.ResourceProvider.GetVideoCaptureHost_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVideoEncoderMetricsProvider
mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.ResourceProvider.GetVideoEncoderMetricsProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNetworkContext
mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.ResourceProvider.GetNetworkContext_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateAudioStream
mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.ResourceProvider.CreateAudioStream_Params',
      packedSize: 32,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'param', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false },
        { name: 'shared_memory_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToRemotingSource
mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.ResourceProvider.ConnectToRemotingSource_Params',
      packedSize: 16,
      fields: [
        { name: 'remoter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mirroring.mojom.ResourceProviderPtr = mirroring.mojom.ResourceProviderRemote;
mirroring.mojom.ResourceProviderRequest = mirroring.mojom.ResourceProviderPendingReceiver;

