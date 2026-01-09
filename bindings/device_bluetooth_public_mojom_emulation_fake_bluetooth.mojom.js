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

// Struct: Appearance
bluetooth.mojom.Appearance = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: Power
bluetooth.mojom.Power = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: ServiceDataMap
bluetooth.mojom.ServiceDataMap = class {
  constructor(values = {}) {
    this.service_data = values.service_data !== undefined ? values.service_data : 0;
  }
};

// Struct: ScanRecord
bluetooth.mojom.ScanRecord = class {
  constructor(values = {}) {
    this.service_data = values.service_data !== undefined ? values.service_data : 0;
  }
};

// Struct: ScanResult
bluetooth.mojom.ScanResult = class {
  constructor(values = {}) {
    this.scan_record = values.scan_record !== undefined ? values.scan_record : 0;
  }
};

// Struct: CharacteristicProperties
bluetooth.mojom.CharacteristicProperties = class {
  constructor(values = {}) {
    this.extended_properties = values.extended_properties !== undefined ? values.extended_properties : false;
  }
};

// Interface: FakeBluetooth
bluetooth.mojom.FakeBluetoothPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.FakeBluetooth';
  }

  setLESupported(available) {
    // Method: SetLESupported
    // Call: SetLESupported(available)
  }

  simulateCentral(state) {
    // Method: SimulateCentral
    return new Promise((resolve) => {
      // Call: SimulateCentral(state)
      resolve({});
    });
  }

  allResponsesConsumed() {
    // Method: AllResponsesConsumed
    return new Promise((resolve) => {
      // Call: AllResponsesConsumed()
      resolve({});
    });
  }

};

