// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/resource_provider.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};
var media = media || {};
var network = network || {};
var sandbox = sandbox || {};
var viz = viz || {};

mirroring.mojom.AudioStreamCreatorClient = {};
mirroring.mojom.AudioStreamCreatorClient.$interfaceName = 'mirroring.mojom.AudioStreamCreatorClient';
mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider = {};
mirroring.mojom.ResourceProvider.$interfaceName = 'mirroring.mojom.ResourceProvider';
mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec = { $: {} };

// Interface: AudioStreamCreatorClient
mojo.internal.Struct(
    mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec, 'mirroring.mojom.AudioStreamCreatorClient_StreamCreated_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('data_pipe', 16, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [stream, client_receiver, data_pipe],
      false);
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

mirroring.mojom.AudioStreamCreatorClientReceiver = class {
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
      switch (header.ordinal) {
        case 0: {
          const params = mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.streamCreated(params.stream, params.client_receiver, params.data_pipe);
          break;
        }
      }
    }});
  }
};

mirroring.mojom.AudioStreamCreatorClientReceiver = mirroring.mojom.AudioStreamCreatorClientReceiver;

mirroring.mojom.AudioStreamCreatorClientPtr = mirroring.mojom.AudioStreamCreatorClientRemote;
mirroring.mojom.AudioStreamCreatorClientRequest = mirroring.mojom.AudioStreamCreatorClientPendingReceiver;


// Interface: ResourceProvider
mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec, 'mirroring.mojom.ResourceProvider_BindGpu_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.GpuRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec, 'mirroring.mojom.ResourceProvider_GetVideoCaptureHost_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoCaptureHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec, 'mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncoderMetricsProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec, 'mirroring.mojom.ResourceProvider_GetNetworkContext_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.NetworkContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec, 'mirroring.mojom.ResourceProvider_CreateAudioStream_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(mirroring.mojom.AudioStreamCreatorClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('param', 8, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec, 'mirroring.mojom.ResourceProvider_ConnectToRemotingSource_Params', [
      mojo.internal.StructField('remoter', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemoterRemote), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RemotingSourceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [receiver],
      false);
  }

  getVideoCaptureHost(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getVideoEncoderMetricsProvider(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getNetworkContext(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec,
      null,
      [receiver],
      false);
  }

  createAudioStream(client, param, shared_memory_count) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec,
      null,
      [client, param, shared_memory_count],
      false);
  }

  connectToRemotingSource(remoter, receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec,
      null,
      [remoter, receiver],
      false);
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

mirroring.mojom.ResourceProviderReceiver = class {
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
      switch (header.ordinal) {
        case 0: {
          const params = mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindGpu(params.receiver);
          break;
        }
        case 1: {
          const params = mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVideoCaptureHost(params.receiver);
          break;
        }
        case 2: {
          const params = mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVideoEncoderMetricsProvider(params.receiver);
          break;
        }
        case 3: {
          const params = mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getNetworkContext(params.receiver);
          break;
        }
        case 4: {
          const params = mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createAudioStream(params.client, params.param, params.shared_memory_count);
          break;
        }
        case 5: {
          const params = mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToRemotingSource(params.remoter, params.receiver);
          break;
        }
      }
    }});
  }
};

mirroring.mojom.ResourceProviderReceiver = mirroring.mojom.ResourceProviderReceiver;

mirroring.mojom.ResourceProviderPtr = mirroring.mojom.ResourceProviderRemote;
mirroring.mojom.ResourceProviderRequest = mirroring.mojom.ResourceProviderPendingReceiver;

