// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Decoration
spellcheck.mojom.mojom.Decoration = {
  kSpelling: 0,
  kGrammar: 1,
};
spellcheck.mojom.mojom.DecorationSpec = { $: mojo.internal.Enum() };

// Struct: SpellCheckBDictLanguage
spellcheck.mojom.mojom.SpellCheckBDictLanguageSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckBDictLanguage',
      packedSize: 24,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SpellCheckResult
spellcheck.mojom.mojom.SpellCheckResultSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckResult',
      packedSize: 32,
      fields: [
        { name: 'decoration', packedOffset: 8, packedBitOffset: 0, type: spellcheck.mojom.DecorationSpec, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'replacements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'should_hide_suggestion_menu', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: SpellChecker
spellcheck.mojom.mojom.SpellChecker = {};

spellcheck.mojom.mojom.SpellCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.mojom.SpellCheckerRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.mojom.SpellCheckerPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.mojom.SpellCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.mojom.SpellCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(dictionaries, custom_words, enable) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.mojom.SpellChecker_Initialize_ParamsSpec,
      null,
      [dictionaries, custom_words, enable]);
  }

  customDictionaryChanged(words_added, words_removed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec,
      null,
      [words_added, words_removed]);
  }

};

spellcheck.mojom.mojom.SpellChecker.getRemote = function() {
  let remote = new spellcheck.mojom.mojom.SpellCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellChecker',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
spellcheck.mojom.mojom.SpellChecker_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellChecker.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'dictionaries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(spellcheck.mojom.SpellCheckBDictLanguageSpec, false), nullable: false, minVersion: 0 },
        { name: 'custom_words', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'enable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CustomDictionaryChanged
spellcheck.mojom.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellChecker.CustomDictionaryChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'words_added', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'words_removed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.mojom.SpellCheckerPtr = spellcheck.mojom.mojom.SpellCheckerRemote;
spellcheck.mojom.mojom.SpellCheckerRequest = spellcheck.mojom.mojom.SpellCheckerPendingReceiver;


// Interface: SpellCheckInitializationHost
spellcheck.mojom.mojom.SpellCheckInitializationHost = {};

spellcheck.mojom.mojom.SpellCheckInitializationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.mojom.SpellCheckInitializationHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckInitializationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.mojom.SpellCheckInitializationHostPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.mojom.SpellCheckInitializationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.mojom.SpellCheckInitializationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDictionary() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec,
      null,
      []);
  }

};

spellcheck.mojom.mojom.SpellCheckInitializationHost.getRemote = function() {
  let remote = new spellcheck.mojom.mojom.SpellCheckInitializationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckInitializationHost',
    'context');
  return remote.$;
};

// ParamsSpec for RequestDictionary
spellcheck.mojom.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec = {
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
spellcheck.mojom.mojom.SpellCheckInitializationHostPtr = spellcheck.mojom.mojom.SpellCheckInitializationHostRemote;
spellcheck.mojom.mojom.SpellCheckInitializationHostRequest = spellcheck.mojom.mojom.SpellCheckInitializationHostPendingReceiver;


// Interface: SpellCheckHost
spellcheck.mojom.mojom.SpellCheckHost = {};

spellcheck.mojom.mojom.SpellCheckHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.mojom.SpellCheckHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.mojom.SpellCheckHostPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.mojom.SpellCheckHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.mojom.SpellCheckHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyChecked(word, misspelled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.mojom.SpellCheckHost_NotifyChecked_ParamsSpec,
      null,
      [word, misspelled]);
  }

  callSpellingService(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.mojom.SpellCheckHost_CallSpellingService_ParamsSpec,
      spellcheck.mojom.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec,
      [text]);
  }

  requestTextCheck(text, spelling_markers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      spellcheck.mojom.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec,
      spellcheck.mojom.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec,
      [text, spelling_markers]);
  }

  disconnectSessionBridge() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      spellcheck.mojom.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec,
      null,
      []);
  }

  checkSpelling(word) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      spellcheck.mojom.mojom.SpellCheckHost_CheckSpelling_ParamsSpec,
      spellcheck.mojom.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec,
      [word]);
  }

  fillSuggestionList(word) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      spellcheck.mojom.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec,
      spellcheck.mojom.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec,
      [word]);
  }

  initializeDictionaries() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      spellcheck.mojom.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec,
      spellcheck.mojom.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec,
      []);
  }

};

spellcheck.mojom.mojom.SpellCheckHost.getRemote = function() {
  let remote = new spellcheck.mojom.mojom.SpellCheckHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckHost',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyChecked
spellcheck.mojom.mojom.SpellCheckHost_NotifyChecked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.NotifyChecked_Params',
      packedSize: 24,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'misspelled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CallSpellingService
spellcheck.mojom.mojom.SpellCheckHost_CallSpellingService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CallSpellingService_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

spellcheck.mojom.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CallSpellingService_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(spellcheck.mojom.SpellCheckResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestTextCheck
spellcheck.mojom.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.RequestTextCheck_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'spelling_markers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RangeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

spellcheck.mojom.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.RequestTextCheck_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(spellcheck.mojom.SpellCheckResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisconnectSessionBridge
spellcheck.mojom.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec = {
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
spellcheck.mojom.mojom.SpellCheckHost_CheckSpelling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CheckSpelling_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

spellcheck.mojom.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.CheckSpelling_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'correct', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FillSuggestionList
spellcheck.mojom.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.FillSuggestionList_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

spellcheck.mojom.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.FillSuggestionList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeDictionaries
spellcheck.mojom.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec = {
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

spellcheck.mojom.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckHost.InitializeDictionaries_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'dictionaries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(spellcheck.mojom.SpellCheckBDictLanguageSpec, false), nullable: false, minVersion: 0 },
        { name: 'custom_words', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'enable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.mojom.SpellCheckHostPtr = spellcheck.mojom.mojom.SpellCheckHostRemote;
spellcheck.mojom.mojom.SpellCheckHostRequest = spellcheck.mojom.mojom.SpellCheckHostPendingReceiver;

