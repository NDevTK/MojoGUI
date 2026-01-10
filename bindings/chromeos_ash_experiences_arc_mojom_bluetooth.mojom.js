// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/bluetooth.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


arc.mojom.kUnknownPower = 127;

// Enum: BluetoothAdapterState
arc.mojom.BluetoothAdapterState = {
  OFF: 0,
  ON: 1,
};
arc.mojom.BluetoothAdapterStateSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothDiscoveryState
arc.mojom.BluetoothDiscoveryState = {
  STOPPED: 0,
  STARTED: 1,
};
arc.mojom.BluetoothDiscoveryStateSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothAclState
arc.mojom.BluetoothAclState = {
  CONNECTED: 0,
  DISCONNECTED: 1,
};
arc.mojom.BluetoothAclStateSpec = { $: mojo.internal.Enum() };

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
arc.mojom.BluetoothStatusSpec = { $: mojo.internal.Enum() };

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
arc.mojom.BluetoothPropertyTypeSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothScanMode
arc.mojom.BluetoothScanMode = {
  NONE: 0,
  CONNECTABLE: 1,
  CONNECTABLE_DISCOVERABLE: 2,
};
arc.mojom.BluetoothScanModeSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothDeviceType
arc.mojom.BluetoothDeviceType = {
  BREDR: 0,
  BLE: 1,
  DUAL: 2,
};
arc.mojom.BluetoothDeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothBondState
arc.mojom.BluetoothBondState = {
  NONE: 0,
  BONDING: 1,
  BONDED: 2,
};
arc.mojom.BluetoothBondStateSpec = { $: mojo.internal.Enum() };

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
arc.mojom.BluetoothGattStatusSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothAdvertisementType
arc.mojom.BluetoothAdvertisementType = {
  ADV_TYPE_CONNECTABLE: 0,
  ADV_TYPE_SCANNABLE: 1,
  ADV_TYPE_NON_CONNECTABLE: 2,
};
arc.mojom.BluetoothAdvertisementTypeSpec = { $: mojo.internal.Enum() };

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
arc.mojom.BluetoothAdvertisingDataTypeSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothGattDBAttributeType
arc.mojom.BluetoothGattDBAttributeType = {
  BTGATT_DB_PRIMARY_SERVICE: 0,
  BTGATT_DB_SECONDARY_SERVICE: 1,
  BTGATT_DB_INCLUDED_SERVICE: 2,
  BTGATT_DB_CHARACTERISTIC: 3,
  BTGATT_DB_DESCRIPTOR: 4,
};
arc.mojom.BluetoothGattDBAttributeTypeSpec = { $: mojo.internal.Enum() };

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
arc.mojom.BluetoothSdpAttributeTypeSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothSocketType
arc.mojom.BluetoothSocketType = {
  TYPE_RFCOMM: 0,
  TYPE_L2CAP_LE: 1,
};
arc.mojom.BluetoothSocketTypeSpec = { $: mojo.internal.Enum() };

// Union: BluetoothProperty
arc.mojom.BluetoothPropertySpec = { $: mojo.internal.Union(
    'arc.mojom.BluetoothProperty', {
      'bdname': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'bdaddr': {
        'ordinal': 1,
        'type': arc.mojom.BluetoothAddressSpec,
      }},
      'uuids': {
        'ordinal': 2,
        'type': mojo.internal.Array(arc.mojom.BluetoothUUIDSpec, false),
      }},
      'device_class': {
        'ordinal': 3,
        'type': mojo.internal.Uint32,
      }},
      'device_type': {
        'ordinal': 4,
        'type': arc.mojom.BluetoothDeviceTypeSpec,
      }},
      'service_record': {
        'ordinal': 5,
        'type': arc.mojom.BluetoothServiceRecordSpec,
      }},
      'adapter_scan_mode': {
        'ordinal': 6,
        'type': arc.mojom.BluetoothScanModeSpec,
      }},
      'bonded_devices': {
        'ordinal': 7,
        'type': mojo.internal.Array(arc.mojom.BluetoothAddressSpec, false),
      }},
      'discovery_timeout': {
        'ordinal': 8,
        'type': mojo.internal.Uint32,
      }},
      'remote_friendly_name': {
        'ordinal': 9,
        'type': mojo.internal.String,
      }},
      'remote_rssi': {
        'ordinal': 10,
        'type': mojo.internal.Int32,
      }},
      'remote_version': {
        'ordinal': 11,
        'type': arc.mojom.BluetoothRemoteVersionSpec,
      }},
      'local_le_features': {
        'ordinal': 12,
        'type': arc.mojom.BluetoothLocalLEFeaturesSpec,
      }},
    })
};

