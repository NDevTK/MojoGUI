// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognizer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AvailabilityStatus
media.mojom.AvailabilityStatus = {
  kUnavailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kAvailable: 3,
};
media.mojom.AvailabilityStatusSpec = { $: mojo.internal.Enum() };

// Struct: StartSpeechRecognitionRequestParams
media.mojom.StartSpeechRecognitionRequestParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.StartSpeechRecognitionRequestParams',
      packedSize: 64,
      fields: [
        { name: 'session_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'grammars', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SpeechRecognitionGrammarSpec, false), nullable: false, minVersion: 0 },
        { name: 'recognition_context', packedOffset: 24, packedBitOffset: 0, type: media.mojom.SpeechRecognitionRecognitionContextSpec, nullable: true, minVersion: 0 },
        { name: 'max_hypotheses', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'continuous', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'interim_results', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'on_device', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_cloud_fallback', packedOffset: 36, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_forwarder', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'channel_count', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: SpeechRecognizer
media.mojom.SpeechRecognizer = {};

media.mojom.SpeechRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognizerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognizerPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognizer_Start_ParamsSpec,
      null,
      [params]);
  }

};

media.mojom.SpeechRecognizer.getRemote = function() {
  let remote = new media.mojom.SpeechRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognizer',
    'context');
  return remote.$;
};

// ParamsSpec for Start
media.mojom.SpeechRecognizer_Start_ParamsSpec = {
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
media.mojom.SpeechRecognizerPtr = media.mojom.SpeechRecognizerRemote;
media.mojom.SpeechRecognizerRequest = media.mojom.SpeechRecognizerPendingReceiver;


// Interface: OnDeviceSpeechRecognition
media.mojom.OnDeviceSpeechRecognition = {};

media.mojom.OnDeviceSpeechRecognitionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.OnDeviceSpeechRecognitionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.OnDeviceSpeechRecognition';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.OnDeviceSpeechRecognitionPendingReceiver,
      handle);
    this.$ = new media.mojom.OnDeviceSpeechRecognitionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.OnDeviceSpeechRecognitionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  available(languages) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec,
      media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec,
      [languages]);
  }

  install(languages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec,
      media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec,
      [languages]);
  }

};

media.mojom.OnDeviceSpeechRecognition.getRemote = function() {
  let remote = new media.mojom.OnDeviceSpeechRecognitionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.OnDeviceSpeechRecognition',
    'context');
  return remote.$;
};

// ParamsSpec for Available
media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec = {
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

media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AvailabilityStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Install
media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec = {
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

media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.OnDeviceSpeechRecognitionPtr = media.mojom.OnDeviceSpeechRecognitionRemote;
media.mojom.OnDeviceSpeechRecognitionRequest = media.mojom.OnDeviceSpeechRecognitionPendingReceiver;


// Interface: SpeechRecognitionSession
media.mojom.SpeechRecognitionSession = {};

media.mojom.SpeechRecognitionSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSessionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSessionPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  abort() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionSession_Abort_ParamsSpec,
      null,
      []);
  }

  stopCapture() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec,
      null,
      []);
  }

  updateRecognitionContext(recognition_context) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec,
      null,
      [recognition_context]);
  }

};

media.mojom.SpeechRecognitionSession.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSession',
    'context');
  return remote.$;
};

// ParamsSpec for Abort
media.mojom.SpeechRecognitionSession_Abort_ParamsSpec = {
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
media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec = {
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
media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionPtr = media.mojom.SpeechRecognitionSessionRemote;
media.mojom.SpeechRecognitionSessionRequest = media.mojom.SpeechRecognitionSessionPendingReceiver;


// Interface: SpeechRecognitionSessionClient
media.mojom.SpeechRecognitionSessionClient = {};

media.mojom.SpeechRecognitionSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSessionClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSessionClientPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resultRetrieved(results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec,
      null,
      [results]);
  }

  errorOccurred(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec,
      null,
      [error]);
  }

  started() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec,
      null,
      []);
  }

  audioStarted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec,
      null,
      []);
  }

  soundStarted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec,
      null,
      []);
  }

  soundEnded() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec,
      null,
      []);
  }

  audioEnded() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec,
      null,
      []);
  }

  ended() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec,
      null,
      []);
  }

};

media.mojom.SpeechRecognitionSessionClient.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSessionClient',
    'context');
  return remote.$;
};

// ParamsSpec for ResultRetrieved
media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec = {
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
media.mojom.SpeechRecognitionSessionClientPtr = media.mojom.SpeechRecognitionSessionClientRemote;
media.mojom.SpeechRecognitionSessionClientRequest = media.mojom.SpeechRecognitionSessionClientPendingReceiver;

