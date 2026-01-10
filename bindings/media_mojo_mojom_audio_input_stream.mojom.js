// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_input_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.DisconnectReasonSpec = { $: mojo.internal.Enum() };
media.mojom.AudioInputStream = {};
media.mojom.AudioInputStream.$interfaceName = 'media.mojom.AudioInputStream';
media.mojom.AudioInputStream_Record_ParamsSpec = { $: {} };
media.mojom.AudioInputStream_SetVolume_ParamsSpec = { $: {} };
media.mojom.AudioInputStreamClient = {};
media.mojom.AudioInputStreamClient.$interfaceName = 'media.mojom.AudioInputStreamClient';
media.mojom.AudioInputStreamClient_OnError_ParamsSpec = { $: {} };
media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec = { $: {} };
media.mojom.AudioInputStreamObserver = {};
media.mojom.AudioInputStreamObserver.$interfaceName = 'media.mojom.AudioInputStreamObserver';
media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    media.mojom.AudioInputStream_Record_ParamsSpec, 'media.mojom.AudioInputStream_Record_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioInputStream_SetVolume_ParamsSpec, 'media.mojom.AudioInputStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      media.mojom.AudioInputStream_Record_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioInputStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
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

media.mojom.AudioInputStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AudioInputStream_Record_ParamsSpec.$.decode(message.payload);
          const result = this.impl.record();
          break;
        }
        case 1: {
          const params = media.mojom.AudioInputStream_SetVolume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVolume(params.volume);
          break;
        }
      }
    }});
  }
};

media.mojom.AudioInputStreamReceiver = media.mojom.AudioInputStreamReceiver;

media.mojom.AudioInputStreamPtr = media.mojom.AudioInputStreamRemote;
media.mojom.AudioInputStreamRequest = media.mojom.AudioInputStreamPendingReceiver;


// Interface: AudioInputStreamClient
mojo.internal.Struct(
    media.mojom.AudioInputStreamClient_OnError_ParamsSpec, 'media.mojom.AudioInputStreamClient_OnError_Params', [
      mojo.internal.StructField('code', 0, 0, media.mojom.InputStreamErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec, 'media.mojom.AudioInputStreamClient_OnMutedStateChanged_Params', [
      mojo.internal.StructField('is_muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      media.mojom.AudioInputStreamClient_OnError_ParamsSpec,
      null,
      [code],
      false);
  }

  onMutedStateChanged(is_muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec,
      null,
      [is_muted],
      false);
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

media.mojom.AudioInputStreamClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AudioInputStreamClient_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.code);
          break;
        }
        case 1: {
          const params = media.mojom.AudioInputStreamClient_OnMutedStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMutedStateChanged(params.is_muted);
          break;
        }
      }
    }});
  }
};

media.mojom.AudioInputStreamClientReceiver = media.mojom.AudioInputStreamClientReceiver;

media.mojom.AudioInputStreamClientPtr = media.mojom.AudioInputStreamClientRemote;
media.mojom.AudioInputStreamClientRequest = media.mojom.AudioInputStreamClientPendingReceiver;


// Interface: AudioInputStreamObserver
mojo.internal.Struct(
    media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec, 'media.mojom.AudioInputStreamObserver_DidStartRecording_Params', [
    ],
    [[0, 8]]);

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
      media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec,
      null,
      [],
      false);
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

media.mojom.AudioInputStreamObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AudioInputStreamObserver_DidStartRecording_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didStartRecording();
          break;
        }
      }
    }});
  }
};

media.mojom.AudioInputStreamObserverReceiver = media.mojom.AudioInputStreamObserverReceiver;

media.mojom.AudioInputStreamObserverPtr = media.mojom.AudioInputStreamObserverRemote;
media.mojom.AudioInputStreamObserverRequest = media.mojom.AudioInputStreamObserverPendingReceiver;

