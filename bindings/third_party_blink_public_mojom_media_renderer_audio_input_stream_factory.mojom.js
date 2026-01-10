// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_input_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererAudioInputStreamFactory
blink.mojom.mojom.RendererAudioInputStreamFactory = {};

blink.mojom.mojom.RendererAudioInputStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RendererAudioInputStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RendererAudioInputStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RendererAudioInputStreamFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RendererAudioInputStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RendererAudioInputStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createStream(client, session_id, params, automatic_gain_control, shared_memory_count, processing_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RendererAudioInputStreamFactory_CreateStream_ParamsSpec,
      null,
      [client, session_id, params, automatic_gain_control, shared_memory_count, processing_config]);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [input_stream_id, output_device_id]);
  }

};

blink.mojom.mojom.RendererAudioInputStreamFactory.getRemote = function() {
  let remote = new blink.mojom.mojom.RendererAudioInputStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RendererAudioInputStreamFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateStream
blink.mojom.mojom.RendererAudioInputStreamFactory_CreateStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactory.CreateStream_Params',
      packedSize: 48,
      fields: [
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'automatic_gain_control', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shared_memory_count', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'processing_config', packedOffset: 16, packedBitOffset: 0, type: media.mojom.AudioProcessingConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for AssociateInputAndOutputForAec
blink.mojom.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = {
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
blink.mojom.mojom.RendererAudioInputStreamFactoryPtr = blink.mojom.mojom.RendererAudioInputStreamFactoryRemote;
blink.mojom.mojom.RendererAudioInputStreamFactoryRequest = blink.mojom.mojom.RendererAudioInputStreamFactoryPendingReceiver;


// Interface: RendererAudioInputStreamFactoryClient
blink.mojom.mojom.RendererAudioInputStreamFactoryClient = {};

blink.mojom.mojom.RendererAudioInputStreamFactoryClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RendererAudioInputStreamFactoryClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RendererAudioInputStreamFactoryClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RendererAudioInputStreamFactoryClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RendererAudioInputStreamFactoryClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RendererAudioInputStreamFactoryClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  streamCreated(stream, client_request, data_pipe, initially_muted, stream_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_ParamsSpec,
      null,
      [stream, client_request, data_pipe, initially_muted, stream_id]);
  }

};

blink.mojom.mojom.RendererAudioInputStreamFactoryClient.getRemote = function() {
  let remote = new blink.mojom.mojom.RendererAudioInputStreamFactoryClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RendererAudioInputStreamFactoryClient',
    'context');
  return remote.$;
};

// ParamsSpec for StreamCreated
blink.mojom.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioInputStreamFactoryClient.StreamCreated_Params',
      packedSize: 40,
      fields: [
        { name: 'stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'client_request', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: false, minVersion: 0 },
        { name: 'initially_muted', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.RendererAudioInputStreamFactoryClientPtr = blink.mojom.mojom.RendererAudioInputStreamFactoryClientRemote;
blink.mojom.mojom.RendererAudioInputStreamFactoryClientRequest = blink.mojom.mojom.RendererAudioInputStreamFactoryClientPendingReceiver;

