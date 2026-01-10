// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_output_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: DisconnectReason
media.mojom.mojom.DisconnectReason = {
  kDefault: 0,
  kPlatformError: 1,
  kTerminatedByClient: 2,
  kStreamCreationFailed: 3,
  kDocumentDestroyed: 4,
};
media.mojom.mojom.DisconnectReasonSpec = { $: mojo.internal.Enum() };

// Interface: AudioOutputStream
media.mojom.mojom.AudioOutputStream = {};

media.mojom.mojom.AudioOutputStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioOutputStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioOutputStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioOutputStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioOutputStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  play() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioOutputStream_Play_ParamsSpec,
      null,
      []);
  }

  pause() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioOutputStream_Pause_ParamsSpec,
      null,
      []);
  }

  flush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.AudioOutputStream_Flush_ParamsSpec,
      null,
      []);
  }

  setVolume(volume) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.AudioOutputStream_SetVolume_ParamsSpec,
      null,
      [volume]);
  }

};

media.mojom.mojom.AudioOutputStream.getRemote = function() {
  let remote = new media.mojom.mojom.AudioOutputStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStream',
    'context');
  return remote.$;
};

// ParamsSpec for Play
media.mojom.mojom.AudioOutputStream_Play_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.Play_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Pause
media.mojom.mojom.AudioOutputStream_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Flush
media.mojom.mojom.AudioOutputStream_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetVolume
media.mojom.mojom.AudioOutputStream_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioOutputStreamPtr = media.mojom.mojom.AudioOutputStreamRemote;
media.mojom.mojom.AudioOutputStreamRequest = media.mojom.mojom.AudioOutputStreamPendingReceiver;


// Interface: AudioOutputStreamObserver
media.mojom.mojom.AudioOutputStreamObserver = {};

media.mojom.mojom.AudioOutputStreamObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioOutputStreamObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioOutputStreamObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioOutputStreamObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioOutputStreamObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didStartPlaying() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec,
      null,
      []);
  }

  didStopPlaying() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec,
      null,
      []);
  }

  didChangeAudibleState(is_audible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec,
      null,
      [is_audible]);
  }

};

media.mojom.mojom.AudioOutputStreamObserver.getRemote = function() {
  let remote = new media.mojom.mojom.AudioOutputStreamObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamObserver',
    'context');
  return remote.$;
};

// ParamsSpec for DidStartPlaying
media.mojom.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamObserver.DidStartPlaying_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DidStopPlaying
media.mojom.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamObserver.DidStopPlaying_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DidChangeAudibleState
media.mojom.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamObserver.DidChangeAudibleState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_audible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioOutputStreamObserverPtr = media.mojom.mojom.AudioOutputStreamObserverRemote;
media.mojom.mojom.AudioOutputStreamObserverRequest = media.mojom.mojom.AudioOutputStreamObserverPendingReceiver;


// Interface: AudioOutputStreamProvider
media.mojom.mojom.AudioOutputStreamProvider = {};

media.mojom.mojom.AudioOutputStreamProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioOutputStreamProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioOutputStreamProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioOutputStreamProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioOutputStreamProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquire(params, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec,
      null,
      [params, client]);
  }

};

media.mojom.mojom.AudioOutputStreamProvider.getRemote = function() {
  let remote = new media.mojom.mojom.AudioOutputStreamProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProvider',
    'context');
  return remote.$;
};

// ParamsSpec for Acquire
media.mojom.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamProvider.Acquire_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.AudioOutputStreamProviderClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioOutputStreamProviderPtr = media.mojom.mojom.AudioOutputStreamProviderRemote;
media.mojom.mojom.AudioOutputStreamProviderRequest = media.mojom.mojom.AudioOutputStreamProviderPendingReceiver;


// Interface: AudioOutputStreamProviderClient
media.mojom.mojom.AudioOutputStreamProviderClient = {};

media.mojom.mojom.AudioOutputStreamProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioOutputStreamProviderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioOutputStreamProviderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioOutputStreamProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioOutputStreamProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  created(stream, data_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec,
      null,
      [stream, data_pipe]);
  }

};

media.mojom.mojom.AudioOutputStreamProviderClient.getRemote = function() {
  let remote = new media.mojom.mojom.AudioOutputStreamProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProviderClient',
    'context');
  return remote.$;
};

// ParamsSpec for Created
media.mojom.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamProviderClient.Created_Params',
      packedSize: 24,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.AudioOutputStreamRemote), nullable: false, minVersion: 0 },
        { name: 'data_pipe', packedOffset: 8, packedBitOffset: 0, type: media.mojom.ReadWriteAudioDataPipeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioOutputStreamProviderClientPtr = media.mojom.mojom.AudioOutputStreamProviderClientRemote;
media.mojom.mojom.AudioOutputStreamProviderClientRequest = media.mojom.mojom.AudioOutputStreamProviderClientPendingReceiver;


// Interface: DeviceSwitchInterface
media.mojom.mojom.DeviceSwitchInterface = {};

media.mojom.mojom.DeviceSwitchInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.DeviceSwitchInterfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DeviceSwitchInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.DeviceSwitchInterfacePendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.DeviceSwitchInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.DeviceSwitchInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  switchAudioOutputDeviceId(output_device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec,
      null,
      [output_device_id]);
  }

};

media.mojom.mojom.DeviceSwitchInterface.getRemote = function() {
  let remote = new media.mojom.mojom.DeviceSwitchInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DeviceSwitchInterface',
    'context');
  return remote.$;
};

// ParamsSpec for SwitchAudioOutputDeviceId
media.mojom.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DeviceSwitchInterface.SwitchAudioOutputDeviceId_Params',
      packedSize: 16,
      fields: [
        { name: 'output_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.DeviceSwitchInterfacePtr = media.mojom.mojom.DeviceSwitchInterfaceRemote;
media.mojom.mojom.DeviceSwitchInterfaceRequest = media.mojom.mojom.DeviceSwitchInterfacePendingReceiver;

