// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_input_stream.mojom
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
  kSystemPermissions: 5,
  kDeviceInUse: 6,
};

// Interface: AudioInputStream
media.mojom.AudioInputStream = {};

media.mojom.AudioInputStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioInputStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioInputStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioInputStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioInputStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  record() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioInputStream_Record_ParamsSpec.$,
      null,
      []);
  }

  setVolume(volume) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioInputStream_SetVolume_ParamsSpec.$,
      null,
      [volume]);
  }

};

media.mojom.AudioInputStream.getRemote = function() {
  let remote = new media.mojom.AudioInputStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStream',
    'context');
  return remote.$;
};

// ParamsSpec for Record
media.mojom.AudioInputStream_Record_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStream.Record_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVolume
media.mojom.AudioInputStream_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStream.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioInputStreamPtr = media.mojom.AudioInputStreamRemote;
media.mojom.AudioInputStreamRequest = media.mojom.AudioInputStreamPendingReceiver;


// Interface: AudioInputStreamClient
media.mojom.AudioInputStreamClient = {};

media.mojom.AudioInputStreamClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioInputStreamClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStreamClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioInputStreamClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioInputStreamClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioInputStreamClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onError(code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioInputStreamClient_OnError_ParamsSpec.$,
      null,
      [code]);
  }

  onMutedStateChanged(is_muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec.$,
      null,
      [is_muted]);
  }

};

media.mojom.AudioInputStreamClient.getRemote = function() {
  let remote = new media.mojom.AudioInputStreamClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStreamClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnError
media.mojom.AudioInputStreamClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStreamClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMutedStateChanged
media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStreamClient.OnMutedStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioInputStreamClientPtr = media.mojom.AudioInputStreamClientRemote;
media.mojom.AudioInputStreamClientRequest = media.mojom.AudioInputStreamClientPendingReceiver;


// Interface: AudioInputStreamObserver
media.mojom.AudioInputStreamObserver = {};

media.mojom.AudioInputStreamObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioInputStreamObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStreamObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioInputStreamObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioInputStreamObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioInputStreamObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didStartRecording() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec.$,
      null,
      []);
  }

};

media.mojom.AudioInputStreamObserver.getRemote = function() {
  let remote = new media.mojom.AudioInputStreamObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStreamObserver',
    'context');
  return remote.$;
};

// ParamsSpec for DidStartRecording
media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStreamObserver.DidStartRecording_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioInputStreamObserverPtr = media.mojom.AudioInputStreamObserverRemote;
media.mojom.AudioInputStreamObserverRequest = media.mojom.AudioInputStreamObserverPendingReceiver;

