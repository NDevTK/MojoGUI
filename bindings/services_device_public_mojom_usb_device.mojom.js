// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_device.mojom
// Module: device.mojom

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
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

device.mojom.UsbOpenDeviceSuccessSpec = { $: mojo.internal.Enum() };
device.mojom.UsbOpenDeviceErrorSpec = { $: mojo.internal.Enum() };
device.mojom.UsbClaimInterfaceResultSpec = { $: mojo.internal.Enum() };
device.mojom.UsbTransferDirectionSpec = { $: mojo.internal.Enum() };
device.mojom.UsbControlTransferTypeSpec = { $: mojo.internal.Enum() };
device.mojom.UsbControlTransferRecipientSpec = { $: mojo.internal.Enum() };
device.mojom.UsbTransferTypeSpec = { $: mojo.internal.Enum() };
device.mojom.UsbSynchronizationTypeSpec = { $: mojo.internal.Enum() };
device.mojom.UsbUsageTypeSpec = { $: mojo.internal.Enum() };
device.mojom.UsbTransferStatusSpec = { $: mojo.internal.Enum() };
device.mojom.UsbOpenDeviceResultSpec = { $: {} };
device.mojom.UsbEndpointInfoSpec = { $: {} };
device.mojom.UsbAlternateInterfaceInfoSpec = { $: {} };
device.mojom.UsbInterfaceInfoSpec = { $: {} };
device.mojom.UsbConfigurationInfoSpec = { $: {} };
device.mojom.UsbDeviceInfoSpec = { $: {} };
device.mojom.UsbControlTransferParamsSpec = { $: {} };
device.mojom.UsbIsochronousPacketSpec = { $: {} };
device.mojom.UsbDevice = {};
device.mojom.UsbDevice.$interfaceName = 'device.mojom.UsbDevice';
device.mojom.UsbDevice_Open_ParamsSpec = { $: {} };
device.mojom.UsbDevice_Open_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_Close_ParamsSpec = { $: {} };
device.mojom.UsbDevice_Close_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_SetConfiguration_ParamsSpec = { $: {} };
device.mojom.UsbDevice_SetConfiguration_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_ClaimInterface_ParamsSpec = { $: {} };
device.mojom.UsbDevice_ClaimInterface_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_ReleaseInterface_ParamsSpec = { $: {} };
device.mojom.UsbDevice_ReleaseInterface_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec = { $: {} };
device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_Reset_ParamsSpec = { $: {} };
device.mojom.UsbDevice_Reset_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_ClearHalt_ParamsSpec = { $: {} };
device.mojom.UsbDevice_ClearHalt_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_ControlTransferIn_ParamsSpec = { $: {} };
device.mojom.UsbDevice_ControlTransferIn_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_ControlTransferOut_ParamsSpec = { $: {} };
device.mojom.UsbDevice_ControlTransferOut_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_GenericTransferIn_ParamsSpec = { $: {} };
device.mojom.UsbDevice_GenericTransferIn_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_GenericTransferOut_ParamsSpec = { $: {} };
device.mojom.UsbDevice_GenericTransferOut_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec = { $: {} };
device.mojom.UsbDevice_IsochronousTransferIn_ResponseParamsSpec = { $: {} };
device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec = { $: {} };
device.mojom.UsbDevice_IsochronousTransferOut_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceClient = {};
device.mojom.UsbDeviceClient.$interfaceName = 'device.mojom.UsbDeviceClient';
device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec = { $: {} };
device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec = { $: {} };

device.mojom.kUsbAudioClass = 0x01;

device.mojom.kUsbCommClass = 0x02;

device.mojom.kUsbHidClass = 0x03;

device.mojom.kUsbMassStorageClass = 0x08;

device.mojom.kUsbSmartCardClass = 0x0B;

device.mojom.kUsbVideoClass = 0x0E;

device.mojom.kUsbAudioVideoClass = 0x10;

device.mojom.kUsbWirelessClass = 0xE0;

device.mojom.kSecurityKeyAOAModel = "12eba9f901039b36";

// Enum: UsbOpenDeviceSuccess
device.mojom.UsbOpenDeviceSuccess = {
  OK: 0,
};

// Enum: UsbOpenDeviceError
device.mojom.UsbOpenDeviceError = {
  ACCESS_DENIED: 0,
  ALREADY_OPEN: 1,
};

// Enum: UsbClaimInterfaceResult
device.mojom.UsbClaimInterfaceResult = {
  kSuccess: 0,
  kProtectedClass: 1,
  kFailure: 2,
};

