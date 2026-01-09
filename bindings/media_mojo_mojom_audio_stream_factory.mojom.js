// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_stream_factory.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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

// Legacy compatibility
media.mojom.LocalMuterPtr = media.mojom.LocalMuterRemote;
media.mojom.LocalMuterRequest = media.mojom.LocalMuterPendingReceiver;


// Interface: AudioStreamFactory
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
      media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec.$,
      media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec.$,
      [stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config]);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec.$,
      null,
      [input_stream_id, output_device_id]);
  }

  createOutputStream(stream, observer, log, device_id, params, group_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec.$,
      media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec.$,
      [stream, observer, log, device_id, params, group_id]);
  }

  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec.$,
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec.$,
      [stream, device_switch_receiver, observer, log, device_id, params, group_id]);
  }

  bindMuter(receiver, group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.AudioStreamFactory_BindMuter_ParamsSpec.$,
      null,
      [receiver, group_id]);
  }

  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec.$,
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec.$,
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
      packedSize: 88,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'log', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'params', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared_memory_count', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enable_agc', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'processing_config', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateInputStream_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'initially_muted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'stream_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'input_stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateOutputStream
media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateOutputStream_Params',
      packedSize: 56,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'log', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'params', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateOutputStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSwitchableOutputStream
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateSwitchableOutputStream_Params',
      packedSize: 64,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_switch_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'log', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'params', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateSwitchableOutputStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateLoopbackStream
media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateLoopbackStream_Params',
      packedSize: 56,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared_memory_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioStreamFactory.CreateLoopbackStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioStreamFactoryPtr = media.mojom.AudioStreamFactoryRemote;
media.mojom.AudioStreamFactoryRequest = media.mojom.AudioStreamFactoryPendingReceiver;

