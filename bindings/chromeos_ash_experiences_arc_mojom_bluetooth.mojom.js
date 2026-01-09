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
arc.mojom.BluetoothAddress = class {
  constructor(values = {}) {
    this.address = values.address !== undefined ? values.address : 0;
  }
};

// Struct: BluetoothUUID
arc.mojom.BluetoothUUID = class {
  constructor(values = {}) {
    this.uuid = values.uuid !== undefined ? values.uuid : 0;
  }
};

// Struct: BluetoothServiceRecord
arc.mojom.BluetoothServiceRecord = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : 0;
  }
};

// Struct: BluetoothLocalLEFeatures
arc.mojom.BluetoothLocalLEFeatures = class {
  constructor(values = {}) {
    this.debug_logging_supported = values.debug_logging_supported !== undefined ? values.debug_logging_supported : 0;
  }
};

// Struct: BluetoothRemoteVersion
arc.mojom.BluetoothRemoteVersion = class {
  constructor(values = {}) {
    this.manufacturer = values.manufacturer !== undefined ? values.manufacturer : 0;
  }
};

// Struct: BluetoothGattID
arc.mojom.BluetoothGattID = class {
  constructor(values = {}) {
    this.instance_id = values.instance_id !== undefined ? values.instance_id : 0;
  }
};

// Struct: BluetoothGattServiceID
arc.mojom.BluetoothGattServiceID = class {
  constructor(values = {}) {
    this.is_primary = values.is_primary !== undefined ? values.is_primary : 0;
  }
};

// Struct: BluetoothGattValue
arc.mojom.BluetoothGattValue = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: BluetoothServiceData
arc.mojom.BluetoothServiceData = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: BluetoothAdvertisement
arc.mojom.BluetoothAdvertisement = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : false;
  }
};

// Struct: BluetoothGattDBElement
arc.mojom.BluetoothGattDBElement = class {
  constructor(values = {}) {
    this.|BTGATT_DB_PRIMARY_SERVICE| = values.|BTGATT_DB_PRIMARY_SERVICE| !== undefined ? values.|BTGATT_DB_PRIMARY_SERVICE| : 0;
    this.|BTGATT_DB_SECONDARY_SERVICE| = values.|BTGATT_DB_SECONDARY_SERVICE| !== undefined ? values.|BTGATT_DB_SECONDARY_SERVICE| : null;
    this.|BTGATT_DB_CHARACTERISTIC| = values.|BTGATT_DB_CHARACTERISTIC| !== undefined ? values.|BTGATT_DB_CHARACTERISTIC| : 0;
    this.element_id = values.element_id !== undefined ? values.element_id : 0;
  }
};

// Struct: BluetoothSdpAttribute
arc.mojom.BluetoothSdpAttribute = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: BluetoothSdpRecord
arc.mojom.BluetoothSdpRecord = class {
  constructor(values = {}) {
    this.attrs = values.attrs !== undefined ? values.attrs : 0;
  }
};

// Struct: BluetoothCreateSdpRecordResult
arc.mojom.BluetoothCreateSdpRecordResult = class {
  constructor(values = {}) {
    this.service_handle = values.service_handle !== undefined ? values.service_handle : 0;
  }
};

// Struct: BluetoothRfcommConnection
arc.mojom.BluetoothRfcommConnection = class {
  constructor(values = {}) {
    this.channel = values.channel !== undefined ? values.channel : 0;
  }
};

// Struct: BluetoothSocketFlags
arc.mojom.BluetoothSocketFlags = class {
  constructor(values = {}) {
    this.auth_16_digit = values.auth_16_digit !== undefined ? values.auth_16_digit : false;
  }
};

// Struct: BluetoothSocketConnection
arc.mojom.BluetoothSocketConnection = class {
  constructor(values = {}) {
    this.port = values.port !== undefined ? values.port : 0;
  }
};

// Interface: RfcommListeningSocketClient
arc.mojom.RfcommListeningSocketClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.RfcommListeningSocketClient';
  }

};

arc.mojom.RfcommListeningSocketClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RfcommConnectingSocketClient
arc.mojom.RfcommConnectingSocketClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.RfcommConnectingSocketClient';
  }

};

arc.mojom.RfcommConnectingSocketClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothListenSocketClient
arc.mojom.BluetoothListenSocketClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.BluetoothListenSocketClient';
  }

};

arc.mojom.BluetoothListenSocketClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothConnectSocketClient
arc.mojom.BluetoothConnectSocketClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.BluetoothConnectSocketClient';
  }

};

arc.mojom.BluetoothConnectSocketClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothHost
arc.mojom.BluetoothHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.BluetoothHost';
  }

};

arc.mojom.BluetoothHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothInstance
arc.mojom.BluetoothInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.BluetoothInstance';
  }

};

arc.mojom.BluetoothInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
