// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/whats_new/whats_new.mojom
// Module: whats_new.mojom

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
var whats_new = whats_new || {};
whats_new.mojom = whats_new.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

whats_new.mojom.ScrollDepthSpec = { $: mojo.internal.Enum() };
whats_new.mojom.ModulePositionSpec = { $: mojo.internal.Enum() };
whats_new.mojom.PageHandlerFactory = {};
whats_new.mojom.PageHandlerFactory.$interfaceName = 'whats_new.mojom.PageHandlerFactory';
whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler = {};
whats_new.mojom.PageHandler.$interfaceName = 'whats_new.mojom.PageHandler';
whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec = { $: {} };
whats_new.mojom.Page = {};
whats_new.mojom.Page.$interfaceName = 'whats_new.mojom.Page';

// Enum: ScrollDepth
whats_new.mojom.ScrollDepth = {
  k0: 0,
  k25: 25,
  k50: 50,
  k75: 75,
  k100: 100,
};

// Enum: ModulePosition
whats_new.mojom.ModulePosition = {
  kSpotlight1: 1,
  kSpotlight2: 2,
  kSpotlight3: 3,
  kSpotlight4: 4,
  kExploreMore1: 5,
  kExploreMore2: 6,
  kExploreMore3: 7,
  kExploreMore4: 8,
  kExploreMore5: 9,
  kExploreMore6: 10,
  kUndefined: 11,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'whats_new.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(whats_new.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(whats_new.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

whats_new.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new whats_new.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

whats_new.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

whats_new.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new whats_new.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

whats_new.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

whats_new.mojom.PageHandlerFactoryReceiver = whats_new.mojom.PageHandlerFactoryReceiver;

whats_new.mojom.PageHandlerFactoryPtr = whats_new.mojom.PageHandlerFactoryRemote;
whats_new.mojom.PageHandlerFactoryRequest = whats_new.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec, 'whats_new.mojom.PageHandler_GetServerUrl_Params', [
      mojo.internal.StructField('is_staging', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec, 'whats_new.mojom.PageHandler_GetServerUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec, 'whats_new.mojom.PageHandler_RecordTimeToLoadContent_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec, 'whats_new.mojom.PageHandler_RecordVersionPageLoaded_Params', [
      mojo.internal.StructField('is_auto_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec, 'whats_new.mojom.PageHandler_RecordEditionPageLoaded_Params', [
      mojo.internal.StructField('page_uid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_auto_open', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleImpression_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec, 'whats_new.mojom.PageHandler_RecordExploreMoreToggled_Params', [
      mojo.internal.StructField('expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec, 'whats_new.mojom.PageHandler_RecordScrollDepth_Params', [
      mojo.internal.StructField('depth', 0, 0, whats_new.mojom.ScrollDepthSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec, 'whats_new.mojom.PageHandler_RecordTimeOnPage_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleLinkClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleVideoStarted_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleVideoEnded_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModulePlayClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModulePauseClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleRestartClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec, 'whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec, 'whats_new.mojom.PageHandler_RecordQrCodeToggled_Params', [
      mojo.internal.StructField('expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordNavClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec, 'whats_new.mojom.PageHandler_RecordFeatureTileNavigation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec, 'whats_new.mojom.PageHandler_RecordExpandMediaToggled_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expanded', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordCtaClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordNextButtonClick_Params', [
    ],
    [[0, 8]]);

whats_new.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new whats_new.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getServerUrl(is_staging) {
    return this.$.getServerUrl(is_staging);
  }
  recordTimeToLoadContent(time) {
    return this.$.recordTimeToLoadContent(time);
  }
  recordVersionPageLoaded(is_auto_open) {
    return this.$.recordVersionPageLoaded(is_auto_open);
  }
  recordEditionPageLoaded(page_uid, is_auto_open) {
    return this.$.recordEditionPageLoaded(page_uid, is_auto_open);
  }
  recordModuleImpression(module_name, position) {
    return this.$.recordModuleImpression(module_name, position);
  }
  recordExploreMoreToggled(expanded) {
    return this.$.recordExploreMoreToggled(expanded);
  }
  recordScrollDepth(depth) {
    return this.$.recordScrollDepth(depth);
  }
  recordTimeOnPage(time) {
    return this.$.recordTimeOnPage(time);
  }
  recordModuleLinkClicked(module_name, position) {
    return this.$.recordModuleLinkClicked(module_name, position);
  }
  recordModuleVideoStarted(module_name, position) {
    return this.$.recordModuleVideoStarted(module_name, position);
  }
  recordModuleVideoEnded(module_name, position) {
    return this.$.recordModuleVideoEnded(module_name, position);
  }
  recordModulePlayClicked(module_name, position) {
    return this.$.recordModulePlayClicked(module_name, position);
  }
  recordModulePauseClicked(module_name, position) {
    return this.$.recordModulePauseClicked(module_name, position);
  }
  recordModuleRestartClicked(module_name, position) {
    return this.$.recordModuleRestartClicked(module_name, position);
  }
  recordBrowserCommandExecuted() {
    return this.$.recordBrowserCommandExecuted();
  }
  recordQrCodeToggled(expanded) {
    return this.$.recordQrCodeToggled(expanded);
  }
  recordNavClick() {
    return this.$.recordNavClick();
  }
  recordFeatureTileNavigation() {
    return this.$.recordFeatureTileNavigation();
  }
  recordCarouselScrollButtonClick() {
    return this.$.recordCarouselScrollButtonClick();
  }
  recordExpandMediaToggled(module_name, expanded) {
    return this.$.recordExpandMediaToggled(module_name, expanded);
  }
  recordCtaClick() {
    return this.$.recordCtaClick();
  }
  recordNextButtonClick() {
    return this.$.recordNextButtonClick();
  }
};

whats_new.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  getServerUrl(is_staging) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec,
      whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec,
      [is_staging],
      false);
  }

  recordTimeToLoadContent(time) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec,
      null,
      [time],
      false);
  }

  recordVersionPageLoaded(is_auto_open) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec,
      null,
      [is_auto_open],
      false);
  }

  recordEditionPageLoaded(page_uid, is_auto_open) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec,
      null,
      [page_uid, is_auto_open],
      false);
  }

  recordModuleImpression(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordExploreMoreToggled(expanded) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec,
      null,
      [expanded],
      false);
  }

  recordScrollDepth(depth) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec,
      null,
      [depth],
      false);
  }

  recordTimeOnPage(time) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec,
      null,
      [time],
      false);
  }

  recordModuleLinkClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleVideoStarted(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleVideoEnded(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModulePlayClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModulePauseClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleRestartClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordBrowserCommandExecuted() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec,
      null,
      [],
      false);
  }

  recordQrCodeToggled(expanded) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec,
      null,
      [expanded],
      false);
  }

  recordNavClick() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordFeatureTileNavigation() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec,
      null,
      [],
      false);
  }

  recordCarouselScrollButtonClick() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordExpandMediaToggled(module_name, expanded) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec,
      null,
      [module_name, expanded],
      false);
  }

  recordCtaClick() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordNextButtonClick() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec,
      null,
      [],
      false);
  }

};

