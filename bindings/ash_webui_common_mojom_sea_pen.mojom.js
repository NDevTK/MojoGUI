// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/sea_pen.mojom
// Module: ash.personalization_app.mojom

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
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

ash.personalization_app.mojom.MantaStatusCodeSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.SeaPenQuerySpec = { $: {} };
ash.personalization_app.mojom.SeaPenThumbnailSpec = { $: {} };
ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec = { $: {} };
ash.personalization_app.mojom.SeaPenTemplateQuerySpec = { $: {} };
ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec = { $: {} };
ash.personalization_app.mojom.RecentSeaPenImageInfoSpec = { $: {} };
ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec = { $: {} };
ash.personalization_app.mojom.TextQueryHistoryEntrySpec = { $: {} };
ash.personalization_app.mojom.SeaPenObserver = {};
ash.personalization_app.mojom.SeaPenObserver.$interfaceName = 'ash.personalization_app.mojom.SeaPenObserver';
ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider = {};
ash.personalization_app.mojom.SeaPenProvider.$interfaceName = 'ash.personalization_app.mojom.SeaPenProvider';
ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec = { $: {} };

ash.personalization_app.mojom.kMaximumGetSeaPenThumbnailsTextBytes = 3000;

// Enum: MantaStatusCode
ash.personalization_app.mojom.MantaStatusCode = {
  kOk: 0,
  kGenericError: 1,
  kInvalidInput: 2,
  kResourceExhausted: 3,
  kBackendFailure: 4,
  kMalformedResponse: 5,
  kNoInternetConnection: 6,
  kUnsupportedLanguage: 7,
  kBlockedOutputs: 8,
  kRestrictedCountry: 9,
  kNoIdentityManager: 10,
  kPerUserQuotaExceeded: 11,
  kImageHasPerson: 12,
  kMax: 12,
};

// Union: SeaPenQuery
mojo.internal.Union(
    ash.personalization_app.mojom.SeaPenQuerySpec, 'ash.personalization_app.mojom.SeaPenQuery', {
      'text_query': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'template_query': {
        'ordinal': 1,
        'type': ash.personalization_app.mojom.SeaPenTemplateQuerySpec.$,
        'nullable': false,
      },
    });

