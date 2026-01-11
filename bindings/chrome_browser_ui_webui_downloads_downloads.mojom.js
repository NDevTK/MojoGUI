// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/downloads/downloads.mojom
// Module: downloads.mojom

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
var downloads = downloads || {};
downloads.mojom = downloads.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

downloads.mojom.DangerTypeSpec = { $: mojo.internal.Enum() };
downloads.mojom.TailoredWarningTypeSpec = { $: mojo.internal.Enum() };
downloads.mojom.StateSpec = { $: mojo.internal.Enum() };
downloads.mojom.SafeBrowsingStateSpec = { $: mojo.internal.Enum() };
downloads.mojom.DataSpec = { $: {} };
downloads.mojom.PageHandlerFactory = {};
downloads.mojom.PageHandlerFactory.$interfaceName = 'downloads.mojom.PageHandlerFactory';
downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
downloads.mojom.PageHandler = {};
downloads.mojom.PageHandler.$interfaceName = 'downloads.mojom.PageHandler';
downloads.mojom.PageHandler_GetDownloads_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Drag_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_RetryDownload_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Show_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Pause_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Resume_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Remove_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Undo_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_Cancel_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_ClearAll_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_DeepScan_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec = { $: {} };
downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec = { $: {} };
downloads.mojom.Page = {};
downloads.mojom.Page.$interfaceName = 'downloads.mojom.Page';
downloads.mojom.Page_RemoveItem_ParamsSpec = { $: {} };
downloads.mojom.Page_UpdateItem_ParamsSpec = { $: {} };
downloads.mojom.Page_InsertItems_ParamsSpec = { $: {} };
downloads.mojom.Page_ClearAll_ParamsSpec = { $: {} };

// Enum: DangerType
downloads.mojom.DangerType = {
  kNoApplicableDangerType: 0,
  kDangerousFile: 1,
  kDangerousUrl: 2,
  kDangerousContent: 3,
  kCookieTheft: 4,
  kUncommonContent: 5,
  kDangerousHost: 6,
  kPotentiallyUnwanted: 7,
  kAsyncScanning: 8,
  kAsyncLocalPasswordScanning: 9,
  kBlockedPasswordProtected: 10,
  kBlockedTooLarge: 11,
  kSensitiveContentWarning: 12,
  kSensitiveContentBlock: 13,
  kDeepScannedFailed: 14,
  kDeepScannedSafe: 15,
  kDeepScannedOpenedDangerous: 16,
  kBlockedScanFailed: 17,
  kForcedSaveToGdrive: 18,
};

// Enum: TailoredWarningType
downloads.mojom.TailoredWarningType = {
  kNoApplicableTailoredWarningType: 0,
  kCookieTheft: 1,
  kSuspiciousArchive: 2,
};

// Enum: State
downloads.mojom.State = {
  kInProgress: 0,
  kCancelled: 1,
  kComplete: 2,
  kPaused: 3,
  kDangerous: 4,
  kInterrupted: 5,
  kInsecure: 6,
  kAsyncScanning: 7,
  kPromptForScanning: 8,
  kPromptForLocalPasswordScanning: 9,
};

// Enum: SafeBrowsingState
downloads.mojom.SafeBrowsingState = {
  kNoSafeBrowsing: 0,
  kStandardProtection: 1,
  kEnhancedProtection: 2,
};

