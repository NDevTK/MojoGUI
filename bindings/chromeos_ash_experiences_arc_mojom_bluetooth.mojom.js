// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/bluetooth.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.BluetoothAdapterStateSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothDiscoveryStateSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothAclStateSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothPropertyTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothScanModeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothDeviceTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothBondStateSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothGattStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothAdvertisementTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothAdvertisingDataTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothGattDBAttributeTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothSdpAttributeTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothSocketTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.BluetoothPropertySpec = { $: {} };
arc.mojom.BluetoothAdvertisingDataSpec = { $: {} };
arc.mojom.BluetoothAddressSpec = { $: {} };
arc.mojom.BluetoothUUIDSpec = { $: {} };
arc.mojom.BluetoothServiceRecordSpec = { $: {} };
arc.mojom.BluetoothLocalLEFeaturesSpec = { $: {} };
arc.mojom.BluetoothRemoteVersionSpec = { $: {} };
arc.mojom.BluetoothGattIDSpec = { $: {} };
arc.mojom.BluetoothGattServiceIDSpec = { $: {} };
arc.mojom.BluetoothGattValueSpec = { $: {} };
arc.mojom.BluetoothServiceDataSpec = { $: {} };
arc.mojom.BluetoothAdvertisementSpec = { $: {} };
arc.mojom.BluetoothGattDBElementSpec = { $: {} };
arc.mojom.BluetoothSdpAttributeSpec = { $: {} };
arc.mojom.BluetoothSdpRecordSpec = { $: {} };
arc.mojom.BluetoothCreateSdpRecordResultSpec = { $: {} };
arc.mojom.BluetoothRfcommConnectionSpec = { $: {} };
arc.mojom.BluetoothSocketFlagsSpec = { $: {} };
arc.mojom.BluetoothSocketConnectionSpec = { $: {} };
arc.mojom.RfcommListeningSocketClient = {};
arc.mojom.RfcommListeningSocketClient.$interfaceName = 'arc.mojom.RfcommListeningSocketClient';
arc.mojom.RfcommListeningSocketClient_OnAccepted_ParamsSpec = { $: {} };
arc.mojom.RfcommConnectingSocketClient = {};
arc.mojom.RfcommConnectingSocketClient.$interfaceName = 'arc.mojom.RfcommConnectingSocketClient';
arc.mojom.RfcommConnectingSocketClient_OnConnected_ParamsSpec = { $: {} };
arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_ParamsSpec = { $: {} };
arc.mojom.BluetoothListenSocketClient = {};
arc.mojom.BluetoothListenSocketClient.$interfaceName = 'arc.mojom.BluetoothListenSocketClient';
arc.mojom.BluetoothListenSocketClient_OnAccepted_ParamsSpec = { $: {} };
arc.mojom.BluetoothConnectSocketClient = {};
arc.mojom.BluetoothConnectSocketClient.$interfaceName = 'arc.mojom.BluetoothConnectSocketClient';
arc.mojom.BluetoothConnectSocketClient_OnConnected_ParamsSpec = { $: {} };
arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost = {};
arc.mojom.BluetoothHost.$interfaceName = 'arc.mojom.BluetoothHost';
arc.mojom.BluetoothHost_EnableAdapter_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_EnableAdapter_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DisableAdapter_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_StartDiscovery_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_CancelDiscovery_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_CreateBond_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_RemoveBond_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_CancelBond_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_GetConnectionState_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_StartLEScan_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_StopLEScan_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ConnectLEDevice_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_SearchService_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_GetGattDB_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ExecuteWrite_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_AddService_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_AddService_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_AddCharacteristic_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_AddCharacteristic_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_AddDescriptor_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_StartService_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_StartService_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_StopService_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_StopService_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DeleteService_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DeleteService_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_SendIndication_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_SendIndication_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec = { $: {} };
arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothInstance = {};
arc.mojom.BluetoothInstance.$interfaceName = 'arc.mojom.BluetoothInstance';
arc.mojom.BluetoothInstance_Init_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_RequestGattRead_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec = { $: {} };
arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec = { $: {} };

arc.mojom.kUnknownPower = 127;

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
  REMOTE_DEVICE_TIMESTAMP: 255,
};

