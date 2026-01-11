// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/quick_pair/public/mojom/fast_pair_data_parser.mojom
 // Module: ash.quick_pair.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.quick_pair = mojo.internal.bindings.ash.quick_pair || {};
mojo.internal.bindings.ash.quick_pair.mojom = mojo.internal.bindings.ash.quick_pair.mojom || {};

mojo.internal.bindings.ash.quick_pair.mojom.MessageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.quick_pair.mojom.AcknowledgementSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.quick_pair.mojom.MessageGroupSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.quick_pair.mojom.MessageStreamMessageSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.DecryptedResponseSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.DecryptedPasskeySpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.BatteryNotificationSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.BatteryUpdateSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.RingDeviceSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.AcknowledgementMessageSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser = {};
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser.$interfaceName = 'ash.quick_pair.mojom.FastPairDataParser';
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec = { $: {} };

// Enum: MessageType
mojo.internal.bindings.ash.quick_pair.mojom.MessageType = {
  kKeyBasedPairingRequest: 0,
  kKeyBasedPairingResponse: 1,
  kSeekersPasskey: 2,
  kProvidersPasskey: 3,
};

// Enum: Acknowledgement
mojo.internal.bindings.ash.quick_pair.mojom.Acknowledgement = {
  kAck: 0,
  kNotSupportedNak: 1,
  kDeviceBusyNak: 2,
  kNotAllowedDueToCurrentStateNak: 3,
};

// Enum: MessageGroup
mojo.internal.bindings.ash.quick_pair.mojom.MessageGroup = {
  kBluetoothEvent: 0,
  kCompanionAppEvent: 1,
  kDeviceInformationEvent: 2,
  kDeviceActionEvent: 3,
  kAcknowledgementEvent: 4,
};

// Union: MessageStreamMessage
mojo.internal.Union(
    mojo.internal.bindings.ash.quick_pair.mojom.MessageStreamMessageSpec, 'ash.quick_pair.mojom.MessageStreamMessage', {
      'arg_model_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_ble_address_update': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_battery_update': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.quick_pair.mojom.BatteryUpdateSpec.$,
        'nullable': false,
      },
      'arg_remaining_battery_time': {
        'ordinal': 3,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_enable_silence_mode': {
        'ordinal': 4,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_companion_app_log_buffer_full': {
        'ordinal': 5,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_active_components_byte': {
        'ordinal': 6,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_ring_device_event': {
        'ordinal': 7,
        'type': mojo.internal.bindings.ash.quick_pair.mojom.RingDeviceSpec.$,
        'nullable': false,
      },
      'arg_acknowledgement': {
        'ordinal': 8,
        'type': mojo.internal.bindings.ash.quick_pair.mojom.AcknowledgementMessageSpec.$,
        'nullable': false,
      },
      'arg_sdk_version': {
        'ordinal': 9,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
    });

