// Auto-generated MojoJS binding
// Source: chromium_src/components/user_data_importer/mojom/bookmark_html_parser.mojom
// Module: user_data_importer.mojom

'use strict';

// Module namespace
var user_data_importer = user_data_importer || {};
user_data_importer.mojom = user_data_importer.mojom || {};


// Struct: ImportedBookmarkEntry
user_data_importer.mojom.ImportedBookmarkEntrySpec = {
  $: {
    structSpec: {
      name: 'user_data_importer.mojom.ImportedBookmarkEntry',
      packedSize: 56,
      fields: [
        { name: 'is_folder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'creation_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_visit_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'in_toolbar', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: SearchEngineInfo
user_data_importer.mojom.SearchEngineInfoSpec = {
  $: {
    structSpec: {
      name: 'user_data_importer.mojom.SearchEngineInfo',
      packedSize: 32,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'keyword', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FaviconUsageData
user_data_importer.mojom.FaviconUsageDataSpec = {
  $: {
    structSpec: {
      name: 'user_data_importer.mojom.FaviconUsageData',
      packedSize: 32,
      fields: [
        { name: 'favicon_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'png_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ParsedBookmarks
user_data_importer.mojom.ParsedBookmarksSpec = {
  $: {
    structSpec: {
      name: 'user_data_importer.mojom.ParsedBookmarks',
      packedSize: 40,
      fields: [
        { name: 'bookmarks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(user_data_importer.mojom.ImportedBookmarkEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'reading_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(user_data_importer.mojom.ImportedBookmarkEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'search_engines', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(user_data_importer.mojom.SearchEngineInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'favicons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(user_data_importer.mojom.FaviconUsageDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: BookmarkHtmlParser
user_data_importer.mojom.BookmarkHtmlParser = {};

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
      [raw_html]);
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

// ParamsSpec for Parse
user_data_importer.mojom.BookmarkHtmlParser_Parse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'user_data_importer.mojom.BookmarkHtmlParser.Parse_Params',
      packedSize: 16,
      fields: [
        { name: 'raw_html', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

user_data_importer.mojom.BookmarkHtmlParser_Parse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'user_data_importer.mojom.BookmarkHtmlParser.Parse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: user_data_importer.mojom.ParsedBookmarksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
user_data_importer.mojom.BookmarkHtmlParserPtr = user_data_importer.mojom.BookmarkHtmlParserRemote;
user_data_importer.mojom.BookmarkHtmlParserRequest = user_data_importer.mojom.BookmarkHtmlParserPendingReceiver;