// Enum: BluetoothScanMode
arc.mojom.BluetoothScanMode = {
  NONE: 0,
  CONNECTABLE: 1,
  CONNECTABLE_DISCOVERABLE: 2,
};

// Enum: BluetoothDeviceType
arc.mojom.BluetoothDeviceType = {
  BREDR: 1,
  BLE: 2,
  DUAL: 3,
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
  GATT_READ_NOT_PERMITTED: 2,
  GATT_WRITE_NOT_PERMITTED: 3,
  GATT_INSUFFICIENT_AUTHENTICATION: 5,
  GATT_REQUEST_NOT_SUPPORTED: 6,
  GATT_INVALID_OFFSET: 7,
  GATT_INVALID_ATTRIBUTE_LENGTH: 13,
  GATT_INSUFFICIENT_ENCRYPTION: 15,
  GATT_CONNECTION_CONGESTED: 143,
  GATT_FAILURE: 257,
};

// Enum: BluetoothAdvertisementType
arc.mojom.BluetoothAdvertisementType = {
  ADV_TYPE_CONNECTABLE: 0,
  ADV_TYPE_SCANNABLE: 2,
  ADV_TYPE_NON_CONNECTABLE: 3,
};

// Enum: BluetoothAdvertisingDataType
arc.mojom.BluetoothAdvertisingDataType = {
  DATA_TYPE_FLAGS: 1,
  DATA_TYPE_SERVICE_UUIDS_16_BIT_COMPLETE: 3,
  DATA_TYPE_SERVICE_UUIDS_128_BIT_COMPLETE: 7,
  DATA_TYPE_LOCAL_NAME_COMPLETE: 9,
  DATA_TYPE_TX_POWER_LEVEL: 10,
  DATA_TYPE_SERVICE_DATA: 22,
  DATA_TYPE_MANUFACTURER_SPECIFIC_DATA: 255,
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
  TYPE_RFCOMM: 1,
  TYPE_L2CAP_LE: 4,
};

