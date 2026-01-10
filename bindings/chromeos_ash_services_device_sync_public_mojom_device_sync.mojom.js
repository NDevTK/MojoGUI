// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/device_sync/public/mojom/device_sync.mojom
// Module: ash.device_sync.mojom

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
ash.device_sync = ash.device_sync || {};
ash.device_sync.mojom = ash.device_sync.mojom || {};
var mojo_base = mojo_base || {};

ash.device_sync.mojom.NetworkRequestResultSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.FeatureStatusChangeSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.CryptAuthServiceSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.ConnectivityStatusSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.GroupPrivateKeyStatusSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.BetterTogetherMetadataStatusSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.FindEligibleDevicesResponseSpec = { $: {} };
ash.device_sync.mojom.DeviceActivityStatusSpec = { $: {} };
ash.device_sync.mojom.DebugInfoSpec = { $: {} };
ash.device_sync.mojom.DeviceSyncObserver = {};
ash.device_sync.mojom.DeviceSyncObserver.$interfaceName = 'ash.device_sync.mojom.DeviceSyncObserver';
ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync = {};
ash.device_sync.mojom.DeviceSync.$interfaceName = 'ash.device_sync.mojom.DeviceSync';
ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec = { $: {} };

// Enum: NetworkRequestResult
ash.device_sync.mojom.NetworkRequestResult = {
  kSuccess: 0,
  kRequestSucceededButUnexpectedResult: 1,
  kServiceNotYetInitialized: 2,
  kOffline: 3,
  kEndpointNotFound: 4,
  kAuthenticationError: 5,
  kBadRequest: 6,
  kResponseMalformed: 7,
  kInternalServerError: 8,
  kUnknown: 9,
};

// Enum: FeatureStatusChange
ash.device_sync.mojom.FeatureStatusChange = {
  kEnableExclusively: 0,
  kEnableNonExclusively: 1,
  kDisable: 2,
};

// Enum: CryptAuthService
ash.device_sync.mojom.CryptAuthService = {
  kEnrollment: 0,
  kDeviceSync: 1,
};

// Enum: ConnectivityStatus
ash.device_sync.mojom.ConnectivityStatus = {
  kOnline: 0,
  kOffline: 1,
  kUnknownConnectivity: 2,
};

// Enum: GroupPrivateKeyStatus
ash.device_sync.mojom.GroupPrivateKeyStatus = {
  kStatusUnavailableBecauseDeviceSyncIsNotInitialized: 0,
  kStatusUnavailableBecauseNoDeviceSyncerSet: 1,
  kWaitingForGroupPrivateKey: 2,
  kNoEncryptedGroupPrivateKeyReceived: 3,
  kEncryptedGroupPrivateKeyEmpty: 4,
  kLocalDeviceSyncBetterTogetherKeyMissing: 5,
  kGroupPrivateKeyDecryptionFailed: 6,
  kGroupPrivateKeySuccessfullyDecrypted: 7,
};

// Enum: BetterTogetherMetadataStatus
ash.device_sync.mojom.BetterTogetherMetadataStatus = {
  kStatusUnavailableBecauseDeviceSyncIsNotInitialized: 0,
  kStatusUnavailableBecauseNoDeviceSyncerSet: 1,
  kWaitingToProcessDeviceMetadata: 2,
  kGroupPrivateKeyMissing: 3,
  kEncryptedMetadataEmpty: 4,
  kMetadataDecrypted: 5,
};

