// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/emoji/emoji_search.mojom
// Module: emoji_search.mojom

'use strict';

// Module namespace
var emoji_search = emoji_search || {};
emoji_search.mojom = emoji_search.mojom || {};

emoji_search.mojom.SearchResultsSpec = { $: {} };
emoji_search.mojom.EmojiSearch = {};
emoji_search.mojom.EmojiSearch.$interfaceName = 'emoji_search.mojom.EmojiSearch';
emoji_search.mojom.EmojiSearch_SearchEmoji_ParamsSpec = { $: {} };
emoji_search.mojom.EmojiSearch_SearchEmoji_ResponseParamsSpec = { $: {} };
emoji_search.mojom.EmojiSearch_LoadEmojiLanguages_ParamsSpec = { $: {} };

// Struct: SearchResults
mojo.internal.Struct(
    emoji_search.mojom.SearchResultsSpec, 'emoji_search.mojom.SearchResults', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: EmojiSearch
mojo.internal.Struct(
    emoji_search.mojom.EmojiSearch_SearchEmoji_ParamsSpec, 'emoji_search.mojom.EmojiSearch_SearchEmoji_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language_codes', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    emoji_search.mojom.EmojiSearch_SearchEmoji_ResponseParamsSpec, 'emoji_search.mojom.EmojiSearch_SearchEmoji_ResponseParams', [
      mojo.internal.StructField('emoji_results', 0, 0, emoji_search.mojom.SearchResultsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('symbol_results', 8, 0, emoji_search.mojom.SearchResultsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('emoticon_results', 16, 0, emoji_search.mojom.SearchResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    emoji_search.mojom.EmojiSearch_LoadEmojiLanguages_ParamsSpec, 'emoji_search.mojom.EmojiSearch_LoadEmojiLanguages_Params', [
      mojo.internal.StructField('language_codes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [query, language_codes],
      false);
  }

  loadEmojiLanguages(language_codes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      emoji_search.mojom.EmojiSearch_LoadEmojiLanguages_ParamsSpec,
      null,
      [language_codes],
      false);
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

emoji_search.mojom.EmojiSearchReceiver = class {
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
          const params = emoji_search.mojom.EmojiSearch_SearchEmoji_ParamsSpec.$.decode(message.payload);
          const result = this.impl.searchEmoji(params.query, params.language_codes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, emoji_search.mojom.EmojiSearch_SearchEmoji_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = emoji_search.mojom.EmojiSearch_LoadEmojiLanguages_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadEmojiLanguages(params.language_codes);
          break;
        }
      }
    });
  }
};

emoji_search.mojom.EmojiSearchReceiver = emoji_search.mojom.EmojiSearchReceiver;

emoji_search.mojom.EmojiSearchPtr = emoji_search.mojom.EmojiSearchRemote;
emoji_search.mojom.EmojiSearchRequest = emoji_search.mojom.EmojiSearchPendingReceiver;

