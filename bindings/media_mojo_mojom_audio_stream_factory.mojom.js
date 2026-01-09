// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_stream_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: LocalMuter
media.mojom.LocalMuter = {};

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

// Legacy compatibility
media.mojom.LocalMuterPtr = media.mojom.LocalMuterRemote;
media.mojom.LocalMuterRequest = media.mojom.LocalMuterPendingReceiver;


// Interface: AudioStreamFactory
media.mojom.AudioStreamFactory = {};

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
      [stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config]);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [input_stream_id, output_device_id]);
  }

  createOutputStream(stream, observer, log, device_id, params, group_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec,
      [stream, observer, log, device_id, params, group_id]);
  }

  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec,
      [stream, device_switch_receiver, observer, log, device_id, params, group_id]);
  }

  bindMuter(receiver, group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.AudioStreamFactory_BindMuter_ParamsSpec,
      null,
      [receiver, group_id]);
  }

  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec,
      [receiver, client, observer, params, shared_memory_count, group_id]);
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

// ParamsSpec for CreateInputStream
media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateInputStream_Params',
      packedSize: 64,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'log', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 24, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enable_agc', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'processing_config', packedOffset: 48, packedBitOffset: 0, type: media.mojom.AudioProcessingConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
        { name: 'initially_muted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for AssociateInputAndOutputForAec
media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = {
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
media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateOutputStream_Params',
      packedSize: 48,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'log', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 24, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateSwitchableOutputStream
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateSwitchableOutputStream_Params',
      packedSize: 48,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'device_switch_receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'log', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 24, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMuter
media.mojom.AudioStreamFactory_BindMuter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.BindMuter_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateLoopbackStream
media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateLoopbackStream_Params',
      packedSize: 40,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioStreamFactoryPtr = media.mojom.AudioStreamFactoryRemote;
media.mojom.AudioStreamFactoryRequest = media.mojom.AudioStreamFactoryPendingReceiver;

