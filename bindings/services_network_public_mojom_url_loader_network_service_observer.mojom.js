// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/url_loader_network_service_observer.mojom
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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.LocalNetworkAccessResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.TransportTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.LoadInfoSpec = { $: {} };
mojo.internal.bindings.network.mojom.ClientCertificateResponder = {};
mojo.internal.bindings.network.mojom.ClientCertificateResponder.$interfaceName = 'network.mojom.ClientCertificateResponder';
mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SSLPrivateKey = {};
mojo.internal.bindings.network.mojom.SSLPrivateKey.$interfaceName = 'network.mojom.SSLPrivateKey';
mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.AuthChallengeResponder = {};
mojo.internal.bindings.network.mojom.AuthChallengeResponder.$interfaceName = 'network.mojom.AuthChallengeResponder';
mojo.internal.bindings.network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver = {};
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver.$interfaceName = 'network.mojom.URLLoaderNetworkServiceObserver';
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec = { $: {} };

// Enum: LocalNetworkAccessResult
mojo.internal.bindings.network.mojom.LocalNetworkAccessResult = {
  kGranted: 0,
  kDenied: 1,
  kRetryDueToCache: 2,
};

// Enum: TransportType
mojo.internal.bindings.network.mojom.TransportType = {
  kDirect: 0,
  kProxied: 1,
  kCached: 2,
  kCachedFromProxy: 3,
};

// Struct: LoadInfo
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.LoadInfoSpec, 'network.mojom.LoadInfo', [
      mojo.internal.StructField('arg_timestamp', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_state_param', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_upload_position', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upload_size', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_load_state', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: ClientCertificateResponder
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec, 'network.mojom.ClientCertificateResponder_ContinueWithCertificate_Params', [
      mojo.internal.StructField('arg_x509_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm_preferences', 16, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_ssl_private_key', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SSLPrivateKeySpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec, 'network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec, 'network.mojom.ClientCertificateResponder_CancelRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.ClientCertificateResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.ClientCertificateResponderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ClientCertificateResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.ClientCertificateResponderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.ClientCertificateResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  continueWithCertificate(arg_x509_certificate, arg_provider_name, arg_algorithm_preferences, arg_ssl_private_key) {
    return this.$.continueWithCertificate(arg_x509_certificate, arg_provider_name, arg_algorithm_preferences, arg_ssl_private_key);
  }
  continueWithoutCertificate() {
    return this.$.continueWithoutCertificate();
  }
  cancelRequest() {
    return this.$.cancelRequest();
  }
};

mojo.internal.bindings.network.mojom.ClientCertificateResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ClientCertificateResponder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  continueWithCertificate(arg_x509_certificate, arg_provider_name, arg_algorithm_preferences, arg_ssl_private_key) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec,
      null,
      [arg_x509_certificate, arg_provider_name, arg_algorithm_preferences, arg_ssl_private_key],
      false);
  }

  continueWithoutCertificate() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec,
      null,
      [],
      false);
  }

  cancelRequest() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.ClientCertificateResponder.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.ClientCertificateResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ClientCertificateResponder',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.ClientCertificateResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ClientCertificateResponder', [
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
        
        // Try Method 0: ContinueWithCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContinueWithCertificate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ContinueWithoutCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContinueWithoutCertificate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelRequest (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.continueWithCertificate');
          const result = this.impl.continueWithCertificate(params.arg_x509_certificate, params.arg_provider_name, params.arg_algorithm_preferences, params.arg_ssl_private_key);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.continueWithoutCertificate');
          const result = this.impl.continueWithoutCertificate();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelRequest');
          const result = this.impl.cancelRequest();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.ClientCertificateResponderReceiver = mojo.internal.bindings.network.mojom.ClientCertificateResponderReceiver;

mojo.internal.bindings.network.mojom.ClientCertificateResponderPtr = mojo.internal.bindings.network.mojom.ClientCertificateResponderRemote;
mojo.internal.bindings.network.mojom.ClientCertificateResponderRequest = mojo.internal.bindings.network.mojom.ClientCertificateResponderPendingReceiver;


// Interface: SSLPrivateKey
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ParamsSpec, 'network.mojom.SSLPrivateKey_Sign_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec, 'network.mojom.SSLPrivateKey_Sign_ResponseParams', [
      mojo.internal.StructField('arg_signature', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.SSLPrivateKeyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.SSLPrivateKeyRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SSLPrivateKey';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.SSLPrivateKeyPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.SSLPrivateKeyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sign(arg_algorithm, arg_input) {
    return this.$.sign(arg_algorithm, arg_input);
  }
};

