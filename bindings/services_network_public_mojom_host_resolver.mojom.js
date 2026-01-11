// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/host_resolver.mojom
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

mojo.internal.bindings.network.mojom.OptionalSecureDnsModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.SecureDnsModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.SecureDnsPolicySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.TristateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DnsQueryTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.SourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CacheUsageSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.PurposeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.UpdateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.HostResolverHostSpec = { $: {} };
mojo.internal.bindings.network.mojom.DnsOverHttpsServerConfigSpec = { $: {} };
mojo.internal.bindings.network.mojom.DnsOverHttpsConfigSpec = { $: {} };
mojo.internal.bindings.network.mojom.DnsConfigOverridesSpec = { $: {} };
mojo.internal.bindings.network.mojom.ResolveHostParametersSpec = { $: {} };
mojo.internal.bindings.network.mojom.ResolveHostHandle = {};
mojo.internal.bindings.network.mojom.ResolveHostHandle.$interfaceName = 'network.mojom.ResolveHostHandle';
mojo.internal.bindings.network.mojom.ResolveHostHandle_Cancel_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.ResolveHostClient = {};
mojo.internal.bindings.network.mojom.ResolveHostClient.$interfaceName = 'network.mojom.ResolveHostClient';
mojo.internal.bindings.network.mojom.ResolveHostClient_OnComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.ResolveHostClient_OnTextResults_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.MdnsListenClient = {};
mojo.internal.bindings.network.mojom.MdnsListenClient.$interfaceName = 'network.mojom.MdnsListenClient';
mojo.internal.bindings.network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.MdnsListenClient_OnTextResult_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HostResolver = {};
mojo.internal.bindings.network.mojom.HostResolver.$interfaceName = 'network.mojom.HostResolver';
mojo.internal.bindings.network.mojom.HostResolver_ResolveHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient = {};
mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient.$interfaceName = 'network.mojom.DnsConfigChangeManagerClient';
mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DnsConfigChangeManager = {};
mojo.internal.bindings.network.mojom.DnsConfigChangeManager.$interfaceName = 'network.mojom.DnsConfigChangeManager';
mojo.internal.bindings.network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec = { $: {} };

// Enum: OptionalSecureDnsMode
mojo.internal.bindings.network.mojom.OptionalSecureDnsMode = {
  NO_OVERRIDE: 0,
  OFF: 1,
  AUTOMATIC: 2,
  SECURE: 3,
};

// Enum: SecureDnsMode
mojo.internal.bindings.network.mojom.SecureDnsMode = {
  OFF: 0,
  AUTOMATIC: 1,
  SECURE: 2,
};

// Enum: SecureDnsPolicy
mojo.internal.bindings.network.mojom.SecureDnsPolicy = {
  ALLOW: 0,
  DISABLE: 1,
};

// Enum: Tristate
mojo.internal.bindings.network.mojom.Tristate = {
  NO_OVERRIDE: 0,
  TRISTATE_TRUE: 1,
  TRISTATE_FALSE: 2,
};

// Enum: DnsQueryType
mojo.internal.bindings.network.mojom.DnsQueryType = {
  UNSPECIFIED: 0,
  A: 1,
  AAAA: 2,
  TXT: 3,
  PTR: 4,
  SRV: 5,
  HTTPS: 6,
};

// Enum: Source
mojo.internal.bindings.network.mojom.Source = {
  ANY: 0,
  SYSTEM: 1,
  DNS: 2,
  MULTICAST_DNS: 3,
  LOCAL_ONLY: 4,
};

// Enum: CacheUsage
mojo.internal.bindings.network.mojom.CacheUsage = {
  ALLOWED: 0,
  STALE_ALLOWED: 1,
  DISALLOWED: 2,
};

// Enum: Purpose
mojo.internal.bindings.network.mojom.Purpose = {
  kUnspecified: 0,
  kPreconnect: 1,
};

// Enum: UpdateType
mojo.internal.bindings.network.mojom.UpdateType = {
  ADDED: 0,
  CHANGED: 1,
  REMOVED: 2,
};

// Union: HostResolverHost
mojo.internal.Union(
    mojo.internal.bindings.network.mojom.HostResolverHostSpec, 'network.mojom.HostResolverHost', {
      'arg_scheme_host_port': {
        'ordinal': 0,
        'type': mojo.internal.bindings.url.mojom.SchemeHostPortSpec.$,
        'nullable': false,
      },
      'arg_host_port_pair': {
        'ordinal': 1,
        'type': mojo.internal.bindings.network.mojom.HostPortPairSpec.$,
        'nullable': false,
      },
    });

