// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_unique_name_lookup/font_unique_name_lookup.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FontUniqueNameLookup
blink.mojom.FontUniqueNameLookup = {};

blink.mojom.FontUniqueNameLookupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FontUniqueNameLookupRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FontUniqueNameLookup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FontUniqueNameLookupPendingReceiver,
      handle);
    this.$ = new blink.mojom.FontUniqueNameLookupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FontUniqueNameLookupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUniqueNameLookupTableIfAvailable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec,
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec,
      []);
  }

  getUniqueNameLookupTable() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec,
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec,
      []);
  }

};

blink.mojom.FontUniqueNameLookup.getRemote = function() {
  let remote = new blink.mojom.FontUniqueNameLookupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FontUniqueNameLookup',
    'context');
  return remote.$;
};

// ParamsSpec for GetUniqueNameLookupTableIfAvailable
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontUniqueNameLookup.GetUniqueNameLookupTableIfAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontUniqueNameLookup.GetUniqueNameLookupTableIfAvailable_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'font_lookup_table', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'sync_available', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUniqueNameLookupTable
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontUniqueNameLookup.GetUniqueNameLookupTable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontUniqueNameLookup.GetUniqueNameLookupTable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'font_lookup_table', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FontUniqueNameLookupPtr = blink.mojom.FontUniqueNameLookupRemote;
blink.mojom.FontUniqueNameLookupRequest = blink.mojom.FontUniqueNameLookupPendingReceiver;

