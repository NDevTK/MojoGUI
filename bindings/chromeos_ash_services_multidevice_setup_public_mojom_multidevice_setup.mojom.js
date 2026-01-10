// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom
// Module: ash.multidevice_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.multidevice_setup = ash.multidevice_setup || {};
ash.multidevice_setup.mojom = ash.multidevice_setup.mojom || {};

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
      mojo.internal.StructField('remote_device', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connectivity_status', 8, 0, ash.device_sync.mojom.ConnectivityStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AccountStatusChangeDelegate
mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec, 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_Params', [
    ],
    [[0, 8]]);

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
    [[0, 8]]);

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
      [],
      false);
  }

  onNoLongerNewUser() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec,
      null,
      [],
      false);
  }

  onConnectedHostSwitchedForExistingUser(new_host_device_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec,
      null,
      [new_host_device_name],
      false);
  }

  onNewChromebookAddedForExistingUser(new_host_device_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec,
      null,
      [new_host_device_name],
      false);
  }

  onBecameEligibleForWifiSync() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec,
      null,
      [],
      false);
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

ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: OnPotentialHostExistsForNewUser
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPotentialHostExistsForNewUser (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnNoLongerNewUser
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNoLongerNewUser (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnConnectedHostSwitchedForExistingUser
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectedHostSwitchedForExistingUser (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnNewChromebookAddedForExistingUser
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewChromebookAddedForExistingUser (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: OnBecameEligibleForWifiSync
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBecameEligibleForWifiSync (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnPotentialHostExistsForNewUser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPotentialHostExistsForNewUser');
          const result = this.impl.onPotentialHostExistsForNewUser();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNoLongerNewUser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNoLongerNewUser');
          const result = this.impl.onNoLongerNewUser();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnConnectedHostSwitchedForExistingUser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnectedHostSwitchedForExistingUser');
          const result = this.impl.onConnectedHostSwitchedForExistingUser(params.new_host_device_name);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnNewChromebookAddedForExistingUser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNewChromebookAddedForExistingUser');
          const result = this.impl.onNewChromebookAddedForExistingUser(params.new_host_device_name);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.AccountStatusChangeDelegate_OnBecameEligibleForWifiSync_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBecameEligibleForWifiSync');
          const result = this.impl.onBecameEligibleForWifiSync();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver = ash.multidevice_setup.mojom.AccountStatusChangeDelegateReceiver;

ash.multidevice_setup.mojom.AccountStatusChangeDelegatePtr = ash.multidevice_setup.mojom.AccountStatusChangeDelegateRemote;
ash.multidevice_setup.mojom.AccountStatusChangeDelegateRequest = ash.multidevice_setup.mojom.AccountStatusChangeDelegatePendingReceiver;


// Interface: HostStatusObserver
mojo.internal.Struct(
    ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec, 'ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_Params', [
      mojo.internal.StructField('host_status', 0, 0, ash.multidevice_setup.mojom.HostStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
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
      [host_status, host_device],
      false);
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

ash.multidevice_setup.mojom.HostStatusObserverReceiver = class {
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
        
        // Try Method 0: OnHostStatusChanged
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStatusChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.HostStatusObserver_OnHostStatusChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHostStatusChanged');
          const result = this.impl.onHostStatusChanged(params.host_status, params.host_device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.multidevice_setup.mojom.HostStatusObserverReceiver = ash.multidevice_setup.mojom.HostStatusObserverReceiver;

ash.multidevice_setup.mojom.HostStatusObserverPtr = ash.multidevice_setup.mojom.HostStatusObserverRemote;
ash.multidevice_setup.mojom.HostStatusObserverRequest = ash.multidevice_setup.mojom.HostStatusObserverPendingReceiver;


// Interface: FeatureStateObserver
mojo.internal.Struct(
    ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec, 'ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_Params', [
      mojo.internal.StructField('feature_states_map', 0, 0, mojo.internal.Map(ash.multidevice_setup.mojom.FeatureSpec.$, ash.multidevice_setup.mojom.FeatureStateSpec.$, false), null, false, 0, undefined),
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
      [feature_states_map],
      false);
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

ash.multidevice_setup.mojom.FeatureStateObserverReceiver = class {
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
        
        // Try Method 0: OnFeatureStatesChanged
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFeatureStatesChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.FeatureStateObserver_OnFeatureStatesChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFeatureStatesChanged');
          const result = this.impl.onFeatureStatesChanged(params.feature_states_map);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.multidevice_setup.mojom.FeatureStateObserverReceiver = ash.multidevice_setup.mojom.FeatureStateObserverReceiver;

ash.multidevice_setup.mojom.FeatureStateObserverPtr = ash.multidevice_setup.mojom.FeatureStateObserverRemote;
ash.multidevice_setup.mojom.FeatureStateObserverRequest = ash.multidevice_setup.mojom.FeatureStateObserverPendingReceiver;


// Interface: MultiDeviceSetup
mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_Params', [
      mojo.internal.StructField('delegate', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.AccountStatusChangeDelegateSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.HostStatusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.multidevice_setup.mojom.FeatureStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParams', [
      mojo.internal.StructField('eligible_host_devices', 0, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParams', [
      mojo.internal.StructField('eligible_host_devices', 0, 0, mojo.internal.Array(ash.multidevice_setup.mojom.HostDeviceSpec.$, false), null, false, 0, undefined),
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
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParams', [
      mojo.internal.StructField('host_status', 0, 0, ash.multidevice_setup.mojom.HostStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_Params', [
      mojo.internal.StructField('feature', 0, 0, ash.multidevice_setup.mojom.FeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParams', [
      mojo.internal.StructField('feature_states_map', 0, 0, mojo.internal.Map(ash.multidevice_setup.mojom.FeatureSpec.$, ash.multidevice_setup.mojom.FeatureStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec, 'ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_Params', [
      mojo.internal.StructField('type', 0, 0, ash.multidevice_setup.mojom.EventTypeForDebuggingSpec.$, null, false, 0, undefined),
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
    [[0, 8]]);

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
      [delegate],
      false);
  }

  addHostStatusObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addFeatureStateObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getEligibleHostDevices() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec,
      [],
      false);
  }

  getEligibleActiveHostDevices() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec,
      [],
      false);
  }

  setHostDevice(instance_id_or_legacy_device_id, auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec,
      [instance_id_or_legacy_device_id, auth_token],
      false);
  }

  removeHostDevice() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec,
      null,
      [],
      false);
  }

  getHostStatus() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec,
      [],
      false);
  }

  setFeatureEnabledState(feature, enabled, auth_token) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec,
      [feature, enabled, auth_token],
      false);
  }

  getFeatureStates() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec,
      [],
      false);
  }

  retrySetHostNow() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec,
      [],
      false);
  }

  triggerEventForDebugging(type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec,
      [type],
      false);
  }

  setQuickStartPhoneInstanceID(qs_phone_instance_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec,
      null,
      [qs_phone_instance_id],
      false);
  }

  getQuickStartPhoneInstanceID() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec,
      ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec,
      [],
      false);
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