// Struct: DnsOverHttpsServerConfig
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DnsOverHttpsServerConfigSpec, 'network.mojom.DnsOverHttpsServerConfig', [
      mojo.internal.StructField('arg_server_template', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoints', 8, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.bindings.network.mojom.IPAddressSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DnsOverHttpsConfig
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DnsOverHttpsConfigSpec, 'network.mojom.DnsOverHttpsConfig', [
      mojo.internal.StructField('arg_servers', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DnsOverHttpsServerConfigSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DnsConfigOverrides
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DnsConfigOverridesSpec, 'network.mojom.DnsConfigOverrides', [
      mojo.internal.StructField('arg_NO_OVERRIDE', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.bindings.network.mojom.TRISTATE_TRUESpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.bindings.network.mojom.TRISTATE_FALSESpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ResolveHostParameters
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ResolveHostParametersSpec, 'network.mojom.ResolveHostParameters', [
      mojo.internal.StructField('arg_dns_query_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DnsQueryTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_initial_priority', 8, 0, mojo.internal.bindings.network.mojom.RequestPrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ANY', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.bindings.network.mojom.SYSTEMSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.bindings.network.mojom.DNSSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.bindings.network.mojom.MULTICAST_DNSSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.bindings.network.mojom.LOCAL_ONLYSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: ResolveHostHandle
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ResolveHostHandle_Cancel_ParamsSpec, 'network.mojom.ResolveHostHandle_Cancel_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.ResolveHostHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.ResolveHostHandleRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ResolveHostHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.ResolveHostHandlePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.ResolveHostHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cancel(arg_result) {
    return this.$.cancel(arg_result);
  }
};

mojo.internal.bindings.network.mojom.ResolveHostHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResolveHostHandle', [
      { explicit: null },
    ]);
  }

  cancel(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.ResolveHostHandle_Cancel_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.network.mojom.ResolveHostHandle.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.ResolveHostHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ResolveHostHandle',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.ResolveHostHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResolveHostHandle', [
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
        
        // Try Method 0: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostHandle_Cancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostHandle_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.ResolveHostHandleReceiver = mojo.internal.bindings.network.mojom.ResolveHostHandleReceiver;

mojo.internal.bindings.network.mojom.ResolveHostHandlePtr = mojo.internal.bindings.network.mojom.ResolveHostHandleRemote;
mojo.internal.bindings.network.mojom.ResolveHostHandleRequest = mojo.internal.bindings.network.mojom.ResolveHostHandlePendingReceiver;


// Interface: ResolveHostClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ResolveHostClient_OnComplete_ParamsSpec, 'network.mojom.ResolveHostClient_OnComplete_Params', [
      mojo.internal.StructField('arg_resolve_error_info', 0, 0, mojo.internal.bindings.network.mojom.ResolveErrorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resolved_addresses', 8, 0, mojo.internal.bindings.network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_alternative_endpoints', 16, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.HostResolverEndpointResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ResolveHostClient_OnTextResults_ParamsSpec, 'network.mojom.ResolveHostClient_OnTextResults_Params', [
      mojo.internal.StructField('arg_text_results', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec, 'network.mojom.ResolveHostClient_OnHostnameResults_Params', [
      mojo.internal.StructField('arg_hosts', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.HostPortPairSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.ResolveHostClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.ResolveHostClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ResolveHostClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.ResolveHostClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.ResolveHostClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onComplete(arg_result, arg_resolve_error_info, arg_resolved_addresses, arg_alternative_endpoints) {
    return this.$.onComplete(arg_result, arg_resolve_error_info, arg_resolved_addresses, arg_alternative_endpoints);
  }
  onTextResults(arg_text_results) {
    return this.$.onTextResults(arg_text_results);
  }
  onHostnameResults(arg_hosts) {
    return this.$.onHostnameResults(arg_hosts);
  }
};

mojo.internal.bindings.network.mojom.ResolveHostClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResolveHostClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onComplete(arg_result, arg_resolve_error_info, arg_resolved_addresses, arg_alternative_endpoints) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.ResolveHostClient_OnComplete_ParamsSpec,
      null,
      [arg_result, arg_resolve_error_info, arg_resolved_addresses, arg_alternative_endpoints],
      false);
  }

  onTextResults(arg_text_results) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.ResolveHostClient_OnTextResults_ParamsSpec,
      null,
      [arg_text_results],
      false);
  }

  onHostnameResults(arg_hosts) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec,
      null,
      [arg_hosts],
      false);
  }

};

mojo.internal.bindings.network.mojom.ResolveHostClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.ResolveHostClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ResolveHostClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.ResolveHostClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResolveHostClient', [
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
        
        // Try Method 0: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostClient_OnComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTextResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostClient_OnTextResults_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTextResults (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnHostnameResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostnameResults (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostClient_OnComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.arg_result, params.arg_resolve_error_info, params.arg_resolved_addresses, params.arg_alternative_endpoints);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostClient_OnTextResults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTextResults');
          const result = this.impl.onTextResults(params.arg_text_results);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.ResolveHostClient_OnHostnameResults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostnameResults');
          const result = this.impl.onHostnameResults(params.arg_hosts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.ResolveHostClientReceiver = mojo.internal.bindings.network.mojom.ResolveHostClientReceiver;

mojo.internal.bindings.network.mojom.ResolveHostClientPtr = mojo.internal.bindings.network.mojom.ResolveHostClientRemote;
mojo.internal.bindings.network.mojom.ResolveHostClientRequest = mojo.internal.bindings.network.mojom.ResolveHostClientPendingReceiver;


// Interface: MdnsListenClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnAddressResult_Params', [
      mojo.internal.StructField('arg_update_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_query_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 16, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.MdnsListenClient_OnTextResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnTextResult_Params', [
      mojo.internal.StructField('arg_update_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_query_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_records', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnHostnameResult_Params', [
      mojo.internal.StructField('arg_update_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_query_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 16, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec, 'network.mojom.MdnsListenClient_OnUnhandledResult_Params', [
      mojo.internal.StructField('arg_update_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.UpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_query_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.MdnsListenClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.MdnsListenClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.MdnsListenClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.MdnsListenClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.MdnsListenClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAddressResult(arg_update_type, arg_query_type, arg_endpoint) {
    return this.$.onAddressResult(arg_update_type, arg_query_type, arg_endpoint);
  }
  onTextResult(arg_update_type, arg_query_type, arg_text_records) {
    return this.$.onTextResult(arg_update_type, arg_query_type, arg_text_records);
  }
  onHostnameResult(arg_update_type, arg_query_type, arg_host) {
    return this.$.onHostnameResult(arg_update_type, arg_query_type, arg_host);
  }
  onUnhandledResult(arg_update_type, arg_query_type) {
    return this.$.onUnhandledResult(arg_update_type, arg_query_type);
  }
};

mojo.internal.bindings.network.mojom.MdnsListenClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MdnsListenClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAddressResult(arg_update_type, arg_query_type, arg_endpoint) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec,
      null,
      [arg_update_type, arg_query_type, arg_endpoint],
      false);
  }

  onTextResult(arg_update_type, arg_query_type, arg_text_records) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.MdnsListenClient_OnTextResult_ParamsSpec,
      null,
      [arg_update_type, arg_query_type, arg_text_records],
      false);
  }

  onHostnameResult(arg_update_type, arg_query_type, arg_host) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec,
      null,
      [arg_update_type, arg_query_type, arg_host],
      false);
  }

  onUnhandledResult(arg_update_type, arg_query_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec,
      null,
      [arg_update_type, arg_query_type],
      false);
  }

};

