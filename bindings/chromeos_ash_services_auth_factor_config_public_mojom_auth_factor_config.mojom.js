// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom
// Module: ash.auth.mojom

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
var ash = ash || {};
ash.auth = ash.auth || {};
ash.auth.mojom = ash.auth.mojom || {};

ash.auth.mojom.AuthFactorSpec = { $: mojo.internal.Enum() };
ash.auth.mojom.ManagementTypeSpec = { $: mojo.internal.Enum() };
ash.auth.mojom.LocalAuthFactorsComplexitySpec = { $: mojo.internal.Enum() };
ash.auth.mojom.ConfigureResultSpec = { $: mojo.internal.Enum() };
ash.auth.mojom.PinComplexitySpec = { $: mojo.internal.Enum() };
ash.auth.mojom.PasswordComplexitySpec = { $: mojo.internal.Enum() };
ash.auth.mojom.FactorObserver = {};
ash.auth.mojom.FactorObserver.$interfaceName = 'ash.auth.mojom.FactorObserver';
ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig = {};
ash.auth.mojom.AuthFactorConfig.$interfaceName = 'ash.auth.mojom.AuthFactorConfig';
ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec = { $: {} };
ash.auth.mojom.RecoveryFactorEditor = {};
ash.auth.mojom.RecoveryFactorEditor.$interfaceName = 'ash.auth.mojom.RecoveryFactorEditor';
ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec = { $: {} };
ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor = {};
ash.auth.mojom.PinFactorEditor.$interfaceName = 'ash.auth.mojom.PinFactorEditor';
ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor = {};
ash.auth.mojom.PasswordFactorEditor.$interfaceName = 'ash.auth.mojom.PasswordFactorEditor';
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec = { $: {} };

// Enum: AuthFactor
ash.auth.mojom.AuthFactor = {
  kRecovery: 0,
  kPrefBasedPin: 1,
  kCryptohomePin: 2,
  kCryptohomePinV2: 3,
  kGaiaPassword: 4,
  kLocalPassword: 5,
};

// Enum: ManagementType
ash.auth.mojom.ManagementType = {
  kNone: 0,
  kDevice: 1,
  kUser: 2,
  kChildRestriction: 3,
};

// Enum: LocalAuthFactorsComplexity
ash.auth.mojom.LocalAuthFactorsComplexity = {
  kUnset: 0,
  kNone: 1,
  kLow: 2,
  kMedium: 3,
  kHigh: 4,
};

// Enum: ConfigureResult
ash.auth.mojom.ConfigureResult = {
  kSuccess: 0,
  kInvalidTokenError: 1,
  kFatalError: 2,
};

// Enum: PinComplexity
ash.auth.mojom.PinComplexity = {
  kOk: 0,
  kInvalidTokenError: 1,
  kErrNone: 2,
  kErrLow: 3,
  kErrMedium: 4,
  kErrHigh: 5,
};

// Enum: PasswordComplexity
ash.auth.mojom.PasswordComplexity = {
  kOk: 0,
  kTooShort: 1,
  kErrNone: 2,
  kErrLow: 3,
  kErrMedium: 4,
  kErrHigh: 5,
};

// Interface: FactorObserver
mojo.internal.Struct(
    ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec, 'ash.auth.mojom.FactorObserver_OnFactorChanged_Params', [
      mojo.internal.StructField('factor', 0, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.auth.mojom.FactorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.FactorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.FactorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.FactorObserverPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.FactorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFactorChanged(factor) {
    return this.$.onFactorChanged(factor);
  }
};

ash.auth.mojom.FactorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FactorObserver', [
      { explicit: null },
    ]);
  }

  onFactorChanged(factor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec,
      null,
      [factor],
      false);
  }

};

ash.auth.mojom.FactorObserver.getRemote = function() {
  let remote = new ash.auth.mojom.FactorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.FactorObserver',
    'context');
  return remote.$;
};

