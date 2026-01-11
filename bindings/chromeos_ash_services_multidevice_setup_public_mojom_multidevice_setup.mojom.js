// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom
 // Module: ash.multidevice_setup.mojom

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
mojo.internal.bindings.ash.multidevice_setup = mojo.internal.bindings.ash.multidevice_setup || {};
mojo.internal.bindings.ash.multidevice_setup.mojom = mojo.internal.bindings.ash.multidevice_setup.mojom || {};

mojo.internal.bindings.ash.multidevice_setup.mojom.CameraRollOptInEntryPointSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.multidevice_setup.mojom.EventTypeForDebuggingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.multidevice_setup.mojom.HostDeviceSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate = {};
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateSpec = { $ : {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate.$interfaceName = 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate';
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver = {};
mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverSpec = { $ : {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver.$interfaceName = 'ash.multidevice_setup.mojom.HostStatusObserver';
mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver = {};
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverSpec = { $ : {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver.$interfaceName = 'ash.multidevice_setup.mojom.FeatureStateObserver';
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup = {};
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupSpec = { $ : {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup.$interfaceName = 'ash.multidevice_setup.mojom.MultiDeviceSetup';
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter = {};
mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterSpec = { $ : {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.$interfaceName = 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter';
mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec = { $: {} };

// Enum: CameraRollOptInEntryPoint
mojo.internal.bindings.ash.multidevice_setup.mojom.CameraRollOptInEntryPoint = {
  kSetupFlow: 0,
  kOnboardingDialog: 1,
  kSettings: 2,
};

// Enum: EventTypeForDebugging
mojo.internal.bindings.ash.multidevice_setup.mojom.EventTypeForDebugging = {
  kNewUserPotentialHostExists: 0,
  kExistingUserConnectedHostSwitched: 1,
  kExistingUserNewChromebookAdded: 2,
};

// Enum: HostStatus
mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatus = {
  kNoEligibleHosts: 0,
  kEligibleHostExistsButNoHostSet: 1,
  kHostSetLocallyButWaitingForBackendConfirmation: 2,
  kHostSetButNotYetVerified: 3,
  kHostVerified: 4,
};

// Enum: Feature
mojo.internal.bindings.ash.multidevice_setup.mojom.Feature = {
  kBetterTogetherSuite: 0,
  kInstantTethering: 1,
  kMessages: 2,
  kSmartLock: 3,
  kPhoneHub: 4,
  kPhoneHubNotifications: 5,
  kPhoneHubTaskContinuation: 6,
  kWifiSync: 7,
  kEche: 8,
  kPhoneHubCameraRoll: 9,
};

// Enum: FeatureState
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureState = {
  kProhibitedByPolicy: 0,
  kDisabledByUser: 1,
  kEnabledByUser: 2,
  kNotSupportedByChromebook: 3,
  kNotSupportedByPhone: 4,
  kUnavailableInsufficientSecurity: 6,
  kUnavailableSuiteDisabled: 7,
  kUnavailableTopLevelFeatureDisabled: 9,
  kUnavailableNoVerifiedHost_ClientNotReady: 10,
  kUnavailableNoVerifiedHost_NoEligibleHosts: 11,
  kUnavailableNoVerifiedHost_HostExistsButNotSetAndVerified: 12,
};

// Struct: HostDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.HostDeviceSpec, 'ash.multidevice_setup.mojom.HostDevice', [
      mojo.internal.StructField('arg_remote_device', 0, 0, mojo.internal.bindings.ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connectivity_status', 8, 0, mojo.internal.bindings.ash.device_sync.mojom.ConnectivityStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AccountStatusChangeDelegate
mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_Params', [
      mojo.internal.StructField('arg_new_host_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_Params', [
      mojo.internal.StructField('arg_new_host_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPotentialHostExistsForNewUser() {
    return this.$.onPotentialHostExistsForNewUser();
  }
  onNoLongerNewUser() {
    return this.$.onNoLongerNewUser();
  }
  onConnectedHostSwitchedForExistingUser(arg_new_host_device_name) {
    return this.$.onConnectedHostSwitchedForExistingUser(arg_new_host_device_name);
  }
  onNewChromebookAddedForExistingUser(arg_new_host_device_name) {
    return this.$.onNewChromebookAddedForExistingUser(arg_new_host_device_name);
  }
  onBecameEligibleForWifiSync() {
    return this.$.onBecameEligibleForWifiSync();
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.AccountStatusChangeDelegate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPotentialHostExistsForNewUser() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec,
      null,
      [],
      false);
  }

  onNoLongerNewUser() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec,
      null,
      [],
      false);
  }

  onConnectedHostSwitchedForExistingUser(arg_new_host_device_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec,
      null,
      [arg_new_host_device_name],
      false);
  }

  onNewChromebookAddedForExistingUser(arg_new_host_device_name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec,
      null,
      [arg_new_host_device_name],
      false);
  }

  onBecameEligibleForWifiSync() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.AccountStatusChangeDelegate',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.AccountStatusChangeDelegate', [
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
        
        // Try Method 0: OnPotentialHostExistsForNewUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPotentialHostExistsForNewUser (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNoLongerNewUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNoLongerNewUser (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnConnectedHostSwitchedForExistingUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectedHostSwitchedForExistingUser (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnNewChromebookAddedForExistingUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewChromebookAddedForExistingUser (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnBecameEligibleForWifiSync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBecameEligibleForWifiSync (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPotentialHostExistsForNewUser');
          const result = this.impl.onPotentialHostExistsForNewUser();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNoLongerNewUser');
          const result = this.impl.onNoLongerNewUser();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectedHostSwitchedForExistingUser');
          const result = this.impl.onConnectedHostSwitchedForExistingUser(params.arg_new_host_device_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewChromebookAddedForExistingUser');
          const result = this.impl.onNewChromebookAddedForExistingUser(params.arg_new_host_device_name);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBecameEligibleForWifiSync');
          const result = this.impl.onBecameEligibleForWifiSync();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver = mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver;

mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegatePtr = mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote;
mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateRequest = mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver;


// Interface: HostStatusObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec, 'ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_Params', [
      mojo.internal.StructField('arg_host_status', 0, 0, mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_device', 8, 0, mojo.internal.bindings.ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.HostStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onHostStatusChanged(arg_host_status, arg_host_device) {
    return this.$.onHostStatusChanged(arg_host_status, arg_host_device);
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.HostStatusObserver', [
      { explicit: null },
    ]);
  }

  onHostStatusChanged(arg_host_status, arg_host_device) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec,
      null,
      [arg_host_status, arg_host_device],
      false);
  }

};

mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.HostStatusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.HostStatusObserver', [
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
        
        // Try Method 0: OnHostStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStatusChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStatusChanged');
          const result = this.impl.onHostStatusChanged(params.arg_host_status, params.arg_host_device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverReceiver = mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverReceiver;

mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverPtr = mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverRemote;
mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverRequest = mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver;


// Interface: FeatureStateObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec, 'ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_Params', [
      mojo.internal.StructField('arg_feature_states_map', 0, 0, mojo.internal.Map(mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureSpec.$, mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.FeatureStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFeatureStatesChanged(arg_feature_states_map) {
    return this.$.onFeatureStatesChanged(arg_feature_states_map);
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.FeatureStateObserver', [
      { explicit: null },
    ]);
  }

  onFeatureStatesChanged(arg_feature_states_map) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec,
      null,
      [arg_feature_states_map],
      false);
  }

};

mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.FeatureStateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.FeatureStateObserver', [
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
        
        // Try Method 0: OnFeatureStatesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFeatureStatesChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFeatureStatesChanged');
          const result = this.impl.onFeatureStatesChanged(params.arg_feature_states_map);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverReceiver = mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverReceiver;

mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverPtr = mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverRemote;
mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverRequest = mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver;


// Interface: MultiDeviceSetup
mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_Params', [
      mojo.internal.StructField('arg_delegate', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParams', [
      mojo.internal.StructField('arg_eligible_host_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParams', [
      mojo.internal.StructField('arg_eligible_host_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.multidevice_setup.mojom.HostDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_Params', [
      mojo.internal.StructField('arg_instance_id_or_legacy_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParams', [
      mojo.internal.StructField('arg_host_status', 0, 0, mojo.internal.bindings.ash.multidevice_setup.mojom.HostStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_device', 8, 0, mojo.internal.bindings.ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_Params', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_token', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParams', [
      mojo.internal.StructField('arg_feature_states_map', 0, 0, mojo.internal.Map(mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureSpec.$, mojo.internal.bindings.ash.multidevice_setup.mojom.FeatureStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.multidevice_setup.mojom.EventTypeForDebuggingSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_Params', [
      mojo.internal.StructField('arg_qs_phone_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParams', [
      mojo.internal.StructField('arg_qs_phone_instance_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.MultiDeviceSetup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setAccountStatusChangeDelegate(arg_delegate) {
    return this.$.setAccountStatusChangeDelegate(arg_delegate);
  }
  addHostStatusObserver(arg_observer) {
    return this.$.addHostStatusObserver(arg_observer);
  }
  addFeatureStateObserver(arg_observer) {
    return this.$.addFeatureStateObserver(arg_observer);
  }
  getEligibleHostDevices() {
    return this.$.getEligibleHostDevices();
  }
  getEligibleActiveHostDevices() {
    return this.$.getEligibleActiveHostDevices();
  }
  setHostDevice(arg_instance_id_or_legacy_device_id, arg_auth_token) {
    return this.$.setHostDevice(arg_instance_id_or_legacy_device_id, arg_auth_token);
  }
  removeHostDevice() {
    return this.$.removeHostDevice();
  }
  getHostStatus() {
    return this.$.getHostStatus();
  }
  setFeatureEnabledState(arg_feature, arg_enabled, arg_auth_token) {
    return this.$.setFeatureEnabledState(arg_feature, arg_enabled, arg_auth_token);
  }
  getFeatureStates() {
    return this.$.getFeatureStates();
  }
  retrySetHostNow() {
    return this.$.retrySetHostNow();
  }
  triggerEventForDebugging(arg_type) {
    return this.$.triggerEventForDebugging(arg_type);
  }
  setQuickStartPhoneInstanceID(arg_qs_phone_instance_id) {
    return this.$.setQuickStartPhoneInstanceID(arg_qs_phone_instance_id);
  }
  getQuickStartPhoneInstanceID() {
    return this.$.getQuickStartPhoneInstanceID();
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.MultiDeviceSetup', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setAccountStatusChangeDelegate(arg_delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec,
      null,
      [arg_delegate],
      false);
  }

  addHostStatusObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  addFeatureStateObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getEligibleHostDevices() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec,
      [],
      false);
  }

  getEligibleActiveHostDevices() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec,
      [],
      false);
  }

  setHostDevice(arg_instance_id_or_legacy_device_id, arg_auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec,
      [arg_instance_id_or_legacy_device_id, arg_auth_token],
      false);
  }

  removeHostDevice() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec,
      null,
      [],
      false);
  }

  getHostStatus() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec,
      [],
      false);
  }

  setFeatureEnabledState(arg_feature, arg_enabled, arg_auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec,
      [arg_feature, arg_enabled, arg_auth_token],
      false);
  }

  getFeatureStates() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec,
      [],
      false);
  }

  retrySetHostNow() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec,
      [],
      false);
  }

  triggerEventForDebugging(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec,
      [arg_type],
      false);
  }

  setQuickStartPhoneInstanceID(arg_qs_phone_instance_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec,
      null,
      [arg_qs_phone_instance_id],
      false);
  }

  getQuickStartPhoneInstanceID() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.MultiDeviceSetup',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.MultiDeviceSetup', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: SetAccountStatusChangeDelegate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccountStatusChangeDelegate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddHostStatusObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddHostStatusObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddFeatureStateObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFeatureStateObserver (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetEligibleHostDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEligibleHostDevices (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetEligibleActiveHostDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEligibleActiveHostDevices (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetHostDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHostDevice (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RemoveHostDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveHostDevice (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetHostStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHostStatus (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetFeatureEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFeatureEnabledState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetFeatureStates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeatureStates (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RetrySetHostNow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RetrySetHostNow (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: TriggerEventForDebugging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerEventForDebugging (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetQuickStartPhoneInstanceID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetQuickStartPhoneInstanceID (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetQuickStartPhoneInstanceID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetQuickStartPhoneInstanceID (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAccountStatusChangeDelegate');
          const result = this.impl.setAccountStatusChangeDelegate(params.arg_delegate);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addHostStatusObserver');
          const result = this.impl.addHostStatusObserver(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFeatureStateObserver');
          const result = this.impl.addFeatureStateObserver(params.arg_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEligibleHostDevices');
          const result = this.impl.getEligibleHostDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEligibleHostDevices FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEligibleActiveHostDevices');
          const result = this.impl.getEligibleActiveHostDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEligibleActiveHostDevices FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHostDevice');
          const result = this.impl.setHostDevice(params.arg_instance_id_or_legacy_device_id, params.arg_auth_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetHostDevice FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeHostDevice');
          const result = this.impl.removeHostDevice();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHostStatus');
          const result = this.impl.getHostStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHostStatus FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFeatureEnabledState');
          const result = this.impl.setFeatureEnabledState(params.arg_feature, params.arg_enabled, params.arg_auth_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetFeatureEnabledState FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeatureStates');
          const result = this.impl.getFeatureStates();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFeatureStates FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.retrySetHostNow');
          const result = this.impl.retrySetHostNow();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RetrySetHostNow FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerEventForDebugging');
          const result = this.impl.triggerEventForDebugging(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TriggerEventForDebugging FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setQuickStartPhoneInstanceID');
          const result = this.impl.setQuickStartPhoneInstanceID(params.arg_qs_phone_instance_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getQuickStartPhoneInstanceID');
          const result = this.impl.getQuickStartPhoneInstanceID();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetQuickStartPhoneInstanceID FAILED:', e));
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

mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupReceiver = mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupReceiver;

mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupPtr = mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupRemote;
mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupRequest = mojo.internal.bindings.ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver;


// Interface: PrivilegedHostDeviceSetter
mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_Params', [
      mojo.internal.StructField('arg_instance_id_or_legacy_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec, 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setHostDevice(arg_instance_id_or_legacy_device_id) {
    return this.$.setHostDevice(arg_instance_id_or_legacy_device_id);
  }
};

mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter', [
      { explicit: null },
    ]);
  }

  setHostDevice(arg_instance_id_or_legacy_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec,
      mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec,
      [arg_instance_id_or_legacy_device_id],
      false);
  }

};

mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter', [
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
        
        // Try Method 0: SetHostDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHostDevice (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHostDevice');
          const result = this.impl.setHostDevice(params.arg_instance_id_or_legacy_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetHostDevice FAILED:', e));
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

mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver = mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver;

mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPtr = mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote;
mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRequest = mojo.internal.bindings.ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver;