// Union: BluetoothAdvertisingData
arc.mojom.BluetoothAdvertisingDataSpec = { $: mojo.internal.Union(
    'arc.mojom.BluetoothAdvertisingData', {
      'flags': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'service_uuids_16': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint16, false),
      }},
      'service_uuids': {
        'ordinal': 2,
        'type': mojo.internal.Array(arc.mojom.BluetoothUUIDSpec, false),
      }},
      'local_name': {
        'ordinal': 3,
        'type': mojo.internal.String,
      }},
      'tx_power_level': {
        'ordinal': 4,
        'type': mojo.internal.Uint8,
      }},
      'service_data': {
        'ordinal': 5,
        'type': arc.mojom.BluetoothServiceDataSpec,
      }},
      'manufacturer_data': {
        'ordinal': 6,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'other_data': {
        'ordinal': 7,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Struct: BluetoothAddress
arc.mojom.BluetoothAddressSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothAddress',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothUUIDSpec, nullable: false, minVersion: 0 },
        { name: 'channel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BluetoothLocalLEFeatures
arc.mojom.BluetoothLocalLEFeaturesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothLocalLEFeatures',
      packedSize: 24,
      fields: [
        { name: 'version_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'local_privacy_enabled', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'max_adv_instance', packedOffset: 3, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'rpa_offload_supported', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'max_irk_list_size', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'max_adv_filter_supported', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'activity_energy_info_supported', packedOffset: 7, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'scan_result_storage_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'total_trackable_advertisers', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'extended_scan_support', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_logging_supported', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sub_ver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothUUIDSpec, nullable: false, minVersion: 0 },
        { name: 'deprecated_inst_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'instance_id', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 19 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 19, packedSize: 24}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
        { name: 'is_primary', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'uuid_16bit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BluetoothAdvertisement
arc.mojom.BluetoothAdvertisementSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothAdvertisement',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAdvertisementTypeSpec, nullable: false, minVersion: 0 },
        { name: 'include_tx_power', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BluetoothAdvertisingDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'deprecated_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothUUIDSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.BluetoothGattDBAttributeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'attribute_handle', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'start_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'end_handle', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'element_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 19 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 19, packedSize: 32}]
    }
  }
};

// Struct: BluetoothSdpAttribute
arc.mojom.BluetoothSdpAttributeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothSdpAttribute',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothSdpAttributeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'type_size', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sequence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BluetoothSdpAttributeSpec, false), nullable: false, minVersion: 0 },
        { name: 'deprecated_json_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'value', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true, minVersion: 14 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 14, packedSize: 48}]
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
        { name: 'attrs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint16, arc.mojom.BluetoothSdpAttributeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothCreateSdpRecordResult
arc.mojom.BluetoothCreateSdpRecordResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothCreateSdpRecordResult',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothStatusSpec, nullable: false, minVersion: 0 },
        { name: 'service_handle', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'sock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'addr', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'channel', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'encrypt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auth', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auth_mitm', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auth_16_digit', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'sock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'addr', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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

  onAccepted(connection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.RfcommListeningSocketClient_OnAccepted_ParamsSpec,
      null,
      [connection]);
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

// ParamsSpec for OnAccepted
arc.mojom.RfcommListeningSocketClient_OnAccepted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RfcommListeningSocketClient.OnAccepted_Params',
      packedSize: 16,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothRfcommConnectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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

  onConnected(connection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.RfcommConnectingSocketClient_OnConnected_ParamsSpec,
      null,
      [connection]);
  }

  onConnectFailed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnConnected
arc.mojom.RfcommConnectingSocketClient_OnConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RfcommConnectingSocketClient.OnConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothRfcommConnectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnConnectFailed
arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RfcommConnectingSocketClient.OnConnectFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
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

  onAccepted(connection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.BluetoothListenSocketClient_OnAccepted_ParamsSpec,
      null,
      [connection]);
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

// ParamsSpec for OnAccepted
arc.mojom.BluetoothListenSocketClient_OnAccepted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothListenSocketClient.OnAccepted_Params',
      packedSize: 16,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothSocketConnectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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

  onConnected(connection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.BluetoothConnectSocketClient_OnConnected_ParamsSpec,
      null,
      [connection]);
  }

  onConnectFailed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnConnected
arc.mojom.BluetoothConnectSocketClient_OnConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothConnectSocketClient.OnConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothSocketConnectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnConnectFailed
arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothConnectSocketClient.OnConnectFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
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

  enableAdapter() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.BluetoothHost_EnableAdapter_ParamsSpec,
      arc.mojom.BluetoothHost_EnableAdapter_ResponseParamsSpec,
      []);
  }

  disableAdapter() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec,
      arc.mojom.BluetoothHost_DisableAdapter_ResponseParamsSpec,
      []);
  }

  getAdapterProperty(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec,
      null,
      [type]);
  }

  setAdapterProperty(property) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec,
      null,
      [property]);
  }

  startDiscovery() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.BluetoothHost_StartDiscovery_ParamsSpec,
      null,
      []);
  }

  cancelDiscovery() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.BluetoothHost_CancelDiscovery_ParamsSpec,
      null,
      []);
  }

  createBond(addr, transport) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.BluetoothHost_CreateBond_ParamsSpec,
      null,
      [addr, transport]);
  }

  removeBond(addr) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.BluetoothHost_RemoveBond_ParamsSpec,
      null,
      [addr]);
  }

  cancelBond(addr) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.BluetoothHost_CancelBond_ParamsSpec,
      null,
      [addr]);
  }

  getConnectionState(addr) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec,
      arc.mojom.BluetoothHost_GetConnectionState_ResponseParamsSpec,
      [addr]);
  }

  startLEScan() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.BluetoothHost_StartLEScan_ParamsSpec,
      null,
      []);
  }

  stopLEScan() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.BluetoothHost_StopLEScan_ParamsSpec,
      null,
      []);
  }

  connectLEDevice(remote_addr) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.BluetoothHost_ConnectLEDevice_ParamsSpec,
      null,
      [remote_addr]);
  }

  disconnectLEDevice(remote_addr) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec,
      null,
      [remote_addr]);
  }

  searchService(remote_addr) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.BluetoothHost_SearchService_ParamsSpec,
      null,
      [remote_addr]);
  }

  getGattDB(remote_addr) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.BluetoothHost_GetGattDB_ParamsSpec,
      null,
      [remote_addr]);
  }

  readGattCharacteristic(remote_addr, service_id, char_id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec,
      arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParamsSpec,
      [remote_addr, service_id, char_id]);
  }

  writeGattCharacteristic(remote_addr, service_id, char_id, value, prepare) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec,
      arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParamsSpec,
      [remote_addr, service_id, char_id, value, prepare]);
  }

  readGattDescriptor(remote_addr, service_id, char_id, desc_id) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec,
      arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParamsSpec,
      [remote_addr, service_id, char_id, desc_id]);
  }

  writeGattDescriptor(remote_addr, service_id, char_id, desc_id, value) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec,
      arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParamsSpec,
      [remote_addr, service_id, char_id, desc_id, value]);
  }

  executeWrite(remote_addr, execute) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec,
      arc.mojom.BluetoothHost_ExecuteWrite_ResponseParamsSpec,
      [remote_addr, execute]);
  }

  registerForGattNotification(remote_addr, service_id, char_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec,
      arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParamsSpec,
      [remote_addr, service_id, char_id]);
  }

  deregisterForGattNotification(remote_addr, service_id, char_id) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec,
      arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParamsSpec,
      [remote_addr, service_id, char_id]);
  }

  readRemoteRssi(remote_addr) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec,
      arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParamsSpec,
      [remote_addr]);
  }

  addService(service_id, num_handles) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.BluetoothHost_AddService_ParamsSpec,
      arc.mojom.BluetoothHost_AddService_ResponseParamsSpec,
      [service_id, num_handles]);
  }

  addCharacteristic(service_handle, uuid, properties, permissions) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      arc.mojom.BluetoothHost_AddCharacteristic_ParamsSpec,
      arc.mojom.BluetoothHost_AddCharacteristic_ResponseParamsSpec,
      [service_handle, uuid, properties, permissions]);
  }

  addDescriptor(service_handle, uuid, permissions) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec,
      arc.mojom.BluetoothHost_AddDescriptor_ResponseParamsSpec,
      [service_handle, uuid, permissions]);
  }

  startService(service_handle) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.BluetoothHost_StartService_ParamsSpec,
      arc.mojom.BluetoothHost_StartService_ResponseParamsSpec,
      [service_handle]);
  }

  stopService(service_handle) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.BluetoothHost_StopService_ParamsSpec,
      arc.mojom.BluetoothHost_StopService_ResponseParamsSpec,
      [service_handle]);
  }

  deleteService(service_handle) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.BluetoothHost_DeleteService_ParamsSpec,
      arc.mojom.BluetoothHost_DeleteService_ResponseParamsSpec,
      [service_handle]);
  }

  sendIndication(attribute_handle, address, confirm, value) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.BluetoothHost_SendIndication_ParamsSpec,
      arc.mojom.BluetoothHost_SendIndication_ResponseParamsSpec,
      [attribute_handle, address, confirm, value]);
  }

  getSdpRecords(remote_addr, target_uuid) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec,
      null,
      [remote_addr, target_uuid]);
  }

  createSdpRecord(record) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec,
      arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParamsSpec,
      [record]);
  }

  removeSdpRecord(service_handle) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec,
      arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParamsSpec,
      [service_handle]);
  }

  reserveAdvertisementHandle() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec,
      arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParamsSpec,
      []);
  }

  enableAdvertisement(adv_handle, adv) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec,
      arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParamsSpec,
      [adv_handle, adv]);
  }

  releaseAdvertisementHandle(adv_handle) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec,
      arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParamsSpec,
      [adv_handle]);
  }

  disableAdvertisement(adv_handle) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec,
      arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParamsSpec,
      [adv_handle]);
  }

  bluetoothSocketListen(sock_type, sock_flags, port) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec,
      arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParamsSpec,
      [sock_type, sock_flags, port]);
  }

  bluetoothSocketConnect(sock_type, sock_flags, remote_addr, remote_port) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec,
      arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParamsSpec,
      [sock_type, sock_flags, remote_addr, remote_port]);
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

