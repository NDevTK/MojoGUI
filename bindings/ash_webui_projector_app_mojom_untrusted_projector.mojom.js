// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/mojom/untrusted_projector.mojom
// Module: ash.projector.mojom

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
var ash = ash || {};
ash.projector = ash.projector || {};
ash.projector.mojom = ash.projector.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

ash.projector.mojom.UntrustedProjectorPageHandler = {};
ash.projector.mojom.UntrustedProjectorPageHandler.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandler';
ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage = {};
ash.projector.mojom.UntrustedProjectorPage.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPage';
ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandlerFactory = {};
ash.projector.mojom.UntrustedProjectorPageHandlerFactory.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec = { $: {} };

// Interface: UntrustedProjectorPageHandler
mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParams', [
      mojo.internal.StructField('precondition', 0, 0, ash.projector.mojom.NewScreencastPreconditionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParams', [
      mojo.internal.StructField('should_download', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParams', [
      mojo.internal.StructField('triggered', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParams', [
      mojo.internal.StructField('pending_screencasts', 0, 0, mojo.internal.Array(ash.projector.mojom.PendingScreencastSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_Params', [
      mojo.internal.StructField('pref', 0, 0, ash.projector.mojom.PrefsThatProjectorCanAskForSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_Params', [
      mojo.internal.StructField('pref', 0, 0, ash.projector.mojom.PrefsThatProjectorCanAskForSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_Params', [
      mojo.internal.StructField('storage_dir_name', 0, 0, mojo_base.mojom.SafeBaseNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 8, 0, ash.projector.mojom.RequestTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_body', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('headers', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('account_email', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('use_credentials', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_api_key', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.projector.mojom.XhrResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParams', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(ash.projector.mojom.AccountSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_Params', [
      mojo.internal.StructField('video_file_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resource_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.projector.mojom.GetVideoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.projector.mojom.UntrustedProjectorPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandler', [
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

  getNewScreencastPrecondition() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec,
      [],
      false);
  }

  shouldDownloadSoda() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec,
      [],
      false);
  }

  installSoda() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec,
      [],
      false);
  }

  getPendingScreencasts() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec,
      [],
      false);
  }

  getUserPref(pref) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec,
      [pref],
      false);
  }

  setUserPref(pref, value) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec,
      [pref, value],
      false);
  }

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  startProjectorSession(storage_dir_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec,
      [storage_dir_name],
      false);
  }

  sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec,
      [url, method, request_body, use_credentials, use_api_key, headers, account_email],
      false);
  }

  getAccounts() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec,
      [],
      false);
  }

  getVideo(video_file_id, resource_key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec,
      [video_file_id, resource_key],
      false);
  }

};

ash.projector.mojom.UntrustedProjectorPageHandler.getRemote = function() {
  let remote = new ash.projector.mojom.UntrustedProjectorPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandler',
    'context');
  return remote.$;
};

ash.projector.mojom.UntrustedProjectorPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandler', [
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
        
        // Try Method 0: GetNewScreencastPrecondition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewScreencastPrecondition (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShouldDownloadSoda
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldDownloadSoda (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InstallSoda
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallSoda (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetPendingScreencasts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPendingScreencasts (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetUserPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserPref (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetUserPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserPref (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: StartProjectorSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartProjectorSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SendXhr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendXhr (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetAccounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAccounts (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetVideo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideo (10)');
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
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewScreencastPrecondition');
          const result = this.impl.getNewScreencastPrecondition();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldDownloadSoda');
          const result = this.impl.shouldDownloadSoda();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installSoda');
          const result = this.impl.installSoda();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPendingScreencasts');
          const result = this.impl.getPendingScreencasts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserPref');
          const result = this.impl.getUserPref(params.pref);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserPref');
          const result = this.impl.setUserPref(params.pref, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startProjectorSession');
          const result = this.impl.startProjectorSession(params.storage_dir_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendXhr');
          const result = this.impl.sendXhr(params.url, params.method, params.request_body, params.use_credentials, params.use_api_key, params.headers, params.account_email);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAccounts');
          const result = this.impl.getAccounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVideo');
          const result = this.impl.getVideo(params.video_file_id, params.resource_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec);
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

ash.projector.mojom.UntrustedProjectorPageHandlerReceiver = ash.projector.mojom.UntrustedProjectorPageHandlerReceiver;

ash.projector.mojom.UntrustedProjectorPageHandlerPtr = ash.projector.mojom.UntrustedProjectorPageHandlerRemote;
ash.projector.mojom.UntrustedProjectorPageHandlerRequest = ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver;


// Interface: UntrustedProjectorPage
mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_Params', [
      mojo.internal.StructField('precondition', 0, 0, ash.projector.mojom.NewScreencastPreconditionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_Params', [
      mojo.internal.StructField('pending_screencasts', 0, 0, mojo.internal.Array(ash.projector.mojom.PendingScreencastSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.projector.mojom.UntrustedProjectorPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.mojom.UntrustedProjectorPageRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.mojom.UntrustedProjectorPagePendingReceiver,
      handle);
    this.$ = new ash.projector.mojom.UntrustedProjectorPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.mojom.UntrustedProjectorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewScreencastPreconditionChanged(precondition) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec,
      null,
      [precondition],
      false);
  }

  onSodaInstallProgressUpdated(progress) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec,
      null,
      [progress],
      false);
  }

  onSodaInstalled() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec,
      null,
      [],
      false);
  }

  onSodaInstallError() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec,
      null,
      [],
      false);
  }

  onScreencastsStateChange(pending_screencasts) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec,
      null,
      [pending_screencasts],
      false);
  }

};

ash.projector.mojom.UntrustedProjectorPage.getRemote = function() {
  let remote = new ash.projector.mojom.UntrustedProjectorPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPage',
    'context');
  return remote.$;
};

ash.projector.mojom.UntrustedProjectorPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPage', [
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
        
        // Try Method 0: OnNewScreencastPreconditionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewScreencastPreconditionChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSodaInstallProgressUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSodaInstallProgressUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSodaInstalled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSodaInstalled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnSodaInstallError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSodaInstallError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnScreencastsStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreencastsStateChange (4)');
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
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewScreencastPreconditionChanged');
          const result = this.impl.onNewScreencastPreconditionChanged(params.precondition);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSodaInstallProgressUpdated');
          const result = this.impl.onSodaInstallProgressUpdated(params.progress);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSodaInstalled');
          const result = this.impl.onSodaInstalled();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSodaInstallError');
          const result = this.impl.onSodaInstallError();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreencastsStateChange');
          const result = this.impl.onScreencastsStateChange(params.pending_screencasts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.projector.mojom.UntrustedProjectorPageReceiver = ash.projector.mojom.UntrustedProjectorPageReceiver;

ash.projector.mojom.UntrustedProjectorPagePtr = ash.projector.mojom.UntrustedProjectorPageRemote;
ash.projector.mojom.UntrustedProjectorPageRequest = ash.projector.mojom.UntrustedProjectorPagePendingReceiver;


// Interface: UntrustedProjectorPageHandlerFactory
mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.projector.mojom.UntrustedProjectorPageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.projector.mojom.UntrustedProjectorPageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  create(handler, page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, page],
      false);
  }

};

ash.projector.mojom.UntrustedProjectorPageHandlerFactory.getRemote = function() {
  let remote = new ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandlerFactory',
    'context');
  return remote.$;
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandlerFactory', [
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
        
        // Try Method 0: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (0)');
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
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.handler, params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver;

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPtr = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote;
ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRequest = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver;