bluetooth.mojom.FakeBluetoothRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FakeCentral
bluetooth.mojom.FakeCentralPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.FakeCentral';
  }

  simulatePreconnectedPeripheral(address, name, manufacturer_data, known_service_uuids) {
    // Method: SimulatePreconnectedPeripheral
    // Call: SimulatePreconnectedPeripheral(address, name, manufacturer_data, known_service_uuids)
  }

  simulateAdvertisementReceived(result) {
    // Method: SimulateAdvertisementReceived
    // Call: SimulateAdvertisementReceived(result)
  }

  setState(state) {
    // Method: SetState
    // Call: SetState(state)
  }

  setNextGATTConnectionResponse(address, code) {
    // Method: SetNextGATTConnectionResponse
    return new Promise((resolve) => {
      // Call: SetNextGATTConnectionResponse(address, code)
      resolve({});
    });
  }

  setNextGATTDiscoveryResponse(address, code) {
    // Method: SetNextGATTDiscoveryResponse
    return new Promise((resolve) => {
      // Call: SetNextGATTDiscoveryResponse(address, code)
      resolve({});
    });
  }

  simulateGATTOperationResponse(type, address, code) {
    // Method: SimulateGATTOperationResponse
    return new Promise((resolve) => {
      // Call: SimulateGATTOperationResponse(type, address, code)
      resolve({});
    });
  }

  simulateGATTDisconnection(address) {
    // Method: SimulateGATTDisconnection
    return new Promise((resolve) => {
      // Call: SimulateGATTDisconnection(address)
      resolve({});
    });
  }

  simulateGATTServicesChanged(address) {
    // Method: SimulateGATTServicesChanged
    return new Promise((resolve) => {
      // Call: SimulateGATTServicesChanged(address)
      resolve({});
    });
  }

  simulateCharacteristicOperationResponse(type, characteristic_id, service_id, peripheral_address, code, data) {
    // Method: SimulateCharacteristicOperationResponse
    return new Promise((resolve) => {
      // Call: SimulateCharacteristicOperationResponse(type, characteristic_id, service_id, peripheral_address, code, data)
      resolve({});
    });
  }

  simulateDescriptorOperationResponse(type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data) {
    // Method: SimulateDescriptorOperationResponse
    return new Promise((resolve) => {
      // Call: SimulateDescriptorOperationResponse(type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data)
      resolve({});
    });
  }

  addFakeService(peripheral_address, service_uuid) {
    // Method: AddFakeService
    return new Promise((resolve) => {
      // Call: AddFakeService(peripheral_address, service_uuid)
      resolve({});
    });
  }

  removeFakeService(service_id, peripheral_address) {
    // Method: RemoveFakeService
    return new Promise((resolve) => {
      // Call: RemoveFakeService(service_id, peripheral_address)
      resolve({});
    });
  }

  addFakeCharacteristic(characteristic_uuid, properties, service_id, peripheral_address) {
    // Method: AddFakeCharacteristic
    return new Promise((resolve) => {
      // Call: AddFakeCharacteristic(characteristic_uuid, properties, service_id, peripheral_address)
      resolve({});
    });
  }

  removeFakeCharacteristic(identifier, service_id, peripheral_address) {
    // Method: RemoveFakeCharacteristic
    return new Promise((resolve) => {
      // Call: RemoveFakeCharacteristic(identifier, service_id, peripheral_address)
      resolve({});
    });
  }

  addFakeDescriptor(descriptor_uuid, characteristic_id, service_id, peripheral_address) {
    // Method: AddFakeDescriptor
    return new Promise((resolve) => {
      // Call: AddFakeDescriptor(descriptor_uuid, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  removeFakeDescriptor(descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Method: RemoveFakeDescriptor
    return new Promise((resolve) => {
      // Call: RemoveFakeDescriptor(descriptor_id, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  setNextReadCharacteristicResponse(gatt_code, value, characteristic_id, service_id, peripheral_address) {
    // Method: SetNextReadCharacteristicResponse
    return new Promise((resolve) => {
      // Call: SetNextReadCharacteristicResponse(gatt_code, value, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  setNextWriteCharacteristicResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Method: SetNextWriteCharacteristicResponse
    return new Promise((resolve) => {
      // Call: SetNextWriteCharacteristicResponse(gatt_code, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  setNextSubscribeToNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Method: SetNextSubscribeToNotificationsResponse
    return new Promise((resolve) => {
      // Call: SetNextSubscribeToNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  setNextUnsubscribeFromNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    // Method: SetNextUnsubscribeFromNotificationsResponse
    return new Promise((resolve) => {
      // Call: SetNextUnsubscribeFromNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  isNotifying(characteristic_id, service_id, peripheral_address) {
    // Method: IsNotifying
    return new Promise((resolve) => {
      // Call: IsNotifying(characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  getLastWrittenCharacteristicValue(characteristic_id, service_id, peripheral_address) {
    // Method: GetLastWrittenCharacteristicValue
    return new Promise((resolve) => {
      // Call: GetLastWrittenCharacteristicValue(characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  setNextReadDescriptorResponse(gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Method: SetNextReadDescriptorResponse
    return new Promise((resolve) => {
      // Call: SetNextReadDescriptorResponse(gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  setNextWriteDescriptorResponse(gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Method: SetNextWriteDescriptorResponse
    return new Promise((resolve) => {
      // Call: SetNextWriteDescriptorResponse(gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  getLastWrittenDescriptorValue(descriptor_id, characteristic_id, service_id, peripheral_address) {
    // Method: GetLastWrittenDescriptorValue
    return new Promise((resolve) => {
      // Call: GetLastWrittenDescriptorValue(descriptor_id, characteristic_id, service_id, peripheral_address)
      resolve({});
    });
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

};

bluetooth.mojom.FakeCentralRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FakeCentralClient
bluetooth.mojom.FakeCentralClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'bluetooth.mojom.FakeCentralClient';
  }

  dispatchGATTOperationEvent(type, peripheral_address) {
    // Method: DispatchGATTOperationEvent
    // Call: DispatchGATTOperationEvent(type, peripheral_address)
  }

  dispatchCharacteristicOperationEvent(type, data, write_type, characteristic_id) {
    // Method: DispatchCharacteristicOperationEvent
    // Call: DispatchCharacteristicOperationEvent(type, data, write_type, characteristic_id)
  }

  dispatchDescriptorOperationEvent(type, data, descriptor_id) {
    // Method: DispatchDescriptorOperationEvent
    // Call: DispatchDescriptorOperationEvent(type, data, descriptor_id)
  }

};

bluetooth.mojom.FakeCentralClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
