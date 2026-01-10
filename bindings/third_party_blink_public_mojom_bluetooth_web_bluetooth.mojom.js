// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/bluetooth/web_bluetooth.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var bluetooth = bluetooth || {};
var mojo_base = mojo_base || {};

blink.mojom.WebBluetoothResultSpec = { $: mojo.internal.Enum() };
blink.mojom.WebBluetoothGATTQueryQuantitySpec = { $: mojo.internal.Enum() };
blink.mojom.WebBluetoothWriteTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.WebBluetoothLeScanFilterSpec = { $: {} };
blink.mojom.WebBluetoothCompanySpec = { $: {} };
blink.mojom.WebBluetoothDataFilterSpec = { $: {} };
blink.mojom.WebBluetoothRequestDeviceOptionsSpec = { $: {} };
blink.mojom.WebBluetoothRequestLEScanOptionsSpec = { $: {} };
blink.mojom.WebBluetoothDeviceIdSpec = { $: {} };
blink.mojom.WebBluetoothDeviceSpec = { $: {} };
blink.mojom.WebBluetoothRemoteGATTServiceSpec = { $: {} };
blink.mojom.WebBluetoothRemoteGATTCharacteristicSpec = { $: {} };
blink.mojom.WebBluetoothAdvertisingEventSpec = { $: {} };
blink.mojom.WebBluetoothRemoteGATTDescriptorSpec = { $: {} };
blink.mojom.WebBluetoothService = {};
blink.mojom.WebBluetoothService.$interfaceName = 'blink.mojom.WebBluetoothService';
blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_GetDevices_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec = { $: {} };
blink.mojom.WebBluetoothServerClient = {};
blink.mojom.WebBluetoothServerClient.$interfaceName = 'blink.mojom.WebBluetoothServerClient';
blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothCharacteristicClient = {};
blink.mojom.WebBluetoothCharacteristicClient.$interfaceName = 'blink.mojom.WebBluetoothCharacteristicClient';
blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec = { $: {} };
blink.mojom.WebBluetoothAdvertisementClient = {};
blink.mojom.WebBluetoothAdvertisementClient.$interfaceName = 'blink.mojom.WebBluetoothAdvertisementClient';
blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec = { $: {} };

