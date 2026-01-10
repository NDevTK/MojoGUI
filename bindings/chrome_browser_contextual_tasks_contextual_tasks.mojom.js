// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks.mojom
// Module: contextual_tasks.mojom

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
var contextual_tasks = contextual_tasks || {};
contextual_tasks.mojom = contextual_tasks.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

contextual_tasks.mojom.TabSpec = { $: {} };
contextual_tasks.mojom.PageHandler = {};
contextual_tasks.mojom.PageHandler.$interfaceName = 'contextual_tasks.mojom.PageHandler';
contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page = {};
contextual_tasks.mojom.Page.$interfaceName = 'contextual_tasks.mojom.Page';
contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_HideInput_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_RestoreInput_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandlerFactory = {};
contextual_tasks.mojom.PageHandlerFactory.$interfaceName = 'contextual_tasks.mojom.PageHandlerFactory';
contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Struct: Tab
mojo.internal.Struct(
    contextual_tasks.mojom.TabSpec, 'contextual_tasks.mojom.Tab', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec, 'contextual_tasks.mojom.PageHandler_GetThreadUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec, 'contextual_tasks.mojom.PageHandler_GetUrlForTask_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec, 'contextual_tasks.mojom.PageHandler_SetTaskId_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec, 'contextual_tasks.mojom.PageHandler_IsZeroState_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParams', [
      mojo.internal.StructField('is_zero_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec, 'contextual_tasks.mojom.PageHandler_SetThreadTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec, 'contextual_tasks.mojom.PageHandler_CloseSidePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec, 'contextual_tasks.mojom.PageHandler_ShowThreadHistory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec, 'contextual_tasks.mojom.PageHandler_IsShownInTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParams', [
      mojo.internal.StructField('is_in_tab', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OpenMyActivityUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OpenHelpUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec, 'contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OnWebviewMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec, 'contextual_tasks.mojom.PageHandler_GetCommonSearchParams_Params', [
      mojo.internal.StructField('is_dark_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_side_panel', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_Params', [
    ],
    [[0, 8]]);

contextual_tasks.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new contextual_tasks.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getThreadUrl() {
    return this.$.getThreadUrl();
  }
  getUrlForTask(uuid) {
    return this.$.getUrlForTask(uuid);
  }
  setTaskId(uuid) {
    return this.$.setTaskId(uuid);
  }
  isZeroState(url) {
    return this.$.isZeroState(url);
  }
  setThreadTitle(title) {
    return this.$.setThreadTitle(title);
  }
  closeSidePanel() {
    return this.$.closeSidePanel();
  }
  showThreadHistory() {
    return this.$.showThreadHistory();
  }
  isShownInTab() {
    return this.$.isShownInTab();
  }
  openMyActivityUi() {
    return this.$.openMyActivityUi();
  }
  openHelpUi() {
    return this.$.openHelpUi();
  }
  openOnboardingHelpUi() {
    return this.$.openOnboardingHelpUi();
  }
  moveTaskUiToNewTab() {
    return this.$.moveTaskUiToNewTab();
  }
  onTabClickedFromSourcesMenu(tab_id, url) {
    return this.$.onTabClickedFromSourcesMenu(tab_id, url);
  }
  onWebviewMessage(message) {
    return this.$.onWebviewMessage(message);
  }
  getCommonSearchParams(is_dark_mode, is_side_panel) {
    return this.$.getCommonSearchParams(is_dark_mode, is_side_panel);
  }
  onboardingTooltipDismissed() {
    return this.$.onboardingTooltipDismissed();
  }
};

contextual_tasks.mojom.PageHandlerRemoteCallHandler = class {
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
    ]);
  }

  getThreadUrl() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec,
      [],
      false);
  }

  getUrlForTask(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec,
      [uuid],
      false);
  }

  setTaskId(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec,
      null,
      [uuid],
      false);
  }

  isZeroState(url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec,
      [url],
      false);
  }

  setThreadTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  closeSidePanel() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec,
      null,
      [],
      false);
  }

  showThreadHistory() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec,
      null,
      [],
      false);
  }

  isShownInTab() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec,
      [],
      false);
  }

  openMyActivityUi() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpUi() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec,
      null,
      [],
      false);
  }

  openOnboardingHelpUi() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec,
      null,
      [],
      false);
  }

  moveTaskUiToNewTab() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  onTabClickedFromSourcesMenu(tab_id, url) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec,
      null,
      [tab_id, url],
      false);
  }

  onWebviewMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  getCommonSearchParams(is_dark_mode, is_side_panel) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec,
      [is_dark_mode, is_side_panel],
      false);
  }

  onboardingTooltipDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec,
      null,
      [],
      false);
  }

};

contextual_tasks.mojom.PageHandler.getRemote = function() {
  let remote = new contextual_tasks.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks.mojom.PageHandler',
    'context');
  return remote.$;
};