// Struct: Data
mojo.internal.Struct(
    downloads.mojom.DataSpec, 'downloads.mojom.Data', [
      mojo.internal.StructField('total', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('by_ext_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('by_ext_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('danger_type', 24, 0, downloads.mojom.DangerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tailored_warning_type', 32, 0, downloads.mojom.TailoredWarningTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('date_string', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_url', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_reason_text', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('progress_status_text', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('show_in_folder_text', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('since_string', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 112, 0, downloads.mojom.StateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_initiator_origin', 120, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 128, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('safe_browsing_state', 136, 0, downloads.mojom.SafeBrowsingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('percent', 144, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('started', 148, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('file_externally_removed', 152, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_dangerous', 152, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_insecure', 152, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reviewable', 152, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('otr', 152, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resume', 152, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('retry', 152, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_safe_browsing_verdict', 152, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 168]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'downloads.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(downloads.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(downloads.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

downloads.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new downloads.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

downloads.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

downloads.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new downloads.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

downloads.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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

downloads.mojom.PageHandlerFactoryReceiver = downloads.mojom.PageHandlerFactoryReceiver;

downloads.mojom.PageHandlerFactoryPtr = downloads.mojom.PageHandlerFactoryRemote;
downloads.mojom.PageHandlerFactoryRequest = downloads.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    downloads.mojom.PageHandler_GetDownloads_ParamsSpec, 'downloads.mojom.PageHandler_GetDownloads_Params', [
      mojo.internal.StructField('search_terms', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenFileRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Drag_ParamsSpec, 'downloads.mojom.PageHandler_Drag_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec, 'downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec, 'downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec, 'downloads.mojom.PageHandler_DiscardDangerous_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_RetryDownload_ParamsSpec, 'downloads.mojom.PageHandler_RetryDownload_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Show_ParamsSpec, 'downloads.mojom.PageHandler_Show_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Pause_ParamsSpec, 'downloads.mojom.PageHandler_Pause_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Resume_ParamsSpec, 'downloads.mojom.PageHandler_Resume_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Remove_ParamsSpec, 'downloads.mojom.PageHandler_Remove_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Undo_ParamsSpec, 'downloads.mojom.PageHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_Cancel_ParamsSpec, 'downloads.mojom.PageHandler_Cancel_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_ClearAll_ParamsSpec, 'downloads.mojom.PageHandler_ClearAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec, 'downloads.mojom.PageHandler_OpenEsbSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec, 'downloads.mojom.PageHandler_LogEsbPromotionRowViewed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_DeepScan_ParamsSpec, 'downloads.mojom.PageHandler_DeepScan_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec, 'downloads.mojom.PageHandler_IsEligibleForEsbPromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec, 'downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

downloads.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new downloads.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDownloads(search_terms) {
    return this.$.getDownloads(search_terms);
  }
  openFileRequiringGesture(id) {
    return this.$.openFileRequiringGesture(id);
  }
  drag(id) {
    return this.$.drag(id);
  }
  saveSuspiciousRequiringGesture(id) {
    return this.$.saveSuspiciousRequiringGesture(id);
  }
  recordOpenBypassWarningDialog(id) {
    return this.$.recordOpenBypassWarningDialog(id);
  }
  saveDangerousFromDialogRequiringGesture(id) {
    return this.$.saveDangerousFromDialogRequiringGesture(id);
  }
  recordCancelBypassWarningDialog(id) {
    return this.$.recordCancelBypassWarningDialog(id);
  }
  discardDangerous(id) {
    return this.$.discardDangerous(id);
  }
  retryDownload(id) {
    return this.$.retryDownload(id);
  }
  show(id) {
    return this.$.show(id);
  }
  pause(id) {
    return this.$.pause(id);
  }
  resume(id) {
    return this.$.resume(id);
  }
  remove(id) {
    return this.$.remove(id);
  }
  undo() {
    return this.$.undo();
  }
  cancel(id) {
    return this.$.cancel(id);
  }
  clearAll() {
    return this.$.clearAll();
  }
  openDownloadsFolderRequiringGesture() {
    return this.$.openDownloadsFolderRequiringGesture();
  }
  openEsbSettings() {
    return this.$.openEsbSettings();
  }
  logEsbPromotionRowViewed() {
    return this.$.logEsbPromotionRowViewed();
  }
  openDuringScanningRequiringGesture(id) {
    return this.$.openDuringScanningRequiringGesture(id);
  }
  reviewDangerousRequiringGesture(id) {
    return this.$.reviewDangerousRequiringGesture(id);
  }
  deepScan(id) {
    return this.$.deepScan(id);
  }
  bypassDeepScanRequiringGesture(id) {
    return this.$.bypassDeepScanRequiringGesture(id);
  }
  isEligibleForEsbPromo() {
    return this.$.isEligibleForEsbPromo();
  }
};

downloads.mojom.PageHandlerRemoteCallHandler = class {
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDownloads(search_terms) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      downloads.mojom.PageHandler_GetDownloads_ParamsSpec,
      null,
      [search_terms],
      false);
  }

  openFileRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  drag(id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      downloads.mojom.PageHandler_Drag_ParamsSpec,
      null,
      [id],
      false);
  }

  saveSuspiciousRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  recordOpenBypassWarningDialog(id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec,
      null,
      [id],
      false);
  }

  saveDangerousFromDialogRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  recordCancelBypassWarningDialog(id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec,
      null,
      [id],
      false);
  }

  discardDangerous(id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec,
      null,
      [id],
      false);
  }

  retryDownload(id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      downloads.mojom.PageHandler_RetryDownload_ParamsSpec,
      null,
      [id],
      false);
  }

  show(id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      downloads.mojom.PageHandler_Show_ParamsSpec,
      null,
      [id],
      false);
  }

  pause(id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      downloads.mojom.PageHandler_Pause_ParamsSpec,
      null,
      [id],
      false);
  }

  resume(id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      downloads.mojom.PageHandler_Resume_ParamsSpec,
      null,
      [id],
      false);
  }

  remove(id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      downloads.mojom.PageHandler_Remove_ParamsSpec,
      null,
      [id],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      downloads.mojom.PageHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  cancel(id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      downloads.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [id],
      false);
  }

  clearAll() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      downloads.mojom.PageHandler_ClearAll_ParamsSpec,
      null,
      [],
      false);
  }

  openDownloadsFolderRequiringGesture() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec,
      null,
      [],
      false);
  }

  openEsbSettings() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec,
      null,
      [],
      false);
  }

  logEsbPromotionRowViewed() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec,
      null,
      [],
      false);
  }

  openDuringScanningRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  reviewDangerousRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  deepScan(id) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      downloads.mojom.PageHandler_DeepScan_ParamsSpec,
      null,
      [id],
      false);
  }

  bypassDeepScanRequiringGesture(id) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec,
      null,
      [id],
      false);
  }

  isEligibleForEsbPromo() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec,
      downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec,
      [],
      false);
  }

};

