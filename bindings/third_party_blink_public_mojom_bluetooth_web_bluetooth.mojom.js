// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/bluetooth/web_bluetooth.mojom
 // Module: blink.mojom

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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.bluetooth = mojo.internal.bindings.bluetooth || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.WebBluetoothGATTQueryQuantitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.WebBluetoothWriteTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.WebBluetoothLeScanFilterSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothCompanySpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothDataFilterSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothRequestDeviceOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothRequestLEScanOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothDeviceSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTServiceSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTCharacteristicSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisingEventSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTDescriptorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService = {};
mojo.internal.bindings.blink.mojom.WebBluetoothService.$interfaceName = 'blink.mojom.WebBluetoothService';
mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothServerClient = {};
mojo.internal.bindings.blink.mojom.WebBluetoothServerClient.$interfaceName = 'blink.mojom.WebBluetoothServerClient';
mojo.internal.bindings.blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient = {};
mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient.$interfaceName = 'blink.mojom.WebBluetoothCharacteristicClient';
mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient = {};
mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient.$interfaceName = 'blink.mojom.WebBluetoothAdvertisementClient';
mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec = { $: {} };

// Enum: WebBluetoothResult
mojo.internal.bindings.blink.mojom.WebBluetoothResult = {
  SUCCESS: 0,
  WATCH_ADVERTISEMENTS_ABORTED: 1,
  GATT_INVALID_ATTRIBUTE_LENGTH: 2,
  CONNECT_INVALID_ARGS: 3,
  SERVICE_NO_LONGER_EXISTS: 4,
  CHARACTERISTIC_NO_LONGER_EXISTS: 5,
  PROMPT_CANCELED: 6,
  CONNECT_DOES_NOT_EXIST: 7,
  CONNECT_ALREADY_IN_PROGRESS: 8,
  CONNECT_AUTH_CANCELED: 9,
  CONNECT_AUTH_FAILED: 10,
  CONNECT_AUTH_REJECTED: 11,
  CONNECT_AUTH_TIMEOUT: 12,
  CONNECT_UNKNOWN_ERROR: 13,
  CONNECT_UNKNOWN_FAILURE: 14,
  CONNECT_UNSUPPORTED_DEVICE: 15,
  DEVICE_NO_LONGER_IN_RANGE: 16,
  GATT_NOT_PAIRED: 17,
  GATT_OPERATION_IN_PROGRESS: 18,
  CONNECT_CONN_FAILED: 19,
  CONNECT_NOT_READY: 20,
  CONNECT_ALREADY_CONNECTED: 21,
  CONNECT_ALREADY_EXISTS: 22,
  CONNECT_NOT_CONNECTED: 23,
  CONNECT_NON_AUTH_TIMEOUT: 24,
  CONNECT_NO_MEMORY: 25,
  CONNECT_JNI_ENVIRONMENT: 26,
  CONNECT_JNI_THREAD_ATTACH: 27,
  CONNECT_WAKELOCK: 28,
  CONNECT_UNEXPECTED_STATE: 29,
  CONNECT_SOCKET_ERROR: 30,
  NO_BLUETOOTH_ADAPTER: 31,
  CHOSEN_DEVICE_VANISHED: 32,
  CHOOSER_CANCELLED: 33,
  CHOOSER_NOT_SHOWN_API_GLOBALLY_DISABLED: 34,
  CHOOSER_NOT_SHOWN_API_LOCALLY_DISABLED: 35,
  CHOOSER_NOT_SHOWN_USER_DENIED_PERMISSION_TO_SCAN: 36,
  SERVICE_NOT_FOUND: 37,
  NO_SERVICES_FOUND: 38,
  CHARACTERISTIC_NOT_FOUND: 39,
  NO_CHARACTERISTICS_FOUND: 40,
  DESCRIPTOR_NOT_FOUND: 41,
  NO_DESCRIPTORS_FOUND: 42,
  WEB_BLUETOOTH_NOT_SUPPORTED: 43,
  BLUETOOTH_LOW_ENERGY_NOT_AVAILABLE: 44,
  GATT_UNKNOWN_ERROR: 45,
  GATT_UNKNOWN_FAILURE: 46,
  GATT_NOT_PERMITTED: 47,
  GATT_NOT_SUPPORTED: 48,
  GATT_UNTRANSLATED_ERROR_CODE: 49,
  GATT_NOT_AUTHORIZED: 50,
  BLOCKLISTED_DESCRIPTOR_UUID: 51,
  BLOCKLISTED_CHARACTERISTIC_UUID: 52,
  BLOCKLISTED_READ: 53,
  BLOCKLISTED_WRITE: 54,
  NOT_ALLOWED_TO_ACCESS_ANY_SERVICE: 55,
  NOT_ALLOWED_TO_ACCESS_SERVICE: 56,
  REQUEST_DEVICE_WITH_BLOCKLISTED_UUID_OR_MANUFACTURER_DATA: 57,
  DESCRIPTOR_NO_LONGER_EXISTS: 58,
  PERMISSIONS_POLICY_VIOLATION: 59,
  SCANNING_BLOCKED: 60,
};

