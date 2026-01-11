// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom
 // Module: nearby_share.mojom

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
 

 mojo.internal.bindings.nearby_share = mojo.internal.bindings.nearby_share || {};
mojo.internal.bindings.nearby_share.mojom = mojo.internal.bindings.nearby_share.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.nearby_share.mojom.DataUsageSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby_share.mojom.VisibilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby_share.mojom.DeviceNameValidationResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby_share.mojom.FastInitiationNotificationStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby_share.mojom.ContactIdentifierSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.ContactRecordSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver = {};
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverSpec = { $ : {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver.$interfaceName = 'nearby_share.mojom.NearbyShareSettingsObserver';
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings = {};
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsSpec = { $ : {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings.$interfaceName = 'nearby_share.mojom.NearbyShareSettings';
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver = {};
mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverSpec = { $ : {} };
mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver.$interfaceName = 'nearby_share.mojom.DownloadContactsObserver';
mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.ContactManager = {};
mojo.internal.bindings.nearby_share.mojom.ContactManagerSpec = { $ : {} };
mojo.internal.bindings.nearby_share.mojom.ContactManager.$interfaceName = 'nearby_share.mojom.ContactManager';
mojo.internal.bindings.nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec = { $: {} };
mojo.internal.bindings.nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec = { $: {} };

// Enum: DataUsage
mojo.internal.bindings.nearby_share.mojom.DataUsage = {
  kUnknown: 0,
  kOffline: 1,
  kOnline: 2,
  kWifiOnly: 3,
};

// Enum: Visibility
mojo.internal.bindings.nearby_share.mojom.Visibility = {
  kUnknown: 0,
  kNoOne: 1,
  kAllContacts: 2,
  kSelectedContacts: 3,
  kYourDevices: 4,
};

// Enum: DeviceNameValidationResult
mojo.internal.bindings.nearby_share.mojom.DeviceNameValidationResult = {
  kValid: 0,
  kErrorEmpty: 1,
  kErrorTooLong: 2,
  kErrorNotValidUtf8: 3,
};

// Enum: FastInitiationNotificationState
mojo.internal.bindings.nearby_share.mojom.FastInitiationNotificationState = {
  kEnabled: 0,
  kDisabledByUser: 1,
  kDisabledByFeature: 2,
};

// Union: ContactIdentifier
mojo.internal.Union(
    mojo.internal.bindings.nearby_share.mojom.ContactIdentifierSpec, 'nearby_share.mojom.ContactIdentifier', {
      'arg_obfuscated_gaia': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_phone_number': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_account_name': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: ContactRecord
mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.ContactRecordSpec, 'nearby_share.mojom.ContactRecord', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_person_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_identifiers', 24, 0, mojo.internal.Array(mojo.internal.bindings.nearby_share.mojom.ContactIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: NearbyShareSettingsObserver
mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.nearby_share.mojom.FastInitiationNotificationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_Params', [
      mojo.internal.StructField('arg_is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_Params', [
      mojo.internal.StructField('arg_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_Params', [
      mojo.internal.StructField('arg_data_usage', 0, 0, mojo.internal.bindings.nearby_share.mojom.DataUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.nearby_share.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_Params', [
      mojo.internal.StructField('arg_visible_contact_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_Params', [
      mojo.internal.StructField('arg_is_complete', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.NearbyShareSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEnabledChanged(arg_enabled) {
    return this.$.onEnabledChanged(arg_enabled);
  }
  onFastInitiationNotificationStateChanged(arg_state) {
    return this.$.onFastInitiationNotificationStateChanged(arg_state);
  }
  onIsFastInitiationHardwareSupportedChanged(arg_is_supported) {
    return this.$.onIsFastInitiationHardwareSupportedChanged(arg_is_supported);
  }
  onDeviceNameChanged(arg_device_name) {
    return this.$.onDeviceNameChanged(arg_device_name);
  }
  onDataUsageChanged(arg_data_usage) {
    return this.$.onDataUsageChanged(arg_data_usage);
  }
  onVisibilityChanged(arg_visibility) {
    return this.$.onVisibilityChanged(arg_visibility);
  }
  onAllowedContactsChanged(arg_visible_contact_ids) {
    return this.$.onAllowedContactsChanged(arg_visible_contact_ids);
  }
  onIsOnboardingCompleteChanged(arg_is_complete) {
    return this.$.onIsOnboardingCompleteChanged(arg_is_complete);
  }
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.NearbyShareSettingsObserver', [
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

  onEnabledChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  onFastInitiationNotificationStateChanged(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onIsFastInitiationHardwareSupportedChanged(arg_is_supported) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec,
      null,
      [arg_is_supported],
      false);
  }

  onDeviceNameChanged(arg_device_name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec,
      null,
      [arg_device_name],
      false);
  }

  onDataUsageChanged(arg_data_usage) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec,
      null,
      [arg_data_usage],
      false);
  }

  onVisibilityChanged(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  onAllowedContactsChanged(arg_visible_contact_ids) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec,
      null,
      [arg_visible_contact_ids],
      false);
  }

  onIsOnboardingCompleteChanged(arg_is_complete) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec,
      null,
      [arg_is_complete],
      false);
  }

};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.NearbyShareSettingsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.NearbyShareSettingsObserver', [
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
        
        // Try Method 0: OnEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnabledChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFastInitiationNotificationStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFastInitiationNotificationStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnIsFastInitiationHardwareSupportedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIsFastInitiationHardwareSupportedChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnDeviceNameChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceNameChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnDataUsageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDataUsageChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisibilityChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnAllowedContactsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAllowedContactsChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnIsOnboardingCompleteChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIsOnboardingCompleteChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEnabledChanged');
          const result = this.impl.onEnabledChanged(params.arg_enabled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFastInitiationNotificationStateChanged');
          const result = this.impl.onFastInitiationNotificationStateChanged(params.arg_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIsFastInitiationHardwareSupportedChanged');
          const result = this.impl.onIsFastInitiationHardwareSupportedChanged(params.arg_is_supported);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceNameChanged');
          const result = this.impl.onDeviceNameChanged(params.arg_device_name);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDataUsageChanged');
          const result = this.impl.onDataUsageChanged(params.arg_data_usage);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityChanged');
          const result = this.impl.onVisibilityChanged(params.arg_visibility);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAllowedContactsChanged');
          const result = this.impl.onAllowedContactsChanged(params.arg_visible_contact_ids);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIsOnboardingCompleteChanged');
          const result = this.impl.onIsOnboardingCompleteChanged(params.arg_is_complete);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverReceiver = mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverReceiver;

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverPtr = mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverRemote;
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverRequest = mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverPendingReceiver;


// Interface: NearbyShareSettings
mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParams', [
      mojo.internal.StructField('arg_completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_Params', [
      mojo.internal.StructField('arg_completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.nearby_share.mojom.FastInitiationNotificationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.nearby_share.mojom.FastInitiationNotificationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParams', [
      mojo.internal.StructField('arg_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDeviceName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParams', [
      mojo.internal.StructField('arg_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_Params', [
      mojo.internal.StructField('arg_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.nearby_share.mojom.DeviceNameValidationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetDeviceName_Params', [
      mojo.internal.StructField('arg_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.nearby_share.mojom.DeviceNameValidationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDataUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParams', [
      mojo.internal.StructField('arg_data_usage', 0, 0, mojo.internal.bindings.nearby_share.mojom.DataUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetDataUsage_Params', [
      mojo.internal.StructField('arg_data_usage', 0, 0, mojo.internal.bindings.nearby_share.mojom.DataUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParams', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.nearby_share.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetVisibility_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.nearby_share.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParams', [
      mojo.internal.StructField('arg_allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_Params', [
      mojo.internal.StructField('arg_allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.NearbyShareSettings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addSettingsObserver(arg_observer) {
    return this.$.addSettingsObserver(arg_observer);
  }
  getEnabled() {
    return this.$.getEnabled();
  }
  setEnabled(arg_enabled) {
    return this.$.setEnabled(arg_enabled);
  }
  isOnboardingComplete() {
    return this.$.isOnboardingComplete();
  }
  setIsOnboardingComplete(arg_completed) {
    return this.$.setIsOnboardingComplete(arg_completed);
  }
  getFastInitiationNotificationState() {
    return this.$.getFastInitiationNotificationState();
  }
  setFastInitiationNotificationState(arg_state) {
    return this.$.setFastInitiationNotificationState(arg_state);
  }
  getIsFastInitiationHardwareSupported() {
    return this.$.getIsFastInitiationHardwareSupported();
  }
  getDeviceName() {
    return this.$.getDeviceName();
  }
  validateDeviceName(arg_device_name) {
    return this.$.validateDeviceName(arg_device_name);
  }
  setDeviceName(arg_device_name) {
    return this.$.setDeviceName(arg_device_name);
  }
  getDataUsage() {
    return this.$.getDataUsage();
  }
  setDataUsage(arg_data_usage) {
    return this.$.setDataUsage(arg_data_usage);
  }
  getVisibility() {
    return this.$.getVisibility();
  }
  setVisibility(arg_visibility) {
    return this.$.setVisibility(arg_visibility);
  }
  getAllowedContacts() {
    return this.$.getAllowedContacts();
  }
  setAllowedContacts(arg_allowed_contacts) {
    return this.$.setAllowedContacts(arg_allowed_contacts);
  }
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.NearbyShareSettings', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addSettingsObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  isOnboardingComplete() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec,
      [],
      false);
  }

  setIsOnboardingComplete(arg_completed) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec,
      null,
      [arg_completed],
      false);
  }

  getFastInitiationNotificationState() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec,
      [],
      false);
  }

  setFastInitiationNotificationState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  getIsFastInitiationHardwareSupported() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec,
      [],
      false);
  }

  getDeviceName() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec,
      [],
      false);
  }

  validateDeviceName(arg_device_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec,
      [arg_device_name],
      false);
  }

  setDeviceName(arg_device_name) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec,
      [arg_device_name],
      false);
  }

  getDataUsage() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec,
      [],
      false);
  }

  setDataUsage(arg_data_usage) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec,
      null,
      [arg_data_usage],
      false);
  }

  getVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec,
      [],
      false);
  }

  setVisibility(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  getAllowedContacts() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec,
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec,
      [],
      false);
  }

  setAllowedContacts(arg_allowed_contacts) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec,
      null,
      [arg_allowed_contacts],
      false);
  }

};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.NearbyShareSettings',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.NearbyShareSettings', [
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
        
        // Try Method 0: AddSettingsObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSettingsObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsOnboardingComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsOnboardingComplete (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetIsOnboardingComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsOnboardingComplete (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetFastInitiationNotificationState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFastInitiationNotificationState (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetFastInitiationNotificationState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFastInitiationNotificationState (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetIsFastInitiationHardwareSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsFastInitiationHardwareSupported (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetDeviceName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceName (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ValidateDeviceName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ValidateDeviceName (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetDeviceName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDeviceName (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetDataUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDataUsage (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetDataUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDataUsage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVisibility (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisibility (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetAllowedContacts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllowedContacts (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetAllowedContacts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowedContacts (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addSettingsObserver');
          const result = this.impl.addSettingsObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEnabled');
          const result = this.impl.getEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEnabled FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnabled');
          const result = this.impl.setEnabled(params.arg_enabled);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isOnboardingComplete');
          const result = this.impl.isOnboardingComplete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsOnboardingComplete FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsOnboardingComplete');
          const result = this.impl.setIsOnboardingComplete(params.arg_completed);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFastInitiationNotificationState');
          const result = this.impl.getFastInitiationNotificationState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFastInitiationNotificationState FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFastInitiationNotificationState');
          const result = this.impl.setFastInitiationNotificationState(params.arg_state);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsFastInitiationHardwareSupported');
          const result = this.impl.getIsFastInitiationHardwareSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetIsFastInitiationHardwareSupported FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceName');
          const result = this.impl.getDeviceName();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceName FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.validateDeviceName');
          const result = this.impl.validateDeviceName(params.arg_device_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ValidateDeviceName FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDeviceName');
          const result = this.impl.setDeviceName(params.arg_device_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetDeviceName FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDataUsage');
          const result = this.impl.getDataUsage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDataUsage FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDataUsage');
          const result = this.impl.setDataUsage(params.arg_data_usage);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVisibility');
          const result = this.impl.getVisibility();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVisibility FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVisibility');
          const result = this.impl.setVisibility(params.arg_visibility);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllowedContacts');
          const result = this.impl.getAllowedContacts();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllowedContacts FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAllowedContacts');
          const result = this.impl.setAllowedContacts(params.arg_allowed_contacts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsReceiver = mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsReceiver;

mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsPtr = mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsRemote;
mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsRequest = mojo.internal.bindings.nearby_share.mojom.NearbyShareSettingsPendingReceiver;


// Interface: DownloadContactsObserver
mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec, 'nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_Params', [
      mojo.internal.StructField('arg_allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_contacts', 8, 0, mojo.internal.Array(mojo.internal.bindings.nearby_share.mojom.ContactRecordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_num_unreachable_contacts_filtered_out', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec, 'nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.DownloadContactsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onContactsDownloaded(arg_allowed_contacts, arg_contacts, arg_num_unreachable_contacts_filtered_out) {
    return this.$.onContactsDownloaded(arg_allowed_contacts, arg_contacts, arg_num_unreachable_contacts_filtered_out);
  }
  onContactsDownloadFailed() {
    return this.$.onContactsDownloadFailed();
  }
};

mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.DownloadContactsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onContactsDownloaded(arg_allowed_contacts, arg_contacts, arg_num_unreachable_contacts_filtered_out) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec,
      null,
      [arg_allowed_contacts, arg_contacts, arg_num_unreachable_contacts_filtered_out],
      false);
  }

  onContactsDownloadFailed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.DownloadContactsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.DownloadContactsObserver', [
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
        
        // Try Method 0: OnContactsDownloaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContactsDownloaded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnContactsDownloadFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContactsDownloadFailed (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContactsDownloaded');
          const result = this.impl.onContactsDownloaded(params.arg_allowed_contacts, params.arg_contacts, params.arg_num_unreachable_contacts_filtered_out);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContactsDownloadFailed');
          const result = this.impl.onContactsDownloadFailed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverReceiver = mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverReceiver;

mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverPtr = mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverRemote;
mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverRequest = mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverPendingReceiver;


// Interface: ContactManager
mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec, 'nearby_share.mojom.ContactManager_AddDownloadContactsObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.nearby_share.mojom.DownloadContactsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec, 'nearby_share.mojom.ContactManager_DownloadContacts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec, 'nearby_share.mojom.ContactManager_SetAllowedContacts_Params', [
      mojo.internal.StructField('arg_allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.nearby_share.mojom.ContactManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.nearby_share.mojom.ContactManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ContactManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.nearby_share.mojom.ContactManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.nearby_share.mojom.ContactManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addDownloadContactsObserver(arg_observer) {
    return this.$.addDownloadContactsObserver(arg_observer);
  }
  downloadContacts() {
    return this.$.downloadContacts();
  }
  setAllowedContacts(arg_allowed_contacts) {
    return this.$.setAllowedContacts(arg_allowed_contacts);
  }
};

mojo.internal.bindings.nearby_share.mojom.ContactManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.ContactManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addDownloadContactsObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  downloadContacts() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec,
      null,
      [],
      false);
  }

  setAllowedContacts(arg_allowed_contacts) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec,
      null,
      [arg_allowed_contacts],
      false);
  }

};

mojo.internal.bindings.nearby_share.mojom.ContactManager.getRemote = function() {
  let remote = new mojo.internal.bindings.nearby_share.mojom.ContactManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ContactManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.nearby_share.mojom.ContactManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('nearby_share.mojom.ContactManager', [
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
        
        // Try Method 0: AddDownloadContactsObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDownloadContactsObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DownloadContacts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadContacts (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetAllowedContacts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowedContacts (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDownloadContactsObserver');
          const result = this.impl.addDownloadContactsObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadContacts');
          const result = this.impl.downloadContacts();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAllowedContacts');
          const result = this.impl.setAllowedContacts(params.arg_allowed_contacts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.nearby_share.mojom.ContactManagerReceiver = mojo.internal.bindings.nearby_share.mojom.ContactManagerReceiver;

mojo.internal.bindings.nearby_share.mojom.ContactManagerPtr = mojo.internal.bindings.nearby_share.mojom.ContactManagerRemote;
mojo.internal.bindings.nearby_share.mojom.ContactManagerRequest = mojo.internal.bindings.nearby_share.mojom.ContactManagerPendingReceiver;

