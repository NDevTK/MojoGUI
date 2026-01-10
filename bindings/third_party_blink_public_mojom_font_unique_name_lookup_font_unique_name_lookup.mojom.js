// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_unique_name_lookup/font_unique_name_lookup.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FontUniqueNameLookup = {};
blink.mojom.FontUniqueNameLookup.$interfaceName = 'blink.mojom.FontUniqueNameLookup';
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec = { $: {} };
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec = { $: {} };
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec = { $: {} };
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec = { $: {} };

// Interface: FontUniqueNameLookup
mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParams', [
      mojo.internal.StructField('font_lookup_table', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sync_available', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams', [
      mojo.internal.StructField('font_lookup_table', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  getUniqueNameLookupTable() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec,
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.FontUniqueNameLookupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUniqueNameLookupTableIfAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUniqueNameLookupTable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.FontUniqueNameLookupReceiver = blink.mojom.FontUniqueNameLookupReceiver;

blink.mojom.FontUniqueNameLookupPtr = blink.mojom.FontUniqueNameLookupRemote;
blink.mojom.FontUniqueNameLookupRequest = blink.mojom.FontUniqueNameLookupPendingReceiver;

