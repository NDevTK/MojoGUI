// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom
// Module: ash.bluetooth_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.bluetooth_config = ash.bluetooth_config || {};
ash.bluetooth_config.bluetooth_config.mojom = ash.bluetooth_config.bluetooth_config.mojom || {};
var url = url || {};


ash.bluetooth_config.bluetooth_config.mojom.mojom.kDeviceNicknameCharacterLimit = 32;

// Enum: BluetoothSystemState
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothSystemState = {
  kUnavailable: 0,
  kDisabled: 1,
  kDisabling: 2,
  kEnabled: 3,
  kEnabling: 4,
};
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothSystemStateSpec = { $: mojo.internal.Enum() };

// Enum: BluetoothModificationState
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothModificationState = {
  kCannotModifyBluetooth: 0,
  kCanModifyBluetooth: 1,
};
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothModificationStateSpec = { $: mojo.internal.Enum() };

// Enum: DeviceType
ash.bluetooth_config.bluetooth_config.mojom.mojom.DeviceType = {
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
ash.bluetooth_config.bluetooth_config.mojom.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: AudioOutputCapability
ash.bluetooth_config.bluetooth_config.mojom.mojom.AudioOutputCapability = {
  kNotCapableOfAudioOutput: 0,
  kCapableOfAudioOutput: 1,
};
ash.bluetooth_config.bluetooth_config.mojom.mojom.AudioOutputCapabilitySpec = { $: mojo.internal.Enum() };

// Enum: DeviceConnectionState
ash.bluetooth_config.bluetooth_config.mojom.mojom.DeviceConnectionState = {
  kNotConnected: 0,
  kConnecting: 1,
  kConnected: 2,
};
ash.bluetooth_config.bluetooth_config.mojom.mojom.DeviceConnectionStateSpec = { $: mojo.internal.Enum() };

// Enum: PairingResult
ash.bluetooth_config.bluetooth_config.mojom.mojom.PairingResult = {
  kSuccess: 0,
  kAuthFailed: 1,
  kNonAuthFailure: 2,
};
ash.bluetooth_config.bluetooth_config.mojom.mojom.PairingResultSpec = { $: mojo.internal.Enum() };

// Struct: BatteryProperties
ash.bluetooth_config.bluetooth_config.mojom.mojom.BatteryPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BatteryProperties',
      packedSize: 16,
      fields: [
        { name: 'battery_percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DeviceBatteryInfo
ash.bluetooth_config.bluetooth_config.mojom.mojom.DeviceBatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DeviceBatteryInfo',
      packedSize: 40,
      fields: [
        { name: 'default_properties', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BatteryPropertiesSpec, nullable: true, minVersion: 0 },
        { name: 'left_bud_info', packedOffset: 8, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BatteryPropertiesSpec, nullable: true, minVersion: 0 },
        { name: 'right_bud_info', packedOffset: 16, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BatteryPropertiesSpec, nullable: true, minVersion: 0 },
        { name: 'case_info', packedOffset: 24, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BatteryPropertiesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TrueWirelessImageInfo
ash.bluetooth_config.bluetooth_config.mojom.mojom.TrueWirelessImageInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.TrueWirelessImageInfo',
      packedSize: 32,
      fields: [
        { name: 'left_bud_image_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'right_bud_image_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'case_image_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeviceImageInfo
ash.bluetooth_config.bluetooth_config.mojom.mojom.DeviceImageInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DeviceImageInfo',
      packedSize: 24,
      fields: [
        { name: 'default_image_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'true_wireless_images', packedOffset: 8, packedBitOffset: 0, type: ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BluetoothDeviceProperties
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDevicePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDeviceProperties',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'public_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'device_type', packedOffset: 40, packedBitOffset: 0, type: ash.bluetooth_config.mojom.DeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'audio_capability', packedOffset: 44, packedBitOffset: 0, type: ash.bluetooth_config.mojom.AudioOutputCapabilitySpec, nullable: false, minVersion: 0 },
        { name: 'battery_info', packedOffset: 24, packedBitOffset: 0, type: ash.bluetooth_config.mojom.DeviceBatteryInfoSpec, nullable: true, minVersion: 0 },
        { name: 'image_info', packedOffset: 32, packedBitOffset: 0, type: ash.bluetooth_config.mojom.DeviceImageInfoSpec, nullable: true, minVersion: 0 },
        { name: 'connection_state', packedOffset: 48, packedBitOffset: 0, type: ash.bluetooth_config.mojom.DeviceConnectionStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_blocked_by_policy', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: PairedBluetoothDeviceProperties
ash.bluetooth_config.bluetooth_config.mojom.mojom.PairedBluetoothDevicePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.PairedBluetoothDeviceProperties',
      packedSize: 24,
      fields: [
        { name: 'device_properties', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'nickname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BluetoothSystemProperties
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothSystemPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothSystemProperties',
      packedSize: 24,
      fields: [
        { name: 'system_state', packedOffset: 8, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BluetoothSystemStateSpec, nullable: false, minVersion: 0 },
        { name: 'modification_state', packedOffset: 12, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BluetoothModificationStateSpec, nullable: false, minVersion: 0 },
        { name: 'paired_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: SystemPropertiesObserver
ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserver = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPropertiesUpdated(properties) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec,
      null,
      [properties]);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.SystemPropertiesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnPropertiesUpdated
ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.SystemPropertiesObserver.OnPropertiesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverPtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.SystemPropertiesObserverPendingReceiver;


// Interface: BluetoothDeviceStatusObserver
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDevicePaired(device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec,
      null,
      [device]);
  }

  onDeviceConnected(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec,
      null,
      [device]);
  }

  onDeviceDisconnected(device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec,
      null,
      [device]);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDevicePaired
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.OnDevicePaired_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceConnected
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.OnDeviceConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceDisconnected
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.OnDeviceDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverPtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDeviceStatusObserverPendingReceiver;


// Interface: DiscoverySessionStatusObserver
ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserver = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHasAtLeastOneDiscoverySessionChanged(has_at_least_one_discovery_session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec,
      null,
      [has_at_least_one_discovery_session]);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnHasAtLeastOneDiscoverySessionChanged
ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.OnHasAtLeastOneDiscoverySessionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_at_least_one_discovery_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverPtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.DiscoverySessionStatusObserverPendingReceiver;


// Interface: KeyEnteredHandler
ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandler = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.KeyEnteredHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleKeyEntered(num_keys_entered) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec,
      null,
      [num_keys_entered]);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandler.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.KeyEnteredHandler',
    'context');
  return remote.$;
};

// ParamsSpec for HandleKeyEntered
ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.KeyEnteredHandler.HandleKeyEntered_Params',
      packedSize: 16,
      fields: [
        { name: 'num_keys_entered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerPtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.KeyEnteredHandlerPendingReceiver;


// Interface: DevicePairingDelegate
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegatePendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPinCode() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec,
      []);
  }

  requestPasskey() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec,
      []);
  }

  displayPinCode(pin_code, handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec,
      null,
      [pin_code, handler]);
  }

  displayPasskey(passkey, handler) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec,
      null,
      [passkey, handler]);
  }

  confirmPasskey(passkey) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec,
      [passkey]);
  }

  authorizePairing() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec,
      []);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for RequestPinCode
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.RequestPinCode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.RequestPinCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pin_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestPasskey
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.RequestPasskey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.RequestPasskey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisplayPinCode
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.DisplayPinCode_Params',
      packedSize: 24,
      fields: [
        { name: 'pin_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.bluetooth_config.mojom.KeyEnteredHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DisplayPasskey
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.DisplayPasskey_Params',
      packedSize: 24,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.bluetooth_config.mojom.KeyEnteredHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ConfirmPasskey
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.ConfirmPasskey_Params',
      packedSize: 16,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.ConfirmPasskey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AuthorizePairing
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.AuthorizePairing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.AuthorizePairing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegatePtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegateRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegateRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingDelegatePendingReceiver;


// Interface: DevicePairingHandler
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pairDevice(device_id, delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_PairDevice_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec,
      [device_id, delegate]);
  }

  fetchDevice(device_address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_FetchDevice_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec,
      [device_address]);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingHandler',
    'context');
  return remote.$;
};