downloads.mojom.PageHandler.getRemote = function() {
  let remote = new downloads.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandler',
    'context');
  return remote.$;
};

downloads.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetDownloads
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_GetDownloads_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDownloads (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OpenFileRequiringGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileRequiringGesture (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Drag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Drag_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Drag (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SaveSuspiciousRequiringGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveSuspiciousRequiringGesture (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RecordOpenBypassWarningDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordOpenBypassWarningDialog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SaveDangerousFromDialogRequiringGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveDangerousFromDialogRequiringGesture (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RecordCancelBypassWarningDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCancelBypassWarningDialog (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DiscardDangerous
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DiscardDangerous (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RetryDownload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_RetryDownload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RetryDownload (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Show
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Show_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Show (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Pause_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Resume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Remove
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Remove_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Undo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Undo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Undo (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_Cancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ClearAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_ClearAll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAll (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OpenDownloadsFolderRequiringGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDownloadsFolderRequiringGesture (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OpenEsbSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenEsbSettings (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: LogEsbPromotionRowViewed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogEsbPromotionRowViewed (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OpenDuringScanningRequiringGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDuringScanningRequiringGesture (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ReviewDangerousRequiringGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReviewDangerousRequiringGesture (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: DeepScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_DeepScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeepScan (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: BypassDeepScanRequiringGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BypassDeepScanRequiringGesture (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: IsEligibleForEsbPromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsEligibleForEsbPromo (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
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
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_GetDownloads_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDownloads');
          const result = this.impl.getDownloads(params.search_terms);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileRequiringGesture');
          const result = this.impl.openFileRequiringGesture(params.id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Drag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.drag');
          const result = this.impl.drag(params.id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveSuspiciousRequiringGesture');
          const result = this.impl.saveSuspiciousRequiringGesture(params.id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordOpenBypassWarningDialog');
          const result = this.impl.recordOpenBypassWarningDialog(params.id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveDangerousFromDialogRequiringGesture');
          const result = this.impl.saveDangerousFromDialogRequiringGesture(params.id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordCancelBypassWarningDialog');
          const result = this.impl.recordCancelBypassWarningDialog(params.id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discardDangerous');
          const result = this.impl.discardDangerous(params.id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_RetryDownload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.retryDownload');
          const result = this.impl.retryDownload(params.id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Show_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.show');
          const result = this.impl.show(params.id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Pause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause(params.id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume(params.id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Remove_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove(params.id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Undo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel(params.id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_ClearAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearAll');
          const result = this.impl.clearAll();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDownloadsFolderRequiringGesture');
          const result = this.impl.openDownloadsFolderRequiringGesture();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openEsbSettings');
          const result = this.impl.openEsbSettings();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logEsbPromotionRowViewed');
          const result = this.impl.logEsbPromotionRowViewed();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDuringScanningRequiringGesture');
          const result = this.impl.openDuringScanningRequiringGesture(params.id);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reviewDangerousRequiringGesture');
          const result = this.impl.reviewDangerousRequiringGesture(params.id);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_DeepScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deepScan');
          const result = this.impl.deepScan(params.id);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bypassDeepScanRequiringGesture');
          const result = this.impl.bypassDeepScanRequiringGesture(params.id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isEligibleForEsbPromo');
          const result = this.impl.isEligibleForEsbPromo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsEligibleForEsbPromo FAILED:', e));
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

downloads.mojom.PageHandlerReceiver = downloads.mojom.PageHandlerReceiver;

downloads.mojom.PageHandlerPtr = downloads.mojom.PageHandlerRemote;
downloads.mojom.PageHandlerRequest = downloads.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    downloads.mojom.Page_RemoveItem_ParamsSpec, 'downloads.mojom.Page_RemoveItem_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    downloads.mojom.Page_UpdateItem_ParamsSpec, 'downloads.mojom.Page_UpdateItem_Params', [
      mojo.internal.StructField('data', 0, 0, downloads.mojom.DataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    downloads.mojom.Page_InsertItems_ParamsSpec, 'downloads.mojom.Page_InsertItems_Params', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(downloads.mojom.DataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    downloads.mojom.Page_ClearAll_ParamsSpec, 'downloads.mojom.Page_ClearAll_Params', [
    ],
    [[0, 8]]);

downloads.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

downloads.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      downloads.mojom.PagePendingReceiver,
      handle);
    this.$ = new downloads.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  removeItem(index) {
    return this.$.removeItem(index);
  }
  updateItem(index, data) {
    return this.$.updateItem(index, data);
  }
  insertItems(index, items) {
    return this.$.insertItems(index, items);
  }
  clearAll() {
    return this.$.clearAll();
  }
};

downloads.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  removeItem(index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      downloads.mojom.Page_RemoveItem_ParamsSpec,
      null,
      [index],
      false);
  }

  updateItem(index, data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      downloads.mojom.Page_UpdateItem_ParamsSpec,
      null,
      [index, data],
      false);
  }

  insertItems(index, items) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      downloads.mojom.Page_InsertItems_ParamsSpec,
      null,
      [index, items],
      false);
  }

  clearAll() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      downloads.mojom.Page_ClearAll_ParamsSpec,
      null,
      [],
      false);
  }

};

downloads.mojom.Page.getRemote = function() {
  let remote = new downloads.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.Page',
    'context');
  return remote.$;
};

downloads.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: RemoveItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_RemoveItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveItem (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_UpdateItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateItem (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InsertItems
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_InsertItems_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertItems (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClearAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(downloads.mojom.Page_ClearAll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAll (3)');
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
          const params = decoder.decodeStructInline(downloads.mojom.Page_RemoveItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeItem');
          const result = this.impl.removeItem(params.index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.Page_UpdateItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateItem');
          const result = this.impl.updateItem(params.index, params.data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.Page_InsertItems_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertItems');
          const result = this.impl.insertItems(params.index, params.items);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(downloads.mojom.Page_ClearAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearAll');
          const result = this.impl.clearAll();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

downloads.mojom.PageReceiver = downloads.mojom.PageReceiver;

downloads.mojom.PagePtr = downloads.mojom.PageRemote;
downloads.mojom.PageRequest = downloads.mojom.PagePendingReceiver;

