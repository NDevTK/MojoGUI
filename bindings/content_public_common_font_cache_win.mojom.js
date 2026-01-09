// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/font_cache_win.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: FontCacheWin
content.mojom.FontCacheWinPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FontCacheWin';
  }

  preCacheFont(log_font) {
    // Method: PreCacheFont
    // Call: PreCacheFont(log_font)
  }

  releaseCachedFonts() {
    // Method: ReleaseCachedFonts
    // Call: ReleaseCachedFonts()
  }

};

content.mojom.FontCacheWinRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
