// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc_signaling_messenger.mojom
// Module: sharing.mojom

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};

sharing.mojom.LocationStandardFormatSpec = { $: mojo.internal.Enum() };
sharing.mojom.LocationHintSpec = { $: {} };
sharing.mojom.IncomingMessagesListener = {};
sharing.mojom.IncomingMessagesListener.$interfaceName = 'sharing.mojom.IncomingMessagesListener';
sharing.mojom.IncomingMessagesListener_OnMessage_ParamsSpec = { $: {} };
sharing.mojom.IncomingMessagesListener_OnComplete_ParamsSpec = { $: {} };
sharing.mojom.ReceiveMessagesSession = {};
sharing.mojom.ReceiveMessagesSession.$interfaceName = 'sharing.mojom.ReceiveMessagesSession';
sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec = { $: {} };
sharing.mojom.WebRtcSignalingMessenger = {};
sharing.mojom.WebRtcSignalingMessenger.$interfaceName = 'sharing.mojom.WebRtcSignalingMessenger';
sharing.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec = { $: {} };
sharing.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec = { $: {} };
sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec = { $: {} };
sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec = { $: {} };

// Enum: LocationStandardFormat
sharing.mojom.LocationStandardFormat = {
  E164_CALLING: 1,
  ISO_3166_1_ALPHA_2: 2,
};

// Struct: LocationHint
mojo.internal.Struct(
    sharing.mojom.LocationHintSpec, 'sharing.mojom.LocationHint', [
      mojo.internal.StructField('location', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('format', 8, 0, sharing.mojom.LocationStandardFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: IncomingMessagesListener
mojo.internal.Struct(
    sharing.mojom.IncomingMessagesListener_OnMessage_ParamsSpec, 'sharing.mojom.IncomingMessagesListener_OnMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.IncomingMessagesListener_OnComplete_ParamsSpec, 'sharing.mojom.IncomingMessagesListener_OnComplete_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onMessage(message) {
    return this.$.onMessage(message);
  }
  onComplete(success) {
    return this.$.onComplete(success);
  }
};

sharing.mojom.IncomingMessagesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IncomingMessagesListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sharing.mojom.IncomingMessagesListener_OnMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  onComplete(success) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      sharing.mojom.IncomingMessagesListener_OnComplete_ParamsSpec,
      null,
      [success],
      false);
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

sharing.mojom.IncomingMessagesListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IncomingMessagesListener', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.IncomingMessagesListener_OnMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.IncomingMessagesListener_OnComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.IncomingMessagesListener_OnMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onMessage(params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.IncomingMessagesListener_OnComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onComplete(params.success);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

sharing.mojom.IncomingMessagesListenerReceiver = sharing.mojom.IncomingMessagesListenerReceiver;

sharing.mojom.IncomingMessagesListenerPtr = sharing.mojom.IncomingMessagesListenerRemote;
sharing.mojom.IncomingMessagesListenerRequest = sharing.mojom.IncomingMessagesListenerPendingReceiver;


// Interface: ReceiveMessagesSession
mojo.internal.Struct(
    sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec, 'sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_Params', [
    ],
    [[0, 8]]);

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
  stopReceivingMessages() {
    return this.$.stopReceivingMessages();
  }
};

sharing.mojom.ReceiveMessagesSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReceiveMessagesSession', [
      { explicit: null },
    ]);
  }

  stopReceivingMessages() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec,
      null,
      [],
      false);
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

sharing.mojom.ReceiveMessagesSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ReceiveMessagesSession', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.ReceiveMessagesSession_StopReceivingMessages_ParamsSpec.$.structSpec);
          const result = this.impl.stopReceivingMessages();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

sharing.mojom.ReceiveMessagesSessionReceiver = sharing.mojom.ReceiveMessagesSessionReceiver;

sharing.mojom.ReceiveMessagesSessionPtr = sharing.mojom.ReceiveMessagesSessionRemote;
sharing.mojom.ReceiveMessagesSessionRequest = sharing.mojom.ReceiveMessagesSessionPendingReceiver;


// Interface: WebRtcSignalingMessenger
mojo.internal.Struct(
    sharing.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec, 'sharing.mojom.WebRtcSignalingMessenger_SendMessage_Params', [
      mojo.internal.StructField('self_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peer_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('location_hint', 16, 0, sharing.mojom.LocationHintSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    sharing.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec, 'sharing.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec, 'sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_Params', [
      mojo.internal.StructField('self_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('location_hint', 8, 0, sharing.mojom.LocationHintSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(sharing.mojom.IncomingMessagesListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec, 'sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(sharing.mojom.ReceiveMessagesSessionRemote), null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
  sendMessage(self_id, peer_id, location_hint, message) {
    return this.$.sendMessage(self_id, peer_id, location_hint, message);
  }
  startReceivingMessages(self_id, location_hint, listener) {
    return this.$.startReceivingMessages(self_id, location_hint, listener);
  }
};

sharing.mojom.WebRtcSignalingMessengerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebRtcSignalingMessenger', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendMessage(self_id, peer_id, location_hint, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sharing.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec,
      sharing.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec,
      [self_id, peer_id, location_hint, message],
      false);
  }

  startReceivingMessages(self_id, location_hint, listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec,
      sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec,
      [self_id, location_hint, listener],
      false);
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

sharing.mojom.WebRtcSignalingMessengerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebRtcSignalingMessenger', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.WebRtcSignalingMessenger_SendMessage_ParamsSpec.$.structSpec);
          const result = this.impl.sendMessage(params.self_id, params.peer_id, params.location_hint, params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.WebRtcSignalingMessenger_SendMessage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ParamsSpec.$.structSpec);
          const result = this.impl.startReceivingMessages(params.self_id, params.location_hint, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.WebRtcSignalingMessenger_StartReceivingMessages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

sharing.mojom.WebRtcSignalingMessengerReceiver = sharing.mojom.WebRtcSignalingMessengerReceiver;

sharing.mojom.WebRtcSignalingMessengerPtr = sharing.mojom.WebRtcSignalingMessengerRemote;
sharing.mojom.WebRtcSignalingMessengerRequest = sharing.mojom.WebRtcSignalingMessengerPendingReceiver;

