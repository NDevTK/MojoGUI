// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_fetch/background_fetch.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var gfx = gfx || {};

blink.mojom.BackgroundFetchErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundFetchResultSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundFetchFailureReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundFetchSettledFetchSpec = { $: {} };
blink.mojom.BackgroundFetchOptionsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationDataSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationSpec = { $: {} };
blink.mojom.BackgroundFetchUkmDataSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationObserver = {};
blink.mojom.BackgroundFetchRegistrationObserver.$interfaceName = 'blink.mojom.BackgroundFetchRegistrationObserver';
blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService = {};
blink.mojom.BackgroundFetchService.$interfaceName = 'blink.mojom.BackgroundFetchService';
blink.mojom.BackgroundFetchService_Fetch_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService = {};
blink.mojom.BackgroundFetchRegistrationService.$interfaceName = 'blink.mojom.BackgroundFetchRegistrationService';
blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec = { $: {} };

// Enum: BackgroundFetchError
blink.mojom.BackgroundFetchError = {
  NONE: 0,
  DUPLICATED_DEVELOPER_ID: 1,
  INVALID_ARGUMENT: 2,
  INVALID_ID: 3,
  STORAGE_ERROR: 4,
  SERVICE_WORKER_UNAVAILABLE: 5,
  QUOTA_EXCEEDED: 6,
  PERMISSION_DENIED: 7,
  REGISTRATION_LIMIT_EXCEEDED: 8,
};

// Enum: BackgroundFetchResult
blink.mojom.BackgroundFetchResult = {
  UNSET: 0,
  FAILURE: 1,
  SUCCESS: 2,
};

// Enum: BackgroundFetchFailureReason
blink.mojom.BackgroundFetchFailureReason = {
  NONE: 0,
  CANCELLED_FROM_UI: 1,
  CANCELLED_BY_DEVELOPER: 2,
  BAD_STATUS: 3,
  FETCH_ERROR: 4,
  SERVICE_WORKER_UNAVAILABLE: 5,
  QUOTA_EXCEEDED: 6,
  DOWNLOAD_TOTAL_EXCEEDED: 7,
};

