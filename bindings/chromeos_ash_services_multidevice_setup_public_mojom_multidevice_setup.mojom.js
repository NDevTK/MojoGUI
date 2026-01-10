// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom
// Module: ash.multidevice_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.multidevice_setup = ash.multidevice_setup || {};
ash.multidevice_setup.mojom = ash.multidevice_setup.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var components = components || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};

ash.multidevice_setup.mojom.CameraRollOptInEntryPointSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.EventTypeForDebuggingSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.HostStatusSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.FeatureSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.FeatureStateSpec = { $: mojo.internal.Enum() };
ash.multidevice_setup.mojom.HostDeviceSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate = {};
ash.multidevice_setup.mojom.AccountStatusChangeDelegate.$interfaceName = 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate';
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.HostStatusObserver = {};
ash.multidevice_setup.mojom.HostStatusObserver.$interfaceName = 'ash.multidevice_setup.mojom.HostStatusObserver';
ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.FeatureStateObserver = {};
ash.multidevice_setup.mojom.FeatureStateObserver.$interfaceName = 'ash.multidevice_setup.mojom.FeatureStateObserver';
ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup = {};
ash.multidevice_setup.mojom.MultiDeviceSetup.$interfaceName = 'ash.multidevice_setup.mojom.MultiDeviceSetup';
ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec = { $: {} };
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter = {};
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter.$interfaceName = 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter';
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec = { $: {} };
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec = { $: {} };

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
  kUnavailableInsufficientSecurity: 6,
  kUnavailableSuiteDisabled: 7,
  kUnavailableTopLevelFeatureDisabled: 9,
  kUnavailableNoVerifiedHost_ClientNotReady: 10,
  kUnavailableNoVerifiedHost_NoEligibleHosts: 11,
  kUnavailableNoVerifiedHost_HostExistsButNotSetAndVerified: 12,
};

// Struct: HostDevice
mojo.internal.Struct(
    ash.multidevice_setup.mojom.HostDeviceSpec, 'ash.multidevice_setup.mojom.HostDevice', [
      mojo.internal.StructField('remote_device', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec, null, false, 0, undefined),
      mojo.internal.StructField('connectivity_status', 8, 0, ash.device_sync.mojom.ConnectivityStatusSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AccountStatusChangeDelegate
mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_Params', [
      mojo.internal.StructField('new_host_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_Params', [
      mojo.internal.StructField('new_host_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

ash.multidevice_setup.mojom.AccountStatusChangeDelegatePtr = ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote;
ash.multidevice_setup.mojom.AccountStatusChangeDelegateRequest = ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver;


// Interface: HostStatusObserver
mojo.internal.Struct(
    ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec, 'ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_Params', [
      mojo.internal.StructField('host_status', 8, 0, ash.multidevice_setup.mojom.HostStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('host_device', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

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

ash.multidevice_setup.mojom.HostStatusObserverPtr = ash.multidevice_setup.mojom.HostStatusObserverRemote;
ash.multidevice_setup.mojom.HostStatusObserverRequest = ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver;


// Interface: FeatureStateObserver
mojo.internal.Struct(
    ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec, 'ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_Params', [
      mojo.internal.StructField('feature_states_map', 0, 0, mojo.internal.Map(ash.multidevice_setup.mojom.FeatureSpec, ash.multidevice_setup.mojom.FeatureStateSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.multidevice_setup.mojom.FeatureStateObserverPtr = ash.multidevice_setup.mojom.FeatureStateObserverRemote;
ash.multidevice_setup.mojom.FeatureStateObserverRequest = ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver;


// Interface: MultiDeviceSetup
mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_Params', [
      mojo.internal.StructField('delegate', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.HostStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.FeatureStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParams', [
      mojo.internal.StructField('eligible_host_devices', 0, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParams', [
      mojo.internal.StructField('eligible_host_devices', 0, 0, mojo.internal.Array(ash.multidevice_setup.mojom.HostDeviceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_Params', [
      mojo.internal.StructField('instance_id_or_legacy_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParams', [
      mojo.internal.StructField('host_status', 8, 0, ash.multidevice_setup.mojom.HostStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('host_device', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_Params', [
      mojo.internal.StructField('feature', 8, 0, ash.multidevice_setup.mojom.FeatureSpec, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParams', [
      mojo.internal.StructField('feature_states_map', 0, 0, mojo.internal.Map(ash.multidevice_setup.mojom.FeatureSpec, ash.multidevice_setup.mojom.FeatureStateSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_Params', [
      mojo.internal.StructField('type', 0, 0, ash.multidevice_setup.mojom.EventTypeForDebuggingSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_Params', [
      mojo.internal.StructField('qs_phone_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParams', [
      mojo.internal.StructField('qs_phone_instance_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

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

ash.multidevice_setup.mojom.MultiDeviceSetupPtr = ash.multidevice_setup.mojom.MultiDeviceSetupRemote;
ash.multidevice_setup.mojom.MultiDeviceSetupRequest = ash.multidevice_setup.mojom.MultiDeviceSetupPendingReceiver;


// Interface: PrivilegedHostDeviceSetter
mojo.internal.Struct(
    ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec, 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_Params', [
      mojo.internal.StructField('instance_id_or_legacy_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec, 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPtr = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote;
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRequest = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver;

