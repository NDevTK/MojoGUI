// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dwrite_font_proxy/dwrite_font_proxy.mojom
// Module: blink.mojom

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

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
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
        
        // Try Method 0: FindFamily
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindFamily (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetFamilyCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFamilyCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFamilyCount (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetFamilyNames
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFamilyNames_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFamilyNames (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetFontFileHandles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_GetFontFileHandles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFontFileHandles (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MatchUniqueFont
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_MatchUniqueFont_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MatchUniqueFont (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MapCharacters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DWriteFontProxy_MapCharacters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MapCharacters (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.DWriteFontProxy_FindFamily_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.findFamily');
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
          console.log('[GeneratedReceiver] Calling impl.getFamilyCount');
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
          console.log('[GeneratedReceiver] Calling impl.getFamilyNames');
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
          console.log('[GeneratedReceiver] Calling impl.getFontFileHandles');
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
          console.log('[GeneratedReceiver] Calling impl.matchUniqueFont');
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
          console.log('[GeneratedReceiver] Calling impl.mapCharacters');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DWriteFontProxyReceiver = blink.mojom.DWriteFontProxyReceiver;

blink.mojom.DWriteFontProxyPtr = blink.mojom.DWriteFontProxyRemote;
blink.mojom.DWriteFontProxyRequest = blink.mojom.DWriteFontProxyPendingReceiver;