mojo.internal.bindings.network.mojom.MdnsListenClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.MdnsListenClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.MdnsListenClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.MdnsListenClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MdnsListenClient', [
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
        
        // Try Method 0: OnAddressResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAddressResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTextResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnTextResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTextResult (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnHostnameResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostnameResult (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnUnhandledResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUnhandledResult (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnAddressResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAddressResult');
          const result = this.impl.onAddressResult(params.arg_update_type, params.arg_query_type, params.arg_endpoint);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnTextResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTextResult');
          const result = this.impl.onTextResult(params.arg_update_type, params.arg_query_type, params.arg_text_records);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnHostnameResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostnameResult');
          const result = this.impl.onHostnameResult(params.arg_update_type, params.arg_query_type, params.arg_host);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.MdnsListenClient_OnUnhandledResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUnhandledResult');
          const result = this.impl.onUnhandledResult(params.arg_update_type, params.arg_query_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.MdnsListenClientReceiver = mojo.internal.bindings.network.mojom.MdnsListenClientReceiver;

mojo.internal.bindings.network.mojom.MdnsListenClientPtr = mojo.internal.bindings.network.mojom.MdnsListenClientRemote;
mojo.internal.bindings.network.mojom.MdnsListenClientRequest = mojo.internal.bindings.network.mojom.MdnsListenClientPendingReceiver;


// Interface: HostResolver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HostResolver_ResolveHost_ParamsSpec, 'network.mojom.HostResolver_ResolveHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.network.mojom.HostResolverHostSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_optional_parameters', 16, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ResolveHostParametersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_response_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ResolveHostClientSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ParamsSpec, 'network.mojom.HostResolver_MdnsListen_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_query_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.MdnsListenClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ResponseParamsSpec, 'network.mojom.HostResolver_MdnsListen_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.HostResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.HostResolverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.HostResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.HostResolverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.HostResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client) {
    return this.$.resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client);
  }
  mdnsListen(arg_host, arg_query_type, arg_response_client) {
    return this.$.mdnsListen(arg_host, arg_query_type, arg_response_client);
  }
};

