// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_input_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererAudioInputStreamFactory
blink.mojom.RendererAudioInputStreamFactory = {};

blink.mojom.RendererAudioInputStreamFactory_CreateStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactory_CreateStream_Params',
      packedSize: 48,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.RendererAudioInputStreamFactoryClientRemote), nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'automatic_gain_control', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shared_memory_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'processing_config', packedOffset: 24, packedBitOffset: 0, type: media.mojom.AudioProcessingConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_Params',
      packedSize: 24,
      fields: [
        { name: 'input_stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'output_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.RendererAudioInputStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RendererAudioInputStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RendererAudioInputStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RendererAudioInputStreamFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.RendererAudioInputStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RendererAudioInputStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createStream(client, session_id, params, automatic_gain_control, shared_memory_count, processing_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RendererAudioInputStreamFactory_CreateStream_ParamsSpec,
      null,
      [client, session_id, params, automatic_gain_control, shared_memory_count, processing_config]);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [input_stream_id, output_device_id]);
  }

};

blink.mojom.RendererAudioInputStreamFactory.getRemote = function() {
  let remote = new blink.mojom.RendererAudioInputStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RendererAudioInputStreamFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateStream
blink.mojom.RendererAudioInputStreamFactory_CreateStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactory.CreateStream_Params',
      packedSize: 48,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.RendererAudioInputStreamFactoryClientRemote), nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'automatic_gain_control', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shared_memory_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'processing_config', packedOffset: 24, packedBitOffset: 0, type: media.mojom.AudioProcessingConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for AssociateInputAndOutputForAec
blink.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactory.AssociateInputAndOutputForAec_Params',
      packedSize: 24,
      fields: [
        { name: 'input_stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'output_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.RendererAudioInputStreamFactoryPtr = blink.mojom.RendererAudioInputStreamFactoryRemote;
blink.mojom.RendererAudioInputStreamFactoryRequest = blink.mojom.RendererAudioInputStreamFactoryPendingReceiver;


// Interface: RendererAudioInputStreamFactoryClient
blink.mojom.RendererAudioInputStreamFactoryClient = {};

blink.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_Params',
      packedSize: 48,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamRemote), nullable: false, minVersion: 0 },
        { name: 'client_request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamClientRemote), nullable: false, minVersion: 0 },
        { name: 'data_pipe', packedOffset: 16, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: false, minVersion: 0 },
        { name: 'initially_muted', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.RendererAudioInputStreamFactoryClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RendererAudioInputStreamFactoryClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RendererAudioInputStreamFactoryClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RendererAudioInputStreamFactoryClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.RendererAudioInputStreamFactoryClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RendererAudioInputStreamFactoryClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  streamCreated(stream, client_request, data_pipe, initially_muted, stream_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_ParamsSpec,
      null,
      [stream, client_request, data_pipe, initially_muted, stream_id]);
  }

};

blink.mojom.RendererAudioInputStreamFactoryClient.getRemote = function() {
  let remote = new blink.mojom.RendererAudioInputStreamFactoryClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RendererAudioInputStreamFactoryClient',
    'context');
  return remote.$;
};

// ParamsSpec for StreamCreated
blink.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactoryClient.StreamCreated_Params',
      packedSize: 48,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamRemote), nullable: false, minVersion: 0 },
        { name: 'client_request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamClientRemote), nullable: false, minVersion: 0 },
        { name: 'data_pipe', packedOffset: 16, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: false, minVersion: 0 },
        { name: 'initially_muted', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
blink.mojom.RendererAudioInputStreamFactoryClientPtr = blink.mojom.RendererAudioInputStreamFactoryClientRemote;
blink.mojom.RendererAudioInputStreamFactoryClientRequest = blink.mojom.RendererAudioInputStreamFactoryClientPendingReceiver;

