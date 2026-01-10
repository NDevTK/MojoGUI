// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_footer/new_tab_footer.mojom
// Module: new_tab_footer.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var new_tab_footer = new_tab_footer || {};
new_tab_footer.mojom = new_tab_footer.mojom || {};
var url = url || {};
var gfx = gfx || {};

new_tab_footer.mojom.NewTabPageTypeSpec = { $: mojo.internal.Enum() };
new_tab_footer.mojom.ManagementNoticeSpec = { $: {} };
new_tab_footer.mojom.BackgroundAttributionSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandlerFactory = {};
new_tab_footer.mojom.NewTabFooterHandlerFactory.$interfaceName = 'new_tab_footer.mojom.NewTabFooterHandlerFactory';
new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler = {};
new_tab_footer.mojom.NewTabFooterHandler.$interfaceName = 'new_tab_footer.mojom.NewTabFooterHandler';
new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument = {};
new_tab_footer.mojom.NewTabFooterDocument.$interfaceName = 'new_tab_footer.mojom.NewTabFooterDocument';
new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec = { $: {} };

// Enum: NewTabPageType
new_tab_footer.mojom.NewTabPageType = {
  kFirstPartyWebUI: 0,
  kExtension: 1,
  kOther: 2,
};

// Struct: ManagementNotice
mojo.internal.Struct(
    new_tab_footer.mojom.ManagementNoticeSpec, 'new_tab_footer.mojom.ManagementNotice', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('custom_bitmap_data_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundAttribution
mojo.internal.Struct(
    new_tab_footer.mojom.BackgroundAttributionSpec, 'new_tab_footer.mojom.BackgroundAttribution', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NewTabFooterHandlerFactory
mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_Params', [
      mojo.internal.StructField('document', 0, 0, mojo.internal.InterfaceProxy(new_tab_footer.mojom.NewTabFooterDocumentSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(new_tab_footer.mojom.NewTabFooterHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

new_tab_footer.mojom.NewTabFooterHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.NewTabFooterHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.NewTabFooterHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandlerFactory', [
      { explicit: null },
    ]);
  }

  createNewTabFooterHandler(document, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec,
      null,
      [document, handler],
      false);
  }

};

new_tab_footer.mojom.NewTabFooterHandlerFactory.getRemote = function() {
  let remote = new new_tab_footer.mojom.NewTabFooterHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterHandlerFactory',
    'context');
  return remote.$;
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandlerFactory', [
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
        
        // Try Method 0: CreateNewTabFooterHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewTabFooterHandler (0)');
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
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createNewTabFooterHandler');
          const result = this.impl.createNewTabFooterHandler(params.document, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryReceiver = new_tab_footer.mojom.NewTabFooterHandlerFactoryReceiver;

new_tab_footer.mojom.NewTabFooterHandlerFactoryPtr = new_tab_footer.mojom.NewTabFooterHandlerFactoryRemote;
new_tab_footer.mojom.NewTabFooterHandlerFactoryRequest = new_tab_footer.mojom.NewTabFooterHandlerFactoryPendingReceiver;


// Interface: NewTabFooterHandler
mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_Params', [
    ],
    [[0, 8]]);

new_tab_footer.mojom.NewTabFooterHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.NewTabFooterHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.NewTabFooterHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.NewTabFooterHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.NewTabFooterHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandler', [
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

  updateNtpExtensionName() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec,
      null,
      [],
      false);
  }

  updateManagementNotice() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec,
      null,
      [],
      false);
  }

  updateAttachedTabState() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      [],
      false);
  }

  updateBackgroundAttribution() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec,
      null,
      [],
      false);
  }

  openExtensionOptionsPageWithFallback() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec,
      null,
      [],
      false);
  }

  openManagementPage() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInCurrentTab(url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec,
      null,
      [url],
      false);
  }

  showContextMenu(point) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec,
      null,
      [point],
      false);
  }

  notifyCustomizationButtonVisible() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec,
      null,
      [],
      false);
  }

};

