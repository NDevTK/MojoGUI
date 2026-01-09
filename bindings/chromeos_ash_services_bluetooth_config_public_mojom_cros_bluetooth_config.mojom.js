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

// Interface: SystemPropertiesObserver
ash.bluetooth_config.mojom.SystemPropertiesObserver = {};

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
      null,
      [properties],
      undefined,
      undefined
    );
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

// ParamsSpec for OnPropertiesUpdated
ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.SystemPropertiesObserver.OnPropertiesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.SystemPropertiesObserverPtr = ash.bluetooth_config.mojom.SystemPropertiesObserverRemote;
ash.bluetooth_config.mojom.SystemPropertiesObserverRequest = ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver;


// Interface: BluetoothDeviceStatusObserver
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver = {};

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
      null,
      [device],
      undefined,
      undefined
    );
  }

  onDeviceConnected(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec,
      null,
      null,
      [device],
      undefined,
      undefined
    );
  }

  onDeviceDisconnected(device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec,
      null,
      null,
      [device],
      undefined,
      undefined
    );
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

// ParamsSpec for OnDevicePaired
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.OnDevicePaired_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceConnected
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.OnDeviceConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceDisconnected
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.OnDeviceDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPtr = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote;
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRequest = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver;


// Interface: DiscoverySessionStatusObserver
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver = {};

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
      null,
      [has_at_least_one_discovery_session],
      undefined,
      undefined
    );
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

// ParamsSpec for OnHasAtLeastOneDiscoverySessionChanged
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.OnHasAtLeastOneDiscoverySessionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_at_least_one_discovery_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPtr = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote;
ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRequest = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver;


// Interface: KeyEnteredHandler
ash.bluetooth_config.mojom.KeyEnteredHandler = {};

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
      null,
      [num_keys_entered],
      undefined,
      undefined
    );
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

// ParamsSpec for HandleKeyEntered
ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.KeyEnteredHandler.HandleKeyEntered_Params',
      packedSize: 16,
      fields: [
        { name: 'num_keys_entered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.KeyEnteredHandlerPtr = ash.bluetooth_config.mojom.KeyEnteredHandlerRemote;
ash.bluetooth_config.mojom.KeyEnteredHandlerRequest = ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver;


// Interface: DevicePairingDelegate
ash.bluetooth_config.mojom.DevicePairingDelegate = {};

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
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  requestPasskey() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  displayPinCode(pin_code, handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec,
      null,
      null,
      [pin_code, handler],
      undefined,
      undefined
    );
  }

  displayPasskey(passkey, handler) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec,
      null,
      null,
      [passkey, handler],
      undefined,
      undefined
    );
  }

  confirmPasskey(passkey) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec,
      [passkey],
      undefined,
      undefined
    );
  }

  authorizePairing() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for RequestPinCode
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec = {
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

ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.RequestPinCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pin_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestPasskey
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec = {
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

ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.RequestPasskey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisplayPinCode
ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.DisplayPinCode_Params',
      packedSize: 24,
      fields: [
        { name: 'pin_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DisplayPasskey
ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.DisplayPasskey_Params',
      packedSize: 24,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ConfirmPasskey
ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.ConfirmPasskey_Params',
      packedSize: 16,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.ConfirmPasskey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AuthorizePairing
ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec = {
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

ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingDelegate.AuthorizePairing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.DevicePairingDelegatePtr = ash.bluetooth_config.mojom.DevicePairingDelegateRemote;
ash.bluetooth_config.mojom.DevicePairingDelegateRequest = ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver;


// Interface: DevicePairingHandler
ash.bluetooth_config.mojom.DevicePairingHandler = {};

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
      ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec,
      [device_id, delegate],
      undefined,
      undefined
    );
  }

  fetchDevice(device_address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec,
      [device_address],
      undefined,
      undefined
    );
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

// ParamsSpec for PairDevice
ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.PairDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'delegate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.PairDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchDevice
ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.FetchDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.DevicePairingHandler.FetchDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.DevicePairingHandlerPtr = ash.bluetooth_config.mojom.DevicePairingHandlerRemote;
ash.bluetooth_config.mojom.DevicePairingHandlerRequest = ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver;


// Interface: BluetoothDiscoveryDelegate
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate = {};

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
      null,
      [handler],
      undefined,
      undefined
    );
  }

  onBluetoothDiscoveryStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onDiscoveredDevicesListChanged(discovered_devices) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec,
      null,
      null,
      [discovered_devices],
      undefined,
      undefined
    );
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

// ParamsSpec for OnBluetoothDiscoveryStarted
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.OnBluetoothDiscoveryStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBluetoothDiscoveryStopped
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec = {
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
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.OnDiscoveredDevicesListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'discovered_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePtr = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote;
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRequest = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver;


// Interface: CrosBluetoothConfig
ash.bluetooth_config.mojom.CrosBluetoothConfig = {};

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
      null,
      [observer],
      undefined,
      undefined
    );
  }

  observeDeviceStatusChanges(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  observeDiscoverySessionStatusChanges(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  setBluetoothEnabledState(enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setBluetoothEnabledWithoutPersistence() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setBluetoothHidDetectionInactive(is_using_bluetooth) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec,
      null,
      null,
      [is_using_bluetooth],
      undefined,
      undefined
    );
  }

  startDiscovery(delegate) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec,
      null,
      null,
      [delegate],
      undefined,
      undefined
    );
  }

  connect(device_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec,
      [device_id],
      undefined,
      undefined
    );
  }

  disconnect(device_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec,
      [device_id],
      undefined,
      undefined
    );
  }

  forget(device_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec,
      [device_id],
      undefined,
      undefined
    );
  }

  setDeviceNickname(device_id, nickname) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec,
      null,
      null,
      [device_id, nickname],
      undefined,
      undefined
    );
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

// ParamsSpec for ObserveSystemProperties
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.ObserveSystemProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDeviceStatusChanges
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.ObserveDeviceStatusChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDiscoverySessionStatusChanges
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.ObserveDiscoverySessionStatusChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBluetoothEnabledState
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.SetBluetoothEnabledState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBluetoothEnabledWithoutPersistence
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec = {
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
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.SetBluetoothHidDetectionInactive_Params',
      packedSize: 16,
      fields: [
        { name: 'is_using_bluetooth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDiscovery
ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.StartDiscovery_Params',
      packedSize: 16,
      fields: [
        { name: 'delegate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Connect
ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Connect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Disconnect
ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Disconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Disconnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Forget
ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Forget_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.Forget_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeviceNickname
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.bluetooth_config.mojom.CrosBluetoothConfig.SetDeviceNickname_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'nickname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.bluetooth_config.mojom.CrosBluetoothConfigPtr = ash.bluetooth_config.mojom.CrosBluetoothConfigRemote;
ash.bluetooth_config.mojom.CrosBluetoothConfigRequest = ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver;