mojo.internal.bindings.network.mojom.HostResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HostResolver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.HostResolver_ResolveHost_ParamsSpec,
      null,
      [arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client],
      false);
  }

  mdnsListen(arg_host, arg_query_type, arg_response_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ParamsSpec,
      mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ResponseParamsSpec,
      [arg_host, arg_query_type, arg_response_client],
      false);
  }

};

mojo.internal.bindings.network.mojom.HostResolver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.HostResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.HostResolver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.HostResolverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HostResolver', [
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
        
        // Try Method 0: ResolveHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HostResolver_ResolveHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveHost (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MdnsListen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MdnsListen (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HostResolver_ResolveHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveHost');
          const result = this.impl.resolveHost(params.arg_host, params.arg_network_anonymization_key, params.arg_optional_parameters, params.arg_response_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mdnsListen');
          const result = this.impl.mdnsListen(params.arg_host, params.arg_query_type, params.arg_response_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HostResolver_MdnsListen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MdnsListen FAILED:', e));
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

mojo.internal.bindings.network.mojom.HostResolverReceiver = mojo.internal.bindings.network.mojom.HostResolverReceiver;

mojo.internal.bindings.network.mojom.HostResolverPtr = mojo.internal.bindings.network.mojom.HostResolverRemote;
mojo.internal.bindings.network.mojom.HostResolverRequest = mojo.internal.bindings.network.mojom.HostResolverPendingReceiver;


// Interface: DnsConfigChangeManagerClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec, 'network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DnsConfigChangeManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDnsConfigChanged() {
    return this.$.onDnsConfigChanged();
  }
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManagerClient', [
      { explicit: null },
    ]);
  }

  onDnsConfigChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DnsConfigChangeManagerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManagerClient', [
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
        
        // Try Method 0: OnDnsConfigChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDnsConfigChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClient_OnDnsConfigChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDnsConfigChanged');
          const result = this.impl.onDnsConfigChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientReceiver = mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientReceiver;

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientPtr = mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientRemote;
mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientRequest = mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientPendingReceiver;


// Interface: DnsConfigChangeManager
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec, 'network.mojom.DnsConfigChangeManager_RequestNotifications_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DnsConfigChangeManagerClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DnsConfigChangeManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.DnsConfigChangeManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.DnsConfigChangeManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestNotifications(arg_client) {
    return this.$.requestNotifications(arg_client);
  }
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManager', [
      { explicit: null },
    ]);
  }

  requestNotifications(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec,
      null,
      [arg_client],
      false);
  }

};

mojo.internal.bindings.network.mojom.DnsConfigChangeManager.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.DnsConfigChangeManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DnsConfigChangeManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DnsConfigChangeManager', [
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
        
        // Try Method 0: RequestNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNotifications (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DnsConfigChangeManager_RequestNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNotifications');
          const result = this.impl.requestNotifications(params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerReceiver = mojo.internal.bindings.network.mojom.DnsConfigChangeManagerReceiver;

mojo.internal.bindings.network.mojom.DnsConfigChangeManagerPtr = mojo.internal.bindings.network.mojom.DnsConfigChangeManagerRemote;
mojo.internal.bindings.network.mojom.DnsConfigChangeManagerRequest = mojo.internal.bindings.network.mojom.DnsConfigChangeManagerPendingReceiver;