mojo.internal.bindings.network.mojom.SSLPrivateKeyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SSLPrivateKey', [
      { explicit: null },
    ]);
  }

  sign(arg_algorithm, arg_input) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ParamsSpec,
      mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec,
      [arg_algorithm, arg_input],
      false);
  }

};

mojo.internal.bindings.network.mojom.SSLPrivateKey.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.SSLPrivateKeyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SSLPrivateKey',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.SSLPrivateKeyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SSLPrivateKey', [
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
        
        // Try Method 0: Sign
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Sign (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sign');
          const result = this.impl.sign(params.arg_algorithm, params.arg_input);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Sign FAILED:', e));
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

mojo.internal.bindings.network.mojom.SSLPrivateKeyReceiver = mojo.internal.bindings.network.mojom.SSLPrivateKeyReceiver;

mojo.internal.bindings.network.mojom.SSLPrivateKeyPtr = mojo.internal.bindings.network.mojom.SSLPrivateKeyRemote;
mojo.internal.bindings.network.mojom.SSLPrivateKeyRequest = mojo.internal.bindings.network.mojom.SSLPrivateKeyPendingReceiver;


// Interface: AuthChallengeResponder
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec, 'network.mojom.AuthChallengeResponder_OnAuthCredentials_Params', [
      mojo.internal.StructField('arg_credentials', 0, 0, mojo.internal.bindings.network.mojom.AuthCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.AuthChallengeResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.AuthChallengeResponderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.AuthChallengeResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.AuthChallengeResponderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.AuthChallengeResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAuthCredentials(arg_credentials) {
    return this.$.onAuthCredentials(arg_credentials);
  }
};

mojo.internal.bindings.network.mojom.AuthChallengeResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AuthChallengeResponder', [
      { explicit: null },
    ]);
  }

  onAuthCredentials(arg_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec,
      null,
      [arg_credentials],
      false);
  }

};

