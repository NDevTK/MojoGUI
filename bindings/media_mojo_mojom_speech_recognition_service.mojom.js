// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: AudioSourceSpeechRecognitionContext
media.mojom.AudioSourceSpeechRecognitionContext = {};

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

// ParamsSpec for BindAudioSourceFetcher
media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioSourceSpeechRecognitionContext.BindAudioSourceFetcher_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'fetcher_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioSourceSpeechRecognitionContext.BindAudioSourceFetcher_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_multichannel_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioSourceSpeechRecognitionContextPtr = media.mojom.AudioSourceSpeechRecognitionContextRemote;
media.mojom.AudioSourceSpeechRecognitionContextRequest = media.mojom.AudioSourceSpeechRecognitionContextPendingReceiver;


// Interface: SpeechRecognitionService
media.mojom.SpeechRecognitionService = {};

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

// ParamsSpec for BindSpeechRecognitionContext
media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionService.BindSpeechRecognitionContext_Params',
      packedSize: 16,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindAudioSourceSpeechRecognitionContext
media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionService.BindAudioSourceSpeechRecognitionContext_Params',
      packedSize: 16,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSodaPaths
media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionService.SetSodaPaths_Params',
      packedSize: 32,
      fields: [
        { name: 'binary_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'config_paths', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'primary_language_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSodaParams
media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionService.SetSodaParams_Params',
      packedSize: 16,
      fields: [
        { name: 'mask_offensive_words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSodaConfigPaths
media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionService.SetSodaConfigPaths_Params',
      packedSize: 16,
      fields: [
        { name: 'config_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionServicePtr = media.mojom.SpeechRecognitionServiceRemote;
media.mojom.SpeechRecognitionServiceRequest = media.mojom.SpeechRecognitionServicePendingReceiver;


// Interface: AudioSourceFetcher
media.mojom.AudioSourceFetcher = {};

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

// ParamsSpec for Start
media.mojom.AudioSourceFetcher_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioSourceFetcher.Start_Params',
      packedSize: 32,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'audio_parameters', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false },
        { name: 'factory', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
media.mojom.AudioSourceFetcher_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioSourceFetcher.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioSourceFetcherPtr = media.mojom.AudioSourceFetcherRemote;
media.mojom.AudioSourceFetcherRequest = media.mojom.AudioSourceFetcherPendingReceiver;

