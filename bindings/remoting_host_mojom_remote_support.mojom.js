// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_support.mojom
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
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var mojo_base = mojo_base || {};

remoting.mojom.StartSupportSessionErrorSpec = { $: mojo.internal.Enum() };
remoting.mojom.StartSupportSessionResponseSpec = { $: {} };
remoting.mojom.SupportHostDetailsSpec = { $: {} };
remoting.mojom.SupportSessionParamsSpec = { $: {} };
remoting.mojom.NatPolicyStateSpec = { $: {} };
remoting.mojom.SupportHostObserver = {};
remoting.mojom.SupportHostObserver.$interfaceName = 'remoting.mojom.SupportHostObserver';
remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec = { $: {} };

// Enum: StartSupportSessionError
remoting.mojom.StartSupportSessionError = {
  kUnknown: 0,
  kExistingAdminSession: 1,
};

// Union: StartSupportSessionResponse
mojo.internal.Union(
    remoting.mojom.StartSupportSessionResponseSpec, 'remoting.mojom.StartSupportSessionResponse', {
      'observer': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceRequest(remoting.mojom.SupportHostObserverRemote),
        'nullable': false,
      },
      'support_session_error': {
        'ordinal': 1,
        'type': remoting.mojom.StartSupportSessionErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: SupportHostDetails
mojo.internal.Struct(
    remoting.mojom.SupportHostDetailsSpec, 'remoting.mojom.SupportHostDetails', [
      mojo.internal.StructField('host_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('supported_features', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SupportSessionParams
mojo.internal.Struct(
    remoting.mojom.SupportSessionParamsSpec, 'remoting.mojom.SupportSessionParams', [
      mojo.internal.StructField('user_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('oauth_access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suppress_user_dialogs', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('suppress_notifications', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('terminate_upon_input', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('curtain_local_user_session', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('authorized_helper', 24, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 32], [2, 40]]);

// Struct: NatPolicyState
mojo.internal.Struct(
    remoting.mojom.NatPolicyStateSpec, 'remoting.mojom.NatPolicyState', [
      mojo.internal.StructField('nat_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('relay_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SupportHostObserver
mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateStarting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_Params', [
      mojo.internal.StructField('access_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lifetime', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateConnecting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateConnected_Params', [
      mojo.internal.StructField('remote_username', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateDisconnected_Params', [
      mojo.internal.StructField('disconnect_reason', 0, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnNatPolicyChanged_Params', [
      mojo.internal.StructField('nat_policy_state', 0, 0, remoting.mojom.NatPolicyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateError_Params', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnPolicyError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnInvalidDomainError_Params', [
    ],
    [[0, 8]]);

remoting.mojom.SupportHostObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.SupportHostObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.SupportHostObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.SupportHostObserverPendingReceiver,
      handle);
    this.$ = new remoting.mojom.SupportHostObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.SupportHostObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SupportHostObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
    ]);
  }

  onHostStateStarting() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec,
      null,
      [],
      false);
  }

  onHostStateRequestedAccessCode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec,
      null,
      [],
      false);
  }

  onHostStateReceivedAccessCode(access_code, lifetime) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec,
      null,
      [access_code, lifetime],
      false);
  }

  onHostStateConnecting() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec,
      null,
      [],
      false);
  }

  onHostStateConnected(remote_username) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec,
      null,
      [remote_username],
      false);
  }

  onHostStateDisconnected(disconnect_reason) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec,
      null,
      [disconnect_reason],
      false);
  }

  onNatPolicyChanged(nat_policy_state) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec,
      null,
      [nat_policy_state],
      false);
  }

  onHostStateError(error_code) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec,
      null,
      [error_code],
      false);
  }

  onPolicyError() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec,
      null,
      [],
      false);
  }

  onInvalidDomainError() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec,
      null,
      [],
      false);
  }

};

remoting.mojom.SupportHostObserver.getRemote = function() {
  let remote = new remoting.mojom.SupportHostObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.SupportHostObserver',
    'context');
  return remote.$;
};

remoting.mojom.SupportHostObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SupportHostObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
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
        
        // Try Method 0: OnHostStateStarting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStateStarting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnHostStateRequestedAccessCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStateRequestedAccessCode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnHostStateReceivedAccessCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStateReceivedAccessCode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnHostStateConnecting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStateConnecting (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnHostStateConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStateConnected (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnHostStateDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStateDisconnected (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnNatPolicyChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNatPolicyChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnHostStateError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStateError (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnPolicyError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPolicyError (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnInvalidDomainError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInvalidDomainError (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStateStarting');
          const result = this.impl.onHostStateStarting();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStateRequestedAccessCode');
          const result = this.impl.onHostStateRequestedAccessCode();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStateReceivedAccessCode');
          const result = this.impl.onHostStateReceivedAccessCode(params.access_code, params.lifetime);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStateConnecting');
          const result = this.impl.onHostStateConnecting();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStateConnected');
          const result = this.impl.onHostStateConnected(params.remote_username);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStateDisconnected');
          const result = this.impl.onHostStateDisconnected(params.disconnect_reason);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNatPolicyChanged');
          const result = this.impl.onNatPolicyChanged(params.nat_policy_state);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStateError');
          const result = this.impl.onHostStateError(params.error_code);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPolicyError');
          const result = this.impl.onPolicyError();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInvalidDomainError');
          const result = this.impl.onInvalidDomainError();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.SupportHostObserverReceiver = remoting.mojom.SupportHostObserverReceiver;

remoting.mojom.SupportHostObserverPtr = remoting.mojom.SupportHostObserverRemote;
remoting.mojom.SupportHostObserverRequest = remoting.mojom.SupportHostObserverPendingReceiver;

