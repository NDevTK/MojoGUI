// Auto-generated MojoJS binding
 // Source: chromium_src/ui/webui/resources/cr_components/theme_color_picker/theme_color_picker.mojom
 // Module: theme_color_picker.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.theme_color_picker = mojo.internal.bindings.theme_color_picker || {};
mojo.internal.bindings.theme_color_picker.mojom = mojo.internal.bindings.theme_color_picker.mojom || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};

mojo.internal.bindings.theme_color_picker.mojom.ThemeSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ChromeColorSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory = {};
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory.$interfaceName = 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory';
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler = {};
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler.$interfaceName = 'theme_color_picker.mojom.ThemeColorPickerHandler';
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec = { $: {} };
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient = {};
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient.$interfaceName = 'theme_color_picker.mojom.ThemeColorPickerClient';
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec = { $: {} };

// Struct: Theme
mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeSpec, 'theme_color_picker.mojom.Theme', [
      mojo.internal.StructField('arg_background_image_main_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_seed_color', 8, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_background_color', 16, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_foreground_color', 24, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_color_picker_icon_color', 32, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_browser_color_variant', 40, 0, mojo.internal.bindings.ui.mojom.BrowserColorVariantSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_seed_color_hue', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_background_image', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_third_party_theme', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_dark_mode', 52, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_colors_managed_by_policy', 52, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_grey_baseline', 52, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_follow_device_theme', 52, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ChromeColor
mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ChromeColorSpec, 'theme_color_picker.mojom.ChromeColor', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_seed', 8, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_background', 16, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_foreground', 24, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_base', 32, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_variant', 40, 0, mojo.internal.bindings.ui.mojom.BrowserColorVariantSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: ThemeColorPickerHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createThemeColorPickerHandler(arg_handler, arg_client) {
    return this.$.createThemeColorPickerHandler(arg_handler, arg_client);
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandlerFactory', [
      { explicit: null },
    ]);
  }

  createThemeColorPickerHandler(arg_handler, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec,
      null,
      [arg_handler, arg_client],
      false);
  }

};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandlerFactory', [
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
        
        // Try Method 0: CreateThemeColorPickerHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateThemeColorPickerHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createThemeColorPickerHandler');
          const result = this.impl.createThemeColorPickerHandler(params.arg_handler, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryReceiver = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryReceiver;

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPtr = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRemote;
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryRequest = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerFactoryPendingReceiver;


// Interface: ThemeColorPickerHandler
mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_Params', [
      mojo.internal.StructField('arg_is_dark_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParams', [
      mojo.internal.StructField('arg_colors', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.theme_color_picker.mojom.ChromeColorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_Params', [
      mojo.internal.StructField('arg_seed_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_variant', 8, 0, mojo.internal.bindings.ui.mojom.BrowserColorVariantSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_Params', [
      mojo.internal.StructField('arg_hue', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getChromeColors(arg_is_dark_mode) {
    return this.$.getChromeColors(arg_is_dark_mode);
  }
  updateTheme() {
    return this.$.updateTheme();
  }
  setDefaultColor() {
    return this.$.setDefaultColor();
  }
  setGreyDefaultColor() {
    return this.$.setGreyDefaultColor();
  }
  setSeedColor(arg_seed_color, arg_variant) {
    return this.$.setSeedColor(arg_seed_color, arg_variant);
  }
  setSeedColorFromHue(arg_hue) {
    return this.$.setSeedColorFromHue(arg_hue);
  }
  removeBackgroundImage() {
    return this.$.removeBackgroundImage();
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getChromeColors(arg_is_dark_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec,
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec,
      [arg_is_dark_mode],
      false);
  }

  updateTheme() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec,
      null,
      [],
      false);
  }

  setDefaultColor() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec,
      null,
      [],
      false);
  }

  setGreyDefaultColor() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec,
      null,
      [],
      false);
  }

  setSeedColor(arg_seed_color, arg_variant) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec,
      null,
      [arg_seed_color, arg_variant],
      false);
  }

  setSeedColorFromHue(arg_hue) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec,
      null,
      [arg_hue],
      false);
  }

  removeBackgroundImage() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerHandler', [
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
        
        // Try Method 0: GetChromeColors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetChromeColors (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTheme (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetDefaultColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDefaultColor (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetGreyDefaultColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGreyDefaultColor (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetSeedColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSeedColor (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetSeedColorFromHue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSeedColorFromHue (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RemoveBackgroundImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBackgroundImage (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getChromeColors');
          const result = this.impl.getChromeColors(params.arg_is_dark_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetChromeColors FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_UpdateTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTheme');
          const result = this.impl.updateTheme();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetDefaultColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDefaultColor');
          const result = this.impl.setDefaultColor();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setGreyDefaultColor');
          const result = this.impl.setGreyDefaultColor();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSeedColor');
          const result = this.impl.setSeedColor(params.arg_seed_color, params.arg_variant);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSeedColorFromHue');
          const result = this.impl.setSeedColorFromHue(params.arg_hue);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeBackgroundImage');
          const result = this.impl.removeBackgroundImage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerReceiver = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerReceiver;

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerPtr = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerRemote;
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerRequest = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerHandlerPendingReceiver;


// Interface: ThemeColorPickerClient
mojo.internal.Struct(
    mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec, 'theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_Params', [
      mojo.internal.StructField('arg_theme', 0, 0, mojo.internal.bindings.mojo.internal.bindings.theme_color_picker.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientRemote = class {
  static get $interfaceName() {
    return 'theme_color_picker.mojom.ThemeColorPickerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTheme(arg_theme) {
    return this.$.setTheme(arg_theme);
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerClient', [
      { explicit: null },
    ]);
  }

  setTheme(arg_theme) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec,
      null,
      [arg_theme],
      false);
  }

};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'theme_color_picker.mojom.ThemeColorPickerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ThemeColorPickerClient', [
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
        
        // Try Method 0: SetTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTheme (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClient_SetTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTheme');
          const result = this.impl.setTheme(params.arg_theme);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientReceiver = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientReceiver;

mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientPtr = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientRemote;
mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientRequest = mojo.internal.bindings.theme_color_picker.mojom.ThemeColorPickerClientPendingReceiver;