// Struct: SeaPenThumbnail
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenThumbnailSpec, 'ash.personalization_app.mojom.SeaPenThumbnail', [
      mojo.internal.StructField('image', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SeaPenUserVisibleQuery
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec, 'ash.personalization_app.mojom.SeaPenUserVisibleQuery', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('template_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SeaPenTemplateQuery
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenTemplateQuerySpec, 'ash.personalization_app.mojom.SeaPenTemplateQuery', [
      mojo.internal.StructField('id', 0, 0, ash.personalization_app.mojom.SeaPenTemplateIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, mojo.internal.Map(ash.personalization_app.mojom.SeaPenTemplateChipSpec.$, ash.personalization_app.mojom.SeaPenTemplateOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('user_visible_query', 16, 0, ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SeaPenFeedbackMetadata
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec, 'ash.personalization_app.mojom.SeaPenFeedbackMetadata', [
      mojo.internal.StructField('log_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('generation_seed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_positive', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RecentSeaPenImageInfo
mojo.internal.Struct(
    ash.personalization_app.mojom.RecentSeaPenImageInfoSpec, 'ash.personalization_app.mojom.RecentSeaPenImageInfo', [
      mojo.internal.StructField('query', 0, 0, ash.personalization_app.mojom.SeaPenQuerySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RecentSeaPenThumbnailData
mojo.internal.Struct(
    ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec, 'ash.personalization_app.mojom.RecentSeaPenThumbnailData', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_info', 8, 0, ash.personalization_app.mojom.RecentSeaPenImageInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextQueryHistoryEntry
mojo.internal.Struct(
    ash.personalization_app.mojom.TextQueryHistoryEntrySpec, 'ash.personalization_app.mojom.TextQueryHistoryEntry', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('thumbnails', 8, 0, mojo.internal.Array(ash.personalization_app.mojom.SeaPenThumbnailSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SeaPenObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec, 'ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_Params', [
      mojo.internal.StructField('id_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'id_$flag', originalFieldName: 'id' }),
      mojo.internal.StructField('id_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'id_$value', originalFieldName: 'id' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec, 'ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_Params', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.TextQueryHistoryEntrySpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.SeaPenObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SeaPenObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SeaPenObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SeaPenObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SeaPenObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SeaPenObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SeaPenObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSelectedSeaPenImageChanged(id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec,
      null,
      [id],
      false);
  }

  onTextQueryHistoryChanged(entries) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec,
      null,
      [entries],
      false);
  }

};

ash.personalization_app.mojom.SeaPenObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SeaPenObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SeaPenObserver',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.SeaPenObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SeaPenObserver', [
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
        
        // Try Method 0: OnSelectedSeaPenImageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSelectedSeaPenImageChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTextQueryHistoryChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTextQueryHistoryChanged (1)');
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
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSelectedSeaPenImageChanged');
          const result = this.impl.onSelectedSeaPenImageChanged(params.id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTextQueryHistoryChanged');
          const result = this.impl.onTextQueryHistoryChanged(params.entries);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.personalization_app.mojom.SeaPenObserverReceiver = ash.personalization_app.mojom.SeaPenObserverReceiver;

ash.personalization_app.mojom.SeaPenObserverPtr = ash.personalization_app.mojom.SeaPenObserverRemote;
ash.personalization_app.mojom.SeaPenObserverRequest = ash.personalization_app.mojom.SeaPenObserverPendingReceiver;


// Interface: SeaPenProvider
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.SeaPenObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_Params', [
      mojo.internal.StructField('query', 0, 0, ash.personalization_app.mojom.SeaPenQuerySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParams', [
      mojo.internal.StructField('thumbnails', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.SeaPenThumbnailSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('statusCode', 8, 0, ash.personalization_app.mojom.MantaStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('preview_mode', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParams', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('preview_mode', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParams', [
      mojo.internal.StructField('thumbnail_data', 0, 0, ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_Params', [
      mojo.internal.StructField('metadata', 0, 0, ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParams', [
      mojo.internal.StructField('should_show_dialog', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParams', [
      mojo.internal.StructField('should_show_freeform_dialog', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParams', [
      mojo.internal.StructField('tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_Params', [
    ],
    [[0, 8]]);

ash.personalization_app.mojom.SeaPenProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SeaPenProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SeaPenProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SeaPenProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SeaPenProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SeaPenProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SeaPenProvider', [
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

  setSeaPenObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getSeaPenThumbnails(query) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec,
      [query],
      false);
  }

  selectSeaPenThumbnail(id, preview_mode) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec,
      [id, preview_mode],
      false);
  }

  getRecentSeaPenImageIds() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec,
      [],
      false);
  }

  selectRecentSeaPenImage(id, preview_mode) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec,
      [id, preview_mode],
      false);
  }

  getRecentSeaPenImageThumbnail(id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec,
      [id],
      false);
  }

  deleteRecentSeaPenImage(id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec,
      [id],
      false);
  }

  openFeedbackDialog(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec,
      null,
      [metadata],
      false);
  }

  shouldShowSeaPenIntroductionDialog() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec,
      [],
      false);
  }

  handleSeaPenIntroductionDialogClosed() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowSeaPenFreeformIntroductionDialog() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec,
      [],
      false);
  }

  handleSeaPenFreeformIntroductionDialogClosed() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec,
      null,
      [],
      false);
  }

  isInTabletMode() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec,
      [],
      false);
  }

  makeTransparent() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.personalization_app.mojom.SeaPenProvider.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SeaPenProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SeaPenProvider',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.SeaPenProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SeaPenProvider', [
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
        
        // Try Method 0: SetSeaPenObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSeaPenObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetSeaPenThumbnails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSeaPenThumbnails (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SelectSeaPenThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectSeaPenThumbnail (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetRecentSeaPenImageIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecentSeaPenImageIds (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SelectRecentSeaPenImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectRecentSeaPenImage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetRecentSeaPenImageThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecentSeaPenImageThumbnail (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteRecentSeaPenImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteRecentSeaPenImage (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ShouldShowSeaPenIntroductionDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowSeaPenIntroductionDialog (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: HandleSeaPenIntroductionDialogClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleSeaPenIntroductionDialogClosed (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ShouldShowSeaPenFreeformIntroductionDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowSeaPenFreeformIntroductionDialog (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: HandleSeaPenFreeformIntroductionDialogClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleSeaPenFreeformIntroductionDialogClosed (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: IsInTabletMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsInTabletMode (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: MakeTransparent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeTransparent (13)');
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
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSeaPenObserver');
          const result = this.impl.setSeaPenObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSeaPenThumbnails');
          const result = this.impl.getSeaPenThumbnails(params.query);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectSeaPenThumbnail');
          const result = this.impl.selectSeaPenThumbnail(params.id, params.preview_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecentSeaPenImageIds');
          const result = this.impl.getRecentSeaPenImageIds();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectRecentSeaPenImage');
          const result = this.impl.selectRecentSeaPenImage(params.id, params.preview_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecentSeaPenImageThumbnail');
          const result = this.impl.getRecentSeaPenImageThumbnail(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteRecentSeaPenImage');
          const result = this.impl.deleteRecentSeaPenImage(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog(params.metadata);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowSeaPenIntroductionDialog');
          const result = this.impl.shouldShowSeaPenIntroductionDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleSeaPenIntroductionDialogClosed');
          const result = this.impl.handleSeaPenIntroductionDialogClosed();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowSeaPenFreeformIntroductionDialog');
          const result = this.impl.shouldShowSeaPenFreeformIntroductionDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleSeaPenFreeformIntroductionDialogClosed');
          const result = this.impl.handleSeaPenFreeformIntroductionDialogClosed();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isInTabletMode');
          const result = this.impl.isInTabletMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeTransparent');
          const result = this.impl.makeTransparent();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.personalization_app.mojom.SeaPenProviderReceiver = ash.personalization_app.mojom.SeaPenProviderReceiver;

ash.personalization_app.mojom.SeaPenProviderPtr = ash.personalization_app.mojom.SeaPenProviderRemote;
ash.personalization_app.mojom.SeaPenProviderRequest = ash.personalization_app.mojom.SeaPenProviderPendingReceiver;

