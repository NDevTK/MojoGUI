// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/android_font_lookup/android_font_lookup.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

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
  getUniqueNameLookupTable() {
    return this.$.getUniqueNameLookupTable();
  }
  matchLocalFontByUniqueName(font_unique_name) {
    return this.$.matchLocalFontByUniqueName(font_unique_name);
  }
  fetchAllFontFiles() {
    return this.$.fetchAllFontFiles();
  }
};

blink.mojom.AndroidFontLookupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AndroidFontLookup', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getUniqueNameLookupTable() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec,
      blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParamsSpec,
      [],
      false);
  }

  matchLocalFontByUniqueName(font_unique_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec,
      blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParamsSpec,
      [font_unique_name],
      false);
  }

  fetchAllFontFiles() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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

blink.mojom.AndroidFontLookupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AndroidFontLookup', [
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AndroidFontLookup_FetchAllFontFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ParamsSpec.$.structSpec);
          const result = this.impl.getUniqueNameLookupTable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AndroidFontLookup_GetUniqueNameLookupTable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ParamsSpec.$.structSpec);
          const result = this.impl.matchLocalFontByUniqueName(params.font_unique_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AndroidFontLookup_MatchLocalFontByUniqueName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AndroidFontLookup_FetchAllFontFiles_ParamsSpec.$.structSpec);
          const result = this.impl.fetchAllFontFiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AndroidFontLookup_FetchAllFontFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AndroidFontLookupReceiver = blink.mojom.AndroidFontLookupReceiver;

blink.mojom.AndroidFontLookupPtr = blink.mojom.AndroidFontLookupRemote;
blink.mojom.AndroidFontLookupRequest = blink.mojom.AndroidFontLookupPendingReceiver;