contextual_tasks.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetThreadUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetThreadUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetUrlForTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUrlForTask (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetTaskId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTaskId (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsZeroState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsZeroState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetThreadTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreadTitle (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseSidePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseSidePanel (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ShowThreadHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowThreadHistory (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: IsShownInTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsShownInTab (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OpenMyActivityUi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenMyActivityUi (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OpenHelpUi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHelpUi (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenOnboardingHelpUi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenOnboardingHelpUi (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: MoveTaskUiToNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveTaskUiToNewTab (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnTabClickedFromSourcesMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabClickedFromSourcesMenu (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnWebviewMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebviewMessage (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetCommonSearchParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCommonSearchParams (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnboardingTooltipDismissed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnboardingTooltipDismissed (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getThreadUrl');
          const result = this.impl.getThreadUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUrlForTask');
          const result = this.impl.getUrlForTask(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTaskId');
          const result = this.impl.setTaskId(params.uuid);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isZeroState');
          const result = this.impl.isZeroState(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThreadTitle');
          const result = this.impl.setThreadTitle(params.title);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeSidePanel');
          const result = this.impl.closeSidePanel();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showThreadHistory');
          const result = this.impl.showThreadHistory();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isShownInTab');
          const result = this.impl.isShownInTab();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openMyActivityUi');
          const result = this.impl.openMyActivityUi();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openHelpUi');
          const result = this.impl.openHelpUi();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openOnboardingHelpUi');
          const result = this.impl.openOnboardingHelpUi();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveTaskUiToNewTab');
          const result = this.impl.moveTaskUiToNewTab();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabClickedFromSourcesMenu');
          const result = this.impl.onTabClickedFromSourcesMenu(params.tab_id, params.url);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWebviewMessage');
          const result = this.impl.onWebviewMessage(params.message);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCommonSearchParams');
          const result = this.impl.getCommonSearchParams(params.is_dark_mode, params.is_side_panel);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onboardingTooltipDismissed');
          const result = this.impl.onboardingTooltipDismissed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

contextual_tasks.mojom.PageHandlerReceiver = contextual_tasks.mojom.PageHandlerReceiver;

contextual_tasks.mojom.PageHandlerPtr = contextual_tasks.mojom.PageHandlerRemote;
contextual_tasks.mojom.PageHandlerRequest = contextual_tasks.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec, 'contextual_tasks.mojom.Page_SetThreadTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec, 'contextual_tasks.mojom.Page_SetTaskDetails_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thread_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('turn_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec, 'contextual_tasks.mojom.Page_OnSidePanelStateChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec, 'contextual_tasks.mojom.Page_PostMessageToWebview_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec, 'contextual_tasks.mojom.Page_OnHandshakeComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec, 'contextual_tasks.mojom.Page_SetOAuthToken_Params', [
      mojo.internal.StructField('oauth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec, 'contextual_tasks.mojom.Page_OnContextUpdated_Params', [
      mojo.internal.StructField('context_tabs', 0, 0, mojo.internal.Array(contextual_tasks.mojom.TabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_HideInput_ParamsSpec, 'contextual_tasks.mojom.Page_HideInput_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_RestoreInput_ParamsSpec, 'contextual_tasks.mojom.Page_RestoreInput_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec, 'contextual_tasks.mojom.Page_OnZeroStateChange_Params', [
      mojo.internal.StructField('is_zero_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec, 'contextual_tasks.mojom.Page_OnAiPageStatusChanged_Params', [
      mojo.internal.StructField('is_ai_page', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec, 'contextual_tasks.mojom.Page_OnLensOverlayStateChanged_Params', [
      mojo.internal.StructField('is_showing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec, 'contextual_tasks.mojom.Page_ShowErrorPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec, 'contextual_tasks.mojom.Page_HideErrorPage_Params', [
    ],
    [[0, 8]]);

contextual_tasks.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks.mojom.PagePendingReceiver,
      handle);
    this.$ = new contextual_tasks.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setThreadTitle(title) {
    return this.$.setThreadTitle(title);
  }
  setTaskDetails(uuid, thread_id, turn_id) {
    return this.$.setTaskDetails(uuid, thread_id, turn_id);
  }
  onSidePanelStateChanged() {
    return this.$.onSidePanelStateChanged();
  }
  postMessageToWebview(message) {
    return this.$.postMessageToWebview(message);
  }
  onHandshakeComplete() {
    return this.$.onHandshakeComplete();
  }
  setOAuthToken(oauth_token) {
    return this.$.setOAuthToken(oauth_token);
  }
  onContextUpdated(context_tabs) {
    return this.$.onContextUpdated(context_tabs);
  }
  hideInput() {
    return this.$.hideInput();
  }
  restoreInput() {
    return this.$.restoreInput();
  }
  onZeroStateChange(is_zero_state) {
    return this.$.onZeroStateChange(is_zero_state);
  }
  onAiPageStatusChanged(is_ai_page) {
    return this.$.onAiPageStatusChanged(is_ai_page);
  }
  onLensOverlayStateChanged(is_showing) {
    return this.$.onLensOverlayStateChanged(is_showing);
  }
  showErrorPage() {
    return this.$.showErrorPage();
  }
  hideErrorPage() {
    return this.$.hideErrorPage();
  }
};

contextual_tasks.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
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

  setThreadTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setTaskDetails(uuid, thread_id, turn_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec,
      null,
      [uuid, thread_id, turn_id],
      false);
  }

  onSidePanelStateChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec,
      null,
      [],
      false);
  }

  postMessageToWebview(message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec,
      null,
      [message],
      false);
  }

  onHandshakeComplete() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec,
      null,
      [],
      false);
  }

  setOAuthToken(oauth_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec,
      null,
      [oauth_token],
      false);
  }

  onContextUpdated(context_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec,
      null,
      [context_tabs],
      false);
  }

  hideInput() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      contextual_tasks.mojom.Page_HideInput_ParamsSpec,
      null,
      [],
      false);
  }

  restoreInput() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      contextual_tasks.mojom.Page_RestoreInput_ParamsSpec,
      null,
      [],
      false);
  }

  onZeroStateChange(is_zero_state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec,
      null,
      [is_zero_state],
      false);
  }

  onAiPageStatusChanged(is_ai_page) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec,
      null,
      [is_ai_page],
      false);
  }

  onLensOverlayStateChanged(is_showing) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec,
      null,
      [is_showing],
      false);
  }

  showErrorPage() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec,
      null,
      [],
      false);
  }

  hideErrorPage() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec,
      null,
      [],
      false);
  }

};

contextual_tasks.mojom.Page.getRemote = function() {
  let remote = new contextual_tasks.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks.mojom.Page',
    'context');
  return remote.$;
};