// Struct: DecryptedResponse
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.DecryptedResponseSpec, 'ash.quick_pair.mojom.DecryptedResponse', [
      mojo.internal.StructField('arg_message_type', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.MessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_address_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_salt', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_secondary_address_bytes', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_flags_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_flags_$value', originalFieldName: 'arg_flags' }),
      mojo.internal.StructField('arg_flags_$value', 33, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_flags_$flag', originalFieldName: 'arg_flags' }),
      mojo.internal.StructField('arg_num_addresses_$flag', 34, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_num_addresses_$value', originalFieldName: 'arg_num_addresses' }),
      mojo.internal.StructField('arg_num_addresses_$value', 35, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_num_addresses_$flag', originalFieldName: 'arg_num_addresses' }),
    ],
    [[0, 48]]);

// Struct: DecryptedPasskey
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.DecryptedPasskeySpec, 'ash.quick_pair.mojom.DecryptedPasskey', [
      mojo.internal.StructField('arg_message_type', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.MessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_salt', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_passkey', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec, 'ash.quick_pair.mojom.BatteryInfo', [
      mojo.internal.StructField('arg_is_charging', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_percentage', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BatteryNotification
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.BatteryNotificationSpec, 'ash.quick_pair.mojom.BatteryNotification', [
      mojo.internal.StructField('arg_left_bud_info', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_right_bud_info', 8, 0, mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_case_info', 16, 0, mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_show_ui', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BatteryUpdate
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.BatteryUpdateSpec, 'ash.quick_pair.mojom.BatteryUpdate', [
      mojo.internal.StructField('arg_left_bud_info', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_right_bud_info', 8, 0, mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_case_info', 16, 0, mojo.internal.bindings.ash.quick_pair.mojom.BatteryInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RingDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.RingDeviceSpec, 'ash.quick_pair.mojom.RingDevice', [
      mojo.internal.StructField('arg_ring_device_byte', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_timeout_in_seconds', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AcknowledgementMessage
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.AcknowledgementMessageSpec, 'ash.quick_pair.mojom.AcknowledgementMessage', [
      mojo.internal.StructField('arg_acknowledgement', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.AcknowledgementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_message_group', 8, 0, mojo.internal.bindings.ash.quick_pair.mojom.MessageGroupSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_message_code', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NotDiscoverableAdvertisement
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec, 'ash.quick_pair.mojom.NotDiscoverableAdvertisement', [
      mojo.internal.StructField('arg_account_key_filter', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_salt', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_notification', 16, 0, mojo.internal.bindings.ash.quick_pair.mojom.BatteryNotificationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_show_ui', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FastPairDataParser
mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_Params', [
      mojo.internal.StructField('arg_service_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParams', [
      mojo.internal.StructField('arg_model_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_Params', [
      mojo.internal.StructField('arg_aes_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_encrypted_response_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.DecryptedResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_Params', [
      mojo.internal.StructField('arg_aes_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_encrypted_passkey_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParams', [
      mojo.internal.StructField('arg_passkey', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.DecryptedPasskeySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_Params', [
      mojo.internal.StructField('arg_service_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParams', [
      mojo.internal.StructField('arg_advertisement', 0, 0, mojo.internal.bindings.ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_Params', [
      mojo.internal.StructField('arg_message_bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParams', [
      mojo.internal.StructField('arg_messages', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.quick_pair.mojom.MessageStreamMessageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserRemote = class {
  static get $interfaceName() {
    return 'ash.quick_pair.mojom.FastPairDataParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getHexModelIdFromServiceData(arg_service_data) {
    return this.$.getHexModelIdFromServiceData(arg_service_data);
  }
  parseDecryptedResponse(arg_aes_key, arg_encrypted_response_bytes) {
    return this.$.parseDecryptedResponse(arg_aes_key, arg_encrypted_response_bytes);
  }
  parseDecryptedPasskey(arg_aes_key, arg_encrypted_passkey_bytes) {
    return this.$.parseDecryptedPasskey(arg_aes_key, arg_encrypted_passkey_bytes);
  }
  parseNotDiscoverableAdvertisement(arg_service_data, arg_address) {
    return this.$.parseNotDiscoverableAdvertisement(arg_service_data, arg_address);
  }
  parseMessageStreamMessages(arg_message_bytes) {
    return this.$.parseMessageStreamMessages(arg_message_bytes);
  }
};

mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FastPairDataParser', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getHexModelIdFromServiceData(arg_service_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec,
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec,
      [arg_service_data],
      false);
  }

  parseDecryptedResponse(arg_aes_key, arg_encrypted_response_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec,
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec,
      [arg_aes_key, arg_encrypted_response_bytes],
      false);
  }

  parseDecryptedPasskey(arg_aes_key, arg_encrypted_passkey_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec,
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec,
      [arg_aes_key, arg_encrypted_passkey_bytes],
      false);
  }

  parseNotDiscoverableAdvertisement(arg_service_data, arg_address) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec,
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec,
      [arg_service_data, arg_address],
      false);
  }

  parseMessageStreamMessages(arg_message_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec,
      mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec,
      [arg_message_bytes],
      false);
  }

};

mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.quick_pair.mojom.FastPairDataParser',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FastPairDataParser', [
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
        
        // Try Method 0: GetHexModelIdFromServiceData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHexModelIdFromServiceData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ParseDecryptedResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseDecryptedResponse (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ParseDecryptedPasskey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseDecryptedPasskey (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ParseNotDiscoverableAdvertisement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseNotDiscoverableAdvertisement (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ParseMessageStreamMessages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseMessageStreamMessages (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHexModelIdFromServiceData');
          const result = this.impl.getHexModelIdFromServiceData(params.arg_service_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHexModelIdFromServiceData FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseDecryptedResponse');
          const result = this.impl.parseDecryptedResponse(params.arg_aes_key, params.arg_encrypted_response_bytes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseDecryptedResponse FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseDecryptedPasskey');
          const result = this.impl.parseDecryptedPasskey(params.arg_aes_key, params.arg_encrypted_passkey_bytes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseDecryptedPasskey FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseNotDiscoverableAdvertisement');
          const result = this.impl.parseNotDiscoverableAdvertisement(params.arg_service_data, params.arg_address);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseNotDiscoverableAdvertisement FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseMessageStreamMessages');
          const result = this.impl.parseMessageStreamMessages(params.arg_message_bytes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseMessageStreamMessages FAILED:', e));
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

mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserReceiver = mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserReceiver;

mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserPtr = mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserRemote;
mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserRequest = mojo.internal.bindings.ash.quick_pair.mojom.FastPairDataParserPendingReceiver;

