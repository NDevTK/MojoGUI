// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/url_loader.mojom
 // Module: network.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.URLRequestRedirectInfoSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClientEndpointsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoader = {};
mojo.internal.bindings.network.mojom.URLLoaderSpec = { $ : {} };
mojo.internal.bindings.network.mojom.URLLoader.$interfaceName = 'network.mojom.URLLoader';
mojo.internal.bindings.network.mojom.URLLoader_FollowRedirect_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoader_SetPriority_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClient = {};
mojo.internal.bindings.network.mojom.URLLoaderClientSpec = { $ : {} };
mojo.internal.bindings.network.mojom.URLLoaderClient.$interfaceName = 'network.mojom.URLLoaderClient';
mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderClient_OnComplete_ParamsSpec = { $: {} };

mojo.internal.bindings.network.mojom.kClientDisconnectReason = 1;

// Struct: URLRequestRedirectInfo
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLRequestRedirectInfoSpec, 'network.mojom.URLRequestRedirectInfo', [
    ],
    [[0, 8]]);

// Struct: URLLoaderClientEndpoints
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClientEndpointsSpec, 'network.mojom.URLLoaderClientEndpoints', [
      mojo.internal.StructField('arg_url_loader', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_url_loader_client', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: URLLoader
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoader_FollowRedirect_ParamsSpec, 'network.mojom.URLLoader_FollowRedirect_Params', [
      mojo.internal.StructField('arg_removed_headers', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_modified_headers', 8, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_modified_cors_exempt_headers', 16, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoader_SetPriority_ParamsSpec, 'network.mojom.URLLoader_SetPriority_Params', [
      mojo.internal.StructField('arg_priority', 0, 0, mojo.internal.bindings.network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_intra_priority_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.URLLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.URLLoaderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.URLLoaderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.URLLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  followRedirect(arg_removed_headers, arg_modified_headers, arg_modified_cors_exempt_headers, arg_new_url) {
    return this.$.followRedirect(arg_removed_headers, arg_modified_headers, arg_modified_cors_exempt_headers, arg_new_url);
  }
  setPriority(arg_priority, arg_intra_priority_value) {
    return this.$.setPriority(arg_priority, arg_intra_priority_value);
  }
};

mojo.internal.bindings.network.mojom.URLLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.URLLoader', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  followRedirect(arg_removed_headers, arg_modified_headers, arg_modified_cors_exempt_headers, arg_new_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoader_FollowRedirect_ParamsSpec,
      null,
      [arg_removed_headers, arg_modified_headers, arg_modified_cors_exempt_headers, arg_new_url],
      false);
  }

  setPriority(arg_priority, arg_intra_priority_value) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoader_SetPriority_ParamsSpec,
      null,
      [arg_priority, arg_intra_priority_value],
      false);
  }

};