// ParamsSpec for EnableAdapter
arc.mojom.BluetoothHost_EnableAdapter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.EnableAdapter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.BluetoothHost_EnableAdapter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.EnableAdapter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAdapterStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableAdapter
arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DisableAdapter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.BluetoothHost_DisableAdapter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DisableAdapter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAdapterStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAdapterProperty
arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.GetAdapterProperty_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothPropertyTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAdapterProperty
arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.SetAdapterProperty_Params',
      packedSize: 24,
      fields: [
        { name: 'property', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothPropertySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartDiscovery
arc.mojom.BluetoothHost_StartDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.StartDiscovery_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CancelDiscovery
arc.mojom.BluetoothHost_CancelDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.CancelDiscovery_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreateBond
arc.mojom.BluetoothHost_CreateBond_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.CreateBond_Params',
      packedSize: 24,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'transport', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveBond
arc.mojom.BluetoothHost_RemoveBond_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.RemoveBond_Params',
      packedSize: 16,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelBond
arc.mojom.BluetoothHost_CancelBond_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.CancelBond_Params',
      packedSize: 16,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetConnectionState
arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.GetConnectionState_Params',
      packedSize: 16,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_GetConnectionState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.GetConnectionState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'connected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartLEScan
arc.mojom.BluetoothHost_StartLEScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.StartLEScan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StopLEScan
arc.mojom.BluetoothHost_StopLEScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.StopLEScan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ConnectLEDevice
arc.mojom.BluetoothHost_ConnectLEDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ConnectLEDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisconnectLEDevice
arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DisconnectLEDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SearchService
arc.mojom.BluetoothHost_SearchService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.SearchService_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetGattDB
arc.mojom.BluetoothHost_GetGattDB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.GetGattDB_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadGattCharacteristic
arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReadGattCharacteristic_Params',
      packedSize: 32,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'char_id', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReadGattCharacteristic_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteGattCharacteristic
arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.WriteGattCharacteristic_Params',
      packedSize: 48,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'char_id', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.BluetoothGattValueSpec, nullable: false, minVersion: 0 },
        { name: 'prepare', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 11 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 11, packedSize: 48}]
    }
  }
};

arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.WriteGattCharacteristic_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadGattDescriptor
arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReadGattDescriptor_Params',
      packedSize: 40,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'char_id', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
        { name: 'desc_id', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReadGattDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteGattDescriptor
arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.WriteGattDescriptor_Params',
      packedSize: 48,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'char_id', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
        { name: 'desc_id', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.BluetoothGattValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.WriteGattDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExecuteWrite
arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ExecuteWrite_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'execute', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.BluetoothHost_ExecuteWrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ExecuteWrite_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterForGattNotification
arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.RegisterForGattNotification_Params',
      packedSize: 32,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'char_id', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.RegisterForGattNotification_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeregisterForGattNotification
arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DeregisterForGattNotification_Params',
      packedSize: 32,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'char_id', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DeregisterForGattNotification_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadRemoteRssi
arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReadRemoteRssi_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReadRemoteRssi_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rssi', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddService
arc.mojom.BluetoothHost_AddService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.AddService_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'num_handles', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.BluetoothHost_AddService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.AddService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'service_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddCharacteristic
arc.mojom.BluetoothHost_AddCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.AddCharacteristic_Params',
      packedSize: 32,
      fields: [
        { name: 'service_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothUUIDSpec, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'permissions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.BluetoothHost_AddCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.AddCharacteristic_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'characteristic_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddDescriptor
arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.AddDescriptor_Params',
      packedSize: 24,
      fields: [
        { name: 'service_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothUUIDSpec, nullable: false, minVersion: 0 },
        { name: 'permissions', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.BluetoothHost_AddDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.AddDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'descriptor_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartService
arc.mojom.BluetoothHost_StartService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.StartService_Params',
      packedSize: 16,
      fields: [
        { name: 'service_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_StartService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.StartService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopService
arc.mojom.BluetoothHost_StopService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.StopService_Params',
      packedSize: 16,
      fields: [
        { name: 'service_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_StopService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.StopService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteService
arc.mojom.BluetoothHost_DeleteService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DeleteService_Params',
      packedSize: 16,
      fields: [
        { name: 'service_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_DeleteService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DeleteService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendIndication
arc.mojom.BluetoothHost_SendIndication_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.SendIndication_Params',
      packedSize: 32,
      fields: [
        { name: 'attribute_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'confirm', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.BluetoothHost_SendIndication_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.SendIndication_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSdpRecords
arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.GetSdpRecords_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'target_uuid', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothUUIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateSdpRecord
arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.CreateSdpRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'record', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothSdpRecordSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.CreateSdpRecord_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothCreateSdpRecordResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveSdpRecord
arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.RemoveSdpRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'service_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.RemoveSdpRecord_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReserveAdvertisementHandle
arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReserveAdvertisementHandle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReserveAdvertisementHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
        { name: 'adv_handle', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableAdvertisement
arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.EnableAdvertisement_Params',
      packedSize: 24,
      fields: [
        { name: 'adv_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'adv', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothAdvertisementSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.EnableAdvertisement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReleaseAdvertisementHandle
arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReleaseAdvertisementHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'adv_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.ReleaseAdvertisementHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableAdvertisement
arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DisableAdvertisement_Params',
      packedSize: 16,
      fields: [
        { name: 'adv_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.DisableAdvertisement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BluetoothSocketListen
arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.BluetoothSocketListen_Params',
      packedSize: 24,
      fields: [
        { name: 'sock_type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothSocketTypeSpec, nullable: false, minVersion: 0 },
        { name: 'sock_flags', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothSocketFlagsSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.BluetoothSocketListen_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothStatusSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BluetoothSocketConnect
arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.BluetoothSocketConnect_Params',
      packedSize: 32,
      fields: [
        { name: 'sock_type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothSocketTypeSpec, nullable: false, minVersion: 0 },
        { name: 'sock_flags', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothSocketFlagsSpec, nullable: false, minVersion: 0 },
        { name: 'remote_addr', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'remote_port', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothHost.BluetoothSocketConnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothStatusSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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

  init(host_remote) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.BluetoothInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  onAdapterProperties(status, properties) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec,
      null,
      [status, properties]);
  }

  onDeviceFound(properties) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec,
      null,
      [properties]);
  }

  onDevicePropertiesChanged(remote_addr, properties) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec,
      null,
      [remote_addr, properties]);
  }

  onDiscoveryStateChanged(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec,
      null,
      [state]);
  }

  onBondStateChanged(status, remote_addr, state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec,
      null,
      [status, remote_addr, state]);
  }

  onConnectionStateChanged(remote_addr, device_type, connected) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec,
      null,
      [remote_addr, device_type, connected]);
  }

  onLEDeviceFound(addr, rssi, eir) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec,
      null,
      [addr, rssi, eir]);
  }

  onLEConnectionStateChange(remote_addr, connected) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec,
      null,
      [remote_addr, connected]);
  }

  onLEDeviceAddressChange(old_addr, new_addr) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec,
      null,
      [old_addr, new_addr]);
  }

  onSearchComplete(remote_addr, status) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec,
      null,
      [remote_addr, status]);
  }

  onGetGattDB(remote_addr, db) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec,
      null,
      [remote_addr, db]);
  }

  onGattNotify(remote_addr, service_id, char_id, is_notify, value) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec,
      null,
      [remote_addr, service_id, char_id, is_notify, value]);
  }

  onServiceChanged(remote_addr) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec,
      null,
      [remote_addr]);
  }

  requestGattRead(address, attribute_handle, offset, is_long, attribute_type) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec,
      arc.mojom.BluetoothInstance_RequestGattRead_ResponseParamsSpec,
      [address, attribute_handle, offset, is_long, attribute_type]);
  }

  requestGattWrite(address, attribute_handle, offset, value, attribute_type, is_prepare) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec,
      arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParamsSpec,
      [address, attribute_handle, offset, value, attribute_type, is_prepare]);
  }

  requestGattExecuteWrite(address, execute) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec,
      arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParamsSpec,
      [address, execute]);
  }

  onMTUReceived(remote_addr, mtu) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec,
      null,
      [remote_addr, mtu]);
  }

  onGetSdpRecords(status, remote_addr, target_uuid, records) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec,
      null,
      [status, remote_addr, target_uuid, records]);
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

