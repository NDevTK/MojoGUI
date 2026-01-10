// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom
// Module: nearby_share.mojom

'use strict';

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};
var url = url || {};

nearby_share.mojom.DataUsageSpec = { $: mojo.internal.Enum() };
nearby_share.mojom.VisibilitySpec = { $: mojo.internal.Enum() };
nearby_share.mojom.DeviceNameValidationResultSpec = { $: mojo.internal.Enum() };
nearby_share.mojom.FastInitiationNotificationStateSpec = { $: mojo.internal.Enum() };
nearby_share.mojom.ContactIdentifierSpec = { $: {} };
nearby_share.mojom.ContactRecordSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver = {};
nearby_share.mojom.NearbyShareSettingsObserver.$interfaceName = 'nearby_share.mojom.NearbyShareSettingsObserver';
nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings = {};
nearby_share.mojom.NearbyShareSettings.$interfaceName = 'nearby_share.mojom.NearbyShareSettings';
nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec = { $: {} };
nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec = { $: {} };
nearby_share.mojom.DownloadContactsObserver = {};
nearby_share.mojom.DownloadContactsObserver.$interfaceName = 'nearby_share.mojom.DownloadContactsObserver';
nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec = { $: {} };
nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec = { $: {} };
nearby_share.mojom.ContactManager = {};
nearby_share.mojom.ContactManager.$interfaceName = 'nearby_share.mojom.ContactManager';
nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec = { $: {} };
nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec = { $: {} };
nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec = { $: {} };

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

// Union: ContactIdentifier
mojo.internal.Union(
    nearby_share.mojom.ContactIdentifierSpec, 'nearby_share.mojom.ContactIdentifier', {
      'obfuscated_gaia': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'phone_number': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'account_name': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: ContactRecord
mojo.internal.Struct(
    nearby_share.mojom.ContactRecordSpec, 'nearby_share.mojom.ContactRecord', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('person_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('identifiers', 24, 0, mojo.internal.Array(nearby_share.mojom.ContactIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: NearbyShareSettingsObserver
mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, nearby_share.mojom.FastInitiationNotificationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_Params', [
      mojo.internal.StructField('is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_Params', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_Params', [
      mojo.internal.StructField('data_usage', 0, 0, nearby_share.mojom.DataUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, nearby_share.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_Params', [
      mojo.internal.StructField('visible_contact_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec, 'nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_Params', [
      mojo.internal.StructField('is_complete', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [enabled],
      false);
  }

  onFastInitiationNotificationStateChanged(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  onIsFastInitiationHardwareSupportedChanged(is_supported) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec,
      null,
      [is_supported],
      false);
  }

  onDeviceNameChanged(device_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec,
      null,
      [device_name],
      false);
  }

  onDataUsageChanged(data_usage) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec,
      null,
      [data_usage],
      false);
  }

  onVisibilityChanged(visibility) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  onAllowedContactsChanged(visible_contact_ids) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec,
      null,
      [visible_contact_ids],
      false);
  }

  onIsOnboardingCompleteChanged(is_complete) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec,
      null,
      [is_complete],
      false);
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

nearby_share.mojom.NearbyShareSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnEnabledChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEnabledChanged(params.enabled);
          break;
        }
        case 1: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnFastInitiationNotificationStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFastInitiationNotificationStateChanged(params.state);
          break;
        }
        case 2: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnIsFastInitiationHardwareSupportedChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onIsFastInitiationHardwareSupportedChanged(params.is_supported);
          break;
        }
        case 3: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnDeviceNameChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceNameChanged(params.device_name);
          break;
        }
        case 4: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnDataUsageChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDataUsageChanged(params.data_usage);
          break;
        }
        case 5: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnVisibilityChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVisibilityChanged(params.visibility);
          break;
        }
        case 6: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnAllowedContactsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAllowedContactsChanged(params.visible_contact_ids);
          break;
        }
        case 7: {
          const params = nearby_share.mojom.NearbyShareSettingsObserver_OnIsOnboardingCompleteChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onIsOnboardingCompleteChanged(params.is_complete);
          break;
        }
      }
    }});
  }
};

