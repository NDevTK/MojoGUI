// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/emulation/fake_bluetooth.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};

bluetooth.mojom.CentralStateSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.WriteTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.GATTOperationTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.CharacteristicOperationTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.DescriptorOperationTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.AppearanceSpec = { $: {} };
bluetooth.mojom.PowerSpec = { $: {} };
bluetooth.mojom.ServiceDataMapSpec = { $: {} };
bluetooth.mojom.ScanRecordSpec = { $: {} };
bluetooth.mojom.ScanResultSpec = { $: {} };
bluetooth.mojom.CharacteristicPropertiesSpec = { $: {} };
bluetooth.mojom.FakeBluetooth = {};
bluetooth.mojom.FakeBluetooth.$interfaceName = 'bluetooth.mojom.FakeBluetooth';
bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral = {};
bluetooth.mojom.FakeCentral.$interfaceName = 'bluetooth.mojom.FakeCentral';
bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetState_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetState_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetClient_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentralClient = {};
bluetooth.mojom.FakeCentralClient.$interfaceName = 'bluetooth.mojom.FakeCentralClient';
bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec = { $: {} };

bluetooth.mojom.kHCISuccess = 0x0000;

bluetooth.mojom.kHCIConnectionTimeout = 0x0008;

bluetooth.mojom.kGATTSuccess = 0x0000;

bluetooth.mojom.kGATTInvalidHandle = 0x0001;

// Enum: CentralState
bluetooth.mojom.CentralState = {
  ABSENT: 0,
  POWERED_ON: 1,
  POWERED_OFF: 2,
};

// Enum: WriteType
bluetooth.mojom.WriteType = {
  kNone: 0,
  kWriteDefaultDeprecated: 1,
  kWriteWithResponse: 2,
  kWriteWithoutResponse: 3,
};

// Enum: GATTOperationType
bluetooth.mojom.GATTOperationType = {
  kConnect: 0,
  kDiscovery: 1,
};

// Enum: CharacteristicOperationType
bluetooth.mojom.CharacteristicOperationType = {
  kRead: 0,
  kWrite: 1,
  kSubscribeToNotifications: 2,
  kUnsubscribeFromNotifications: 3,
};

// Enum: DescriptorOperationType
bluetooth.mojom.DescriptorOperationType = {
  kRead: 0,
  kWrite: 1,
};

