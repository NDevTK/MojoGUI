// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translation_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.CanCreateTranslatorResultSpec = { $: mojo.internal.Enum() };
blink.mojom.CreateTranslatorErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.CreateTranslatorResultSpec = { $: {} };
blink.mojom.TranslatorLanguageCodeSpec = { $: {} };
blink.mojom.TranslatorCreateOptionsSpec = { $: {} };
blink.mojom.TranslationManagerCreateTranslatorClient = {};
blink.mojom.TranslationManagerCreateTranslatorClient.$interfaceName = 'blink.mojom.TranslationManagerCreateTranslatorClient';
blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.TranslationManager = {};
blink.mojom.TranslationManager.$interfaceName = 'blink.mojom.TranslationManager';
blink.mojom.TranslationManager_CreateTranslator_ParamsSpec = { $: {} };
blink.mojom.TranslationManager_TranslationAvailable_ParamsSpec = { $: {} };
blink.mojom.TranslationManager_TranslationAvailable_ResponseParamsSpec = { $: {} };

// Enum: CanCreateTranslatorResult
blink.mojom.CanCreateTranslatorResult = {
  kReadily: 0,
  kAfterDownloadLibraryNotReady: 1,
  kAfterDownloadLanguagePackNotReady: 2,
  kAfterDownloadLibraryAndLanguagePackNotReady: 3,
  kAfterDownloadTranslatorCreationRequired: 4,
  kNoNotSupportedLanguage: 5,
  kNoServiceCrashed: 6,
  kNoDisallowedByPolicy: 7,
  kNoExceedsServiceCountLimitation: 8,
  kNoInvalidStoragePartition: 9,
};

// Enum: CreateTranslatorError
blink.mojom.CreateTranslatorError = {
  kInvalidBinary: 1,
  kInvalidFunctionPointer: 2,
  kFailedToInitialize: 3,
  kFailedToCreateTranslator: 4,
  kServiceCrashed: 5,
  kDisallowedByPolicy: 6,
  kExceedsServiceCountLimitation: 7,
  kExceedsPendingTaskCountLimitation: 8,
  kInvalidVersion: 9,
  kInvalidStoragePartition: 10,
};

// Union: CreateTranslatorResult
mojo.internal.Union(
    blink.mojom.CreateTranslatorResultSpec, 'blink.mojom.CreateTranslatorResult', {
      'translator': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(blink.mojom.TranslatorRemote),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': blink.mojom.CreateTranslatorErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: TranslatorLanguageCode
mojo.internal.Struct(
    blink.mojom.TranslatorLanguageCodeSpec, 'blink.mojom.TranslatorLanguageCode', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TranslatorCreateOptions
mojo.internal.Struct(
    blink.mojom.TranslatorCreateOptionsSpec, 'blink.mojom.TranslatorCreateOptions', [
      mojo.internal.StructField('source_lang', 0, 0, blink.mojom.TranslatorLanguageCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_lang', 8, 0, blink.mojom.TranslatorLanguageCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer_remote', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelDownloadProgressObserverRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: TranslationManagerCreateTranslatorClient
mojo.internal.Struct(
    blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_ParamsSpec, 'blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_Params', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CreateTranslatorResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_lang', 8, 0, blink.mojom.TranslatorLanguageCodeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('target_lang', 16, 0, blink.mojom.TranslatorLanguageCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.TranslationManagerCreateTranslatorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TranslationManagerCreateTranslatorClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TranslationManagerCreateTranslatorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TranslationManagerCreateTranslatorClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.TranslationManagerCreateTranslatorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TranslationManagerCreateTranslatorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(result, source_lang, target_lang) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_ParamsSpec,
      null,
      [result, source_lang, target_lang],
      false);
  }

};

blink.mojom.TranslationManagerCreateTranslatorClient.getRemote = function() {
  let remote = new blink.mojom.TranslationManagerCreateTranslatorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TranslationManagerCreateTranslatorClient',
    'context');
  return remote.$;
};

blink.mojom.TranslationManagerCreateTranslatorClientReceiver = class {
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
          const params = blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onResult(params.result, params.source_lang, params.target_lang);
          break;
        }
      }
    });
  }
};

blink.mojom.TranslationManagerCreateTranslatorClientReceiver = blink.mojom.TranslationManagerCreateTranslatorClientReceiver;

blink.mojom.TranslationManagerCreateTranslatorClientPtr = blink.mojom.TranslationManagerCreateTranslatorClientRemote;
blink.mojom.TranslationManagerCreateTranslatorClientRequest = blink.mojom.TranslationManagerCreateTranslatorClientPendingReceiver;


// Interface: TranslationManager
mojo.internal.Struct(
    blink.mojom.TranslationManager_CreateTranslator_ParamsSpec, 'blink.mojom.TranslationManager_CreateTranslator_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.TranslationManagerCreateTranslatorClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.TranslatorCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.TranslationManager_TranslationAvailable_ParamsSpec, 'blink.mojom.TranslationManager_TranslationAvailable_Params', [
      mojo.internal.StructField('source_lang', 0, 0, blink.mojom.TranslatorLanguageCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_lang', 8, 0, blink.mojom.TranslatorLanguageCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.TranslationManager_TranslationAvailable_ResponseParamsSpec, 'blink.mojom.TranslationManager_TranslationAvailable_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.CanCreateTranslatorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.TranslationManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TranslationManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TranslationManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TranslationManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.TranslationManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TranslationManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createTranslator(client, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.TranslationManager_CreateTranslator_ParamsSpec,
      null,
      [client, options],
      false);
  }

  translationAvailable(source_lang, target_lang) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TranslationManager_TranslationAvailable_ParamsSpec,
      blink.mojom.TranslationManager_TranslationAvailable_ResponseParamsSpec,
      [source_lang, target_lang],
      false);
  }

};

blink.mojom.TranslationManager.getRemote = function() {
  let remote = new blink.mojom.TranslationManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TranslationManager',
    'context');
  return remote.$;
};

blink.mojom.TranslationManagerReceiver = class {
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
          const params = blink.mojom.TranslationManager_CreateTranslator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTranslator(params.client, params.options);
          break;
        }
        case 1: {
          const params = blink.mojom.TranslationManager_TranslationAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.translationAvailable(params.source_lang, params.target_lang);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.TranslationManager_TranslationAvailable_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

blink.mojom.TranslationManagerReceiver = blink.mojom.TranslationManagerReceiver;

blink.mojom.TranslationManagerPtr = blink.mojom.TranslationManagerRemote;
blink.mojom.TranslationManagerRequest = blink.mojom.TranslationManagerPendingReceiver;

