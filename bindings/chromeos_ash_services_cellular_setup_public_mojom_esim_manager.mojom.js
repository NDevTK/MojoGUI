// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom
// Module: ash.cellular_setup.mojom

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
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};
var mojo_base = mojo_base || {};

ash.cellular_setup.mojom.ProfileStateSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ProfileInstallResultSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ProfileInstallMethodSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ESimOperationResultSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.EuiccPropertiesSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfilePropertiesSpec = { $: {} };
ash.cellular_setup.mojom.QRCodeSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver = {};
ash.cellular_setup.mojom.ESimManagerObserver.$interfaceName = 'ash.cellular_setup.mojom.ESimManagerObserver';
ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManager = {};
ash.cellular_setup.mojom.ESimManager.$interfaceName = 'ash.cellular_setup.mojom.ESimManager';
ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc = {};
ash.cellular_setup.mojom.Euicc.$interfaceName = 'ash.cellular_setup.mojom.Euicc';
ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile = {};
ash.cellular_setup.mojom.ESimProfile.$interfaceName = 'ash.cellular_setup.mojom.ESimProfile';
ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec = { $: {} };

// Enum: ProfileState
ash.cellular_setup.mojom.ProfileState = {
  kPending: 0,
  kInstalling: 1,
  kInactive: 2,
  kActive: 3,
};

// Enum: ProfileInstallResult
ash.cellular_setup.mojom.ProfileInstallResult = {
  kSuccess: 0,
  kFailure: 1,
  kErrorNeedsConfirmationCode: 2,
  kErrorInvalidActivationCode: 3,
};

// Enum: ProfileInstallMethod
ash.cellular_setup.mojom.ProfileInstallMethod = {
  kViaSmds: 0,
  kViaQrCodeAfterSmds: 1,
  kViaQrCodeSkippedSmds: 2,
  kViaActivationCodeAfterSmds: 3,
  kViaActivationCodeSkippedSmds: 4,
};

// Enum: ESimOperationResult
ash.cellular_setup.mojom.ESimOperationResult = {
  kSuccess: 0,
  kFailure: 1,
};

// Struct: EuiccProperties
mojo.internal.Struct(
    ash.cellular_setup.mojom.EuiccPropertiesSpec, 'ash.cellular_setup.mojom.EuiccProperties', [
      mojo.internal.StructField('eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_active', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ESimProfileProperties
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfilePropertiesSpec, 'ash.cellular_setup.mojom.ESimProfileProperties', [
      mojo.internal.StructField('eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('iccid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('nickname', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_provider', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 40, 0, ash.cellular_setup.mojom.ProfileStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_code', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: QRCode
mojo.internal.Struct(
    ash.cellular_setup.mojom.QRCodeSpec, 'ash.cellular_setup.mojom.QRCode', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ESimManagerObserver
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_Params', [
      mojo.internal.StructField('euicc', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.EuiccSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_Params', [
      mojo.internal.StructField('euicc', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.EuiccSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_Params', [
      mojo.internal.StructField('profile', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimProfileSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ESimManagerObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ESimManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.ESimManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ESimManagerObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAvailableEuiccListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onProfileListChanged(euicc) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec,
      null,
      [euicc],
      false);
  }

  onEuiccChanged(euicc) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec,
      null,
      [euicc],
      false);
  }

  onProfileChanged(profile) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec,
      null,
      [profile],
      false);
  }

};

ash.cellular_setup.mojom.ESimManagerObserver.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ESimManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimManagerObserver',
    'context');
  return remote.$;
};

ash.cellular_setup.mojom.ESimManagerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ESimManagerObserver', [
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
        
        // Try Method 0: OnAvailableEuiccListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAvailableEuiccListChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnProfileListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProfileListChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEuiccChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEuiccChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnProfileChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProfileChanged (3)');
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
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAvailableEuiccListChanged');
          const result = this.impl.onAvailableEuiccListChanged();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProfileListChanged');
          const result = this.impl.onProfileListChanged(params.euicc);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEuiccChanged');
          const result = this.impl.onEuiccChanged(params.euicc);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProfileChanged');
          const result = this.impl.onProfileChanged(params.profile);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.cellular_setup.mojom.ESimManagerObserverReceiver = ash.cellular_setup.mojom.ESimManagerObserverReceiver;

ash.cellular_setup.mojom.ESimManagerObserverPtr = ash.cellular_setup.mojom.ESimManagerObserverRemote;
ash.cellular_setup.mojom.ESimManagerObserverRequest = ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver;


// Interface: ESimManager
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec, 'ash.cellular_setup.mojom.ESimManager_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimManagerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec, 'ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParams', [
      mojo.internal.StructField('euiccs', 0, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.EuiccSpec), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cellular_setup.mojom.ESimManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ESimManagerRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ESimManagerPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ESimManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.ESimManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ESimManager', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getAvailableEuiccs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec,
      ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec,
      [],
      false);
  }

};

