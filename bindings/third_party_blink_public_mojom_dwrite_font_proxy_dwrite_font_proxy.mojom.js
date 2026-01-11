// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dwrite_font_proxy/dwrite_font_proxy.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('family_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('font_style', 8, 0, blink.mojom.DWriteFontStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('family_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mapped_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('scale', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
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
      mojo.internal.StructField('base_family_name', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('reading_direction', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
  findFamily(family_name) {
    return this.$.findFamily(family_name);
  }
  getFamilyCount() {
    return this.$.getFamilyCount();
  }
  getFamilyNames(family_index) {
    return this.$.getFamilyNames(family_index);
  }
  getFontFileHandles(family_index) {
    return this.$.getFontFileHandles(family_index);
  }
  matchUniqueFont(font_unique_name) {
    return this.$.matchUniqueFont(font_unique_name);
  }
  mapCharacters(text, font_style, locale_name, reading_direction, base_family_name) {
    return this.$.mapCharacters(text, font_style, locale_name, reading_direction, base_family_name);
  }
};

blink.mojom.DWriteFontProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DWriteFontProxy', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  findFamily(family_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec,
      blink.mojom.DWriteFontProxy_FindFamily_ResponseParamsSpec,
      [family_name],
      false);
  }

  getFamilyCount() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParamsSpec,
      [],
      false);
  }

  getFamilyNames(family_index) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParamsSpec,
      [family_index],
      false);
  }

  getFontFileHandles(family_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec,
      blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParamsSpec,
      [family_index],
      false);
  }

  matchUniqueFont(font_unique_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec,
      blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParamsSpec,
      [font_unique_name],
      false);
  }

  mapCharacters(text, font_style, locale_name, reading_direction, base_family_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec,
      blink.mojom.DWriteFontProxy_MapCharacters_ResponseParamsSpec,
      [text, font_style, locale_name, reading_direction, base_family_name],
      false);
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

blink.mojom.DWriteFontProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DWriteFontProxy', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec.$.structSpec);
          const result = this.impl.findFamily(params.family_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DWriteFontProxy_FindFamily_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec.$.structSpec);
          const result = this.impl.getFamilyCount();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DWriteFontProxy_GetFamilyCount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec.$.structSpec);
          const result = this.impl.getFamilyNames(params.family_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DWriteFontProxy_GetFamilyNames_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec.$.structSpec);
          const result = this.impl.getFontFileHandles(params.family_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DWriteFontProxy_GetFontFileHandles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec.$.structSpec);
          const result = this.impl.matchUniqueFont(params.font_unique_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DWriteFontProxy_MatchUniqueFont_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec.$.structSpec);
          const result = this.impl.mapCharacters(params.text, params.font_style, params.locale_name, params.reading_direction, params.base_family_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DWriteFontProxy_MapCharacters_ResponseParamsSpec);
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

blink.mojom.DWriteFontProxyReceiver = blink.mojom.DWriteFontProxyReceiver;

blink.mojom.DWriteFontProxyPtr = blink.mojom.DWriteFontProxyRemote;
blink.mojom.DWriteFontProxyRequest = blink.mojom.DWriteFontProxyPendingReceiver;

