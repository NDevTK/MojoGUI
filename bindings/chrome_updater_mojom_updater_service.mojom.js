// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/mojom/updater_service.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};


// Enum: State
updater.mojom.State = {
  kNotStarted: 0,
  kCheckingForUpdates: 1,
  kUpdateAvailable: 2,
  kDownloading: 3,
  kInstalling: 4,
  kUpdated: 5,
  kNoUpdate: 6,
  kUpdateError: 7,
};
updater.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: PolicySource
updater.mojom.PolicySource = {
  kSourceDefault: 0,
  kSourceExternalConstants: 1,
  kSourcePlatform: 2,
  kSourceCloud: 3,
};
updater.mojom.PolicySourceSpec = { $: mojo.internal.Enum() };

// Enum: PolicySameVersionUpdate
updater.mojom.PolicySameVersionUpdate = {
  kAllowed: 0,
};
updater.mojom.PolicySameVersionUpdateSpec = { $: mojo.internal.Enum() };

// Enum: Result
updater.mojom.Result = {
  kSuccess: 0,
  kUpdateInProgress: 1,
  kUpdateCanceled: 2,
  kRetryLater: 3,
  kServiceFailed: 4,
  kUpdateCheckFailed: 5,
  kAppNotFound: 6,
  kInvalidArgument: 7,
  kInactive: 8,
  kIPCConnectionFailed: 9,
  kInstallFailed: 10,
  kPermissionDenied: 11,
};
updater.mojom.ResultSpec = { $: mojo.internal.Enum() };

// Enum: ErrorCategory
updater.mojom.ErrorCategory = {
  kNone: 0,
  kDownload: 1,
  kUnpack: 2,
  kInstall: 3,
  kService: 4,
  kUpdateCheck: 5,
};
updater.mojom.ErrorCategorySpec = { $: mojo.internal.Enum() };

// Enum: Priority
updater.mojom.Priority = {
  kBackground: 0,
  kForeground: 1,
};
updater.mojom.PrioritySpec = { $: mojo.internal.Enum() };

// Struct: RegistrationRequest
updater.mojom.RegistrationRequestSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.RegistrationRequest',
      packedSize: 144,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'brand_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'brand_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'ap', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'existence_checker_path', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'ap_path', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 1 },
        { name: 'ap_key', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'version_path', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 1 },
        { name: 'version_key', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'install_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'lang', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
        { name: 'dla_$flag', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'dla_$value', originalFieldName: 'dla' } },
        { name: 'dla_$value', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'dla_$flag', originalFieldName: 'dla' } },
        { name: 'dlrc_$flag', packedOffset: 132, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'dlrc_$value', originalFieldName: 'dlrc' } },
        { name: 'dlrc_$value', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'dlrc_$flag', originalFieldName: 'dlrc' } },
        { name: 'install_date_$flag', packedOffset: 132, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'install_date_$value', originalFieldName: 'install_date' } },
        { name: 'install_date_$value', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 4, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'install_date_$flag', originalFieldName: 'install_date' } },
        { name: 'cohort', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 4 },
        { name: 'cohort_name', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 4 },
        { name: 'cohort_hint', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 88}, {version: 2, packedSize: 96}, {version: 3, packedSize: 104}, {version: 4, packedSize: 144}]
    }
  }
};

// Struct: UpdateState
updater.mojom.UpdateStateSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateState',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AppState
updater.mojom.AppStateSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.AppState',
      packedSize: 96,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'ap', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'brand_code', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'brand_path', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'ecp', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'ap_path', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 1 },
        { name: 'ap_key', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'version_path', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 1 },
        { name: 'version_key', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'cohort', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 88}, {version: 2, packedSize: 96}]
    }
  }
};

// Struct: PolicyValue
updater.mojom.PolicyValueSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PolicyValue',
      packedSize: 16,
      fields: [
        { name: 'kSourceUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UpdaterState
updater.mojom.UpdaterStateSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdaterState',
      packedSize: 40,
      fields: [
        { name: 'active_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'inactive_versions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'last_checked', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_started', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: UpdateService
updater.mojom.UpdateService = {};

updater.mojom.UpdateService_GetVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_GetVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_FetchPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_FetchPolicies_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: enterprise_companion.mojom.PolicyFetchReasonSpec, nullable: false, minVersion: 4 },
      ],
      versions: [{version: 4, packedSize: 16}]
    }
  }
};