ash.multidevice_setup.mojom.MultiDeviceSetupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
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
        
        // Try Method 0: SetAccountStatusChangeDelegate
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccountStatusChangeDelegate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: AddHostStatusObserver
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddHostStatusObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: AddFeatureStateObserver
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFeatureStateObserver (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: GetEligibleHostDevices
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEligibleHostDevices (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetEligibleActiveHostDevices
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEligibleActiveHostDevices (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: SetHostDevice
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHostDevice (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: RemoveHostDevice
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveHostDevice (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: GetHostStatus
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHostStatus (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: SetFeatureEnabledState
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFeatureEnabledState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: GetFeatureStates
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeatureStates (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: RetrySetHostNow
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RetrySetHostNow (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: TriggerEventForDebugging
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerEventForDebugging (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: SetQuickStartPhoneInstanceID
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetQuickStartPhoneInstanceID (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: GetQuickStartPhoneInstanceID
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetQuickStartPhoneInstanceID (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetAccountStatusChangeDelegate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAccountStatusChangeDelegate');
          const result = this.impl.setAccountStatusChangeDelegate(params.delegate);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_AddHostStatusObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addHostStatusObserver');
          const result = this.impl.addHostStatusObserver(params.observer);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_AddFeatureStateObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addFeatureStateObserver');
          const result = this.impl.addFeatureStateObserver(params.observer);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getEligibleHostDevices');
          const result = this.impl.getEligibleHostDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleHostDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getEligibleActiveHostDevices');
          const result = this.impl.getEligibleActiveHostDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetEligibleActiveHostDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHostDevice');
          const result = this.impl.setHostDevice(params.instance_id_or_legacy_device_id, params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_SetHostDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_RemoveHostDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeHostDevice');
          const result = this.impl.removeHostDevice();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHostStatus');
          const result = this.impl.getHostStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetHostStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setFeatureEnabledState');
          const result = this.impl.setFeatureEnabledState(params.feature, params.enabled, params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_SetFeatureEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFeatureStates');
          const result = this.impl.getFeatureStates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetFeatureStates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.retrySetHostNow');
          const result = this.impl.retrySetHostNow();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_RetrySetHostNow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerEventForDebugging');
          const result = this.impl.triggerEventForDebugging(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_TriggerEventForDebugging_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_SetQuickStartPhoneInstanceID_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setQuickStartPhoneInstanceID');
          const result = this.impl.setQuickStartPhoneInstanceID(params.qs_phone_instance_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getQuickStartPhoneInstanceID');
          const result = this.impl.getQuickStartPhoneInstanceID();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.MultiDeviceSetup_GetQuickStartPhoneInstanceID_ResponseParamsSpec);
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

ash.multidevice_setup.mojom.MultiDeviceSetupReceiver = ash.multidevice_setup.mojom.MultiDeviceSetupReceiver;

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
      [instance_id_or_legacy_device_id],
      false);
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

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver = class {
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
        
        // Try Method 0: SetHostDevice
        try {
             decoder.decodeStruct(ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHostDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHostDevice');
          const result = this.impl.setHostDevice(params.instance_id_or_legacy_device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter_SetHostDevice_ResponseParamsSpec);
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

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterReceiver;

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPtr = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRemote;
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRequest = ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPendingReceiver;

