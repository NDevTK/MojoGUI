// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_service.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

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
      mojo.internal.StructField('options', 16, 0, media.mojom.SpeechRecognitionOptionsSpec.$, null, false, 0, undefined),
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
  bindAudioSourceFetcher(fetcher_receiver, client, options) {
    return this.$.bindAudioSourceFetcher(fetcher_receiver, client, options);
  }
};

media.mojom.AudioSourceSpeechRecognitionContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioSourceSpeechRecognitionContext', [
      { explicit: null },
    ]);
  }

  bindAudioSourceFetcher(fetcher_receiver, client, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec,
      media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec,
      [fetcher_receiver, client, options],
      false);
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

media.mojom.AudioSourceSpeechRecognitionContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioSourceSpeechRecognitionContext', [
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
             decoder.decodeStructInline(media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec.$.structSpec);
          const result = this.impl.bindAudioSourceFetcher(params.fetcher_receiver, params.client, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioSourceSpeechRecognitionContextReceiver = media.mojom.AudioSourceSpeechRecognitionContextReceiver;

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
      mojo.internal.StructField('binary_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('config_paths', 8, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('config_paths', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
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
  bindSpeechRecognitionContext(context) {
    return this.$.bindSpeechRecognitionContext(context);
  }
  bindAudioSourceSpeechRecognitionContext(context) {
    return this.$.bindAudioSourceSpeechRecognitionContext(context);
  }
  setSodaPaths(binary_path, config_paths, primary_language_name) {
    return this.$.setSodaPaths(binary_path, config_paths, primary_language_name);
  }
  setSodaParams(mask_offensive_words) {
    return this.$.setSodaParams(mask_offensive_words);
  }
  setSodaConfigPaths(config_paths) {
    return this.$.setSodaConfigPaths(config_paths);
  }
};

media.mojom.SpeechRecognitionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindSpeechRecognitionContext(context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec,
      null,
      [context],
      false);
  }

  bindAudioSourceSpeechRecognitionContext(context) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec,
      null,
      [context],
      false);
  }

  setSodaPaths(binary_path, config_paths, primary_language_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec,
      null,
      [binary_path, config_paths, primary_language_name],
      false);
  }

  setSodaParams(mask_offensive_words) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec,
      null,
      [mask_offensive_words],
      false);
  }

  setSodaConfigPaths(config_paths) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec,
      null,
      [config_paths],
      false);
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

media.mojom.SpeechRecognitionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionService', [
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
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec.$.structSpec);
          const result = this.impl.bindSpeechRecognitionContext(params.context);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec.$.structSpec);
          const result = this.impl.bindAudioSourceSpeechRecognitionContext(params.context);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec.$.structSpec);
          const result = this.impl.setSodaPaths(params.binary_path, params.config_paths, params.primary_language_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec.$.structSpec);
          const result = this.impl.setSodaParams(params.mask_offensive_words);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec.$.structSpec);
          const result = this.impl.setSodaConfigPaths(params.config_paths);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.SpeechRecognitionServiceReceiver = media.mojom.SpeechRecognitionServiceReceiver;

media.mojom.SpeechRecognitionServicePtr = media.mojom.SpeechRecognitionServiceRemote;
media.mojom.SpeechRecognitionServiceRequest = media.mojom.SpeechRecognitionServicePendingReceiver;


// Interface: AudioSourceFetcher
mojo.internal.Struct(
    media.mojom.AudioSourceFetcher_Start_ParamsSpec, 'media.mojom.AudioSourceFetcher_Start_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_parameters', 16, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
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
  start(factory, device_id, audio_parameters) {
    return this.$.start(factory, device_id, audio_parameters);
  }
  stop() {
    return this.$.stop();
  }
};

media.mojom.AudioSourceFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioSourceFetcher', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  start(factory, device_id, audio_parameters) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioSourceFetcher_Start_ParamsSpec,
      null,
      [factory, device_id, audio_parameters],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioSourceFetcher_Stop_ParamsSpec,
      null,
      [],
      false);
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

media.mojom.AudioSourceFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioSourceFetcher', [
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
             decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.factory, params.device_id, params.audio_parameters);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioSourceFetcherReceiver = media.mojom.AudioSourceFetcherReceiver;

media.mojom.AudioSourceFetcherPtr = media.mojom.AudioSourceFetcherRemote;
media.mojom.AudioSourceFetcherRequest = media.mojom.AudioSourceFetcherPendingReceiver;

