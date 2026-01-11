// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/session_observer.mojom
// Module: mirroring.mojom

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};

mirroring.mojom.SessionErrorSpec = { $: mojo.internal.Enum() };
mirroring.mojom.SessionObserver = {};
mirroring.mojom.SessionObserver.$interfaceName = 'mirroring.mojom.SessionObserver';
mirroring.mojom.SessionObserver_OnError_ParamsSpec = { $: {} };
mirroring.mojom.SessionObserver_DidStart_ParamsSpec = { $: {} };
mirroring.mojom.SessionObserver_DidStop_ParamsSpec = { $: {} };
mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec = { $: {} };
mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec = { $: {} };
mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec = { $: {} };
mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec = { $: {} };

// Enum: SessionError
mirroring.mojom.SessionError = {
  ANSWER_TIME_OUT: 0,
  ANSWER_NOT_OK: 1,
  ANSWER_MISMATCHED_CAST_MODE: 2,
  ANSWER_MISMATCHED_SSRC_LENGTH: 3,
  ANSWER_SELECT_MULTIPLE_AUDIO: 4,
  ANSWER_SELECT_MULTIPLE_VIDEO: 5,
  ANSWER_SELECT_INVALID_INDEX: 6,
  ANSWER_NO_AUDIO_OR_VIDEO: 7,
  AUDIO_CAPTURE_ERROR: 8,
  VIDEO_CAPTURE_ERROR: 9,
  RTP_STREAM_ERROR: 10,
  ENCODING_ERROR: 11,
  CAST_TRANSPORT_ERROR: 12,
  OPENSCREEN_SESSION_ERROR: 13,
};

// Interface: SessionObserver
mojo.internal.Struct(
    mirroring.mojom.SessionObserver_OnError_ParamsSpec, 'mirroring.mojom.SessionObserver_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, mirroring.mojom.SessionErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.SessionObserver_DidStart_ParamsSpec, 'mirroring.mojom.SessionObserver_DidStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mirroring.mojom.SessionObserver_DidStop_ParamsSpec, 'mirroring.mojom.SessionObserver_DidStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec, 'mirroring.mojom.SessionObserver_LogInfoMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec, 'mirroring.mojom.SessionObserver_LogErrorMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec, 'mirroring.mojom.SessionObserver_OnSourceChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec, 'mirroring.mojom.SessionObserver_OnRemotingStateChanged_Params', [
      mojo.internal.StructField('is_remoting', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mirroring.mojom.SessionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.SessionObserverRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.SessionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.SessionObserverPendingReceiver,
      handle);
    this.$ = new mirroring.mojom.SessionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onError(error) {
    return this.$.onError(error);
  }
  didStart() {
    return this.$.didStart();
  }
  didStop() {
    return this.$.didStop();
  }
  logInfoMessage(message) {
    return this.$.logInfoMessage(message);
  }
  logErrorMessage(message) {
    return this.$.logErrorMessage(message);
  }
  onSourceChanged() {
    return this.$.onSourceChanged();
  }
  onRemotingStateChanged(is_remoting) {
    return this.$.onRemotingStateChanged(is_remoting);
  }
};

mirroring.mojom.SessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SessionObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mirroring.mojom.SessionObserver_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  didStart() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mirroring.mojom.SessionObserver_DidStart_ParamsSpec,
      null,
      [],
      false);
  }

  didStop() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mirroring.mojom.SessionObserver_DidStop_ParamsSpec,
      null,
      [],
      false);
  }

  logInfoMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  logErrorMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  onSourceChanged() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onRemotingStateChanged(is_remoting) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec,
      null,
      [is_remoting],
      false);
  }

};

mirroring.mojom.SessionObserver.getRemote = function() {
  let remote = new mirroring.mojom.SessionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.SessionObserver',
    'context');
  return remote.$;
};

mirroring.mojom.SessionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SessionObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(mirroring.mojom.SessionObserver_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.SessionObserver_DidStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.SessionObserver_DidStop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.SessionObserver_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.SessionObserver_DidStart_ParamsSpec.$.structSpec);
          const result = this.impl.didStart();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.SessionObserver_DidStop_ParamsSpec.$.structSpec);
          const result = this.impl.didStop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec.$.structSpec);
          const result = this.impl.logInfoMessage(params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec.$.structSpec);
          const result = this.impl.logErrorMessage(params.message);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSourceChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onRemotingStateChanged(params.is_remoting);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mirroring.mojom.SessionObserverReceiver = mirroring.mojom.SessionObserverReceiver;

mirroring.mojom.SessionObserverPtr = mirroring.mojom.SessionObserverRemote;
mirroring.mojom.SessionObserverRequest = mirroring.mojom.SessionObserverPendingReceiver;

