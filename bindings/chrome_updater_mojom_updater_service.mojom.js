// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/mojom/updater_service.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};
var mojo_base = mojo_base || {};
var enterprise_companion = enterprise_companion || {};

updater.mojom.StateSpec = { $: mojo.internal.Enum() };
updater.mojom.PolicySourceSpec = { $: mojo.internal.Enum() };
updater.mojom.PolicySameVersionUpdateSpec = { $: mojo.internal.Enum() };
updater.mojom.ResultSpec = { $: mojo.internal.Enum() };
updater.mojom.ErrorCategorySpec = { $: mojo.internal.Enum() };
updater.mojom.PrioritySpec = { $: mojo.internal.Enum() };
updater.mojom.RegistrationRequestSpec = { $: {} };
updater.mojom.UpdateStateSpec = { $: {} };
updater.mojom.AppStateSpec = { $: {} };
updater.mojom.PolicyValueSpec = { $: {} };
updater.mojom.UpdaterStateSpec = { $: {} };
updater.mojom.UpdateService = {};
updater.mojom.UpdateService.$interfaceName = 'updater.mojom.UpdateService';
updater.mojom.UpdateService_GetVersion_ParamsSpec = { $: {} };
updater.mojom.UpdateService_GetVersion_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_FetchPolicies_ParamsSpec = { $: {} };
updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_RegisterApp_ParamsSpec = { $: {} };
updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_GetAppStates_ParamsSpec = { $: {} };
updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec = { $: {} };
updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_UpdateAll_ParamsSpec = { $: {} };
updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_Update_ParamsSpec = { $: {} };
updater.mojom.UpdateService_Update_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_Install_ParamsSpec = { $: {} };
updater.mojom.UpdateService_Install_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_CancelInstalls_ParamsSpec = { $: {} };
updater.mojom.UpdateService_RunInstaller_ParamsSpec = { $: {} };
updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_CheckForUpdate_ParamsSpec = { $: {} };
updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_GetUpdaterState_ParamsSpec = { $: {} };
updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec = { $: {} };
updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateService_GetAppPolicies_ParamsSpec = { $: {} };
updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec = { $: {} };
updater.mojom.StateChangeObserver = {};
updater.mojom.StateChangeObserver.$interfaceName = 'updater.mojom.StateChangeObserver';
updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec = { $: {} };
updater.mojom.StateChangeObserver_OnComplete_ParamsSpec = { $: {} };

// Enum: State
updater.mojom.State = {
  kUnknown: 0,
  kNotStarted: 1,
  kCheckingForUpdates: 2,
  kUpdateAvailable: 3,
  kDownloading: 4,
  kInstalling: 5,
  kUpdated: 6,
  kNoUpdate: 7,
  kUpdateError: 8,
  MinVersion: 8,
  MinVersion: 8,
};

// Enum: PolicySource
updater.mojom.PolicySource = {
  kSourceUnknown: 0,
  kSourceDefault: 1,
  kSourceExternalConstants: 2,
  kSourcePlatform: 3,
  kSourceCloud: 4,
};

// Enum: PolicySameVersionUpdate
updater.mojom.PolicySameVersionUpdate = {
  kNotAllowed: 0,
  kAllowed: 1,
};

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
  kUnknown: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
};

// Enum: ErrorCategory
updater.mojom.ErrorCategory = {
  kNone: 0,
  kDownload: 1,
  kUnpack: 2,
  kInstall: 3,
  kService: 4,
  kUpdateCheck: 5,
  kUnknown: 6,
  MinVersion: 6,
};

// Enum: Priority
updater.mojom.Priority = {
  kUnknown: 0,
  kBackground: 1,
  kForeground: 2,
};

