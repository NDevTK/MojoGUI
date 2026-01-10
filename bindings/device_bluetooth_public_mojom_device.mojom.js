// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/device.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};


// Enum: Property
bluetooth.mojom.mojom.Property = {
  NONE: 0,
  BROADCAST: 1,
  READ: 2,
  WRITE_WITHOUT_RESPONSE: 3,
  WRITE: 4,
  NOTIFY: 5,
  INDICATE: 6,
  AUTHENTICATED_SIGNED_WRITES: 7,
  EXTENDED_PROPERTIES: 8,
  RELIABLE_WRITE: 9,
  WRITABLE_AUXILIARIES: 10,
  READ_ENCRYPTED: 11,
  WRITE_ENCRYPTED: 12,
  READ_ENCRYPTED_AUTHENTICATED: 13,
  WRITE_ENCRYPTED_AUTHENTICATED: 14,
};
bluetooth.mojom.mojom.PropertySpec = { $: mojo.internal.Enum() };

// Enum: GattResult
bluetooth.mojom.mojom.GattResult = {
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
bluetooth.mojom.mojom.GattResultSpec = { $: mojo.internal.Enum() };

// Struct: RSSIWrapper
bluetooth.mojom.mojom.RSSIWrapperSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.RSSIWrapper',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DeviceInfo
bluetooth.mojom.mojom.DeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.DeviceInfo',
      packedSize: 72,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'name_for_display', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_gatt_connected', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rssi', packedOffset: 24, packedBitOffset: 0, type: bluetooth.mojom.RSSIWrapperSpec, nullable: true, minVersion: 0 },
        { name: 'service_uuids', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(bluetooth.mojom.UUIDSpec, false), nullable: false, minVersion: 0 },
        { name: 'manufacturer_data_map', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
        { name: 'service_data_map', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(bluetooth.mojom.UUIDSpec, mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: ServiceInfo
bluetooth.mojom.mojom.ServiceInfoSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.ServiceInfo',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: bluetooth.mojom.UUIDSpec, nullable: false, minVersion: 0 },
        { name: 'is_primary', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CharacteristicInfo
bluetooth.mojom.mojom.CharacteristicInfoSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.CharacteristicInfo',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: bluetooth.mojom.UUIDSpec, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'permissions', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'last_known_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DescriptorInfo
bluetooth.mojom.mojom.DescriptorInfoSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.DescriptorInfo',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: bluetooth.mojom.UUIDSpec, nullable: false, minVersion: 0 },
        { name: 'last_known_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: Device
bluetooth.mojom.mojom.Device = {};

bluetooth.mojom.mojom.DevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.mojom.DeviceRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Device';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.mojom.DevicePendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.mojom.DeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.mojom.DeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disconnect() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.mojom.Device_Disconnect_ParamsSpec,
      null,
      []);
  }

  getInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.mojom.Device_GetInfo_ParamsSpec,
      bluetooth.mojom.mojom.Device_GetInfo_ResponseParamsSpec,
      []);
  }

  getServices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.mojom.Device_GetServices_ParamsSpec,
      bluetooth.mojom.mojom.Device_GetServices_ResponseParamsSpec,
      []);
  }

  getCharacteristics(service_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bluetooth.mojom.mojom.Device_GetCharacteristics_ParamsSpec,
      bluetooth.mojom.mojom.Device_GetCharacteristics_ResponseParamsSpec,
      [service_id]);
  }

  readValueForCharacteristic(service_id, characteristic_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      bluetooth.mojom.mojom.Device_ReadValueForCharacteristic_ParamsSpec,
      bluetooth.mojom.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec,
      [service_id, characteristic_id]);
  }

  writeValueForCharacteristic(service_id, characteristic_id, value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      bluetooth.mojom.mojom.Device_WriteValueForCharacteristic_ParamsSpec,
      bluetooth.mojom.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec,
      [service_id, characteristic_id, value]);
  }

  getDescriptors(service_id, characteristic_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      bluetooth.mojom.mojom.Device_GetDescriptors_ParamsSpec,
      bluetooth.mojom.mojom.Device_GetDescriptors_ResponseParamsSpec,
      [service_id, characteristic_id]);
  }

  readValueForDescriptor(service_id, characteristic_id, descriptor_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      bluetooth.mojom.mojom.Device_ReadValueForDescriptor_ParamsSpec,
      bluetooth.mojom.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec,
      [service_id, characteristic_id, descriptor_id]);
  }

  writeValueForDescriptor(service_id, characteristic_id, descriptor_id, value) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      bluetooth.mojom.mojom.Device_WriteValueForDescriptor_ParamsSpec,
      bluetooth.mojom.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec,
      [service_id, characteristic_id, descriptor_id, value]);
  }

};

bluetooth.mojom.mojom.Device.getRemote = function() {
  let remote = new bluetooth.mojom.mojom.DeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Device',
    'context');
  return remote.$;
};

// ParamsSpec for Disconnect
bluetooth.mojom.mojom.Device_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.Disconnect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetInfo
bluetooth.mojom.mojom.Device_GetInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

bluetooth.mojom.mojom.Device_GetInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: bluetooth.mojom.DeviceInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetServices
bluetooth.mojom.mojom.Device_GetServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

bluetooth.mojom.mojom.Device_GetServices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetServices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'services', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(bluetooth.mojom.ServiceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCharacteristics
bluetooth.mojom.mojom.Device_GetCharacteristics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetCharacteristics_Params',
      packedSize: 16,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

bluetooth.mojom.mojom.Device_GetCharacteristics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetCharacteristics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'characteristics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(bluetooth.mojom.CharacteristicInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadValueForCharacteristic
bluetooth.mojom.mojom.Device_ReadValueForCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.ReadValueForCharacteristic_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

bluetooth.mojom.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.ReadValueForCharacteristic_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: bluetooth.mojom.GattResultSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for WriteValueForCharacteristic
bluetooth.mojom.mojom.Device_WriteValueForCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.WriteValueForCharacteristic_Params',
      packedSize: 32,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

bluetooth.mojom.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.WriteValueForCharacteristic_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: bluetooth.mojom.GattResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDescriptors
bluetooth.mojom.mojom.Device_GetDescriptors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetDescriptors_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

bluetooth.mojom.mojom.Device_GetDescriptors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.GetDescriptors_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'descriptors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(bluetooth.mojom.DescriptorInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadValueForDescriptor
bluetooth.mojom.mojom.Device_ReadValueForDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.ReadValueForDescriptor_Params',
      packedSize: 32,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'descriptor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

bluetooth.mojom.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.ReadValueForDescriptor_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: bluetooth.mojom.GattResultSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for WriteValueForDescriptor
bluetooth.mojom.mojom.Device_WriteValueForDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.WriteValueForDescriptor_Params',
      packedSize: 40,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'descriptor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

bluetooth.mojom.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.Device.WriteValueForDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: bluetooth.mojom.GattResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.mojom.DevicePtr = bluetooth.mojom.mojom.DeviceRemote;
bluetooth.mojom.mojom.DeviceRequest = bluetooth.mojom.mojom.DevicePendingReceiver;

