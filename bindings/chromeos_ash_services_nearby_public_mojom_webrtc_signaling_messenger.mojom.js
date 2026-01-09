// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc_signaling_messenger.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Enum: LocationStandardFormat
sharing.mojom.LocationStandardFormat = {
  E164_CALLING: 0,
  ISO_3166_1_ALPHA_2: 1,
};

// Struct: LocationHint
sharing.mojom.LocationHintSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.LocationHint',
      packedSize: 24,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'format', packedOffset: 8, packedBitOffset: 0, type: sharing.mojom.LocationStandardFormatSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: IncomingMessagesListener
sharing.mojom.IncomingMessagesListener = {};

sharing.mojom.IncomingMessagesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.IncomingMessagesListenerRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.IncomingMessagesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.IncomingMessagesListenerPendingReceiver,
      handle);
    this.$ = new sharing.mojom.IncomingMessagesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.IncomingMessagesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.IncomingMessagesListener_OnMessage_ParamsSpec,
      null,
      [message]);
  }

  onComplete(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.IncomingMessagesListener_OnComplete_ParamsSpec,
      null,
      [success]);
  }

};

sharing.mojom.IncomingMessagesListener.getRemote = function() {
  let remote = new sharing.mojom.IncomingMessagesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.IncomingMessagesListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessage
sharing.mojom.IncomingMessagesListener_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IncomingMessagesListener.OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnComplete
sharing.mojom.IncomingMessagesListener_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IncomingMessagesListener.OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.IncomingMessagesListenerPtr = sharing.mojom.IncomingMessagesListenerRemote;
sharing.mojom.IncomingMessagesListenerRequest = sharing.mojom.IncomingMessagesListenerPendingReceiver;


// Interface: ReceiveMessagesSession
sharing.mojom.ReceiveMessagesSession = {};

sharing.mojom.ReceiveMessagesSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.ReceiveMessagesSessionRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.ReceiveMessagesSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.ReceiveMessagesSessionPendingReceiver,
      handle);
    this.$ = new sharing.mojom.ReceiveMessagesSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.ReceiveMessagesSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stopReceivingMessages() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec,
      null,
      []);
  }

};

sharing.mojom.ReceiveMessagesSession.getRemote = function() {
  let remote = new sharing.mojom.ReceiveMessagesSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.ReceiveMessagesSession',
    'context');
  return remote.$;
};

// ParamsSpec for StopReceivingMessages
sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.ReceiveMessagesSession.StopReceivingMessages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.ReceiveMessagesSessionPtr = sharing.mojom.ReceiveMessagesSessionRemote;
sharing.mojom.ReceiveMessagesSessionRequest = sharing.mojom.ReceiveMessagesSessionPendingReceiver;


// Interface: WebRtcSignalingMessenger
sharing.mojom.WebRtcSignalingMessenger = {};

sharing.mojom.WebRtcSignalingMessengerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.WebRtcSignalingMessengerRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.WebRtcSignalingMessenger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.WebRtcSignalingMessengerPendingReceiver,
      handle);
    this.$ = new sharing.mojom.WebRtcSignalingMessengerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.WebRtcSignalingMessengerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(self_id, peer_id, location_hint, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec,
      sharing.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec,
      [self_id, peer_id, location_hint, message]);
  }

  startReceivingMessages(self_id, location_hint, listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec,
      sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec,
      [self_id, location_hint, listener]);
  }

};

sharing.mojom.WebRtcSignalingMessenger.getRemote = function() {
  let remote = new sharing.mojom.WebRtcSignalingMessengerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.WebRtcSignalingMessenger',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
sharing.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.SendMessage_Params',
      packedSize: 40,
      fields: [
        { name: 'self_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'peer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'location_hint', packedOffset: 16, packedBitOffset: 0, type: sharing.mojom.LocationHintSpec, nullable: false },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

sharing.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.SendMessage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartReceivingMessages
sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.StartReceivingMessages_Params',
      packedSize: 32,
      fields: [
        { name: 'self_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'location_hint', packedOffset: 8, packedBitOffset: 0, type: sharing.mojom.LocationHintSpec, nullable: false },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcSignalingMessenger.StartReceivingMessages_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'success', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.WebRtcSignalingMessengerPtr = sharing.mojom.WebRtcSignalingMessengerRemote;
sharing.mojom.WebRtcSignalingMessengerRequest = sharing.mojom.WebRtcSignalingMessengerPendingReceiver;

