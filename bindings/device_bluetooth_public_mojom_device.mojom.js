// Auto-generated MojoJS binding
 // Source: chromium_src/device/bluetooth/public/mojom/device.mojom
 // Module: bluetooth.mojom

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
 

 mojo.internal.bindings.bluetooth = mojo.internal.bindings.bluetooth || {};
mojo.internal.bindings.bluetooth.mojom = mojo.internal.bindings.bluetooth.mojom || {};

mojo.internal.bindings.bluetooth.mojom.PropertySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.bluetooth.mojom.GattResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.bluetooth.mojom.RSSIWrapperSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.ServiceInfoSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.CharacteristicInfoSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.DescriptorInfoSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device = {};
mojo.internal.bindings.bluetooth.mojom.Device.$interfaceName = 'bluetooth.mojom.Device';
mojo.internal.bindings.bluetooth.mojom.Device_Disconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec = { $: {} };
mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec = { $: {} };

// Enum: Property
mojo.internal.bindings.bluetooth.mojom.Property = {
  NONE: 0,
  BROADCAST: 1,
  READ: 2,
  WRITE_WITHOUT_RESPONSE: 4,
  WRITE: 8,
  NOTIFY: 16,
  INDICATE: 32,
  AUTHENTICATED_SIGNED_WRITES: 64,
  EXTENDED_PROPERTIES: 128,
  RELIABLE_WRITE: 256,
  WRITABLE_AUXILIARIES: 512,
  READ_ENCRYPTED: 1024,
  WRITE_ENCRYPTED: 2048,
  READ_ENCRYPTED_AUTHENTICATED: 4096,
  WRITE_ENCRYPTED_AUTHENTICATED: 8192,
};

// Enum: GattResult
mojo.internal.bindings.bluetooth.mojom.GattResult = {
  SUCCESS: 0,
  UNKNOWN: 1,
  FAILED: 2,
  IN_PROGRESS: 3,
  INVALID_LENGTH: 4,
  NOT_PERMITTED: 5,
  NOT_AUTHORIZED: 6,
  NOT_PAIRED: 7,
  NOT_SUPPORTED: 8,
  SERVICE_NOT_FOUND: 9,
  CHARACTERISTIC_NOT_FOUND: 10,
  DESCRIPTOR_NOT_FOUND: 11,
};

