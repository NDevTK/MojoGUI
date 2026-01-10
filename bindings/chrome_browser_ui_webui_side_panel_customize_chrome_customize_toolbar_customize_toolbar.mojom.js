// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom
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
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};
var url = url || {};

side_panel.customize_chrome.mojom.ActionIdSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.CategoryIdSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.ActionSpec = { $: {} };
side_panel.customize_chrome.mojom.CategorySpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory = {};
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory.$interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory';
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler = {};
side_panel.customize_chrome.mojom.CustomizeToolbarHandler.$interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler';
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarClient = {};
side_panel.customize_chrome.mojom.CustomizeToolbarClient.$interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarClient';
side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec = { $: {} };

// Enum: ActionId
side_panel.customize_chrome.mojom.ActionId = {
  kShowBookmarks: 0,
  kShowHistoryCluster: 1,
  kShowReadAnything: 2,
  kShowReadingList: 3,
  kShowLensOverlay: 4,
  kShowSearchCompanion: 5,
  kHome: 6,
  kForward: 7,
  kNewIncognitoWindow: 8,
  kShowPasswordManager: 9,
  kShowPaymentMethods: 10,
  kShowAddresses: 11,
  kShowDownloads: 12,
  kClearBrowsingData: 13,
  kPrint: 14,
  kShowTranslate: 15,
  kSendTabToSelf: 16,
  kQrCodeGenerator: 17,
  kRouteMedia: 18,
  kTaskManager: 19,
  kDevTools: 20,
  kShowChromeLabs: 21,
  kCopyLink: 22,
  kTabSearch: 23,
  kSplitTab: 24,
  kContextualTasks: 25,
};

// Enum: CategoryId
side_panel.customize_chrome.mojom.CategoryId = {
  kNavigation: 0,
  kYourChrome: 1,
  kTools: 2,
};

// Struct: Action
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.ActionSpec, 'side_panel.customize_chrome.mojom.Action', [
      mojo.internal.StructField('id', 0, 0, side_panel.customize_chrome.mojom.ActionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('category', 16, 0, side_panel.customize_chrome.mojom.CategoryIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_enterprise_controlled_pinned_state', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Category
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CategorySpec, 'side_panel.customize_chrome.mojom.Category', [
      mojo.internal.StructField('id', 0, 0, side_panel.customize_chrome.mojom.CategoryIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CustomizeToolbarHandlerFactory
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(side_panel.customize_chrome.mojom.CustomizeToolbarClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.customize_chrome.mojom.CustomizeToolbarHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeToolbarHandlerFactory', [
      { explicit: null },
    ]);
  }

  createCustomizeToolbarHandler(client, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec,
      null,
      [client, handler],
      false);
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory',
    'context');
  return remote.$;
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeToolbarHandlerFactory', [
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
        
        // Try Method 0: CreateCustomizeToolbarHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCustomizeToolbarHandler (0)');
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
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCustomizeToolbarHandler');
          const result = this.impl.createCustomizeToolbarHandler(params.client, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryReceiver = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryReceiver;

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPtr = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRequest = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPendingReceiver;


// Interface: CustomizeToolbarHandler
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParams', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.ActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParams', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.CategorySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_Params', [
      mojo.internal.StructField('action_id', 0, 0, side_panel.customize_chrome.mojom.ActionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParams', [
      mojo.internal.StructField('customized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_Params', [
    ],
    [[0, 8]]);

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeToolbarHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  listActions() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec,
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec,
      [],
      false);
  }

  listCategories() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec,
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec,
      [],
      false);
  }

  pinAction(action_id, pinned) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec,
      null,
      [action_id, pinned],
      false);
  }

  getIsCustomized() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec,
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec,
      [],
      false);
  }

  resetToDefault() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec,
      null,
      [],
      false);
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarHandler.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.CustomizeToolbarHandler',
    'context');
  return remote.$;
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeToolbarHandler', [
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
        
        // Try Method 0: ListActions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListActions (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ListCategories
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListCategories (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PinAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PinAction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetIsCustomized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsCustomized (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ResetToDefault
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetToDefault (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listActions');
          const result = this.impl.listActions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listCategories');
          const result = this.impl.listCategories();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pinAction');
          const result = this.impl.pinAction(params.action_id, params.pinned);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsCustomized');
          const result = this.impl.getIsCustomized();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetToDefault');
          const result = this.impl.resetToDefault();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerReceiver = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerReceiver;

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPtr = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRequest = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPendingReceiver;


// Interface: CustomizeToolbarClient
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_Params', [
      mojo.internal.StructField('action_id', 0, 0, side_panel.customize_chrome.mojom.ActionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_Params', [
    ],
    [[0, 8]]);

side_panel.customize_chrome.mojom.CustomizeToolbarClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.CustomizeToolbarClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.CustomizeToolbarClientPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.CustomizeToolbarClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeToolbarClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setActionPinned(action_id, pinned) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec,
      null,
      [action_id, pinned],
      false);
  }

  notifyActionsUpdated() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec,
      null,
      [],
      false);
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarClient.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.CustomizeToolbarClient',
    'context');
  return remote.$;
};

side_panel.customize_chrome.mojom.CustomizeToolbarClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeToolbarClient', [
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
        
        // Try Method 0: SetActionPinned
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActionPinned (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyActionsUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyActionsUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActionPinned');
          const result = this.impl.setActionPinned(params.action_id, params.pinned);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActionsUpdated');
          const result = this.impl.notifyActionsUpdated();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarClientReceiver = side_panel.customize_chrome.mojom.CustomizeToolbarClientReceiver;

side_panel.customize_chrome.mojom.CustomizeToolbarClientPtr = side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarClientRequest = side_panel.customize_chrome.mojom.CustomizeToolbarClientPendingReceiver;

