// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_presence.mojom
 // Module: ash.nearby.presence.mojom

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
mojo.internal.bindings.ash.nearby = mojo.internal.bindings.ash.nearby || {};
mojo.internal.bindings.ash.nearby.presence = mojo.internal.bindings.ash.nearby.presence || {};
mojo.internal.bindings.ash.nearby.presence.mojom = mojo.internal.bindings.ash.nearby.presence.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.nearby.presence.mojom.IdentityTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.nearby.presence.mojom.ActionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.nearby.presence.mojom.PublicCredentialTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.nearby.presence.mojom.CredentialTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.nearby.presence.mojom.ScanRequestSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.PrivateKeySpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.PresenceScanFilterSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.MetadataSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.SharedCredentialSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.LocalCredentialSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.ScanSession = {};
mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionSpec = { $ : {} };
mojo.internal.bindings.ash.nearby.presence.mojom.ScanSession.$interfaceName = 'ash.nearby.presence.mojom.ScanSession';
mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver = {};
mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverSpec = { $ : {} };
mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver.$interfaceName = 'ash.nearby.presence.mojom.ScanObserver';
mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence = {};
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceSpec = { $ : {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence.$interfaceName = 'ash.nearby.presence.mojom.NearbyPresence';
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec = { $: {} };

// Enum: IdentityType
mojo.internal.bindings.ash.nearby.presence.mojom.IdentityType = {
  kIdentityTypeUnspecified: 0,
  kIdentityTypePrivateGroup: 1,
  kIdentityTypeContactsGroup: 2,
  kIdentityTypePublic: 3,
};

// Enum: PresenceDeviceType
mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceType = {
  kUnknown: 0,
  kPhone: 1,
  kTablet: 2,
  kDisplay: 3,
  kLaptop: 4,
  kTv: 5,
  kWatch: 6,
  kChromeos: 7,
  kFoldable: 8,
};

// Enum: ActionType
mojo.internal.bindings.ash.nearby.presence.mojom.ActionType = {
  kCallTransferAction: 4,
  kActiveUnlockAction: 8,
  kNearbyShareAction: 9,
  kInstantTetheringAction: 10,
  kPhoneHubAction: 11,
  kPresenceManagerAction: 12,
  kFinderAction: 13,
  kFastPairSassAction: 14,
  kTapToTransferAction: 15,
  kLastAction: 16,
};

// Enum: PublicCredentialType
mojo.internal.bindings.ash.nearby.presence.mojom.PublicCredentialType = {
  kLocalPublicCredential: 1,
  kRemotePublicCredential: 2,
};

// Enum: CredentialType
mojo.internal.bindings.ash.nearby.presence.mojom.CredentialType = {
  kCredentialTypeUnknown: 0,
  kCredentialTypeDevice: 1,
  kCredentialTypeGaia: 2,
};

// Struct: ScanRequest
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.ScanRequestSpec, 'ash.nearby.presence.mojom.ScanRequest', [
      mojo.internal.StructField('arg_account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_types', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.nearby.presence.mojom.IdentityTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_scan_filters', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.nearby.presence.mojom.PresenceScanFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrivateKey
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.PrivateKeySpec, 'ash.nearby.presence.mojom.PrivateKey', [
      mojo.internal.StructField('arg_certificate_alias', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PresenceScanFilter
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.PresenceScanFilterSpec, 'ash.nearby.presence.mojom.PresenceScanFilter', [
      mojo.internal.StructField('arg_device_type', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Metadata
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.MetadataSpec, 'ash.nearby.presence.mojom.Metadata', [
      mojo.internal.StructField('arg_device_type', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bluetooth_mac_address', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SharedCredential
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.SharedCredentialSpec, 'ash.nearby.presence.mojom.SharedCredential', [
      mojo.internal.StructField('arg_key_seed', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_start_time_millis', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_time_millis', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_encrypted_metadata_bytes_v0', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_metadata_encryption_key_tag_v0', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_signature_verification_key', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_advertisement_signature_verification_key', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_type', 56, 0, mojo.internal.bindings.ash.nearby.presence.mojom.IdentityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 64, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_credential_type', 72, 0, mojo.internal.bindings.ash.nearby.presence.mojom.CredentialTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_encrypted_metadata_bytes_v1', 80, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_token_short_salt_adv_hmac_key_v1', 88, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 96, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dusi', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_signature_version', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_token_extended_salt_adv_hmac_key_v1', 120, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_token_signed_adv_hmac_key_v1', 128, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: PresenceDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec, 'ash.nearby.presence.mojom.PresenceDevice', [
      mojo.internal.StructField('arg_endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_actions', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.nearby.presence.mojom.ActionTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_stable_device_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_metadata', 24, 0, mojo.internal.bindings.ash.nearby.presence.mojom.MetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypt_shared_credential', 32, 0, mojo.internal.bindings.ash.nearby.presence.mojom.SharedCredentialSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LocalCredential
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.LocalCredentialSpec, 'ash.nearby.presence.mojom.LocalCredential', [
      mojo.internal.StructField('arg_secret_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_seed', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_start_time_millis', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_time_millis', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_metadata_encryption_key_v0', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_advertisement_signing_key', 40, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PrivateKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_signing_key', 48, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PrivateKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_type', 56, 0, mojo.internal.bindings.ash.nearby.presence.mojom.IdentityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_consumed_salts', 64, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_token_v1', 72, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 80, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signature_version', 88, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 104]]);

// Interface: ScanSession
mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.ScanSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.nearby.presence.mojom.ScanSession', [
    ]);
  }

};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanSession.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.ScanSession',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.nearby.presence.mojom.ScanSession', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionReceiver = mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionReceiver;

mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionPtr = mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionRemote;
mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionRequest = mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionPendingReceiver;


// Interface: ScanObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec, 'ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec, 'ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec, 'ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.ScanObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceFound(arg_device) {
    return this.$.onDeviceFound(arg_device);
  }
  onDeviceChanged(arg_device) {
    return this.$.onDeviceChanged(arg_device);
  }
  onDeviceLost(arg_device) {
    return this.$.onDeviceLost(arg_device);
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.nearby.presence.mojom.ScanObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceFound(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec,
      null,
      [arg_device],
      false);
  }

  onDeviceChanged(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec,
      null,
      [arg_device],
      false);
  }

  onDeviceLost(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec,
      null,
      [arg_device],
      false);
  }

};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.ScanObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.nearby.presence.mojom.ScanObserver', [
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
        
        // Try Method 0: OnDeviceFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceFound (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDeviceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDeviceLost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceLost (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceFound');
          const result = this.impl.onDeviceFound(params.arg_device);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceChanged');
          const result = this.impl.onDeviceChanged(params.arg_device);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceLost');
          const result = this.impl.onDeviceLost(params.arg_device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverReceiver = mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverReceiver;

mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverPtr = mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverRemote;
mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverRequest = mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverPendingReceiver;


// Interface: NearbyPresence
mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_StartScan_Params', [
      mojo.internal.StructField('arg_scan_request', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.ScanRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParams', [
      mojo.internal.StructField('arg_scan_session', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.nearby.presence.mojom.ScanSessionRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_Params', [
      mojo.internal.StructField('arg_scan_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.nearby.presence.mojom.ScanObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_Params', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.MetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_Params', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.ash.nearby.presence.mojom.MetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParams', [
      mojo.internal.StructField('arg_shared_credentials', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_Params', [
      mojo.internal.StructField('arg_shared_credentials', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_account_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_Params', [
      mojo.internal.StructField('arg_account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParams', [
      mojo.internal.StructField('arg_shared_credentials', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresencePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.NearbyPresence';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresencePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startScan(arg_scan_request) {
    return this.$.startScan(arg_scan_request);
  }
  setScanObserver(arg_scan_observer) {
    return this.$.setScanObserver(arg_scan_observer);
  }
  updateLocalDeviceMetadata(arg_metadata) {
    return this.$.updateLocalDeviceMetadata(arg_metadata);
  }
  updateLocalDeviceMetadataAndGenerateCredentials(arg_metadata) {
    return this.$.updateLocalDeviceMetadataAndGenerateCredentials(arg_metadata);
  }
  updateRemoteSharedCredentials(arg_shared_credentials, arg_account_name) {
    return this.$.updateRemoteSharedCredentials(arg_shared_credentials, arg_account_name);
  }
  getLocalSharedCredentials(arg_account_name) {
    return this.$.getLocalSharedCredentials(arg_account_name);
  }
};

mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.nearby.presence.mojom.NearbyPresence', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startScan(arg_scan_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec,
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec,
      [arg_scan_request],
      false);
  }

  setScanObserver(arg_scan_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec,
      null,
      [arg_scan_observer],
      false);
  }

  updateLocalDeviceMetadata(arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec,
      null,
      [arg_metadata],
      false);
  }

  updateLocalDeviceMetadataAndGenerateCredentials(arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec,
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec,
      [arg_metadata],
      false);
  }

  updateRemoteSharedCredentials(arg_shared_credentials, arg_account_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec,
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec,
      [arg_shared_credentials, arg_account_name],
      false);
  }

  getLocalSharedCredentials(arg_account_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec,
      mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec,
      [arg_account_name],
      false);
  }

};

mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.NearbyPresence',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.nearby.presence.mojom.NearbyPresence', [
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
        
        // Try Method 0: StartScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartScan (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetScanObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScanObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateLocalDeviceMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateLocalDeviceMetadata (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdateLocalDeviceMetadataAndGenerateCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateLocalDeviceMetadataAndGenerateCredentials (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateRemoteSharedCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRemoteSharedCredentials (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetLocalSharedCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLocalSharedCredentials (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startScan');
          const result = this.impl.startScan(params.arg_scan_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartScan FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScanObserver');
          const result = this.impl.setScanObserver(params.arg_scan_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLocalDeviceMetadata');
          const result = this.impl.updateLocalDeviceMetadata(params.arg_metadata);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateLocalDeviceMetadataAndGenerateCredentials');
          const result = this.impl.updateLocalDeviceMetadataAndGenerateCredentials(params.arg_metadata);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateLocalDeviceMetadataAndGenerateCredentials FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRemoteSharedCredentials');
          const result = this.impl.updateRemoteSharedCredentials(params.arg_shared_credentials, params.arg_account_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateRemoteSharedCredentials FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLocalSharedCredentials');
          const result = this.impl.getLocalSharedCredentials(params.arg_account_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLocalSharedCredentials FAILED:', e));
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

mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceReceiver = mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceReceiver;

mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresencePtr = mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceRemote;
mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresenceRequest = mojo.internal.bindings.ash.nearby.presence.mojom.NearbyPresencePendingReceiver;

