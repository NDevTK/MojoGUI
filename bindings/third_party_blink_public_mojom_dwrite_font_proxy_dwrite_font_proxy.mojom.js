// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dwrite_font_proxy/dwrite_font_proxy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DWriteStringPairSpec = { $: {} };
blink.mojom.DWriteFontStyleSpec = { $: {} };
blink.mojom.MapCharactersResultSpec = { $: {} };
blink.mojom.DWriteFontProxy = {};
blink.mojom.DWriteFontProxy.$interfaceName = 'blink.mojom.DWriteFontProxy';
blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_FindFamily_ResponseParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec = { $: {} };
blink.mojom.DWriteFontProxy_MapCharacters_ResponseParamsSpec = { $: {} };

// Struct: DWriteStringPair
mojo.internal.Struct(
    blink.mojom.DWriteStringPairSpec, 'blink.mojom.DWriteStringPair', [
      mojo.internal.StructField('first', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('second', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DWriteFontStyle
mojo.internal.Struct(
    blink.mojom.DWriteFontStyleSpec, 'blink.mojom.DWriteFontStyle', [
      mojo.internal.StructField('font_weight', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('font_slant', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('font_stretch', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MapCharactersResult
mojo.internal.Struct(
    blink.mojom.MapCharactersResultSpec, 'blink.mojom.MapCharactersResult', [
      mojo.internal.StructField('family_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('family_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('mapped_length', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('scale', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('font_style', 24, 0, blink.mojom.DWriteFontStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: DWriteFontProxy
mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec, 'blink.mojom.DWriteFontProxy_FindFamily_Params', [
      mojo.internal.StructField('family_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_FindFamily_ResponseParamsSpec, 'blink.mojom.DWriteFontProxy_FindFamily_ResponseParams', [
      mojo.internal.StructField('out_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec, 'blink.mojom.DWriteFontProxy_GetFamilyCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParamsSpec, 'blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParams', [
      mojo.internal.StructField('out_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec, 'blink.mojom.DWriteFontProxy_GetFamilyNames_Params', [
      mojo.internal.StructField('family_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParamsSpec, 'blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParams', [
      mojo.internal.StructField('out_family_names', 0, 0, mojo.internal.Array(blink.mojom.DWriteStringPairSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec, 'blink.mojom.DWriteFontProxy_GetFontFileHandles_Params', [
      mojo.internal.StructField('family_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParamsSpec, 'blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParams', [
      mojo.internal.StructField('file_handles', 0, 0, mojo.internal.Array(mojo_base.mojom.ReadOnlyFileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec, 'blink.mojom.DWriteFontProxy_MatchUniqueFont_Params', [
      mojo.internal.StructField('font_unique_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParamsSpec, 'blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParams', [
      mojo.internal.StructField('file_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ttc_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec, 'blink.mojom.DWriteFontProxy_MapCharacters_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('font_style', 8, 0, blink.mojom.DWriteFontStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('locale_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('reading_direction', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('base_family_name', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.DWriteFontProxy_MapCharacters_ResponseParamsSpec, 'blink.mojom.DWriteFontProxy_MapCharacters_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, blink.mojom.MapCharactersResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [family_name],
      false);
  }

  getFamilyCount() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParamsSpec,
      [],
      false);
  }

  getFamilyNames(family_index) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParamsSpec,
      [family_index],
      false);
  }

  getFontFileHandles(family_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParamsSpec,
      [family_index],
      false);
  }

  matchUniqueFont(font_unique_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec,
      blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParamsSpec,
      [font_unique_name],
      false);
  }

  mapCharacters(text, font_style, locale_name, reading_direction, base_family_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec,
      blink.mojom.DWriteFontProxy_MapCharacters_ResponseParamsSpec,
      [text, font_style, locale_name, reading_direction, base_family_name],
      false);
  }

};

blink.mojom.DWriteFontProxy.getRemote = function() {
  let remote = new blink.mojom.DWriteFontProxyRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.DWriteFontProxy',
    'context');
  return remote.$;
};

blink.mojom.DWriteFontProxyPtr = blink.mojom.DWriteFontProxyRemote;
blink.mojom.DWriteFontProxyRequest = blink.mojom.DWriteFontProxyPendingReceiver;

