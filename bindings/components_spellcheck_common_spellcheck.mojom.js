// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};


// Enum: Decoration
spellcheck.mojom.Decoration = {
  kSpelling: 0,
  kGrammar: 1,
};

// Interface: SpellChecker
spellcheck.mojom.SpellChecker = {};

spellcheck.mojom.SpellCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.SpellCheckerRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.SpellCheckerPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.SpellCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.SpellCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(dictionaries, custom_words, enable) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.SpellChecker_Initialize_ParamsSpec,
      null,
      null,
      [dictionaries, custom_words, enable],
      undefined,
      undefined
    );
  }

  customDictionaryChanged(words_added, words_removed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec,
      null,
      null,
      [words_added, words_removed],
      undefined,
      undefined
    );
  }

};

spellcheck.mojom.SpellChecker.getRemote = function() {
  let remote = new spellcheck.mojom.SpellCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellChecker',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
spellcheck.mojom.SpellChecker_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellChecker.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'dictionaries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'custom_words', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CustomDictionaryChanged
spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellChecker.CustomDictionaryChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'words_added', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'words_removed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.SpellCheckerPtr = spellcheck.mojom.SpellCheckerRemote;
spellcheck.mojom.SpellCheckerRequest = spellcheck.mojom.SpellCheckerPendingReceiver;


// Interface: SpellCheckInitializationHost
spellcheck.mojom.SpellCheckInitializationHost = {};

spellcheck.mojom.SpellCheckInitializationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.SpellCheckInitializationHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckInitializationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.SpellCheckInitializationHostPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.SpellCheckInitializationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.SpellCheckInitializationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDictionary() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

spellcheck.mojom.SpellCheckInitializationHost.getRemote = function() {
  let remote = new spellcheck.mojom.SpellCheckInitializationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckInitializationHost',
    'context');
  return remote.$;
};

// ParamsSpec for RequestDictionary
spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckInitializationHost.RequestDictionary_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.SpellCheckInitializationHostPtr = spellcheck.mojom.SpellCheckInitializationHostRemote;
spellcheck.mojom.SpellCheckInitializationHostRequest = spellcheck.mojom.SpellCheckInitializationHostPendingReceiver;


// Interface: SpellCheckHost
spellcheck.mojom.SpellCheckHost = {};

spellcheck.mojom.SpellCheckHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.SpellCheckHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.SpellCheckHostPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.SpellCheckHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.SpellCheckHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyChecked(word, misspelled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec,
      null,
      null,
      [word, misspelled],
      undefined,
      undefined
    );
  }

  callSpellingService(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec,
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec,
      [text],
      undefined,
      undefined
    );
  }

  requestTextCheck(text, spelling_markers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec,
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec,
      [text, spelling_markers],
      undefined,
      undefined
    );
  }

  disconnectSessionBridge() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  checkSpelling(word) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec,
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec,
      [word],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  fillSuggestionList(word) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec,
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec,
      [word],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  initializeDictionaries() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec,
      spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

};

spellcheck.mojom.SpellCheckHost.getRemote = function() {
  let remote = new spellcheck.mojom.SpellCheckHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckHost',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyChecked
spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.NotifyChecked_Params',
      packedSize: 24,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'misspelled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CallSpellingService
spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CallSpellingService_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CallSpellingService_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestTextCheck
spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.RequestTextCheck_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'spelling_markers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.RequestTextCheck_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisconnectSessionBridge
spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.DisconnectSessionBridge_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CheckSpelling
spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CheckSpelling_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CheckSpelling_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'correct', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FillSuggestionList
spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.FillSuggestionList_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.FillSuggestionList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeDictionaries
spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.InitializeDictionaries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.InitializeDictionaries_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'dictionaries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'custom_words', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.SpellCheckHostPtr = spellcheck.mojom.SpellCheckHostRemote;
spellcheck.mojom.SpellCheckHostRequest = spellcheck.mojom.SpellCheckHostPendingReceiver;