contextual_tasks.mojom.PageReceiver = class {
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
        
        // Try Method 0: SetThreadTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreadTitle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetTaskDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTaskDetails (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSidePanelStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSidePanelStateChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PostMessageToWebview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostMessageToWebview (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnHandshakeComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHandshakeComplete (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetOAuthToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOAuthToken (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnContextUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextUpdated (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: HideInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_HideInput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideInput (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RestoreInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_RestoreInput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreInput (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnZeroStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnZeroStateChange (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnAiPageStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAiPageStatusChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnLensOverlayStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLensOverlayStateChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ShowErrorPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowErrorPage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: HideErrorPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideErrorPage (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThreadTitle');
          const result = this.impl.setThreadTitle(params.title);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTaskDetails');
          const result = this.impl.setTaskDetails(params.uuid, params.thread_id, params.turn_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSidePanelStateChanged');
          const result = this.impl.onSidePanelStateChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.postMessageToWebview');
          const result = this.impl.postMessageToWebview(params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHandshakeComplete');
          const result = this.impl.onHandshakeComplete();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOAuthToken');
          const result = this.impl.setOAuthToken(params.oauth_token);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUpdated');
          const result = this.impl.onContextUpdated(params.context_tabs);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_HideInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hideInput');
          const result = this.impl.hideInput();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_RestoreInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restoreInput');
          const result = this.impl.restoreInput();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onZeroStateChange');
          const result = this.impl.onZeroStateChange(params.is_zero_state);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAiPageStatusChanged');
          const result = this.impl.onAiPageStatusChanged(params.is_ai_page);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLensOverlayStateChanged');
          const result = this.impl.onLensOverlayStateChanged(params.is_showing);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showErrorPage');
          const result = this.impl.showErrorPage();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hideErrorPage');
          const result = this.impl.hideErrorPage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

contextual_tasks.mojom.PageReceiver = contextual_tasks.mojom.PageReceiver;

contextual_tasks.mojom.PagePtr = contextual_tasks.mojom.PageRemote;
contextual_tasks.mojom.PageRequest = contextual_tasks.mojom.PagePendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(contextual_tasks.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('page_handler', 8, 0, mojo.internal.InterfaceRequest(contextual_tasks.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

contextual_tasks.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new contextual_tasks.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, page_handler) {
    return this.$.createPageHandler(page, page_handler);
  }
};

contextual_tasks.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, page_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, page_handler],
      false);
  }

};

contextual_tasks.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new contextual_tasks.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

contextual_tasks.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.page_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

contextual_tasks.mojom.PageHandlerFactoryReceiver = contextual_tasks.mojom.PageHandlerFactoryReceiver;

contextual_tasks.mojom.PageHandlerFactoryPtr = contextual_tasks.mojom.PageHandlerFactoryRemote;
contextual_tasks.mojom.PageHandlerFactoryRequest = contextual_tasks.mojom.PageHandlerFactoryPendingReceiver;

