// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/device.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};

bluetooth.mojom.PropertySpec = { $: mojo.internal.Enum() };
bluetooth.mojom.GattResultSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.RSSIWrapperSpec = { $: {} };
bluetooth.mojom.DeviceInfoSpec = { $: {} };
bluetooth.mojom.ServiceInfoSpec = { $: {} };
bluetooth.mojom.CharacteristicInfoSpec = { $: {} };
bluetooth.mojom.DescriptorInfoSpec = { $: {} };
bluetooth.mojom.Device = {};
bluetooth.mojom.Device.$interfaceName = 'bluetooth.mojom.Device';
bluetooth.mojom.Device_Disconnect_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetInfo_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetInfo_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_GetServices_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetServices_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_GetCharacteristics_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_GetDescriptors_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec = { $: {} };

// Enum: Property
bluetooth.mojom.Property = {
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
bluetooth.mojom.GattResult = {
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
    bluetooth.mojom.RSSIWrapperSpec, 'bluetooth.mojom.RSSIWrapper', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceInfo
mojo.internal.Struct(
    bluetooth.mojom.DeviceInfoSpec, 'bluetooth.mojom.DeviceInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name_for_display', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_gatt_connected', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rssi', 32, 0, bluetooth.mojom.RSSIWrapperSpec, null, true, 0, undefined),
      mojo.internal.StructField('service_uuids', 40, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_data_map', 48, 0, mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('service_data_map', 56, 0, mojo.internal.Map(bluetooth.mojom.UUIDSpec, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ServiceInfo
mojo.internal.Struct(
    bluetooth.mojom.ServiceInfoSpec, 'bluetooth.mojom.ServiceInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_primary', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CharacteristicInfo
mojo.internal.Struct(
    bluetooth.mojom.CharacteristicInfoSpec, 'bluetooth.mojom.CharacteristicInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('properties', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('permissions', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('last_known_value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DescriptorInfo
mojo.internal.Struct(
    bluetooth.mojom.DescriptorInfoSpec, 'bluetooth.mojom.DescriptorInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_known_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Device
mojo.internal.Struct(
    bluetooth.mojom.Device_Disconnect_ParamsSpec, 'bluetooth.mojom.Device_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetInfo_ParamsSpec, 'bluetooth.mojom.Device_GetInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetInfo_ResponseParamsSpec, 'bluetooth.mojom.Device_GetInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, bluetooth.mojom.DeviceInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetServices_ParamsSpec, 'bluetooth.mojom.Device_GetServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetServices_ResponseParamsSpec, 'bluetooth.mojom.Device_GetServices_ResponseParams', [
      mojo.internal.StructField('services', 0, 0, mojo.internal.Array(bluetooth.mojom.ServiceInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetCharacteristics_ParamsSpec, 'bluetooth.mojom.Device_GetCharacteristics_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec, 'bluetooth.mojom.Device_GetCharacteristics_ResponseParams', [
      mojo.internal.StructField('characteristics', 0, 0, mojo.internal.Array(bluetooth.mojom.CharacteristicInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec, 'bluetooth.mojom.Device_ReadValueForCharacteristic_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec, 'bluetooth.mojom.Device_WriteValueForCharacteristic_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetDescriptors_ParamsSpec, 'bluetooth.mojom.Device_GetDescriptors_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec, 'bluetooth.mojom.Device_GetDescriptors_ResponseParams', [
      mojo.internal.StructField('descriptors', 0, 0, mojo.internal.Array(bluetooth.mojom.DescriptorInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec, 'bluetooth.mojom.Device_ReadValueForDescriptor_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec, 'bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec, 'bluetooth.mojom.Device_WriteValueForDescriptor_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec, 'bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.DevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.DeviceRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Device';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.DevicePendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.DeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.DeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disconnect() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.Device_Disconnect_ParamsSpec,
      null,
      []);
  }

  getInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.Device_GetInfo_ParamsSpec,
      bluetooth.mojom.Device_GetInfo_ResponseParamsSpec,
      []);
  }

  getServices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.Device_GetServices_ParamsSpec,
      bluetooth.mojom.Device_GetServices_ResponseParamsSpec,
      []);
  }

  getCharacteristics(service_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bluetooth.mojom.Device_GetCharacteristics_ParamsSpec,
      bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec,
      [service_id]);
  }

  readValueForCharacteristic(service_id, characteristic_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec,
      bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec,
      [service_id, characteristic_id]);
  }

  writeValueForCharacteristic(service_id, characteristic_id, value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec,
      bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec,
      [service_id, characteristic_id, value]);
  }

  getDescriptors(service_id, characteristic_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      bluetooth.mojom.Device_GetDescriptors_ParamsSpec,
      bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec,
      [service_id, characteristic_id]);
  }

  readValueForDescriptor(service_id, characteristic_id, descriptor_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec,
      bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec,
      [service_id, characteristic_id, descriptor_id]);
  }

  writeValueForDescriptor(service_id, characteristic_id, descriptor_id, value) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec,
      bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec,
      [service_id, characteristic_id, descriptor_id, value]);
  }

};

bluetooth.mojom.Device.getRemote = function() {
  let remote = new bluetooth.mojom.DeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Device',
    'context');
  return remote.$;
};

bluetooth.mojom.DevicePtr = bluetooth.mojom.DeviceRemote;
bluetooth.mojom.DeviceRequest = bluetooth.mojom.DevicePendingReceiver;