// Struct: Appearance
mojo.internal.Struct(
    bluetooth.mojom.AppearanceSpec, 'bluetooth.mojom.Appearance', [
      mojo.internal.StructField('has_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Power
mojo.internal.Struct(
    bluetooth.mojom.PowerSpec, 'bluetooth.mojom.Power', [
      mojo.internal.StructField('has_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceDataMap
mojo.internal.Struct(
    bluetooth.mojom.ServiceDataMapSpec, 'bluetooth.mojom.ServiceDataMap', [
      mojo.internal.StructField('service_data', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScanRecord
mojo.internal.Struct(
    bluetooth.mojom.ScanRecordSpec, 'bluetooth.mojom.ScanRecord', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('uuids', 8, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('appearance', 16, 0, bluetooth.mojom.AppearanceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tx_power', 24, 0, bluetooth.mojom.PowerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_data', 32, 0, mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
      mojo.internal.StructField('service_data', 40, 0, bluetooth.mojom.ServiceDataMapSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ScanResult
mojo.internal.Struct(
    bluetooth.mojom.ScanResultSpec, 'bluetooth.mojom.ScanResult', [
      mojo.internal.StructField('device_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rssi', 8, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('scan_record', 16, 0, bluetooth.mojom.ScanRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CharacteristicProperties
mojo.internal.Struct(
    bluetooth.mojom.CharacteristicPropertiesSpec, 'bluetooth.mojom.CharacteristicProperties', [
      mojo.internal.StructField('broadcast', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write_without_response', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('notify', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('indicate', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('authenticated_signed_writes', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('extended_properties', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FakeBluetooth
mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec, 'bluetooth.mojom.FakeBluetooth_SetLESupported_Params', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParamsSpec, 'bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec, 'bluetooth.mojom.FakeBluetooth_SimulateCentral_Params', [
      mojo.internal.StructField('state', 0, 0, bluetooth.mojom.CentralStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec, 'bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParams', [
      mojo.internal.StructField('fake_central', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.FakeCentralRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec, 'bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec, 'bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParams', [
      mojo.internal.StructField('consumed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.FakeBluetoothPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.FakeBluetoothRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.FakeBluetooth';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.FakeBluetoothPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.FakeBluetoothRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.FakeBluetoothRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLESupported(available) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParamsSpec,
      [available],
      false);
  }

  simulateCentral(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec,
      [state],
      false);
  }

  allResponsesConsumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.FakeBluetooth.getRemote = function() {
  let remote = new bluetooth.mojom.FakeBluetoothRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.FakeBluetooth',
    'context');
  return remote.$;
};

bluetooth.mojom.FakeBluetoothPtr = bluetooth.mojom.FakeBluetoothRemote;
bluetooth.mojom.FakeBluetoothRequest = bluetooth.mojom.FakeBluetoothPendingReceiver;


// Interface: FakeCentral
mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_data', 16, 0, mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('known_service_uuids', 24, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_Params', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.ScanResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetState_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetState_Params', [
      mojo.internal.StructField('state', 0, 0, bluetooth.mojom.CentralStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetState_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.GATTOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.CharacteristicOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 32, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('data', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.DescriptorOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 40, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('data', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeService_Params', [
      mojo.internal.StructField('peripheral_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeService_ResponseParams', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeService_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeCharacteristic_Params', [
      mojo.internal.StructField('characteristic_uuid', 0, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, bluetooth.mojom.CharacteristicPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParams', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_Params', [
      mojo.internal.StructField('identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeDescriptor_Params', [
      mojo.internal.StructField('descriptor_uuid', 0, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParams', [
      mojo.internal.StructField('descriptor_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_Params', [
      mojo.internal.StructField('descriptor_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_Params', [
      mojo.internal.StructField('gatt_code', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('characteristic_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_Params', [
      mojo.internal.StructField('gatt_code', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_Params', [
      mojo.internal.StructField('gatt_code', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_Params', [
      mojo.internal.StructField('gatt_code', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec, 'bluetooth.mojom.FakeCentral_IsNotifying_Params', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_IsNotifying_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_notifying', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_Params', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('write_type', 16, 0, bluetooth.mojom.WriteTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_Params', [
      mojo.internal.StructField('gatt_code', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_Params', [
      mojo.internal.StructField('gatt_code', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('descriptor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_Params', [
      mojo.internal.StructField('descriptor_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetClient_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(bluetooth.mojom.FakeCentralClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.FakeCentralPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.FakeCentralRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.FakeCentral';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.FakeCentralPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.FakeCentralRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.FakeCentralRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  simulatePreconnectedPeripheral(address, name, manufacturer_data, known_service_uuids) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParamsSpec,
      [address, name, manufacturer_data, known_service_uuids],
      false);
  }

  simulateAdvertisementReceived(result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParamsSpec,
      [result],
      false);
  }

  setState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.FakeCentral_SetState_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetState_ResponseParamsSpec,
      [state],
      false);
  }

  setNextGATTConnectionResponse(address, code) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec,
      [address, code],
      false);
  }

  setNextGATTDiscoveryResponse(address, code) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec,
      [address, code],
      false);
  }

  simulateGATTOperationResponse(type, address, code) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec,
      [type, address, code],
      false);
  }

  simulateGATTDisconnection(address) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec,
      [address],
      false);
  }

  simulateGATTServicesChanged(address) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec,
      [address],
      false);
  }

  simulateCharacteristicOperationResponse(type, characteristic_id, service_id, peripheral_address, code, data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec,
      [type, characteristic_id, service_id, peripheral_address, code, data],
      false);
  }

  simulateDescriptorOperationResponse(type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec,
      [type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data],
      false);
  }

  addFakeService(peripheral_address, service_uuid) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec,
      [peripheral_address, service_uuid],
      false);
  }

  removeFakeService(service_id, peripheral_address) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec,
      [service_id, peripheral_address],
      false);
  }

  addFakeCharacteristic(characteristic_uuid, properties, service_id, peripheral_address) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec,
      [characteristic_uuid, properties, service_id, peripheral_address],
      false);
  }

  removeFakeCharacteristic(identifier, service_id, peripheral_address) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec,
      [identifier, service_id, peripheral_address],
      false);
  }

  addFakeDescriptor(descriptor_uuid, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec,
      [descriptor_uuid, characteristic_id, service_id, peripheral_address],
      false);
  }

  removeFakeDescriptor(descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec,
      [descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextReadCharacteristicResponse(gatt_code, value, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec,
      [gatt_code, value, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextWriteCharacteristicResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextSubscribeToNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextUnsubscribeFromNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address],
      false);
  }

  isNotifying(characteristic_id, service_id, peripheral_address) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec,
      bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec,
      [characteristic_id, service_id, peripheral_address],
      false);
  }

  getLastWrittenCharacteristicValue(characteristic_id, service_id, peripheral_address) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec,
      bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec,
      [characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextReadDescriptorResponse(gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec,
      [gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextWriteDescriptorResponse(gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec,
      [gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  getLastWrittenDescriptorValue(descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec,
      bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec,
      [descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  setClient(client) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      bluetooth.mojom.FakeCentral_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

};

bluetooth.mojom.FakeCentral.getRemote = function() {
  let remote = new bluetooth.mojom.FakeCentralRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.FakeCentral',
    'context');
  return remote.$;
};

bluetooth.mojom.FakeCentralPtr = bluetooth.mojom.FakeCentralRemote;
bluetooth.mojom.FakeCentralRequest = bluetooth.mojom.FakeCentralPendingReceiver;


// Interface: FakeCentralClient
mojo.internal.Struct(
    bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec, 'bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.GATTOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec, 'bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.CharacteristicOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('write_type', 16, 0, bluetooth.mojom.WriteTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('characteristic_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec, 'bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.DescriptorOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

bluetooth.mojom.FakeCentralClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.FakeCentralClientRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.FakeCentralClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.FakeCentralClientPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.FakeCentralClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.FakeCentralClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchGATTOperationEvent(type, peripheral_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec,
      null,
      [type, peripheral_address],
      false);
  }

  dispatchCharacteristicOperationEvent(type, data, write_type, characteristic_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec,
      null,
      [type, data, write_type, characteristic_id],
      false);
  }

  dispatchDescriptorOperationEvent(type, data, descriptor_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec,
      null,
      [type, data, descriptor_id],
      false);
  }

};

bluetooth.mojom.FakeCentralClient.getRemote = function() {
  let remote = new bluetooth.mojom.FakeCentralClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.FakeCentralClient',
    'context');
  return remote.$;
};

bluetooth.mojom.FakeCentralClientPtr = bluetooth.mojom.FakeCentralClientRemote;
bluetooth.mojom.FakeCentralClientRequest = bluetooth.mojom.FakeCentralClientPendingReceiver;

