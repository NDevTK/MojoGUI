// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/login.mojom
// Module: crosapi.mojom

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
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.SamlUserSessionPropertiesSpec = { $: {} };
crosapi.mojom.ExternalLogoutRequestObserver = {};
crosapi.mojom.ExternalLogoutRequestObserver.$interfaceName = 'crosapi.mojom.ExternalLogoutRequestObserver';
crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec = { $: {} };
crosapi.mojom.Login = {};
crosapi.mojom.Login.$interfaceName = 'crosapi.mojom.Login';
crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec = { $: {} };
crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_0_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_4_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_5_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_6_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_7_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_10_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_12_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec = { $: {} };

// Struct: SamlUserSessionProperties
mojo.internal.Struct(
    crosapi.mojom.SamlUserSessionPropertiesSpec, 'crosapi.mojom.SamlUserSessionProperties', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gaia_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('oauth_code', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ExternalLogoutRequestObserver
mojo.internal.Struct(
    crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec, 'crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ExternalLogoutRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onRequestExternalLogout() {
    return this.$.onRequestExternalLogout();
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalLogoutRequestObserver', [
      { explicit: 0 },
    ]);
  }

  onRequestExternalLogout() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.ExternalLogoutRequestObserver.getRemote = function() {
  let remote = new crosapi.mojom.ExternalLogoutRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ExternalLogoutRequestObserver',
    'context');
  return remote.$;
};

crosapi.mojom.ExternalLogoutRequestObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ExternalLogoutRequestObserver', [
      { explicit: 0 },
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
        
        // Try Method 0: OnRequestExternalLogout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestExternalLogout (0)');
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
          const params = decoder.decodeStructInline(crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRequestExternalLogout');
          const result = this.impl.onRequestExternalLogout();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.ExternalLogoutRequestObserverReceiver = crosapi.mojom.ExternalLogoutRequestObserverReceiver;

crosapi.mojom.ExternalLogoutRequestObserverPtr = crosapi.mojom.ExternalLogoutRequestObserverRemote;
crosapi.mojom.ExternalLogoutRequestObserverRequest = crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver;


// Interface: Login
mojo.internal.Struct(
    crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec, 'crosapi.mojom.Login_AddExternalLogoutRequestObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.ExternalLogoutRequestObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec, 'crosapi.mojom.Login_NotifyOnExternalLogoutDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_0_ParamsSpec, 'crosapi.mojom.Login_REMOVED_0_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_0_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_4_ParamsSpec, 'crosapi.mojom.Login_REMOVED_4_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_4_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_5_ParamsSpec, 'crosapi.mojom.Login_REMOVED_5_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_5_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_6_ParamsSpec, 'crosapi.mojom.Login_REMOVED_6_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_6_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_7_ParamsSpec, 'crosapi.mojom.Login_REMOVED_7_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_7_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_10_ParamsSpec, 'crosapi.mojom.Login_REMOVED_10_Params', [
      mojo.internal.StructField('properties', 0, 0, crosapi.mojom.SamlUserSessionPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_10_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_12_ParamsSpec, 'crosapi.mojom.Login_REMOVED_12_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_12_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.LoginPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LoginRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Login';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LoginPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LoginRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addExternalLogoutRequestObserver(observer) {
    return this.$.addExternalLogoutRequestObserver(observer);
  }
  notifyOnExternalLogoutDone() {
    return this.$.notifyOnExternalLogoutDone();
  }
  rEMOVED_0(password) {
    return this.$.rEMOVED_0(password);
  }
  rEMOVED_4(password) {
    return this.$.rEMOVED_4(password);
  }
  rEMOVED_5(password) {
    return this.$.rEMOVED_5(password);
  }
  rEMOVED_6(password) {
    return this.$.rEMOVED_6(password);
  }
  rEMOVED_7(password) {
    return this.$.rEMOVED_7(password);
  }
  rEMOVED_10(properties) {
    return this.$.rEMOVED_10(properties);
  }
  rEMOVED_12(password) {
    return this.$.rEMOVED_12(password);
  }
};

crosapi.mojom.LoginRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Login', [
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 10 },
      { explicit: 12 },
    ]);
  }

  addExternalLogoutRequestObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  notifyOnExternalLogoutDone() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec,
      null,
      [],
      false);
  }

  rEMOVED_0(password) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.Login_REMOVED_0_ParamsSpec,
      crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_4(password) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.Login_REMOVED_4_ParamsSpec,
      crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_5(password) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.Login_REMOVED_5_ParamsSpec,
      crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_6(password) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.Login_REMOVED_6_ParamsSpec,
      crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_7(password) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.Login_REMOVED_7_ParamsSpec,
      crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_10(properties) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.Login_REMOVED_10_ParamsSpec,
      crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec,
      [properties],
      false);
  }

  rEMOVED_12(password) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.Login_REMOVED_12_ParamsSpec,
      crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec,
      [password],
      false);
  }

};

crosapi.mojom.Login.getRemote = function() {
  let remote = new crosapi.mojom.LoginRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Login',
    'context');
  return remote.$;
};

crosapi.mojom.LoginReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Login', [
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 10 },
      { explicit: 12 },
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
        
        // Try Method 0: AddExternalLogoutRequestObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddExternalLogoutRequestObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyOnExternalLogoutDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOnExternalLogoutDone (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: REMOVED_0
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_0_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_0 (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: REMOVED_4
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_4_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_4 (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: REMOVED_5
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_5_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_5 (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: REMOVED_6
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_6_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_6 (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: REMOVED_7
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_7_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_7 (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: REMOVED_10
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_10_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_10 (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: REMOVED_12
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_12_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_12 (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addExternalLogoutRequestObserver');
          const result = this.impl.addExternalLogoutRequestObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOnExternalLogoutDone');
          const result = this.impl.notifyOnExternalLogoutDone();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_0_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_0');
          const result = this.impl.rEMOVED_0(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_4_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_4');
          const result = this.impl.rEMOVED_4(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_5_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_5');
          const result = this.impl.rEMOVED_5(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_6_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_6');
          const result = this.impl.rEMOVED_6(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_7_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_7');
          const result = this.impl.rEMOVED_7(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_10_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_10');
          const result = this.impl.rEMOVED_10(params.properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_12_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_12');
          const result = this.impl.rEMOVED_12(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec);
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

crosapi.mojom.LoginReceiver = crosapi.mojom.LoginReceiver;

crosapi.mojom.LoginPtr = crosapi.mojom.LoginRemote;
crosapi.mojom.LoginRequest = crosapi.mojom.LoginPendingReceiver;

