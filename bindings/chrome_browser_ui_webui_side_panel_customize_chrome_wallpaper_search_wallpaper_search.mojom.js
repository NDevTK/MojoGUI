// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/wallpaper_search/wallpaper_search.mojom
// Module: side_panel.customize_chrome.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var url = url || {};

side_panel.customize_chrome.mojom.DescriptorDNameSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.WallpaperSearchStatusSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.DescriptorDValueSpec = { $: {} };
side_panel.customize_chrome.mojom.KeyLabelSpec = { $: {} };
side_panel.customize_chrome.mojom.GroupSpec = { $: {} };
side_panel.customize_chrome.mojom.DescriptorBSpec = { $: {} };
side_panel.customize_chrome.mojom.DescriptorsSpec = { $: {} };
side_panel.customize_chrome.mojom.InspirationSpec = { $: {} };
side_panel.customize_chrome.mojom.InspirationDescriptorsSpec = { $: {} };
side_panel.customize_chrome.mojom.InspirationGroupSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchResultSpec = { $: {} };
side_panel.customize_chrome.mojom.ResultDescriptorsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory = {};
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory.$interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory';
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler = {};
side_panel.customize_chrome.mojom.WallpaperSearchHandler.$interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchHandler';
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchClient = {};
side_panel.customize_chrome.mojom.WallpaperSearchClient.$interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchClient';
side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec = { $: {} };

// Enum: DescriptorDName
side_panel.customize_chrome.mojom.DescriptorDName = {
  kYellow: 0,
};

// Enum: WallpaperSearchStatus
side_panel.customize_chrome.mojom.WallpaperSearchStatus = {
  kOk: 0,
  kError: 1,
  kRequestThrottled: 2,
  kOffline: 3,
  kSignedOut: 4,
};

// Enum: UserFeedback
side_panel.customize_chrome.mojom.UserFeedback = {
  kUnspecified: 0,
  kThumbsUp: 1,
  kThumbsDown: 2,
};

// Union: DescriptorDValue
mojo.internal.Union(
    side_panel.customize_chrome.mojom.DescriptorDValueSpec, 'side_panel.customize_chrome.mojom.DescriptorDValue', {
      'color': {
        'ordinal': 0,
        'type': skia.mojom.SkColorSpec.$,
        'nullable': false,
      },
      'hue': {
        'ordinal': 1,
        'type': mojo.internal.Float,
        'nullable': false,
      },
      'name': {
        'ordinal': 2,
        'type': side_panel.customize_chrome.mojom.DescriptorDNameSpec.$,
        'nullable': false,
      },
    });