ash.auth.mojom.FactorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FactorObserver', [
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
        
        // Try Method 0: OnFactorChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFactorChanged (0)');
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
          const params = decoder.decodeStructInline(ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFactorChanged');
          const result = this.impl.onFactorChanged(params.factor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.auth.mojom.FactorObserverReceiver = ash.auth.mojom.FactorObserverReceiver;

ash.auth.mojom.FactorObserverPtr = ash.auth.mojom.FactorObserverRemote;
ash.auth.mojom.FactorObserverRequest = ash.auth.mojom.FactorObserverPendingReceiver;


// Interface: AuthFactorConfig
mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.auth.mojom.FactorObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsSupported_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsConfigured_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParams', [
      mojo.internal.StructField('configured', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_GetManagementType_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParams', [
      mojo.internal.StructField('management', 0, 0, ash.auth.mojom.ManagementTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsEditable_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParams', [
      mojo.internal.StructField('editable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.auth.mojom.AuthFactorConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.AuthFactorConfigRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.AuthFactorConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.AuthFactorConfigPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.AuthFactorConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observeFactorChanges(observer) {
    return this.$.observeFactorChanges(observer);
  }
  isSupported(auth_token, factor) {
    return this.$.isSupported(auth_token, factor);
  }
  isConfigured(auth_token, factor) {
    return this.$.isConfigured(auth_token, factor);
  }
  getManagementType(auth_token, factor) {
    return this.$.getManagementType(auth_token, factor);
  }
  isEditable(auth_token, factor) {
    return this.$.isEditable(auth_token, factor);
  }
  getLocalAuthFactorsComplexity(auth_token) {
    return this.$.getLocalAuthFactorsComplexity(auth_token);
  }
};

ash.auth.mojom.AuthFactorConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AuthFactorConfig', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  observeFactorChanges(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec,
      null,
      [observer],
      false);
  }

  isSupported(auth_token, factor) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  isConfigured(auth_token, factor) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  getManagementType(auth_token, factor) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  isEditable(auth_token, factor) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  getLocalAuthFactorsComplexity(auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec,
      null,
      [auth_token],
      false);
  }

};

ash.auth.mojom.AuthFactorConfig.getRemote = function() {
  let remote = new ash.auth.mojom.AuthFactorConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.AuthFactorConfig',
    'context');
  return remote.$;
};

