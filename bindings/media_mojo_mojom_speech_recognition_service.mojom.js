// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.AudioSourceSpeechRecognitionContext = {};
media.mojom.AudioSourceSpeechRecognitionContext.$interfaceName = 'media.mojom.AudioSourceSpeechRecognitionContext';
media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec = { $: {} };
media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService = {};
media.mojom.SpeechRecognitionService.$interfaceName = 'media.mojom.SpeechRecognitionService';
media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec = { $: {} };
media.mojom.AudioSourceFetcher = {};
media.mojom.AudioSourceFetcher.$interfaceName = 'media.mojom.AudioSourceFetcher';
media.mojom.AudioSourceFetcher_Start_ParamsSpec = { $: {} };
media.mojom.AudioSourceFetcher_Stop_ParamsSpec = { $: {} };

// Interface: AudioSourceSpeechRecognitionContext
mojo.internal.Struct(
    media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec, 'media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_Params', [
      mojo.internal.StructField('fetcher_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioSourceFetcherRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionRecognizerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, media.mojom.SpeechRecognitionOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec, 'media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParams', [
      mojo.internal.StructField('is_multichannel_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioSourceSpeechRecognitionContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioSourceSpeechRecognitionContextRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioSourceSpeechRecognitionContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioSourceSpeechRecognitionContextPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioSourceSpeechRecognitionContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioSourceSpeechRecognitionContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAudioSourceFetcher(fetcher_receiver, client, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec,
      media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec,
      [fetcher_receiver, client, options]);
  }

};

media.mojom.AudioSourceSpeechRecognitionContext.getRemote = function() {
  let remote = new media.mojom.AudioSourceSpeechRecognitionContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioSourceSpeechRecognitionContext',
    'context');
  return remote.$;
};

media.mojom.AudioSourceSpeechRecognitionContextPtr = media.mojom.AudioSourceSpeechRecognitionContextRemote;
media.mojom.AudioSourceSpeechRecognitionContextRequest = media.mojom.AudioSourceSpeechRecognitionContextPendingReceiver;


// Interface: SpeechRecognitionService
mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_Params', [
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_Params', [
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioSourceSpeechRecognitionContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec, 'media.mojom.SpeechRecognitionService_SetSodaPaths_Params', [
      mojo.internal.StructField('binary_path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('config_paths', 8, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.FilePathSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('primary_language_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec, 'media.mojom.SpeechRecognitionService_SetSodaParams_Params', [
      mojo.internal.StructField('mask_offensive_words', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec, 'media.mojom.SpeechRecognitionService_SetSodaConfigPaths_Params', [
      mojo.internal.StructField('config_paths', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.FilePathSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionServicePendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSpeechRecognitionContext(context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec,
      null,
      [context]);
  }

  bindAudioSourceSpeechRecognitionContext(context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec,
      null,
      [context]);
  }

  setSodaPaths(binary_path, config_paths, primary_language_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec,
      null,
      [binary_path, config_paths, primary_language_name]);
  }

  setSodaParams(mask_offensive_words) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec,
      null,
      [mask_offensive_words]);
  }

  setSodaConfigPaths(config_paths) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec,
      null,
      [config_paths]);
  }

};

media.mojom.SpeechRecognitionService.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionService',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionServicePtr = media.mojom.SpeechRecognitionServiceRemote;
media.mojom.SpeechRecognitionServiceRequest = media.mojom.SpeechRecognitionServicePendingReceiver;


// Interface: AudioSourceFetcher
mojo.internal.Struct(
    media.mojom.AudioSourceFetcher_Start_ParamsSpec, 'media.mojom.AudioSourceFetcher_Start_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_parameters', 16, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioSourceFetcher_Stop_ParamsSpec, 'media.mojom.AudioSourceFetcher_Stop_Params', [
    ],
    [[0, 8]]);

media.mojom.AudioSourceFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioSourceFetcherRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioSourceFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioSourceFetcherPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioSourceFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioSourceFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(factory, device_id, audio_parameters) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioSourceFetcher_Start_ParamsSpec,
      null,
      [factory, device_id, audio_parameters]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioSourceFetcher_Stop_ParamsSpec,
      null,
      []);
  }

};

media.mojom.AudioSourceFetcher.getRemote = function() {
  let remote = new media.mojom.AudioSourceFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioSourceFetcher',
    'context');
  return remote.$;
};

media.mojom.AudioSourceFetcherPtr = media.mojom.AudioSourceFetcherRemote;
media.mojom.AudioSourceFetcherRequest = media.mojom.AudioSourceFetcherPendingReceiver;

