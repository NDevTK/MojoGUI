// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/android_font_lookup/android_font_lookup.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AndroidFontLookup = {};
blink.mojom.AndroidFontLookup.$interfaceName = 'blink.mojom.AndroidFontLookup';
blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec = { $: {} };
blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParamsSpec = { $: {} };
blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec = { $: {} };
blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParamsSpec = { $: {} };
blink.mojom.AndroidFontLookup_FetchAllFontFiles_ParamsSpec = { $: {} };
blink.mojom.AndroidFontLookup_FetchAllFontFiles_ResponseParamsSpec = { $: {} };

// Interface: AndroidFontLookup
mojo.internal.Struct(
    blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec, 'blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParamsSpec, 'blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParams', [
      mojo.internal.StructField('unique_font_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec, 'blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_Params', [
      mojo.internal.StructField('font_unique_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParamsSpec, 'blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParams', [
      mojo.internal.StructField('font_file_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AndroidFontLookup_FetchAllFontFiles_ParamsSpec, 'blink.mojom.AndroidFontLookup_FetchAllFontFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AndroidFontLookup_FetchAllFontFiles_ResponseParamsSpec, 'blink.mojom.AndroidFontLookup_FetchAllFontFiles_ResponseParams', [
      mojo.internal.StructField('font_files', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ReadOnlyFileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AndroidFontLookupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AndroidFontLookupRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AndroidFontLookup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AndroidFontLookupPendingReceiver,
      handle);
    this.$ = new blink.mojom.AndroidFontLookupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AndroidFontLookupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUniqueNameLookupTable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec,
      blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParamsSpec,
      [],
      false);
  }

  matchLocalFontByUniqueName(font_unique_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec,
      blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParamsSpec,
      [font_unique_name],
      false);
  }

  fetchAllFontFiles() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AndroidFontLookup_FetchAllFontFiles_ParamsSpec,
      blink.mojom.AndroidFontLookup_FetchAllFontFiles_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.AndroidFontLookup.getRemote = function() {
  let remote = new blink.mojom.AndroidFontLookupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AndroidFontLookup',
    'context');
  return remote.$;
};

blink.mojom.AndroidFontLookupPtr = blink.mojom.AndroidFontLookupRemote;
blink.mojom.AndroidFontLookupRequest = blink.mojom.AndroidFontLookupPendingReceiver;