nearby_share.mojom.NearbyShareSettingsObserverReceiver = nearby_share.mojom.NearbyShareSettingsObserverReceiver;

nearby_share.mojom.NearbyShareSettingsObserverPtr = nearby_share.mojom.NearbyShareSettingsObserverRemote;
nearby_share.mojom.NearbyShareSettingsObserverRequest = nearby_share.mojom.NearbyShareSettingsObserverPendingReceiver;


// Interface: NearbyShareSettings
mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.NearbyShareSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParams', [
      mojo.internal.StructField('completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_Params', [
      mojo.internal.StructField('completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, nearby_share.mojom.FastInitiationNotificationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_Params', [
      mojo.internal.StructField('state', 0, 0, nearby_share.mojom.FastInitiationNotificationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDeviceName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParams', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_Params', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, nearby_share.mojom.DeviceNameValidationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetDeviceName_Params', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, nearby_share.mojom.DeviceNameValidationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDataUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParams', [
      mojo.internal.StructField('data_usage', 0, 0, nearby_share.mojom.DataUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetDataUsage_Params', [
      mojo.internal.StructField('data_usage', 0, 0, nearby_share.mojom.DataUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParams', [
      mojo.internal.StructField('visibility', 0, 0, nearby_share.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetVisibility_Params', [
      mojo.internal.StructField('visibility', 0, 0, nearby_share.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec, 'nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParams', [
      mojo.internal.StructField('allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec, 'nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_Params', [
      mojo.internal.StructField('allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
  }

  getEnabled() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  isOnboardingComplete() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec,
      [],
      false);
  }

  setIsOnboardingComplete(completed) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec,
      null,
      [completed],
      false);
  }

  getFastInitiationNotificationState() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec,
      [],
      false);
  }

  setFastInitiationNotificationState(state) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec,
      null,
      [state],
      false);
  }

  getIsFastInitiationHardwareSupported() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec,
      [],
      false);
  }

  getDeviceName() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec,
      [],
      false);
  }

  validateDeviceName(device_name) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec,
      [device_name],
      false);
  }

  setDeviceName(device_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec,
      [device_name],
      false);
  }

  getDataUsage() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec,
      [],
      false);
  }

  setDataUsage(data_usage) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec,
      null,
      [data_usage],
      false);
  }

  getVisibility() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec,
      [],
      false);
  }

  setVisibility(visibility) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec,
      null,
      [visibility],
      false);
  }

  getAllowedContacts() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec,
      nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec,
      [],
      false);
  }

  setAllowedContacts(allowed_contacts) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec,
      null,
      [allowed_contacts],
      false);
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

nearby_share.mojom.NearbyShareSettingsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = nearby_share.mojom.NearbyShareSettings_AddSettingsObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addSettingsObserver(params.observer);
          break;
        }
        case 1: {
          const params = nearby_share.mojom.NearbyShareSettings_GetEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_GetEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = nearby_share.mojom.NearbyShareSettings_SetEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEnabled(params.enabled);
          break;
        }
        case 3: {
          const params = nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isOnboardingComplete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_IsOnboardingComplete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = nearby_share.mojom.NearbyShareSettings_SetIsOnboardingComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsOnboardingComplete(params.completed);
          break;
        }
        case 5: {
          const params = nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFastInitiationNotificationState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_GetFastInitiationNotificationState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = nearby_share.mojom.NearbyShareSettings_SetFastInitiationNotificationState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setFastInitiationNotificationState(params.state);
          break;
        }
        case 7: {
          const params = nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getIsFastInitiationHardwareSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_GetIsFastInitiationHardwareSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = nearby_share.mojom.NearbyShareSettings_GetDeviceName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceName();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_GetDeviceName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.validateDeviceName(params.device_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_ValidateDeviceName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = nearby_share.mojom.NearbyShareSettings_SetDeviceName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDeviceName(params.device_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_SetDeviceName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = nearby_share.mojom.NearbyShareSettings_GetDataUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDataUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_GetDataUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = nearby_share.mojom.NearbyShareSettings_SetDataUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDataUsage(params.data_usage);
          break;
        }
        case 13: {
          const params = nearby_share.mojom.NearbyShareSettings_GetVisibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVisibility();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_GetVisibility_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = nearby_share.mojom.NearbyShareSettings_SetVisibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVisibility(params.visibility);
          break;
        }
        case 15: {
          const params = nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAllowedContacts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.NearbyShareSettings_GetAllowedContacts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = nearby_share.mojom.NearbyShareSettings_SetAllowedContacts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAllowedContacts(params.allowed_contacts);
          break;
        }
      }
    }});
  }
};