// Enum: WebBluetoothResult
blink.mojom.WebBluetoothResult = {
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
blink.mojom.WebBluetoothGATTQueryQuantity = {
  SINGLE: 0,
  MULTIPLE: 1,
};

// Enum: WebBluetoothWriteType
blink.mojom.WebBluetoothWriteType = {
  kWriteDefaultDeprecated: 0,
  kWriteWithResponse: 1,
  kWriteWithoutResponse: 2,
};

// Struct: WebBluetoothLeScanFilter
mojo.internal.Struct(
    blink.mojom.WebBluetoothLeScanFilterSpec, 'blink.mojom.WebBluetoothLeScanFilter', [
      mojo.internal.StructField('services', 0, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name_prefix', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer_data', 24, 0, mojo.internal.Map(blink.mojom.WebBluetoothCompanySpec.$, mojo.internal.Array(blink.mojom.WebBluetoothDataFilterSpec.$, false), false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WebBluetoothCompany
mojo.internal.Struct(
    blink.mojom.WebBluetoothCompanySpec, 'blink.mojom.WebBluetoothCompany', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebBluetoothDataFilter
mojo.internal.Struct(
    blink.mojom.WebBluetoothDataFilterSpec, 'blink.mojom.WebBluetoothDataFilter', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('mask', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebBluetoothRequestDeviceOptions
mojo.internal.Struct(
    blink.mojom.WebBluetoothRequestDeviceOptionsSpec, 'blink.mojom.WebBluetoothRequestDeviceOptions', [
      mojo.internal.StructField('filters', 0, 0, mojo.internal.Array(blink.mojom.WebBluetoothLeScanFilterSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('exclusion_filters', 8, 0, mojo.internal.Array(blink.mojom.WebBluetoothLeScanFilterSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('optional_services', 16, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('optional_manufacturer_data', 24, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('accept_all_devices', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebBluetoothRequestLEScanOptions
mojo.internal.Struct(
    blink.mojom.WebBluetoothRequestLEScanOptionsSpec, 'blink.mojom.WebBluetoothRequestLEScanOptions', [
      mojo.internal.StructField('filters', 0, 0, mojo.internal.Array(blink.mojom.WebBluetoothLeScanFilterSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('keep_repeated_devices', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accept_all_advertisements', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebBluetoothDeviceId
mojo.internal.Struct(
    blink.mojom.WebBluetoothDeviceIdSpec, 'blink.mojom.WebBluetoothDeviceId', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebBluetoothDevice
mojo.internal.Struct(
    blink.mojom.WebBluetoothDeviceSpec, 'blink.mojom.WebBluetoothDevice', [
      mojo.internal.StructField('id', 0, 0, blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebBluetoothRemoteGATTService
mojo.internal.Struct(
    blink.mojom.WebBluetoothRemoteGATTServiceSpec, 'blink.mojom.WebBluetoothRemoteGATTService', [
      mojo.internal.StructField('instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebBluetoothRemoteGATTCharacteristic
mojo.internal.Struct(
    blink.mojom.WebBluetoothRemoteGATTCharacteristicSpec, 'blink.mojom.WebBluetoothRemoteGATTCharacteristic', [
      mojo.internal.StructField('instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('properties', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebBluetoothAdvertisingEvent
mojo.internal.Struct(
    blink.mojom.WebBluetoothAdvertisingEventSpec, 'blink.mojom.WebBluetoothAdvertisingEvent', [
      mojo.internal.StructField('device', 0, 0, blink.mojom.WebBluetoothDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('uuids', 16, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_data', 24, 0, mojo.internal.Map(blink.mojom.WebBluetoothCompanySpec.$, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('service_data', 32, 0, mojo.internal.Map(bluetooth.mojom.UUIDSpec.$, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('appearance', 40, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('appearance_is_set', 42, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tx_power_is_set', 42, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tx_power', 43, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('rssi_is_set', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rssi', 45, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebBluetoothRemoteGATTDescriptor
mojo.internal.Struct(
    blink.mojom.WebBluetoothRemoteGATTDescriptorSpec, 'blink.mojom.WebBluetoothRemoteGATTDescriptor', [
      mojo.internal.StructField('instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebBluetoothService
mojo.internal.Struct(
    blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec, 'blink.mojom.WebBluetoothService_GetAvailability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_GetAvailability_ResponseParams', [
      mojo.internal.StructField('is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec, 'blink.mojom.WebBluetoothService_RequestDevice_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.WebBluetoothRequestDeviceOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RequestDevice_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, blink.mojom.WebBluetoothDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_GetDevices_ParamsSpec, 'blink.mojom.WebBluetoothService_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_GetDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(blink.mojom.WebBluetoothDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec, 'blink.mojom.WebBluetoothService_ForgetDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_ForgetDevice_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerConnect_Params', [
      mojo.internal.StructField('device_id', 0, 0, blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerDisconnect_Params', [
      mojo.internal.StructField('device_id', 0, 0, blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_Params', [
      mojo.internal.StructField('device_id', 0, 0, blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quantity', 8, 0, blink.mojom.WebBluetoothGATTQueryQuantitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('services_uuid', 16, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('services', 8, 0, mojo.internal.Array(blink.mojom.WebBluetoothRemoteGATTServiceSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_Params', [
      mojo.internal.StructField('service_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('quantity', 8, 0, blink.mojom.WebBluetoothGATTQueryQuantitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('characteristics_uuid', 16, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('characteristics', 8, 0, mojo.internal.Array(blink.mojom.WebBluetoothRemoteGATTCharacteristicSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_Params', [
      mojo.internal.StructField('characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_Params', [
      mojo.internal.StructField('characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('write_type', 16, 0, blink.mojom.WebBluetoothWriteTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_Params', [
      mojo.internal.StructField('characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_Params', [
      mojo.internal.StructField('characteristic_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_Params', [
      mojo.internal.StructField('characteristics_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('quantity', 8, 0, blink.mojom.WebBluetoothGATTQueryQuantitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_uuid', 16, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('descriptors', 8, 0, mojo.internal.Array(blink.mojom.WebBluetoothRemoteGATTDescriptorSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_Params', [
      mojo.internal.StructField('descriptor_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_Params', [
      mojo.internal.StructField('descriptor_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec, 'blink.mojom.WebBluetoothService_RequestScanningStart_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.WebBluetoothRequestLEScanOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec, 'blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, blink.mojom.WebBluetoothDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec, 'blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WebBluetoothServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebBluetoothServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebBluetoothServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebBluetoothServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebBluetoothServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAvailability() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec,
      blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec,
      [],
      false);
  }

  requestDevice(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec,
      blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec,
      [options],
      false);
  }

  getDevices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WebBluetoothService_GetDevices_ParamsSpec,
      blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  forgetDevice(device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec,
      blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec,
      [device_id],
      false);
  }

  remoteServerConnect(device_id, client) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec,
      [device_id, client],
      false);
  }

  remoteServerDisconnect(device_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec,
      null,
      [device_id],
      false);
  }

  remoteServerGetPrimaryServices(device_id, quantity, services_uuid) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec,
      [device_id, quantity, services_uuid],
      false);
  }

  remoteServiceGetCharacteristics(service_instance_id, quantity, characteristics_uuid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec,
      [service_instance_id, quantity, characteristics_uuid],
      false);
  }

  remoteCharacteristicReadValue(characteristic_instance_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec,
      [characteristic_instance_id],
      false);
  }

  remoteCharacteristicWriteValue(characteristic_instance_id, value, write_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec,
      [characteristic_instance_id, value, write_type],
      false);
  }

  remoteCharacteristicStartNotifications(characteristic_instance_id, client) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec,
      [characteristic_instance_id, client],
      false);
  }

  remoteCharacteristicStopNotifications(characteristic_instance_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec,
      [characteristic_instance_id],
      false);
  }

  remoteCharacteristicGetDescriptors(characteristics_instance_id, quantity, descriptor_uuid) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec,
      [characteristics_instance_id, quantity, descriptor_uuid],
      false);
  }

  remoteDescriptorReadValue(descriptor_instance_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec,
      [descriptor_instance_id],
      false);
  }

  remoteDescriptorWriteValue(descriptor_instance_id, value) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec,
      [descriptor_instance_id, value],
      false);
  }

  requestScanningStart(client, options) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec,
      blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec,
      [client, options],
      false);
  }

  watchAdvertisementsForDevice(device_id, client) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec,
      blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec,
      [device_id, client],
      false);
  }

};

blink.mojom.WebBluetoothService.getRemote = function() {
  let remote = new blink.mojom.WebBluetoothServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothService',
    'context');
  return remote.$;
};

blink.mojom.WebBluetoothServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAvailability();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestDevice(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = blink.mojom.WebBluetoothService_GetDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forgetDevice(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_ForgetDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteServerConnect(params.device_id, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteServerDisconnect(params.device_id);
          break;
        }
        case 6: {
          const params = blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteServerGetPrimaryServices(params.device_id, params.quantity, params.services_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteServiceGetCharacteristics(params.service_instance_id, params.quantity, params.characteristics_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteCharacteristicReadValue(params.characteristic_instance_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteCharacteristicWriteValue(params.characteristic_instance_id, params.value, params.write_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteCharacteristicStartNotifications(params.characteristic_instance_id, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteCharacteristicStopNotifications(params.characteristic_instance_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteCharacteristicGetDescriptors(params.characteristics_instance_id, params.quantity, params.descriptor_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteDescriptorReadValue(params.descriptor_instance_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteDescriptorWriteValue(params.descriptor_instance_id, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestScanningStart(params.client, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.watchAdvertisementsForDevice(params.device_id, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.WebBluetoothServiceReceiver = blink.mojom.WebBluetoothServiceReceiver;

blink.mojom.WebBluetoothServicePtr = blink.mojom.WebBluetoothServiceRemote;
blink.mojom.WebBluetoothServiceRequest = blink.mojom.WebBluetoothServicePendingReceiver;


// Interface: WebBluetoothServerClient
mojo.internal.Struct(
    blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec, 'blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_Params', [
    ],
    [[0, 8]]);

blink.mojom.WebBluetoothServerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebBluetoothServerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothServerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebBluetoothServerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebBluetoothServerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebBluetoothServerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  gATTServerDisconnected() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.WebBluetoothServerClient.getRemote = function() {
  let remote = new blink.mojom.WebBluetoothServerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothServerClient',
    'context');
  return remote.$;
};

blink.mojom.WebBluetoothServerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gATTServerDisconnected();
          break;
        }
      }
    }});
  }
};

blink.mojom.WebBluetoothServerClientReceiver = blink.mojom.WebBluetoothServerClientReceiver;

blink.mojom.WebBluetoothServerClientPtr = blink.mojom.WebBluetoothServerClientRemote;
blink.mojom.WebBluetoothServerClientRequest = blink.mojom.WebBluetoothServerClientPendingReceiver;


// Interface: WebBluetoothCharacteristicClient
mojo.internal.Struct(
    blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec, 'blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_Params', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WebBluetoothCharacteristicClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebBluetoothCharacteristicClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothCharacteristicClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebBluetoothCharacteristicClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebBluetoothCharacteristicClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebBluetoothCharacteristicClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  remoteCharacteristicValueChanged(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec,
      null,
      [value],
      false);
  }

};

blink.mojom.WebBluetoothCharacteristicClient.getRemote = function() {
  let remote = new blink.mojom.WebBluetoothCharacteristicClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothCharacteristicClient',
    'context');
  return remote.$;
};

blink.mojom.WebBluetoothCharacteristicClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.remoteCharacteristicValueChanged(params.value);
          break;
        }
      }
    }});
  }
};

blink.mojom.WebBluetoothCharacteristicClientReceiver = blink.mojom.WebBluetoothCharacteristicClientReceiver;

blink.mojom.WebBluetoothCharacteristicClientPtr = blink.mojom.WebBluetoothCharacteristicClientRemote;
blink.mojom.WebBluetoothCharacteristicClientRequest = blink.mojom.WebBluetoothCharacteristicClientPendingReceiver;


// Interface: WebBluetoothAdvertisementClient
mojo.internal.Struct(
    blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec, 'blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_Params', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebBluetoothAdvertisingEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WebBluetoothAdvertisementClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebBluetoothAdvertisementClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebBluetoothAdvertisementClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebBluetoothAdvertisementClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebBluetoothAdvertisementClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebBluetoothAdvertisementClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  advertisingEvent(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec,
      null,
      [result],
      false);
  }

};

blink.mojom.WebBluetoothAdvertisementClient.getRemote = function() {
  let remote = new blink.mojom.WebBluetoothAdvertisementClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebBluetoothAdvertisementClient',
    'context');
  return remote.$;
};

blink.mojom.WebBluetoothAdvertisementClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.advertisingEvent(params.result);
          break;
        }
      }
    }});
  }
};

blink.mojom.WebBluetoothAdvertisementClientReceiver = blink.mojom.WebBluetoothAdvertisementClientReceiver;

blink.mojom.WebBluetoothAdvertisementClientPtr = blink.mojom.WebBluetoothAdvertisementClientRemote;
blink.mojom.WebBluetoothAdvertisementClientRequest = blink.mojom.WebBluetoothAdvertisementClientPendingReceiver;

