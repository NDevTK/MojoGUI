// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom
// Module: ash.bluetooth_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.bluetooth_config = ash.bluetooth_config || {};
ash.bluetooth_config.mojom = ash.bluetooth_config.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

ash.bluetooth_config.mojom.BluetoothSystemStateSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.BluetoothModificationStateSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.AudioOutputCapabilitySpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.DeviceConnectionStateSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.PairingResultSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.BatteryPropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.DeviceBatteryInfoSpec = { $: {} };
ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec = { $: {} };
ash.bluetooth_config.mojom.DeviceImageInfoSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.SystemPropertiesObserver = {};
ash.bluetooth_config.mojom.SystemPropertiesObserver.$interfaceName = 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver = {};
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.$interfaceName = 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver = {};
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.$interfaceName = 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.KeyEnteredHandler = {};
ash.bluetooth_config.mojom.KeyEnteredHandler.$interfaceName = 'ash.bluetooth_config.mojom.KeyEnteredHandler';
ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate = {};
ash.bluetooth_config.mojom.DevicePairingDelegate.$interfaceName = 'ash.bluetooth_config.mojom.DevicePairingDelegate';
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler = {};
ash.bluetooth_config.mojom.DevicePairingHandler.$interfaceName = 'ash.bluetooth_config.mojom.DevicePairingHandler';
ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate = {};
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.$interfaceName = 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig = {};
ash.bluetooth_config.mojom.CrosBluetoothConfig.$interfaceName = 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec = { $: {} };

ash.bluetooth_config.mojom.kDeviceNicknameCharacterLimit = 32;

// Enum: BluetoothSystemState
ash.bluetooth_config.mojom.BluetoothSystemState = {
  kUnavailable: 0,
  kDisabled: 1,
  kDisabling: 2,
  kEnabled: 3,
  kEnabling: 4,
};

// Enum: BluetoothModificationState
ash.bluetooth_config.mojom.BluetoothModificationState = {
  kCannotModifyBluetooth: 0,
  kCanModifyBluetooth: 1,
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
  kNotCapableOfAudioOutput: 0,
  kCapableOfAudioOutput: 1,
};

// Enum: DeviceConnectionState
ash.bluetooth_config.mojom.DeviceConnectionState = {
  kNotConnected: 0,
  kConnecting: 1,
  kConnected: 2,
};

// Enum: PairingResult
ash.bluetooth_config.mojom.PairingResult = {
  kSuccess: 0,
  kAuthFailed: 1,
  kNonAuthFailure: 2,
};