// Struct: KeyLabel
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.KeyLabelSpec, 'side_panel.customize_chrome.mojom.KeyLabel', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Group
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.GroupSpec, 'side_panel.customize_chrome.mojom.Group', [
      mojo.internal.StructField('category', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_as', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.KeyLabelSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DescriptorB
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.DescriptorBSpec, 'side_panel.customize_chrome.mojom.DescriptorB', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Descriptors
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.DescriptorsSpec, 'side_panel.customize_chrome.mojom.Descriptors', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.GroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('descriptor_b', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.DescriptorBSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('descriptor_c', 16, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.KeyLabelSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Inspiration
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.InspirationSpec, 'side_panel.customize_chrome.mojom.Inspiration', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('background_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InspirationDescriptors
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.InspirationDescriptorsSpec, 'side_panel.customize_chrome.mojom.InspirationDescriptors', [
      mojo.internal.StructField('subject', 0, 0, side_panel.customize_chrome.mojom.KeyLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('style', 8, 0, side_panel.customize_chrome.mojom.KeyLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mood', 16, 0, side_panel.customize_chrome.mojom.KeyLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('color', 24, 0, side_panel.customize_chrome.mojom.DescriptorDValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InspirationGroup
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.InspirationGroupSpec, 'side_panel.customize_chrome.mojom.InspirationGroup', [
      mojo.internal.StructField('descriptors', 0, 0, side_panel.customize_chrome.mojom.InspirationDescriptorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inspirations', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.InspirationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WallpaperSearchResult
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchResultSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchResult', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptors', 16, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ResultDescriptors
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.ResultDescriptorsSpec, 'side_panel.customize_chrome.mojom.ResultDescriptors', [
      mojo.internal.StructField('subject', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('style', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mood', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('color', 24, 0, side_panel.customize_chrome.mojom.DescriptorDValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: WallpaperSearchHandlerFactory
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(side_panel.customize_chrome.mojom.WallpaperSearchClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.customize_chrome.mojom.WallpaperSearchHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WallpaperSearchHandlerFactory', [
      { explicit: null },
    ]);
  }

  createWallpaperSearchHandler(client, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec,
      null,
      [client, handler],
      false);
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory',
    'context');
  return remote.$;
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WallpaperSearchHandlerFactory', [
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
        
        // Try Method 0: CreateWallpaperSearchHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWallpaperSearchHandler (0)');
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
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWallpaperSearchHandler');
          const result = this.impl.createWallpaperSearchHandler(params.client, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryReceiver = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryReceiver;

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPtr = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemote;
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRequest = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPendingReceiver;


// Interface: WallpaperSearchHandler
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParams', [
      mojo.internal.StructField('descriptors', 0, 0, side_panel.customize_chrome.mojom.DescriptorsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParams', [
      mojo.internal.StructField('inspirationGroups', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.InspirationGroupSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_Params', [
      mojo.internal.StructField('result_descriptors', 0, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, side_panel.customize_chrome.mojom.WallpaperSearchStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.WallpaperSearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_Params', [
      mojo.internal.StructField('result_ids', 0, 0, mojo.internal.Array(mojo_base.mojom.TokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('descriptors', 8, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_Params', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('descriptors', 16, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('selected_option', 0, 0, side_panel.customize_chrome.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_Params', [
    ],
    [[0, 8]]);

side_panel.customize_chrome.mojom.WallpaperSearchHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.WallpaperSearchHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.WallpaperSearchHandlerPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WallpaperSearchHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDescriptors() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec,
      [],
      false);
  }

  getInspirations() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec,
      [],
      false);
  }

  getWallpaperSearchResults(result_descriptors) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec,
      [result_descriptors],
      false);
  }

  setResultRenderTime(result_ids, time) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec,
      null,
      [result_ids, time],
      false);
  }

  setBackgroundToHistoryImage(result_id, descriptors) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec,
      null,
      [result_id, descriptors],
      false);
  }

  setBackgroundToInspirationImage(id, background_url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec,
      null,
      [id, background_url],
      false);
  }

  setBackgroundToWallpaperSearchResult(result_id, time, descriptors) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec,
      null,
      [result_id, time, descriptors],
      false);
  }

  updateHistory() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec,
      null,
      [],
      false);
  }

  setUserFeedback(selected_option) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec,
      null,
      [selected_option],
      false);
  }

  openHelpArticle() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec,
      null,
      [],
      false);
  }

  launchHatsSurvey() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec,
      null,
      [],
      false);
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchHandler.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.WallpaperSearchHandler',
    'context');
  return remote.$;
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WallpaperSearchHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: GetDescriptors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDescriptors (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetInspirations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInspirations (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetWallpaperSearchResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWallpaperSearchResults (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetResultRenderTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetResultRenderTime (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetBackgroundToHistoryImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundToHistoryImage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetBackgroundToInspirationImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundToInspirationImage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetBackgroundToWallpaperSearchResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundToWallpaperSearchResult (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateHistory (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetUserFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserFeedback (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OpenHelpArticle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHelpArticle (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: LaunchHatsSurvey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchHatsSurvey (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDescriptors');
          const result = this.impl.getDescriptors();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInspirations');
          const result = this.impl.getInspirations();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWallpaperSearchResults');
          const result = this.impl.getWallpaperSearchResults(params.result_descriptors);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setResultRenderTime');
          const result = this.impl.setResultRenderTime(params.result_ids, params.time);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundToHistoryImage');
          const result = this.impl.setBackgroundToHistoryImage(params.result_id, params.descriptors);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundToInspirationImage');
          const result = this.impl.setBackgroundToInspirationImage(params.id, params.background_url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundToWallpaperSearchResult');
          const result = this.impl.setBackgroundToWallpaperSearchResult(params.result_id, params.time, params.descriptors);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateHistory');
          const result = this.impl.updateHistory();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserFeedback');
          const result = this.impl.setUserFeedback(params.selected_option);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openHelpArticle');
          const result = this.impl.openHelpArticle();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchHatsSurvey');
          const result = this.impl.launchHatsSurvey();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerReceiver = side_panel.customize_chrome.mojom.WallpaperSearchHandlerReceiver;

side_panel.customize_chrome.mojom.WallpaperSearchHandlerPtr = side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemote;
side_panel.customize_chrome.mojom.WallpaperSearchHandlerRequest = side_panel.customize_chrome.mojom.WallpaperSearchHandlerPendingReceiver;


// Interface: WallpaperSearchClient
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_Params', [
      mojo.internal.StructField('history', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.WallpaperSearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

side_panel.customize_chrome.mojom.WallpaperSearchClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchClientRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.WallpaperSearchClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.WallpaperSearchClientPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.WallpaperSearchClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WallpaperSearchClient', [
      { explicit: null },
    ]);
  }

  setHistory(history) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec,
      null,
      [history],
      false);
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchClient.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.WallpaperSearchClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.WallpaperSearchClient',
    'context');
  return remote.$;
};

side_panel.customize_chrome.mojom.WallpaperSearchClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WallpaperSearchClient', [
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
        
        // Try Method 0: SetHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHistory (0)');
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
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHistory');
          const result = this.impl.setHistory(params.history);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchClientReceiver = side_panel.customize_chrome.mojom.WallpaperSearchClientReceiver;

side_panel.customize_chrome.mojom.WallpaperSearchClientPtr = side_panel.customize_chrome.mojom.WallpaperSearchClientRemote;
side_panel.customize_chrome.mojom.WallpaperSearchClientRequest = side_panel.customize_chrome.mojom.WallpaperSearchClientPendingReceiver;