// Union: BluetoothProperty
mojo.internal.Union(
    arc.mojom.BluetoothPropertySpec, 'arc.mojom.BluetoothProperty', {
      'bdname': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'bdaddr': {
        'ordinal': 1,
        'type': arc.mojom.BluetoothAddressSpec,
        'nullable': false,
      },
      'uuids': {
        'ordinal': 2,
        'type': mojo.internal.Array(arc.mojom.BluetoothUUIDSpec, false),
        'nullable': false,
      },
      'device_class': {
        'ordinal': 3,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'device_type': {
        'ordinal': 4,
        'type': arc.mojom.BluetoothDeviceTypeSpec,
        'nullable': false,
      },
      'service_record': {
        'ordinal': 5,
        'type': arc.mojom.BluetoothServiceRecordSpec,
        'nullable': false,
      },
      'adapter_scan_mode': {
        'ordinal': 6,
        'type': arc.mojom.BluetoothScanModeSpec,
        'nullable': false,
      },
      'bonded_devices': {
        'ordinal': 7,
        'type': mojo.internal.Array(arc.mojom.BluetoothAddressSpec, false),
        'nullable': false,
      },
      'discovery_timeout': {
        'ordinal': 8,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'remote_friendly_name': {
        'ordinal': 9,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'remote_rssi': {
        'ordinal': 10,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'remote_version': {
        'ordinal': 11,
        'type': arc.mojom.BluetoothRemoteVersionSpec,
        'nullable': false,
      },
      'local_le_features': {
        'ordinal': 12,
        'type': arc.mojom.BluetoothLocalLEFeaturesSpec,
        'nullable': false,
      },
    });

// Union: BluetoothAdvertisingData
mojo.internal.Union(
    arc.mojom.BluetoothAdvertisingDataSpec, 'arc.mojom.BluetoothAdvertisingData', {
      'flags': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'service_uuids_16': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint16, false),
        'nullable': false,
      },
      'service_uuids': {
        'ordinal': 2,
        'type': mojo.internal.Array(arc.mojom.BluetoothUUIDSpec, false),
        'nullable': false,
      },
      'local_name': {
        'ordinal': 3,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'tx_power_level': {
        'ordinal': 4,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'service_data': {
        'ordinal': 5,
        'type': arc.mojom.BluetoothServiceDataSpec,
        'nullable': false,
      },
      'manufacturer_data': {
        'ordinal': 6,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'other_data': {
        'ordinal': 7,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: BluetoothAddress
mojo.internal.Struct(
    arc.mojom.BluetoothAddressSpec, 'arc.mojom.BluetoothAddress', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothUUID
mojo.internal.Struct(
    arc.mojom.BluetoothUUIDSpec, 'arc.mojom.BluetoothUUID', [
      mojo.internal.StructField('uuid', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothServiceRecord
mojo.internal.Struct(
    arc.mojom.BluetoothServiceRecordSpec, 'arc.mojom.BluetoothServiceRecord', [
      mojo.internal.StructField('uuid', 0, 0, arc.mojom.BluetoothUUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BluetoothLocalLEFeatures
mojo.internal.Struct(
    arc.mojom.BluetoothLocalLEFeaturesSpec, 'arc.mojom.BluetoothLocalLEFeatures', [
      mojo.internal.StructField('version_supported', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('local_privacy_enabled', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('max_adv_instance', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('rpa_offload_supported', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('max_irk_list_size', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('max_adv_filter_supported', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('activity_energy_info_supported', 7, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('scan_result_storage_size', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('total_trackable_advertisers', 10, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('extended_scan_support', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('debug_logging_supported', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothRemoteVersion
mojo.internal.Struct(
    arc.mojom.BluetoothRemoteVersionSpec, 'arc.mojom.BluetoothRemoteVersion', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sub_ver', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('manufacturer', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothGattID
mojo.internal.Struct(
    arc.mojom.BluetoothGattIDSpec, 'arc.mojom.BluetoothGattID', [
      mojo.internal.StructField('uuid', 0, 0, arc.mojom.BluetoothUUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_inst_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('instance_id', 10, 0, mojo.internal.Uint16, 0, false, 19, undefined),
    ],
    [[0, 24], [19, 24]]);

// Struct: BluetoothGattServiceID
mojo.internal.Struct(
    arc.mojom.BluetoothGattServiceIDSpec, 'arc.mojom.BluetoothGattServiceID', [
      mojo.internal.StructField('id', 0, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_primary', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothGattValue
mojo.internal.Struct(
    arc.mojom.BluetoothGattValueSpec, 'arc.mojom.BluetoothGattValue', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothServiceData
mojo.internal.Struct(
    arc.mojom.BluetoothServiceDataSpec, 'arc.mojom.BluetoothServiceData', [
      mojo.internal.StructField('uuid_16bit', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothAdvertisement
mojo.internal.Struct(
    arc.mojom.BluetoothAdvertisementSpec, 'arc.mojom.BluetoothAdvertisement', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.BluetoothAdvertisementTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('include_tx_power', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(arc.mojom.BluetoothAdvertisingDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothGattDBElement
mojo.internal.Struct(
    arc.mojom.BluetoothGattDBElementSpec, 'arc.mojom.BluetoothGattDBElement', [
      mojo.internal.StructField('deprecated_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, arc.mojom.BluetoothUUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, arc.mojom.BluetoothGattDBAttributeTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('attribute_handle', 20, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('start_handle', 22, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('end_handle', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('properties', 26, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('element_id', 28, 0, mojo.internal.Uint16, 0, false, 19, undefined),
    ],
    [[0, 40], [19, 40]]);

// Struct: BluetoothSdpAttribute
mojo.internal.Struct(
    arc.mojom.BluetoothSdpAttributeSpec, 'arc.mojom.BluetoothSdpAttribute', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.BluetoothSdpAttributeTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('type_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sequence', 8, 0, mojo.internal.Array(arc.mojom.BluetoothSdpAttributeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('deprecated_json_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo_base.mojom.ValueSpec, null, true, 14, undefined),
    ],
    [[0, 32], [14, 48]]);

// Struct: BluetoothSdpRecord
mojo.internal.Struct(
    arc.mojom.BluetoothSdpRecordSpec, 'arc.mojom.BluetoothSdpRecord', [
      mojo.internal.StructField('attrs', 0, 0, mojo.internal.Map(mojo.internal.Uint16, arc.mojom.BluetoothSdpAttributeSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothCreateSdpRecordResult
mojo.internal.Struct(
    arc.mojom.BluetoothCreateSdpRecordResultSpec, 'arc.mojom.BluetoothCreateSdpRecordResult', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_handle', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothRfcommConnection
mojo.internal.Struct(
    arc.mojom.BluetoothRfcommConnectionSpec, 'arc.mojom.BluetoothRfcommConnection', [
      mojo.internal.StructField('sock', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('addr', 8, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BluetoothSocketFlags
mojo.internal.Struct(
    arc.mojom.BluetoothSocketFlagsSpec, 'arc.mojom.BluetoothSocketFlags', [
      mojo.internal.StructField('encrypt', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auth', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auth_mitm', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auth_16_digit', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothSocketConnection
mojo.internal.Struct(
    arc.mojom.BluetoothSocketConnectionSpec, 'arc.mojom.BluetoothSocketConnection', [
      mojo.internal.StructField('sock', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('addr', 8, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: RfcommListeningSocketClient
mojo.internal.Struct(
    arc.mojom.RfcommListeningSocketClient_OnAccepted_ParamsSpec, 'arc.mojom.RfcommListeningSocketClient_OnAccepted_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothRfcommConnectionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

arc.mojom.RfcommListeningSocketClientPtr = arc.mojom.RfcommListeningSocketClientRemote;
arc.mojom.RfcommListeningSocketClientRequest = arc.mojom.RfcommListeningSocketClientPendingReceiver;


// Interface: RfcommConnectingSocketClient
mojo.internal.Struct(
    arc.mojom.RfcommConnectingSocketClient_OnConnected_ParamsSpec, 'arc.mojom.RfcommConnectingSocketClient_OnConnected_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothRfcommConnectionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_ParamsSpec, 'arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_Params', [
    ],
    [[0, 8]]);

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

arc.mojom.RfcommConnectingSocketClientPtr = arc.mojom.RfcommConnectingSocketClientRemote;
arc.mojom.RfcommConnectingSocketClientRequest = arc.mojom.RfcommConnectingSocketClientPendingReceiver;


// Interface: BluetoothListenSocketClient
mojo.internal.Struct(
    arc.mojom.BluetoothListenSocketClient_OnAccepted_ParamsSpec, 'arc.mojom.BluetoothListenSocketClient_OnAccepted_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothSocketConnectionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

arc.mojom.BluetoothListenSocketClientPtr = arc.mojom.BluetoothListenSocketClientRemote;
arc.mojom.BluetoothListenSocketClientRequest = arc.mojom.BluetoothListenSocketClientPendingReceiver;


// Interface: BluetoothConnectSocketClient
mojo.internal.Struct(
    arc.mojom.BluetoothConnectSocketClient_OnConnected_ParamsSpec, 'arc.mojom.BluetoothConnectSocketClient_OnConnected_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothSocketConnectionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_ParamsSpec, 'arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_Params', [
    ],
    [[0, 8]]);

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

arc.mojom.BluetoothConnectSocketClientPtr = arc.mojom.BluetoothConnectSocketClientRemote;
arc.mojom.BluetoothConnectSocketClientRequest = arc.mojom.BluetoothConnectSocketClientPendingReceiver;


// Interface: BluetoothHost
mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdapter_ParamsSpec, 'arc.mojom.BluetoothHost_EnableAdapter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdapter_ResponseParamsSpec, 'arc.mojom.BluetoothHost_EnableAdapter_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BluetoothAdapterStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec, 'arc.mojom.BluetoothHost_DisableAdapter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdapter_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DisableAdapter_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BluetoothAdapterStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec, 'arc.mojom.BluetoothHost_GetAdapterProperty_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.BluetoothPropertyTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec, 'arc.mojom.BluetoothHost_SetAdapterProperty_Params', [
      mojo.internal.StructField('property', 0, 0, arc.mojom.BluetoothPropertySpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StartDiscovery_ParamsSpec, 'arc.mojom.BluetoothHost_StartDiscovery_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CancelDiscovery_ParamsSpec, 'arc.mojom.BluetoothHost_CancelDiscovery_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CreateBond_ParamsSpec, 'arc.mojom.BluetoothHost_CreateBond_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('transport', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RemoveBond_ParamsSpec, 'arc.mojom.BluetoothHost_RemoveBond_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CancelBond_ParamsSpec, 'arc.mojom.BluetoothHost_CancelBond_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec, 'arc.mojom.BluetoothHost_GetConnectionState_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetConnectionState_ResponseParamsSpec, 'arc.mojom.BluetoothHost_GetConnectionState_ResponseParams', [
      mojo.internal.StructField('connected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StartLEScan_ParamsSpec, 'arc.mojom.BluetoothHost_StartLEScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StopLEScan_ParamsSpec, 'arc.mojom.BluetoothHost_StopLEScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ConnectLEDevice_ParamsSpec, 'arc.mojom.BluetoothHost_ConnectLEDevice_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec, 'arc.mojom.BluetoothHost_DisconnectLEDevice_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SearchService_ParamsSpec, 'arc.mojom.BluetoothHost_SearchService_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetGattDB_ParamsSpec, 'arc.mojom.BluetoothHost_GetGattDB_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec, 'arc.mojom.BluetoothHost_ReadGattCharacteristic_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, arc.mojom.BluetoothGattValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec, 'arc.mojom.BluetoothHost_WriteGattCharacteristic_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, arc.mojom.BluetoothGattValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('prepare', 32, 0, mojo.internal.Bool, false, false, 11, undefined),
    ],
    [[0, 40], [11, 48]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParamsSpec, 'arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec, 'arc.mojom.BluetoothHost_ReadGattDescriptor_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('desc_id', 24, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, arc.mojom.BluetoothGattValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec, 'arc.mojom.BluetoothHost_WriteGattDescriptor_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('desc_id', 24, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 32, 0, arc.mojom.BluetoothGattValueSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParamsSpec, 'arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec, 'arc.mojom.BluetoothHost_ExecuteWrite_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('execute', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ExecuteWrite_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ExecuteWrite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec, 'arc.mojom.BluetoothHost_RegisterForGattNotification_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParamsSpec, 'arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec, 'arc.mojom.BluetoothHost_DeregisterForGattNotification_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec, 'arc.mojom.BluetoothHost_ReadRemoteRssi_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParams', [
      mojo.internal.StructField('rssi', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddService_ParamsSpec, 'arc.mojom.BluetoothHost_AddService_Params', [
      mojo.internal.StructField('service_id', 0, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('num_handles', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddService_ResponseParamsSpec, 'arc.mojom.BluetoothHost_AddService_ResponseParams', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddCharacteristic_ParamsSpec, 'arc.mojom.BluetoothHost_AddCharacteristic_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, arc.mojom.BluetoothUUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('properties', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('permissions', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddCharacteristic_ResponseParamsSpec, 'arc.mojom.BluetoothHost_AddCharacteristic_ResponseParams', [
      mojo.internal.StructField('characteristic_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec, 'arc.mojom.BluetoothHost_AddDescriptor_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, arc.mojom.BluetoothUUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('permissions', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddDescriptor_ResponseParamsSpec, 'arc.mojom.BluetoothHost_AddDescriptor_ResponseParams', [
      mojo.internal.StructField('descriptor_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StartService_ParamsSpec, 'arc.mojom.BluetoothHost_StartService_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StartService_ResponseParamsSpec, 'arc.mojom.BluetoothHost_StartService_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StopService_ParamsSpec, 'arc.mojom.BluetoothHost_StopService_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StopService_ResponseParamsSpec, 'arc.mojom.BluetoothHost_StopService_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeleteService_ParamsSpec, 'arc.mojom.BluetoothHost_DeleteService_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeleteService_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DeleteService_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SendIndication_ParamsSpec, 'arc.mojom.BluetoothHost_SendIndication_Params', [
      mojo.internal.StructField('attribute_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('confirm', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SendIndication_ResponseParamsSpec, 'arc.mojom.BluetoothHost_SendIndication_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec, 'arc.mojom.BluetoothHost_GetSdpRecords_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_uuid', 8, 0, arc.mojom.BluetoothUUIDSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec, 'arc.mojom.BluetoothHost_CreateSdpRecord_Params', [
      mojo.internal.StructField('record', 0, 0, arc.mojom.BluetoothSdpRecordSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParamsSpec, 'arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.BluetoothCreateSdpRecordResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec, 'arc.mojom.BluetoothHost_RemoveSdpRecord_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParamsSpec, 'arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec, 'arc.mojom.BluetoothHost_ReserveAdvertisementHandle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('adv_handle', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec, 'arc.mojom.BluetoothHost_EnableAdvertisement_Params', [
      mojo.internal.StructField('adv_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('adv', 8, 0, arc.mojom.BluetoothAdvertisementSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParamsSpec, 'arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec, 'arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_Params', [
      mojo.internal.StructField('adv_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec, 'arc.mojom.BluetoothHost_DisableAdvertisement_Params', [
      mojo.internal.StructField('adv_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketListen_Params', [
      mojo.internal.StructField('sock_type', 0, 0, arc.mojom.BluetoothSocketTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('sock_flags', 8, 0, arc.mojom.BluetoothSocketFlagsSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceRequest(arc.mojom.BluetoothListenSocketClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketConnect_Params', [
      mojo.internal.StructField('sock_type', 0, 0, arc.mojom.BluetoothSocketTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('sock_flags', 8, 0, arc.mojom.BluetoothSocketFlagsSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_addr', 16, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_port', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceRequest(arc.mojom.BluetoothConnectSocketClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

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

arc.mojom.BluetoothHostPtr = arc.mojom.BluetoothHostRemote;
arc.mojom.BluetoothHostRequest = arc.mojom.BluetoothHostPendingReceiver;


// Interface: BluetoothInstance
mojo.internal.Struct(
    arc.mojom.BluetoothInstance_Init_ParamsSpec, 'arc.mojom.BluetoothInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BluetoothHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_Init_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec, 'arc.mojom.BluetoothInstance_OnAdapterProperties_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, mojo.internal.Array(arc.mojom.BluetoothPropertySpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec, 'arc.mojom.BluetoothInstance_OnDeviceFound_Params', [
      mojo.internal.StructField('properties', 0, 0, mojo.internal.Array(arc.mojom.BluetoothPropertySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, mojo.internal.Array(arc.mojom.BluetoothPropertySpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BluetoothDiscoveryStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnBondStateChanged_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_addr', 8, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('state', 16, 0, arc.mojom.BluetoothBondStateSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnConnectionStateChanged_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 8, 0, arc.mojom.BluetoothDeviceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('connected', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec, 'arc.mojom.BluetoothInstance_OnLEDeviceFound_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('rssi', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('eir', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec, 'arc.mojom.BluetoothInstance_OnLEConnectionStateChange_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('connected', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec, 'arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_Params', [
      mojo.internal.StructField('old_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('new_addr', 8, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec, 'arc.mojom.BluetoothInstance_OnSearchComplete_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec, 'arc.mojom.BluetoothInstance_OnGetGattDB_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('db', 8, 0, mojo.internal.Array(arc.mojom.BluetoothGattDBElementSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec, 'arc.mojom.BluetoothInstance_OnGattNotify_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_notify', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnServiceChanged_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattRead_Params', [
      mojo.internal.StructField('address', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('attribute_handle', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_long', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('attribute_type', 20, 0, arc.mojom.BluetoothGattDBAttributeTypeSpec, null, false, 9, undefined),
    ],
    [[0, 32], [9, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattRead_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattRead_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattWrite_Params', [
      mojo.internal.StructField('address', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('attribute_handle', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('attribute_type', 24, 0, arc.mojom.BluetoothGattDBAttributeTypeSpec, null, false, 9, undefined),
      mojo.internal.StructField('is_prepare', 28, 0, mojo.internal.Bool, false, false, 12, undefined),
    ],
    [[0, 32], [9, 40], [12, 40]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattExecuteWrite_Params', [
      mojo.internal.StructField('address', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('execute', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec, 'arc.mojom.BluetoothInstance_OnMTUReceived_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('mtu', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec, 'arc.mojom.BluetoothInstance_OnGetSdpRecords_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_addr', 8, 0, arc.mojom.BluetoothAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_uuid', 16, 0, arc.mojom.BluetoothUUIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('records', 24, 0, mojo.internal.Array(arc.mojom.BluetoothSdpRecordSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

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
      arc.mojom.BluetoothInstance_Init_ResponseParamsSpec,
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

arc.mojom.BluetoothInstancePtr = arc.mojom.BluetoothInstanceRemote;
arc.mojom.BluetoothInstanceRequest = arc.mojom.BluetoothInstancePendingReceiver;

