// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_stream_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.LocalMuter = {};
media.mojom.LocalMuter.$interfaceName = 'media.mojom.LocalMuter';
media.mojom.AudioStreamFactory = {};
media.mojom.AudioStreamFactory.$interfaceName = 'media.mojom.AudioStreamFactory';
media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_BindMuter_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec = { $: {} };

// Interface: LocalMuter
media.mojom.LocalMuterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.LocalMuterRemote = class {
  static get $interfaceName() {
    return 'media.mojom.LocalMuter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.LocalMuterPendingReceiver,
      handle);
    this.$ = new media.mojom.LocalMuterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.LocalMuterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.LocalMuter.getRemote = function() {
  let remote = new media.mojom.LocalMuterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.LocalMuter',
    'context');
  return remote.$;
};

media.mojom.LocalMuterPtr = media.mojom.LocalMuterRemote;
media.mojom.LocalMuterRequest = media.mojom.LocalMuterPendingReceiver;


// Interface: AudioStreamFactory
mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('log', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 40, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_agc', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('processing_config', 64, 0, media.mojom.AudioProcessingConfigSpec, null, true, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec, null, true, 0, undefined),
      mojo.internal.StructField('initially_muted', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('stream_id', 16, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec, 'media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_Params', [
      mojo.internal.StructField('input_stream_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('output_device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.AssociatedInterfaceProxy(media.mojom.AudioOutputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('log', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 32, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 40, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_switch_receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.DeviceSwitchInterfaceRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.AssociatedInterfaceProxy(media.mojom.AudioOutputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('log', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 40, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_BindMuter_ParamsSpec, 'media.mojom.AudioStreamFactory_BindMuter_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.AssociatedInterfaceRequest(media.mojom.LocalMuterRemote), null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 24, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('group_id', 40, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioStreamFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec,
      [stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config],
      false);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [input_stream_id, output_device_id],
      false);
  }

  createOutputStream(stream, observer, log, device_id, params, group_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec,
      [stream, observer, log, device_id, params, group_id],
      false);
  }

  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec,
      [stream, device_switch_receiver, observer, log, device_id, params, group_id],
      false);
  }

  bindMuter(receiver, group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.AudioStreamFactory_BindMuter_ParamsSpec,
      null,
      [receiver, group_id],
      false);
  }

  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec,
      [receiver, client, observer, params, shared_memory_count, group_id],
      false);
  }

};

media.mojom.AudioStreamFactory.getRemote = function() {
  let remote = new media.mojom.AudioStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioStreamFactory',
    'context');
  return remote.$;
};

media.mojom.AudioStreamFactoryPtr = media.mojom.AudioStreamFactoryRemote;
media.mojom.AudioStreamFactoryRequest = media.mojom.AudioStreamFactoryPendingReceiver;