// Enum: WebBluetoothGATTQueryQuantity
mojo.internal.bindings.blink.mojom.WebBluetoothGATTQueryQuantity = {
  SINGLE: 0,
  MULTIPLE: 1,
};

// Enum: WebBluetoothWriteType
mojo.internal.bindings.blink.mojom.WebBluetoothWriteType = {
  kWriteDefaultDeprecated: 0,
  kWriteWithResponse: 1,
  kWriteWithoutResponse: 2,
};

// Struct: WebBluetoothLeScanFilter
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothLeScanFilterSpec, 'blink.mojom.WebBluetoothLeScanFilter', [
      mojo.internal.StructField('arg_services', 0, 0, mojo.internal.Array(mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_prefix', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_data', 24, 0, mojo.internal.Map(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothCompanySpec.$, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDataFilterSpec.$, false), false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WebBluetoothCompany
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothCompanySpec, 'blink.mojom.WebBluetoothCompany', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebBluetoothDataFilter
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothDataFilterSpec, 'blink.mojom.WebBluetoothDataFilter', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mask', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebBluetoothRequestDeviceOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothRequestDeviceOptionsSpec, 'blink.mojom.WebBluetoothRequestDeviceOptions', [
      mojo.internal.StructField('arg_filters', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothLeScanFilterSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_exclusion_filters', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothLeScanFilterSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_optional_services', 16, 0, mojo.internal.Array(mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_optional_manufacturer_data', 24, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_accept_all_devices', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebBluetoothRequestLEScanOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothRequestLEScanOptionsSpec, 'blink.mojom.WebBluetoothRequestLEScanOptions', [
      mojo.internal.StructField('arg_filters', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothLeScanFilterSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_keep_repeated_devices', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_accept_all_advertisements', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebBluetoothDeviceId
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec, 'blink.mojom.WebBluetoothDeviceId', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebBluetoothDevice
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothDeviceSpec, 'blink.mojom.WebBluetoothDevice', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebBluetoothRemoteGATTService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTServiceSpec, 'blink.mojom.WebBluetoothRemoteGATTService', [
      mojo.internal.StructField('arg_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebBluetoothRemoteGATTCharacteristic
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTCharacteristicSpec, 'blink.mojom.WebBluetoothRemoteGATTCharacteristic', [
      mojo.internal.StructField('arg_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_properties', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebBluetoothAdvertisingEvent
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisingEventSpec, 'blink.mojom.WebBluetoothAdvertisingEvent', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_uuids', 16, 0, mojo.internal.Array(mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_data', 24, 0, mojo.internal.Map(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothCompanySpec.$, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_service_data', 32, 0, mojo.internal.Map(mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_appearance', 40, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_appearance_is_set', 42, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tx_power_is_set', 42, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tx_power', 43, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rssi_is_set', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_rssi', 45, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebBluetoothRemoteGATTDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTDescriptorSpec, 'blink.mojom.WebBluetoothRemoteGATTDescriptor', [
      mojo.internal.StructField('arg_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebBluetoothService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec, 'blink.mojom.WebBluetoothService_GetAvailability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_GetAvailability_ResponseParams', [
      mojo.internal.StructField('arg_is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec, 'blink.mojom.WebBluetoothService_RequestDevice_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothRequestDeviceOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RequestDevice_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ParamsSpec, 'blink.mojom.WebBluetoothService_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_GetDevices_ResponseParams', [
      mojo.internal.StructField('arg_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec, 'blink.mojom.WebBluetoothService_ForgetDevice_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_ForgetDevice_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerConnect_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WebBluetoothServerClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerDisconnect_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_quantity', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothGATTQueryQuantitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_services_uuid', 16, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_services', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTServiceSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_Params', [
      mojo.internal.StructField('arg_service_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_quantity', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothGATTQueryQuantitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristics_uuid', 16, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristics', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTCharacteristicSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_Params', [
      mojo.internal.StructField('arg_characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_Params', [
      mojo.internal.StructField('arg_characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_write_type', 16, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothWriteTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_Params', [
      mojo.internal.StructField('arg_characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_Params', [
      mojo.internal.StructField('arg_characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_Params', [
      mojo.internal.StructField('arg_characteristics_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_quantity', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothGATTQueryQuantitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_descriptor_uuid', 16, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_descriptors', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothRemoteGATTDescriptorSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_Params', [
      mojo.internal.StructField('arg_descriptor_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_Params', [
      mojo.internal.StructField('arg_descriptor_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec, 'blink.mojom.WebBluetoothService_RequestScanningStart_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothRequestLEScanOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec, 'blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.WebBluetoothServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WebBluetoothServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WebBluetoothServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAvailability() {
    return this.$.getAvailability();
  }
  requestDevice(arg_options) {
    return this.$.requestDevice(arg_options);
  }
  getDevices() {
    return this.$.getDevices();
  }
  forgetDevice(arg_device_id) {
    return this.$.forgetDevice(arg_device_id);
  }
  remoteServerConnect(arg_device_id, arg_client) {
    return this.$.remoteServerConnect(arg_device_id, arg_client);
  }
  remoteServerDisconnect(arg_device_id) {
    return this.$.remoteServerDisconnect(arg_device_id);
  }
  remoteServerGetPrimaryServices(arg_device_id, arg_quantity, arg_services_uuid) {
    return this.$.remoteServerGetPrimaryServices(arg_device_id, arg_quantity, arg_services_uuid);
  }
  remoteServiceGetCharacteristics(arg_service_instance_id, arg_quantity, arg_characteristics_uuid) {
    return this.$.remoteServiceGetCharacteristics(arg_service_instance_id, arg_quantity, arg_characteristics_uuid);
  }
  remoteCharacteristicReadValue(arg_characteristic_instance_id) {
    return this.$.remoteCharacteristicReadValue(arg_characteristic_instance_id);
  }
  remoteCharacteristicWriteValue(arg_characteristic_instance_id, arg_value, arg_write_type) {
    return this.$.remoteCharacteristicWriteValue(arg_characteristic_instance_id, arg_value, arg_write_type);
  }
  remoteCharacteristicStartNotifications(arg_characteristic_instance_id, arg_client) {
    return this.$.remoteCharacteristicStartNotifications(arg_characteristic_instance_id, arg_client);
  }
  remoteCharacteristicStopNotifications(arg_characteristic_instance_id) {
    return this.$.remoteCharacteristicStopNotifications(arg_characteristic_instance_id);
  }
  remoteCharacteristicGetDescriptors(arg_characteristics_instance_id, arg_quantity, arg_descriptor_uuid) {
    return this.$.remoteCharacteristicGetDescriptors(arg_characteristics_instance_id, arg_quantity, arg_descriptor_uuid);
  }
  remoteDescriptorReadValue(arg_descriptor_instance_id) {
    return this.$.remoteDescriptorReadValue(arg_descriptor_instance_id);
  }
  remoteDescriptorWriteValue(arg_descriptor_instance_id, arg_value) {
    return this.$.remoteDescriptorWriteValue(arg_descriptor_instance_id, arg_value);
  }
  requestScanningStart(arg_client, arg_options) {
    return this.$.requestScanningStart(arg_client, arg_options);
  }
  watchAdvertisementsForDevice(arg_device_id, arg_client) {
    return this.$.watchAdvertisementsForDevice(arg_device_id, arg_client);
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebBluetoothService', [
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

  getAvailability() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec,
      [],
      false);
  }

  requestDevice(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  forgetDevice(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

  remoteServerConnect(arg_device_id, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec,
      [arg_device_id, arg_client],
      false);
  }

  remoteServerDisconnect(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec,
      null,
      [arg_device_id],
      false);
  }

  remoteServerGetPrimaryServices(arg_device_id, arg_quantity, arg_services_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec,
      [arg_device_id, arg_quantity, arg_services_uuid],
      false);
  }

  remoteServiceGetCharacteristics(arg_service_instance_id, arg_quantity, arg_characteristics_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec,
      [arg_service_instance_id, arg_quantity, arg_characteristics_uuid],
      false);
  }

  remoteCharacteristicReadValue(arg_characteristic_instance_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec,
      [arg_characteristic_instance_id],
      false);
  }

  remoteCharacteristicWriteValue(arg_characteristic_instance_id, arg_value, arg_write_type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec,
      [arg_characteristic_instance_id, arg_value, arg_write_type],
      false);
  }

  remoteCharacteristicStartNotifications(arg_characteristic_instance_id, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec,
      [arg_characteristic_instance_id, arg_client],
      false);
  }

  remoteCharacteristicStopNotifications(arg_characteristic_instance_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec,
      [arg_characteristic_instance_id],
      false);
  }

  remoteCharacteristicGetDescriptors(arg_characteristics_instance_id, arg_quantity, arg_descriptor_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec,
      [arg_characteristics_instance_id, arg_quantity, arg_descriptor_uuid],
      false);
  }

  remoteDescriptorReadValue(arg_descriptor_instance_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec,
      [arg_descriptor_instance_id],
      false);
  }

  remoteDescriptorWriteValue(arg_descriptor_instance_id, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec,
      [arg_descriptor_instance_id, arg_value],
      false);
  }

  requestScanningStart(arg_client, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec,
      [arg_client, arg_options],
      false);
  }

  watchAdvertisementsForDevice(arg_device_id, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec,
      [arg_device_id, arg_client],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WebBluetoothService.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WebBluetoothServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothService',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WebBluetoothServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebBluetoothService', [
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
        
        // Try Method 0: GetAvailability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAvailability (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDevice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevices (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ForgetDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForgetDevice (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RemoteServerConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteServerConnect (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemoteServerDisconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteServerDisconnect (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RemoteServerGetPrimaryServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteServerGetPrimaryServices (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RemoteServiceGetCharacteristics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteServiceGetCharacteristics (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RemoteCharacteristicReadValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteCharacteristicReadValue (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RemoteCharacteristicWriteValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteCharacteristicWriteValue (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RemoteCharacteristicStartNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteCharacteristicStartNotifications (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RemoteCharacteristicStopNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteCharacteristicStopNotifications (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RemoteCharacteristicGetDescriptors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteCharacteristicGetDescriptors (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RemoteDescriptorReadValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteDescriptorReadValue (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RemoteDescriptorWriteValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteDescriptorWriteValue (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RequestScanningStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestScanningStart (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: WatchAdvertisementsForDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WatchAdvertisementsForDevice (16)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailability');
          const result = this.impl.getAvailability();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAvailability FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestDevice');
          const result = this.impl.requestDevice(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestDevice FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevices');
          const result = this.impl.getDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDevices FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forgetDevice');
          const result = this.impl.forgetDevice(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForgetDevice FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteServerConnect');
          const result = this.impl.remoteServerConnect(params.arg_device_id, params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteServerConnect FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteServerDisconnect');
          const result = this.impl.remoteServerDisconnect(params.arg_device_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteServerGetPrimaryServices');
          const result = this.impl.remoteServerGetPrimaryServices(params.arg_device_id, params.arg_quantity, params.arg_services_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteServerGetPrimaryServices FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteServiceGetCharacteristics');
          const result = this.impl.remoteServiceGetCharacteristics(params.arg_service_instance_id, params.arg_quantity, params.arg_characteristics_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteServiceGetCharacteristics FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteCharacteristicReadValue');
          const result = this.impl.remoteCharacteristicReadValue(params.arg_characteristic_instance_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteCharacteristicReadValue FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteCharacteristicWriteValue');
          const result = this.impl.remoteCharacteristicWriteValue(params.arg_characteristic_instance_id, params.arg_value, params.arg_write_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteCharacteristicWriteValue FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteCharacteristicStartNotifications');
          const result = this.impl.remoteCharacteristicStartNotifications(params.arg_characteristic_instance_id, params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteCharacteristicStartNotifications FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteCharacteristicStopNotifications');
          const result = this.impl.remoteCharacteristicStopNotifications(params.arg_characteristic_instance_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteCharacteristicStopNotifications FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteCharacteristicGetDescriptors');
          const result = this.impl.remoteCharacteristicGetDescriptors(params.arg_characteristics_instance_id, params.arg_quantity, params.arg_descriptor_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteCharacteristicGetDescriptors FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteDescriptorReadValue');
          const result = this.impl.remoteDescriptorReadValue(params.arg_descriptor_instance_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteDescriptorReadValue FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteDescriptorWriteValue');
          const result = this.impl.remoteDescriptorWriteValue(params.arg_descriptor_instance_id, params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoteDescriptorWriteValue FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestScanningStart');
          const result = this.impl.requestScanningStart(params.arg_client, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestScanningStart FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.watchAdvertisementsForDevice');
          const result = this.impl.watchAdvertisementsForDevice(params.arg_device_id, params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WatchAdvertisementsForDevice FAILED:', e));
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

mojo.internal.bindings.blink.mojom.WebBluetoothServiceReceiver = mojo.internal.bindings.blink.mojom.WebBluetoothServiceReceiver;

mojo.internal.bindings.blink.mojom.WebBluetoothServicePtr = mojo.internal.bindings.blink.mojom.WebBluetoothServiceRemote;
mojo.internal.bindings.blink.mojom.WebBluetoothServiceRequest = mojo.internal.bindings.blink.mojom.WebBluetoothServicePendingReceiver;


// Interface: WebBluetoothServerClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec, 'blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.WebBluetoothServerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothServerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothServerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WebBluetoothServerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WebBluetoothServerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  gATTServerDisconnected() {
    return this.$.gATTServerDisconnected();
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothServerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebBluetoothServerClient', [
      { explicit: null },
    ]);
  }

  gATTServerDisconnected() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WebBluetoothServerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WebBluetoothServerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothServerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WebBluetoothServerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebBluetoothServerClient', [
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
        
        // Try Method 0: GATTServerDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GATTServerDisconnected (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.gATTServerDisconnected');
          const result = this.impl.gATTServerDisconnected();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothServerClientReceiver = mojo.internal.bindings.blink.mojom.WebBluetoothServerClientReceiver;

mojo.internal.bindings.blink.mojom.WebBluetoothServerClientPtr = mojo.internal.bindings.blink.mojom.WebBluetoothServerClientRemote;
mojo.internal.bindings.blink.mojom.WebBluetoothServerClientRequest = mojo.internal.bindings.blink.mojom.WebBluetoothServerClientPendingReceiver;


// Interface: WebBluetoothCharacteristicClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec, 'blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothCharacteristicClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  remoteCharacteristicValueChanged(arg_value) {
    return this.$.remoteCharacteristicValueChanged(arg_value);
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebBluetoothCharacteristicClient', [
      { explicit: null },
    ]);
  }

  remoteCharacteristicValueChanged(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec,
      null,
      [arg_value],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothCharacteristicClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebBluetoothCharacteristicClient', [
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
        
        // Try Method 0: RemoteCharacteristicValueChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoteCharacteristicValueChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remoteCharacteristicValueChanged');
          const result = this.impl.remoteCharacteristicValueChanged(params.arg_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientReceiver = mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientReceiver;

mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientPtr = mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientRemote;
mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientRequest = mojo.internal.bindings.blink.mojom.WebBluetoothCharacteristicClientPendingReceiver;


// Interface: WebBluetoothAdvertisementClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec, 'blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisingEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothAdvertisementClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  advertisingEvent(arg_result) {
    return this.$.advertisingEvent(arg_result);
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebBluetoothAdvertisementClient', [
      { explicit: null },
    ]);
  }

  advertisingEvent(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothAdvertisementClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebBluetoothAdvertisementClient', [
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
        
        // Try Method 0: AdvertisingEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdvertisingEvent (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.advertisingEvent');
          const result = this.impl.advertisingEvent(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientReceiver = mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientReceiver;

mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientPtr = mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientRemote;
mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientRequest = mojo.internal.bindings.blink.mojom.WebBluetoothAdvertisementClientPendingReceiver;