mojo.internal.bindings.network.mojom.AuthChallengeResponder.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.AuthChallengeResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.AuthChallengeResponder',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.AuthChallengeResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AuthChallengeResponder', [
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
        
        // Try Method 0: OnAuthCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthCredentials (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthCredentials');
          const result = this.impl.onAuthCredentials(params.arg_credentials);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.AuthChallengeResponderReceiver = mojo.internal.bindings.network.mojom.AuthChallengeResponderReceiver;

mojo.internal.bindings.network.mojom.AuthChallengeResponderPtr = mojo.internal.bindings.network.mojom.AuthChallengeResponderRemote;
mojo.internal.bindings.network.mojom.AuthChallengeResponderRequest = mojo.internal.bindings.network.mojom.AuthChallengeResponderPendingReceiver;


// Interface: URLLoaderNetworkServiceObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ssl_info', 8, 0, mojo.internal.bindings.network.mojom.SSLInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_net_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fatal', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParams', [
      mojo.internal.StructField('arg_net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_Params', [
      mojo.internal.StructField('arg_window_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cert_info', 8, 0, mojo.internal.bindings.network.mojom.SSLCertRequestInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cert_responder', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ClientCertificateResponderSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_Params', [
      mojo.internal.StructField('arg_window_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_info', 16, 0, mojo.internal.bindings.network.mojom.AuthChallengeInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_head_headers', 24, 0, mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_challenge_responder', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.AuthChallengeResponderSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_first_auth_attempt', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_Params', [
      mojo.internal.StructField('arg_transport_type', 0, 0, mojo.internal.bindings.network.mojom.TransportTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address_space', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.network.mojom.LocalNetworkAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_header_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_partition_key', 16, 0, mojo.internal.bindings.network.mojom.CookiePartitionKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_load_flags', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_partitioned_state_allowed_only', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.network.mojom.LoadInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_Params', [
      mojo.internal.StructField('arg_recv_bytes', 0, 0, mojo.internal.bindings.mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sent_bytes', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_traffic_annotation_id_hash', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_Params', [
      mojo.internal.StructField('arg_request_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_methods_with_options', 8, 0, mojo.internal.bindings.network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_with_lock', 16, 0, mojo.internal.bindings.network.mojom.LockNameSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_Params', [
      mojo.internal.StructField('arg_ad_auction_event_record', 0, 0, mojo.internal.bindings.network.mojom.AdAuctionEventRecordSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_Clone_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_Params', [
      mojo.internal.StructField('arg_request_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address_space', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_Params', [
      mojo.internal.StructField('arg_request_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_address_space', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_address_space', 16, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_address_space', 24, 0, mojo.internal.bindings.network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderNetworkServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSSLCertificateError(arg_url, arg_net_error, arg_ssl_info, arg_fatal) {
    return this.$.onSSLCertificateError(arg_url, arg_net_error, arg_ssl_info, arg_fatal);
  }
  onCertificateRequested(arg_window_id, arg_cert_info, arg_cert_responder) {
    return this.$.onCertificateRequested(arg_window_id, arg_cert_info, arg_cert_responder);
  }
  onAuthRequired(arg_window_id, arg_request_id, arg_url, arg_first_auth_attempt, arg_auth_info, arg_head_headers, arg_auth_challenge_responder) {
    return this.$.onAuthRequired(arg_window_id, arg_request_id, arg_url, arg_first_auth_attempt, arg_auth_info, arg_head_headers, arg_auth_challenge_responder);
  }
  onLocalNetworkAccessPermissionRequired(arg_transport_type, arg_ip_address_space) {
    return this.$.onLocalNetworkAccessPermissionRequired(arg_transport_type, arg_ip_address_space);
  }
  onClearSiteData(arg_url, arg_header_value, arg_load_flags, arg_cookie_partition_key, arg_partitioned_state_allowed_only) {
    return this.$.onClearSiteData(arg_url, arg_header_value, arg_load_flags, arg_cookie_partition_key, arg_partitioned_state_allowed_only);
  }
  onLoadingStateUpdate(arg_info) {
    return this.$.onLoadingStateUpdate(arg_info);
  }
  onDataUseUpdate(arg_network_traffic_annotation_id_hash, arg_recv_bytes, arg_sent_bytes) {
    return this.$.onDataUseUpdate(arg_network_traffic_annotation_id_hash, arg_recv_bytes, arg_sent_bytes);
  }
  onSharedStorageHeaderReceived(arg_request_origin, arg_methods_with_options, arg_with_lock) {
    return this.$.onSharedStorageHeaderReceived(arg_request_origin, arg_methods_with_options, arg_with_lock);
  }
  onAdAuctionEventRecordHeaderReceived(arg_ad_auction_event_record, arg_top_frame_origin) {
    return this.$.onAdAuctionEventRecordHeaderReceived(arg_ad_auction_event_record, arg_top_frame_origin);
  }
  clone(arg_listener) {
    return this.$.clone(arg_listener);
  }
  onWebSocketConnectedToPrivateNetwork(arg_request_url, arg_ip_address_space) {
    return this.$.onWebSocketConnectedToPrivateNetwork(arg_request_url, arg_ip_address_space);
  }
  onUrlLoaderConnectedToPrivateNetwork(arg_request_url, arg_response_address_space, arg_client_address_space, arg_target_address_space) {
    return this.$.onUrlLoaderConnectedToPrivateNetwork(arg_request_url, arg_response_address_space, arg_client_address_space, arg_target_address_space);
  }
};

mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('URLLoaderNetworkServiceObserver', [
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

  onSSLCertificateError(arg_url, arg_net_error, arg_ssl_info, arg_fatal) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec,
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec,
      [arg_url, arg_net_error, arg_ssl_info, arg_fatal],
      false);
  }

  onCertificateRequested(arg_window_id, arg_cert_info, arg_cert_responder) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec,
      null,
      [arg_window_id, arg_cert_info, arg_cert_responder],
      false);
  }

  onAuthRequired(arg_window_id, arg_request_id, arg_url, arg_first_auth_attempt, arg_auth_info, arg_head_headers, arg_auth_challenge_responder) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec,
      null,
      [arg_window_id, arg_request_id, arg_url, arg_first_auth_attempt, arg_auth_info, arg_head_headers, arg_auth_challenge_responder],
      false);
  }

  onLocalNetworkAccessPermissionRequired(arg_transport_type, arg_ip_address_space) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec,
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec,
      [arg_transport_type, arg_ip_address_space],
      false);
  }

  onClearSiteData(arg_url, arg_header_value, arg_load_flags, arg_cookie_partition_key, arg_partitioned_state_allowed_only) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec,
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec,
      [arg_url, arg_header_value, arg_load_flags, arg_cookie_partition_key, arg_partitioned_state_allowed_only],
      false);
  }

  onLoadingStateUpdate(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec,
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec,
      [arg_info],
      false);
  }

  onDataUseUpdate(arg_network_traffic_annotation_id_hash, arg_recv_bytes, arg_sent_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec,
      null,
      [arg_network_traffic_annotation_id_hash, arg_recv_bytes, arg_sent_bytes],
      false);
  }

  onSharedStorageHeaderReceived(arg_request_origin, arg_methods_with_options, arg_with_lock) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec,
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec,
      [arg_request_origin, arg_methods_with_options, arg_with_lock],
      false);
  }

  onAdAuctionEventRecordHeaderReceived(arg_ad_auction_event_record, arg_top_frame_origin) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec,
      null,
      [arg_ad_auction_event_record, arg_top_frame_origin],
      false);
  }

  clone(arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec,
      null,
      [arg_listener],
      false);
  }

  onWebSocketConnectedToPrivateNetwork(arg_request_url, arg_ip_address_space) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec,
      null,
      [arg_request_url, arg_ip_address_space],
      false);
  }

  onUrlLoaderConnectedToPrivateNetwork(arg_request_url, arg_response_address_space, arg_client_address_space, arg_target_address_space) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec,
      null,
      [arg_request_url, arg_response_address_space, arg_client_address_space, arg_target_address_space],
      false);
  }

};

mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderNetworkServiceObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('URLLoaderNetworkServiceObserver', [
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
        
        // Try Method 0: OnSSLCertificateError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSSLCertificateError (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnCertificateRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCertificateRequested (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnAuthRequired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthRequired (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnLocalNetworkAccessPermissionRequired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocalNetworkAccessPermissionRequired (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnClearSiteData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClearSiteData (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnLoadingStateUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLoadingStateUpdate (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnDataUseUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDataUseUpdate (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnSharedStorageHeaderReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSharedStorageHeaderReceived (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnAdAuctionEventRecordHeaderReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAdAuctionEventRecordHeaderReceived (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnWebSocketConnectedToPrivateNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebSocketConnectedToPrivateNetwork (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnUrlLoaderConnectedToPrivateNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUrlLoaderConnectedToPrivateNetwork (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSSLCertificateError');
          const result = this.impl.onSSLCertificateError(params.arg_url, params.arg_net_error, params.arg_ssl_info, params.arg_fatal);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnSSLCertificateError FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCertificateRequested');
          const result = this.impl.onCertificateRequested(params.arg_window_id, params.arg_cert_info, params.arg_cert_responder);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthRequired');
          const result = this.impl.onAuthRequired(params.arg_window_id, params.arg_request_id, params.arg_url, params.arg_first_auth_attempt, params.arg_auth_info, params.arg_head_headers, params.arg_auth_challenge_responder);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalNetworkAccessPermissionRequired');
          const result = this.impl.onLocalNetworkAccessPermissionRequired(params.arg_transport_type, params.arg_ip_address_space);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnLocalNetworkAccessPermissionRequired FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClearSiteData');
          const result = this.impl.onClearSiteData(params.arg_url, params.arg_header_value, params.arg_load_flags, params.arg_cookie_partition_key, params.arg_partitioned_state_allowed_only);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnClearSiteData FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLoadingStateUpdate');
          const result = this.impl.onLoadingStateUpdate(params.arg_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnLoadingStateUpdate FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDataUseUpdate');
          const result = this.impl.onDataUseUpdate(params.arg_network_traffic_annotation_id_hash, params.arg_recv_bytes, params.arg_sent_bytes);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSharedStorageHeaderReceived');
          const result = this.impl.onSharedStorageHeaderReceived(params.arg_request_origin, params.arg_methods_with_options, params.arg_with_lock);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnSharedStorageHeaderReceived FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAdAuctionEventRecordHeaderReceived');
          const result = this.impl.onAdAuctionEventRecordHeaderReceived(params.arg_ad_auction_event_record, params.arg_top_frame_origin);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.arg_listener);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWebSocketConnectedToPrivateNetwork');
          const result = this.impl.onWebSocketConnectedToPrivateNetwork(params.arg_request_url, params.arg_ip_address_space);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUrlLoaderConnectedToPrivateNetwork');
          const result = this.impl.onUrlLoaderConnectedToPrivateNetwork(params.arg_request_url, params.arg_response_address_space, params.arg_client_address_space, params.arg_target_address_space);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverReceiver = mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverReceiver;

mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverPtr = mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote;
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRequest = mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverPendingReceiver;

