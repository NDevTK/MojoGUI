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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cellular_setup = mojo.internal.bindings.ash.cellular_setup || {};
mojo.internal.bindings.ash.cellular_setup.mojom = mojo.internal.bindings.ash.cellular_setup.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.cellular_setup.mojom.ProfileStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cellular_setup.mojom.ProfileInstallResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cellular_setup.mojom.ProfileInstallMethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimOperationResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cellular_setup.mojom.EuiccPropertiesSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePropertiesSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.QRCodeSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver = {};
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverSpec = { $ : {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver.$interfaceName = 'ash.cellular_setup.mojom.ESimManagerObserver';
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager = {};
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerSpec = { $ : {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager.$interfaceName = 'ash.cellular_setup.mojom.ESimManager';
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc = {};
mojo.internal.bindings.ash.cellular_setup.mojom.EuiccSpec = { $ : {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc.$interfaceName = 'ash.cellular_setup.mojom.Euicc';
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile = {};
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileSpec = { $ : {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile.$interfaceName = 'ash.cellular_setup.mojom.ESimProfile';
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec = { $: {} };

// Enum: ProfileState
mojo.internal.bindings.ash.cellular_setup.mojom.ProfileState = {
  kPending: 0,
  kInstalling: 1,
  kInactive: 2,
  kActive: 3,
};

// Enum: ProfileInstallResult
mojo.internal.bindings.ash.cellular_setup.mojom.ProfileInstallResult = {
  kSuccess: 0,
  kFailure: 1,
  kErrorNeedsConfirmationCode: 2,
  kErrorInvalidActivationCode: 3,
};

// Enum: ProfileInstallMethod
mojo.internal.bindings.ash.cellular_setup.mojom.ProfileInstallMethod = {
  kViaSmds: 0,
  kViaQrCodeAfterSmds: 1,
  kViaQrCodeSkippedSmds: 2,
  kViaActivationCodeAfterSmds: 3,
  kViaActivationCodeSkippedSmds: 4,
};

// Enum: ESimOperationResult
mojo.internal.bindings.ash.cellular_setup.mojom.ESimOperationResult = {
  kSuccess: 0,
  kFailure: 1,
};

// Struct: EuiccProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.EuiccPropertiesSpec, 'ash.cellular_setup.mojom.EuiccProperties', [
      mojo.internal.StructField('arg_eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_active', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ESimProfileProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePropertiesSpec, 'ash.cellular_setup.mojom.ESimProfileProperties', [
      mojo.internal.StructField('arg_eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_iccid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_nickname', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_provider', 32, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 40, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ProfileStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activation_code', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: QRCode
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.QRCodeSpec, 'ash.cellular_setup.mojom.QRCode', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ESimManagerObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_Params', [
      mojo.internal.StructField('arg_euicc', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_Params', [
      mojo.internal.StructField('arg_euicc', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_Params', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAvailableEuiccListChanged() {
    return this.$.onAvailableEuiccListChanged();
  }
  onProfileListChanged(arg_euicc) {
    return this.$.onProfileListChanged(arg_euicc);
  }
  onEuiccChanged(arg_euicc) {
    return this.$.onEuiccChanged(arg_euicc);
  }
  onProfileChanged(arg_profile) {
    return this.$.onProfileChanged(arg_profile);
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ESimManagerObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAvailableEuiccListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onProfileListChanged(arg_euicc) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec,
      null,
      [arg_euicc],
      false);
  }

  onEuiccChanged(arg_euicc) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec,
      null,
      [arg_euicc],
      false);
  }

  onProfileChanged(arg_profile) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec,
      null,
      [arg_profile],
      false);
  }

};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimManagerObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ESimManagerObserver', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAvailableEuiccListChanged');
          const result = this.impl.onAvailableEuiccListChanged();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProfileListChanged');
          const result = this.impl.onProfileListChanged(params.arg_euicc);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEuiccChanged');
          const result = this.impl.onEuiccChanged(params.arg_euicc);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProfileChanged');
          const result = this.impl.onProfileChanged(params.arg_profile);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverReceiver = mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverReceiver;

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverPtr = mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverRemote;
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverRequest = mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver;


// Interface: ESimManager
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec, 'ash.cellular_setup.mojom.ESimManager_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec, 'ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParams', [
      mojo.internal.StructField('arg_euiccs', 0, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemote), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  getAvailableEuiccs() {
    return this.$.getAvailableEuiccs();
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ESimManager', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getAvailableEuiccs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ESimManager', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailableEuiccs');
          const result = this.impl.getAvailableEuiccs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAvailableEuiccs FAILED:', e));
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

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerReceiver = mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerReceiver;

mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerPtr = mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerRemote;
mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerRequest = mojo.internal.bindings.ash.cellular_setup.mojom.ESimManagerPendingReceiver;


// Interface: Euicc
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParams', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.EuiccPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProfileList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParams', [
      mojo.internal.StructField('arg_profiles', 0, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemote), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_profiles', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_Params', [
      mojo.internal.StructField('arg_activation_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_confirmation_code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_install_method', 16, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ProfileInstallMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ProfileInstallResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_profile', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetEidQRCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParams', [
      mojo.internal.StructField('arg_qr_code', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.QRCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cellular_setup.mojom.EuiccPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.Euicc';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cellular_setup.mojom.EuiccPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProperties() {
    return this.$.getProperties();
  }
  getProfileList() {
    return this.$.getProfileList();
  }
  requestAvailableProfiles() {
    return this.$.requestAvailableProfiles();
  }
  refreshInstalledProfiles() {
    return this.$.refreshInstalledProfiles();
  }
  installProfileFromActivationCode(arg_activation_code, arg_confirmation_code, arg_install_method) {
    return this.$.installProfileFromActivationCode(arg_activation_code, arg_confirmation_code, arg_install_method);
  }
  getEidQRCode() {
    return this.$.getEidQRCode();
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.Euicc', [
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
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  getProfileList() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec,
      [],
      false);
  }

  requestAvailableProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec,
      [],
      false);
  }

  refreshInstalledProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec,
      [],
      false);
  }

  installProfileFromActivationCode(arg_activation_code, arg_confirmation_code, arg_install_method) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec,
      [arg_activation_code, arg_confirmation_code, arg_install_method],
      false);
  }

  getEidQRCode() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.cellular_setup.mojom.Euicc.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.Euicc',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cellular_setup.mojom.EuiccReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.Euicc', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProperties');
          const result = this.impl.getProperties();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProperties FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProfileList');
          const result = this.impl.getProfileList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProfileList FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAvailableProfiles');
          const result = this.impl.requestAvailableProfiles();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestAvailableProfiles FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshInstalledProfiles');
          const result = this.impl.refreshInstalledProfiles();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RefreshInstalledProfiles FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installProfileFromActivationCode');
          const result = this.impl.installProfileFromActivationCode(params.arg_activation_code, params.arg_confirmation_code, params.arg_install_method);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallProfileFromActivationCode FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEidQRCode');
          const result = this.impl.getEidQRCode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEidQRCode FAILED:', e));
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

mojo.internal.bindings.ash.cellular_setup.mojom.EuiccReceiver = mojo.internal.bindings.ash.cellular_setup.mojom.EuiccReceiver;

mojo.internal.bindings.ash.cellular_setup.mojom.EuiccPtr = mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRemote;
mojo.internal.bindings.ash.cellular_setup.mojom.EuiccRequest = mojo.internal.bindings.ash.cellular_setup.mojom.EuiccPendingReceiver;


// Interface: ESimProfile
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParams', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_InstallProfile_Params', [
      mojo.internal.StructField('arg_confirmation_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ProfileInstallResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_UninstallProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_Params', [
      mojo.internal.StructField('arg_nickname', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimProfile';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProperties() {
    return this.$.getProperties();
  }
  installProfile(arg_confirmation_code) {
    return this.$.installProfile(arg_confirmation_code);
  }
  uninstallProfile() {
    return this.$.uninstallProfile();
  }
  setProfileNickname(arg_nickname) {
    return this.$.setProfileNickname(arg_nickname);
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ESimProfile', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  installProfile(arg_confirmation_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec,
      [arg_confirmation_code],
      false);
  }

  uninstallProfile() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec,
      [],
      false);
  }

  setProfileNickname(arg_nickname) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec,
      [arg_nickname],
      false);
  }

};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimProfile',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ESimProfile', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProperties');
          const result = this.impl.getProperties();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProperties FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installProfile');
          const result = this.impl.installProfile(params.arg_confirmation_code);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallProfile FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninstallProfile');
          const result = this.impl.uninstallProfile();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UninstallProfile FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileNickname');
          const result = this.impl.setProfileNickname(params.arg_nickname);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetProfileNickname FAILED:', e));
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

mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileReceiver = mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileReceiver;

mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePtr = mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRemote;
mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfileRequest = mojo.internal.bindings.ash.cellular_setup.mojom.ESimProfilePendingReceiver;

