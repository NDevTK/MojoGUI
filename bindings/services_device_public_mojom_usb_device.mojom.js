// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_device.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


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

// Struct: UsbEndpointInfo
device.mojom.UsbEndpointInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbEndpointInfo',
      packedSize: 56,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbTransferDirectionSpec, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.UsbTransferTypeSpec, nullable: false },
        { name: 'synchronization_type', packedOffset: 16, packedBitOffset: 0, type: device.mojom.UsbSynchronizationTypeSpec, nullable: false },
        { name: 'usage_type', packedOffset: 24, packedBitOffset: 0, type: device.mojom.UsbUsageTypeSpec, nullable: false },
        { name: 'extra_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'packet_size', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'endpoint_number', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'polling_interval', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbAlternateInterfaceInfo
device.mojom.UsbAlternateInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbAlternateInterfaceInfo',
      packedSize: 40,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'endpoints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'extra_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'alternate_setting', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'class_code', packedOffset: 25, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'subclass_code', packedOffset: 26, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'protocol_code', packedOffset: 27, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbInterfaceInfo
device.mojom.UsbInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbInterfaceInfo',
      packedSize: 24,
      fields: [
        { name: 'alternates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'interface_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'first_interface', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbConfigurationInfo
device.mojom.UsbConfigurationInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbConfigurationInfo',
      packedSize: 48,
      fields: [
        { name: 'configuration_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'interfaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'extra_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'configuration_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'maximum_power', packedOffset: 25, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'self_powered', packedOffset: 26, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'remote_wakeup', packedOffset: 26, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbDeviceInfo
device.mojom.UsbDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceInfo',
      packedSize: 80,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'manufacturer_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'product_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'serial_number', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'webusb_landing_page', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'configurations', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bus_number', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'port_number', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'vendor_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'product_id', packedOffset: 58, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'usb_version_major', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'usb_version_minor', packedOffset: 61, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'usb_version_subminor', packedOffset: 62, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'class_code', packedOffset: 63, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'subclass_code', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'protocol_code', packedOffset: 65, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'device_version_major', packedOffset: 66, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'device_version_minor', packedOffset: 67, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'device_version_subminor', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'active_configuration', packedOffset: 69, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbControlTransferParams
device.mojom.UsbControlTransferParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbControlTransferParams',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbControlTransferTypeSpec, nullable: false },
        { name: 'recipient', packedOffset: 8, packedBitOffset: 0, type: device.mojom.UsbControlTransferRecipientSpec, nullable: false },
        { name: 'kSecurityKeyAOAModel', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'index', packedOffset: 26, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'request', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbIsochronousPacket
device.mojom.UsbIsochronousPacketSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbIsochronousPacket',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbTransferStatusSpec, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'transferred_length', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: UsbDevice
device.mojom.UsbDevice = {};

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
      []);
  }

  close() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDevice_Close_ParamsSpec,
      null,
      []);
  }

  setConfiguration(value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.UsbDevice_SetConfiguration_ParamsSpec,
      device.mojom.UsbDevice_SetConfiguration_ResponseParamsSpec,
      [value]);
  }

  claimInterface(interface_number) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.UsbDevice_ClaimInterface_ParamsSpec,
      device.mojom.UsbDevice_ClaimInterface_ResponseParamsSpec,
      [interface_number]);
  }

  releaseInterface(interface_number) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.UsbDevice_ReleaseInterface_ParamsSpec,
      device.mojom.UsbDevice_ReleaseInterface_ResponseParamsSpec,
      [interface_number]);
  }

  setInterfaceAlternateSetting(interface_number, alternate_setting) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec,
      device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec,
      [interface_number, alternate_setting]);
  }

  reset() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.UsbDevice_Reset_ParamsSpec,
      device.mojom.UsbDevice_Reset_ResponseParamsSpec,
      []);
  }

  clearHalt(direction, endpoint_number) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.UsbDevice_ClearHalt_ParamsSpec,
      device.mojom.UsbDevice_ClearHalt_ResponseParamsSpec,
      [direction, endpoint_number]);
  }

  controlTransferIn(params, length, timeout) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.UsbDevice_ControlTransferIn_ParamsSpec,
      device.mojom.UsbDevice_ControlTransferIn_ResponseParamsSpec,
      [params, length, timeout]);
  }

  controlTransferOut(params, data, timeout) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.UsbDevice_ControlTransferOut_ParamsSpec,
      device.mojom.UsbDevice_ControlTransferOut_ResponseParamsSpec,
      [params, data, timeout]);
  }

  genericTransferIn(endpoint_number, length, timeout) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.UsbDevice_GenericTransferIn_ParamsSpec,
      device.mojom.UsbDevice_GenericTransferIn_ResponseParamsSpec,
      [endpoint_number, length, timeout]);
  }

  genericTransferOut(endpoint_number, data, timeout) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      device.mojom.UsbDevice_GenericTransferOut_ParamsSpec,
      device.mojom.UsbDevice_GenericTransferOut_ResponseParamsSpec,
      [endpoint_number, data, timeout]);
  }

  isochronousTransferIn(endpoint_number, packet_lengths, timeout) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec,
      device.mojom.UsbDevice_IsochronousTransferIn_ResponseParamsSpec,
      [endpoint_number, packet_lengths, timeout]);
  }

  isochronousTransferOut(endpoint_number, data, packet_lengths, timeout) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec,
      device.mojom.UsbDevice_IsochronousTransferOut_ResponseParamsSpec,
      [endpoint_number, data, packet_lengths, timeout]);
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