ash.auth.mojom.AuthFactorConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AuthFactorConfig', [
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
        
        // Try Method 0: ObserveFactorChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveFactorChanges (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSupported (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsConfigured
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsConfigured (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetManagementType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetManagementType (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: IsEditable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsEditable (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetLocalAuthFactorsComplexity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLocalAuthFactorsComplexity (5)');
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
          const params = decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeFactorChanges');
          const result = this.impl.observeFactorChanges(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isSupported');
          const result = this.impl.isSupported(params.auth_token, params.factor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsSupported FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isConfigured');
          const result = this.impl.isConfigured(params.auth_token, params.factor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsConfigured FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getManagementType');
          const result = this.impl.getManagementType(params.auth_token, params.factor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetManagementType FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isEditable');
          const result = this.impl.isEditable(params.auth_token, params.factor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsEditable FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLocalAuthFactorsComplexity');
          const result = this.impl.getLocalAuthFactorsComplexity(params.auth_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.auth.mojom.AuthFactorConfigReceiver = ash.auth.mojom.AuthFactorConfigReceiver;

ash.auth.mojom.AuthFactorConfigPtr = ash.auth.mojom.AuthFactorConfigRemote;
ash.auth.mojom.AuthFactorConfigRequest = ash.auth.mojom.AuthFactorConfigPendingReceiver;


// Interface: RecoveryFactorEditor
mojo.internal.Struct(
    ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec, 'ash.auth.mojom.RecoveryFactorEditor_Configure_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec, 'ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.auth.mojom.RecoveryFactorEditorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.RecoveryFactorEditorRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.RecoveryFactorEditor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.RecoveryFactorEditorPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.RecoveryFactorEditorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  configure(auth_token, enabled) {
    return this.$.configure(auth_token, enabled);
  }
};

ash.auth.mojom.RecoveryFactorEditorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RecoveryFactorEditor', [
      { explicit: null },
    ]);
  }

  configure(auth_token, enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec,
      ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec,
      [auth_token, enabled],
      false);
  }

};

ash.auth.mojom.RecoveryFactorEditor.getRemote = function() {
  let remote = new ash.auth.mojom.RecoveryFactorEditorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.RecoveryFactorEditor',
    'context');
  return remote.$;
};

ash.auth.mojom.RecoveryFactorEditorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RecoveryFactorEditor', [
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
        
        // Try Method 0: Configure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Configure (0)');
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
          const params = decoder.decodeStructInline(ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configure');
          const result = this.impl.configure(params.auth_token, params.enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Configure FAILED:', e));
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

ash.auth.mojom.RecoveryFactorEditorReceiver = ash.auth.mojom.RecoveryFactorEditorReceiver;

ash.auth.mojom.RecoveryFactorEditorPtr = ash.auth.mojom.RecoveryFactorEditorRemote;
ash.auth.mojom.RecoveryFactorEditorRequest = ash.auth.mojom.RecoveryFactorEditorPendingReceiver;


// Interface: PinFactorEditor
mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_SetPin_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pin', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_SetPin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_UpdatePin_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pin', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_RemovePin_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParams', [
      mojo.internal.StructField('pin_factor', 0, 0, ash.auth.mojom.AuthFactorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_CheckPinComplexity_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pin', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParams', [
      mojo.internal.StructField('complexity', 0, 0, ash.auth.mojom.PinComplexitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.auth.mojom.PinFactorEditorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.PinFactorEditorRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.PinFactorEditor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.PinFactorEditorPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.PinFactorEditorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setPin(auth_token, pin) {
    return this.$.setPin(auth_token, pin);
  }
  updatePin(auth_token, pin) {
    return this.$.updatePin(auth_token, pin);
  }
  removePin(auth_token) {
    return this.$.removePin(auth_token);
  }
  getConfiguredPinFactor(auth_token) {
    return this.$.getConfiguredPinFactor(auth_token);
  }
  checkPinComplexity(auth_token, pin) {
    return this.$.checkPinComplexity(auth_token, pin);
  }
};

ash.auth.mojom.PinFactorEditorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PinFactorEditor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPin(auth_token, pin) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec,
      [auth_token, pin],
      false);
  }

  updatePin(auth_token, pin) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec,
      [auth_token, pin],
      false);
  }

  removePin(auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec,
      [auth_token],
      false);
  }

  getConfiguredPinFactor(auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec,
      [auth_token],
      false);
  }

  checkPinComplexity(auth_token, pin) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec,
      [auth_token, pin],
      false);
  }

};

ash.auth.mojom.PinFactorEditor.getRemote = function() {
  let remote = new ash.auth.mojom.PinFactorEditorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.PinFactorEditor',
    'context');
  return remote.$;
};