mojo.internal.bindings.network.mojom.URLLoader.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.URLLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoader',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.URLLoaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.URLLoader', [
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
        
        // Try Method 0: FollowRedirect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoader_FollowRedirect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FollowRedirect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetPriority
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoader_SetPriority_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPriority (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoader_FollowRedirect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.followRedirect');
          const result = this.impl.followRedirect(params.arg_removed_headers, params.arg_modified_headers, params.arg_modified_cors_exempt_headers, params.arg_new_url);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoader_SetPriority_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPriority');
          const result = this.impl.setPriority(params.arg_priority, params.arg_intra_priority_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.URLLoaderReceiver = mojo.internal.bindings.network.mojom.URLLoaderReceiver;

mojo.internal.bindings.network.mojom.URLLoaderPtr = mojo.internal.bindings.network.mojom.URLLoaderRemote;
mojo.internal.bindings.network.mojom.URLLoaderRequest = mojo.internal.bindings.network.mojom.URLLoaderPendingReceiver;


// Interface: URLLoaderClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveEarlyHints_Params', [
      mojo.internal.StructField('arg_early_hints', 0, 0, mojo.internal.bindings.network.mojom.EarlyHintsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveResponse_Params', [
      mojo.internal.StructField('arg_head', 0, 0, mojo.internal.bindings.network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_body', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_cached_metadata', 16, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveRedirect_Params', [
      mojo.internal.StructField('arg_redirect_info', 0, 0, mojo.internal.bindings.network.mojom.URLRequestRedirectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_head', 8, 0, mojo.internal.bindings.network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec, 'network.mojom.URLLoaderClient_OnUploadProgress_Params', [
      mojo.internal.StructField('arg_current_position', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_total_size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec, 'network.mojom.URLLoaderClient_OnUploadProgress_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec, 'network.mojom.URLLoaderClient_OnTransferSizeUpdated_Params', [
      mojo.internal.StructField('arg_transfer_size_diff', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderClient_OnComplete_ParamsSpec, 'network.mojom.URLLoaderClient_OnComplete_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.network.mojom.URLLoaderCompletionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.URLLoaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.URLLoaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.URLLoaderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.URLLoaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReceiveEarlyHints(arg_early_hints) {
    return this.$.onReceiveEarlyHints(arg_early_hints);
  }
  onReceiveResponse(arg_head, arg_body, arg_cached_metadata) {
    return this.$.onReceiveResponse(arg_head, arg_body, arg_cached_metadata);
  }
  onReceiveRedirect(arg_redirect_info, arg_head) {
    return this.$.onReceiveRedirect(arg_redirect_info, arg_head);
  }
  onUploadProgress(arg_current_position, arg_total_size) {
    return this.$.onUploadProgress(arg_current_position, arg_total_size);
  }
  onTransferSizeUpdated(arg_transfer_size_diff) {
    return this.$.onTransferSizeUpdated(arg_transfer_size_diff);
  }
  onComplete(arg_status) {
    return this.$.onComplete(arg_status);
  }
};

mojo.internal.bindings.network.mojom.URLLoaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.URLLoaderClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReceiveEarlyHints(arg_early_hints) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec,
      null,
      [arg_early_hints],
      false);
  }

  onReceiveResponse(arg_head, arg_body, arg_cached_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec,
      null,
      [arg_head, arg_body, arg_cached_metadata],
      false);
  }

  onReceiveRedirect(arg_redirect_info, arg_head) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec,
      null,
      [arg_redirect_info, arg_head],
      false);
  }

  onUploadProgress(arg_current_position, arg_total_size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec,
      mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec,
      [arg_current_position, arg_total_size],
      false);
  }

  onTransferSizeUpdated(arg_transfer_size_diff) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec,
      null,
      [arg_transfer_size_diff],
      false);
  }

  onComplete(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderClient_OnComplete_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.network.mojom.URLLoaderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.URLLoaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.URLLoaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.URLLoaderClient', [
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
        
        // Try Method 0: OnReceiveEarlyHints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceiveEarlyHints (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnReceiveResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceiveResponse (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnReceiveRedirect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceiveRedirect (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnUploadProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUploadProgress (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnTransferSizeUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTransferSizeUpdated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceiveEarlyHints');
          const result = this.impl.onReceiveEarlyHints(params.arg_early_hints);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceiveResponse');
          const result = this.impl.onReceiveResponse(params.arg_head, params.arg_body, params.arg_cached_metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceiveRedirect');
          const result = this.impl.onReceiveRedirect(params.arg_redirect_info, params.arg_head);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUploadProgress');
          const result = this.impl.onUploadProgress(params.arg_current_position, params.arg_total_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnUploadProgress FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTransferSizeUpdated');
          const result = this.impl.onTransferSizeUpdated(params.arg_transfer_size_diff);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderClient_OnComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.URLLoaderClientReceiver = mojo.internal.bindings.network.mojom.URLLoaderClientReceiver;

mojo.internal.bindings.network.mojom.URLLoaderClientPtr = mojo.internal.bindings.network.mojom.URLLoaderClientRemote;
mojo.internal.bindings.network.mojom.URLLoaderClientRequest = mojo.internal.bindings.network.mojom.URLLoaderClientPendingReceiver;

