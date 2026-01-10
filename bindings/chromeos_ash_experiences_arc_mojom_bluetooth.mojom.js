// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/bluetooth.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

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
        'type': arc.mojom.BluetoothAddressSpec.$,
        'nullable': false,
      },
      'uuids': {
        'ordinal': 2,
        'type': mojo.internal.Array(arc.mojom.BluetoothUUIDSpec.$, false),
        'nullable': false,
      },
      'device_class': {
        'ordinal': 3,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'device_type': {
        'ordinal': 4,
        'type': arc.mojom.BluetoothDeviceTypeSpec.$,
        'nullable': false,
      },
      'service_record': {
        'ordinal': 5,
        'type': arc.mojom.BluetoothServiceRecordSpec.$,
        'nullable': false,
      },
      'adapter_scan_mode': {
        'ordinal': 6,
        'type': arc.mojom.BluetoothScanModeSpec.$,
        'nullable': false,
      },
      'bonded_devices': {
        'ordinal': 7,
        'type': mojo.internal.Array(arc.mojom.BluetoothAddressSpec.$, false),
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
        'type': arc.mojom.BluetoothRemoteVersionSpec.$,
        'nullable': false,
      },
      'local_le_features': {
        'ordinal': 12,
        'type': arc.mojom.BluetoothLocalLEFeaturesSpec.$,
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
        'type': mojo.internal.Array(arc.mojom.BluetoothUUIDSpec.$, false),
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
        'type': arc.mojom.BluetoothServiceDataSpec.$,
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
      mojo.internal.StructField('address', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothUUID
mojo.internal.Struct(
    arc.mojom.BluetoothUUIDSpec, 'arc.mojom.BluetoothUUID', [
      mojo.internal.StructField('uuid', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothServiceRecord
mojo.internal.Struct(
    arc.mojom.BluetoothServiceRecordSpec, 'arc.mojom.BluetoothServiceRecord', [
      mojo.internal.StructField('uuid', 0, 0, arc.mojom.BluetoothUUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('channel', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BluetoothLocalLEFeatures
mojo.internal.Struct(
    arc.mojom.BluetoothLocalLEFeaturesSpec, 'arc.mojom.BluetoothLocalLEFeatures', [
      mojo.internal.StructField('version_supported', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('scan_result_storage_size', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('total_trackable_advertisers', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('local_privacy_enabled', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('max_adv_instance', 7, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('rpa_offload_supported', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('max_irk_list_size', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('max_adv_filter_supported', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('activity_energy_info_supported', 11, 0, mojo.internal.Uint8, 0, false, 0, undefined),
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
      mojo.internal.StructField('uuid', 0, 0, arc.mojom.BluetoothUUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_inst_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('instance_id', 10, 0, mojo.internal.Uint16, 0, false, 19, undefined),
    ],
    [[0, 24], [19, 24]]);

// Struct: BluetoothGattServiceID
mojo.internal.Struct(
    arc.mojom.BluetoothGattServiceIDSpec, 'arc.mojom.BluetoothGattServiceID', [
      mojo.internal.StructField('id', 0, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_primary', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothGattValue
mojo.internal.Struct(
    arc.mojom.BluetoothGattValueSpec, 'arc.mojom.BluetoothGattValue', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothServiceData
mojo.internal.Struct(
    arc.mojom.BluetoothServiceDataSpec, 'arc.mojom.BluetoothServiceData', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('uuid_16bit', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothAdvertisement
mojo.internal.Struct(
    arc.mojom.BluetoothAdvertisementSpec, 'arc.mojom.BluetoothAdvertisement', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.BluetoothAdvertisementTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(arc.mojom.BluetoothAdvertisingDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('include_tx_power', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BluetoothGattDBElement
mojo.internal.Struct(
    arc.mojom.BluetoothGattDBElementSpec, 'arc.mojom.BluetoothGattDBElement', [
      mojo.internal.StructField('uuid', 0, 0, arc.mojom.BluetoothUUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, arc.mojom.BluetoothGattDBAttributeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribute_handle', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('start_handle', 18, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('end_handle', 20, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('deprecated_id', 22, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('properties', 23, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('element_id', 24, 0, mojo.internal.Uint16, 0, false, 19, undefined),
    ],
    [[0, 32], [19, 40]]);

// Struct: BluetoothSdpAttribute
mojo.internal.Struct(
    arc.mojom.BluetoothSdpAttributeSpec, 'arc.mojom.BluetoothSdpAttribute', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.BluetoothSdpAttributeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sequence', 8, 0, mojo.internal.Array(arc.mojom.BluetoothSdpAttributeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('deprecated_json_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('type_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('value', 32, 0, mojo_base.mojom.ValueSpec.$, null, true, 14, undefined),
    ],
    [[0, 40], [14, 48]]);

// Struct: BluetoothSdpRecord
mojo.internal.Struct(
    arc.mojom.BluetoothSdpRecordSpec, 'arc.mojom.BluetoothSdpRecord', [
      mojo.internal.StructField('attrs', 0, 0, mojo.internal.Map(mojo.internal.Uint16, arc.mojom.BluetoothSdpAttributeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothCreateSdpRecordResult
mojo.internal.Struct(
    arc.mojom.BluetoothCreateSdpRecordResultSpec, 'arc.mojom.BluetoothCreateSdpRecordResult', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_handle', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothRfcommConnection
mojo.internal.Struct(
    arc.mojom.BluetoothRfcommConnectionSpec, 'arc.mojom.BluetoothRfcommConnection', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sock', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('channel', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sock', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('port', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RfcommListeningSocketClient
mojo.internal.Struct(
    arc.mojom.RfcommListeningSocketClient_OnAccepted_ParamsSpec, 'arc.mojom.RfcommListeningSocketClient_OnAccepted_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothRfcommConnectionSpec.$, null, false, 0, undefined),
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
      [connection],
      false);
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

arc.mojom.RfcommListeningSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAccepted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.RfcommListeningSocketClient_OnAccepted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccepted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.RfcommListeningSocketClient_OnAccepted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAccepted');
          const result = this.impl.onAccepted(params.connection);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.RfcommListeningSocketClientReceiver = arc.mojom.RfcommListeningSocketClientReceiver;

arc.mojom.RfcommListeningSocketClientPtr = arc.mojom.RfcommListeningSocketClientRemote;
arc.mojom.RfcommListeningSocketClientRequest = arc.mojom.RfcommListeningSocketClientPendingReceiver;


// Interface: RfcommConnectingSocketClient
mojo.internal.Struct(
    arc.mojom.RfcommConnectingSocketClient_OnConnected_ParamsSpec, 'arc.mojom.RfcommConnectingSocketClient_OnConnected_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothRfcommConnectionSpec.$, null, false, 0, undefined),
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
      [connection],
      false);
  }

  onConnectFailed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_ParamsSpec,
      null,
      [],
      false);
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

arc.mojom.RfcommConnectingSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.RfcommConnectingSocketClient_OnConnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnected (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnConnectFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectFailed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.RfcommConnectingSocketClient_OnConnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnected');
          const result = this.impl.onConnected(params.connection);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.RfcommConnectingSocketClient_OnConnectFailed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnectFailed');
          const result = this.impl.onConnectFailed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.RfcommConnectingSocketClientReceiver = arc.mojom.RfcommConnectingSocketClientReceiver;

arc.mojom.RfcommConnectingSocketClientPtr = arc.mojom.RfcommConnectingSocketClientRemote;
arc.mojom.RfcommConnectingSocketClientRequest = arc.mojom.RfcommConnectingSocketClientPendingReceiver;


// Interface: BluetoothListenSocketClient
mojo.internal.Struct(
    arc.mojom.BluetoothListenSocketClient_OnAccepted_ParamsSpec, 'arc.mojom.BluetoothListenSocketClient_OnAccepted_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothSocketConnectionSpec.$, null, false, 0, undefined),
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
      [connection],
      false);
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

arc.mojom.BluetoothListenSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAccepted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothListenSocketClient_OnAccepted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccepted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothListenSocketClient_OnAccepted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAccepted');
          const result = this.impl.onAccepted(params.connection);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.BluetoothListenSocketClientReceiver = arc.mojom.BluetoothListenSocketClientReceiver;

arc.mojom.BluetoothListenSocketClientPtr = arc.mojom.BluetoothListenSocketClientRemote;
arc.mojom.BluetoothListenSocketClientRequest = arc.mojom.BluetoothListenSocketClientPendingReceiver;


// Interface: BluetoothConnectSocketClient
mojo.internal.Struct(
    arc.mojom.BluetoothConnectSocketClient_OnConnected_ParamsSpec, 'arc.mojom.BluetoothConnectSocketClient_OnConnected_Params', [
      mojo.internal.StructField('connection', 0, 0, arc.mojom.BluetoothSocketConnectionSpec.$, null, false, 0, undefined),
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
      [connection],
      false);
  }

  onConnectFailed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_ParamsSpec,
      null,
      [],
      false);
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

arc.mojom.BluetoothConnectSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothConnectSocketClient_OnConnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnected (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnConnectFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectFailed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothConnectSocketClient_OnConnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnected');
          const result = this.impl.onConnected(params.connection);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothConnectSocketClient_OnConnectFailed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnectFailed');
          const result = this.impl.onConnectFailed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.BluetoothConnectSocketClientReceiver = arc.mojom.BluetoothConnectSocketClientReceiver;

arc.mojom.BluetoothConnectSocketClientPtr = arc.mojom.BluetoothConnectSocketClientRemote;
arc.mojom.BluetoothConnectSocketClientRequest = arc.mojom.BluetoothConnectSocketClientPendingReceiver;


// Interface: BluetoothHost
mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdapter_ParamsSpec, 'arc.mojom.BluetoothHost_EnableAdapter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdapter_ResponseParamsSpec, 'arc.mojom.BluetoothHost_EnableAdapter_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BluetoothAdapterStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec, 'arc.mojom.BluetoothHost_DisableAdapter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdapter_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DisableAdapter_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BluetoothAdapterStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec, 'arc.mojom.BluetoothHost_GetAdapterProperty_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.BluetoothPropertyTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec, 'arc.mojom.BluetoothHost_SetAdapterProperty_Params', [
      mojo.internal.StructField('property', 0, 0, arc.mojom.BluetoothPropertySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transport', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RemoveBond_ParamsSpec, 'arc.mojom.BluetoothHost_RemoveBond_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CancelBond_ParamsSpec, 'arc.mojom.BluetoothHost_CancelBond_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec, 'arc.mojom.BluetoothHost_GetConnectionState_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec, 'arc.mojom.BluetoothHost_DisconnectLEDevice_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SearchService_ParamsSpec, 'arc.mojom.BluetoothHost_SearchService_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetGattDB_ParamsSpec, 'arc.mojom.BluetoothHost_GetGattDB_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec, 'arc.mojom.BluetoothHost_ReadGattCharacteristic_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, arc.mojom.BluetoothGattValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec, 'arc.mojom.BluetoothHost_WriteGattCharacteristic_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, arc.mojom.BluetoothGattValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prepare', 32, 0, mojo.internal.Bool, false, false, 11, undefined),
    ],
    [[0, 40], [11, 48]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParamsSpec, 'arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec, 'arc.mojom.BluetoothHost_ReadGattDescriptor_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('desc_id', 24, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, arc.mojom.BluetoothGattValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec, 'arc.mojom.BluetoothHost_WriteGattDescriptor_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('desc_id', 24, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 32, 0, arc.mojom.BluetoothGattValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParamsSpec, 'arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec, 'arc.mojom.BluetoothHost_ExecuteWrite_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('execute', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ExecuteWrite_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ExecuteWrite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec, 'arc.mojom.BluetoothHost_RegisterForGattNotification_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParamsSpec, 'arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec, 'arc.mojom.BluetoothHost_DeregisterForGattNotification_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec, 'arc.mojom.BluetoothHost_ReadRemoteRssi_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParams', [
      mojo.internal.StructField('rssi', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddService_ParamsSpec, 'arc.mojom.BluetoothHost_AddService_Params', [
      mojo.internal.StructField('service_id', 0, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('uuid', 0, 0, arc.mojom.BluetoothUUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_handle', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('properties', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('permissions', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddCharacteristic_ResponseParamsSpec, 'arc.mojom.BluetoothHost_AddCharacteristic_ResponseParams', [
      mojo.internal.StructField('characteristic_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec, 'arc.mojom.BluetoothHost_AddDescriptor_Params', [
      mojo.internal.StructField('uuid', 0, 0, arc.mojom.BluetoothUUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_handle', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('permissions', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StopService_ParamsSpec, 'arc.mojom.BluetoothHost_StopService_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_StopService_ResponseParamsSpec, 'arc.mojom.BluetoothHost_StopService_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeleteService_ParamsSpec, 'arc.mojom.BluetoothHost_DeleteService_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DeleteService_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DeleteService_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SendIndication_ParamsSpec, 'arc.mojom.BluetoothHost_SendIndication_Params', [
      mojo.internal.StructField('address', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('attribute_handle', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('confirm', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_SendIndication_ResponseParamsSpec, 'arc.mojom.BluetoothHost_SendIndication_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec, 'arc.mojom.BluetoothHost_GetSdpRecords_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_uuid', 8, 0, arc.mojom.BluetoothUUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec, 'arc.mojom.BluetoothHost_CreateSdpRecord_Params', [
      mojo.internal.StructField('record', 0, 0, arc.mojom.BluetoothSdpRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParamsSpec, 'arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.BluetoothCreateSdpRecordResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec, 'arc.mojom.BluetoothHost_RemoveSdpRecord_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParamsSpec, 'arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec, 'arc.mojom.BluetoothHost_ReserveAdvertisementHandle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('adv_handle', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec, 'arc.mojom.BluetoothHost_EnableAdvertisement_Params', [
      mojo.internal.StructField('adv', 0, 0, arc.mojom.BluetoothAdvertisementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('adv_handle', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParamsSpec, 'arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec, 'arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_Params', [
      mojo.internal.StructField('adv_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParamsSpec, 'arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec, 'arc.mojom.BluetoothHost_DisableAdvertisement_Params', [
      mojo.internal.StructField('adv_handle', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParamsSpec, 'arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketListen_Params', [
      mojo.internal.StructField('sock_type', 0, 0, arc.mojom.BluetoothSocketTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sock_flags', 8, 0, arc.mojom.BluetoothSocketFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceRequest(arc.mojom.BluetoothListenSocketClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketConnect_Params', [
      mojo.internal.StructField('sock_type', 0, 0, arc.mojom.BluetoothSocketTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sock_flags', 8, 0, arc.mojom.BluetoothSocketFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_addr', 16, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_port', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParamsSpec, 'arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceRequest(arc.mojom.BluetoothConnectSocketClientSpec), null, true, 0, undefined),
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
      [],
      false);
  }

  disableAdapter() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec,
      arc.mojom.BluetoothHost_DisableAdapter_ResponseParamsSpec,
      [],
      false);
  }

  getAdapterProperty(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec,
      null,
      [type],
      false);
  }

  setAdapterProperty(property) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec,
      null,
      [property],
      false);
  }

  startDiscovery() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.BluetoothHost_StartDiscovery_ParamsSpec,
      null,
      [],
      false);
  }

  cancelDiscovery() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.BluetoothHost_CancelDiscovery_ParamsSpec,
      null,
      [],
      false);
  }

  createBond(addr, transport) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.BluetoothHost_CreateBond_ParamsSpec,
      null,
      [addr, transport],
      false);
  }

  removeBond(addr) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.BluetoothHost_RemoveBond_ParamsSpec,
      null,
      [addr],
      false);
  }

  cancelBond(addr) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.BluetoothHost_CancelBond_ParamsSpec,
      null,
      [addr],
      false);
  }

  getConnectionState(addr) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec,
      arc.mojom.BluetoothHost_GetConnectionState_ResponseParamsSpec,
      [addr],
      false);
  }

  startLEScan() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.BluetoothHost_StartLEScan_ParamsSpec,
      null,
      [],
      false);
  }

  stopLEScan() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.BluetoothHost_StopLEScan_ParamsSpec,
      null,
      [],
      false);
  }

  connectLEDevice(remote_addr) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.BluetoothHost_ConnectLEDevice_ParamsSpec,
      null,
      [remote_addr],
      false);
  }

  disconnectLEDevice(remote_addr) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec,
      null,
      [remote_addr],
      false);
  }

  searchService(remote_addr) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.BluetoothHost_SearchService_ParamsSpec,
      null,
      [remote_addr],
      false);
  }

  getGattDB(remote_addr) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.BluetoothHost_GetGattDB_ParamsSpec,
      null,
      [remote_addr],
      false);
  }

  readGattCharacteristic(remote_addr, service_id, char_id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec,
      arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParamsSpec,
      [remote_addr, service_id, char_id],
      false);
  }

  writeGattCharacteristic(remote_addr, service_id, char_id, value, prepare) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec,
      arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParamsSpec,
      [remote_addr, service_id, char_id, value, prepare],
      false);
  }

  readGattDescriptor(remote_addr, service_id, char_id, desc_id) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec,
      arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParamsSpec,
      [remote_addr, service_id, char_id, desc_id],
      false);
  }

  writeGattDescriptor(remote_addr, service_id, char_id, desc_id, value) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec,
      arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParamsSpec,
      [remote_addr, service_id, char_id, desc_id, value],
      false);
  }

  executeWrite(remote_addr, execute) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec,
      arc.mojom.BluetoothHost_ExecuteWrite_ResponseParamsSpec,
      [remote_addr, execute],
      false);
  }

  registerForGattNotification(remote_addr, service_id, char_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec,
      arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParamsSpec,
      [remote_addr, service_id, char_id],
      false);
  }

  deregisterForGattNotification(remote_addr, service_id, char_id) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec,
      arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParamsSpec,
      [remote_addr, service_id, char_id],
      false);
  }

  readRemoteRssi(remote_addr) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec,
      arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParamsSpec,
      [remote_addr],
      false);
  }

  addService(service_id, num_handles) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.BluetoothHost_AddService_ParamsSpec,
      arc.mojom.BluetoothHost_AddService_ResponseParamsSpec,
      [service_id, num_handles],
      false);
  }

  addCharacteristic(service_handle, uuid, properties, permissions) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      arc.mojom.BluetoothHost_AddCharacteristic_ParamsSpec,
      arc.mojom.BluetoothHost_AddCharacteristic_ResponseParamsSpec,
      [service_handle, uuid, properties, permissions],
      false);
  }

  addDescriptor(service_handle, uuid, permissions) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec,
      arc.mojom.BluetoothHost_AddDescriptor_ResponseParamsSpec,
      [service_handle, uuid, permissions],
      false);
  }

  startService(service_handle) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.BluetoothHost_StartService_ParamsSpec,
      arc.mojom.BluetoothHost_StartService_ResponseParamsSpec,
      [service_handle],
      false);
  }

  stopService(service_handle) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.BluetoothHost_StopService_ParamsSpec,
      arc.mojom.BluetoothHost_StopService_ResponseParamsSpec,
      [service_handle],
      false);
  }

  deleteService(service_handle) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.BluetoothHost_DeleteService_ParamsSpec,
      arc.mojom.BluetoothHost_DeleteService_ResponseParamsSpec,
      [service_handle],
      false);
  }

  sendIndication(attribute_handle, address, confirm, value) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.BluetoothHost_SendIndication_ParamsSpec,
      arc.mojom.BluetoothHost_SendIndication_ResponseParamsSpec,
      [attribute_handle, address, confirm, value],
      false);
  }

  getSdpRecords(remote_addr, target_uuid) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec,
      null,
      [remote_addr, target_uuid],
      false);
  }

  createSdpRecord(record) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec,
      arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParamsSpec,
      [record],
      false);
  }

  removeSdpRecord(service_handle) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec,
      arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParamsSpec,
      [service_handle],
      false);
  }

  reserveAdvertisementHandle() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec,
      arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParamsSpec,
      [],
      false);
  }

  enableAdvertisement(adv_handle, adv) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec,
      arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParamsSpec,
      [adv_handle, adv],
      false);
  }

  releaseAdvertisementHandle(adv_handle) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec,
      arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParamsSpec,
      [adv_handle],
      false);
  }

  disableAdvertisement(adv_handle) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec,
      arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParamsSpec,
      [adv_handle],
      false);
  }

  bluetoothSocketListen(sock_type, sock_flags, port) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec,
      arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParamsSpec,
      [sock_type, sock_flags, port],
      false);
  }

  bluetoothSocketConnect(sock_type, sock_flags, remote_addr, remote_port) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec,
      arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParamsSpec,
      [sock_type, sock_flags, remote_addr, remote_port],
      false);
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

