// Auto-generated MojoJS binding
// Source: chromium_src/components/services/font/public/mojom/font_service.mojom
// Module: font_service.mojom

'use strict';

// Module namespace
var font_service = font_service || {};
font_service.mojom = font_service.mojom || {};
var mojo_base = mojo_base || {};

font_service.mojom.TypefaceSlantSpec = { $: mojo.internal.Enum() };
font_service.mojom.RenderStyleSwitchSpec = { $: mojo.internal.Enum() };
font_service.mojom.TypefaceStyleSpec = { $: {} };
font_service.mojom.FontIdentitySpec = { $: {} };
font_service.mojom.FontRenderStyleSpec = { $: {} };
font_service.mojom.FontService = {};
font_service.mojom.FontService.$interfaceName = 'font_service.mojom.FontService';
font_service.mojom.FontService_MatchFamilyName_ParamsSpec = { $: {} };
font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec = { $: {} };
font_service.mojom.FontService_OpenStream_ParamsSpec = { $: {} };
font_service.mojom.FontService_OpenStream_ResponseParamsSpec = { $: {} };
font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec = { $: {} };
font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec = { $: {} };
font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec = { $: {} };
font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec = { $: {} };
font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec = { $: {} };
font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec = { $: {} };
font_service.mojom.FontService_ListFamilies_ParamsSpec = { $: {} };
font_service.mojom.FontService_ListFamilies_ResponseParamsSpec = { $: {} };
font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec = { $: {} };
font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec = { $: {} };

// Enum: TypefaceSlant
font_service.mojom.TypefaceSlant = {
  ROMAN: 0,
  ITALIC: 1,
  OBLIQUE: 2,
};

// Enum: RenderStyleSwitch
font_service.mojom.RenderStyleSwitch = {
  OFF: 0,
  ON: 1,
  NO_PREFERENCE: 2,
};

