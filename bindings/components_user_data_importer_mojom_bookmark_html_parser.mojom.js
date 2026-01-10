// Auto-generated MojoJS binding
// Source: chromium_src/components/user_data_importer/mojom/bookmark_html_parser.mojom
// Module: user_data_importer.mojom

'use strict';

// Module namespace
var user_data_importer = user_data_importer || {};
user_data_importer.mojom = user_data_importer.mojom || {};
var url = url || {};

user_data_importer.mojom.ImportedBookmarkEntrySpec = { $: {} };
user_data_importer.mojom.SearchEngineInfoSpec = { $: {} };
user_data_importer.mojom.FaviconUsageDataSpec = { $: {} };
user_data_importer.mojom.ParsedBookmarksSpec = { $: {} };
user_data_importer.mojom.BookmarkHtmlParser = {};
user_data_importer.mojom.BookmarkHtmlParser.$interfaceName = 'user_data_importer.mojom.BookmarkHtmlParser';
user_data_importer.mojom.BookmarkHtmlParser_Parse_ParamsSpec = { $: {} };
user_data_importer.mojom.BookmarkHtmlParser_Parse_ResponseParamsSpec = { $: {} };

// Struct: ImportedBookmarkEntry
mojo.internal.Struct(
    user_data_importer.mojom.ImportedBookmarkEntrySpec, 'user_data_importer.mojom.ImportedBookmarkEntry', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_visit_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_folder', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_toolbar', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SearchEngineInfo
mojo.internal.Struct(
    user_data_importer.mojom.SearchEngineInfoSpec, 'user_data_importer.mojom.SearchEngineInfo', [
      mojo.internal.StructField('display_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('keyword', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FaviconUsageData
mojo.internal.Struct(
    user_data_importer.mojom.FaviconUsageDataSpec, 'user_data_importer.mojom.FaviconUsageData', [
      mojo.internal.StructField('favicon_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('png_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('urls', 16, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ParsedBookmarks
mojo.internal.Struct(
    user_data_importer.mojom.ParsedBookmarksSpec, 'user_data_importer.mojom.ParsedBookmarks', [
      mojo.internal.StructField('bookmarks', 0, 0, mojo.internal.Array(user_data_importer.mojom.ImportedBookmarkEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reading_list', 8, 0, mojo.internal.Array(user_data_importer.mojom.ImportedBookmarkEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('search_engines', 16, 0, mojo.internal.Array(user_data_importer.mojom.SearchEngineInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('favicons', 24, 0, mojo.internal.Array(user_data_importer.mojom.FaviconUsageDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: BookmarkHtmlParser
mojo.internal.Struct(
    user_data_importer.mojom.BookmarkHtmlParser_Parse_ParamsSpec, 'user_data_importer.mojom.BookmarkHtmlParser_Parse_Params', [
      mojo.internal.StructField('raw_html', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    user_data_importer.mojom.BookmarkHtmlParser_Parse_ResponseParamsSpec, 'user_data_importer.mojom.BookmarkHtmlParser_Parse_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, user_data_importer.mojom.ParsedBookmarksSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

user_data_importer.mojom.BookmarkHtmlParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

user_data_importer.mojom.BookmarkHtmlParserRemote = class {
  static get $interfaceName() {
    return 'user_data_importer.mojom.BookmarkHtmlParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      user_data_importer.mojom.BookmarkHtmlParserPendingReceiver,
      handle);
    this.$ = new user_data_importer.mojom.BookmarkHtmlParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

user_data_importer.mojom.BookmarkHtmlParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parse(raw_html) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      user_data_importer.mojom.BookmarkHtmlParser_Parse_ParamsSpec,
      user_data_importer.mojom.BookmarkHtmlParser_Parse_ResponseParamsSpec,
      [raw_html],
      false);
  }

};

user_data_importer.mojom.BookmarkHtmlParser.getRemote = function() {
  let remote = new user_data_importer.mojom.BookmarkHtmlParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'user_data_importer.mojom.BookmarkHtmlParser',
    'context');
  return remote.$;
};

user_data_importer.mojom.BookmarkHtmlParserPtr = user_data_importer.mojom.BookmarkHtmlParserRemote;
user_data_importer.mojom.BookmarkHtmlParserRequest = user_data_importer.mojom.BookmarkHtmlParserPendingReceiver;

