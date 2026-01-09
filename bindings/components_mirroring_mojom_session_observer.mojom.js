// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/session_observer.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


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
mirroring.mojom.SessionObserver = {};

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
      [error]);
  }

  didStart() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mirroring.mojom.SessionObserver_DidStart_ParamsSpec,
      null,
      []);
  }

  didStop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mirroring.mojom.SessionObserver_DidStop_ParamsSpec,
      null,
      []);
  }

  logInfoMessage(message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec,
      null,
      [message]);
  }

  logErrorMessage(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec,
      null,
      [message]);
  }

  onSourceChanged() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec,
      null,
      []);
  }

  onRemotingStateChanged(is_remoting) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec,
      null,
      [is_remoting]);
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

// ParamsSpec for OnError
mirroring.mojom.SessionObserver_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionObserver.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mirroring.mojom.SessionErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidStart
mirroring.mojom.SessionObserver_DidStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionObserver.DidStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidStop
mirroring.mojom.SessionObserver_DidStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionObserver.DidStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogInfoMessage
mirroring.mojom.SessionObserver_LogInfoMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionObserver.LogInfoMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogErrorMessage
mirroring.mojom.SessionObserver_LogErrorMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionObserver.LogErrorMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSourceChanged
mirroring.mojom.SessionObserver_OnSourceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionObserver.OnSourceChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRemotingStateChanged
mirroring.mojom.SessionObserver_OnRemotingStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionObserver.OnRemotingStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_remoting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mirroring.mojom.SessionObserverPtr = mirroring.mojom.SessionObserverRemote;
mirroring.mojom.SessionObserverRequest = mirroring.mojom.SessionObserverPendingReceiver;

