// Auto-generated MojoJS binding
// Source: chromium_src/components/user_data_importer/mojom/bookmark_html_parser.mojom
// Module: user_data_importer.mojom

'use strict';

// Module namespace
var user_data_importer = user_data_importer || {};
user_data_importer.mojom = user_data_importer.mojom || {};


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
      user_data_importer.mojom.BookmarkHtmlParser_Parse_ResponseParamsSpec,
      [raw_html],
      undefined,
      undefined
    );
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
        { name: 'raw_html', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
user_data_importer.mojom.BookmarkHtmlParserPtr = user_data_importer.mojom.BookmarkHtmlParserRemote;
user_data_importer.mojom.BookmarkHtmlParserRequest = user_data_importer.mojom.BookmarkHtmlParserPendingReceiver;

