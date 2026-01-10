// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/android_font_lookup/android_font_lookup.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AndroidFontLookup
blink.mojom.mojom.AndroidFontLookup = {};

blink.mojom.mojom.AndroidFontLookupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AndroidFontLookupRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AndroidFontLookup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AndroidFontLookupPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AndroidFontLookupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AndroidFontLookupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUniqueNameLookupTable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec,
      blink.mojom.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParamsSpec,
      []);
  }

  matchLocalFontByUniqueName(font_unique_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec,
      blink.mojom.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParamsSpec,
      [font_unique_name]);
  }

  fetchAllFontFiles() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.AndroidFontLookup_FetchAllFontFiles_ParamsSpec,
      blink.mojom.mojom.AndroidFontLookup_FetchAllFontFiles_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.AndroidFontLookup.getRemote = function() {
  let remote = new blink.mojom.mojom.AndroidFontLookupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AndroidFontLookup',
    'context');
  return remote.$;
};

// ParamsSpec for GetUniqueNameLookupTable
blink.mojom.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AndroidFontLookup.GetUniqueNameLookupTable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AndroidFontLookup.GetUniqueNameLookupTable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'unique_font_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MatchLocalFontByUniqueName
blink.mojom.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AndroidFontLookup.MatchLocalFontByUniqueName_Params',
      packedSize: 16,
      fields: [
        { name: 'font_unique_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AndroidFontLookup.MatchLocalFontByUniqueName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'font_file_handle', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchAllFontFiles
blink.mojom.mojom.AndroidFontLookup_FetchAllFontFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AndroidFontLookup.FetchAllFontFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.AndroidFontLookup_FetchAllFontFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AndroidFontLookup.FetchAllFontFiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'font_files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ReadOnlyFileSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AndroidFontLookupPtr = blink.mojom.mojom.AndroidFontLookupRemote;
blink.mojom.mojom.AndroidFontLookupRequest = blink.mojom.mojom.AndroidFontLookupPendingReceiver;

