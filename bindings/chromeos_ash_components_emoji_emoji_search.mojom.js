// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/emoji/emoji_search.mojom
// Module: emoji_search.mojom

'use strict';

// Module namespace
var emoji_search = emoji_search || {};
emoji_search.mojom = emoji_search.mojom || {};


// Struct: SearchResults
emoji_search.mojom.SearchResultsSpec = {
  $: {
    structSpec: {
      name: 'emoji_search.mojom.SearchResults',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: EmojiSearch
emoji_search.mojom.EmojiSearch = {};

emoji_search.mojom.EmojiSearchPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

emoji_search.mojom.EmojiSearchRemote = class {
  static get $interfaceName() {
    return 'emoji_search.mojom.EmojiSearch';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      emoji_search.mojom.EmojiSearchPendingReceiver,
      handle);
    this.$ = new emoji_search.mojom.EmojiSearchRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

emoji_search.mojom.EmojiSearchRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  searchEmoji(query, language_codes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      emoji_search.mojom.EmojiSearch_SearchEmoji_ParamsSpec,
      emoji_search.mojom.EmojiSearch_SearchEmoji_ResponseParamsSpec,
      [query, language_codes]);
  }

  loadEmojiLanguages(language_codes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      emoji_search.mojom.EmojiSearch_LoadEmojiLanguages_ParamsSpec,
      null,
      [language_codes]);
  }

};

emoji_search.mojom.EmojiSearch.getRemote = function() {
  let remote = new emoji_search.mojom.EmojiSearchRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'emoji_search.mojom.EmojiSearch',
    'context');
  return remote.$;
};

// ParamsSpec for SearchEmoji
emoji_search.mojom.EmojiSearch_SearchEmoji_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_search.mojom.EmojiSearch.SearchEmoji_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language_codes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

emoji_search.mojom.EmojiSearch_SearchEmoji_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_search.mojom.EmojiSearch.SearchEmoji_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'emoji_results', packedOffset: 0, packedBitOffset: 0, type: emoji_search.mojom.SearchResultsSpec, nullable: false, minVersion: 0 },
        { name: 'symbol_results', packedOffset: 8, packedBitOffset: 0, type: emoji_search.mojom.SearchResultsSpec, nullable: false, minVersion: 0 },
        { name: 'emoticon_results', packedOffset: 16, packedBitOffset: 0, type: emoji_search.mojom.SearchResultsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for LoadEmojiLanguages
emoji_search.mojom.EmojiSearch_LoadEmojiLanguages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'emoji_search.mojom.EmojiSearch.LoadEmojiLanguages_Params',
      packedSize: 16,
      fields: [
        { name: 'language_codes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
emoji_search.mojom.EmojiSearchPtr = emoji_search.mojom.EmojiSearchRemote;
emoji_search.mojom.EmojiSearchRequest = emoji_search.mojom.EmojiSearchPendingReceiver;

