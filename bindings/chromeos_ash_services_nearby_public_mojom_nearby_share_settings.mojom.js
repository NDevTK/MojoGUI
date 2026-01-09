// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom
// Module: nearby_share.mojom

'use strict';

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};


// Enum: DataUsage
nearby_share.mojom.DataUsage = {
  kUnknown: 0,
  kOffline: 1,
  kOnline: 2,
  kWifiOnly: 3,
};

// Enum: Visibility
nearby_share.mojom.Visibility = {
  kUnknown: 0,
  kNoOne: 1,
  kAllContacts: 2,
  kSelectedContacts: 3,
  kYourDevices: 4,
};

// Enum: DeviceNameValidationResult
nearby_share.mojom.DeviceNameValidationResult = {
  kValid: 0,
  kErrorEmpty: 1,
  kErrorTooLong: 2,
  kErrorNotValidUtf8: 3,
};

// Enum: FastInitiationNotificationState
nearby_share.mojom.FastInitiationNotificationState = {
  kEnabled: 0,
  kDisabledByUser: 1,
  kDisabledByFeature: 2,
};

// Interface: NearbyShareSettingsObserver
nearby_share.mojom.NearbyShareSettingsObserver = {};

nearby_share.mojom.NearbyShareSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.NearbyShareSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.NearbyShareSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.NearbyShareSettingsObserverPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.NearbyShareSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.NearbyShareSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEnabledChanged(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  onFastInitiationNotificationStateChanged(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec,
      null,
      null,
      [state],
      undefined,
      undefined
    );
  }

  onIsFastInitiationHardwareSupportedChanged(is_supported) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec,
      null,
      null,
      [is_supported],
      undefined,
      undefined
    );
  }

  onDeviceNameChanged(device_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec,
      null,
      null,
      [device_name],
      undefined,
      undefined
    );
  }

  onDataUsageChanged(data_usage) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec,
      null,
      null,
      [data_usage],
      undefined,
      undefined
    );
  }

  onVisibilityChanged(visibility) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec,
      null,
      null,
      [visibility],
      undefined,
      undefined
    );
  }

  onAllowedContactsChanged(visible_contact_ids) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec,
      null,
      null,
      [visible_contact_ids],
      undefined,
      undefined
    );
  }

  onIsOnboardingCompleteChanged(is_complete) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec,
      null,
      null,
      [is_complete],
      undefined,
      undefined
    );
  }

};

nearby_share.mojom.NearbyShareSettingsObserver.getRemote = function() {
  let remote = new nearby_share.mojom.NearbyShareSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.NearbyShareSettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnEnabledChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFastInitiationNotificationStateChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnFastInitiationNotificationStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIsFastInitiationHardwareSupportedChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnIsFastInitiationHardwareSupportedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceNameChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnDeviceNameChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDataUsageChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnDataUsageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'data_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnVisibilityChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAllowedContactsChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnAllowedContactsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visible_contact_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIsOnboardingCompleteChanged
nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettingsObserver.OnIsOnboardingCompleteChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_complete', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.NearbyShareSettingsObserverPtr = nearby_share.mojom.NearbyShareSettingsObserverRemote;
nearby_share.mojom.NearbyShareSettingsObserverRequest = nearby_share.mojom.NearbyShareSettingsObserverPendingReceiver;


// Interface: NearbyShareSettings
nearby_share.mojom.NearbyShareSettings = {};

nearby_share.mojom.NearbyShareSettingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.NearbyShareSettingsRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.NearbyShareSettings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.NearbyShareSettingsPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.NearbyShareSettingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.NearbyShareSettingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addSettingsObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  getEnabled() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  isOnboardingComplete() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setIsOnboardingComplete(completed) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec,
      null,
      null,
      [completed],
      undefined,
      undefined
    );
  }

  getFastInitiationNotificationState() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setFastInitiationNotificationState(state) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec,
      null,
      null,
      [state],
      undefined,
      undefined
    );
  }

  getIsFastInitiationHardwareSupported() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getDeviceName() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  validateDeviceName(device_name) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec,
      [device_name],
      undefined,
      undefined
    );
  }

  setDeviceName(device_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec,
      [device_name],
      undefined,
      undefined
    );
  }

  getDataUsage() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setDataUsage(data_usage) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec,
      null,
      null,
      [data_usage],
      undefined,
      undefined
    );
  }

  getVisibility() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setVisibility(visibility) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec,
      null,
      null,
      [visibility],
      undefined,
      undefined
    );
  }

  getAllowedContacts() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setAllowedContacts(allowed_contacts) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec,
      null,
      null,
      [allowed_contacts],
      undefined,
      undefined
    );
  }

};

