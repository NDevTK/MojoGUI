// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_input_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.RendererAudioInputStreamFactory = {};
blink.mojom.RendererAudioInputStreamFactory.$interfaceName = 'blink.mojom.RendererAudioInputStreamFactory';
blink.mojom.RendererAudioInputStreamFactory_CreateStream_ParamsSpec = { $: {} };
blink.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = { $: {} };
blink.mojom.RendererAudioInputStreamFactoryClient = {};
blink.mojom.RendererAudioInputStreamFactoryClient.$interfaceName = 'blink.mojom.RendererAudioInputStreamFactoryClient';
blink.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_ParamsSpec = { $: {} };

// Interface: RendererAudioInputStreamFactory
mojo.internal.Struct(
    blink.mojom.RendererAudioInputStreamFactory_CreateStream_ParamsSpec, 'blink.mojom.RendererAudioInputStreamFactory_CreateStream_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.RendererAudioInputStreamFactoryClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('params', 16, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
      mojo.internal.StructField('automatic_gain_control', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('processing_config', 24, 0, media.mojom.AudioProcessingConfigSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_ParamsSpec, 'blink.mojom.RendererAudioInputStreamFactory_AssociateInputAndOutputForAec_Params', [
      mojo.internal.StructField('input_stream_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('output_device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

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

blink.mojom.RendererAudioInputStreamFactoryPtr = blink.mojom.RendererAudioInputStreamFactoryRemote;
blink.mojom.RendererAudioInputStreamFactoryRequest = blink.mojom.RendererAudioInputStreamFactoryPendingReceiver;


// Interface: RendererAudioInputStreamFactoryClient
mojo.internal.Struct(
    blink.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_ParamsSpec, 'blink.mojom.RendererAudioInputStreamFactoryClient_StreamCreated_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_request', 8, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('data_pipe', 16, 0, media.mojom.ReadWriteAudioDataPipeSpec, null, false, 0, undefined),
      mojo.internal.StructField('initially_muted', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('stream_id', 24, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

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

blink.mojom.RendererAudioInputStreamFactoryClientPtr = blink.mojom.RendererAudioInputStreamFactoryClientRemote;
blink.mojom.RendererAudioInputStreamFactoryClientRequest = blink.mojom.RendererAudioInputStreamFactoryClientPendingReceiver;