// Struct: RegistrationRequest
mojo.internal.Struct(
    updater.mojom.RegistrationRequestSpec, 'updater.mojom.RegistrationRequest', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('brand_code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('brand_path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ap', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('existence_checker_path', 40, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ap_path', 48, 0, mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('ap_key', 56, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('version_path', 64, 0, mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('version_key', 72, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('install_id', 80, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('lang', 88, 0, mojo.internal.String, null, true, 3, undefined),
      mojo.internal.StructField('cohort', 96, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('cohort_name', 104, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('cohort_hint', 112, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('dla_$value', 120, 0, mojo.internal.Int32, 0, false, 4, { isPrimary: false, linkedValueFieldName: 'dla_$flag', originalFieldName: 'dla' }),
      mojo.internal.StructField('dlrc_$value', 124, 0, mojo.internal.Int32, 0, false, 4, { isPrimary: false, linkedValueFieldName: 'dlrc_$flag', originalFieldName: 'dlrc' }),
      mojo.internal.StructField('install_date_$value', 128, 0, mojo.internal.Int32, 0, false, 4, { isPrimary: false, linkedValueFieldName: 'install_date_$flag', originalFieldName: 'install_date' }),
      mojo.internal.StructField('dla_$flag', 132, 0, mojo.internal.Bool, false, false, 4, { isPrimary: true, linkedValueFieldName: 'dla_$value', originalFieldName: 'dla' }),
      mojo.internal.StructField('dlrc_$flag', 132, 1, mojo.internal.Bool, false, false, 4, { isPrimary: true, linkedValueFieldName: 'dlrc_$value', originalFieldName: 'dlrc' }),
      mojo.internal.StructField('install_date_$flag', 132, 2, mojo.internal.Bool, false, false, 4, { isPrimary: true, linkedValueFieldName: 'install_date_$value', originalFieldName: 'install_date' }),
    ],
    [[0, 56], [1, 88], [2, 96], [3, 104], [4, 144]]);

// Struct: UpdateState
mojo.internal.Struct(
    updater.mojom.UpdateStateSpec, 'updater.mojom.UpdateState', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AppState
mojo.internal.Struct(
    updater.mojom.AppStateSpec, 'updater.mojom.AppState', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ap', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('brand_code', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('brand_path', 32, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ecp', 40, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ap_path', 48, 0, mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('ap_key', 56, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('version_path', 64, 0, mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('version_key', 72, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('cohort', 80, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 56], [1, 88], [2, 96]]);

// Struct: PolicyValue
mojo.internal.Struct(
    updater.mojom.PolicyValueSpec, 'updater.mojom.PolicyValue', [
      mojo.internal.StructField('kSourceUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UpdaterState
mojo.internal.Struct(
    updater.mojom.UpdaterStateSpec, 'updater.mojom.UpdaterState', [
      mojo.internal.StructField('active_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('inactive_versions', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('last_checked', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_started', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: UpdateService
mojo.internal.Struct(
    updater.mojom.UpdateService_GetVersion_ParamsSpec, 'updater.mojom.UpdateService_GetVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetVersion_ResponseParamsSpec, 'updater.mojom.UpdateService_GetVersion_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_FetchPolicies_ParamsSpec, 'updater.mojom.UpdateService_FetchPolicies_Params', [
      mojo.internal.StructField('reason', 0, 0, enterprise_companion.mojom.PolicyFetchReasonSpec.$, null, false, 4, undefined),
    ],
    [[0, 8], [4, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec, 'updater.mojom.UpdateService_FetchPolicies_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_RegisterApp_ParamsSpec, 'updater.mojom.UpdateService_RegisterApp_Params', [
      mojo.internal.StructField('request', 0, 0, updater.mojom.RegistrationRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec, 'updater.mojom.UpdateService_RegisterApp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetAppStates_ParamsSpec, 'updater.mojom.UpdateService_GetAppStates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec, 'updater.mojom.UpdateService_GetAppStates_ResponseParams', [
      mojo.internal.StructField('app_states', 0, 0, mojo.internal.Array(updater.mojom.AppStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec, 'updater.mojom.UpdateService_RunPeriodicTasks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec, 'updater.mojom.UpdateService_RunPeriodicTasks_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_UpdateAll_ParamsSpec, 'updater.mojom.UpdateService_UpdateAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec, 'updater.mojom.UpdateService_UpdateAll_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_Update_ParamsSpec, 'updater.mojom.UpdateService_Update_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('install_data_index', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('priority', 16, 0, updater.mojom.PrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_same_version_update', 24, 0, updater.mojom.PolicySameVersionUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('do_update_check_only', 32, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('language', 40, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 40], [1, 48], [3, 56]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_Update_ResponseParamsSpec, 'updater.mojom.UpdateService_Update_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_Install_ParamsSpec, 'updater.mojom.UpdateService_Install_Params', [
      mojo.internal.StructField('registration', 0, 0, updater.mojom.RegistrationRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_install_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('install_data_index', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('priority', 24, 0, updater.mojom.PrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 32, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 40], [3, 48]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_Install_ResponseParamsSpec, 'updater.mojom.UpdateService_Install_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_CancelInstalls_ParamsSpec, 'updater.mojom.UpdateService_CancelInstalls_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_RunInstaller_ParamsSpec, 'updater.mojom.UpdateService_RunInstaller_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('installer_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('install_args', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('install_data', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('install_settings', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 40, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 48], [3, 56]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec, 'updater.mojom.UpdateService_RunInstaller_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_CheckForUpdate_ParamsSpec, 'updater.mojom.UpdateService_CheckForUpdate_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, updater.mojom.PrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_same_version_update', 16, 0, updater.mojom.PolicySameVersionUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 24, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 32], [3, 40]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec, 'updater.mojom.UpdateService_CheckForUpdate_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetUpdaterState_ParamsSpec, 'updater.mojom.UpdateService_GetUpdaterState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec, 'updater.mojom.UpdateService_GetUpdaterState_ResponseParams', [
      mojo.internal.StructField('updater_state', 0, 0, updater.mojom.UpdaterStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec, 'updater.mojom.UpdateService_GetUpdaterPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec, 'updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParams', [
      mojo.internal.StructField('updater_policies', 0, 0, mojo.internal.Map(mojo.internal.String, updater.mojom.PolicyValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetAppPolicies_ParamsSpec, 'updater.mojom.UpdateService_GetAppPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec, 'updater.mojom.UpdateService_GetAppPolicies_ResponseParams', [
      mojo.internal.StructField('app_policies', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Map(mojo.internal.String, updater.mojom.PolicyValueSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  fetchPolicies(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.UpdateService_FetchPolicies_ParamsSpec,
      updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec,
      [reason],
      false);
  }

  registerApp(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.UpdateService_RegisterApp_ParamsSpec,
      updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec,
      [request],
      false);
  }

  getAppStates() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      updater.mojom.UpdateService_GetAppStates_ParamsSpec,
      updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec,
      [],
      false);
  }

  runPeriodicTasks() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec,
      updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec,
      [],
      false);
  }

  updateAll() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      updater.mojom.UpdateService_UpdateAll_ParamsSpec,
      updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec,
      [],
      false);
  }

  update(app_id, install_data_index, priority, policy_same_version_update, do_update_check_only, language) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      updater.mojom.UpdateService_Update_ParamsSpec,
      updater.mojom.UpdateService_Update_ResponseParamsSpec,
      [app_id, install_data_index, priority, policy_same_version_update, do_update_check_only, language],
      false);
  }

  install(registration, client_install_data, install_data_index, priority, language) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      updater.mojom.UpdateService_Install_ParamsSpec,
      updater.mojom.UpdateService_Install_ResponseParamsSpec,
      [registration, client_install_data, install_data_index, priority, language],
      false);
  }

  cancelInstalls(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      updater.mojom.UpdateService_CancelInstalls_ParamsSpec,
      null,
      [app_id],
      false);
  }

  runInstaller(app_id, installer_path, install_args, install_data, install_settings, language) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      updater.mojom.UpdateService_RunInstaller_ParamsSpec,
      updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec,
      [app_id, installer_path, install_args, install_data, install_settings, language],
      false);
  }

  checkForUpdate(app_id, priority, policy_same_version_update, language) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      updater.mojom.UpdateService_CheckForUpdate_ParamsSpec,
      updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec,
      [app_id, priority, policy_same_version_update, language],
      false);
  }

  getUpdaterState() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      updater.mojom.UpdateService_GetUpdaterState_ParamsSpec,
      updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec,
      [],
      false);
  }

  getUpdaterPolicies() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec,
      updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec,
      [],
      false);
  }

  getAppPolicies() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      updater.mojom.UpdateService_GetAppPolicies_ParamsSpec,
      updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec,
      [],
      false);
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

updater.mojom.UpdateServiceReceiver = class {
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
        
        // Try Method 0: GetVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_GetVersion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVersion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: FetchPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_FetchPolicies_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchPolicies (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: RegisterApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_RegisterApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterApp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetAppStates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_GetAppStates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppStates (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: RunPeriodicTasks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunPeriodicTasks (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: UpdateAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_UpdateAll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAll (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: Install
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_Install_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Install (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: CancelInstalls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_CancelInstalls_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelInstalls (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: RunInstaller
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_RunInstaller_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunInstaller (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: CheckForUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_CheckForUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckForUpdate (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: GetUpdaterState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_GetUpdaterState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUpdaterState (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: GetUpdaterPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUpdaterPolicies (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: GetAppPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.UpdateService_GetAppPolicies_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppPolicies (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_GetVersion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getVersion');
          const result = this.impl.getVersion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_GetVersion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_FetchPolicies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fetchPolicies');
          const result = this.impl.fetchPolicies(params.reason);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_RegisterApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerApp');
          const result = this.impl.registerApp(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_GetAppStates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppStates');
          const result = this.impl.getAppStates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.runPeriodicTasks');
          const result = this.impl.runPeriodicTasks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_UpdateAll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateAll');
          const result = this.impl.updateAll();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.app_id, params.install_data_index, params.priority, params.policy_same_version_update, params.do_update_check_only, params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_Update_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_Install_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.install');
          const result = this.impl.install(params.registration, params.client_install_data, params.install_data_index, params.priority, params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_Install_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_CancelInstalls_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelInstalls');
          const result = this.impl.cancelInstalls(params.app_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_RunInstaller_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.runInstaller');
          const result = this.impl.runInstaller(params.app_id, params.installer_path, params.install_args, params.install_data, params.install_settings, params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_CheckForUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.checkForUpdate');
          const result = this.impl.checkForUpdate(params.app_id, params.priority, params.policy_same_version_update, params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_GetUpdaterState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUpdaterState');
          const result = this.impl.getUpdaterState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUpdaterPolicies');
          const result = this.impl.getUpdaterPolicies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.UpdateService_GetAppPolicies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAppPolicies');
          const result = this.impl.getAppPolicies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec);
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

updater.mojom.UpdateServiceReceiver = updater.mojom.UpdateServiceReceiver;

updater.mojom.UpdateServicePtr = updater.mojom.UpdateServiceRemote;
updater.mojom.UpdateServiceRequest = updater.mojom.UpdateServicePendingReceiver;


// Interface: StateChangeObserver
mojo.internal.Struct(
    updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec, 'updater.mojom.StateChangeObserver_OnStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, updater.mojom.UpdateStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.StateChangeObserver_OnComplete_ParamsSpec, 'updater.mojom.StateChangeObserver_OnComplete_Params', [
      mojo.internal.StructField('result', 0, 0, UpdateService.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [state],
      false);
  }

  onComplete(result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.StateChangeObserver_OnComplete_ParamsSpec,
      null,
      [result],
      false);
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

updater.mojom.StateChangeObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: OnStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStateChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater.mojom.StateChangeObserver_OnComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStateChange');
          const result = this.impl.onStateChange(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(updater.mojom.StateChangeObserver_OnComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

updater.mojom.StateChangeObserverReceiver = updater.mojom.StateChangeObserverReceiver;

updater.mojom.StateChangeObserverPtr = updater.mojom.StateChangeObserverRemote;
updater.mojom.StateChangeObserverRequest = updater.mojom.StateChangeObserverPendingReceiver;

