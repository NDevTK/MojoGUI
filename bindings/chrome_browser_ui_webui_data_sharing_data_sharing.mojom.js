// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/data_sharing/data_sharing.mojom
 // Module: data_sharing.mojom

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
 

 mojo.internal.bindings.data_sharing = mojo.internal.bindings.data_sharing || {};
mojo.internal.bindings.data_sharing.mojom = mojo.internal.bindings.data_sharing.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.data_sharing.mojom.GroupActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.data_sharing.mojom.GroupActionProgressSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.data_sharing.mojom.ReadGroupsParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.ReadGroupParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.ReadGroupsResultSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.ReadGroupWithTokenParamSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.ReadGroupWithTokenResultSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.SharedTabSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.GroupPreviewSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory = {};
mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory.$interfaceName = 'data_sharing.mojom.PageHandlerFactory';
mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler = {};
mojo.internal.bindings.data_sharing.mojom.PageHandler.$interfaceName = 'data_sharing.mojom.PageHandler';
mojo.internal.bindings.data_sharing.mojom.PageHandler_ShowUI_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_CloseUI_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page = {};
mojo.internal.bindings.data_sharing.mojom.Page.$interfaceName = 'data_sharing.mojom.Page';
mojo.internal.bindings.data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec = { $: {} };

// Enum: GroupAction
mojo.internal.bindings.data_sharing.mojom.GroupAction = {
  kUnknown: 0,
  kJoinGroup: 1,
  kDeleteGroup: 2,
  kLeaveGroup: 3,
  kKeepGroup: 4,
  kStopSharing: 5,
};

// Enum: GroupActionProgress
mojo.internal.bindings.data_sharing.mojom.GroupActionProgress = {
  kUnknown: 0,
  kStarted: 1,
  kFailed: 2,
  kSuccess: 3,
};

