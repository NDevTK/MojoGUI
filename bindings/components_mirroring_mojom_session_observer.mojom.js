// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/session_observer.mojom
// Module: mirroring.mojom

'use strict';

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
};

mirroring.mojom.SessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onError(error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mirroring.mojom.SessionObserver_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  didStart() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mirroring.mojom.SessionObserver_DidStart_ParamsSpec,
      null,
      [],
      false);
  }

  didStop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mirroring.mojom.SessionObserver_DidStop_ParamsSpec,
      null,
      [],
      false);
  }

  logInfoMessage(message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  logErrorMessage(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  onSourceChanged() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onRemotingStateChanged(is_remoting) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = mirroring.mojom.SessionObserver_OnError_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
        case 1: {
          const params = mirroring.mojom.SessionObserver_DidStart_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.didStart');
          const result = this.impl.didStart();
          break;
        }
        case 2: {
          const params = mirroring.mojom.SessionObserver_DidStop_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.didStop');
          const result = this.impl.didStop();
          break;
        }
        case 3: {
          const params = mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.logInfoMessage');
          const result = this.impl.logInfoMessage(params.message);
          break;
        }
        case 4: {
          const params = mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.logErrorMessage');
          const result = this.impl.logErrorMessage(params.message);
          break;
        }
        case 5: {
          const params = mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onSourceChanged');
          const result = this.impl.onSourceChanged();
          break;
        }
        case 6: {
          const params = mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onRemotingStateChanged');
          const result = this.impl.onRemotingStateChanged(params.is_remoting);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mirroring.mojom.SessionObserverReceiver = mirroring.mojom.SessionObserverReceiver;

mirroring.mojom.SessionObserverPtr = mirroring.mojom.SessionObserverRemote;
mirroring.mojom.SessionObserverRequest = mirroring.mojom.SessionObserverPendingReceiver;

