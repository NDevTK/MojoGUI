// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/cert_verifier_service.mojom
 // Module: cert_verifier.mojom

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
 

 mojo.internal.bindings.cert_verifier = mojo.internal.bindings.cert_verifier || {};
mojo.internal.bindings.cert_verifier.mojom = mojo.internal.bindings.cert_verifier.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};

mojo.internal.bindings.cert_verifier.mojom.RequestParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierConfigSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector = {};
mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector.$interfaceName = 'cert_verifier.mojom.URLLoaderFactoryConnector';
mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierService = {};
mojo.internal.bindings.cert_verifier.mojom.CertVerifierService.$interfaceName = 'cert_verifier.mojom.CertVerifierService';
mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient = {};
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient.$interfaceName = 'cert_verifier.mojom.CertVerifierServiceClient';
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest = {};
mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest.$interfaceName = 'cert_verifier.mojom.CertVerifierRequest';
mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec = { $: {} };

// Struct: RequestParams
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.RequestParamsSpec, 'cert_verifier.mojom.RequestParams', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ocsp_response', 16, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sct_list', 24, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_flags', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CertVerifierConfig
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierConfigSpec, 'cert_verifier.mojom.CertVerifierConfig', [
      mojo.internal.StructField('arg_enable_rev_checking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_rev_checking_local_anchors', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_sha1_local_anchors', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: URLLoaderFactoryConnector
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec, 'cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_Params', [
      mojo.internal.StructField('arg_url_loader_factory', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.URLLoaderFactoryConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createURLLoaderFactory(arg_url_loader_factory) {
    return this.$.createURLLoaderFactory(arg_url_loader_factory);
  }
};

mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('URLLoaderFactoryConnector', [
      { explicit: null },
    ]);
  }

  createURLLoaderFactory(arg_url_loader_factory) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec,
      null,
      [arg_url_loader_factory],
      false);
  }

};

mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector.getRemote = function() {
  let remote = new mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.URLLoaderFactoryConnector',
    'context');
  return remote.$;
};

mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('URLLoaderFactoryConnector', [
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
        
        // Try Method 0: CreateURLLoaderFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateURLLoaderFactory (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createURLLoaderFactory');
          const result = this.impl.createURLLoaderFactory(params.arg_url_loader_factory);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorReceiver = mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorReceiver;

mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorPtr = mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorRemote;
mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorRequest = mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorPendingReceiver;


// Interface: CertVerifierService
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_Params', [
      mojo.internal.StructField('arg_url_loader_factory', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_reconnector', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cert_verifier.mojom.URLLoaderFactoryConnectorSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.cert_verifier.mojom.RequestParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_net_log_source', 8, 0, mojo.internal.bindings.network.mojom.NetLogSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cert_verifier_request', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_Params', [
      mojo.internal.StructField('arg_binding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tls_certificate', 16, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_net_log_source', 24, 0, mojo.internal.bindings.network.mojom.NetLogSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParams', [
      mojo.internal.StructField('arg_verified_cert', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_SetConfig_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.cert_verifier.mojom.CertVerifierConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enableNetworkAccess(arg_url_loader_factory, arg_reconnector) {
    return this.$.enableNetworkAccess(arg_url_loader_factory, arg_reconnector);
  }
  verify(arg_params, arg_net_log_source, arg_cert_verifier_request) {
    return this.$.verify(arg_params, arg_net_log_source, arg_cert_verifier_request);
  }
  verify2QwacBinding(arg_binding, arg_hostname, arg_tls_certificate, arg_net_log_source) {
    return this.$.verify2QwacBinding(arg_binding, arg_hostname, arg_tls_certificate, arg_net_log_source);
  }
  setConfig(arg_config) {
    return this.$.setConfig(arg_config);
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  enableNetworkAccess(arg_url_loader_factory, arg_reconnector) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec,
      null,
      [arg_url_loader_factory, arg_reconnector],
      false);
  }

  verify(arg_params, arg_net_log_source, arg_cert_verifier_request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec,
      null,
      [arg_params, arg_net_log_source, arg_cert_verifier_request],
      false);
  }

  verify2QwacBinding(arg_binding, arg_hostname, arg_tls_certificate, arg_net_log_source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec,
      [arg_binding, arg_hostname, arg_tls_certificate, arg_net_log_source],
      false);
  }

  setConfig(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec,
      null,
      [arg_config],
      false);
  }

};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierService.getRemote = function() {
  let remote = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierService',
    'context');
  return remote.$;
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierService', [
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
        
        // Try Method 0: EnableNetworkAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableNetworkAccess (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Verify
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Verify (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Verify2QwacBinding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Verify2QwacBinding (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetConfig (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableNetworkAccess');
          const result = this.impl.enableNetworkAccess(params.arg_url_loader_factory, params.arg_reconnector);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verify');
          const result = this.impl.verify(params.arg_params, params.arg_net_log_source, params.arg_cert_verifier_request);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verify2QwacBinding');
          const result = this.impl.verify2QwacBinding(params.arg_binding, params.arg_hostname, params.arg_tls_certificate, params.arg_net_log_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Verify2QwacBinding FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setConfig');
          const result = this.impl.setConfig(params.arg_config);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceReceiver = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceReceiver;

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServicePtr = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote;
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRequest = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServicePendingReceiver;


// Interface: CertVerifierServiceClient
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCertVerifierChanged() {
    return this.$.onCertVerifierChanged();
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceClient', [
      { explicit: null },
    ]);
  }

  onCertVerifierChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierServiceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceClient', [
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
        
        // Try Method 0: OnCertVerifierChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCertVerifierChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCertVerifierChanged');
          const result = this.impl.onCertVerifierChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientReceiver = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientReceiver;

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientPtr = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote;
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRequest = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientPendingReceiver;


// Interface: CertVerifierRequest
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec, 'cert_verifier.mojom.CertVerifierRequest_Complete_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  complete(arg_result, arg_net_error) {
    return this.$.complete(arg_result, arg_net_error);
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierRequest', [
      { explicit: null },
    ]);
  }

  complete(arg_result, arg_net_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec,
      null,
      [arg_result, arg_net_error],
      false);
  }

};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest.getRemote = function() {
  let remote = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierRequest',
    'context');
  return remote.$;
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierRequest', [
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
        
        // Try Method 0: Complete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Complete (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.complete');
          const result = this.impl.complete(params.arg_result, params.arg_net_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestReceiver = mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestReceiver;

mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestPtr = mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestRemote;
mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestRequest = mojo.internal.bindings.cert_verifier.mojom.CertVerifierRequestPendingReceiver;