nearby_share.mojom.NearbyShareSettings.getRemote = function() {
  let remote = new nearby_share.mojom.NearbyShareSettingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.NearbyShareSettings',
    'context');
  return remote.$;
};

// ParamsSpec for AddSettingsObserver
nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.AddSettingsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetEnabled
nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetEnabled
nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsOnboardingComplete
nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.IsOnboardingComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.IsOnboardingComplete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsOnboardingComplete
nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetIsOnboardingComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFastInitiationNotificationState
nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetFastInitiationNotificationState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetFastInitiationNotificationState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFastInitiationNotificationState
nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetFastInitiationNotificationState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetIsFastInitiationHardwareSupported
nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetIsFastInitiationHardwareSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetIsFastInitiationHardwareSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDeviceName
nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetDeviceName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetDeviceName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ValidateDeviceName
nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.ValidateDeviceName_Params',
      packedSize: 16,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.ValidateDeviceName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeviceName
nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetDeviceName_Params',
      packedSize: 16,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetDeviceName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDataUsage
nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetDataUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetDataUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDataUsage
nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetDataUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'data_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetVisibility
nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetVisibility_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVisibility
nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllowedContacts
nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetAllowedContacts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.GetAllowedContacts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed_contacts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAllowedContacts
nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.NearbyShareSettings.SetAllowedContacts_Params',
      packedSize: 16,
      fields: [
        { name: 'allowed_contacts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.NearbyShareSettingsPtr = nearby_share.mojom.NearbyShareSettingsRemote;
nearby_share.mojom.NearbyShareSettingsRequest = nearby_share.mojom.NearbyShareSettingsPendingReceiver;


// Interface: DownloadContactsObserver
nearby_share.mojom.DownloadContactsObserver = {};

nearby_share.mojom.DownloadContactsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.DownloadContactsObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.DownloadContactsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.DownloadContactsObserverPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.DownloadContactsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.DownloadContactsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onContactsDownloaded(allowed_contacts, contacts, num_unreachable_contacts_filtered_out) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec,
      null,
      null,
      [allowed_contacts, contacts, num_unreachable_contacts_filtered_out],
      undefined,
      undefined
    );
  }

  onContactsDownloadFailed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

nearby_share.mojom.DownloadContactsObserver.getRemote = function() {
  let remote = new nearby_share.mojom.DownloadContactsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.DownloadContactsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnContactsDownloaded
nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DownloadContactsObserver.OnContactsDownloaded_Params',
      packedSize: 32,
      fields: [
        { name: 'allowed_contacts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'contacts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'num_unreachable_contacts_filtered_out', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnContactsDownloadFailed
nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DownloadContactsObserver.OnContactsDownloadFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.DownloadContactsObserverPtr = nearby_share.mojom.DownloadContactsObserverRemote;
nearby_share.mojom.DownloadContactsObserverRequest = nearby_share.mojom.DownloadContactsObserverPendingReceiver;


// Interface: ContactManager
nearby_share.mojom.ContactManager = {};

nearby_share.mojom.ContactManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.ContactManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ContactManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.ContactManagerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.ContactManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.ContactManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addDownloadContactsObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  downloadContacts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setAllowedContacts(allowed_contacts) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec,
      null,
      null,
      [allowed_contacts],
      undefined,
      undefined
    );
  }

};

nearby_share.mojom.ContactManager.getRemote = function() {
  let remote = new nearby_share.mojom.ContactManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ContactManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddDownloadContactsObserver
nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ContactManager.AddDownloadContactsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DownloadContacts
nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ContactManager.DownloadContacts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetAllowedContacts
nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ContactManager.SetAllowedContacts_Params',
      packedSize: 16,
      fields: [
        { name: 'allowed_contacts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.ContactManagerPtr = nearby_share.mojom.ContactManagerRemote;
nearby_share.mojom.ContactManagerRequest = nearby_share.mojom.ContactManagerPendingReceiver;

