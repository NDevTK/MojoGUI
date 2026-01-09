// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/emulation/fake_bluetooth.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};


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

// Interface: FakeBluetooth
bluetooth.mojom.FakeBluetooth = {};

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
      null,
      [available]);
  }

  simulateCentral(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec,
      [state]);
  }

  allResponsesConsumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec,
      []);
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

// ParamsSpec for SetLESupported
bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeBluetooth.SetLESupported_Params',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateCentral
bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeBluetooth.SimulateCentral_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeBluetooth.SimulateCentral_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fake_central', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AllResponsesConsumed
bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeBluetooth.AllResponsesConsumed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeBluetooth.AllResponsesConsumed_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'consumed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.FakeBluetoothPtr = bluetooth.mojom.FakeBluetoothRemote;
bluetooth.mojom.FakeBluetoothRequest = bluetooth.mojom.FakeBluetoothPendingReceiver;


// Interface: FakeCentral
bluetooth.mojom.FakeCentral = {};

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
      null,
      [address, name, manufacturer_data, known_service_uuids]);
  }

  simulateAdvertisementReceived(result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec,
      null,
      [result]);
  }

  setState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.FakeCentral_SetState_ParamsSpec,
      null,
      [state]);
  }

  setNextGATTConnectionResponse(address, code) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec,
      [address, code]);
  }

  setNextGATTDiscoveryResponse(address, code) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec,
      [address, code]);
  }

  simulateGATTOperationResponse(type, address, code) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec,
      [type, address, code]);
  }

  simulateGATTDisconnection(address) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec,
      [address]);
  }

  simulateGATTServicesChanged(address) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec,
      [address]);
  }

  simulateCharacteristicOperationResponse(type, characteristic_id, service_id, peripheral_address, code, data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec,
      [type, characteristic_id, service_id, peripheral_address, code, data]);
  }

  simulateDescriptorOperationResponse(type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec,
      [type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data]);
  }

  addFakeService(peripheral_address, service_uuid) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec,
      [peripheral_address, service_uuid]);
  }

  removeFakeService(service_id, peripheral_address) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec,
      [service_id, peripheral_address]);
  }

  addFakeCharacteristic(characteristic_uuid, properties, service_id, peripheral_address) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec,
      [characteristic_uuid, properties, service_id, peripheral_address]);
  }

  removeFakeCharacteristic(identifier, service_id, peripheral_address) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec,
      [identifier, service_id, peripheral_address]);
  }

  addFakeDescriptor(descriptor_uuid, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec,
      [descriptor_uuid, characteristic_id, service_id, peripheral_address]);
  }

  removeFakeDescriptor(descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec,
      [descriptor_id, characteristic_id, service_id, peripheral_address]);
  }

  setNextReadCharacteristicResponse(gatt_code, value, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec,
      [gatt_code, value, characteristic_id, service_id, peripheral_address]);
  }

  setNextWriteCharacteristicResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address]);
  }

  setNextSubscribeToNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address]);
  }

  setNextUnsubscribeFromNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address]);
  }

  isNotifying(characteristic_id, service_id, peripheral_address) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec,
      bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec,
      [characteristic_id, service_id, peripheral_address]);
  }

  getLastWrittenCharacteristicValue(characteristic_id, service_id, peripheral_address) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec,
      bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec,
      [characteristic_id, service_id, peripheral_address]);
  }

  setNextReadDescriptorResponse(gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec,
      [gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address]);
  }

  setNextWriteDescriptorResponse(gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec,
      [gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address]);
  }

  getLastWrittenDescriptorValue(descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec,
      bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec,
      [descriptor_id, characteristic_id, service_id, peripheral_address]);
  }

  setClient(client) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      bluetooth.mojom.FakeCentral_SetClient_ParamsSpec,
      null,
      [client]);
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

// ParamsSpec for SimulatePreconnectedPeripheral
bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulatePreconnectedPeripheral_Params',
      packedSize: 40,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'manufacturer_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'known_service_uuids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateAdvertisementReceived
bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateAdvertisementReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetState
bluetooth.mojom.FakeCentral_SetState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextGATTConnectionResponse
bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextGATTConnectionResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextGATTConnectionResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextGATTDiscoveryResponse
bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextGATTDiscoveryResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextGATTDiscoveryResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateGATTOperationResponse
bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateGATTOperationResponse_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateGATTOperationResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateGATTDisconnection
bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateGATTDisconnection_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateGATTDisconnection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateGATTServicesChanged
bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateGATTServicesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateGATTServicesChanged_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateCharacteristicOperationResponse
bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateCharacteristicOperationResponse_Params',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'code', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateCharacteristicOperationResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateDescriptorOperationResponse
bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateDescriptorOperationResponse_Params',
      packedSize: 64,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'descriptor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'code', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SimulateDescriptorOperationResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddFakeService
bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.AddFakeService_Params',
      packedSize: 24,
      fields: [
        { name: 'peripheral_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_uuid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.AddFakeService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveFakeService
bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.RemoveFakeService_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.RemoveFakeService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddFakeCharacteristic
bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.AddFakeCharacteristic_Params',
      packedSize: 40,
      fields: [
        { name: 'characteristic_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.AddFakeCharacteristic_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'characteristic_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveFakeCharacteristic
bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.RemoveFakeCharacteristic_Params',
      packedSize: 32,
      fields: [
        { name: 'identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.RemoveFakeCharacteristic_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddFakeDescriptor
bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.AddFakeDescriptor_Params',
      packedSize: 40,
      fields: [
        { name: 'descriptor_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.AddFakeDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'descriptor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveFakeDescriptor
bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.RemoveFakeDescriptor_Params',
      packedSize: 40,
      fields: [
        { name: 'descriptor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.RemoveFakeDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextReadCharacteristicResponse
bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextReadCharacteristicResponse_Params',
      packedSize: 48,
      fields: [
        { name: 'gatt_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextReadCharacteristicResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextWriteCharacteristicResponse
bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextWriteCharacteristicResponse_Params',
      packedSize: 40,
      fields: [
        { name: 'gatt_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextWriteCharacteristicResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextSubscribeToNotificationsResponse
bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextSubscribeToNotificationsResponse_Params',
      packedSize: 40,
      fields: [
        { name: 'gatt_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextSubscribeToNotificationsResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextUnsubscribeFromNotificationsResponse
bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextUnsubscribeFromNotificationsResponse_Params',
      packedSize: 40,
      fields: [
        { name: 'gatt_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextUnsubscribeFromNotificationsResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsNotifying
bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.IsNotifying_Params',
      packedSize: 32,
      fields: [
        { name: 'characteristic_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.IsNotifying_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_notifying', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLastWrittenCharacteristicValue
bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.GetLastWrittenCharacteristicValue_Params',
      packedSize: 32,
      fields: [
        { name: 'characteristic_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.GetLastWrittenCharacteristicValue_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'write_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextReadDescriptorResponse
bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextReadDescriptorResponse_Params',
      packedSize: 56,
      fields: [
        { name: 'gatt_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'descriptor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextReadDescriptorResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNextWriteDescriptorResponse
bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextWriteDescriptorResponse_Params',
      packedSize: 48,
      fields: [
        { name: 'gatt_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'descriptor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetNextWriteDescriptorResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLastWrittenDescriptorValue
bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.GetLastWrittenDescriptorValue_Params',
      packedSize: 40,
      fields: [
        { name: 'descriptor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.GetLastWrittenDescriptorValue_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetClient
bluetooth.mojom.FakeCentral_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentral.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.FakeCentralPtr = bluetooth.mojom.FakeCentralRemote;
bluetooth.mojom.FakeCentralRequest = bluetooth.mojom.FakeCentralPendingReceiver;


// Interface: FakeCentralClient
bluetooth.mojom.FakeCentralClient = {};

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
      [type, peripheral_address]);
  }

  dispatchCharacteristicOperationEvent(type, data, write_type, characteristic_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec,
      null,
      [type, data, write_type, characteristic_id]);
  }

  dispatchDescriptorOperationEvent(type, data, descriptor_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec,
      null,
      [type, data, descriptor_id]);
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

// ParamsSpec for DispatchGATTOperationEvent
bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentralClient.DispatchGATTOperationEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peripheral_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchCharacteristicOperationEvent
bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentralClient.DispatchCharacteristicOperationEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'write_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'characteristic_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchDescriptorOperationEvent
bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.FakeCentralClient.DispatchDescriptorOperationEvent_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'descriptor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bluetooth.mojom.FakeCentralClientPtr = bluetooth.mojom.FakeCentralClientRemote;
bluetooth.mojom.FakeCentralClientRequest = bluetooth.mojom.FakeCentralClientPendingReceiver;