ash.auth.mojom.PinFactorEditorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PinFactorEditor', [
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
        
        // Try Method 0: SetPin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPin (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdatePin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePin (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RemovePin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePin (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetConfiguredPinFactor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetConfiguredPinFactor (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CheckPinComplexity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckPinComplexity (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPin');
          const result = this.impl.setPin(params.auth_token, params.pin);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPin FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePin');
          const result = this.impl.updatePin(params.auth_token, params.pin);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdatePin FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removePin');
          const result = this.impl.removePin(params.auth_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemovePin FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getConfiguredPinFactor');
          const result = this.impl.getConfiguredPinFactor(params.auth_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetConfiguredPinFactor FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkPinComplexity');
          const result = this.impl.checkPinComplexity(params.auth_token, params.pin);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CheckPinComplexity FAILED:', e));
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

ash.auth.mojom.PinFactorEditorReceiver = ash.auth.mojom.PinFactorEditorReceiver;

ash.auth.mojom.PinFactorEditorPtr = ash.auth.mojom.PinFactorEditorRemote;
ash.auth.mojom.PinFactorEditorRequest = ash.auth.mojom.PinFactorEditorPendingReceiver;


// Interface: PasswordFactorEditor
mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParams', [
      mojo.internal.StructField('complexity', 0, 0, ash.auth.mojom.PasswordComplexitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_RemovePassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.auth.mojom.PasswordFactorEditorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.PasswordFactorEditorRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.PasswordFactorEditor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.PasswordFactorEditorPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.PasswordFactorEditorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateOrSetLocalPassword(auth_token, new_password) {
    return this.$.updateOrSetLocalPassword(auth_token, new_password);
  }
  updateOrSetOnlinePassword(auth_token, new_password) {
    return this.$.updateOrSetOnlinePassword(auth_token, new_password);
  }
  setLocalPassword(auth_token, new_password) {
    return this.$.setLocalPassword(auth_token, new_password);
  }
  setOnlinePassword(auth_token, new_password) {
    return this.$.setOnlinePassword(auth_token, new_password);
  }
  checkLocalPasswordComplexity(password) {
    return this.$.checkLocalPasswordComplexity(password);
  }
  removePassword(auth_token) {
    return this.$.removePassword(auth_token);
  }
};

ash.auth.mojom.PasswordFactorEditorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PasswordFactorEditor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateOrSetLocalPassword(auth_token, new_password) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec,
      [auth_token, new_password],
      false);
  }

  updateOrSetOnlinePassword(auth_token, new_password) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec,
      [auth_token, new_password],
      false);
  }

  setLocalPassword(auth_token, new_password) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec,
      [auth_token, new_password],
      false);
  }

  setOnlinePassword(auth_token, new_password) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec,
      [auth_token, new_password],
      false);
  }

  checkLocalPasswordComplexity(password) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec,
      [password],
      false);
  }

  removePassword(auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec,
      [auth_token],
      false);
  }

};

ash.auth.mojom.PasswordFactorEditor.getRemote = function() {
  let remote = new ash.auth.mojom.PasswordFactorEditorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.PasswordFactorEditor',
    'context');
  return remote.$;
};

ash.auth.mojom.PasswordFactorEditorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PasswordFactorEditor', [
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
        
        // Try Method 0: UpdateOrSetLocalPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateOrSetLocalPassword (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateOrSetOnlinePassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateOrSetOnlinePassword (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetLocalPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLocalPassword (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetOnlinePassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOnlinePassword (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CheckLocalPasswordComplexity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckLocalPasswordComplexity (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemovePassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePassword (5)');
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
          const params = decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOrSetLocalPassword');
          const result = this.impl.updateOrSetLocalPassword(params.auth_token, params.new_password);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateOrSetLocalPassword FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOrSetOnlinePassword');
          const result = this.impl.updateOrSetOnlinePassword(params.auth_token, params.new_password);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateOrSetOnlinePassword FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLocalPassword');
          const result = this.impl.setLocalPassword(params.auth_token, params.new_password);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetLocalPassword FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOnlinePassword');
          const result = this.impl.setOnlinePassword(params.auth_token, params.new_password);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetOnlinePassword FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkLocalPasswordComplexity');
          const result = this.impl.checkLocalPasswordComplexity(params.password);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CheckLocalPasswordComplexity FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removePassword');
          const result = this.impl.removePassword(params.auth_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemovePassword FAILED:', e));
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

ash.auth.mojom.PasswordFactorEditorReceiver = ash.auth.mojom.PasswordFactorEditorReceiver;

ash.auth.mojom.PasswordFactorEditorPtr = ash.auth.mojom.PasswordFactorEditorRemote;
ash.auth.mojom.PasswordFactorEditorRequest = ash.auth.mojom.PasswordFactorEditorPendingReceiver;