// Enum: UsbTransferDirection
device.mojom.UsbTransferDirection = {
  INBOUND: 0,
  OUTBOUND: 1,
};

// Enum: UsbControlTransferType
device.mojom.UsbControlTransferType = {
  STANDARD: 0,
  CLASS: 1,
  VENDOR: 2,
  RESERVED: 3,
};

// Enum: UsbControlTransferRecipient
device.mojom.UsbControlTransferRecipient = {
  DEVICE: 0,
  INTERFACE: 1,
  ENDPOINT: 2,
  OTHER: 3,
};

// Enum: UsbTransferType
device.mojom.UsbTransferType = {
  CONTROL: 0,
  ISOCHRONOUS: 1,
  BULK: 2,
  INTERRUPT: 3,
};

// Enum: UsbSynchronizationType
device.mojom.UsbSynchronizationType = {
  NONE: 0,
  ASYNCHRONOUS: 1,
  ADAPTIVE: 2,
  SYNCHRONOUS: 3,
};

// Enum: UsbUsageType
device.mojom.UsbUsageType = {
  DATA: 0,
  FEEDBACK: 1,
  EXPLICIT_FEEDBACK: 2,
  PERIODIC: 3,
  NOTIFICATION: 4,
  RESERVED: 5,
};

// Enum: UsbTransferStatus
device.mojom.UsbTransferStatus = {
  COMPLETED: 0,
  TRANSFER_ERROR: 1,
  TIMEOUT: 2,
  CANCELLED: 3,
  STALLED: 4,
  DISCONNECT: 5,
  BABBLE: 6,
  SHORT_PACKET: 7,
  PERMISSION_DENIED: 8,
};