// ParamsSpec for Open
device.mojom.UsbDevice_Open_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.Open_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_Open_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.Open_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbOpenDeviceResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Close
device.mojom.UsbDevice_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetConfiguration
device.mojom.UsbDevice_SetConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.SetConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_SetConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.SetConfiguration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClaimInterface
device.mojom.UsbDevice_ClaimInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ClaimInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'interface_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_ClaimInterface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ClaimInterface_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbClaimInterfaceResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReleaseInterface
device.mojom.UsbDevice_ReleaseInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ReleaseInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'interface_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_ReleaseInterface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ReleaseInterface_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetInterfaceAlternateSetting
device.mojom.UsbDevice_SetInterfaceAlternateSetting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.SetInterfaceAlternateSetting_Params',
      packedSize: 16,
      fields: [
        { name: 'interface_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'alternate_setting', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.SetInterfaceAlternateSetting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Reset
device.mojom.UsbDevice_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_Reset_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.Reset_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearHalt
device.mojom.UsbDevice_ClearHalt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ClearHalt_Params',
      packedSize: 24,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbTransferDirectionSpec, nullable: false },
        { name: 'endpoint_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_ClearHalt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ClearHalt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ControlTransferIn
device.mojom.UsbDevice_ControlTransferIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ControlTransferIn_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbControlTransferParamsSpec, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'timeout', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_ControlTransferIn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ControlTransferIn_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbTransferStatusSpec, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ControlTransferOut
device.mojom.UsbDevice_ControlTransferOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ControlTransferOut_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbControlTransferParamsSpec, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'timeout', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_ControlTransferOut_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.ControlTransferOut_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbTransferStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GenericTransferIn
device.mojom.UsbDevice_GenericTransferIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.GenericTransferIn_Params',
      packedSize: 24,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'timeout', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'endpoint_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_GenericTransferIn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.GenericTransferIn_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbTransferStatusSpec, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GenericTransferOut
device.mojom.UsbDevice_GenericTransferOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.GenericTransferOut_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'endpoint_number', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_GenericTransferOut_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.GenericTransferOut_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbTransferStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsochronousTransferIn
device.mojom.UsbDevice_IsochronousTransferIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.IsochronousTransferIn_Params',
      packedSize: 24,
      fields: [
        { name: 'packet_lengths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'endpoint_number', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_IsochronousTransferIn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.IsochronousTransferIn_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'packets', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsochronousTransferOut
device.mojom.UsbDevice_IsochronousTransferOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.IsochronousTransferOut_Params',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'packet_lengths', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'timeout', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'endpoint_number', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDevice_IsochronousTransferOut_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDevice.IsochronousTransferOut_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'packets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.UsbDevicePtr = device.mojom.UsbDeviceRemote;
device.mojom.UsbDeviceRequest = device.mojom.UsbDevicePendingReceiver;


// Interface: UsbDeviceClient
device.mojom.UsbDeviceClient = {};

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
      []);
  }

  onDeviceClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnDeviceOpened
device.mojom.UsbDeviceClient_OnDeviceOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceClient.OnDeviceOpened_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceClosed
device.mojom.UsbDeviceClient_OnDeviceClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceClient.OnDeviceClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.UsbDeviceClientPtr = device.mojom.UsbDeviceClientRemote;
device.mojom.UsbDeviceClientRequest = device.mojom.UsbDeviceClientPendingReceiver;

