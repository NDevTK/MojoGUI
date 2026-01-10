// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognizer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AvailabilityStatus
media.mojom.mojom.AvailabilityStatus = {
  kUnavailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kAvailable: 3,
};
media.mojom.mojom.AvailabilityStatusSpec = { $: mojo.internal.Enum() };

// Struct: StartSpeechRecognitionRequestParams
media.mojom.mojom.StartSpeechRecognitionRequestParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.StartSpeechRecognitionRequestParams',
      packedSize: 64,
      fields: [
        { name: 'session_receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'grammars', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SpeechRecognitionGrammarSpec, false), nullable: false, minVersion: 0 },
        { name: 'recognition_context', packedOffset: 16, packedBitOffset: 0, type: media.mojom.SpeechRecognitionRecognitionContextSpec, nullable: true, minVersion: 0 },
        { name: 'max_hypotheses', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'continuous', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'interim_results', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'on_device', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_cloud_fallback', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_forwarder', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'channel_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: SpeechRecognizer
media.mojom.mojom.SpeechRecognizer = {};

media.mojom.mojom.SpeechRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.SpeechRecognizerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.SpeechRecognizerPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.SpeechRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.SpeechRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.SpeechRecognizer_Start_ParamsSpec,
      null,
      [params]);
  }

};

media.mojom.mojom.SpeechRecognizer.getRemote = function() {
  let remote = new media.mojom.mojom.SpeechRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognizer',
    'context');
  return remote.$;
};

// ParamsSpec for Start
media.mojom.mojom.SpeechRecognizer_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognizer.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StartSpeechRecognitionRequestParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.SpeechRecognizerPtr = media.mojom.mojom.SpeechRecognizerRemote;
media.mojom.mojom.SpeechRecognizerRequest = media.mojom.mojom.SpeechRecognizerPendingReceiver;


// Interface: OnDeviceSpeechRecognition
media.mojom.mojom.OnDeviceSpeechRecognition = {};

media.mojom.mojom.OnDeviceSpeechRecognitionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.OnDeviceSpeechRecognitionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.OnDeviceSpeechRecognition';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.OnDeviceSpeechRecognitionPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.OnDeviceSpeechRecognitionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.OnDeviceSpeechRecognitionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  available(languages) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec,
      media.mojom.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec,
      [languages]);
  }

  install(languages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec,
      media.mojom.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec,
      [languages]);
  }

};

media.mojom.mojom.OnDeviceSpeechRecognition.getRemote = function() {
  let remote = new media.mojom.mojom.OnDeviceSpeechRecognitionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.OnDeviceSpeechRecognition',
    'context');
  return remote.$;
};

// ParamsSpec for Available
media.mojom.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OnDeviceSpeechRecognition.Available_Params',
      packedSize: 16,
      fields: [
        { name: 'languages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OnDeviceSpeechRecognition.Available_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AvailabilityStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Install
media.mojom.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OnDeviceSpeechRecognition.Install_Params',
      packedSize: 16,
      fields: [
        { name: 'languages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OnDeviceSpeechRecognition.Install_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.OnDeviceSpeechRecognitionPtr = media.mojom.mojom.OnDeviceSpeechRecognitionRemote;
media.mojom.mojom.OnDeviceSpeechRecognitionRequest = media.mojom.mojom.OnDeviceSpeechRecognitionPendingReceiver;


// Interface: SpeechRecognitionSession
media.mojom.mojom.SpeechRecognitionSession = {};

media.mojom.mojom.SpeechRecognitionSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.SpeechRecognitionSessionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.SpeechRecognitionSessionPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.SpeechRecognitionSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.SpeechRecognitionSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  abort() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.SpeechRecognitionSession_Abort_ParamsSpec,
      null,
      []);
  }

  stopCapture() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec,
      null,
      []);
  }

  updateRecognitionContext(recognition_context) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec,
      null,
      [recognition_context]);
  }

};

media.mojom.mojom.SpeechRecognitionSession.getRemote = function() {
  let remote = new media.mojom.mojom.SpeechRecognitionSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSession',
    'context');
  return remote.$;
};

// ParamsSpec for Abort
media.mojom.mojom.SpeechRecognitionSession_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSession.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StopCapture
media.mojom.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSession.StopCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateRecognitionContext
media.mojom.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSession.UpdateRecognitionContext_Params',
      packedSize: 16,
      fields: [
        { name: 'recognition_context', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionRecognitionContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.SpeechRecognitionSessionPtr = media.mojom.mojom.SpeechRecognitionSessionRemote;
media.mojom.mojom.SpeechRecognitionSessionRequest = media.mojom.mojom.SpeechRecognitionSessionPendingReceiver;


// Interface: SpeechRecognitionSessionClient
media.mojom.mojom.SpeechRecognitionSessionClient = {};

media.mojom.mojom.SpeechRecognitionSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.SpeechRecognitionSessionClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.SpeechRecognitionSessionClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.SpeechRecognitionSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.SpeechRecognitionSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resultRetrieved(results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec,
      null,
      [results]);
  }

  errorOccurred(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec,
      null,
      [error]);
  }

  started() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec,
      null,
      []);
  }

  audioStarted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec,
      null,
      []);
  }

  soundStarted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec,
      null,
      []);
  }

  soundEnded() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec,
      null,
      []);
  }

  audioEnded() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec,
      null,
      []);
  }

  ended() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec,
      null,
      []);
  }

};

media.mojom.mojom.SpeechRecognitionSessionClient.getRemote = function() {
  let remote = new media.mojom.mojom.SpeechRecognitionSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSessionClient',
    'context');
  return remote.$;
};

// ParamsSpec for ResultRetrieved
media.mojom.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.ResultRetrieved_Params',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.WebSpeechRecognitionResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ErrorOccurred
media.mojom.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.ErrorOccurred_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Started
media.mojom.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.Started_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AudioStarted
media.mojom.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.AudioStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SoundStarted
media.mojom.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.SoundStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SoundEnded
media.mojom.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.SoundEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AudioEnded
media.mojom.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.AudioEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Ended
media.mojom.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSessionClient.Ended_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.SpeechRecognitionSessionClientPtr = media.mojom.mojom.SpeechRecognitionSessionClientRemote;
media.mojom.mojom.SpeechRecognitionSessionClientRequest = media.mojom.mojom.SpeechRecognitionSessionClientPendingReceiver;