// Union: UsbOpenDeviceResult
mojo.internal.Union(
    device.mojom.UsbOpenDeviceResultSpec, 'device.mojom.UsbOpenDeviceResult', {
      'success': {
        'ordinal': 0,
        'type': device.mojom.UsbOpenDeviceSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.UsbOpenDeviceErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: UsbEndpointInfo
mojo.internal.Struct(
    device.mojom.UsbEndpointInfoSpec, 'device.mojom.UsbEndpointInfo', [
      mojo.internal.StructField('direction', 0, 0, device.mojom.UsbTransferDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, device.mojom.UsbTransferTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('synchronization_type', 16, 0, device.mojom.UsbSynchronizationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('usage_type', 24, 0, device.mojom.UsbUsageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('packet_size', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('endpoint_number', 44, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('polling_interval', 45, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: UsbAlternateInterfaceInfo
mojo.internal.Struct(
    device.mojom.UsbAlternateInterfaceInfoSpec, 'device.mojom.UsbAlternateInterfaceInfo', [
      mojo.internal.StructField('interface_name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('endpoints', 8, 0, mojo.internal.Array(device.mojom.UsbEndpointInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('alternate_setting', 24, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('class_code', 25, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('subclass_code', 26, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('protocol_code', 27, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UsbInterfaceInfo
mojo.internal.Struct(
    device.mojom.UsbInterfaceInfoSpec, 'device.mojom.UsbInterfaceInfo', [
      mojo.internal.StructField('alternates', 0, 0, mojo.internal.Array(device.mojom.UsbAlternateInterfaceInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('interface_number', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('first_interface', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UsbConfigurationInfo
mojo.internal.Struct(
    device.mojom.UsbConfigurationInfoSpec, 'device.mojom.UsbConfigurationInfo', [
      mojo.internal.StructField('configuration_name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('interfaces', 8, 0, mojo.internal.Array(device.mojom.UsbInterfaceInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('configuration_value', 24, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('self_powered', 25, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('remote_wakeup', 25, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('maximum_power', 26, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UsbDeviceInfo
mojo.internal.Struct(
    device.mojom.UsbDeviceInfoSpec, 'device.mojom.UsbDeviceInfo', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_name', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('product_name', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('serial_number', 24, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('webusb_landing_page', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('configurations', 40, 0, mojo.internal.Array(device.mojom.UsbConfigurationInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bus_number', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('port_number', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 56, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('product_id', 58, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('usb_version_major', 60, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('usb_version_minor', 61, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('usb_version_subminor', 62, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('class_code', 63, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('subclass_code', 64, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('protocol_code', 65, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('device_version_major', 66, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('device_version_minor', 67, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('device_version_subminor', 68, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('active_configuration', 69, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: UsbControlTransferParams
mojo.internal.Struct(
    device.mojom.UsbControlTransferParamsSpec, 'device.mojom.UsbControlTransferParams', [
      mojo.internal.StructField('type', 0, 0, device.mojom.UsbControlTransferTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recipient', 8, 0, device.mojom.UsbControlTransferRecipientSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kSecurityKeyAOAModel', 16, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('index', 26, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('request', 28, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UsbIsochronousPacket
mojo.internal.Struct(
    device.mojom.UsbIsochronousPacketSpec, 'device.mojom.UsbIsochronousPacket', [
      mojo.internal.StructField('status', 0, 0, device.mojom.UsbTransferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('transferred_length', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UsbDevice
mojo.internal.Struct(
    device.mojom.UsbDevice_Open_ParamsSpec, 'device.mojom.UsbDevice_Open_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_Open_ResponseParamsSpec, 'device.mojom.UsbDevice_Open_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.UsbOpenDeviceResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_Close_ParamsSpec, 'device.mojom.UsbDevice_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_Close_ResponseParamsSpec, 'device.mojom.UsbDevice_Close_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_SetConfiguration_ParamsSpec, 'device.mojom.UsbDevice_SetConfiguration_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_SetConfiguration_ResponseParamsSpec, 'device.mojom.UsbDevice_SetConfiguration_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ClaimInterface_ParamsSpec, 'device.mojom.UsbDevice_ClaimInterface_Params', [
      mojo.internal.StructField('interface_number', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ClaimInterface_ResponseParamsSpec, 'device.mojom.UsbDevice_ClaimInterface_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.UsbClaimInterfaceResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ReleaseInterface_ParamsSpec, 'device.mojom.UsbDevice_ReleaseInterface_Params', [
      mojo.internal.StructField('interface_number', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ReleaseInterface_ResponseParamsSpec, 'device.mojom.UsbDevice_ReleaseInterface_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec, 'device.mojom.UsbDevice_SetInterfaceAlternateSetting_Params', [
      mojo.internal.StructField('interface_number', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('alternate_setting', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec, 'device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_Reset_ParamsSpec, 'device.mojom.UsbDevice_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_Reset_ResponseParamsSpec, 'device.mojom.UsbDevice_Reset_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ClearHalt_ParamsSpec, 'device.mojom.UsbDevice_ClearHalt_Params', [
      mojo.internal.StructField('direction', 0, 0, device.mojom.UsbTransferDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_number', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ClearHalt_ResponseParamsSpec, 'device.mojom.UsbDevice_ClearHalt_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ControlTransferIn_ParamsSpec, 'device.mojom.UsbDevice_ControlTransferIn_Params', [
      mojo.internal.StructField('params', 0, 0, device.mojom.UsbControlTransferParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('timeout', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ControlTransferIn_ResponseParamsSpec, 'device.mojom.UsbDevice_ControlTransferIn_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, device.mojom.UsbTransferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ControlTransferOut_ParamsSpec, 'device.mojom.UsbDevice_ControlTransferOut_Params', [
      mojo.internal.StructField('params', 0, 0, device.mojom.UsbControlTransferParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_ControlTransferOut_ResponseParamsSpec, 'device.mojom.UsbDevice_ControlTransferOut_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, device.mojom.UsbTransferStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_GenericTransferIn_ParamsSpec, 'device.mojom.UsbDevice_GenericTransferIn_Params', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('timeout', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('endpoint_number', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_GenericTransferIn_ResponseParamsSpec, 'device.mojom.UsbDevice_GenericTransferIn_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, device.mojom.UsbTransferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_GenericTransferOut_ParamsSpec, 'device.mojom.UsbDevice_GenericTransferOut_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('endpoint_number', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_GenericTransferOut_ResponseParamsSpec, 'device.mojom.UsbDevice_GenericTransferOut_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, device.mojom.UsbTransferStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec, 'device.mojom.UsbDevice_IsochronousTransferIn_Params', [
      mojo.internal.StructField('packet_lengths', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('endpoint_number', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_IsochronousTransferIn_ResponseParamsSpec, 'device.mojom.UsbDevice_IsochronousTransferIn_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packets', 8, 0, mojo.internal.Array(device.mojom.UsbIsochronousPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec, 'device.mojom.UsbDevice_IsochronousTransferOut_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packet_lengths', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('timeout', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('endpoint_number', 20, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDevice_IsochronousTransferOut_ResponseParamsSpec, 'device.mojom.UsbDevice_IsochronousTransferOut_ResponseParams', [
      mojo.internal.StructField('packets', 0, 0, mojo.internal.Array(device.mojom.UsbIsochronousPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.UsbDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDevicePendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  open() {
    return this.$.open();
  }
  close() {
    return this.$.close();
  }
  setConfiguration(value) {
    return this.$.setConfiguration(value);
  }
  claimInterface(interface_number) {
    return this.$.claimInterface(interface_number);
  }
  releaseInterface(interface_number) {
    return this.$.releaseInterface(interface_number);
  }
  setInterfaceAlternateSetting(interface_number, alternate_setting) {
    return this.$.setInterfaceAlternateSetting(interface_number, alternate_setting);
  }
  reset() {
    return this.$.reset();
  }
  clearHalt(direction, endpoint_number) {
    return this.$.clearHalt(direction, endpoint_number);
  }
  controlTransferIn(params, length, timeout) {
    return this.$.controlTransferIn(params, length, timeout);
  }
  controlTransferOut(params, data, timeout) {
    return this.$.controlTransferOut(params, data, timeout);
  }
  genericTransferIn(endpoint_number, length, timeout) {
    return this.$.genericTransferIn(endpoint_number, length, timeout);
  }
  genericTransferOut(endpoint_number, data, timeout) {
    return this.$.genericTransferOut(endpoint_number, data, timeout);
  }
  isochronousTransferIn(endpoint_number, packet_lengths, timeout) {
    return this.$.isochronousTransferIn(endpoint_number, packet_lengths, timeout);
  }
  isochronousTransferOut(endpoint_number, data, packet_lengths, timeout) {
    return this.$.isochronousTransferOut(endpoint_number, data, packet_lengths, timeout);
  }
};

device.mojom.UsbDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbDevice', [
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

  open() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.UsbDevice_Open_ParamsSpec,
      device.mojom.UsbDevice_Open_ResponseParamsSpec,
      [],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.UsbDevice_Close_ParamsSpec,
      device.mojom.UsbDevice_Close_ResponseParamsSpec,
      [],
      false);
  }

  setConfiguration(value) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.UsbDevice_SetConfiguration_ParamsSpec,
      device.mojom.UsbDevice_SetConfiguration_ResponseParamsSpec,
      [value],
      false);
  }

  claimInterface(interface_number) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.UsbDevice_ClaimInterface_ParamsSpec,
      device.mojom.UsbDevice_ClaimInterface_ResponseParamsSpec,
      [interface_number],
      false);
  }

  releaseInterface(interface_number) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.UsbDevice_ReleaseInterface_ParamsSpec,
      device.mojom.UsbDevice_ReleaseInterface_ResponseParamsSpec,
      [interface_number],
      false);
  }

  setInterfaceAlternateSetting(interface_number, alternate_setting) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec,
      device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec,
      [interface_number, alternate_setting],
      false);
  }

  reset() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.UsbDevice_Reset_ParamsSpec,
      device.mojom.UsbDevice_Reset_ResponseParamsSpec,
      [],
      false);
  }

  clearHalt(direction, endpoint_number) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      device.mojom.UsbDevice_ClearHalt_ParamsSpec,
      device.mojom.UsbDevice_ClearHalt_ResponseParamsSpec,
      [direction, endpoint_number],
      false);
  }

  controlTransferIn(params, length, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      device.mojom.UsbDevice_ControlTransferIn_ParamsSpec,
      device.mojom.UsbDevice_ControlTransferIn_ResponseParamsSpec,
      [params, length, timeout],
      false);
  }

  controlTransferOut(params, data, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      device.mojom.UsbDevice_ControlTransferOut_ParamsSpec,
      device.mojom.UsbDevice_ControlTransferOut_ResponseParamsSpec,
      [params, data, timeout],
      false);
  }

  genericTransferIn(endpoint_number, length, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      device.mojom.UsbDevice_GenericTransferIn_ParamsSpec,
      device.mojom.UsbDevice_GenericTransferIn_ResponseParamsSpec,
      [endpoint_number, length, timeout],
      false);
  }

  genericTransferOut(endpoint_number, data, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      device.mojom.UsbDevice_GenericTransferOut_ParamsSpec,
      device.mojom.UsbDevice_GenericTransferOut_ResponseParamsSpec,
      [endpoint_number, data, timeout],
      false);
  }

  isochronousTransferIn(endpoint_number, packet_lengths, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec,
      device.mojom.UsbDevice_IsochronousTransferIn_ResponseParamsSpec,
      [endpoint_number, packet_lengths, timeout],
      false);
  }

  isochronousTransferOut(endpoint_number, data, packet_lengths, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec,
      device.mojom.UsbDevice_IsochronousTransferOut_ResponseParamsSpec,
      [endpoint_number, data, packet_lengths, timeout],
      false);
  }

};

device.mojom.UsbDevice.getRemote = function() {
  let remote = new device.mojom.UsbDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDevice',
    'context');
  return remote.$;
};

device.mojom.UsbDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbDevice', [
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
        
        // Try Method 0: Open
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_Open_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Open (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_SetConfiguration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetConfiguration (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClaimInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_ClaimInterface_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClaimInterface (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReleaseInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_ReleaseInterface_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseInterface (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetInterfaceAlternateSetting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInterfaceAlternateSetting (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Reset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_Reset_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reset (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ClearHalt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_ClearHalt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearHalt (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ControlTransferIn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_ControlTransferIn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ControlTransferIn (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ControlTransferOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_ControlTransferOut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ControlTransferOut (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GenericTransferIn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_GenericTransferIn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenericTransferIn (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GenericTransferOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_GenericTransferOut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenericTransferOut (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: IsochronousTransferIn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsochronousTransferIn (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: IsochronousTransferOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsochronousTransferOut (13)');
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
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_Open_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.open');
          const result = this.impl.open();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_Open_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_SetConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setConfiguration');
          const result = this.impl.setConfiguration(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_SetConfiguration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_ClaimInterface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.claimInterface');
          const result = this.impl.claimInterface(params.interface_number);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_ClaimInterface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_ReleaseInterface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.releaseInterface');
          const result = this.impl.releaseInterface(params.interface_number);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_ReleaseInterface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInterfaceAlternateSetting');
          const result = this.impl.setInterfaceAlternateSetting(params.interface_number, params.alternate_setting);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_Reset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reset');
          const result = this.impl.reset();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_Reset_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_ClearHalt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearHalt');
          const result = this.impl.clearHalt(params.direction, params.endpoint_number);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_ClearHalt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_ControlTransferIn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.controlTransferIn');
          const result = this.impl.controlTransferIn(params.params, params.length, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_ControlTransferIn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_ControlTransferOut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.controlTransferOut');
          const result = this.impl.controlTransferOut(params.params, params.data, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_ControlTransferOut_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_GenericTransferIn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.genericTransferIn');
          const result = this.impl.genericTransferIn(params.endpoint_number, params.length, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_GenericTransferIn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_GenericTransferOut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.genericTransferOut');
          const result = this.impl.genericTransferOut(params.endpoint_number, params.data, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_GenericTransferOut_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isochronousTransferIn');
          const result = this.impl.isochronousTransferIn(params.endpoint_number, params.packet_lengths, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_IsochronousTransferIn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isochronousTransferOut');
          const result = this.impl.isochronousTransferOut(params.endpoint_number, params.data, params.packet_lengths, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDevice_IsochronousTransferOut_ResponseParamsSpec);
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

device.mojom.UsbDeviceReceiver = device.mojom.UsbDeviceReceiver;

device.mojom.UsbDevicePtr = device.mojom.UsbDeviceRemote;
device.mojom.UsbDeviceRequest = device.mojom.UsbDevicePendingReceiver;


// Interface: UsbDeviceClient
mojo.internal.Struct(
    device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec, 'device.mojom.UsbDeviceClient_OnDeviceOpened_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec, 'device.mojom.UsbDeviceClient_OnDeviceClosed_Params', [
    ],
    [[0, 8]]);

device.mojom.UsbDeviceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDeviceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDeviceClientPendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceOpened() {
    return this.$.onDeviceOpened();
  }
  onDeviceClosed() {
    return this.$.onDeviceClosed();
  }
};

device.mojom.UsbDeviceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbDeviceClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceOpened() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.UsbDeviceClient.getRemote = function() {
  let remote = new device.mojom.UsbDeviceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDeviceClient',
    'context');
  return remote.$;
};

device.mojom.UsbDeviceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbDeviceClient', [
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
        
        // Try Method 0: OnDeviceOpened
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceOpened (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDeviceClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceClosed (1)');
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
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceOpened');
          const result = this.impl.onDeviceOpened();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceClosed');
          const result = this.impl.onDeviceClosed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.UsbDeviceClientReceiver = device.mojom.UsbDeviceClientReceiver;

device.mojom.UsbDeviceClientPtr = device.mojom.UsbDeviceClientRemote;
device.mojom.UsbDeviceClientRequest = device.mojom.UsbDeviceClientPendingReceiver;