whats_new.mojom.PageHandler.getRemote = function() {
  let remote = new whats_new.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.PageHandler',
    'context');
  return remote.$;
};

whats_new.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: GetServerUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetServerUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RecordTimeToLoadContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordTimeToLoadContent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RecordVersionPageLoaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordVersionPageLoaded (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RecordEditionPageLoaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordEditionPageLoaded (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RecordModuleImpression
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleImpression (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RecordExploreMoreToggled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordExploreMoreToggled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RecordScrollDepth
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordScrollDepth (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RecordTimeOnPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordTimeOnPage (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RecordModuleLinkClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleLinkClicked (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RecordModuleVideoStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleVideoStarted (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RecordModuleVideoEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleVideoEnded (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RecordModulePlayClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModulePlayClicked (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RecordModulePauseClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModulePauseClicked (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RecordModuleRestartClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleRestartClicked (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RecordBrowserCommandExecuted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordBrowserCommandExecuted (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RecordQrCodeToggled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordQrCodeToggled (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RecordNavClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordNavClick (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RecordFeatureTileNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordFeatureTileNavigation (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RecordCarouselScrollButtonClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCarouselScrollButtonClick (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: RecordExpandMediaToggled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordExpandMediaToggled (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: RecordCtaClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCtaClick (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RecordNextButtonClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordNextButtonClick (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
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
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getServerUrl');
          const result = this.impl.getServerUrl(params.is_staging);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetServerUrl FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordTimeToLoadContent');
          const result = this.impl.recordTimeToLoadContent(params.time);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordVersionPageLoaded');
          const result = this.impl.recordVersionPageLoaded(params.is_auto_open);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordEditionPageLoaded');
          const result = this.impl.recordEditionPageLoaded(params.page_uid, params.is_auto_open);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModuleImpression');
          const result = this.impl.recordModuleImpression(params.module_name, params.position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordExploreMoreToggled');
          const result = this.impl.recordExploreMoreToggled(params.expanded);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordScrollDepth');
          const result = this.impl.recordScrollDepth(params.depth);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordTimeOnPage');
          const result = this.impl.recordTimeOnPage(params.time);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModuleLinkClicked');
          const result = this.impl.recordModuleLinkClicked(params.module_name, params.position);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModuleVideoStarted');
          const result = this.impl.recordModuleVideoStarted(params.module_name, params.position);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModuleVideoEnded');
          const result = this.impl.recordModuleVideoEnded(params.module_name, params.position);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModulePlayClicked');
          const result = this.impl.recordModulePlayClicked(params.module_name, params.position);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModulePauseClicked');
          const result = this.impl.recordModulePauseClicked(params.module_name, params.position);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordModuleRestartClicked');
          const result = this.impl.recordModuleRestartClicked(params.module_name, params.position);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordBrowserCommandExecuted');
          const result = this.impl.recordBrowserCommandExecuted();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordQrCodeToggled');
          const result = this.impl.recordQrCodeToggled(params.expanded);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordNavClick');
          const result = this.impl.recordNavClick();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordFeatureTileNavigation');
          const result = this.impl.recordFeatureTileNavigation();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordCarouselScrollButtonClick');
          const result = this.impl.recordCarouselScrollButtonClick();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordExpandMediaToggled');
          const result = this.impl.recordExpandMediaToggled(params.module_name, params.expanded);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordCtaClick');
          const result = this.impl.recordCtaClick();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordNextButtonClick');
          const result = this.impl.recordNextButtonClick();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

whats_new.mojom.PageHandlerReceiver = whats_new.mojom.PageHandlerReceiver;

whats_new.mojom.PageHandlerPtr = whats_new.mojom.PageHandlerRemote;
whats_new.mojom.PageHandlerRequest = whats_new.mojom.PageHandlerPendingReceiver;


// Interface: Page
whats_new.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.PagePendingReceiver,
      handle);
    this.$ = new whats_new.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

whats_new.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

whats_new.mojom.Page.getRemote = function() {
  let remote = new whats_new.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.Page',
    'context');
  return remote.$;
};

whats_new.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

whats_new.mojom.PageReceiver = whats_new.mojom.PageReceiver;

whats_new.mojom.PagePtr = whats_new.mojom.PageRemote;
whats_new.mojom.PageRequest = whats_new.mojom.PagePendingReceiver;

