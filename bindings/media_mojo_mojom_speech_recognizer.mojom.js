// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognizer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.AvailabilityStatusSpec = { $: mojo.internal.Enum() };
media.mojom.StartSpeechRecognitionRequestParamsSpec = { $: {} };
media.mojom.SpeechRecognizer = {};
media.mojom.SpeechRecognizer.$interfaceName = 'media.mojom.SpeechRecognizer';
media.mojom.SpeechRecognizer_Start_ParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition = {};
media.mojom.OnDeviceSpeechRecognition.$interfaceName = 'media.mojom.OnDeviceSpeechRecognition';
media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSession = {};
media.mojom.SpeechRecognitionSession.$interfaceName = 'media.mojom.SpeechRecognitionSession';
media.mojom.SpeechRecognitionSession_Abort_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient = {};
media.mojom.SpeechRecognitionSessionClient.$interfaceName = 'media.mojom.SpeechRecognitionSessionClient';
media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec = { $: {} };

// Enum: AvailabilityStatus
media.mojom.AvailabilityStatus = {
  kUnavailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kAvailable: 3,
};

// Struct: StartSpeechRecognitionRequestParams
mojo.internal.Struct(
    media.mojom.StartSpeechRecognitionRequestParamsSpec, 'media.mojom.StartSpeechRecognitionRequestParams', [
      mojo.internal.StructField('session_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionSessionClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('language', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('grammars', 24, 0, mojo.internal.Array(media.mojom.SpeechRecognitionGrammarSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('recognition_context', 32, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('audio_forwarder', 40, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionAudioForwarderRemote), null, true, 0, undefined),
      mojo.internal.StructField('max_hypotheses', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('channel_count', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('continuous', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('interim_results', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('on_device', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cloud_fallback', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: SpeechRecognizer
mojo.internal.Struct(
    media.mojom.SpeechRecognizer_Start_ParamsSpec, 'media.mojom.SpeechRecognizer_Start_Params', [
      mojo.internal.StructField('params', 0, 0, media.mojom.StartSpeechRecognitionRequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [params],
      false);
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

media.mojom.SpeechRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.SpeechRecognizer_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start(params.params);
          break;
        }
      }
    });
  }
};

media.mojom.SpeechRecognizerReceiver = media.mojom.SpeechRecognizerReceiver;

media.mojom.SpeechRecognizerPtr = media.mojom.SpeechRecognizerRemote;
media.mojom.SpeechRecognizerRequest = media.mojom.SpeechRecognizerPendingReceiver;


// Interface: OnDeviceSpeechRecognition
mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Available_Params', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Available_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.AvailabilityStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Install_Params', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Install_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [languages],
      false);
  }

  install(languages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec,
      media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec,
      [languages],
      false);
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

media.mojom.OnDeviceSpeechRecognitionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec.$.decode(message.payload);
          const result = this.impl.available(params.languages);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec.$.decode(message.payload);
          const result = this.impl.install(params.languages);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

media.mojom.OnDeviceSpeechRecognitionReceiver = media.mojom.OnDeviceSpeechRecognitionReceiver;

media.mojom.OnDeviceSpeechRecognitionPtr = media.mojom.OnDeviceSpeechRecognitionRemote;
media.mojom.OnDeviceSpeechRecognitionRequest = media.mojom.OnDeviceSpeechRecognitionPendingReceiver;


// Interface: SpeechRecognitionSession
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSession_Abort_ParamsSpec, 'media.mojom.SpeechRecognitionSession_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec, 'media.mojom.SpeechRecognitionSession_StopCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_Params', [
      mojo.internal.StructField('recognition_context', 0, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  stopCapture() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec,
      null,
      [],
      false);
  }

  updateRecognitionContext(recognition_context) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec,
      null,
      [recognition_context],
      false);
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

media.mojom.SpeechRecognitionSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.SpeechRecognitionSession_Abort_ParamsSpec.$.decode(message.payload);
          const result = this.impl.abort();
          break;
        }
        case 1: {
          const params = media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopCapture();
          break;
        }
        case 2: {
          const params = media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateRecognitionContext(params.recognition_context);
          break;
        }
      }
    });
  }
};

media.mojom.SpeechRecognitionSessionReceiver = media.mojom.SpeechRecognitionSessionReceiver;

media.mojom.SpeechRecognitionSessionPtr = media.mojom.SpeechRecognitionSessionRemote;
media.mojom.SpeechRecognitionSessionRequest = media.mojom.SpeechRecognitionSessionPendingReceiver;


// Interface: SpeechRecognitionSessionClient
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_Params', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(media.mojom.WebSpeechRecognitionResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_Params', [
      mojo.internal.StructField('error', 0, 0, media.mojom.SpeechRecognitionErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_Started_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_AudioStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_SoundStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_SoundEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_AudioEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_Ended_Params', [
    ],
    [[0, 8]]);

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
      [results],
      false);
  }

  errorOccurred(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec,
      null,
      [error],
      false);
  }

  started() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec,
      null,
      [],
      false);
  }

  audioStarted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec,
      null,
      [],
      false);
  }

  soundStarted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec,
      null,
      [],
      false);
  }

  soundEnded() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec,
      null,
      [],
      false);
  }

  audioEnded() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec,
      null,
      [],
      false);
  }

  ended() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec,
      null,
      [],
      false);
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

media.mojom.SpeechRecognitionSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resultRetrieved(params.results);
          break;
        }
        case 1: {
          const params = media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec.$.decode(message.payload);
          const result = this.impl.errorOccurred(params.error);
          break;
        }
        case 2: {
          const params = media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec.$.decode(message.payload);
          const result = this.impl.started();
          break;
        }
        case 3: {
          const params = media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.audioStarted();
          break;
        }
        case 4: {
          const params = media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.soundStarted();
          break;
        }
        case 5: {
          const params = media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.soundEnded();
          break;
        }
        case 6: {
          const params = media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.audioEnded();
          break;
        }
        case 7: {
          const params = media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec.$.decode(message.payload);
          const result = this.impl.ended();
          break;
        }
      }
    });
  }
};

media.mojom.SpeechRecognitionSessionClientReceiver = media.mojom.SpeechRecognitionSessionClientReceiver;

media.mojom.SpeechRecognitionSessionClientPtr = media.mojom.SpeechRecognitionSessionClientRemote;
media.mojom.SpeechRecognitionSessionClientRequest = media.mojom.SpeechRecognitionSessionClientPendingReceiver;