arc.mojom.BluetoothHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(8, 4); // Default ordinal 8 -> Index 4
    this.ordinalMap.set(9, 5); // Default ordinal 9 -> Index 5
    this.ordinalMap.set(10, 6); // Default ordinal 10 -> Index 6
    this.ordinalMap.set(11, 7); // Default ordinal 11 -> Index 7
    this.ordinalMap.set(12, 8); // Default ordinal 12 -> Index 8
    this.ordinalMap.set(13, 9); // Default ordinal 13 -> Index 9
    this.ordinalMap.set(14, 10); // Default ordinal 14 -> Index 10
    this.ordinalMap.set(15, 11); // Default ordinal 15 -> Index 11
    this.ordinalMap.set(16, 12); // Default ordinal 16 -> Index 12
    this.ordinalMap.set(17, 13); // Default ordinal 17 -> Index 13
    this.ordinalMap.set(18, 14); // Default ordinal 18 -> Index 14
    this.ordinalMap.set(19, 15); // Default ordinal 19 -> Index 15
    this.ordinalMap.set(22, 16); // Default ordinal 22 -> Index 16
    this.ordinalMap.set(23, 17); // Default ordinal 23 -> Index 17
    this.ordinalMap.set(24, 18); // Default ordinal 24 -> Index 18
    this.ordinalMap.set(25, 19); // Default ordinal 25 -> Index 19
    this.ordinalMap.set(44, 20); // Default ordinal 44 -> Index 20
    this.ordinalMap.set(26, 21); // Default ordinal 26 -> Index 21
    this.ordinalMap.set(27, 22); // Default ordinal 27 -> Index 22
    this.ordinalMap.set(28, 23); // Default ordinal 28 -> Index 23
    this.ordinalMap.set(30, 24); // Default ordinal 30 -> Index 24
    this.ordinalMap.set(31, 25); // Default ordinal 31 -> Index 25
    this.ordinalMap.set(32, 26); // Default ordinal 32 -> Index 26
    this.ordinalMap.set(33, 27); // Default ordinal 33 -> Index 27
    this.ordinalMap.set(34, 28); // Default ordinal 34 -> Index 28
    this.ordinalMap.set(35, 29); // Default ordinal 35 -> Index 29
    this.ordinalMap.set(36, 30); // Default ordinal 36 -> Index 30
    this.ordinalMap.set(37, 31); // Default ordinal 37 -> Index 31
    this.ordinalMap.set(38, 32); // Default ordinal 38 -> Index 32
    this.ordinalMap.set(39, 33); // Default ordinal 39 -> Index 33
    this.ordinalMap.set(40, 34); // Default ordinal 40 -> Index 34
    this.ordinalMap.set(41, 35); // Default ordinal 41 -> Index 35
    this.ordinalMap.set(42, 36); // Default ordinal 42 -> Index 36
    this.ordinalMap.set(43, 37); // Default ordinal 43 -> Index 37
    this.ordinalMap.set(47, 38); // Default ordinal 47 -> Index 38
    this.ordinalMap.set(48, 39); // Default ordinal 48 -> Index 39
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EnableAdapter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_EnableAdapter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAdapter (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DisableAdapter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableAdapter (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetAdapterProperty
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAdapterProperty (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetAdapterProperty
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAdapterProperty (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StartDiscovery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_StartDiscovery_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDiscovery (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CancelDiscovery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_CancelDiscovery_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelDiscovery (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateBond
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_CreateBond_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBond (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RemoveBond
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_RemoveBond_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBond (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CancelBond
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_CancelBond_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelBond (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetConnectionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetConnectionState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: StartLEScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_StartLEScan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartLEScan (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: StopLEScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_StopLEScan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopLEScan (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ConnectLEDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_ConnectLEDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectLEDevice (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: DisconnectLEDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectLEDevice (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SearchService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_SearchService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SearchService (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetGattDB
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_GetGattDB_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGattDB (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ReadGattCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadGattCharacteristic (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: WriteGattCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteGattCharacteristic (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ReadGattDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadGattDescriptor (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: WriteGattDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteGattDescriptor (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ExecuteWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteWrite (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RegisterForGattNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterForGattNotification (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: DeregisterForGattNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeregisterForGattNotification (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: ReadRemoteRssi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadRemoteRssi (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: AddService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_AddService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddService (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: AddCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_AddCharacteristic_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCharacteristic (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: AddDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDescriptor (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: StartService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_StartService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartService (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: StopService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_StopService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopService (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: DeleteService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_DeleteService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteService (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: SendIndication
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_SendIndication_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendIndication (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: GetSdpRecords
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSdpRecords (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: CreateSdpRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSdpRecord (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: RemoveSdpRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveSdpRecord (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: ReserveAdvertisementHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReserveAdvertisementHandle (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: EnableAdvertisement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAdvertisement (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: ReleaseAdvertisementHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseAdvertisementHandle (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: DisableAdvertisement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableAdvertisement (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: BluetoothSocketListen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BluetoothSocketListen (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: BluetoothSocketConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BluetoothSocketConnect (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_EnableAdapter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableAdapter');
          const result = this.impl.enableAdapter();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_EnableAdapter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_DisableAdapter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableAdapter');
          const result = this.impl.disableAdapter();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_DisableAdapter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_GetAdapterProperty_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAdapterProperty');
          const result = this.impl.getAdapterProperty(params.type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_SetAdapterProperty_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAdapterProperty');
          const result = this.impl.setAdapterProperty(params.property);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_StartDiscovery_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDiscovery');
          const result = this.impl.startDiscovery();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_CancelDiscovery_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelDiscovery');
          const result = this.impl.cancelDiscovery();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_CreateBond_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createBond');
          const result = this.impl.createBond(params.addr, params.transport);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_RemoveBond_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeBond');
          const result = this.impl.removeBond(params.addr);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_CancelBond_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelBond');
          const result = this.impl.cancelBond(params.addr);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_GetConnectionState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getConnectionState');
          const result = this.impl.getConnectionState(params.addr);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_GetConnectionState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_StartLEScan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startLEScan');
          const result = this.impl.startLEScan();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_StopLEScan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopLEScan');
          const result = this.impl.stopLEScan();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_ConnectLEDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connectLEDevice');
          const result = this.impl.connectLEDevice(params.remote_addr);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_DisconnectLEDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disconnectLEDevice');
          const result = this.impl.disconnectLEDevice(params.remote_addr);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_SearchService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.searchService');
          const result = this.impl.searchService(params.remote_addr);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_GetGattDB_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getGattDB');
          const result = this.impl.getGattDB(params.remote_addr);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_ReadGattCharacteristic_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readGattCharacteristic');
          const result = this.impl.readGattCharacteristic(params.remote_addr, params.service_id, params.char_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_ReadGattCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_WriteGattCharacteristic_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeGattCharacteristic');
          const result = this.impl.writeGattCharacteristic(params.remote_addr, params.service_id, params.char_id, params.value, params.prepare);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_WriteGattCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_ReadGattDescriptor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readGattDescriptor');
          const result = this.impl.readGattDescriptor(params.remote_addr, params.service_id, params.char_id, params.desc_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_ReadGattDescriptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_WriteGattDescriptor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeGattDescriptor');
          const result = this.impl.writeGattDescriptor(params.remote_addr, params.service_id, params.char_id, params.desc_id, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_WriteGattDescriptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_ExecuteWrite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.executeWrite');
          const result = this.impl.executeWrite(params.remote_addr, params.execute);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_ExecuteWrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_RegisterForGattNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerForGattNotification');
          const result = this.impl.registerForGattNotification(params.remote_addr, params.service_id, params.char_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_RegisterForGattNotification_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_DeregisterForGattNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deregisterForGattNotification');
          const result = this.impl.deregisterForGattNotification(params.remote_addr, params.service_id, params.char_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_DeregisterForGattNotification_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_ReadRemoteRssi_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readRemoteRssi');
          const result = this.impl.readRemoteRssi(params.remote_addr);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_ReadRemoteRssi_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_AddService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addService');
          const result = this.impl.addService(params.service_id, params.num_handles);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_AddService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_AddCharacteristic_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addCharacteristic');
          const result = this.impl.addCharacteristic(params.service_handle, params.uuid, params.properties, params.permissions);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_AddCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_AddDescriptor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addDescriptor');
          const result = this.impl.addDescriptor(params.service_handle, params.uuid, params.permissions);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_AddDescriptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_StartService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startService');
          const result = this.impl.startService(params.service_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_StartService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_StopService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopService');
          const result = this.impl.stopService(params.service_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_StopService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_DeleteService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteService');
          const result = this.impl.deleteService(params.service_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_DeleteService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_SendIndication_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendIndication');
          const result = this.impl.sendIndication(params.attribute_handle, params.address, params.confirm, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_SendIndication_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_GetSdpRecords_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSdpRecords');
          const result = this.impl.getSdpRecords(params.remote_addr, params.target_uuid);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_CreateSdpRecord_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createSdpRecord');
          const result = this.impl.createSdpRecord(params.record);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_CreateSdpRecord_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_RemoveSdpRecord_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeSdpRecord');
          const result = this.impl.removeSdpRecord(params.service_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_RemoveSdpRecord_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reserveAdvertisementHandle');
          const result = this.impl.reserveAdvertisementHandle();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_ReserveAdvertisementHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_EnableAdvertisement_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableAdvertisement');
          const result = this.impl.enableAdvertisement(params.adv_handle, params.adv);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_EnableAdvertisement_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.releaseAdvertisementHandle');
          const result = this.impl.releaseAdvertisementHandle(params.adv_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_ReleaseAdvertisementHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_DisableAdvertisement_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableAdvertisement');
          const result = this.impl.disableAdvertisement(params.adv_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_DisableAdvertisement_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_BluetoothSocketListen_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bluetoothSocketListen');
          const result = this.impl.bluetoothSocketListen(params.sock_type, params.sock_flags, params.port);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_BluetoothSocketListen_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothHost_BluetoothSocketConnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bluetoothSocketConnect');
          const result = this.impl.bluetoothSocketConnect(params.sock_type, params.sock_flags, params.remote_addr, params.remote_port);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothHost_BluetoothSocketConnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.BluetoothHostReceiver = arc.mojom.BluetoothHostReceiver;

arc.mojom.BluetoothHostPtr = arc.mojom.BluetoothHostRemote;
arc.mojom.BluetoothHostRequest = arc.mojom.BluetoothHostPendingReceiver;


// Interface: BluetoothInstance
mojo.internal.Struct(
    arc.mojom.BluetoothInstance_Init_ParamsSpec, 'arc.mojom.BluetoothInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BluetoothHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_Init_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec, 'arc.mojom.BluetoothInstance_OnAdapterProperties_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, mojo.internal.Array(arc.mojom.BluetoothPropertySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec, 'arc.mojom.BluetoothInstance_OnDeviceFound_Params', [
      mojo.internal.StructField('properties', 0, 0, mojo.internal.Array(arc.mojom.BluetoothPropertySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, mojo.internal.Array(arc.mojom.BluetoothPropertySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BluetoothDiscoveryStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnBondStateChanged_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_addr', 8, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 16, 0, arc.mojom.BluetoothBondStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnConnectionStateChanged_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 8, 0, arc.mojom.BluetoothDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connected', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec, 'arc.mojom.BluetoothInstance_OnLEDeviceFound_Params', [
      mojo.internal.StructField('addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('eir', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('rssi', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec, 'arc.mojom.BluetoothInstance_OnLEConnectionStateChange_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connected', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec, 'arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_Params', [
      mojo.internal.StructField('old_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_addr', 8, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec, 'arc.mojom.BluetoothInstance_OnSearchComplete_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec, 'arc.mojom.BluetoothInstance_OnGetGattDB_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('db', 8, 0, mojo.internal.Array(arc.mojom.BluetoothGattDBElementSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec, 'arc.mojom.BluetoothInstance_OnGattNotify_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, arc.mojom.BluetoothGattServiceIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('char_id', 16, 0, arc.mojom.BluetoothGattIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('is_notify', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec, 'arc.mojom.BluetoothInstance_OnServiceChanged_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattRead_Params', [
      mojo.internal.StructField('address', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribute_handle', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_long', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('attribute_type', 24, 0, arc.mojom.BluetoothGattDBAttributeTypeSpec.$, null, false, 9, undefined),
    ],
    [[0, 32], [9, 40]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattRead_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattRead_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattWrite_Params', [
      mojo.internal.StructField('address', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('attribute_handle', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('attribute_type', 24, 0, arc.mojom.BluetoothGattDBAttributeTypeSpec.$, null, false, 9, undefined),
      mojo.internal.StructField('is_prepare', 32, 0, mojo.internal.Bool, false, false, 12, undefined),
    ],
    [[0, 32], [9, 40], [12, 48]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattExecuteWrite_Params', [
      mojo.internal.StructField('address', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('execute', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParamsSpec, 'arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothGattStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec, 'arc.mojom.BluetoothInstance_OnMTUReceived_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mtu', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec, 'arc.mojom.BluetoothInstance_OnGetSdpRecords_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.BluetoothStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_addr', 8, 0, arc.mojom.BluetoothAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_uuid', 16, 0, arc.mojom.BluetoothUUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('records', 24, 0, mojo.internal.Array(arc.mojom.BluetoothSdpRecordSpec.$, false), null, false, 0, undefined),
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
      [host_remote],
      false);
  }

  onAdapterProperties(status, properties) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec,
      null,
      [status, properties],
      false);
  }

  onDeviceFound(properties) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec,
      null,
      [properties],
      false);
  }

  onDevicePropertiesChanged(remote_addr, properties) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec,
      null,
      [remote_addr, properties],
      false);
  }

  onDiscoveryStateChanged(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  onBondStateChanged(status, remote_addr, state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec,
      null,
      [status, remote_addr, state],
      false);
  }

  onConnectionStateChanged(remote_addr, device_type, connected) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec,
      null,
      [remote_addr, device_type, connected],
      false);
  }

  onLEDeviceFound(addr, rssi, eir) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec,
      null,
      [addr, rssi, eir],
      false);
  }

  onLEConnectionStateChange(remote_addr, connected) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec,
      null,
      [remote_addr, connected],
      false);
  }

  onLEDeviceAddressChange(old_addr, new_addr) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec,
      null,
      [old_addr, new_addr],
      false);
  }

  onSearchComplete(remote_addr, status) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec,
      null,
      [remote_addr, status],
      false);
  }

  onGetGattDB(remote_addr, db) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec,
      null,
      [remote_addr, db],
      false);
  }

  onGattNotify(remote_addr, service_id, char_id, is_notify, value) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec,
      null,
      [remote_addr, service_id, char_id, is_notify, value],
      false);
  }

  onServiceChanged(remote_addr) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec,
      null,
      [remote_addr],
      false);
  }

  requestGattRead(address, attribute_handle, offset, is_long, attribute_type) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec,
      arc.mojom.BluetoothInstance_RequestGattRead_ResponseParamsSpec,
      [address, attribute_handle, offset, is_long, attribute_type],
      false);
  }

  requestGattWrite(address, attribute_handle, offset, value, attribute_type, is_prepare) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec,
      arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParamsSpec,
      [address, attribute_handle, offset, value, attribute_type, is_prepare],
      false);
  }

  requestGattExecuteWrite(address, execute) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec,
      arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParamsSpec,
      [address, execute],
      false);
  }

  onMTUReceived(remote_addr, mtu) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec,
      null,
      [remote_addr, mtu],
      false);
  }

  onGetSdpRecords(status, remote_addr, target_uuid, records) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec,
      null,
      [status, remote_addr, target_uuid, records],
      false);
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

arc.mojom.BluetoothInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(18, 0); // Default ordinal 18 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(3, 2); // Default ordinal 3 -> Index 2
    this.ordinalMap.set(22, 3); // Default ordinal 22 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(23, 6); // Default ordinal 23 -> Index 6
    this.ordinalMap.set(21, 7); // Default ordinal 21 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(16, 9); // Default ordinal 16 -> Index 9
    this.ordinalMap.set(9, 10); // Default ordinal 9 -> Index 10
    this.ordinalMap.set(10, 11); // Default ordinal 10 -> Index 11
    this.ordinalMap.set(13, 12); // Default ordinal 13 -> Index 12
    this.ordinalMap.set(24, 13); // Default ordinal 24 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(20, 16); // Default ordinal 20 -> Index 16
    this.ordinalMap.set(19, 17); // Default ordinal 19 -> Index 17
    this.ordinalMap.set(17, 18); // Default ordinal 17 -> Index 18
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAdapterProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAdapterProperties (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDeviceFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceFound (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnDevicePropertiesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDevicePropertiesChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnDiscoveryStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDiscoveryStateChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnBondStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBondStateChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnConnectionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionStateChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnLEDeviceFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLEDeviceFound (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnLEConnectionStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLEConnectionStateChange (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnLEDeviceAddressChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLEDeviceAddressChange (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnSearchComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSearchComplete (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnGetGattDB
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGetGattDB (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnGattNotify
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGattNotify (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnServiceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServiceChanged (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RequestGattRead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGattRead (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RequestGattWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGattWrite (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RequestGattExecuteWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGattExecuteWrite (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OnMTUReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMTUReceived (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnGetSdpRecords
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGetSdpRecords (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnAdapterProperties_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAdapterProperties');
          const result = this.impl.onAdapterProperties(params.status, params.properties);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnDeviceFound_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceFound');
          const result = this.impl.onDeviceFound(params.properties);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnDevicePropertiesChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDevicePropertiesChanged');
          const result = this.impl.onDevicePropertiesChanged(params.remote_addr, params.properties);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnDiscoveryStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDiscoveryStateChanged');
          const result = this.impl.onDiscoveryStateChanged(params.state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnBondStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBondStateChanged');
          const result = this.impl.onBondStateChanged(params.status, params.remote_addr, params.state);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnConnectionStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnectionStateChanged');
          const result = this.impl.onConnectionStateChanged(params.remote_addr, params.device_type, params.connected);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnLEDeviceFound_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLEDeviceFound');
          const result = this.impl.onLEDeviceFound(params.addr, params.rssi, params.eir);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnLEConnectionStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLEConnectionStateChange');
          const result = this.impl.onLEConnectionStateChange(params.remote_addr, params.connected);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnLEDeviceAddressChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLEDeviceAddressChange');
          const result = this.impl.onLEDeviceAddressChange(params.old_addr, params.new_addr);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnSearchComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSearchComplete');
          const result = this.impl.onSearchComplete(params.remote_addr, params.status);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnGetGattDB_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGetGattDB');
          const result = this.impl.onGetGattDB(params.remote_addr, params.db);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnGattNotify_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGattNotify');
          const result = this.impl.onGattNotify(params.remote_addr, params.service_id, params.char_id, params.is_notify, params.value);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnServiceChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onServiceChanged');
          const result = this.impl.onServiceChanged(params.remote_addr);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_RequestGattRead_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestGattRead');
          const result = this.impl.requestGattRead(params.address, params.attribute_handle, params.offset, params.is_long, params.attribute_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothInstance_RequestGattRead_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_RequestGattWrite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestGattWrite');
          const result = this.impl.requestGattWrite(params.address, params.attribute_handle, params.offset, params.value, params.attribute_type, params.is_prepare);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothInstance_RequestGattWrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestGattExecuteWrite');
          const result = this.impl.requestGattExecuteWrite(params.address, params.execute);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BluetoothInstance_RequestGattExecuteWrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnMTUReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMTUReceived');
          const result = this.impl.onMTUReceived(params.remote_addr, params.mtu);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.BluetoothInstance_OnGetSdpRecords_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGetSdpRecords');
          const result = this.impl.onGetSdpRecords(params.status, params.remote_addr, params.target_uuid, params.records);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.BluetoothInstanceReceiver = arc.mojom.BluetoothInstanceReceiver;

arc.mojom.BluetoothInstancePtr = arc.mojom.BluetoothInstanceRemote;
arc.mojom.BluetoothInstanceRequest = arc.mojom.BluetoothInstancePendingReceiver;

