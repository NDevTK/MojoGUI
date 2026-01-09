// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dwrite_font_proxy/dwrite_font_proxy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DWriteFontProxy
blink.mojom.DWriteFontProxy = {};

blink.mojom.DWriteFontProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DWriteFontProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DWriteFontProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DWriteFontProxyPendingReceiver,
      handle);
    this.$ = new blink.mojom.DWriteFontProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DWriteFontProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  findFamily(family_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec,
      blink.mojom.DWriteFontProxy_FindFamily_ResponseParamsSpec,
      [family_name]);
  }

  getFamilyCount() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParamsSpec,
      []);
  }

  getFamilyNames(family_index) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParamsSpec,
      [family_index]);
  }

  getFontFileHandles(family_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParamsSpec,
      [family_index]);
  }

  matchUniqueFont(font_unique_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec,
      blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParamsSpec,
      [font_unique_name]);
  }

  mapCharacters(text, font_style, locale_name, reading_direction, base_family_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec,
      blink.mojom.DWriteFontProxy_MapCharacters_ResponseParamsSpec,
      [text, font_style, locale_name, reading_direction, base_family_name]);
  }

};

blink.mojom.DWriteFontProxy.getRemote = function() {
  let remote = new blink.mojom.DWriteFontProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DWriteFontProxy',
    'context');
  return remote.$;
};

// ParamsSpec for FindFamily
blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.FindFamily_Params',
      packedSize: 16,
      fields: [
        { name: 'family_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DWriteFontProxy_FindFamily_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.FindFamily_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFamilyCount
blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.GetFamilyCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.GetFamilyCount_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFamilyNames
blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.GetFamilyNames_Params',
      packedSize: 16,
      fields: [
        { name: 'family_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.GetFamilyNames_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out_family_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFontFileHandles
blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.GetFontFileHandles_Params',
      packedSize: 16,
      fields: [
        { name: 'family_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.GetFontFileHandles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file_handles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MatchUniqueFont
blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.MatchUniqueFont_Params',
      packedSize: 16,
      fields: [
        { name: 'font_unique_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.MatchUniqueFont_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'file_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'ttc_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MapCharacters
blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.MapCharacters_Params',
      packedSize: 48,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'font_style', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'locale_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reading_direction', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'base_family_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DWriteFontProxy_MapCharacters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DWriteFontProxy.MapCharacters_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DWriteFontProxyPtr = blink.mojom.DWriteFontProxyRemote;
blink.mojom.DWriteFontProxyRequest = blink.mojom.DWriteFontProxyPendingReceiver;

