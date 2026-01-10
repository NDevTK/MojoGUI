// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translation_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};


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
blink.mojom.CanCreateTranslatorResultSpec = { $: mojo.internal.Enum() };

// Enum: CreateTranslatorError
blink.mojom.CreateTranslatorError = {
  kInvalidBinary: 0,
  kInvalidFunctionPointer: 1,
  kFailedToInitialize: 2,
  kFailedToCreateTranslator: 3,
  kServiceCrashed: 4,
  kDisallowedByPolicy: 5,
  kExceedsServiceCountLimitation: 6,
  kExceedsPendingTaskCountLimitation: 7,
  kInvalidVersion: 8,
  kInvalidStoragePartition: 9,
};
blink.mojom.CreateTranslatorErrorSpec = { $: mojo.internal.Enum() };

// Union: CreateTranslatorResult
blink.mojom.CreateTranslatorResultSpec = { $: mojo.internal.Union(
    'blink.mojom.CreateTranslatorResult', {
      'translator': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(blink.mojom.TranslatorRemote),
      }},
      'error': {
        'ordinal': 1,
        'type': blink.mojom.CreateTranslatorErrorSpec,
      }},
    })
};

// Struct: TranslatorLanguageCode
blink.mojom.TranslatorLanguageCodeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslatorLanguageCode',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TranslatorCreateOptions
blink.mojom.TranslatorCreateOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslatorCreateOptions',
      packedSize: 32,
      fields: [
        { name: 'source_lang', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: false, minVersion: 0 },
        { name: 'target_lang', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: false, minVersion: 0 },
        { name: 'observer_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelDownloadProgressObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: TranslationManagerCreateTranslatorClient
blink.mojom.TranslationManagerCreateTranslatorClient = {};

blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_Params',
      packedSize: 40,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CreateTranslatorResultSpec, nullable: false, minVersion: 0 },
        { name: 'source_lang', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: true, minVersion: 0 },
        { name: 'target_lang', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

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
      [result, source_lang, target_lang]);
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

// ParamsSpec for OnResult
blink.mojom.TranslationManagerCreateTranslatorClient_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslationManagerCreateTranslatorClient.OnResult_Params',
      packedSize: 40,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CreateTranslatorResultSpec, nullable: false, minVersion: 0 },
        { name: 'source_lang', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: true, minVersion: 0 },
        { name: 'target_lang', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.TranslationManagerCreateTranslatorClientPtr = blink.mojom.TranslationManagerCreateTranslatorClientRemote;
blink.mojom.TranslationManagerCreateTranslatorClientRequest = blink.mojom.TranslationManagerCreateTranslatorClientPendingReceiver;


// Interface: TranslationManager
blink.mojom.TranslationManager = {};

blink.mojom.TranslationManager_CreateTranslator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslationManager_CreateTranslator_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.TranslationManagerCreateTranslatorClientRemote), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TranslatorCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.TranslationManager_TranslationAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslationManager_TranslationAvailable_Params',
      packedSize: 24,
      fields: [
        { name: 'source_lang', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: false, minVersion: 0 },
        { name: 'target_lang', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [client, options]);
  }

  translationAvailable(source_lang, target_lang) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TranslationManager_TranslationAvailable_ParamsSpec,
      blink.mojom.TranslationManager_TranslationAvailable_ResponseParamsSpec,
      [source_lang, target_lang]);
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

// ParamsSpec for CreateTranslator
blink.mojom.TranslationManager_CreateTranslator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslationManager.CreateTranslator_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.TranslationManagerCreateTranslatorClientRemote), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TranslatorCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for TranslationAvailable
blink.mojom.TranslationManager_TranslationAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslationManager.TranslationAvailable_Params',
      packedSize: 24,
      fields: [
        { name: 'source_lang', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: false, minVersion: 0 },
        { name: 'target_lang', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TranslatorLanguageCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.TranslationManager_TranslationAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TranslationManager.TranslationAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CanCreateTranslatorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.TranslationManagerPtr = blink.mojom.TranslationManagerRemote;
blink.mojom.TranslationManagerRequest = blink.mojom.TranslationManagerPendingReceiver;