// Struct: RSSIWrapper
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.RSSIWrapperSpec, 'bluetooth.mojom.RSSIWrapper', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec, 'bluetooth.mojom.DeviceInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_for_display', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_rssi', 24, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.RSSIWrapperSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_service_uuids', 32, 0, mojo.internal.Array(mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_data_map', 40, 0, mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_service_data_map', 48, 0, mojo.internal.Map(mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_gatt_connected', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ServiceInfo
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.ServiceInfoSpec, 'bluetooth.mojom.ServiceInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_primary', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CharacteristicInfo
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.CharacteristicInfoSpec, 'bluetooth.mojom.CharacteristicInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_known_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_properties', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_permissions', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DescriptorInfo
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.DescriptorInfoSpec, 'bluetooth.mojom.DescriptorInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.bindings.bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_known_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Device
mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_Disconnect_ParamsSpec, 'bluetooth.mojom.Device_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ParamsSpec, 'bluetooth.mojom.Device_GetInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ResponseParamsSpec, 'bluetooth.mojom.Device_GetInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.DeviceInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ParamsSpec, 'bluetooth.mojom.Device_GetServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ResponseParamsSpec, 'bluetooth.mojom.Device_GetServices_ResponseParams', [
      mojo.internal.StructField('arg_services', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.ServiceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ParamsSpec, 'bluetooth.mojom.Device_GetCharacteristics_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec, 'bluetooth.mojom.Device_GetCharacteristics_ResponseParams', [
      mojo.internal.StructField('arg_characteristics', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.CharacteristicInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec, 'bluetooth.mojom.Device_ReadValueForCharacteristic_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec, 'bluetooth.mojom.Device_WriteValueForCharacteristic_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ParamsSpec, 'bluetooth.mojom.Device_GetDescriptors_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec, 'bluetooth.mojom.Device_GetDescriptors_ResponseParams', [
      mojo.internal.StructField('arg_descriptors', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.DescriptorInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec, 'bluetooth.mojom.Device_ReadValueForDescriptor_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec, 'bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec, 'bluetooth.mojom.Device_WriteValueForDescriptor_Params', [
      mojo.internal.StructField('arg_service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec, 'bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.bluetooth.mojom.DevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.bluetooth.mojom.DeviceRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Device';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.bluetooth.mojom.DevicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.bluetooth.mojom.DeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  disconnect() {
    return this.$.disconnect();
  }
  getInfo() {
    return this.$.getInfo();
  }
  getServices() {
    return this.$.getServices();
  }
  getCharacteristics(arg_service_id) {
    return this.$.getCharacteristics(arg_service_id);
  }
  readValueForCharacteristic(arg_service_id, arg_characteristic_id) {
    return this.$.readValueForCharacteristic(arg_service_id, arg_characteristic_id);
  }
  writeValueForCharacteristic(arg_service_id, arg_characteristic_id, arg_value) {
    return this.$.writeValueForCharacteristic(arg_service_id, arg_characteristic_id, arg_value);
  }
  getDescriptors(arg_service_id, arg_characteristic_id) {
    return this.$.getDescriptors(arg_service_id, arg_characteristic_id);
  }
  readValueForDescriptor(arg_service_id, arg_characteristic_id, arg_descriptor_id) {
    return this.$.readValueForDescriptor(arg_service_id, arg_characteristic_id, arg_descriptor_id);
  }
  writeValueForDescriptor(arg_service_id, arg_characteristic_id, arg_descriptor_id, arg_value) {
    return this.$.writeValueForDescriptor(arg_service_id, arg_characteristic_id, arg_descriptor_id, arg_value);
  }
};

mojo.internal.bindings.bluetooth.mojom.DeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Device', [
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

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_Disconnect_ParamsSpec,
      null,
      [],
      false);
  }

  getInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ResponseParamsSpec,
      [],
      false);
  }

  getServices() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ResponseParamsSpec,
      [],
      false);
  }

  getCharacteristics(arg_service_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec,
      [arg_service_id],
      false);
  }

  readValueForCharacteristic(arg_service_id, arg_characteristic_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec,
      [arg_service_id, arg_characteristic_id],
      false);
  }

  writeValueForCharacteristic(arg_service_id, arg_characteristic_id, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec,
      [arg_service_id, arg_characteristic_id, arg_value],
      false);
  }

  getDescriptors(arg_service_id, arg_characteristic_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec,
      [arg_service_id, arg_characteristic_id],
      false);
  }

  readValueForDescriptor(arg_service_id, arg_characteristic_id, arg_descriptor_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec,
      [arg_service_id, arg_characteristic_id, arg_descriptor_id],
      false);
  }

  writeValueForDescriptor(arg_service_id, arg_characteristic_id, arg_descriptor_id, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec,
      mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec,
      [arg_service_id, arg_characteristic_id, arg_descriptor_id, arg_value],
      false);
  }

};

mojo.internal.bindings.bluetooth.mojom.Device.getRemote = function() {
  let remote = new mojo.internal.bindings.bluetooth.mojom.DeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Device',
    'context');
  return remote.$;
};

mojo.internal.bindings.bluetooth.mojom.DeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Device', [
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
        
        // Try Method 0: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_Disconnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetServices (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetCharacteristics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCharacteristics (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReadValueForCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadValueForCharacteristic (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: WriteValueForCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteValueForCharacteristic (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetDescriptors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDescriptors (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReadValueForDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadValueForDescriptor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: WriteValueForDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteValueForDescriptor (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInfo');
          const result = this.impl.getInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_GetInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getServices');
          const result = this.impl.getServices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_GetServices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetServices FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCharacteristics');
          const result = this.impl.getCharacteristics(params.arg_service_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCharacteristics FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readValueForCharacteristic');
          const result = this.impl.readValueForCharacteristic(params.arg_service_id, params.arg_characteristic_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadValueForCharacteristic FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeValueForCharacteristic');
          const result = this.impl.writeValueForCharacteristic(params.arg_service_id, params.arg_characteristic_id, params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteValueForCharacteristic FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDescriptors');
          const result = this.impl.getDescriptors(params.arg_service_id, params.arg_characteristic_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDescriptors FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readValueForDescriptor');
          const result = this.impl.readValueForDescriptor(params.arg_service_id, params.arg_characteristic_id, params.arg_descriptor_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadValueForDescriptor FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeValueForDescriptor');
          const result = this.impl.writeValueForDescriptor(params.arg_service_id, params.arg_characteristic_id, params.arg_descriptor_id, params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteValueForDescriptor FAILED:', e));
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

mojo.internal.bindings.bluetooth.mojom.DeviceReceiver = mojo.internal.bindings.bluetooth.mojom.DeviceReceiver;

mojo.internal.bindings.bluetooth.mojom.DevicePtr = mojo.internal.bindings.bluetooth.mojom.DeviceRemote;
mojo.internal.bindings.bluetooth.mojom.DeviceRequest = mojo.internal.bindings.bluetooth.mojom.DevicePendingReceiver;

