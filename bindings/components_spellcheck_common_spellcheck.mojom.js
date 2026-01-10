// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

spellcheck.mojom.DecorationSpec = { $: mojo.internal.Enum() };
spellcheck.mojom.SpellCheckBDictLanguageSpec = { $: {} };
spellcheck.mojom.SpellCheckResultSpec = { $: {} };
spellcheck.mojom.SpellChecker = {};
spellcheck.mojom.SpellChecker.$interfaceName = 'spellcheck.mojom.SpellChecker';
spellcheck.mojom.SpellChecker_Initialize_ParamsSpec = { $: {} };
spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckInitializationHost = {};
spellcheck.mojom.SpellCheckInitializationHost.$interfaceName = 'spellcheck.mojom.SpellCheckInitializationHost';
spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost = {};
spellcheck.mojom.SpellCheckHost.$interfaceName = 'spellcheck.mojom.SpellCheckHost';
spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec = { $: {} };

// Enum: Decoration
spellcheck.mojom.Decoration = {
  kSpelling: 0,
  kGrammar: 1,
};

// Struct: SpellCheckBDictLanguage
mojo.internal.Struct(
    spellcheck.mojom.SpellCheckBDictLanguageSpec, 'spellcheck.mojom.SpellCheckBDictLanguage', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpellCheckResult
mojo.internal.Struct(
    spellcheck.mojom.SpellCheckResultSpec, 'spellcheck.mojom.SpellCheckResult', [
      mojo.internal.StructField('decoration', 0, 0, spellcheck.mojom.DecorationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('replacements', 8, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('location', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('should_hide_suggestion_menu', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: SpellChecker
mojo.internal.Struct(
    spellcheck.mojom.SpellChecker_Initialize_ParamsSpec, 'spellcheck.mojom.SpellChecker_Initialize_Params', [
      mojo.internal.StructField('dictionaries', 0, 0, mojo.internal.Array(spellcheck.mojom.SpellCheckBDictLanguageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('custom_words', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('enable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec, 'spellcheck.mojom.SpellChecker_CustomDictionaryChanged_Params', [
      mojo.internal.StructField('words_added', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('words_removed', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [dictionaries, custom_words, enable],
      false);
  }

  customDictionaryChanged(words_added, words_removed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec,
      null,
      [words_added, words_removed],
      false);
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

spellcheck.mojom.SpellCheckerReceiver = class {
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
          const params = spellcheck.mojom.SpellChecker_Initialize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initialize(params.dictionaries, params.custom_words, params.enable);
          break;
        }
        case 1: {
          const params = spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.customDictionaryChanged(params.words_added, params.words_removed);
          break;
        }
      }
    });
  }
};

spellcheck.mojom.SpellCheckerReceiver = spellcheck.mojom.SpellCheckerReceiver;

spellcheck.mojom.SpellCheckerPtr = spellcheck.mojom.SpellCheckerRemote;
spellcheck.mojom.SpellCheckerRequest = spellcheck.mojom.SpellCheckerPendingReceiver;


// Interface: SpellCheckInitializationHost
mojo.internal.Struct(
    spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec, 'spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

spellcheck.mojom.SpellCheckInitializationHostReceiver = class {
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
          const params = spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestDictionary();
          break;
        }
      }
    });
  }
};

spellcheck.mojom.SpellCheckInitializationHostReceiver = spellcheck.mojom.SpellCheckInitializationHostReceiver;

spellcheck.mojom.SpellCheckInitializationHostPtr = spellcheck.mojom.SpellCheckInitializationHostRemote;
spellcheck.mojom.SpellCheckInitializationHostRequest = spellcheck.mojom.SpellCheckInitializationHostPendingReceiver;


// Interface: SpellCheckHost
mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_NotifyChecked_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('misspelled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_CallSpellingService_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(spellcheck.mojom.SpellCheckResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_RequestTextCheck_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('spelling_markers', 8, 0, mojo.internal.Array(gfx.mojom.RangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(spellcheck.mojom.SpellCheckResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_CheckSpelling_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParams', [
      mojo.internal.StructField('correct', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_FillSuggestionList_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParams', [
      mojo.internal.StructField('suggestions', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_InitializeDictionaries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParams', [
      mojo.internal.StructField('dictionaries', 0, 0, mojo.internal.Array(spellcheck.mojom.SpellCheckBDictLanguageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('custom_words', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('enable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [word, misspelled],
      false);
  }

  callSpellingService(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec,
      [text],
      false);
  }

  requestTextCheck(text, spelling_markers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec,
      [text, spelling_markers],
      false);
  }

  disconnectSessionBridge() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec,
      null,
      [],
      false);
  }

  checkSpelling(word) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec,
      [word],
      false);
  }

  fillSuggestionList(word) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec,
      [word],
      false);
  }

  initializeDictionaries() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec,
      [],
      false);
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

spellcheck.mojom.SpellCheckHostReceiver = class {
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
          const params = spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyChecked(params.word, params.misspelled);
          break;
        }
        case 1: {
          const params = spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.callSpellingService(params.text);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestTextCheck(params.text, params.spelling_markers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disconnectSessionBridge();
          break;
        }
        case 4: {
          const params = spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec.$.decode(message.payload);
          const result = this.impl.checkSpelling(params.word);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fillSuggestionList(params.word);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initializeDictionaries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

spellcheck.mojom.SpellCheckHostReceiver = spellcheck.mojom.SpellCheckHostReceiver;

spellcheck.mojom.SpellCheckHostPtr = spellcheck.mojom.SpellCheckHostRemote;
spellcheck.mojom.SpellCheckHostRequest = spellcheck.mojom.SpellCheckHostPendingReceiver;