new_tab_footer.mojom.NewTabFooterHandler.getRemote = function() {
  let remote = new new_tab_footer.mojom.NewTabFooterHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterHandler',
    'context');
  return remote.$;
};

new_tab_footer.mojom.NewTabFooterHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandler', [
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
        
        // Try Method 0: UpdateNtpExtensionName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNtpExtensionName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateManagementNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateManagementNotice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateAttachedTabState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAttachedTabState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdateBackgroundAttribution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateBackgroundAttribution (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenExtensionOptionsPageWithFallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenExtensionOptionsPageWithFallback (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenManagementPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenManagementPage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenUrlInCurrentTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInCurrentTab (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NotifyCustomizationButtonVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyCustomizationButtonVisible (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateNtpExtensionName');
          const result = this.impl.updateNtpExtensionName();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateManagementNotice');
          const result = this.impl.updateManagementNotice();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAttachedTabState');
          const result = this.impl.updateAttachedTabState();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateBackgroundAttribution');
          const result = this.impl.updateBackgroundAttribution();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openExtensionOptionsPageWithFallback');
          const result = this.impl.openExtensionOptionsPageWithFallback();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openManagementPage');
          const result = this.impl.openManagementPage();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInCurrentTab');
          const result = this.impl.openUrlInCurrentTab(params.url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.point);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyCustomizationButtonVisible');
          const result = this.impl.notifyCustomizationButtonVisible();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_footer.mojom.NewTabFooterHandlerReceiver = new_tab_footer.mojom.NewTabFooterHandlerReceiver;

new_tab_footer.mojom.NewTabFooterHandlerPtr = new_tab_footer.mojom.NewTabFooterHandlerRemote;
new_tab_footer.mojom.NewTabFooterHandlerRequest = new_tab_footer.mojom.NewTabFooterHandlerPendingReceiver;


// Interface: NewTabFooterDocument
mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_Params', [
      mojo.internal.StructField('notice', 0, 0, new_tab_footer.mojom.ManagementNoticeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_Params', [
      mojo.internal.StructField('ntp_type', 0, 0, new_tab_footer.mojom.NewTabPageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('can_customize_chrome', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_Params', [
      mojo.internal.StructField('background_image_attribution', 0, 0, new_tab_footer.mojom.BackgroundAttributionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.NewTabFooterDocumentRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterDocument';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.NewTabFooterDocumentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.NewTabFooterDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NewTabFooterDocument', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNtpExtensionName(name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec,
      null,
      [name],
      false);
  }

  setManagementNotice(notice) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec,
      null,
      [notice],
      false);
  }

  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type, can_customize_chrome],
      false);
  }

  setBackgroundAttribution(background_image_attribution) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec,
      null,
      [background_image_attribution],
      false);
  }

};

new_tab_footer.mojom.NewTabFooterDocument.getRemote = function() {
  let remote = new new_tab_footer.mojom.NewTabFooterDocumentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterDocument',
    'context');
  return remote.$;
};

new_tab_footer.mojom.NewTabFooterDocumentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NewTabFooterDocument', [
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
        
        // Try Method 0: SetNtpExtensionName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNtpExtensionName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetManagementNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetManagementNotice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AttachedTabStateUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachedTabStateUpdated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBackgroundAttribution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundAttribution (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setNtpExtensionName');
          const result = this.impl.setNtpExtensionName(params.name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setManagementNotice');
          const result = this.impl.setManagementNotice(params.notice);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.attachedTabStateUpdated');
          const result = this.impl.attachedTabStateUpdated(params.ntp_type, params.can_customize_chrome);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundAttribution');
          const result = this.impl.setBackgroundAttribution(params.background_image_attribution);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_footer.mojom.NewTabFooterDocumentReceiver = new_tab_footer.mojom.NewTabFooterDocumentReceiver;

new_tab_footer.mojom.NewTabFooterDocumentPtr = new_tab_footer.mojom.NewTabFooterDocumentRemote;
new_tab_footer.mojom.NewTabFooterDocumentRequest = new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver;

