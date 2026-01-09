// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom
// Module: ash.bluetooth_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.bluetooth_config = ash.bluetooth_config || {};
ash.bluetooth_config.mojom = ash.bluetooth_config.mojom || {};


// Enum: BluetoothSystemState
ash.bluetooth_config.mojom.BluetoothSystemState = {
};

// Enum: BluetoothModificationState
ash.bluetooth_config.mojom.BluetoothModificationState = {
  and: 0,
  or: 1,
};

// Enum: DeviceType
ash.bluetooth_config.mojom.DeviceType = {
  kUnknown: 0,
  kComputer: 1,
  kPhone: 2,
  kHeadset: 3,
  kVideoCamera: 4,
  kGameController: 5,
  kKeyboard: 6,
  kKeyboardMouseCombo: 7,
  kMouse: 8,
  kTablet: 9,
};

// Enum: AudioOutputCapability
ash.bluetooth_config.mojom.AudioOutputCapability = {
  Bluetooth: 0,
};

// Enum: DeviceConnectionState
ash.bluetooth_config.mojom.DeviceConnectionState = {
  kNotConnected: 0,
  kConnecting: 1,
  kConnected: 2,
};

// Enum: PairingResult
ash.bluetooth_config.mojom.PairingResult = {
  either: 0,
};

// Struct: BatteryProperties
ash.bluetooth_config.mojom.BatteryProperties = class {
  constructor(values = {}) {
    this.battery_percentage = values.battery_percentage !== undefined ? values.battery_percentage : 0;
  }
};

// Struct: DeviceBatteryInfo
ash.bluetooth_config.mojom.DeviceBatteryInfo = class {
  constructor(values = {}) {
    this.case_info = values.case_info !== undefined ? values.case_info : null;
  }
};

// Struct: TrueWirelessImageInfo
ash.bluetooth_config.mojom.TrueWirelessImageInfo = class {
  constructor(values = {}) {
    this.case_image_url = values.case_image_url !== undefined ? values.case_image_url : null;
  }
};

// Struct: DeviceImageInfo
ash.bluetooth_config.mojom.DeviceImageInfo = class {
  constructor(values = {}) {
    this.true_wireless_images = values.true_wireless_images !== undefined ? values.true_wireless_images : null;
  }
};

// Struct: BluetoothDeviceProperties
ash.bluetooth_config.mojom.BluetoothDeviceProperties = class {
  constructor(values = {}) {
    this.address = values.address !== undefined ? values.address : "";
    this.public_name = values.public_name !== undefined ? values.public_name : "";
    this.is_blocked_by_policy = values.is_blocked_by_policy !== undefined ? values.is_blocked_by_policy : false;
  }
};

// Struct: PairedBluetoothDeviceProperties
ash.bluetooth_config.mojom.PairedBluetoothDeviceProperties = class {
  constructor(values = {}) {
    this.nickname = values.nickname !== undefined ? values.nickname : "";
  }
};

// Struct: BluetoothSystemProperties
ash.bluetooth_config.mojom.BluetoothSystemProperties = class {
  constructor(values = {}) {
    this.paired_devices = values.paired_devices !== undefined ? values.paired_devices : [];
  }
};

// Interface: SystemPropertiesObserver
ash.bluetooth_config.mojom.SystemPropertiesObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
  }

  changes(disconnected) {
    // Method: changes
    // Call: changes(disconnected)
  }

  onPropertiesUpdated(properties) {
    // Method: OnPropertiesUpdated
    // Call: OnPropertiesUpdated(properties)
  }

};

ash.bluetooth_config.mojom.SystemPropertiesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothDeviceStatusObserver
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
  }

  onDevicePaired(device) {
    // Method: OnDevicePaired
    // Call: OnDevicePaired(device)
  }

  onDeviceConnected(device) {
    // Method: OnDeviceConnected
    // Call: OnDeviceConnected(device)
  }

  onDeviceDisconnected(device) {
    // Method: OnDeviceDisconnected
    // Call: OnDeviceDisconnected(device)
  }

};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DiscoverySessionStatusObserver
ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
  }

  onHasAtLeastOneDiscoverySessionChanged(has_at_least_one_discovery_session) {
    // Method: OnHasAtLeastOneDiscoverySessionChanged
    // Call: OnHasAtLeastOneDiscoverySessionChanged(has_at_least_one_discovery_session)
  }

};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyEnteredHandler
ash.bluetooth_config.mojom.KeyEnteredHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.KeyEnteredHandler';
  }

  handleKeyEntered() {
    // Method: HandleKeyEntered
    // Call: HandleKeyEntered()
  }

  handleKeyEntered() {
    // Method: HandleKeyEntered
    // Call: HandleKeyEntered()
  }

  handleKeyEntered(num_keys_entered) {
    // Method: HandleKeyEntered
    // Call: HandleKeyEntered(num_keys_entered)
  }

};

