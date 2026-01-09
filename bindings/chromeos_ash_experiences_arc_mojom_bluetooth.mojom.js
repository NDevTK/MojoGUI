// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/bluetooth.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: BluetoothAdapterState
arc.mojom.BluetoothAdapterState = {
  OFF: 0,
  ON: 1,
};

// Enum: BluetoothDiscoveryState
arc.mojom.BluetoothDiscoveryState = {
  STOPPED: 0,
  STARTED: 1,
};

// Enum: BluetoothAclState
arc.mojom.BluetoothAclState = {
  CONNECTED: 0,
  DISCONNECTED: 1,
};

// Enum: BluetoothStatus
arc.mojom.BluetoothStatus = {
  SUCCESS: 0,
  FAIL: 1,
  NOT_READY: 2,
  NOMEM: 3,
  BUSY: 4,
  DONE: 5,
  UNSUPPORTED: 6,
  PARM_INVALID: 7,
  UNHANDLED: 8,
  AUTH_FAILURE: 9,
  RMT_DEV_DOWN: 10,
  AUTH_REJECTED: 11,
};

// Enum: BluetoothPropertyType
arc.mojom.BluetoothPropertyType = {
  ALL: 0,
  BDNAME: 1,
  BDADDR: 2,
  UUIDS: 3,
  CLASS_OF_DEVICE: 4,
  TYPE_OF_DEVICE: 5,
  SERVICE_RECORD: 6,
  ADAPTER_SCAN_MODE: 7,
  ADAPTER_BONDED_DEVICES: 8,
  ADAPTER_DISCOVERY_TIMEOUT: 9,
  REMOTE_FRIENDLY_NAME: 10,
  REMOTE_RSSI: 11,
  REMOTE_VERSION_INFO: 12,
  LOCAL_LE_FEATURES: 13,
  REMOTE_DEVICE_TIMESTAMP: 14,
};

// Enum: BluetoothScanMode
arc.mojom.BluetoothScanMode = {
  NONE: 0,
  CONNECTABLE: 1,
  CONNECTABLE_DISCOVERABLE: 2,
};

// Enum: BluetoothDeviceType
arc.mojom.BluetoothDeviceType = {
  BREDR: 0,
  BLE: 1,
  DUAL: 2,
};

// Enum: BluetoothBondState
arc.mojom.BluetoothBondState = {
  NONE: 0,
  BONDING: 1,
  BONDED: 2,
};

// Enum: BluetoothGattStatus
arc.mojom.BluetoothGattStatus = {
  GATT_SUCCESS: 0,
  GATT_READ_NOT_PERMITTED: 1,
  GATT_WRITE_NOT_PERMITTED: 2,
  GATT_INSUFFICIENT_AUTHENTICATION: 3,
  GATT_REQUEST_NOT_SUPPORTED: 4,
  GATT_INVALID_OFFSET: 5,
  GATT_INVALID_ATTRIBUTE_LENGTH: 6,
  GATT_INSUFFICIENT_ENCRYPTION: 7,
  GATT_CONNECTION_CONGESTED: 8,
  GATT_FAILURE: 9,
};

// Enum: BluetoothAdvertisementType
arc.mojom.BluetoothAdvertisementType = {
  ADV_TYPE_CONNECTABLE: 0,
  ADV_TYPE_SCANNABLE: 1,
  ADV_TYPE_NON_CONNECTABLE: 2,
};

// Enum: BluetoothAdvertisingDataType
arc.mojom.BluetoothAdvertisingDataType = {
  DATA_TYPE_FLAGS: 0,
  DATA_TYPE_SERVICE_UUIDS_16_BIT_COMPLETE: 1,
  DATA_TYPE_SERVICE_UUIDS_128_BIT_COMPLETE: 2,
  DATA_TYPE_LOCAL_NAME_COMPLETE: 3,
  DATA_TYPE_TX_POWER_LEVEL: 4,
  DATA_TYPE_SERVICE_DATA: 5,
  DATA_TYPE_MANUFACTURER_SPECIFIC_DATA: 6,
};

// Enum: BluetoothGattDBAttributeType
arc.mojom.BluetoothGattDBAttributeType = {
  BTGATT_DB_PRIMARY_SERVICE: 0,
  BTGATT_DB_SECONDARY_SERVICE: 1,
  BTGATT_DB_INCLUDED_SERVICE: 2,
  BTGATT_DB_CHARACTERISTIC: 3,
  BTGATT_DB_DESCRIPTOR: 4,
};

// Enum: BluetoothSdpAttributeType
arc.mojom.BluetoothSdpAttributeType = {
  NULLTYPE: 0,
  UINT: 1,
  INT: 2,
  UUID: 3,
  STRING: 4,
  BOOL: 5,
  SEQUENCE: 6,
  URL: 7,
};

// Enum: BluetoothSocketType
arc.mojom.BluetoothSocketType = {
  TYPE_RFCOMM: 0,
  TYPE_L2CAP_LE: 1,
};

// Struct: BluetoothAddress
arc.mojom.BluetoothAddressSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothAddress',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothUUID
arc.mojom.BluetoothUUIDSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothUUID',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothServiceRecord
arc.mojom.BluetoothServiceRecordSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothServiceRecord',
      packedSize: 32,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'channel', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothLocalLEFeatures
arc.mojom.BluetoothLocalLEFeaturesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothLocalLEFeatures',
      packedSize: 32,
      fields: [
        { name: 'version_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'scan_result_storage_size', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'total_trackable_advertisers', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'local_privacy_enabled', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'max_adv_instance', packedOffset: 7, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'rpa_offload_supported', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'max_irk_list_size', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'max_adv_filter_supported', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'activity_energy_info_supported', packedOffset: 11, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'extended_scan_support', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'debug_logging_supported', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothRemoteVersion
arc.mojom.BluetoothRemoteVersionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothRemoteVersion',
      packedSize: 24,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sub_ver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'manufacturer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothGattID
arc.mojom.BluetoothGattIDSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothGattID',
      packedSize: 24,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'deprecated_inst_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothGattServiceID
arc.mojom.BluetoothGattServiceIDSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothGattServiceID',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_primary', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothGattValue
arc.mojom.BluetoothGattValueSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothGattValue',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothServiceData
arc.mojom.BluetoothServiceDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothServiceData',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'uuid_16bit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothAdvertisement
arc.mojom.BluetoothAdvertisementSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothAdvertisement',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'include_tx_power', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothGattDBElement
arc.mojom.BluetoothGattDBElementSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothGattDBElement',
      packedSize: 32,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'attribute_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'start_handle', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'end_handle', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'deprecated_id', packedOffset: 22, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'properties', packedOffset: 23, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothSdpAttribute
arc.mojom.BluetoothSdpAttributeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothSdpAttribute',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sequence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'type_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothSdpRecord
arc.mojom.BluetoothSdpRecordSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothSdpRecord',
      packedSize: 16,
      fields: [
        { name: 'attrs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothCreateSdpRecordResult
arc.mojom.BluetoothCreateSdpRecordResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothCreateSdpRecordResult',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothRfcommConnection
arc.mojom.BluetoothRfcommConnectionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothRfcommConnection',
      packedSize: 24,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false },
        { name: 'channel', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothSocketFlags
arc.mojom.BluetoothSocketFlagsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothSocketFlags',
      packedSize: 16,
      fields: [
        { name: 'encrypt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'auth', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'auth_mitm', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'auth_16_digit', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BluetoothSocketConnection
arc.mojom.BluetoothSocketConnectionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothSocketConnection',
      packedSize: 24,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false },
        { name: 'port', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: RfcommListeningSocketClient
arc.mojom.RfcommListeningSocketClient = {};

arc.mojom.RfcommListeningSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.RfcommListeningSocketClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.RfcommListeningSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.RfcommListeningSocketClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.RfcommListeningSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.RfcommListeningSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.RfcommListeningSocketClient.getRemote = function() {
  let remote = new arc.mojom.RfcommListeningSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.RfcommListeningSocketClient',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.RfcommListeningSocketClientPtr = arc.mojom.RfcommListeningSocketClientRemote;
arc.mojom.RfcommListeningSocketClientRequest = arc.mojom.RfcommListeningSocketClientPendingReceiver;


// Interface: RfcommConnectingSocketClient
arc.mojom.RfcommConnectingSocketClient = {};

arc.mojom.RfcommConnectingSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.RfcommConnectingSocketClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.RfcommConnectingSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.RfcommConnectingSocketClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.RfcommConnectingSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.RfcommConnectingSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.RfcommConnectingSocketClient.getRemote = function() {
  let remote = new arc.mojom.RfcommConnectingSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.RfcommConnectingSocketClient',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.RfcommConnectingSocketClientPtr = arc.mojom.RfcommConnectingSocketClientRemote;
arc.mojom.RfcommConnectingSocketClientRequest = arc.mojom.RfcommConnectingSocketClientPendingReceiver;


// Interface: BluetoothListenSocketClient
arc.mojom.BluetoothListenSocketClient = {};

arc.mojom.BluetoothListenSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BluetoothListenSocketClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BluetoothListenSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BluetoothListenSocketClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.BluetoothListenSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BluetoothListenSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.BluetoothListenSocketClient.getRemote = function() {
  let remote = new arc.mojom.BluetoothListenSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BluetoothListenSocketClient',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.BluetoothListenSocketClientPtr = arc.mojom.BluetoothListenSocketClientRemote;
arc.mojom.BluetoothListenSocketClientRequest = arc.mojom.BluetoothListenSocketClientPendingReceiver;


// Interface: BluetoothConnectSocketClient
arc.mojom.BluetoothConnectSocketClient = {};

arc.mojom.BluetoothConnectSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BluetoothConnectSocketClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BluetoothConnectSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BluetoothConnectSocketClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.BluetoothConnectSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BluetoothConnectSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.BluetoothConnectSocketClient.getRemote = function() {
  let remote = new arc.mojom.BluetoothConnectSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BluetoothConnectSocketClient',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.BluetoothConnectSocketClientPtr = arc.mojom.BluetoothConnectSocketClientRemote;
arc.mojom.BluetoothConnectSocketClientRequest = arc.mojom.BluetoothConnectSocketClientPendingReceiver;


// Interface: BluetoothHost
arc.mojom.BluetoothHost = {};

arc.mojom.BluetoothHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BluetoothHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BluetoothHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BluetoothHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.BluetoothHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BluetoothHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.BluetoothHost.getRemote = function() {
  let remote = new arc.mojom.BluetoothHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BluetoothHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.BluetoothHostPtr = arc.mojom.BluetoothHostRemote;
arc.mojom.BluetoothHostRequest = arc.mojom.BluetoothHostPendingReceiver;


// Interface: BluetoothInstance
arc.mojom.BluetoothInstance = {};

arc.mojom.BluetoothInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BluetoothInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BluetoothInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BluetoothInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.BluetoothInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BluetoothInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.BluetoothInstance.getRemote = function() {
  let remote = new arc.mojom.BluetoothInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BluetoothInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.BluetoothInstancePtr = arc.mojom.BluetoothInstanceRemote;
arc.mojom.BluetoothInstanceRequest = arc.mojom.BluetoothInstancePendingReceiver;

