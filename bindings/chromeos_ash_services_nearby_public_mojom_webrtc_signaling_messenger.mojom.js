// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc_signaling_messenger.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Enum: LocationStandardFormat
sharing.mojom.mojom.LocationStandardFormat = {
  E164_CALLING: 0,
  ISO_3166_1_ALPHA_2: 1,
};
sharing.mojom.mojom.LocationStandardFormatSpec = { $: mojo.internal.Enum() };

// Struct: LocationHint
sharing.mojom.mojom.LocationHintSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.LocationHint',
      packedSize: 24,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 8, packedBitOffset: 0, type: sharing.mojom.LocationStandardFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: IncomingMessagesListener
sharing.mojom.mojom.IncomingMessagesListener = {};

sharing.mojom.mojom.IncomingMessagesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.IncomingMessagesListenerRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.IncomingMessagesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.IncomingMessagesListenerPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.IncomingMessagesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.IncomingMessagesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.IncomingMessagesListener_OnMessage_ParamsSpec,
      null,
      [message]);
  }

  onComplete(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.mojom.IncomingMessagesListener_OnComplete_ParamsSpec,
      null,
      [success]);
  }

};

sharing.mojom.mojom.IncomingMessagesListener.getRemote = function() {
  let remote = new sharing.mojom.mojom.IncomingMessagesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.IncomingMessagesListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessage
sharing.mojom.mojom.IncomingMessagesListener_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IncomingMessagesListener.OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnComplete
sharing.mojom.mojom.IncomingMessagesListener_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IncomingMessagesListener.OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sharing.mojom.mojom.IncomingMessagesListenerPtr = sharing.mojom.mojom.IncomingMessagesListenerRemote;
sharing.mojom.mojom.IncomingMessagesListenerRequest = sharing.mojom.mojom.IncomingMessagesListenerPendingReceiver;


// Interface: ReceiveMessagesSession
sharing.mojom.mojom.ReceiveMessagesSession = {};

sharing.mojom.mojom.ReceiveMessagesSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.ReceiveMessagesSessionRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.ReceiveMessagesSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.ReceiveMessagesSessionPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.ReceiveMessagesSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.ReceiveMessagesSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stopReceivingMessages() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec,
      null,
      []);
  }

};

sharing.mojom.mojom.ReceiveMessagesSession.getRemote = function() {
  let remote = new sharing.mojom.mojom.ReceiveMessagesSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.ReceiveMessagesSession',
    'context');
  return remote.$;
};

// ParamsSpec for StopReceivingMessages
sharing.mojom.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.ReceiveMessagesSession.StopReceivingMessages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
sharing.mojom.mojom.ReceiveMessagesSessionPtr = sharing.mojom.mojom.ReceiveMessagesSessionRemote;
sharing.mojom.mojom.ReceiveMessagesSessionRequest = sharing.mojom.mojom.ReceiveMessagesSessionPendingReceiver;


// Interface: WebRtcSignalingMessenger
sharing.mojom.mojom.WebRtcSignalingMessenger = {};

sharing.mojom.mojom.WebRtcSignalingMessengerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.WebRtcSignalingMessengerRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.WebRtcSignalingMessenger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.WebRtcSignalingMessengerPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.WebRtcSignalingMessengerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.WebRtcSignalingMessengerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(self_id, peer_id, location_hint, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec,
      sharing.mojom.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec,
      [self_id, peer_id, location_hint, message]);
  }

  startReceivingMessages(self_id, location_hint, listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec,
      sharing.mojom.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec,
      [self_id, location_hint, listener]);
  }

};

sharing.mojom.mojom.WebRtcSignalingMessenger.getRemote = function() {
  let remote = new sharing.mojom.mojom.WebRtcSignalingMessengerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.WebRtcSignalingMessenger',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
sharing.mojom.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.SendMessage_Params',
      packedSize: 40,
      fields: [
        { name: 'self_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'peer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'location_hint', packedOffset: 16, packedBitOffset: 0, type: sharing.mojom.LocationHintSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

sharing.mojom.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.SendMessage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartReceivingMessages
sharing.mojom.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.StartReceivingMessages_Params',
      packedSize: 32,
      fields: [
        { name: 'self_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'location_hint', packedOffset: 8, packedBitOffset: 0, type: sharing.mojom.LocationHintSpec, nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

sharing.mojom.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.StartReceivingMessages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sharing.mojom.mojom.WebRtcSignalingMessengerPtr = sharing.mojom.mojom.WebRtcSignalingMessengerRemote;
sharing.mojom.mojom.WebRtcSignalingMessengerRequest = sharing.mojom.mojom.WebRtcSignalingMessengerPendingReceiver;