// ParamsSpec for PairDevice
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_PairDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.PairDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DevicePairingDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.PairDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.PairingResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchDevice
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_FetchDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.FetchDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.FetchDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerPtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.DevicePairingHandlerPendingReceiver;


// Interface: BluetoothDiscoveryDelegate
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegatePendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBluetoothDiscoveryStarted(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec,
      null,
      [handler]);
  }

  onBluetoothDiscoveryStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec,
      null,
      []);
  }

  onDiscoveredDevicesListChanged(discovered_devices) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec,
      null,
      [discovered_devices]);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for OnBluetoothDiscoveryStarted
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.OnBluetoothDiscoveryStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DevicePairingHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBluetoothDiscoveryStopped
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.OnBluetoothDiscoveryStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnDiscoveredDevicesListChanged
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.OnDiscoveredDevicesListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'discovered_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegatePtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegateRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegateRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.BluetoothDiscoveryDelegatePendingReceiver;


// Interface: CrosBluetoothConfig
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig = {};

ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeSystemProperties(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec,
      null,
      [observer]);
  }

  observeDeviceStatusChanges(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec,
      null,
      [observer]);
  }

  observeDiscoverySessionStatusChanges(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec,
      null,
      [observer]);
  }

  setBluetoothEnabledState(enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec,
      null,
      [enabled]);
  }

  setBluetoothEnabledWithoutPersistence() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec,
      null,
      []);
  }

  setBluetoothHidDetectionInactive(is_using_bluetooth) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec,
      null,
      [is_using_bluetooth]);
  }

  startDiscovery(delegate) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec,
      null,
      [delegate]);
  }

  connect(device_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Connect_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec,
      [device_id]);
  }

  disconnect(device_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec,
      [device_id]);
  }

  forget(device_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Forget_ParamsSpec,
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec,
      [device_id]);
  }

  setDeviceNickname(device_id, nickname) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec,
      null,
      [device_id, nickname]);
  }

};

ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig.getRemote = function() {
  let remote = new ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.CrosBluetoothConfig',
    'context');
  return remote.$;
};

// ParamsSpec for ObserveSystemProperties
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.ObserveSystemProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.SystemPropertiesObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDeviceStatusChanges
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.ObserveDeviceStatusChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDiscoverySessionStatusChanges
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.ObserveDiscoverySessionStatusChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBluetoothEnabledState
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.SetBluetoothEnabledState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBluetoothEnabledWithoutPersistence
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.SetBluetoothEnabledWithoutPersistence_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetBluetoothHidDetectionInactive
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.SetBluetoothHidDetectionInactive_Params',
      packedSize: 16,
      fields: [
        { name: 'is_using_bluetooth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDiscovery
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.StartDiscovery_Params',
      packedSize: 16,
      fields: [
        { name: 'delegate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Connect
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Connect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Disconnect
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Disconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Disconnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Forget
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Forget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Forget_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Forget_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeviceNickname
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.SetDeviceNickname_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'nickname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigPtr = ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigRemote;
ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigRequest = ash.bluetooth_config.bluetooth_config.mojom.mojom.CrosBluetoothConfigPendingReceiver;