ash.cellular_setup.mojom.ESimManager.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ESimManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimManager',
    'context');
  return remote.$;
};

ash.cellular_setup.mojom.ESimManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ESimManager', [
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAvailableEuiccs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAvailableEuiccs (1)');
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
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailableEuiccs');
          const result = this.impl.getAvailableEuiccs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec);
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

ash.cellular_setup.mojom.ESimManagerReceiver = ash.cellular_setup.mojom.ESimManagerReceiver;

ash.cellular_setup.mojom.ESimManagerPtr = ash.cellular_setup.mojom.ESimManagerRemote;
ash.cellular_setup.mojom.ESimManagerRequest = ash.cellular_setup.mojom.ESimManagerPendingReceiver;


// Interface: Euicc
mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, ash.cellular_setup.mojom.EuiccPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProfileList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParams', [
      mojo.internal.StructField('profiles', 0, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimProfileSpec), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profiles', 8, 0, mojo.internal.Array(ash.cellular_setup.mojom.ESimProfilePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_Params', [
      mojo.internal.StructField('activation_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('confirmation_code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('install_method', 16, 0, ash.cellular_setup.mojom.ProfileInstallMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ProfileInstallResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile', 8, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimProfileSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetEidQRCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParams', [
      mojo.internal.StructField('qr_code', 0, 0, ash.cellular_setup.mojom.QRCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.cellular_setup.mojom.EuiccPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.EuiccRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.Euicc';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.EuiccPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.EuiccRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.EuiccRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Euicc', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  getProfileList() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec,
      [],
      false);
  }

  requestAvailableProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec,
      [],
      false);
  }

  refreshInstalledProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec,
      [],
      false);
  }

  installProfileFromActivationCode(activation_code, confirmation_code, install_method) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec,
      [activation_code, confirmation_code, install_method],
      false);
  }

  getEidQRCode() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec,
      [],
      false);
  }

};

ash.cellular_setup.mojom.Euicc.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.EuiccRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.Euicc',
    'context');
  return remote.$;
};

ash.cellular_setup.mojom.EuiccReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Euicc', [
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
        
        // Try Method 0: GetProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetProfileList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProfileList (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestAvailableProfiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAvailableProfiles (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RefreshInstalledProfiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshInstalledProfiles (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InstallProfileFromActivationCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallProfileFromActivationCode (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetEidQRCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEidQRCode (5)');
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
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProperties');
          const result = this.impl.getProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProfileList');
          const result = this.impl.getProfileList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAvailableProfiles');
          const result = this.impl.requestAvailableProfiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshInstalledProfiles');
          const result = this.impl.refreshInstalledProfiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installProfileFromActivationCode');
          const result = this.impl.installProfileFromActivationCode(params.activation_code, params.confirmation_code, params.install_method);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEidQRCode');
          const result = this.impl.getEidQRCode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec);
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

ash.cellular_setup.mojom.EuiccReceiver = ash.cellular_setup.mojom.EuiccReceiver;

ash.cellular_setup.mojom.EuiccPtr = ash.cellular_setup.mojom.EuiccRemote;
ash.cellular_setup.mojom.EuiccRequest = ash.cellular_setup.mojom.EuiccPendingReceiver;


// Interface: ESimProfile
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, ash.cellular_setup.mojom.ESimProfilePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_InstallProfile_Params', [
      mojo.internal.StructField('confirmation_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ProfileInstallResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_UninstallProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_Params', [
      mojo.internal.StructField('nickname', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cellular_setup.mojom.ESimProfilePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ESimProfileRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimProfile';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ESimProfilePendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ESimProfileRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.ESimProfileRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ESimProfile', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  installProfile(confirmation_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec,
      [confirmation_code],
      false);
  }

  uninstallProfile() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec,
      [],
      false);
  }

  setProfileNickname(nickname) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec,
      [nickname],
      false);
  }

};

ash.cellular_setup.mojom.ESimProfile.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ESimProfileRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimProfile',
    'context');
  return remote.$;
};

ash.cellular_setup.mojom.ESimProfileReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ESimProfile', [
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
        
        // Try Method 0: GetProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InstallProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallProfile (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UninstallProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninstallProfile (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetProfileNickname
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProfileNickname (3)');
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
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProperties');
          const result = this.impl.getProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installProfile');
          const result = this.impl.installProfile(params.confirmation_code);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninstallProfile');
          const result = this.impl.uninstallProfile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileNickname');
          const result = this.impl.setProfileNickname(params.nickname);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec);
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

ash.cellular_setup.mojom.ESimProfileReceiver = ash.cellular_setup.mojom.ESimProfileReceiver;

ash.cellular_setup.mojom.ESimProfilePtr = ash.cellular_setup.mojom.ESimProfileRemote;
ash.cellular_setup.mojom.ESimProfileRequest = ash.cellular_setup.mojom.ESimProfilePendingReceiver;

