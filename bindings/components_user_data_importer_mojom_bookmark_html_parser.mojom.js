// Auto-generated MojoJS binding
// Source: chromium_src/components/user_data_importer/mojom/bookmark_html_parser.mojom
// Module: user_data_importer.mojom

'use strict';

// Module namespace
var user_data_importer = user_data_importer || {};
user_data_importer.mojom = user_data_importer.mojom || {};


// Struct: ImportedBookmarkEntry
user_data_importer.mojom.ImportedBookmarkEntry = class {
  constructor(values = {}) {
    this.in_toolbar = values.in_toolbar !== undefined ? values.in_toolbar : false;
  }
};

// Struct: SearchEngineInfo
user_data_importer.mojom.SearchEngineInfo = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Struct: FaviconUsageData
user_data_importer.mojom.FaviconUsageData = class {
  constructor(values = {}) {
    this.urls = values.urls !== undefined ? values.urls : 0;
  }
};

// Struct: ParsedBookmarks
user_data_importer.mojom.ParsedBookmarks = class {
  constructor(values = {}) {
    this.favicons = values.favicons !== undefined ? values.favicons : [];
  }
};

// Interface: BookmarkHtmlParser
user_data_importer.mojom.BookmarkHtmlParserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'user_data_importer.mojom.BookmarkHtmlParser';
  }

  parse(raw_html) {
    // Method: Parse
    return new Promise((resolve) => {
      // Call: Parse(raw_html)
      resolve({});
    });
  }

};

user_data_importer.mojom.BookmarkHtmlParserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