// Struct: BatteryProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BatteryPropertiesSpec, 'ash.bluetooth_config.mojom.BatteryProperties', [
      mojo.internal.StructField('battery_percentage', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceBatteryInfo
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DeviceBatteryInfoSpec, 'ash.bluetooth_config.mojom.DeviceBatteryInfo', [
      mojo.internal.StructField('default_properties', 0, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('left_bud_info', 8, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('right_bud_info', 16, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('case_info', 24, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TrueWirelessImageInfo
mojo.internal.Struct(
    ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec, 'ash.bluetooth_config.mojom.TrueWirelessImageInfo', [
      mojo.internal.StructField('left_bud_image_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right_bud_image_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('case_image_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceImageInfo
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DeviceImageInfoSpec, 'ash.bluetooth_config.mojom.DeviceImageInfo', [
      mojo.internal.StructField('default_image_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('true_wireless_images', 8, 0, ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothDeviceProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceProperties', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('public_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 24, 0, ash.bluetooth_config.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_capability', 32, 0, ash.bluetooth_config.mojom.AudioOutputCapabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('battery_info', 40, 0, ash.bluetooth_config.mojom.DeviceBatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('image_info', 48, 0, ash.bluetooth_config.mojom.DeviceImageInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connection_state', 56, 0, ash.bluetooth_config.mojom.DeviceConnectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_blocked_by_policy', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: PairedBluetoothDeviceProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec, 'ash.bluetooth_config.mojom.PairedBluetoothDeviceProperties', [
      mojo.internal.StructField('device_properties', 0, 0, ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nickname', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothSystemProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec, 'ash.bluetooth_config.mojom.BluetoothSystemProperties', [
      mojo.internal.StructField('system_state', 0, 0, ash.bluetooth_config.mojom.BluetoothSystemStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modification_state', 8, 0, ash.bluetooth_config.mojom.BluetoothModificationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('paired_devices', 16, 0, mojo.internal.Array(ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SystemPropertiesObserver
mojo.internal.Struct(
    ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec, 'ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_Params', [
      mojo.internal.StructField('properties', 0, 0, ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.SystemPropertiesObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.SystemPropertiesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.SystemPropertiesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPropertiesUpdated(properties) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec,
      null,
      [properties],
      false);
  }

};

ash.bluetooth_config.mojom.SystemPropertiesObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.SystemPropertiesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.SystemPropertiesObserver',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPropertiesUpdated(params.properties);
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver = ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver;

ash.bluetooth_config.mojom.SystemPropertiesObserverPtr = ash.bluetooth_config.mojom.SystemPropertiesObserverRemote;
ash.bluetooth_config.mojom.SystemPropertiesObserverRequest = ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver;


// Interface: BluetoothDeviceStatusObserver
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_Params', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_Params', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_Params', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDevicePaired(device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec,
      null,
      [device],
      false);
  }

  onDeviceConnected(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec,
      null,
      [device],
      false);
  }

  onDeviceDisconnected(device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec,
      null,
      [device],
      false);
  }

};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDevicePaired(params.device);
          break;
        }
        case 1: {
          const params = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceConnected(params.device);
          break;
        }
        case 2: {
          const params = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceDisconnected(params.device);
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver;

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPtr = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote;
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRequest = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver;


// Interface: DiscoverySessionStatusObserver
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec, 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_Params', [
      mojo.internal.StructField('has_at_least_one_discovery_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHasAtLeastOneDiscoverySessionChanged(has_at_least_one_discovery_session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec,
      null,
      [has_at_least_one_discovery_session],
      false);
  }

};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHasAtLeastOneDiscoverySessionChanged(params.has_at_least_one_discovery_session);
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver;

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPtr = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote;
ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRequest = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver;


// Interface: KeyEnteredHandler
mojo.internal.Struct(
    ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec, 'ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_Params', [
      mojo.internal.StructField('num_keys_entered', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.KeyEnteredHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.KeyEnteredHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.KeyEnteredHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.KeyEnteredHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleKeyEntered(num_keys_entered) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec,
      null,
      [num_keys_entered],
      false);
  }

};

ash.bluetooth_config.mojom.KeyEnteredHandler.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.KeyEnteredHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.KeyEnteredHandler',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleKeyEntered(params.num_keys_entered);
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver = ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver;

ash.bluetooth_config.mojom.KeyEnteredHandlerPtr = ash.bluetooth_config.mojom.KeyEnteredHandlerRemote;
ash.bluetooth_config.mojom.KeyEnteredHandlerRequest = ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver;


// Interface: DevicePairingDelegate
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParams', [
      mojo.internal.StructField('pin_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParams', [
      mojo.internal.StructField('passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_Params', [
      mojo.internal.StructField('pin_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.bluetooth_config.mojom.KeyEnteredHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_Params', [
      mojo.internal.StructField('passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.bluetooth_config.mojom.KeyEnteredHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_Params', [
      mojo.internal.StructField('passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParams', [
      mojo.internal.StructField('confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParams', [
      mojo.internal.StructField('confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.DevicePairingDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.DevicePairingDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.DevicePairingDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPinCode() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec,
      [],
      false);
  }

  requestPasskey() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec,
      [],
      false);
  }

  displayPinCode(pin_code, handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec,
      null,
      [pin_code, handler],
      false);
  }

  displayPasskey(passkey, handler) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec,
      null,
      [passkey, handler],
      false);
  }

  confirmPasskey(passkey) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec,
      [passkey],
      false);
  }

  authorizePairing() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec,
      [],
      false);
  }

};

ash.bluetooth_config.mojom.DevicePairingDelegate.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.DevicePairingDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingDelegate',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.DevicePairingDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestPinCode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestPasskey();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.displayPinCode(params.pin_code, params.handler);
          break;
        }
        case 3: {
          const params = ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec.$.decode(message.payload);
          const result = this.impl.displayPasskey(params.passkey, params.handler);
          break;
        }
        case 4: {
          const params = ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec.$.decode(message.payload);
          const result = this.impl.confirmPasskey(params.passkey);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec.$.decode(message.payload);
          const result = this.impl.authorizePairing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.DevicePairingDelegateReceiver = ash.bluetooth_config.mojom.DevicePairingDelegateReceiver;

ash.bluetooth_config.mojom.DevicePairingDelegatePtr = ash.bluetooth_config.mojom.DevicePairingDelegateRemote;
ash.bluetooth_config.mojom.DevicePairingDelegateRequest = ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver;


// Interface: DevicePairingHandler
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 8, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DevicePairingDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.bluetooth_config.mojom.PairingResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_Params', [
      mojo.internal.StructField('device_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParams', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.DevicePairingHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.DevicePairingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.DevicePairingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pairDevice(device_id, delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec,
      [device_id, delegate],
      false);
  }

  fetchDevice(device_address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec,
      [device_address],
      false);
  }

};

ash.bluetooth_config.mojom.DevicePairingHandler.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.DevicePairingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingHandler',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.DevicePairingHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pairDevice(params.device_id, params.delegate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchDevice(params.device_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.DevicePairingHandlerReceiver = ash.bluetooth_config.mojom.DevicePairingHandlerReceiver;

ash.bluetooth_config.mojom.DevicePairingHandlerPtr = ash.bluetooth_config.mojom.DevicePairingHandlerRemote;
ash.bluetooth_config.mojom.DevicePairingHandlerRequest = ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver;


// Interface: BluetoothDiscoveryDelegate
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DevicePairingHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_Params', [
      mojo.internal.StructField('discovered_devices', 0, 0, mojo.internal.Array(ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBluetoothDiscoveryStarted(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec,
      null,
      [handler],
      false);
  }

  onBluetoothDiscoveryStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onDiscoveredDevicesListChanged(discovered_devices) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec,
      null,
      [discovered_devices],
      false);
  }

};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBluetoothDiscoveryStarted(params.handler);
          break;
        }
        case 1: {
          const params = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBluetoothDiscoveryStopped();
          break;
        }
        case 2: {
          const params = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDiscoveredDevicesListChanged(params.discovered_devices);
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver;

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePtr = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote;
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRequest = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver;


// Interface: CrosBluetoothConfig
mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.SystemPropertiesObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_Params', [
      mojo.internal.StructField('is_using_bluetooth', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_Params', [
      mojo.internal.StructField('delegate', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('nickname', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfigRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.CrosBluetoothConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeSystemProperties(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeDeviceStatusChanges(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeDiscoverySessionStatusChanges(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec,
      null,
      [observer],
      false);
  }

  setBluetoothEnabledState(enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setBluetoothEnabledWithoutPersistence() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec,
      null,
      [],
      false);
  }

  setBluetoothHidDetectionInactive(is_using_bluetooth) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec,
      null,
      [is_using_bluetooth],
      false);
  }

  startDiscovery(delegate) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec,
      null,
      [delegate],
      false);
  }

  connect(device_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec,
      [device_id],
      false);
  }

  disconnect(device_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec,
      [device_id],
      false);
  }

  forget(device_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec,
      [device_id],
      false);
  }

  setDeviceNickname(device_id, nickname) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec,
      null,
      [device_id, nickname],
      false);
  }

};

ash.bluetooth_config.mojom.CrosBluetoothConfig.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.CrosBluetoothConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.CrosBluetoothConfig',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeSystemProperties(params.observer);
          break;
        }
        case 1: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeDeviceStatusChanges(params.observer);
          break;
        }
        case 2: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeDiscoverySessionStatusChanges(params.observer);
          break;
        }
        case 3: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBluetoothEnabledState(params.enabled);
          break;
        }
        case 4: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBluetoothEnabledWithoutPersistence();
          break;
        }
        case 5: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBluetoothHidDetectionInactive(params.is_using_bluetooth);
          break;
        }
        case 6: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startDiscovery(params.delegate);
          break;
        }
        case 7: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connect(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 8: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disconnect(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 9: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forget(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 10: {
          const params = ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDeviceNickname(params.device_id, params.nickname);
          break;
        }
      }
    });
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver = ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver;

ash.bluetooth_config.mojom.CrosBluetoothConfigPtr = ash.bluetooth_config.mojom.CrosBluetoothConfigRemote;
ash.bluetooth_config.mojom.CrosBluetoothConfigRequest = ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver;

