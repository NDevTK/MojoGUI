// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_stream_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: LocalMuter
media.mojom.mojom.LocalMuter = {};

media.mojom.mojom.LocalMuterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.LocalMuterRemote = class {
  static get $interfaceName() {
    return 'media.mojom.LocalMuter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.LocalMuterPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.LocalMuterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.LocalMuterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.mojom.LocalMuter.getRemote = function() {
  let remote = new media.mojom.mojom.LocalMuterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.LocalMuter',
    'context');
  return remote.$;
};

// Legacy compatibility
media.mojom.mojom.LocalMuterPtr = media.mojom.mojom.LocalMuterRemote;
media.mojom.mojom.LocalMuterRequest = media.mojom.mojom.LocalMuterPendingReceiver;


// Interface: AudioStreamFactory
media.mojom.mojom.AudioStreamFactory = {};

media.mojom.mojom.AudioStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioStreamFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec,
      media.mojom.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec,
      [stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config]);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [input_stream_id, output_device_id]);
  }

  createOutputStream(stream, observer, log, device_id, params, group_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec,
      media.mojom.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec,
      [stream, observer, log, device_id, params, group_id]);
  }

  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec,
      media.mojom.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec,
      [stream, device_switch_receiver, observer, log, device_id, params, group_id]);
  }

  bindMuter(receiver, group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.AudioStreamFactory_BindMuter_ParamsSpec,
      null,
      [receiver, group_id]);
  }

  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec,
      media.mojom.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec,
      [receiver, client, observer, params, shared_memory_count, group_id]);
  }

};

media.mojom.mojom.AudioStreamFactory.getRemote = function() {
  let remote = new media.mojom.mojom.AudioStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioStreamFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateInputStream
media.mojom.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateInputStream_Params',
      packedSize: 64,
      fields: [
        { name: 'stream', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'log', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory_count', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enable_agc', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'processing_config', packedOffset: 24, packedBitOffset: 0, type: media.mojom.AudioProcessingConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

media.mojom.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateInputStream_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
        { name: 'initially_muted', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for AssociateInputAndOutputForAec
media.mojom.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.AssociateInputAndOutputForAec_Params',
      packedSize: 24,
      fields: [
        { name: 'input_stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'output_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateOutputStream
media.mojom.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateOutputStream_Params',
      packedSize: 48,
      fields: [
        { name: 'stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'log', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

media.mojom.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateOutputStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateSwitchableOutputStream
media.mojom.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateSwitchableOutputStream_Params',
      packedSize: 48,
      fields: [
        { name: 'stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'device_switch_receiver', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'log', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

media.mojom.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateSwitchableOutputStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMuter
media.mojom.mojom.AudioStreamFactory_BindMuter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.BindMuter_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateLoopbackStream
media.mojom.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateLoopbackStream_Params',
      packedSize: 40,
      fields: [
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory_count', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

media.mojom.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateLoopbackStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioStreamFactoryPtr = media.mojom.mojom.AudioStreamFactoryRemote;
media.mojom.mojom.AudioStreamFactoryRequest = media.mojom.mojom.AudioStreamFactoryPendingReceiver;