updater.mojom.UpdateService_RegisterApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_RegisterApp_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: updater.mojom.RegistrationRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

updater.mojom.UpdateService_GetAppStates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_GetAppStates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_RunPeriodicTasks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_UpdateAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_UpdateAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_Update_Params',
      packedSize: 48,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_data_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 16, packedBitOffset: 0, type: updater.mojom.PrioritySpec, nullable: false, minVersion: 0 },
        { name: 'policy_same_version_update', packedOffset: 20, packedBitOffset: 0, type: updater.mojom.PolicySameVersionUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'do_update_check_only', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 40}, {version: 3, packedSize: 48}]
    }
  }
};

updater.mojom.UpdateService_Install_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_Install_Params',
      packedSize: 48,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: updater.mojom.RegistrationRequestSpec, nullable: false, minVersion: 0 },
        { name: 'client_install_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_data_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 24, packedBitOffset: 0, type: updater.mojom.PrioritySpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 3, packedSize: 48}]
    }
  }
};

updater.mojom.UpdateService_CancelInstalls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_CancelInstalls_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

updater.mojom.UpdateService_RunInstaller_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_RunInstaller_Params',
      packedSize: 56,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'installer_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'install_args', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_settings', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 3, packedSize: 56}]
    }
  }
};

updater.mojom.UpdateService_CheckForUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_CheckForUpdate_Params',
      packedSize: 32,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: updater.mojom.PrioritySpec, nullable: false, minVersion: 0 },
        { name: 'policy_same_version_update', packedOffset: 12, packedBitOffset: 0, type: updater.mojom.PolicySameVersionUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 3, packedSize: 32}]
    }
  }
};

updater.mojom.UpdateService_GetUpdaterState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_GetUpdaterState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_GetUpdaterPolicies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_GetAppPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService_GetAppPolicies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.UpdateServiceRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.UpdateService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.UpdateServicePendingReceiver,
      handle);
    this.$ = new updater.mojom.UpdateServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.UpdateServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getVersion() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.UpdateService_GetVersion_ParamsSpec,
      updater.mojom.UpdateService_GetVersion_ResponseParamsSpec,
      []);
  }

  fetchPolicies(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.UpdateService_FetchPolicies_ParamsSpec,
      updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec,
      [reason]);
  }

  registerApp(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.UpdateService_RegisterApp_ParamsSpec,
      updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec,
      [request]);
  }

  getAppStates() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      updater.mojom.UpdateService_GetAppStates_ParamsSpec,
      updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec,
      []);
  }

  runPeriodicTasks() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec,
      null,
      []);
  }

  updateAll() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      updater.mojom.UpdateService_UpdateAll_ParamsSpec,
      updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec,
      []);
  }

  update(app_id, install_data_index, priority, policy_same_version_update, do_update_check_only, language) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      updater.mojom.UpdateService_Update_ParamsSpec,
      updater.mojom.UpdateService_Update_ResponseParamsSpec,
      [app_id, install_data_index, priority, policy_same_version_update, do_update_check_only, language]);
  }

  install(registration, client_install_data, install_data_index, priority, language) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      updater.mojom.UpdateService_Install_ParamsSpec,
      updater.mojom.UpdateService_Install_ResponseParamsSpec,
      [registration, client_install_data, install_data_index, priority, language]);
  }

  cancelInstalls(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      updater.mojom.UpdateService_CancelInstalls_ParamsSpec,
      null,
      [app_id]);
  }

  runInstaller(app_id, installer_path, install_args, install_data, install_settings, language) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      updater.mojom.UpdateService_RunInstaller_ParamsSpec,
      updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec,
      [app_id, installer_path, install_args, install_data, install_settings, language]);
  }

  checkForUpdate(app_id, priority, policy_same_version_update, language) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      updater.mojom.UpdateService_CheckForUpdate_ParamsSpec,
      updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec,
      [app_id, priority, policy_same_version_update, language]);
  }

  getUpdaterState() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      updater.mojom.UpdateService_GetUpdaterState_ParamsSpec,
      updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec,
      []);
  }

  getUpdaterPolicies() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec,
      updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec,
      []);
  }

  getAppPolicies() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      updater.mojom.UpdateService_GetAppPolicies_ParamsSpec,
      updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec,
      []);
  }

};

updater.mojom.UpdateService.getRemote = function() {
  let remote = new updater.mojom.UpdateServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.UpdateService',
    'context');
  return remote.$;
};