nearby_share.mojom.NearbyShareSettingsReceiver = nearby_share.mojom.NearbyShareSettingsReceiver;

nearby_share.mojom.NearbyShareSettingsPtr = nearby_share.mojom.NearbyShareSettingsRemote;
nearby_share.mojom.NearbyShareSettingsRequest = nearby_share.mojom.NearbyShareSettingsPendingReceiver;


// Interface: DownloadContactsObserver
mojo.internal.Struct(
    nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec, 'nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_Params', [
      mojo.internal.StructField('allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('contacts', 8, 0, mojo.internal.Array(nearby_share.mojom.ContactRecordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('num_unreachable_contacts_filtered_out', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec, 'nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_Params', [
    ],
    [[0, 8]]);

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
      [allowed_contacts, contacts, num_unreachable_contacts_filtered_out],
      false);
  }

  onContactsDownloadFailed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec,
      null,
      [],
      false);
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

nearby_share.mojom.DownloadContactsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = nearby_share.mojom.DownloadContactsObserver_OnContactsDownloaded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onContactsDownloaded(params.allowed_contacts, params.contacts, params.num_unreachable_contacts_filtered_out);
          break;
        }
        case 1: {
          const params = nearby_share.mojom.DownloadContactsObserver_OnContactsDownloadFailed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onContactsDownloadFailed();
          break;
        }
      }
    }});
  }
};

nearby_share.mojom.DownloadContactsObserverReceiver = nearby_share.mojom.DownloadContactsObserverReceiver;

nearby_share.mojom.DownloadContactsObserverPtr = nearby_share.mojom.DownloadContactsObserverRemote;
nearby_share.mojom.DownloadContactsObserverRequest = nearby_share.mojom.DownloadContactsObserverPendingReceiver;


// Interface: ContactManager
mojo.internal.Struct(
    nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec, 'nearby_share.mojom.ContactManager_AddDownloadContactsObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.DownloadContactsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec, 'nearby_share.mojom.ContactManager_DownloadContacts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec, 'nearby_share.mojom.ContactManager_SetAllowedContacts_Params', [
      mojo.internal.StructField('allowed_contacts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
  }

  downloadContacts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec,
      null,
      [],
      false);
  }

  setAllowedContacts(allowed_contacts) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec,
      null,
      [allowed_contacts],
      false);
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

nearby_share.mojom.ContactManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = nearby_share.mojom.ContactManager_AddDownloadContactsObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addDownloadContactsObserver(params.observer);
          break;
        }
        case 1: {
          const params = nearby_share.mojom.ContactManager_DownloadContacts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.downloadContacts();
          break;
        }
        case 2: {
          const params = nearby_share.mojom.ContactManager_SetAllowedContacts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAllowedContacts(params.allowed_contacts);
          break;
        }
      }
    }});
  }
};

nearby_share.mojom.ContactManagerReceiver = nearby_share.mojom.ContactManagerReceiver;

nearby_share.mojom.ContactManagerPtr = nearby_share.mojom.ContactManagerRemote;
nearby_share.mojom.ContactManagerRequest = nearby_share.mojom.ContactManagerPendingReceiver;

