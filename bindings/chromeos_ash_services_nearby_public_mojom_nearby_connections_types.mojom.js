// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections_types.mojom
 // Module: nearby.connections.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.nearby = mojo.internal.bindings.nearby || {};
mojo.internal.bindings.nearby.connections = mojo.internal.bindings.nearby.connections || {};
mojo.internal.bindings.nearby.connections.mojom = mojo.internal.bindings.nearby.connections.mojom || {};
mojo.internal.bindings.bluetooth = mojo.internal.bindings.bluetooth || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.nearby.connections.mojom.StatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby.connections.mojom.StrategySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby.connections.mojom.PayloadStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby.connections.mojom.BandwidthQualitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby.connections.mojom.MediumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby.connections.mojom.LogSeveritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby.connections.mojom.AuthenticationStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.nearby.connections.mojom.PayloadContentSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionInfoSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.DiscoveredEndpointInfoSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.MediumSelectionSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.AdvertisingOptionsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.DiscoveryOptionsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.ConnectionOptionsSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.BytesPayloadSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.FilePayloadSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.PayloadSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.PayloadTransferUpdateSpec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.InitialConnectionInfoV3Spec = { $: {} };
mojo.internal.bindings.nearby.connections.mojom.BandwidthInfoSpec = { $: {} };

// Enum: Status
mojo.internal.bindings.nearby.connections.mojom.Status = {
  kSuccess: 0,
  kError: 1,
  kOutOfOrderApiCall: 2,
  kAlreadyHaveActiveStrategy: 3,
  kAlreadyAdvertising: 4,
  kAlreadyDiscovering: 5,
  kEndpointIOError: 6,
  kEndpointUnknown: 7,
  kConnectionRejected: 8,
  kAlreadyConnectedToEndpoint: 9,
  kNotConnectedToEndpoint: 10,
  kBluetoothError: 11,
  kBleError: 12,
  kWifiLanError: 13,
  kPayloadUnknown: 14,
  kAlreadyListening: 15,
  kReset: 16,
  kTimeout: 17,
  kUnknown: 18,
  kNextValue: 19,
};

// Enum: Strategy
mojo.internal.bindings.nearby.connections.mojom.Strategy = {
  kP2pCluster: 0,
  kP2pStar: 1,
  kP2pPointToPoint: 2,
};

// Enum: PayloadStatus
mojo.internal.bindings.nearby.connections.mojom.PayloadStatus = {
  kSuccess: 0,
  kFailure: 1,
  kInProgress: 2,
  kCanceled: 3,
};

// Enum: BandwidthQuality
mojo.internal.bindings.nearby.connections.mojom.BandwidthQuality = {
  kUnknown: 0,
  kLow: 1,
  kMedium: 2,
  kHigh: 3,
};

// Enum: Medium
mojo.internal.bindings.nearby.connections.mojom.Medium = {
  kUnknown: 0,
  kMdns: 1,
  kBluetooth: 2,
  kWifiHotspot: 3,
  kBle: 4,
  kWifiLan: 5,
  kWifiAware: 6,
  kNfc: 7,
  kWifiDirect: 8,
  kWebRtc: 9,
  kBleL2Cap: 10,
  kUsb: 11,
  kWebRtcNonCellular: 12,
  kAwdl: 13,
};

// Enum: LogSeverity
mojo.internal.bindings.nearby.connections.mojom.LogSeverity = {
  kVerbose: -1,
  kInfo: 0,
  kWarning: 1,
  kError: 2,
  kFatal: 3,
};

// Enum: AuthenticationStatus
mojo.internal.bindings.nearby.connections.mojom.AuthenticationStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kFailure: 2,
};

// Union: PayloadContent
mojo.internal.Union(
    mojo.internal.bindings.nearby.connections.mojom.PayloadContentSpec, 'nearby.connections.mojom.PayloadContent', {
      'arg_bytes': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.BytesPayloadSpec.$,
        'nullable': false,
      },
      'arg_file': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.FilePayloadSpec.$,
        'nullable': false,
      },
    });

// Struct: ConnectionInfo
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionInfoSpec, 'nearby.connections.mojom.ConnectionInfo', [
      mojo.internal.StructField('arg_authentication_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_raw_authentication_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_info', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_incoming_connection', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DiscoveredEndpointInfo
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.DiscoveredEndpointInfoSpec, 'nearby.connections.mojom.DiscoveredEndpointInfo', [
      mojo.internal.StructField('arg_endpoint_info', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediumSelection
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.MediumSelectionSpec, 'nearby.connections.mojom.MediumSelection', [
      mojo.internal.StructField('arg_bluetooth', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ble', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_web_rtc', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wifi_lan', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wifi_direct', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AdvertisingOptions
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.AdvertisingOptionsSpec, 'nearby.connections.mojom.AdvertisingOptions', [
      mojo.internal.StructField('arg_strategy', 0, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.StrategySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_mediums', 8, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.MediumSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fast_advertisement_service_uuid', 16, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auto_upgrade_bandwidth', 24, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enforce_topology_constraints', 24, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enable_bluetooth_listening', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_webrtc_listening', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DiscoveryOptions
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.DiscoveryOptionsSpec, 'nearby.connections.mojom.DiscoveryOptions', [
      mojo.internal.StructField('arg_strategy', 0, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.StrategySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_mediums', 8, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.MediumSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fast_advertisement_service_uuid', 16, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_out_of_band_connection', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ConnectionOptions
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.ConnectionOptionsSpec, 'nearby.connections.mojom.ConnectionOptions', [
      mojo.internal.StructField('arg_allowed_mediums', 0, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.MediumSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_bluetooth_mac_address', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_keep_alive_interval', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_keep_alive_timeout', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BytesPayload
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.BytesPayloadSpec, 'nearby.connections.mojom.BytesPayload', [
      mojo.internal.StructField('arg_bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilePayload
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.FilePayloadSpec, 'nearby.connections.mojom.FilePayload', [
      mojo.internal.StructField('arg_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Payload
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.PayloadSpec, 'nearby.connections.mojom.Payload', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_content', 8, 0, mojo.internal.bindings.nearby.connections.mojom.PayloadContentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PayloadTransferUpdate
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.PayloadTransferUpdateSpec, 'nearby.connections.mojom.PayloadTransferUpdate', [
      mojo.internal.StructField('arg_payload_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.PayloadStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_transferred', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InitialConnectionInfoV3
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.InitialConnectionInfoV3Spec, 'nearby.connections.mojom.InitialConnectionInfoV3', [
      mojo.internal.StructField('arg_authentication_digits', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_raw_authentication_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_authentication_status', 16, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.AuthenticationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_incoming_connection', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BandwidthInfo
mojo.internal.Struct(
    mojo.internal.bindings.nearby.connections.mojom.BandwidthInfoSpec, 'nearby.connections.mojom.BandwidthInfo', [
      mojo.internal.StructField('arg_quality', 0, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.BandwidthQualitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_medium', 8, 0, mojo.internal.bindings.mojo.internal.bindings.nearby.connections.mojom.MediumSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