// ParamsSpec for Init
arc.mojom.BluetoothInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAdapterProperties
arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnAdapterProperties_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothStatusSpec, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BluetoothPropertySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnDeviceFound
arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnDeviceFound_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BluetoothPropertySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDevicePropertiesChanged
arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnDevicePropertiesChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BluetoothPropertySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnDiscoveryStateChanged
arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnDiscoveryStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothDiscoveryStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBondStateChanged
arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnBondStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothStatusSpec, nullable: false, minVersion: 0 },
        { name: 'remote_addr', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.BluetoothBondStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnConnectionStateChanged
arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnConnectionStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'device_type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothDeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'connected', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnLEDeviceFound
arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnLEDeviceFound_Params',
      packedSize: 32,
      fields: [
        { name: 'addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'rssi', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'eir', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnLEConnectionStateChange
arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnLEConnectionStateChange_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'connected', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnLEDeviceAddressChange
arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnLEDeviceAddressChange_Params',
      packedSize: 24,
      fields: [
        { name: 'old_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'new_addr', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnSearchComplete
arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnSearchComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnGetGattDB
arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnGetGattDB_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'db', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BluetoothGattDBElementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnGattNotify
arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnGattNotify_Params',
      packedSize: 48,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothGattServiceIDSpec, nullable: false, minVersion: 0 },
        { name: 'char_id', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothGattIDSpec, nullable: false, minVersion: 0 },
        { name: 'is_notify', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for OnServiceChanged
arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnServiceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestGattRead
arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.RequestGattRead_Params',
      packedSize: 32,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'attribute_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_long', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'attribute_type', packedOffset: 20, packedBitOffset: 0, type: arc.mojom.BluetoothGattDBAttributeTypeSpec, nullable: false, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 9, packedSize: 32}]
    }
  }
};