// ParamsSpec for GetVersion
updater.mojom.UpdateService_GetVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_GetVersion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetVersion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchPolicies
updater.mojom.UpdateService_FetchPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.FetchPolicies_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: enterprise_companion.mojom.PolicyFetchReasonSpec, nullable: false, minVersion: 4 },
      ],
      versions: [{version: 4, packedSize: 16}]
    }
  }
};

updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.FetchPolicies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterApp
updater.mojom.UpdateService_RegisterApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.RegisterApp_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: updater.mojom.RegistrationRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.RegisterApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAppStates
updater.mojom.UpdateService_GetAppStates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetAppStates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetAppStates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app_states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(updater.mojom.AppStateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunPeriodicTasks
updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.RunPeriodicTasks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateAll
updater.mojom.UpdateService_UpdateAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.UpdateAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.UpdateAll_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Update
updater.mojom.UpdateService_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.Update_Params',
      packedSize: 48,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_data_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 16, packedBitOffset: 0, type: updater.mojom.PrioritySpec, nullable: false, minVersion: 0 },
        { name: 'policy_same_version_update', packedOffset: 20, packedBitOffset: 0, type: updater.mojom.PolicySameVersionUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'do_update_check_only', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 40}, {version: 3, packedSize: 48}]
    }
  }
};

updater.mojom.UpdateService_Update_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.Update_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Install
updater.mojom.UpdateService_Install_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.Install_Params',
      packedSize: 48,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: updater.mojom.RegistrationRequestSpec, nullable: false, minVersion: 0 },
        { name: 'client_install_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_data_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 24, packedBitOffset: 0, type: updater.mojom.PrioritySpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 3, packedSize: 48}]
    }
  }
};

updater.mojom.UpdateService_Install_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.Install_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelInstalls
updater.mojom.UpdateService_CancelInstalls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.CancelInstalls_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunInstaller
updater.mojom.UpdateService_RunInstaller_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.RunInstaller_Params',
      packedSize: 56,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'installer_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'install_args', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_settings', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 3, packedSize: 56}]
    }
  }
};

updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.RunInstaller_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckForUpdate
updater.mojom.UpdateService_CheckForUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.CheckForUpdate_Params',
      packedSize: 32,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: updater.mojom.PrioritySpec, nullable: false, minVersion: 0 },
        { name: 'policy_same_version_update', packedOffset: 12, packedBitOffset: 0, type: updater.mojom.PolicySameVersionUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 3, packedSize: 32}]
    }
  }
};

updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.CheckForUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUpdaterState
updater.mojom.UpdateService_GetUpdaterState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetUpdaterState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetUpdaterState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updater_state', packedOffset: 0, packedBitOffset: 0, type: updater.mojom.UpdaterStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUpdaterPolicies
updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetUpdaterPolicies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetUpdaterPolicies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updater_policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, updater.mojom.PolicyValueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAppPolicies
updater.mojom.UpdateService_GetAppPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetAppPolicies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateService.GetAppPolicies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app_policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Map(mojo.internal.String, updater.mojom.PolicyValueSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
updater.mojom.UpdateServicePtr = updater.mojom.UpdateServiceRemote;
updater.mojom.UpdateServiceRequest = updater.mojom.UpdateServicePendingReceiver;


// Interface: StateChangeObserver
updater.mojom.StateChangeObserver = {};

updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.StateChangeObserver_OnStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: updater.mojom.UpdateStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

updater.mojom.StateChangeObserver_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.StateChangeObserver_OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: UpdateService.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

updater.mojom.StateChangeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.StateChangeObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.StateChangeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.StateChangeObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.StateChangeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.StateChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStateChange(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec,
      null,
      [state]);
  }

  onComplete(result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.StateChangeObserver_OnComplete_ParamsSpec,
      null,
      [result]);
  }

};

updater.mojom.StateChangeObserver.getRemote = function() {
  let remote = new updater.mojom.StateChangeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.StateChangeObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStateChange
updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.StateChangeObserver.OnStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: updater.mojom.UpdateStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnComplete
updater.mojom.StateChangeObserver_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.StateChangeObserver.OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: UpdateService.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
updater.mojom.StateChangeObserverPtr = updater.mojom.StateChangeObserverRemote;
updater.mojom.StateChangeObserverRequest = updater.mojom.StateChangeObserverPendingReceiver;

