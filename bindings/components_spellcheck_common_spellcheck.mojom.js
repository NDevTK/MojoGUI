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

// Struct: SpellCheckBDictLanguage
spellcheck.mojom.SpellCheckBDictLanguageSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckBDictLanguage',
      packedSize: 24,
      fields: [
        { name: 'file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true },
        { name: 'language', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SpellCheckResult
spellcheck.mojom.SpellCheckResultSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckResult',
      packedSize: 40,
      fields: [
        { name: 'decoration', packedOffset: 8, packedBitOffset: 0, type: spellcheck.mojom.DecorationSpec, nullable: false },
        { name: 'location', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'replacements', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'should_hide_suggestion_menu', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
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
      [dictionaries, custom_words, enable]);
  }

  customDictionaryChanged(words_added, words_removed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec,
      null,
      [words_added, words_removed]);
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
        { name: 'dictionaries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'custom_words', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enable', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'words_added', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'words_removed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
      []);
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
      versions: [{version: 0}]
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
      [word, misspelled]);
  }

  callSpellingService(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec,
      [text]);
  }

  requestTextCheck(text, spelling_markers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec,
      [text, spelling_markers]);
  }

  disconnectSessionBridge() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec,
      null,
      []);
  }

  checkSpelling(word) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec,
      [word]);
  }

  fillSuggestionList(word) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec,
      [word]);
  }

  initializeDictionaries() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec,
      []);
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
        { name: 'word', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'misspelled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CallSpellingService_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'spelling_markers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.RequestTextCheck_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'word', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CheckSpelling_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'correct', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'word', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.FillSuggestionList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'suggestions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.InitializeDictionaries_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'dictionaries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'custom_words', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enable', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.SpellCheckHostPtr = spellcheck.mojom.SpellCheckHostRemote;
spellcheck.mojom.SpellCheckHostRequest = spellcheck.mojom.SpellCheckHostPendingReceiver;