arc.mojom.BluetoothInstance_RequestGattRead_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.RequestGattRead_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestGattWrite
arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.RequestGattWrite_Params',
      packedSize: 40,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'attribute_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'attribute_type', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.BluetoothGattDBAttributeTypeSpec, nullable: false, minVersion: 9 },
        { name: 'is_prepare', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 9, packedSize: 40}, {version: 12, packedSize: 40}]
    }
  }
};

arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.RequestGattWrite_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestGattExecuteWrite
arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.RequestGattExecuteWrite_Params',
      packedSize: 24,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'execute', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.RequestGattExecuteWrite_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothGattStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMTUReceived
arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnMTUReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'mtu', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnGetSdpRecords
arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BluetoothInstance.OnGetSdpRecords_Params',
      packedSize: 40,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BluetoothStatusSpec, nullable: false, minVersion: 0 },
        { name: 'remote_addr', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.BluetoothAddressSpec, nullable: false, minVersion: 0 },
        { name: 'target_uuid', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.BluetoothUUIDSpec, nullable: false, minVersion: 0 },
        { name: 'records', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.BluetoothSdpRecordSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
arc.mojom.BluetoothInstancePtr = arc.mojom.BluetoothInstanceRemote;
arc.mojom.BluetoothInstanceRequest = arc.mojom.BluetoothInstancePendingReceiver;

