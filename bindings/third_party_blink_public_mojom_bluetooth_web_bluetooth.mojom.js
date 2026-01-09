// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/bluetooth/web_bluetooth.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Interface: WebBluetoothService
blink.mojom.WebBluetoothService = {};

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
      []);
  }

  requestDevice(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec,
      blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec,
      [options]);
  }

  getDevices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WebBluetoothService_GetDevices_ParamsSpec,
      blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec,
      []);
  }

  forgetDevice(device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec,
      null,
      [device_id]);
  }

  remoteServerConnect(device_id, client) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec,
      [device_id, client]);
  }

  remoteServerDisconnect(device_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec,
      null,
      [device_id]);
  }

  remoteServerGetPrimaryServices(device_id, quantity, services_uuid) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec,
      [device_id, quantity, services_uuid]);
  }

  remoteServiceGetCharacteristics(service_instance_id, quantity, characteristics_uuid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec,
      [service_instance_id, quantity, characteristics_uuid]);
  }

  remoteCharacteristicReadValue(characteristic_instance_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec,
      [characteristic_instance_id]);
  }

  remoteCharacteristicWriteValue(characteristic_instance_id, value, write_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec,
      [characteristic_instance_id, value, write_type]);
  }

  remoteCharacteristicStartNotifications(characteristic_instance_id, client) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec,
      [characteristic_instance_id, client]);
  }

  remoteCharacteristicStopNotifications(characteristic_instance_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec,
      null,
      [characteristic_instance_id]);
  }

  remoteCharacteristicGetDescriptors(characteristics_instance_id, quantity, descriptor_uuid) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec,
      [characteristics_instance_id, quantity, descriptor_uuid]);
  }

  remoteDescriptorReadValue(descriptor_instance_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec,
      [descriptor_instance_id]);
  }

  remoteDescriptorWriteValue(descriptor_instance_id, value) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec,
      blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec,
      [descriptor_instance_id, value]);
  }

  requestScanningStart(client, options) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec,
      blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec,
      [client, options]);
  }

  watchAdvertisementsForDevice(device_id, client) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec,
      blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec,
      [device_id, client]);
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

// ParamsSpec for GetAvailability
blink.mojom.WebBluetoothService_GetAvailability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.GetAvailability_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_GetAvailability_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.GetAvailability_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestDevice
blink.mojom.WebBluetoothService_RequestDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RequestDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RequestDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RequestDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDevices
blink.mojom.WebBluetoothService_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForgetDevice
blink.mojom.WebBluetoothService_ForgetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.ForgetDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteServerConnect
blink.mojom.WebBluetoothService_RemoteServerConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteServerConnect_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteServerConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteServerConnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteServerDisconnect
blink.mojom.WebBluetoothService_RemoteServerDisconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteServerDisconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteServerGetPrimaryServices
blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteServerGetPrimaryServices_Params',
      packedSize: 32,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quantity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'services_uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteServerGetPrimaryServices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteServerGetPrimaryServices_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'services', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteServiceGetCharacteristics
blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteServiceGetCharacteristics_Params',
      packedSize: 32,
      fields: [
        { name: 'service_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quantity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristics_uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteServiceGetCharacteristics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteServiceGetCharacteristics_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristics', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteCharacteristicReadValue
blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicReadValue_Params',
      packedSize: 16,
      fields: [
        { name: 'characteristic_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteCharacteristicReadValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicReadValue_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteCharacteristicWriteValue
blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicWriteValue_Params',
      packedSize: 32,
      fields: [
        { name: 'characteristic_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'write_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteCharacteristicWriteValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicWriteValue_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteCharacteristicStartNotifications
blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicStartNotifications_Params',
      packedSize: 24,
      fields: [
        { name: 'characteristic_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteCharacteristicStartNotifications_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicStartNotifications_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteCharacteristicStopNotifications
blink.mojom.WebBluetoothService_RemoteCharacteristicStopNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicStopNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'characteristic_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteCharacteristicGetDescriptors
blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicGetDescriptors_Params',
      packedSize: 32,
      fields: [
        { name: 'characteristics_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quantity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'descriptor_uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteCharacteristicGetDescriptors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteCharacteristicGetDescriptors_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'descriptors', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteDescriptorReadValue
blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteDescriptorReadValue_Params',
      packedSize: 16,
      fields: [
        { name: 'descriptor_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteDescriptorReadValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteDescriptorReadValue_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoteDescriptorWriteValue
blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteDescriptorWriteValue_Params',
      packedSize: 24,
      fields: [
        { name: 'descriptor_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RemoteDescriptorWriteValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RemoteDescriptorWriteValue_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestScanningStart
blink.mojom.WebBluetoothService_RequestScanningStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RequestScanningStart_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_RequestScanningStart_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.RequestScanningStart_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WatchAdvertisementsForDevice
blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.WatchAdvertisementsForDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebBluetoothService_WatchAdvertisementsForDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothService.WatchAdvertisementsForDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebBluetoothServicePtr = blink.mojom.WebBluetoothServiceRemote;
blink.mojom.WebBluetoothServiceRequest = blink.mojom.WebBluetoothServicePendingReceiver;


// Interface: WebBluetoothServerClient
blink.mojom.WebBluetoothServerClient = {};

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
      []);
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

// ParamsSpec for GATTServerDisconnected
blink.mojom.WebBluetoothServerClient_GATTServerDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothServerClient.GATTServerDisconnected_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebBluetoothServerClientPtr = blink.mojom.WebBluetoothServerClientRemote;
blink.mojom.WebBluetoothServerClientRequest = blink.mojom.WebBluetoothServerClientPendingReceiver;


// Interface: WebBluetoothCharacteristicClient
blink.mojom.WebBluetoothCharacteristicClient = {};

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
      [value]);
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

// ParamsSpec for RemoteCharacteristicValueChanged
blink.mojom.WebBluetoothCharacteristicClient_RemoteCharacteristicValueChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothCharacteristicClient.RemoteCharacteristicValueChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebBluetoothCharacteristicClientPtr = blink.mojom.WebBluetoothCharacteristicClientRemote;
blink.mojom.WebBluetoothCharacteristicClientRequest = blink.mojom.WebBluetoothCharacteristicClientPendingReceiver;


// Interface: WebBluetoothAdvertisementClient
blink.mojom.WebBluetoothAdvertisementClient = {};

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
      [result]);
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

// ParamsSpec for AdvertisingEvent
blink.mojom.WebBluetoothAdvertisementClient_AdvertisingEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebBluetoothAdvertisementClient.AdvertisingEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebBluetoothAdvertisementClientPtr = blink.mojom.WebBluetoothAdvertisementClientRemote;
blink.mojom.WebBluetoothAdvertisementClientRequest = blink.mojom.WebBluetoothAdvertisementClientPendingReceiver;

