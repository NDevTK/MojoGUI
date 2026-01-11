// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/common/plugin.mojom
 // Module: chrome.mojom

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
 

 mojo.internal.bindings.chrome = mojo.internal.bindings.chrome || {};
mojo.internal.bindings.chrome.mojom = mojo.internal.bindings.chrome.mojom || {};
mojo.internal.bindings.content = mojo.internal.bindings.content || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chrome.mojom.PluginStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.PluginInfoSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.PluginParamSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.PluginHost = {};
mojo.internal.bindings.chrome.mojom.PluginHostSpec = { $ : {} };
mojo.internal.bindings.chrome.mojom.PluginHost.$interfaceName = 'chrome.mojom.PluginHost';
mojo.internal.bindings.chrome.mojom.PluginHost_OpenPDF_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.PluginAuthHost = {};
mojo.internal.bindings.chrome.mojom.PluginAuthHostSpec = { $ : {} };
mojo.internal.bindings.chrome.mojom.PluginAuthHost.$interfaceName = 'chrome.mojom.PluginAuthHost';
mojo.internal.bindings.chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.PluginInfoHost = {};
mojo.internal.bindings.chrome.mojom.PluginInfoHostSpec = { $ : {} };
mojo.internal.bindings.chrome.mojom.PluginInfoHost.$interfaceName = 'chrome.mojom.PluginInfoHost';
mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec = { $: {} };

// Enum: PluginStatus
mojo.internal.bindings.chrome.mojom.PluginStatus = {
  kAllowed: 0,
  kBlocked: 1,
  kBlockedByPolicy: 2,
  kDisabled: 3,
  kNotFound: 4,
  kUnauthorized: 5,
};

// Struct: PluginInfo
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.PluginInfoSpec, 'chrome.mojom.PluginInfo', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.chrome.mojom.PluginStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_plugin', 8, 0, mojo.internal.bindings.content.mojom.WebPluginInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_actual_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_identifier', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_name', 32, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PluginParam
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.PluginParamSpec, 'chrome.mojom.PluginParam', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PluginHost
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.PluginHost_OpenPDF_ParamsSpec, 'chrome.mojom.PluginHost_OpenPDF_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.PluginHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.PluginHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.PluginHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.PluginHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openPDF(arg_url) {
    return this.$.openPDF(arg_url);
  }
};

mojo.internal.bindings.chrome.mojom.PluginHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.PluginHost', [
      { explicit: null },
    ]);
  }

  openPDF(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.PluginHost_OpenPDF_ParamsSpec,
      null,
      [arg_url],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.PluginHost.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.PluginHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.PluginHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.PluginHost', [
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
        
        // Try Method 0: OpenPDF
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.PluginHost_OpenPDF_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenPDF (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.PluginHost_OpenPDF_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPDF');
          const result = this.impl.openPDF(params.arg_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.PluginHostReceiver = mojo.internal.bindings.chrome.mojom.PluginHostReceiver;

mojo.internal.bindings.chrome.mojom.PluginHostPtr = mojo.internal.bindings.chrome.mojom.PluginHostRemote;
mojo.internal.bindings.chrome.mojom.PluginHostRequest = mojo.internal.bindings.chrome.mojom.PluginHostPendingReceiver;


// Interface: PluginAuthHost
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec, 'chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.chrome.mojom.PluginAuthHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.PluginAuthHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginAuthHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.PluginAuthHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.PluginAuthHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  blockedUnauthorizedPlugin(arg_name, arg_group_id) {
    return this.$.blockedUnauthorizedPlugin(arg_name, arg_group_id);
  }
};

mojo.internal.bindings.chrome.mojom.PluginAuthHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.PluginAuthHost', [
      { explicit: null },
    ]);
  }

  blockedUnauthorizedPlugin(arg_name, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec,
      null,
      [arg_name, arg_group_id],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.PluginAuthHost.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.PluginAuthHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginAuthHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.PluginAuthHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.PluginAuthHost', [
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
        
        // Try Method 0: BlockedUnauthorizedPlugin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockedUnauthorizedPlugin (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blockedUnauthorizedPlugin');
          const result = this.impl.blockedUnauthorizedPlugin(params.arg_name, params.arg_group_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.PluginAuthHostReceiver = mojo.internal.bindings.chrome.mojom.PluginAuthHostReceiver;

mojo.internal.bindings.chrome.mojom.PluginAuthHostPtr = mojo.internal.bindings.chrome.mojom.PluginAuthHostRemote;
mojo.internal.bindings.chrome.mojom.PluginAuthHostRequest = mojo.internal.bindings.chrome.mojom.PluginAuthHostPendingReceiver;


// Interface: PluginInfoHost
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec, 'chrome.mojom.PluginInfoHost_GetPluginInfo_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec, 'chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParams', [
      mojo.internal.StructField('arg_plugin_info', 0, 0, mojo.internal.bindings.chrome.mojom.PluginInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.PluginInfoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.PluginInfoHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginInfoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.PluginInfoHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.PluginInfoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPluginInfo(arg_url, arg_origin, arg_mime_type) {
    return this.$.getPluginInfo(arg_url, arg_origin, arg_mime_type);
  }
};

mojo.internal.bindings.chrome.mojom.PluginInfoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.PluginInfoHost', [
      { explicit: null },
    ]);
  }

  getPluginInfo(arg_url, arg_origin, arg_mime_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec,
      [arg_url, arg_origin, arg_mime_type],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.PluginInfoHost.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.PluginInfoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginInfoHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.PluginInfoHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.PluginInfoHost', [
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
        
        // Try Method 0: GetPluginInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPluginInfo (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPluginInfo');
          const result = this.impl.getPluginInfo(params.arg_url, params.arg_origin, params.arg_mime_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPluginInfo FAILED:', e));
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

mojo.internal.bindings.chrome.mojom.PluginInfoHostReceiver = mojo.internal.bindings.chrome.mojom.PluginInfoHostReceiver;

mojo.internal.bindings.chrome.mojom.PluginInfoHostPtr = mojo.internal.bindings.chrome.mojom.PluginInfoHostRemote;
mojo.internal.bindings.chrome.mojom.PluginInfoHostRequest = mojo.internal.bindings.chrome.mojom.PluginInfoHostPendingReceiver;

