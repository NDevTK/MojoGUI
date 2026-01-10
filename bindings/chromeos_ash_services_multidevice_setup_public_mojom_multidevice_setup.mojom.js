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
var ash = ash || {};
ash.multidevice_setup = ash.multidevice_setup || {};
ash.multidevice_setup.mojom = ash.multidevice_setup.mojom || {};

ash.multidevice_setup.mojom.CameraRollOptInEntryPointSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.EventTypeForDebuggingSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.HostStatusSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.FeatureSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.FeatureStateSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.HostDeviceSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate = {};
ash.multidevice_setup.mojom.AccountStatusChangeDelegate.$interfaceName = 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate';
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.HostStatusObserver = {};
ash.multidevice_setup.mojom.HostStatusObserver.$interfaceName = 'ash.multidevice_setup.mojom.HostStatusObserver';
ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.FeatureStateObserver = {};
ash.multidevice_setup.mojom.FeatureStateObserver.$interfaceName = 'ash.multidevice_setup.mojom.FeatureStateObserver';
ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup = {};
ash.multidevice_setup.mojom.MultiDeviceSetup.$interfaceName = 'ash.multidevice_setup.mojom.MultiDeviceSetup';
ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter = {};
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.$interfaceName = 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter';
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec = { $: {} };

// Enum: CameraRollOptInEntryPoint
ash.multidevice_setup.mojom.CameraRollOptInEntryPoint = {
  kSetupFlow: 0,
  kOnboardingDialog: 1,
  kSettings: 2,
};

// Enum: EventTypeForDebugging
ash.multidevice_setup.mojom.EventTypeForDebugging = {
  kNewUserPotentialHostExists: 0,
  kExistingUserConnectedHostSwitched: 1,
  kExistingUserNewChromebookAdded: 2,
};

// Enum: HostStatus
ash.multidevice_setup.mojom.HostStatus = {
  kNoEligibleHosts: 0,
  kEligibleHostExistsButNoHostSet: 1,
  kHostSetLocallyButWaitingForBackendConfirmation: 2,
  kHostSetButNotYetVerified: 3,
  kHostVerified: 4,
};

// Enum: Feature
ash.multidevice_setup.mojom.Feature = {
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
ash.multidevice_setup.mojom.FeatureState = {
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
    ash.multidevice_setup.mojom.HostDeviceSpec, 'ash.multidevice_setup.mojom.HostDevice', [
      mojo.internal.StructField('remote_device', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connectivity_status', 8, 0, ash.device_sync.mojom.ConnectivityStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AccountStatusChangeDelegate
mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_Params', [
      mojo.internal.StructField('new_host_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_Params', [
      mojo.internal.StructField('new_host_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_Params', [
    ],
    [[0, 8]]);

ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccountStatusChangeDelegate', [
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
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec,
      null,
      [],
      false);
  }

  onNoLongerNewUser() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec,
      null,
      [],
      false);
  }

  onConnectedHostSwitchedForExistingUser(new_host_device_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec,
      null,
      [new_host_device_name],
      false);
  }

  onNewChromebookAddedForExistingUser(new_host_device_name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec,
      null,
      [new_host_device_name],
      false);
  }

  onBecameEligibleForWifiSync() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.multidevice_setup.mojom.AccountStatusChangeDelegate.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.AccountStatusChangeDelegate',
    'context');
  return remote.$;
};

ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccountStatusChangeDelegate', [
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onPotentialHostExistsForNewUser');
          const result = this.impl.onPotentialHostExistsForNewUser();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onNoLongerNewUser');
          const result = this.impl.onNoLongerNewUser();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectedHostSwitchedForExistingUser');
          const result = this.impl.onConnectedHostSwitchedForExistingUser(params.new_host_device_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewChromebookAddedForExistingUser');
          const result = this.impl.onNewChromebookAddedForExistingUser(params.new_host_device_name);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec);
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

ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver = ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver;

ash.multidevice_setup.mojom.AccountStatusChangeDelegatePtr = ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote;
ash.multidevice_setup.mojom.AccountStatusChangeDelegateRequest = ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver;


// Interface: HostStatusObserver
mojo.internal.Struct(
    ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec, 'ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_Params', [
      mojo.internal.StructField('host_status', 0, 0, ash.multidevice_setup.mojom.HostStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.HostStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.HostStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.HostStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.HostStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HostStatusObserver', [
      { explicit: null },
    ]);
  }

  onHostStatusChanged(host_status, host_device) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec,
      null,
      [host_status, host_device],
      false);
  }

};

ash.multidevice_setup.mojom.HostStatusObserver.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.HostStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.HostStatusObserver',
    'context');
  return remote.$;
};

ash.multidevice_setup.mojom.HostStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HostStatusObserver', [
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStatusChanged');
          const result = this.impl.onHostStatusChanged(params.host_status, params.host_device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.multidevice_setup.mojom.HostStatusObserverReceiver = ash.multidevice_setup.mojom.HostStatusObserverReceiver;

ash.multidevice_setup.mojom.HostStatusObserverPtr = ash.multidevice_setup.mojom.HostStatusObserverRemote;
ash.multidevice_setup.mojom.HostStatusObserverRequest = ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver;


// Interface: FeatureStateObserver
mojo.internal.Struct(
    ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec, 'ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_Params', [
      mojo.internal.StructField('feature_states_map', 0, 0, mojo.internal.Map(ash.multidevice_setup.mojom.FeatureSpec.$, ash.multidevice_setup.mojom.FeatureStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.FeatureStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.FeatureStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.FeatureStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.FeatureStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FeatureStateObserver', [
      { explicit: null },
    ]);
  }

  onFeatureStatesChanged(feature_states_map) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec,
      null,
      [feature_states_map],
      false);
  }

};

