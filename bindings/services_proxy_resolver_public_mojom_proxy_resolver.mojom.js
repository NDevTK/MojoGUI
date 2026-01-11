// Auto-generated MojoJS binding
 // Source: chromium_src/services/proxy_resolver/public/mojom/proxy_resolver.mojom
 // Module: proxy_resolver.mojom

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
 

 mojo.internal.bindings.proxy_resolver = mojo.internal.bindings.proxy_resolver || {};
mojo.internal.bindings.proxy_resolver.mojom = mojo.internal.bindings.proxy_resolver.mojom || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.proxy_resolver.mojom.HostResolveOperationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.proxy_resolver.mojom.WinHttpStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.proxy_resolver.mojom.ProxyInfoSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolutionStatusSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient = {};
mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient.$interfaceName = 'proxy_resolver.mojom.HostResolverRequestClient';
mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver = {};
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver.$interfaceName = 'proxy_resolver.mojom.ProxyResolver';
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient = {};
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient.$interfaceName = 'proxy_resolver.mojom.ProxyResolverRequestClient';
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory = {};
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory.$interfaceName = 'proxy_resolver.mojom.ProxyResolverFactory';
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient = {};
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient.$interfaceName = 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient';
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver = {};
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver.$interfaceName = 'proxy_resolver.mojom.SystemProxyResolver';
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec = { $: {} };

// Enum: HostResolveOperation
mojo.internal.bindings.proxy_resolver.mojom.HostResolveOperation = {
  DNS_RESOLVE: 0,
  DNS_RESOLVE_EX: 1,
  MY_IP_ADDRESS: 2,
  MY_IP_ADDRESS_EX: 3,
};

// Enum: WinHttpStatus
mojo.internal.bindings.proxy_resolver.mojom.WinHttpStatus = {
  kOk: 0,
  kAborted: 1,
  kWinHttpOpenFailed: 2,
  kWinHttpSetTimeoutsFailed: 3,
  kWinHttpSetStatusCallbackFailed: 4,
  kWinHttpGetIEProxyConfigForCurrentUserFailed: 5,
  kWinHttpCreateProxyResolverFailed: 6,
  kWinHttpGetProxyForURLExFailed: 7,
  kStatusCallbackFailed: 8,
  kWinHttpGetProxyResultFailed: 9,
  kEmptyProxyList: 10,
};

// Struct: ProxyInfo
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyInfoSpec, 'proxy_resolver.mojom.ProxyInfo', [
      mojo.internal.StructField('arg_proxy_chains', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.ProxyChainSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SystemProxyResolutionStatus
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolutionStatusSpec, 'proxy_resolver.mojom.SystemProxyResolutionStatus', [
      mojo.internal.StructField('arg_win_http_status', 0, 0, mojo.internal.bindings.proxy_resolver.mojom.WinHttpStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_os_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_success', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: HostResolverRequestClient
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec, 'proxy_resolver.mojom.HostResolverRequestClient_ReportResult_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.IPAddressSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.HostResolverRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportResult(arg_error, arg_result) {
    return this.$.reportResult(arg_error, arg_result);
  }
};

mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HostResolverRequestClient', [
      { explicit: null },
    ]);
  }

  reportResult(arg_error, arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec,
      null,
      [arg_error, arg_result],
      false);
  }

};

mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient.getRemote = function() {
  let remote = new mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.HostResolverRequestClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HostResolverRequestClient', [
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
        
        // Try Method 0: ReportResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportResult (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClient_ReportResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportResult');
          const result = this.impl.reportResult(params.arg_error, params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientReceiver = mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientReceiver;

mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientPtr = mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientRemote;
mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientRequest = mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientPendingReceiver;


// Interface: ProxyResolver
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec, 'proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProxyForUrl(arg_url, arg_network_anonymization_key, arg_client) {
    return this.$.getProxyForUrl(arg_url, arg_network_anonymization_key, arg_client);
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolver', [
      { explicit: null },
    ]);
  }

  getProxyForUrl(arg_url, arg_network_anonymization_key, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec,
      null,
      [arg_url, arg_network_anonymization_key, arg_client],
      false);
  }

};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver.getRemote = function() {
  let remote = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolver',
    'context');
  return remote.$;
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolver', [
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
        
        // Try Method 0: GetProxyForUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProxyForUrl (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolver_GetProxyForUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProxyForUrl');
          const result = this.impl.getProxyForUrl(params.arg_url, params.arg_network_anonymization_key, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverReceiver = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverReceiver;

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverPtr = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRemote;
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequest = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverPendingReceiver;


// Interface: ProxyResolverRequestClient
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_Params', [
      mojo.internal.StructField('arg_proxy_info', 0, 0, mojo.internal.bindings.proxy_resolver.mojom.ProxyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_Alert_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_OnError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_operation', 8, 0, mojo.internal.bindings.proxy_resolver.mojom.HostResolveOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportResult(arg_error, arg_proxy_info) {
    return this.$.reportResult(arg_error, arg_proxy_info);
  }
  alert(arg_error) {
    return this.$.alert(arg_error);
  }
  onError(arg_line_number, arg_error) {
    return this.$.onError(arg_line_number, arg_error);
  }
  resolveDns(arg_host, arg_operation, arg_network_anonymization_key, arg_client) {
    return this.$.resolveDns(arg_host, arg_operation, arg_network_anonymization_key, arg_client);
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolverRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  reportResult(arg_error, arg_proxy_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec,
      null,
      [arg_error, arg_proxy_info],
      false);
  }

  alert(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec,
      null,
      [arg_error],
      false);
  }

  onError(arg_line_number, arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec,
      null,
      [arg_line_number, arg_error],
      false);
  }

  resolveDns(arg_host, arg_operation, arg_network_anonymization_key, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec,
      null,
      [arg_host, arg_operation, arg_network_anonymization_key, arg_client],
      false);
  }

};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient.getRemote = function() {
  let remote = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverRequestClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolverRequestClient', [
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
        
        // Try Method 0: ReportResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Alert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Alert (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ResolveDns
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveDns (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ReportResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportResult');
          const result = this.impl.reportResult(params.arg_error, params.arg_proxy_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_Alert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.alert');
          const result = this.impl.alert(params.arg_error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_line_number, params.arg_error);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClient_ResolveDns_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveDns');
          const result = this.impl.resolveDns(params.arg_host, params.arg_operation, params.arg_network_anonymization_key, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientReceiver = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientReceiver;

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientPtr = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientRemote;
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientRequest = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverRequestClientPendingReceiver;


// Interface: ProxyResolverFactory
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_Params', [
      mojo.internal.StructField('arg_pac_script', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createResolver(arg_pac_script, arg_receiver, arg_client) {
    return this.$.createResolver(arg_pac_script, arg_receiver, arg_client);
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactory', [
      { explicit: null },
    ]);
  }

  createResolver(arg_pac_script, arg_receiver, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec,
      null,
      [arg_pac_script, arg_receiver, arg_client],
      false);
  }

};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactory', [
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
        
        // Try Method 0: CreateResolver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateResolver (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactory_CreateResolver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createResolver');
          const result = this.impl.createResolver(params.arg_pac_script, params.arg_receiver, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryReceiver = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryReceiver;

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryPtr = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemote;
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequest = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryPendingReceiver;


// Interface: ProxyResolverFactoryRequestClient
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec, 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_operation', 8, 0, mojo.internal.bindings.proxy_resolver.mojom.HostResolveOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.HostResolverRequestClientSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.ProxyResolverFactoryRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportResult(arg_error) {
    return this.$.reportResult(arg_error);
  }
  alert(arg_error) {
    return this.$.alert(arg_error);
  }
  onError(arg_line_number, arg_error) {
    return this.$.onError(arg_line_number, arg_error);
  }
  resolveDns(arg_host, arg_operation, arg_network_anonymization_key, arg_client) {
    return this.$.resolveDns(arg_host, arg_operation, arg_network_anonymization_key, arg_client);
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactoryRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  reportResult(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec,
      null,
      [arg_error],
      false);
  }

  alert(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec,
      null,
      [arg_error],
      false);
  }

  onError(arg_line_number, arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec,
      null,
      [arg_line_number, arg_error],
      false);
  }

  resolveDns(arg_host, arg_operation, arg_network_anonymization_key, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec,
      null,
      [arg_host, arg_operation, arg_network_anonymization_key, arg_client],
      false);
  }

};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient.getRemote = function() {
  let remote = new mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.ProxyResolverFactoryRequestClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProxyResolverFactoryRequestClient', [
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
        
        // Try Method 0: ReportResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Alert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Alert (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ResolveDns
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveDns (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ReportResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportResult');
          const result = this.impl.reportResult(params.arg_error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_Alert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.alert');
          const result = this.impl.alert(params.arg_error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_line_number, params.arg_error);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClient_ResolveDns_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveDns');
          const result = this.impl.resolveDns(params.arg_host, params.arg_operation, params.arg_network_anonymization_key, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientReceiver = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientReceiver;

mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientPtr = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientRemote;
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientRequest = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRequestClientPendingReceiver;


// Interface: SystemProxyResolver
mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec, 'proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec, 'proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParams', [
      mojo.internal.StructField('arg_proxy_list', 0, 0, mojo.internal.bindings.network.mojom.ProxyListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolutionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemote = class {
  static get $interfaceName() {
    return 'proxy_resolver.mojom.SystemProxyResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProxyForUrl(arg_url) {
    return this.$.getProxyForUrl(arg_url);
  }
};

mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemProxyResolver', [
      { explicit: null },
    ]);
  }

  getProxyForUrl(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec,
      mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec,
      [arg_url],
      false);
  }

};

mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver.getRemote = function() {
  let remote = new mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'proxy_resolver.mojom.SystemProxyResolver',
    'context');
  return remote.$;
};

mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemProxyResolver', [
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
        
        // Try Method 0: GetProxyForUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProxyForUrl (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProxyForUrl');
          const result = this.impl.getProxyForUrl(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolver_GetProxyForUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProxyForUrl FAILED:', e));
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

mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverReceiver = mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverReceiver;

mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverPtr = mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemote;
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRequest = mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverPendingReceiver;

