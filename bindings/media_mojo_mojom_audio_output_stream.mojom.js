// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_output_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: DisconnectReason
media.mojom.DisconnectReason = {
  kDefault: 0,
  kPlatformError: 1,
  kTerminatedByClient: 2,
  kStreamCreationFailed: 3,
  kDocumentDestroyed: 4,
};

// Interface: AudioOutputStream
media.mojom.AudioOutputStream = {};

media.mojom.AudioOutputStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  play() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioOutputStream_Play_ParamsSpec,
      null,
      []);
  }

  pause() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioOutputStream_Pause_ParamsSpec,
      null,
      []);
  }

  flush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioOutputStream_Flush_ParamsSpec,
      null,
      []);
  }

  setVolume(volume) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioOutputStream_SetVolume_ParamsSpec,
      null,
      [volume]);
  }

};

media.mojom.AudioOutputStream.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStream',
    'context');
  return remote.$;
};

// ParamsSpec for Play
media.mojom.AudioOutputStream_Play_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.Play_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Pause
media.mojom.AudioOutputStream_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Flush
media.mojom.AudioOutputStream_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVolume
media.mojom.AudioOutputStream_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStream.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioOutputStreamPtr = media.mojom.AudioOutputStreamRemote;
media.mojom.AudioOutputStreamRequest = media.mojom.AudioOutputStreamPendingReceiver;


// Interface: AudioOutputStreamObserver
media.mojom.AudioOutputStreamObserver = {};

media.mojom.AudioOutputStreamObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didStartPlaying() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec,
      null,
      []);
  }

  didStopPlaying() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec,
      null,
      []);
  }

  didChangeAudibleState(is_audible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec,
      null,
      [is_audible]);
  }

};

media.mojom.AudioOutputStreamObserver.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamObserver',
    'context');
  return remote.$;
};

// ParamsSpec for DidStartPlaying
media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamObserver.DidStartPlaying_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidStopPlaying
media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamObserver.DidStopPlaying_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidChangeAudibleState
media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamObserver.DidChangeAudibleState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_audible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioOutputStreamObserverPtr = media.mojom.AudioOutputStreamObserverRemote;
media.mojom.AudioOutputStreamObserverRequest = media.mojom.AudioOutputStreamObserverPendingReceiver;


// Interface: AudioOutputStreamProvider
media.mojom.AudioOutputStreamProvider = {};

media.mojom.AudioOutputStreamProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquire(params, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec,
      null,
      [params, client]);
  }

};

media.mojom.AudioOutputStreamProvider.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProvider',
    'context');
  return remote.$;
};

// ParamsSpec for Acquire
media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamProvider.Acquire_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioOutputStreamProviderPtr = media.mojom.AudioOutputStreamProviderRemote;
media.mojom.AudioOutputStreamProviderRequest = media.mojom.AudioOutputStreamProviderPendingReceiver;


// Interface: AudioOutputStreamProviderClient
media.mojom.AudioOutputStreamProviderClient = {};

media.mojom.AudioOutputStreamProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamProviderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamProviderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  created(stream, data_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec,
      null,
      [stream, data_pipe]);
  }

};

media.mojom.AudioOutputStreamProviderClient.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProviderClient',
    'context');
  return remote.$;
};

// ParamsSpec for Created
media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioOutputStreamProviderClient.Created_Params',
      packedSize: 24,
      fields: [
        { name: 'data_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioOutputStreamProviderClientPtr = media.mojom.AudioOutputStreamProviderClientRemote;
media.mojom.AudioOutputStreamProviderClientRequest = media.mojom.AudioOutputStreamProviderClientPendingReceiver;


// Interface: DeviceSwitchInterface
media.mojom.DeviceSwitchInterface = {};

media.mojom.DeviceSwitchInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DeviceSwitchInterfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DeviceSwitchInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DeviceSwitchInterfacePendingReceiver,
      handle);
    this.$ = new media.mojom.DeviceSwitchInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.DeviceSwitchInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  switchAudioOutputDeviceId(output_device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec,
      null,
      [output_device_id]);
  }

};

media.mojom.DeviceSwitchInterface.getRemote = function() {
  let remote = new media.mojom.DeviceSwitchInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DeviceSwitchInterface',
    'context');
  return remote.$;
};

// ParamsSpec for SwitchAudioOutputDeviceId
media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DeviceSwitchInterface.SwitchAudioOutputDeviceId_Params',
      packedSize: 16,
      fields: [
        { name: 'output_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.DeviceSwitchInterfacePtr = media.mojom.DeviceSwitchInterfaceRemote;
media.mojom.DeviceSwitchInterfaceRequest = media.mojom.DeviceSwitchInterfacePendingReceiver;