ash.multidevice_setup.mojom.FeatureStateObserver.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.FeatureStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.FeatureStateObserver',
    'context');
  return remote.$;
};

ash.multidevice_setup.mojom.FeatureStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FeatureStateObserver', [
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onFeatureStatesChanged');
          const result = this.impl.onFeatureStatesChanged(params.feature_states_map);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.multidevice_setup.mojom.FeatureStateObserverReceiver = ash.multidevice_setup.mojom.FeatureStateObserverReceiver;

ash.multidevice_setup.mojom.FeatureStateObserverPtr = ash.multidevice_setup.mojom.FeatureStateObserverRemote;
ash.multidevice_setup.mojom.FeatureStateObserverRequest = ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver;


// Interface: MultiDeviceSetup
mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_Params', [
      mojo.internal.StructField('delegate', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.AccountStatusChangeDelegateSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.HostStatusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.FeatureStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParams', [
      mojo.internal.StructField('eligible_host_devices', 0, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParams', [
      mojo.internal.StructField('eligible_host_devices', 0, 0, mojo.internal.Array(ash.multidevice_setup.mojom.HostDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_Params', [
      mojo.internal.StructField('instance_id_or_legacy_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParams', [
      mojo.internal.StructField('host_status', 0, 0, ash.multidevice_setup.mojom.HostStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_Params', [
      mojo.internal.StructField('feature', 0, 0, ash.multidevice_setup.mojom.FeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParams', [
      mojo.internal.StructField('feature_states_map', 0, 0, mojo.internal.Map(ash.multidevice_setup.mojom.FeatureSpec.$, ash.multidevice_setup.mojom.FeatureStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_Params', [
      mojo.internal.StructField('type', 0, 0, ash.multidevice_setup.mojom.EventTypeForDebuggingSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_Params', [
      mojo.internal.StructField('qs_phone_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParams', [
      mojo.internal.StructField('qs_phone_instance_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetupRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.MultiDeviceSetup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.MultiDeviceSetupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MultiDeviceSetup', [
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

  setAccountStatusChangeDelegate(delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec,
      null,
      [delegate],
      false);
  }

  addHostStatusObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addFeatureStateObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getEligibleHostDevices() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec,
      [],
      false);
  }

  getEligibleActiveHostDevices() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec,
      [],
      false);
  }

  setHostDevice(instance_id_or_legacy_device_id, auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec,
      [instance_id_or_legacy_device_id, auth_token],
      false);
  }

  removeHostDevice() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec,
      null,
      [],
      false);
  }

  getHostStatus() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec,
      [],
      false);
  }

  setFeatureEnabledState(feature, enabled, auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec,
      [feature, enabled, auth_token],
      false);
  }

  getFeatureStates() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec,
      [],
      false);
  }

  retrySetHostNow() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec,
      [],
      false);
  }

  triggerEventForDebugging(type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec,
      [type],
      false);
  }

  setQuickStartPhoneInstanceID(qs_phone_instance_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec,
      null,
      [qs_phone_instance_id],
      false);
  }

  getQuickStartPhoneInstanceID() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec,
      [],
      false);
  }

};

ash.multidevice_setup.mojom.MultiDeviceSetup.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.MultiDeviceSetupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.MultiDeviceSetup',
    'context');
  return remote.$;
};

ash.multidevice_setup.mojom.MultiDeviceSetupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MultiDeviceSetup', [
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec);
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setAccountStatusChangeDelegate');
          const result = this.impl.setAccountStatusChangeDelegate(params.delegate);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addHostStatusObserver');
          const result = this.impl.addHostStatusObserver(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addFeatureStateObserver');
          const result = this.impl.addFeatureStateObserver(params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getEligibleHostDevices');
          const result = this.impl.getEligibleHostDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getEligibleActiveHostDevices');
          const result = this.impl.getEligibleActiveHostDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setHostDevice');
          const result = this.impl.setHostDevice(params.instance_id_or_legacy_device_id, params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.removeHostDevice');
          const result = this.impl.removeHostDevice();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getHostStatus');
          const result = this.impl.getHostStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setFeatureEnabledState');
          const result = this.impl.setFeatureEnabledState(params.feature, params.enabled, params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeatureStates');
          const result = this.impl.getFeatureStates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.retrySetHostNow');
          const result = this.impl.retrySetHostNow();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerEventForDebugging');
          const result = this.impl.triggerEventForDebugging(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setQuickStartPhoneInstanceID');
          const result = this.impl.setQuickStartPhoneInstanceID(params.qs_phone_instance_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getQuickStartPhoneInstanceID');
          const result = this.impl.getQuickStartPhoneInstanceID();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec);
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

ash.multidevice_setup.mojom.MultiDeviceSetupReceiver = ash.multidevice_setup.mojom.MultiDeviceSetupReceiver;

ash.multidevice_setup.mojom.MultiDeviceSetupPtr = ash.multidevice_setup.mojom.MultiDeviceSetupRemote;
ash.multidevice_setup.mojom.MultiDeviceSetupRequest = ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver;


// Interface: PrivilegedHostDeviceSetter
mojo.internal.Struct(
    ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_Params', [
      mojo.internal.StructField('instance_id_or_legacy_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec, 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrivilegedHostDeviceSetter', [
      { explicit: null },
    ]);
  }

  setHostDevice(instance_id_or_legacy_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec,
      ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec,
      [instance_id_or_legacy_device_id],
      false);
  }

};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter',
    'context');
  return remote.$;
};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrivilegedHostDeviceSetter', [
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
             decoder.decodeStructInline(ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setHostDevice');
          const result = this.impl.setHostDevice(params.instance_id_or_legacy_device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec);
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

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver;

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPtr = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote;
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRequest = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver;

