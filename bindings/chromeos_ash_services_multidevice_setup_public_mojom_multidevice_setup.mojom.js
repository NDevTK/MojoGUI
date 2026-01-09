// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom
// Module: ash.multidevice_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.multidevice_setup = ash.multidevice_setup || {};
ash.multidevice_setup.mojom = ash.multidevice_setup.mojom || {};


// Enum: CameraRollOptInEntryPoint
ash.multidevice_setup.mojom.CameraRollOptInEntryPoint = {
  kSetupFlow: 0,
  kOnboardingDialog: 1,
  kSettings: 2,
};

// Enum: EventTypeForDebugging
ash.multidevice_setup.mojom.EventTypeForDebugging = {
  kNewUserPotentialHostExists: 0,
  kExistingUserConnectedHostSwitched: 1,
  kExistingUserNewChromebookAdded: 2,
};

// Enum: HostStatus
ash.multidevice_setup.mojom.HostStatus = {
  kNoEligibleHosts: 0,
  kEligibleHostExistsButNoHostSet: 1,
  kHostSetLocallyButWaitingForBackendConfirmation: 2,
  kHostSetButNotYetVerified: 3,
  kHostVerified: 4,
};

// Enum: Feature
ash.multidevice_setup.mojom.Feature = {
  kBetterTogetherSuite: 0,
  kInstantTethering: 1,
  kMessages: 2,
  kSmartLock: 3,
  kPhoneHub: 4,
  kPhoneHubNotifications: 5,
  kPhoneHubTaskContinuation: 6,
  kWifiSync: 7,
  kEche: 8,
  kPhoneHubCameraRoll: 9,
};

// Enum: FeatureState
ash.multidevice_setup.mojom.FeatureState = {
  kProhibitedByPolicy: 0,
  kDisabledByUser: 1,
  kEnabledByUser: 2,
  kNotSupportedByChromebook: 3,
  kNotSupportedByPhone: 4,
  kUnavailableInsufficientSecurity: 5,
  kUnavailableSuiteDisabled: 6,
  kUnavailableTopLevelFeatureDisabled: 7,
  kUnavailableNoVerifiedHost_ClientNotReady: 8,
  kUnavailableNoVerifiedHost_NoEligibleHosts: 9,
  kUnavailableNoVerifiedHost_HostExistsButNotSetAndVerified: 10,
};

// Struct: HostDevice
ash.multidevice_setup.mojom.HostDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.HostDevice',
      packedSize: 16,
      fields: [
        { name: 'connectivity_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AccountStatusChangeDelegate
ash.multidevice_setup.mojom.AccountStatusChangeDelegate = {};

ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPotentialHostExistsForNewUser() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec,
      null,
      []);
  }

  onNoLongerNewUser() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec,
      null,
      []);
  }

  onConnectedHostSwitchedForExistingUser(new_host_device_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec,
      null,
      [new_host_device_name]);
  }

  onNewChromebookAddedForExistingUser(new_host_device_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec,
      null,
      [new_host_device_name]);
  }

  onBecameEligibleForWifiSync() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec,
      null,
      []);
  }

};

ash.multidevice_setup.mojom.AccountStatusChangeDelegate.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.AccountStatusChangeDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for OnPotentialHostExistsForNewUser
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate.OnPotentialHostExistsForNewUser_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNoLongerNewUser
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate.OnNoLongerNewUser_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectedHostSwitchedForExistingUser
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate.OnConnectedHostSwitchedForExistingUser_Params',
      packedSize: 16,
      fields: [
        { name: 'new_host_device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNewChromebookAddedForExistingUser
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate.OnNewChromebookAddedForExistingUser_Params',
      packedSize: 16,
      fields: [
        { name: 'new_host_device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBecameEligibleForWifiSync
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate.OnBecameEligibleForWifiSync_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.multidevice_setup.mojom.AccountStatusChangeDelegatePtr = ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote;
ash.multidevice_setup.mojom.AccountStatusChangeDelegateRequest = ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver;


// Interface: HostStatusObserver
ash.multidevice_setup.mojom.HostStatusObserver = {};

ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.HostStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.HostStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.HostStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.HostStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHostStatusChanged(host_status, host_device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec,
      null,
      [host_status, host_device]);
  }

};

ash.multidevice_setup.mojom.HostStatusObserver.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.HostStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.HostStatusObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnHostStatusChanged
ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.HostStatusObserver.OnHostStatusChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'host_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'host_device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.multidevice_setup.mojom.HostStatusObserverPtr = ash.multidevice_setup.mojom.HostStatusObserverRemote;
ash.multidevice_setup.mojom.HostStatusObserverRequest = ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver;


// Interface: FeatureStateObserver
ash.multidevice_setup.mojom.FeatureStateObserver = {};

ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.FeatureStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.FeatureStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.FeatureStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.FeatureStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFeatureStatesChanged(feature_states_map) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec,
      null,
      [feature_states_map]);
  }

};