ash.bluetooth_config.mojom.KeyEnteredHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevicePairingDelegate
ash.bluetooth_config.mojom.DevicePairingDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.DevicePairingDelegate';
  }

  requestPinCode() {
    // Method: RequestPinCode
    return new Promise((resolve) => {
      // Call: RequestPinCode()
      resolve({});
    });
  }

  requestPasskey() {
    // Method: RequestPasskey
    return new Promise((resolve) => {
      // Call: RequestPasskey()
      resolve({});
    });
  }

  displayPinCode(pin_code, handler) {
    // Method: DisplayPinCode
    // Call: DisplayPinCode(pin_code, handler)
  }

  displayPasskey(passkey, handler) {
    // Method: DisplayPasskey
    // Call: DisplayPasskey(passkey, handler)
  }

  confirmPasskey(passkey) {
    // Method: ConfirmPasskey
    return new Promise((resolve) => {
      // Call: ConfirmPasskey(passkey)
      resolve({});
    });
  }

  authorizePairing() {
    // Method: AuthorizePairing
    return new Promise((resolve) => {
      // Call: AuthorizePairing()
      resolve({});
    });
  }

};

ash.bluetooth_config.mojom.DevicePairingDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevicePairingHandler
ash.bluetooth_config.mojom.DevicePairingHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.DevicePairingHandler';
  }

  pairDevice(device_id, delegate) {
    // Method: PairDevice
    return new Promise((resolve) => {
      // Call: PairDevice(device_id, delegate)
      resolve({});
    });
  }

  fetchDevice(device_address) {
    // Method: FetchDevice
    return new Promise((resolve) => {
      // Call: FetchDevice(device_address)
      resolve({});
    });
  }

};

ash.bluetooth_config.mojom.DevicePairingHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothDiscoveryDelegate
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
  }

  onBluetoothDiscoveryStarted(handler) {
    // Method: OnBluetoothDiscoveryStarted
    // Call: OnBluetoothDiscoveryStarted(handler)
  }

  onBluetoothDiscoveryStopped() {
    // Method: OnBluetoothDiscoveryStopped
    // Call: OnBluetoothDiscoveryStopped()
  }

  onDiscoveredDevicesListChanged(discovered_devices) {
    // Method: OnDiscoveredDevicesListChanged
    // Call: OnDiscoveredDevicesListChanged(discovered_devices)
  }

};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosBluetoothConfig
ash.bluetooth_config.mojom.CrosBluetoothConfigPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
  }

  onPropertiesUpdated() {
    // Method: OnPropertiesUpdated
    // Call: OnPropertiesUpdated()
  }

  observeSystemProperties(observer) {
    // Method: ObserveSystemProperties
    // Call: ObserveSystemProperties(observer)
  }

  onDevicePaired() {
    // Method: OnDevicePaired
    // Call: OnDevicePaired()
  }

  observeDeviceStatusChanges(observer) {
    // Method: ObserveDeviceStatusChanges
    // Call: ObserveDeviceStatusChanges(observer)
  }

  onHasAtLeastOneDiscoverySessionChanged() {
    // Method: OnHasAtLeastOneDiscoverySessionChanged
    // Call: OnHasAtLeastOneDiscoverySessionChanged()
  }

  observeDiscoverySessionStatusChanges(observer) {
    // Method: ObserveDiscoverySessionStatusChanges
    // Call: ObserveDiscoverySessionStatusChanges(observer)
  }

  setBluetoothEnabledState(enabled) {
    // Method: SetBluetoothEnabledState
    // Call: SetBluetoothEnabledState(enabled)
  }

  setBluetoothEnabledWithoutPersistence() {
    // Method: SetBluetoothEnabledWithoutPersistence
    // Call: SetBluetoothEnabledWithoutPersistence()
  }

  setBluetoothHidDetectionInactive(is_using_bluetooth) {
    // Method: SetBluetoothHidDetectionInactive
    // Call: SetBluetoothHidDetectionInactive(is_using_bluetooth)
  }

  startDiscovery(delegate) {
    // Method: StartDiscovery
    // Call: StartDiscovery(delegate)
  }

  connect(device_id) {
    // Method: Connect
    return new Promise((resolve) => {
      // Call: Connect(device_id)
      resolve({});
    });
  }

  disconnect(device_id) {
    // Method: Disconnect
    return new Promise((resolve) => {
      // Call: Disconnect(device_id)
      resolve({});
    });
  }

  forget(device_id) {
    // Method: Forget
    return new Promise((resolve) => {
      // Call: Forget(device_id)
      resolve({});
    });
  }

  setDeviceNickname(device_id, nickname) {
    // Method: SetDeviceNickname
    // Call: SetDeviceNickname(device_id, nickname)
  }

};

ash.bluetooth_config.mojom.CrosBluetoothConfigRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
