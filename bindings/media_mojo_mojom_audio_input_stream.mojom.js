// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_input_stream.mojom
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
  kSystemPermissions: 5,
  kDeviceInUse: 6,
};
media.mojom.mojom.DisconnectReasonSpec = { $: mojo.internal.Enum() };

// Interface: AudioInputStream
media.mojom.mojom.AudioInputStream = {};

media.mojom.mojom.AudioInputStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioInputStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioInputStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioInputStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioInputStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  record() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioInputStream_Record_ParamsSpec,
      null,
      []);
  }

  setVolume(volume) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioInputStream_SetVolume_ParamsSpec,
      null,
      [volume]);
  }

};

media.mojom.mojom.AudioInputStream.getRemote = function() {
  let remote = new media.mojom.mojom.AudioInputStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStream',
    'context');
  return remote.$;
};

// ParamsSpec for Record
media.mojom.mojom.AudioInputStream_Record_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStream.Record_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetVolume
media.mojom.mojom.AudioInputStream_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStream.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioInputStreamPtr = media.mojom.mojom.AudioInputStreamRemote;
media.mojom.mojom.AudioInputStreamRequest = media.mojom.mojom.AudioInputStreamPendingReceiver;


// Interface: AudioInputStreamClient
media.mojom.mojom.AudioInputStreamClient = {};

media.mojom.mojom.AudioInputStreamClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioInputStreamClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStreamClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioInputStreamClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioInputStreamClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioInputStreamClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onError(code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioInputStreamClient_OnError_ParamsSpec,
      null,
      [code]);
  }

  onMutedStateChanged(is_muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec,
      null,
      [is_muted]);
  }

};

media.mojom.mojom.AudioInputStreamClient.getRemote = function() {
  let remote = new media.mojom.mojom.AudioInputStreamClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStreamClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnError
media.mojom.mojom.AudioInputStreamClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStreamClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: media.mojom.InputStreamErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMutedStateChanged
media.mojom.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStreamClient.OnMutedStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioInputStreamClientPtr = media.mojom.mojom.AudioInputStreamClientRemote;
media.mojom.mojom.AudioInputStreamClientRequest = media.mojom.mojom.AudioInputStreamClientPendingReceiver;


// Interface: AudioInputStreamObserver
media.mojom.mojom.AudioInputStreamObserver = {};

media.mojom.mojom.AudioInputStreamObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioInputStreamObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioInputStreamObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioInputStreamObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioInputStreamObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioInputStreamObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didStartRecording() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec,
      null,
      []);
  }

};

media.mojom.mojom.AudioInputStreamObserver.getRemote = function() {
  let remote = new media.mojom.mojom.AudioInputStreamObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioInputStreamObserver',
    'context');
  return remote.$;
};

// ParamsSpec for DidStartRecording
media.mojom.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioInputStreamObserver.DidStartRecording_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioInputStreamObserverPtr = media.mojom.mojom.AudioInputStreamObserverRemote;
media.mojom.mojom.AudioInputStreamObserverRequest = media.mojom.mojom.AudioInputStreamObserverPendingReceiver;

