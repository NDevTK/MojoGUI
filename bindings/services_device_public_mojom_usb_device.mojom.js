// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_device.mojom
// Module: device.mojom

'use strict';

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
};

device.mojom.UsbDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  open() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.UsbDevice_Open_ParamsSpec,
      device.mojom.UsbDevice_Open_ResponseParamsSpec,
      [],
      false);
  }

  close() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDevice_Close_ParamsSpec,
      device.mojom.UsbDevice_Close_ResponseParamsSpec,
      [],
      false);
  }

  setConfiguration(value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.UsbDevice_SetConfiguration_ParamsSpec,
      device.mojom.UsbDevice_SetConfiguration_ResponseParamsSpec,
      [value],
      false);
  }

  claimInterface(interface_number) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.UsbDevice_ClaimInterface_ParamsSpec,
      device.mojom.UsbDevice_ClaimInterface_ResponseParamsSpec,
      [interface_number],
      false);
  }

  releaseInterface(interface_number) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.UsbDevice_ReleaseInterface_ParamsSpec,
      device.mojom.UsbDevice_ReleaseInterface_ResponseParamsSpec,
      [interface_number],
      false);
  }

  setInterfaceAlternateSetting(interface_number, alternate_setting) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec,
      device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec,
      [interface_number, alternate_setting],
      false);
  }

  reset() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.UsbDevice_Reset_ParamsSpec,
      device.mojom.UsbDevice_Reset_ResponseParamsSpec,
      [],
      false);
  }

  clearHalt(direction, endpoint_number) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.UsbDevice_ClearHalt_ParamsSpec,
      device.mojom.UsbDevice_ClearHalt_ResponseParamsSpec,
      [direction, endpoint_number],
      false);
  }

  controlTransferIn(params, length, timeout) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.UsbDevice_ControlTransferIn_ParamsSpec,
      device.mojom.UsbDevice_ControlTransferIn_ResponseParamsSpec,
      [params, length, timeout],
      false);
  }

  controlTransferOut(params, data, timeout) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.UsbDevice_ControlTransferOut_ParamsSpec,
      device.mojom.UsbDevice_ControlTransferOut_ResponseParamsSpec,
      [params, data, timeout],
      false);
  }

  genericTransferIn(endpoint_number, length, timeout) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.UsbDevice_GenericTransferIn_ParamsSpec,
      device.mojom.UsbDevice_GenericTransferIn_ResponseParamsSpec,
      [endpoint_number, length, timeout],
      false);
  }

  genericTransferOut(endpoint_number, data, timeout) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      device.mojom.UsbDevice_GenericTransferOut_ParamsSpec,
      device.mojom.UsbDevice_GenericTransferOut_ResponseParamsSpec,
      [endpoint_number, data, timeout],
      false);
  }

  isochronousTransferIn(endpoint_number, packet_lengths, timeout) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec,
      device.mojom.UsbDevice_IsochronousTransferIn_ResponseParamsSpec,
      [endpoint_number, packet_lengths, timeout],
      false);
  }

  isochronousTransferOut(endpoint_number, data, packet_lengths, timeout) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.UsbDevice_Open_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_Close_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_SetConfiguration_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_ClaimInterface_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_ReleaseInterface_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_Reset_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_ClearHalt_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_ControlTransferIn_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_ControlTransferOut_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_GenericTransferIn_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_GenericTransferOut_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec.$.decode(message.payload);
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
          const params = device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec.$.decode(message.payload);
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
};

device.mojom.UsbDeviceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceOpened() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceOpened();
          break;
        }
        case 1: {
          const params = device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceClosed();
          break;
        }
      }
    }});
  }
};

device.mojom.UsbDeviceClientReceiver = device.mojom.UsbDeviceClientReceiver;

device.mojom.UsbDeviceClientPtr = device.mojom.UsbDeviceClientRemote;
device.mojom.UsbDeviceClientRequest = device.mojom.UsbDeviceClientPendingReceiver;