// Struct: ReadGroupsParams
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.ReadGroupsParamsSpec, 'data_sharing.mojom.ReadGroupsParams', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.data_sharing.mojom.ReadGroupParamsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ReadGroupParams
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.ReadGroupParamsSpec, 'data_sharing.mojom.ReadGroupParams', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_consistency_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadGroupsResult
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.ReadGroupsResultSpec, 'data_sharing.mojom.ReadGroupsResult', [
      mojo.internal.StructField('arg_groups', 0, 0, mojo.internal.Array(mojo.internal.bindings.data_sharing.mojom.GroupDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadGroupWithTokenParam
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.ReadGroupWithTokenParamSpec, 'data_sharing.mojom.ReadGroupWithTokenParam', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadGroupWithTokenResult
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.ReadGroupWithTokenResultSpec, 'data_sharing.mojom.ReadGroupWithTokenResult', [
      mojo.internal.StructField('arg_group', 0, 0, mojo.internal.bindings.data_sharing.mojom.GroupDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_status_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedTab
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.SharedTabSpec, 'data_sharing.mojom.SharedTab', [
      mojo.internal.StructField('arg_display_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_favicon_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GroupPreview
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.GroupPreviewSpec, 'data_sharing.mojom.GroupPreview', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_shared_tabs', 8, 0, mojo.internal.Array(mojo.internal.bindings.data_sharing.mojom.SharedTabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 16, 0, mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'data_sharing.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.data_sharing.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.data_sharing.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'data_sharing.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.data_sharing.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_ShowUI_ParamsSpec, 'data_sharing.mojom.PageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_CloseUI_ParamsSpec, 'data_sharing.mojom.PageHandler_CloseUI_Params', [
      mojo.internal.StructField('arg_status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec, 'data_sharing.mojom.PageHandler_ApiInitComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec, 'data_sharing.mojom.PageHandler_MakeTabGroupShared_Params', [
      mojo.internal.StructField('arg_tab_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_token', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec, 'data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec, 'data_sharing.mojom.PageHandler_GetShareLink_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec, 'data_sharing.mojom.PageHandler_GetShareLink_ResponseParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec, 'data_sharing.mojom.PageHandler_GetTabGroupPreview_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec, 'data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParams', [
      mojo.internal.StructField('arg_group_preview', 0, 0, mojo.internal.bindings.data_sharing.mojom.GroupPreviewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec, 'data_sharing.mojom.PageHandler_OpenTabGroup_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec, 'data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_Params', [
      mojo.internal.StructField('arg_tab_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec, 'data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_Params', [
      mojo.internal.StructField('arg_tab_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec, 'data_sharing.mojom.PageHandler_OnGroupAction_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.data_sharing.mojom.GroupActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress', 8, 0, mojo.internal.bindings.data_sharing.mojom.GroupActionProgressSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.data_sharing.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'data_sharing.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.data_sharing.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.data_sharing.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI(arg_status_code) {
    return this.$.closeUI(arg_status_code);
  }
  apiInitComplete() {
    return this.$.apiInitComplete();
  }
  makeTabGroupShared(arg_tab_group_id, arg_group_id, arg_access_token) {
    return this.$.makeTabGroupShared(arg_tab_group_id, arg_group_id, arg_access_token);
  }
  getShareLink(arg_group_id, arg_access_token) {
    return this.$.getShareLink(arg_group_id, arg_access_token);
  }
  getTabGroupPreview(arg_group_id, arg_access_token) {
    return this.$.getTabGroupPreview(arg_group_id, arg_access_token);
  }
  openTabGroup(arg_group_id) {
    return this.$.openTabGroup(arg_group_id);
  }
  aboutToUnShareTabGroup(arg_tab_group_id) {
    return this.$.aboutToUnShareTabGroup(arg_tab_group_id);
  }
  onTabGroupUnShareComplete(arg_tab_group_id) {
    return this.$.onTabGroupUnShareComplete(arg_tab_group_id);
  }
  onGroupAction(arg_action, arg_progress) {
    return this.$.onGroupAction(arg_action, arg_progress);
  }
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerRemoteCallHandler = class {
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
    ]);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI(arg_status_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_CloseUI_ParamsSpec,
      null,
      [arg_status_code],
      false);
  }

  apiInitComplete() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec,
      null,
      [],
      false);
  }

  makeTabGroupShared(arg_tab_group_id, arg_group_id, arg_access_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec,
      mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec,
      [arg_tab_group_id, arg_group_id, arg_access_token],
      false);
  }

  getShareLink(arg_group_id, arg_access_token) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec,
      mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec,
      [arg_group_id, arg_access_token],
      false);
  }

  getTabGroupPreview(arg_group_id, arg_access_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec,
      mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec,
      [arg_group_id, arg_access_token],
      false);
  }

  openTabGroup(arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec,
      null,
      [arg_group_id],
      false);
  }

  aboutToUnShareTabGroup(arg_tab_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec,
      null,
      [arg_tab_group_id],
      false);
  }

  onTabGroupUnShareComplete(arg_tab_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec,
      null,
      [arg_tab_group_id],
      false);
  }

  onGroupAction(arg_action, arg_progress) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec,
      null,
      [arg_action, arg_progress],
      false);
  }

};

mojo.internal.bindings.data_sharing.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.data_sharing.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_ShowUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_CloseUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ApiInitComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApiInitComplete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MakeTabGroupShared
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeTabGroupShared (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetShareLink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetShareLink (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetTabGroupPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabGroupPreview (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenTabGroup (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AboutToUnShareTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AboutToUnShareTabGroup (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnTabGroupUnShareComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabGroupUnShareComplete (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnGroupAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGroupAction (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_CloseUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI(params.arg_status_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.apiInitComplete');
          const result = this.impl.apiInitComplete();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeTabGroupShared');
          const result = this.impl.makeTabGroupShared(params.arg_tab_group_id, params.arg_group_id, params.arg_access_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MakeTabGroupShared FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getShareLink');
          const result = this.impl.getShareLink(params.arg_group_id, params.arg_access_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetShareLink FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabGroupPreview');
          const result = this.impl.getTabGroupPreview(params.arg_group_id, params.arg_access_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabGroupPreview FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openTabGroup');
          const result = this.impl.openTabGroup(params.arg_group_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.aboutToUnShareTabGroup');
          const result = this.impl.aboutToUnShareTabGroup(params.arg_tab_group_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabGroupUnShareComplete');
          const result = this.impl.onTabGroupUnShareComplete(params.arg_tab_group_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGroupAction');
          const result = this.impl.onGroupAction(params.arg_action, params.arg_progress);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.data_sharing.mojom.PageHandlerReceiver = mojo.internal.bindings.data_sharing.mojom.PageHandlerReceiver;

mojo.internal.bindings.data_sharing.mojom.PageHandlerPtr = mojo.internal.bindings.data_sharing.mojom.PageHandlerRemote;
mojo.internal.bindings.data_sharing.mojom.PageHandlerRequest = mojo.internal.bindings.data_sharing.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec, 'data_sharing.mojom.Page_OnAccessTokenFetched_Params', [
      mojo.internal.StructField('arg_access_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ParamsSpec, 'data_sharing.mojom.Page_ReadGroups_Params', [
      mojo.internal.StructField('arg_read_groups_params', 0, 0, mojo.internal.bindings.data_sharing.mojom.ReadGroupsParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec, 'data_sharing.mojom.Page_ReadGroups_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.data_sharing.mojom.ReadGroupsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec, 'data_sharing.mojom.Page_ReadGroupWithToken_Params', [
      mojo.internal.StructField('arg_param', 0, 0, mojo.internal.bindings.data_sharing.mojom.ReadGroupWithTokenParamSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec, 'data_sharing.mojom.Page_ReadGroupWithToken_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.data_sharing.mojom.ReadGroupWithTokenResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ParamsSpec, 'data_sharing.mojom.Page_DeleteGroup_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec, 'data_sharing.mojom.Page_DeleteGroup_ResponseParams', [
      mojo.internal.StructField('arg_status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ParamsSpec, 'data_sharing.mojom.Page_LeaveGroup_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec, 'data_sharing.mojom.Page_LeaveGroup_ResponseParams', [
      mojo.internal.StructField('arg_status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.data_sharing.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.data_sharing.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'data_sharing.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.data_sharing.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.data_sharing.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAccessTokenFetched(arg_access_token) {
    return this.$.onAccessTokenFetched(arg_access_token);
  }
  readGroups(arg_read_groups_params) {
    return this.$.readGroups(arg_read_groups_params);
  }
  readGroupWithToken(arg_param) {
    return this.$.readGroupWithToken(arg_param);
  }
  deleteGroup(arg_group_id) {
    return this.$.deleteGroup(arg_group_id);
  }
  leaveGroup(arg_group_id) {
    return this.$.leaveGroup(arg_group_id);
  }
};

mojo.internal.bindings.data_sharing.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAccessTokenFetched(arg_access_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec,
      null,
      [arg_access_token],
      false);
  }

  readGroups(arg_read_groups_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ParamsSpec,
      mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec,
      [arg_read_groups_params],
      false);
  }

  readGroupWithToken(arg_param) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec,
      mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec,
      [arg_param],
      false);
  }

  deleteGroup(arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ParamsSpec,
      mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec,
      [arg_group_id],
      false);
  }

  leaveGroup(arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ParamsSpec,
      mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec,
      [arg_group_id],
      false);
  }

};

mojo.internal.bindings.data_sharing.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.data_sharing.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.data_sharing.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: OnAccessTokenFetched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccessTokenFetched (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReadGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadGroups (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReadGroupWithToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadGroupWithToken (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DeleteGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteGroup (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LeaveGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveGroup (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAccessTokenFetched');
          const result = this.impl.onAccessTokenFetched(params.arg_access_token);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readGroups');
          const result = this.impl.readGroups(params.arg_read_groups_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadGroups FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readGroupWithToken');
          const result = this.impl.readGroupWithToken(params.arg_param);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadGroupWithToken FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteGroup');
          const result = this.impl.deleteGroup(params.arg_group_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteGroup FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.leaveGroup');
          const result = this.impl.leaveGroup(params.arg_group_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LeaveGroup FAILED:', e));
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

mojo.internal.bindings.data_sharing.mojom.PageReceiver = mojo.internal.bindings.data_sharing.mojom.PageReceiver;

mojo.internal.bindings.data_sharing.mojom.PagePtr = mojo.internal.bindings.data_sharing.mojom.PageRemote;
mojo.internal.bindings.data_sharing.mojom.PageRequest = mojo.internal.bindings.data_sharing.mojom.PagePendingReceiver;