// Struct: FindEligibleDevicesResponse
mojo.internal.Struct(
    ash.device_sync.mojom.FindEligibleDevicesResponseSpec, 'ash.device_sync.mojom.FindEligibleDevicesResponse', [
      mojo.internal.StructField('eligible_devices', 0, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('ineligible_devices', 8, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceActivityStatus
mojo.internal.Struct(
    ash.device_sync.mojom.DeviceActivityStatusSpec, 'ash.device_sync.mojom.DeviceActivityStatus', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_activity_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connectivity_status', 16, 0, ash.device_sync.mojom.ConnectivityStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_update_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DebugInfo
mojo.internal.Struct(
    ash.device_sync.mojom.DebugInfoSpec, 'ash.device_sync.mojom.DebugInfo', [
      mojo.internal.StructField('last_enrollment_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_to_next_enrollment_attempt', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_sync_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_to_next_sync_attempt', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_recovering_from_enrollment_failure', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_enrollment_in_progress', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_recovering_from_sync_failure', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_sync_in_progress', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: DeviceSyncObserver
mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec, 'ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec, 'ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_Params', [
    ],
    [[0, 8]]);

ash.device_sync.mojom.DeviceSyncObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.device_sync.mojom.DeviceSyncObserverRemote = class {
  static get $interfaceName() {
    return 'ash.device_sync.mojom.DeviceSyncObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.device_sync.mojom.DeviceSyncObserverPendingReceiver,
      handle);
    this.$ = new ash.device_sync.mojom.DeviceSyncObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.device_sync.mojom.DeviceSyncObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceSyncObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onEnrollmentFinished() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec,
      null,
      [],
      false);
  }

  onNewDevicesSynced() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.device_sync.mojom.DeviceSyncObserver.getRemote = function() {
  let remote = new ash.device_sync.mojom.DeviceSyncObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.device_sync.mojom.DeviceSyncObserver',
    'context');
  return remote.$;
};

ash.device_sync.mojom.DeviceSyncObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceSyncObserver', [
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
        
        // Try Method 0: OnEnrollmentFinished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnrollmentFinished (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNewDevicesSynced
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewDevicesSynced (1)');
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
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEnrollmentFinished');
          const result = this.impl.onEnrollmentFinished();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewDevicesSynced');
          const result = this.impl.onNewDevicesSynced();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.device_sync.mojom.DeviceSyncObserverReceiver = ash.device_sync.mojom.DeviceSyncObserverReceiver;

ash.device_sync.mojom.DeviceSyncObserverPtr = ash.device_sync.mojom.DeviceSyncObserverRemote;
ash.device_sync.mojom.DeviceSyncObserverRequest = ash.device_sync.mojom.DeviceSyncObserverPendingReceiver;


// Interface: DeviceSync
mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.device_sync.mojom.DeviceSyncObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceSyncNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.device_sync.mojom.GroupPrivateKeyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.device_sync.mojom.BetterTogetherMetadataStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetSyncedDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParams', [
      mojo.internal.StructField('local_device', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_Params', [
      mojo.internal.StructField('device_public_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('software_feature', 8, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_exclusive', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetFeatureStatus_Params', [
      mojo.internal.StructField('device_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('feature', 8, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_change', 16, 0, ash.device_sync.mojom.FeatureStatusChangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_FindEligibleDevices_Params', [
      mojo.internal.StructField('software_feature', 0, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, ash.device_sync.mojom.FindEligibleDevicesResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_NotifyDevices_Params', [
      mojo.internal.StructField('device_instance_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('cryptauth_service', 8, 0, ash.device_sync.mojom.CryptAuthServiceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 16, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_activity_statuses', 8, 0, mojo.internal.Array(ash.device_sync.mojom.DeviceActivityStatusSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDebugInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParams', [
      mojo.internal.StructField('debug_info', 0, 0, ash.device_sync.mojom.DebugInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.device_sync.mojom.DeviceSyncPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.device_sync.mojom.DeviceSyncRemote = class {
  static get $interfaceName() {
    return 'ash.device_sync.mojom.DeviceSync';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.device_sync.mojom.DeviceSyncPendingReceiver,
      handle);
    this.$ = new ash.device_sync.mojom.DeviceSyncRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.device_sync.mojom.DeviceSyncRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceSync', [
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

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  forceEnrollmentNow() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec,
      [],
      false);
  }

  forceSyncNow() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec,
      [],
      false);
  }

  getGroupPrivateKeyStatus() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec,
      [],
      false);
  }

  getBetterTogetherMetadataStatus() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec,
      [],
      false);
  }

  getSyncedDevices() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec,
      [],
      false);
  }

  getLocalDeviceMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec,
      [],
      false);
  }

  setSoftwareFeatureState(device_public_key, software_feature, enabled, is_exclusive) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec,
      [device_public_key, software_feature, enabled, is_exclusive],
      false);
  }

  setFeatureStatus(device_instance_id, feature, status_change) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec,
      [device_instance_id, feature, status_change],
      false);
  }

  findEligibleDevices(software_feature) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec,
      [software_feature],
      false);
  }

  notifyDevices(device_instance_ids, cryptauth_service, feature) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec,
      [device_instance_ids, cryptauth_service, feature],
      false);
  }

  getDevicesActivityStatus() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec,
      [],
      false);
  }

  getDebugInfo() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec,
      [],
      false);
  }

};

ash.device_sync.mojom.DeviceSync.getRemote = function() {
  let remote = new ash.device_sync.mojom.DeviceSyncRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.device_sync.mojom.DeviceSync',
    'context');
  return remote.$;
};

ash.device_sync.mojom.DeviceSyncReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceSync', [
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ForceEnrollmentNow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceEnrollmentNow (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ForceSyncNow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceSyncNow (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetGroupPrivateKeyStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGroupPrivateKeyStatus (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetBetterTogetherMetadataStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBetterTogetherMetadataStatus (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetSyncedDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSyncedDevices (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetLocalDeviceMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLocalDeviceMetadata (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetSoftwareFeatureState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSoftwareFeatureState (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetFeatureStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFeatureStatus (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: FindEligibleDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindEligibleDevices (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: NotifyDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyDevices (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetDevicesActivityStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevicesActivityStatus (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetDebugInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugInfo (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceEnrollmentNow');
          const result = this.impl.forceEnrollmentNow();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceSyncNow');
          const result = this.impl.forceSyncNow();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGroupPrivateKeyStatus');
          const result = this.impl.getGroupPrivateKeyStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBetterTogetherMetadataStatus');
          const result = this.impl.getBetterTogetherMetadataStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSyncedDevices');
          const result = this.impl.getSyncedDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLocalDeviceMetadata');
          const result = this.impl.getLocalDeviceMetadata();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSoftwareFeatureState');
          const result = this.impl.setSoftwareFeatureState(params.device_public_key, params.software_feature, params.enabled, params.is_exclusive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFeatureStatus');
          const result = this.impl.setFeatureStatus(params.device_instance_id, params.feature, params.status_change);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.findEligibleDevices');
          const result = this.impl.findEligibleDevices(params.software_feature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyDevices');
          const result = this.impl.notifyDevices(params.device_instance_ids, params.cryptauth_service, params.feature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevicesActivityStatus');
          const result = this.impl.getDevicesActivityStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDebugInfo');
          const result = this.impl.getDebugInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec);
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

ash.device_sync.mojom.DeviceSyncReceiver = ash.device_sync.mojom.DeviceSyncReceiver;

ash.device_sync.mojom.DeviceSyncPtr = ash.device_sync.mojom.DeviceSyncRemote;
ash.device_sync.mojom.DeviceSyncRequest = ash.device_sync.mojom.DeviceSyncPendingReceiver;

