// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck.mojom
// Module: spellcheck.mojom

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
  initialize(dictionaries, custom_words, enable) {
    return this.$.initialize(dictionaries, custom_words, enable);
  }
  customDictionaryChanged(words_added, words_removed) {
    return this.$.customDictionaryChanged(words_added, words_removed);
  }
};

spellcheck.mojom.SpellCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellChecker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(dictionaries, custom_words, enable) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      spellcheck.mojom.SpellChecker_Initialize_ParamsSpec,
      null,
      [dictionaries, custom_words, enable],
      false);
  }

  customDictionaryChanged(words_added, words_removed) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellChecker', [
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
             decoder.decodeStructInline(spellcheck.mojom.SpellChecker_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellChecker_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.dictionaries, params.custom_words, params.enable);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec.$.structSpec);
          const result = this.impl.customDictionaryChanged(params.words_added, params.words_removed);
          break;
        }
      }
      } catch (err) {}
    }});
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
  requestDictionary() {
    return this.$.requestDictionary();
  }
};

spellcheck.mojom.SpellCheckInitializationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellCheckInitializationHost', [
      { explicit: null },
    ]);
  }

  requestDictionary() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellCheckInitializationHost', [
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
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec.$.structSpec);
          const result = this.impl.requestDictionary();
          break;
        }
      }
      } catch (err) {}
    }});
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
  notifyChecked(word, misspelled) {
    return this.$.notifyChecked(word, misspelled);
  }
  callSpellingService(text) {
    return this.$.callSpellingService(text);
  }
  requestTextCheck(text, spelling_markers) {
    return this.$.requestTextCheck(text, spelling_markers);
  }
  disconnectSessionBridge() {
    return this.$.disconnectSessionBridge();
  }
  checkSpelling(word) {
    return this.$.checkSpelling(word);
  }
  fillSuggestionList(word) {
    return this.$.fillSuggestionList(word);
  }
  initializeDictionaries() {
    return this.$.initializeDictionaries();
  }
};

spellcheck.mojom.SpellCheckHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellCheckHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyChecked(word, misspelled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec,
      null,
      [word, misspelled],
      false);
  }

  callSpellingService(text) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec,
      [text],
      false);
  }

  requestTextCheck(text, spelling_markers) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec,
      [text, spelling_markers],
      false);
  }

  disconnectSessionBridge() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec,
      null,
      [],
      false);
  }

  checkSpelling(word) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec,
      [word],
      false);
  }

  fillSuggestionList(word) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec,
      spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec,
      [word],
      false);
  }

  initializeDictionaries() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellCheckHost', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec.$.structSpec);
          const result = this.impl.notifyChecked(params.word, params.misspelled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec.$.structSpec);
          const result = this.impl.callSpellingService(params.text);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec.$.structSpec);
          const result = this.impl.requestTextCheck(params.text, params.spelling_markers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec.$.structSpec);
          const result = this.impl.disconnectSessionBridge();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec.$.structSpec);
          const result = this.impl.checkSpelling(params.word);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec.$.structSpec);
          const result = this.impl.fillSuggestionList(params.word);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec.$.structSpec);
          const result = this.impl.initializeDictionaries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

spellcheck.mojom.SpellCheckHostReceiver = spellcheck.mojom.SpellCheckHostReceiver;

spellcheck.mojom.SpellCheckHostPtr = spellcheck.mojom.SpellCheckHostRemote;
spellcheck.mojom.SpellCheckHostRequest = spellcheck.mojom.SpellCheckHostPendingReceiver;

