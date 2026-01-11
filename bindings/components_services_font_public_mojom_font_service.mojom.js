// Auto-generated MojoJS binding
 // Source: chromium_src/components/services/font/public/mojom/font_service.mojom
 // Module: font_service.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.font_service = mojo.internal.bindings.font_service || {};
mojo.internal.bindings.font_service.mojom = mojo.internal.bindings.font_service.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.font_service.mojom.TypefaceSlantSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.font_service.mojom.RenderStyleSwitchSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.font_service.mojom.TypefaceStyleSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontIdentitySpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontRenderStyleSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService = {};
mojo.internal.bindings.font_service.mojom.FontServiceSpec = { $ : {} };
mojo.internal.bindings.font_service.mojom.FontService.$interfaceName = 'font_service.mojom.FontService';
mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec = { $: {} };
mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec = { $: {} };

// Enum: TypefaceSlant
mojo.internal.bindings.font_service.mojom.TypefaceSlant = {
  ROMAN: 0,
  ITALIC: 1,
  OBLIQUE: 2,
};

// Enum: RenderStyleSwitch
mojo.internal.bindings.font_service.mojom.RenderStyleSwitch = {
  OFF: 0,
  ON: 1,
  NO_PREFERENCE: 2,
};

// Struct: TypefaceStyle
mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.TypefaceStyleSpec, 'font_service.mojom.TypefaceStyle', [
      mojo.internal.StructField('arg_slant', 0, 0, mojo.internal.bindings.font_service.mojom.TypefaceSlantSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_weight', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FontIdentity
mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontIdentitySpec, 'font_service.mojom.FontIdentity', [
      mojo.internal.StructField('arg_filepath', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ttc_index', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FontRenderStyle
mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontRenderStyleSpec, 'font_service.mojom.FontRenderStyle', [
      mojo.internal.StructField('arg_use_bitmaps', 0, 0, mojo.internal.bindings.font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_autohint', 8, 0, mojo.internal.bindings.font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_hinting', 16, 0, mojo.internal.bindings.font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_antialias', 24, 0, mojo.internal.bindings.font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_subpixel_rendering', 32, 0, mojo.internal.bindings.font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_subpixel_positioning', 40, 0, mojo.internal.bindings.font_service.mojom.RenderStyleSwitchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hint_style', 48, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: FontService
mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ParamsSpec, 'font_service.mojom.FontService_MatchFamilyName_Params', [
      mojo.internal.StructField('arg_family_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_style', 8, 0, mojo.internal.bindings.font_service.mojom.TypefaceStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec, 'font_service.mojom.FontService_MatchFamilyName_ResponseParams', [
      mojo.internal.StructField('arg_identity', 0, 0, mojo.internal.bindings.font_service.mojom.FontIdentitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_family_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_style', 16, 0, mojo.internal.bindings.font_service.mojom.TypefaceStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ParamsSpec, 'font_service.mojom.FontService_OpenStream_Params', [
      mojo.internal.StructField('arg_id_number', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ResponseParamsSpec, 'font_service.mojom.FontService_OpenStream_ResponseParams', [
      mojo.internal.StructField('arg_font_handle', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec, 'font_service.mojom.FontService_FallbackFontForCharacter_Params', [
      mojo.internal.StructField('arg_locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_character', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec, 'font_service.mojom.FontService_FallbackFontForCharacter_ResponseParams', [
      mojo.internal.StructField('arg_identity', 0, 0, mojo.internal.bindings.font_service.mojom.FontIdentitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_family_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_bold', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_italic', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec, 'font_service.mojom.FontService_FontRenderStyleForStrike_Params', [
      mojo.internal.StructField('arg_family', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_scale_factor', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_italic', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_bold', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec, 'font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParams', [
      mojo.internal.StructField('arg_font_render_style', 0, 0, mojo.internal.bindings.font_service.mojom.FontRenderStyleSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec, 'font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_Params', [
      mojo.internal.StructField('arg_postscript_name_or_full_font_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec, 'font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParams', [
      mojo.internal.StructField('arg_identity', 0, 0, mojo.internal.bindings.font_service.mojom.FontIdentitySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ParamsSpec, 'font_service.mojom.FontService_ListFamilies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ResponseParamsSpec, 'font_service.mojom.FontService_ListFamilies_ResponseParams', [
      mojo.internal.StructField('arg_families', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec, 'font_service.mojom.FontService_MatchFontWithFallback_Params', [
      mojo.internal.StructField('arg_family', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_charset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fallback_family_type', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_bold', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_italic', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec, 'font_service.mojom.FontService_MatchFontWithFallback_ResponseParams', [
      mojo.internal.StructField('arg_font_file_handle', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.font_service.mojom.FontServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.font_service.mojom.FontServiceRemote = class {
  static get $interfaceName() {
    return 'font_service.mojom.FontService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.font_service.mojom.FontServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.font_service.mojom.FontServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  matchFamilyName(arg_family_name, arg_style) {
    return this.$.matchFamilyName(arg_family_name, arg_style);
  }
  openStream(arg_id_number) {
    return this.$.openStream(arg_id_number);
  }
  fallbackFontForCharacter(arg_character, arg_locale) {
    return this.$.fallbackFontForCharacter(arg_character, arg_locale);
  }
  fontRenderStyleForStrike(arg_family, arg_size, arg_is_italic, arg_is_bold, arg_device_scale_factor) {
    return this.$.fontRenderStyleForStrike(arg_family, arg_size, arg_is_italic, arg_is_bold, arg_device_scale_factor);
  }
  matchFontByPostscriptNameOrFullFontName(arg_postscript_name_or_full_font_name) {
    return this.$.matchFontByPostscriptNameOrFullFontName(arg_postscript_name_or_full_font_name);
  }
  listFamilies() {
    return this.$.listFamilies();
  }
  matchFontWithFallback(arg_family, arg_is_bold, arg_is_italic, arg_charset, arg_fallback_family_type) {
    return this.$.matchFontWithFallback(arg_family, arg_is_bold, arg_is_italic, arg_charset, arg_fallback_family_type);
  }
};

mojo.internal.bindings.font_service.mojom.FontServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('font_service.mojom.FontService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  matchFamilyName(arg_family_name, arg_style) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ParamsSpec,
      mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec,
      [arg_family_name, arg_style],
      false);
  }

  openStream(arg_id_number) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ParamsSpec,
      mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ResponseParamsSpec,
      [arg_id_number],
      false);
  }

  fallbackFontForCharacter(arg_character, arg_locale) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec,
      mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec,
      [arg_character, arg_locale],
      false);
  }

  fontRenderStyleForStrike(arg_family, arg_size, arg_is_italic, arg_is_bold, arg_device_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec,
      mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec,
      [arg_family, arg_size, arg_is_italic, arg_is_bold, arg_device_scale_factor],
      false);
  }

  matchFontByPostscriptNameOrFullFontName(arg_postscript_name_or_full_font_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec,
      mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec,
      [arg_postscript_name_or_full_font_name],
      false);
  }

  listFamilies() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ParamsSpec,
      mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ResponseParamsSpec,
      [],
      false);
  }

  matchFontWithFallback(arg_family, arg_is_bold, arg_is_italic, arg_charset, arg_fallback_family_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec,
      mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec,
      [arg_family, arg_is_bold, arg_is_italic, arg_charset, arg_fallback_family_type],
      false);
  }

};

mojo.internal.bindings.font_service.mojom.FontService.getRemote = function() {
  let remote = new mojo.internal.bindings.font_service.mojom.FontServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'font_service.mojom.FontService',
    'context');
  return remote.$;
};

mojo.internal.bindings.font_service.mojom.FontServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('font_service.mojom.FontService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: MatchFamilyName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.matchFamilyName');
          const result = this.impl.matchFamilyName(params.arg_family_name, params.arg_style);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MatchFamilyName FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openStream');
          const result = this.impl.openStream(params.arg_id_number);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.font_service.mojom.FontService_OpenStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenStream FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fallbackFontForCharacter');
          const result = this.impl.fallbackFontForCharacter(params.arg_character, params.arg_locale);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FallbackFontForCharacter FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fontRenderStyleForStrike');
          const result = this.impl.fontRenderStyleForStrike(params.arg_family, params.arg_size, params.arg_is_italic, params.arg_is_bold, params.arg_device_scale_factor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FontRenderStyleForStrike FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.matchFontByPostscriptNameOrFullFontName');
          const result = this.impl.matchFontByPostscriptNameOrFullFontName(params.arg_postscript_name_or_full_font_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MatchFontByPostscriptNameOrFullFontName FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listFamilies');
          const result = this.impl.listFamilies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.font_service.mojom.FontService_ListFamilies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ListFamilies FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.matchFontWithFallback');
          const result = this.impl.matchFontWithFallback(params.arg_family, params.arg_is_bold, params.arg_is_italic, params.arg_charset, params.arg_fallback_family_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MatchFontWithFallback FAILED:', e));
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

mojo.internal.bindings.font_service.mojom.FontServiceReceiver = mojo.internal.bindings.font_service.mojom.FontServiceReceiver;

mojo.internal.bindings.font_service.mojom.FontServicePtr = mojo.internal.bindings.font_service.mojom.FontServiceRemote;
mojo.internal.bindings.font_service.mojom.FontServiceRequest = mojo.internal.bindings.font_service.mojom.FontServicePendingReceiver;

