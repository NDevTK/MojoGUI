// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_unique_name_lookup/font_unique_name_lookup.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  getUniqueNameLookupTableIfAvailable() {
    return this.$.getUniqueNameLookupTableIfAvailable();
  }
  getUniqueNameLookupTable() {
    return this.$.getUniqueNameLookupTable();
  }
};

blink.mojom.FontUniqueNameLookupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FontUniqueNameLookup', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getUniqueNameLookupTableIfAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec,
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec,
      [],
      false);
  }

  getUniqueNameLookupTable() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FontUniqueNameLookup', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

blink.mojom.FontUniqueNameLookupReceiver = blink.mojom.FontUniqueNameLookupReceiver;

blink.mojom.FontUniqueNameLookupPtr = blink.mojom.FontUniqueNameLookupRemote;
blink.mojom.FontUniqueNameLookupRequest = blink.mojom.FontUniqueNameLookupPendingReceiver;