// Struct: BackgroundFetchSettledFetch
mojo.internal.Struct(
    blink.mojom.BackgroundFetchSettledFetchSpec, 'blink.mojom.BackgroundFetchSettledFetch', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, blink.mojom.FetchAPIResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundFetchOptions
mojo.internal.Struct(
    blink.mojom.BackgroundFetchOptionsSpec, 'blink.mojom.BackgroundFetchOptions', [
      mojo.internal.StructField('icons', 0, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('download_total', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BackgroundFetchRegistrationData
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationDataSpec, 'blink.mojom.BackgroundFetchRegistrationData', [
      mojo.internal.StructField('developer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('upload_total', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('uploaded', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('download_total', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('downloaded', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('result', 40, 0, blink.mojom.BackgroundFetchResultSpec.$, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: BackgroundFetchRegistration
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationSpec, 'blink.mojom.BackgroundFetchRegistration', [
      mojo.internal.StructField('registration_data', 0, 0, blink.mojom.BackgroundFetchRegistrationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registration_interface', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BackgroundFetchRegistrationServiceSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundFetchUkmData
mojo.internal.Struct(
    blink.mojom.BackgroundFetchUkmDataSpec, 'blink.mojom.BackgroundFetchUkmData', [
      mojo.internal.StructField('ideal_to_chosen_icon_size', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: BackgroundFetchRegistrationObserver
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_Params', [
      mojo.internal.StructField('upload_total', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('uploaded', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('download_total', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('downloaded', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('result', 32, 0, blink.mojom.BackgroundFetchResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('failure_reason', 40, 0, blink.mojom.BackgroundFetchFailureReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, blink.mojom.FetchAPIResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.BackgroundFetchRegistrationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackgroundFetchRegistrationObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackgroundFetchRegistrationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackgroundFetchRegistrationObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.BackgroundFetchRegistrationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onProgress(upload_total, uploaded, download_total, downloaded, result, failure_reason) {
    return this.$.onProgress(upload_total, uploaded, download_total, downloaded, result, failure_reason);
  }
  onRecordsUnavailable() {
    return this.$.onRecordsUnavailable();
  }
  onRequestCompleted(request, response) {
    return this.$.onRequestCompleted(request, response);
  }
};

blink.mojom.BackgroundFetchRegistrationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BackgroundFetchRegistrationObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onProgress(upload_total, uploaded, download_total, downloaded, result, failure_reason) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec,
      null,
      [upload_total, uploaded, download_total, downloaded, result, failure_reason],
      false);
  }

  onRecordsUnavailable() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec,
      null,
      [],
      false);
  }

  onRequestCompleted(request, response) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec,
      null,
      [request, response],
      false);
  }

};

blink.mojom.BackgroundFetchRegistrationObserver.getRemote = function() {
  let remote = new blink.mojom.BackgroundFetchRegistrationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackgroundFetchRegistrationObserver',
    'context');
  return remote.$;
};

blink.mojom.BackgroundFetchRegistrationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BackgroundFetchRegistrationObserver', [
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
        
        // Try Method 0: OnProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProgress (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnRecordsUnavailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordsUnavailable (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnRequestCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestCompleted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProgress');
          const result = this.impl.onProgress(params.upload_total, params.uploaded, params.download_total, params.downloaded, params.result, params.failure_reason);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRecordsUnavailable');
          const result = this.impl.onRecordsUnavailable();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRequestCompleted');
          const result = this.impl.onRequestCompleted(params.request, params.response);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BackgroundFetchRegistrationObserverReceiver = blink.mojom.BackgroundFetchRegistrationObserverReceiver;

blink.mojom.BackgroundFetchRegistrationObserverPtr = blink.mojom.BackgroundFetchRegistrationObserverRemote;
blink.mojom.BackgroundFetchRegistrationObserverRequest = blink.mojom.BackgroundFetchRegistrationObserverPendingReceiver;


// Interface: BackgroundFetchService
mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_Fetch_ParamsSpec, 'blink.mojom.BackgroundFetchService_Fetch_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('developer_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('requests', 16, 0, mojo.internal.Array(blink.mojom.FetchAPIRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, blink.mojom.BackgroundFetchOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 32, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('ukm_data', 40, 0, blink.mojom.BackgroundFetchUkmDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_Fetch_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registration', 8, 0, blink.mojom.BackgroundFetchRegistrationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec, 'blink.mojom.BackgroundFetchService_GetRegistration_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('developer_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_GetRegistration_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registration', 8, 0, blink.mojom.BackgroundFetchRegistrationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec, 'blink.mojom.BackgroundFetchService_GetDeveloperIds_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('developer_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec, 'blink.mojom.BackgroundFetchService_GetIconDisplaySize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParams', [
      mojo.internal.StructField('icon_size_pixels', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BackgroundFetchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackgroundFetchServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackgroundFetchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackgroundFetchServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.BackgroundFetchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  fetch(service_worker_registration_id, developer_id, requests, options, icon, ukm_data) {
    return this.$.fetch(service_worker_registration_id, developer_id, requests, options, icon, ukm_data);
  }
  getRegistration(service_worker_registration_id, developer_id) {
    return this.$.getRegistration(service_worker_registration_id, developer_id);
  }
  getDeveloperIds(service_worker_registration_id) {
    return this.$.getDeveloperIds(service_worker_registration_id);
  }
  getIconDisplaySize() {
    return this.$.getIconDisplaySize();
  }
};

blink.mojom.BackgroundFetchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BackgroundFetchService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  fetch(service_worker_registration_id, developer_id, requests, options, icon, ukm_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BackgroundFetchService_Fetch_ParamsSpec,
      blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec,
      [service_worker_registration_id, developer_id, requests, options, icon, ukm_data],
      false);
  }

  getRegistration(service_worker_registration_id, developer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec,
      [service_worker_registration_id, developer_id],
      false);
  }

  getDeveloperIds(service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

  getIconDisplaySize() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.BackgroundFetchService.getRemote = function() {
  let remote = new blink.mojom.BackgroundFetchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackgroundFetchService',
    'context');
  return remote.$;
};

blink.mojom.BackgroundFetchServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BackgroundFetchService', [
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
        
        // Try Method 0: Fetch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchService_Fetch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Fetch (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetRegistration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetDeveloperIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeveloperIds (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetIconDisplaySize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIconDisplaySize (3)');
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
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchService_Fetch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetch');
          const result = this.impl.fetch(params.service_worker_registration_id, params.developer_id, params.requests, params.options, params.icon, params.ukm_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRegistration');
          const result = this.impl.getRegistration(params.service_worker_registration_id, params.developer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeveloperIds');
          const result = this.impl.getDeveloperIds(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIconDisplaySize');
          const result = this.impl.getIconDisplaySize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec);
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

blink.mojom.BackgroundFetchServiceReceiver = blink.mojom.BackgroundFetchServiceReceiver;

blink.mojom.BackgroundFetchServicePtr = blink.mojom.BackgroundFetchServiceRemote;
blink.mojom.BackgroundFetchServiceRequest = blink.mojom.BackgroundFetchServicePendingReceiver;


// Interface: BackgroundFetchRegistrationService
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_UpdateUI_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_MatchRequests_Params', [
      mojo.internal.StructField('request_to_match', 0, 0, blink.mojom.FetchAPIRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cache_query_options', 8, 0, blink.mojom.CacheQueryOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('match_all', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParams', [
      mojo.internal.StructField('fetches', 0, 0, mojo.internal.Array(blink.mojom.BackgroundFetchSettledFetchSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BackgroundFetchRegistrationObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BackgroundFetchRegistrationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackgroundFetchRegistrationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackgroundFetchRegistrationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackgroundFetchRegistrationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.BackgroundFetchRegistrationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateUI(title, icon) {
    return this.$.updateUI(title, icon);
  }
  abort() {
    return this.$.abort();
  }
  matchRequests(request_to_match, cache_query_options, match_all) {
    return this.$.matchRequests(request_to_match, cache_query_options, match_all);
  }
  addRegistrationObserver(observer) {
    return this.$.addRegistrationObserver(observer);
  }
};

blink.mojom.BackgroundFetchRegistrationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BackgroundFetchRegistrationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateUI(title, icon) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec,
      [title, icon],
      false);
  }

  abort() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec,
      [],
      false);
  }

  matchRequests(request_to_match, cache_query_options, match_all) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec,
      [request_to_match, cache_query_options, match_all],
      false);
  }

  addRegistrationObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

blink.mojom.BackgroundFetchRegistrationService.getRemote = function() {
  let remote = new blink.mojom.BackgroundFetchRegistrationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackgroundFetchRegistrationService',
    'context');
  return remote.$;
};

blink.mojom.BackgroundFetchRegistrationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BackgroundFetchRegistrationService', [
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
        
        // Try Method 0: UpdateUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUI (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MatchRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MatchRequests (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddRegistrationObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRegistrationObserver (3)');
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
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUI');
          const result = this.impl.updateUI(params.title, params.icon);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.matchRequests');
          const result = this.impl.matchRequests(params.request_to_match, params.cache_query_options, params.match_all);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRegistrationObserver');
          const result = this.impl.addRegistrationObserver(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BackgroundFetchRegistrationServiceReceiver = blink.mojom.BackgroundFetchRegistrationServiceReceiver;

blink.mojom.BackgroundFetchRegistrationServicePtr = blink.mojom.BackgroundFetchRegistrationServiceRemote;
blink.mojom.BackgroundFetchRegistrationServiceRequest = blink.mojom.BackgroundFetchRegistrationServicePendingReceiver;