// Struct: TypefaceStyle
mojo.internal.Struct(
    font_service.mojom.TypefaceStyleSpec, 'font_service.mojom.TypefaceStyle', [
      mojo.internal.StructField('slant', 0, 0, font_service.mojom.TypefaceSlantSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('width', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FontIdentity
mojo.internal.Struct(
    font_service.mojom.FontIdentitySpec, 'font_service.mojom.FontIdentity', [
      mojo.internal.StructField('filepath', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ttc_index', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FontRenderStyle
mojo.internal.Struct(
    font_service.mojom.FontRenderStyleSpec, 'font_service.mojom.FontRenderStyle', [
      mojo.internal.StructField('use_bitmaps', 0, 0, font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_autohint', 8, 0, font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_hinting', 16, 0, font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_antialias', 24, 0, font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_subpixel_rendering', 32, 0, font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_subpixel_positioning', 40, 0, font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hint_style', 48, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: FontService
mojo.internal.Struct(
    font_service.mojom.FontService_MatchFamilyName_ParamsSpec, 'font_service.mojom.FontService_MatchFamilyName_Params', [
      mojo.internal.StructField('family_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('style', 8, 0, font_service.mojom.TypefaceStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec, 'font_service.mojom.FontService_MatchFamilyName_ResponseParams', [
      mojo.internal.StructField('identity', 0, 0, font_service.mojom.FontIdentitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('family_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('style', 16, 0, font_service.mojom.TypefaceStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    font_service.mojom.FontService_OpenStream_ParamsSpec, 'font_service.mojom.FontService_OpenStream_Params', [
      mojo.internal.StructField('id_number', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_service.mojom.FontService_OpenStream_ResponseParamsSpec, 'font_service.mojom.FontService_OpenStream_ResponseParams', [
      mojo.internal.StructField('font_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec, 'font_service.mojom.FontService_FallbackFontForCharacter_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('character', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec, 'font_service.mojom.FontService_FallbackFontForCharacter_ResponseParams', [
      mojo.internal.StructField('identity', 0, 0, font_service.mojom.FontIdentitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('family_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_bold', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_italic', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec, 'font_service.mojom.FontService_FontRenderStyleForStrike_Params', [
      mojo.internal.StructField('family', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_italic', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_bold', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec, 'font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParams', [
      mojo.internal.StructField('font_render_style', 0, 0, font_service.mojom.FontRenderStyleSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec, 'font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_Params', [
      mojo.internal.StructField('postscript_name_or_full_font_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec, 'font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParams', [
      mojo.internal.StructField('identity', 0, 0, font_service.mojom.FontIdentitySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_service.mojom.FontService_ListFamilies_ParamsSpec, 'font_service.mojom.FontService_ListFamilies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    font_service.mojom.FontService_ListFamilies_ResponseParamsSpec, 'font_service.mojom.FontService_ListFamilies_ResponseParams', [
      mojo.internal.StructField('families', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec, 'font_service.mojom.FontService_MatchFontWithFallback_Params', [
      mojo.internal.StructField('family', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fallback_family_type', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_bold', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_italic', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec, 'font_service.mojom.FontService_MatchFontWithFallback_ResponseParams', [
      mojo.internal.StructField('font_file_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

font_service.mojom.FontServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

font_service.mojom.FontServiceRemote = class {
  static get $interfaceName() {
    return 'font_service.mojom.FontService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      font_service.mojom.FontServicePendingReceiver,
      handle);
    this.$ = new font_service.mojom.FontServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

font_service.mojom.FontServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  matchFamilyName(family_name, style) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      font_service.mojom.FontService_MatchFamilyName_ParamsSpec,
      font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec,
      [family_name, style],
      false);
  }

  openStream(id_number) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      font_service.mojom.FontService_OpenStream_ParamsSpec,
      font_service.mojom.FontService_OpenStream_ResponseParamsSpec,
      [id_number],
      false);
  }

  fallbackFontForCharacter(character, locale) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec,
      font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec,
      [character, locale],
      false);
  }

  fontRenderStyleForStrike(family, size, is_italic, is_bold, device_scale_factor) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec,
      font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec,
      [family, size, is_italic, is_bold, device_scale_factor],
      false);
  }

  matchFontByPostscriptNameOrFullFontName(postscript_name_or_full_font_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec,
      font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec,
      [postscript_name_or_full_font_name],
      false);
  }

  listFamilies() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      font_service.mojom.FontService_ListFamilies_ParamsSpec,
      font_service.mojom.FontService_ListFamilies_ResponseParamsSpec,
      [],
      false);
  }

  matchFontWithFallback(family, is_bold, is_italic, charset, fallback_family_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec,
      font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec,
      [family, is_bold, is_italic, charset, fallback_family_type],
      false);
  }

};

font_service.mojom.FontService.getRemote = function() {
  let remote = new font_service.mojom.FontServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'font_service.mojom.FontService',
    'context');
  return remote.$;
};

font_service.mojom.FontServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: MatchFamilyName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(font_service.mojom.FontService_MatchFamilyName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MatchFamilyName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OpenStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(font_service.mojom.FontService_OpenStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenStream (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FallbackFontForCharacter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FallbackFontForCharacter (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FontRenderStyleForStrike
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FontRenderStyleForStrike (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MatchFontByPostscriptNameOrFullFontName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MatchFontByPostscriptNameOrFullFontName (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ListFamilies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(font_service.mojom.FontService_ListFamilies_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListFamilies (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: MatchFontWithFallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MatchFontWithFallback (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(font_service.mojom.FontService_MatchFamilyName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.matchFamilyName');
          const result = this.impl.matchFamilyName(params.family_name, params.style);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(font_service.mojom.FontService_OpenStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openStream');
          const result = this.impl.openStream(params.id_number);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_service.mojom.FontService_OpenStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fallbackFontForCharacter');
          const result = this.impl.fallbackFontForCharacter(params.character, params.locale);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fontRenderStyleForStrike');
          const result = this.impl.fontRenderStyleForStrike(params.family, params.size, params.is_italic, params.is_bold, params.device_scale_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.matchFontByPostscriptNameOrFullFontName');
          const result = this.impl.matchFontByPostscriptNameOrFullFontName(params.postscript_name_or_full_font_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(font_service.mojom.FontService_ListFamilies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.listFamilies');
          const result = this.impl.listFamilies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_service.mojom.FontService_ListFamilies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.matchFontWithFallback');
          const result = this.impl.matchFontWithFallback(params.family, params.is_bold, params.is_italic, params.charset, params.fallback_family_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

font_service.mojom.FontServiceReceiver = font_service.mojom.FontServiceReceiver;

font_service.mojom.FontServicePtr = font_service.mojom.FontServiceRemote;
font_service.mojom.FontServiceRequest = font_service.mojom.FontServicePendingReceiver;

