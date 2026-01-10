// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/webauthn_proxy.mojom
// Module: remoting.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.WebAuthnCreateResponseSpec = { $: {} };
remoting.mojom.WebAuthnGetResponseSpec = { $: {} };
remoting.mojom.WebAuthnExceptionDetailsSpec = { $: {} };
remoting.mojom.WebAuthnRequestCanceller = {};
remoting.mojom.WebAuthnRequestCanceller.$interfaceName = 'remoting.mojom.WebAuthnRequestCanceller';
remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy = {};
remoting.mojom.WebAuthnProxy.$interfaceName = 'remoting.mojom.WebAuthnProxy';
remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Create_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Get_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec = { $: {} };

// Union: WebAuthnCreateResponse
mojo.internal.Union(
    remoting.mojom.WebAuthnCreateResponseSpec, 'remoting.mojom.WebAuthnCreateResponse', {
      'error_details': {
        'ordinal': 0,
        'type': remoting.mojom.WebAuthnExceptionDetailsSpec.$,
        'nullable': false,
      },
      'response_data': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: WebAuthnGetResponse
mojo.internal.Union(
    remoting.mojom.WebAuthnGetResponseSpec, 'remoting.mojom.WebAuthnGetResponse', {
      'error_details': {
        'ordinal': 0,
        'type': remoting.mojom.WebAuthnExceptionDetailsSpec.$,
        'nullable': false,
      },
      'response_data': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: WebAuthnExceptionDetails
mojo.internal.Struct(
    remoting.mojom.WebAuthnExceptionDetailsSpec, 'remoting.mojom.WebAuthnExceptionDetails', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebAuthnRequestCanceller
mojo.internal.Struct(
    remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec, 'remoting.mojom.WebAuthnRequestCanceller_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec, 'remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParams', [
      mojo.internal.StructField('was_canceled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.WebAuthnRequestCancellerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.WebAuthnRequestCancellerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WebAuthnRequestCanceller';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.WebAuthnRequestCancellerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.WebAuthnRequestCancellerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.WebAuthnRequestCancellerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebAuthnRequestCanceller', [
      { explicit: null },
    ]);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec,
      remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec,
      [],
      false);
  }

};

remoting.mojom.WebAuthnRequestCanceller.getRemote = function() {
  let remote = new remoting.mojom.WebAuthnRequestCancellerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WebAuthnRequestCanceller',
    'context');
  return remote.$;
};

remoting.mojom.WebAuthnRequestCancellerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebAuthnRequestCanceller', [
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
             decoder.decodeStructInline(remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec);
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
          const params = decoder.decodeStructInline(remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec);
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

remoting.mojom.WebAuthnRequestCancellerReceiver = remoting.mojom.WebAuthnRequestCancellerReceiver;

remoting.mojom.WebAuthnRequestCancellerPtr = remoting.mojom.WebAuthnRequestCancellerRemote;
remoting.mojom.WebAuthnRequestCancellerRequest = remoting.mojom.WebAuthnRequestCancellerPendingReceiver;


// Interface: WebAuthnProxy
mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec, 'remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec, 'remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams', [
      mojo.internal.StructField('is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Create_ParamsSpec, 'remoting.mojom.WebAuthnProxy_Create_Params', [
      mojo.internal.StructField('request_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_canceller', 8, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnRequestCancellerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec, 'remoting.mojom.WebAuthnProxy_Create_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, remoting.mojom.WebAuthnCreateResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Get_ParamsSpec, 'remoting.mojom.WebAuthnProxy_Get_Params', [
      mojo.internal.StructField('request_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_canceller', 8, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnRequestCancellerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec, 'remoting.mojom.WebAuthnProxy_Get_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, remoting.mojom.WebAuthnGetResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.WebAuthnProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.WebAuthnProxyRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WebAuthnProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.WebAuthnProxyPendingReceiver,
      handle);
    this.$ = new remoting.mojom.WebAuthnProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.WebAuthnProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebAuthnProxy', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec,
      remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec,
      [],
      false);
  }

  create(request_data, request_canceller) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.WebAuthnProxy_Create_ParamsSpec,
      remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec,
      [request_data, request_canceller],
      false);
  }

  get(request_data, request_canceller) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.WebAuthnProxy_Get_ParamsSpec,
      remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec,
      [request_data, request_canceller],
      false);
  }

};

remoting.mojom.WebAuthnProxy.getRemote = function() {
  let remote = new remoting.mojom.WebAuthnProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WebAuthnProxy',
    'context');
  return remote.$;
};

remoting.mojom.WebAuthnProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebAuthnProxy', [
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
        
        // Try Method 0: IsUserVerifyingPlatformAuthenticatorAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsUserVerifyingPlatformAuthenticatorAvailable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.WebAuthnProxy_Create_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Get
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.WebAuthnProxy_Get_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Get (2)');
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
          const params = decoder.decodeStructInline(remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.isUserVerifyingPlatformAuthenticatorAvailable');
          const result = this.impl.isUserVerifyingPlatformAuthenticatorAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.WebAuthnProxy_Create_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.request_data, params.request_canceller);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.WebAuthnProxy_Get_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.get');
          const result = this.impl.get(params.request_data, params.request_canceller);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec);
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

remoting.mojom.WebAuthnProxyReceiver = remoting.mojom.WebAuthnProxyReceiver;

remoting.mojom.WebAuthnProxyPtr = remoting.mojom.WebAuthnProxyRemote;
remoting.mojom.WebAuthnProxyRequest = remoting.mojom.WebAuthnProxyPendingReceiver;