ash.multidevice_setup.mojom.FeatureStateObserver.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.FeatureStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.FeatureStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFeatureStatesChanged
ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.FeatureStateObserver.OnFeatureStatesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'feature_states_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.multidevice_setup.mojom.FeatureStateObserverPtr = ash.multidevice_setup.mojom.FeatureStateObserverRemote;
ash.multidevice_setup.mojom.FeatureStateObserverRequest = ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver;


// Interface: MultiDeviceSetup
ash.multidevice_setup.mojom.MultiDeviceSetup = {};

ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetupRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.MultiDeviceSetup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.MultiDeviceSetupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAccountStatusChangeDelegate(delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec,
      null,
      [delegate]);
  }

  addHostStatusObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec,
      null,
      [observer]);
  }

  addFeatureStateObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec,
      null,
      [observer]);
  }

  getEligibleHostDevices() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec,
      []);
  }

  getEligibleActiveHostDevices() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec,
      []);
  }

  setHostDevice(instance_id_or_legacy_device_id, auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec,
      [instance_id_or_legacy_device_id, auth_token]);
  }

  removeHostDevice() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec,
      null,
      []);
  }

  getHostStatus() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec,
      []);
  }

  setFeatureEnabledState(feature, enabled, auth_token) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec,
      [feature, enabled, auth_token]);
  }

  getFeatureStates() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec,
      []);
  }

  retrySetHostNow() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec,
      []);
  }

  triggerEventForDebugging(type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec,
      [type]);
  }

  setQuickStartPhoneInstanceID(qs_phone_instance_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec,
      null,
      [qs_phone_instance_id]);
  }

  getQuickStartPhoneInstanceID() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec,
      []);
  }

};

ash.multidevice_setup.mojom.MultiDeviceSetup.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.MultiDeviceSetupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.MultiDeviceSetup',
    'context');
  return remote.$;
};

// ParamsSpec for SetAccountStatusChangeDelegate
ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.SetAccountStatusChangeDelegate_Params',
      packedSize: 16,
      fields: [
        { name: 'delegate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddHostStatusObserver
ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.AddHostStatusObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddFeatureStateObserver
ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.AddFeatureStateObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEligibleHostDevices
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetEligibleHostDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetEligibleHostDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'eligible_host_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEligibleActiveHostDevices
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetEligibleActiveHostDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetEligibleActiveHostDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'eligible_host_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetHostDevice
ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.SetHostDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'instance_id_or_legacy_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'auth_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.SetHostDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveHostDevice
ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.RemoveHostDevice_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetHostStatus
ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetHostStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetHostStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'host_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'host_device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFeatureEnabledState
ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.SetFeatureEnabledState_Params',
      packedSize: 32,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'auth_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.SetFeatureEnabledState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFeatureStates
ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetFeatureStates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetFeatureStates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'feature_states_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RetrySetHostNow
ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.RetrySetHostNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.RetrySetHostNow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TriggerEventForDebugging
ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.TriggerEventForDebugging_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.TriggerEventForDebugging_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetQuickStartPhoneInstanceID
ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.SetQuickStartPhoneInstanceID_Params',
      packedSize: 16,
      fields: [
        { name: 'qs_phone_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetQuickStartPhoneInstanceID
ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetQuickStartPhoneInstanceID_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.MultiDeviceSetup.GetQuickStartPhoneInstanceID_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'qs_phone_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.multidevice_setup.mojom.MultiDeviceSetupPtr = ash.multidevice_setup.mojom.MultiDeviceSetupRemote;
ash.multidevice_setup.mojom.MultiDeviceSetupRequest = ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver;


// Interface: PrivilegedHostDeviceSetter
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter = {};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote = class {
  static get $interfaceName() {
    return 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver,
      handle);
    this.$ = new ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setHostDevice(instance_id_or_legacy_device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec,
      ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec,
      [instance_id_or_legacy_device_id]);
  }

};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.getRemote = function() {
  let remote = new ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter',
    'context');
  return remote.$;
};

// ParamsSpec for SetHostDevice
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.SetHostDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_id_or_legacy_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.SetHostDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPtr = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote;
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRequest = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver;

