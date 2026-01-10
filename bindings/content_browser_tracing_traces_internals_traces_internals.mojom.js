// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/tracing/traces_internals/traces_internals.mojom
// Module: traces_internals.mojom

'use strict';

// Module namespace
var traces_internals = traces_internals || {};
traces_internals.mojom = traces_internals.mojom || {};
var url = url || {};

traces_internals.mojom.ReportUploadStateSpec = { $: mojo.internal.Enum() };
traces_internals.mojom.SkipUploadReasonSpec = { $: mojo.internal.Enum() };
traces_internals.mojom.TracingScenarioStateSpec = { $: mojo.internal.Enum() };
traces_internals.mojom.ClientTraceReportSpec = { $: {} };
traces_internals.mojom.ScenarioSpec = { $: {} };
traces_internals.mojom.TraceCategorySpec = { $: {} };
traces_internals.mojom.TracesInternalsHandlerFactory = {};
traces_internals.mojom.TracesInternalsHandlerFactory.$interfaceName = 'traces_internals.mojom.TracesInternalsHandlerFactory';
traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler = {};
traces_internals.mojom.PageHandler.$interfaceName = 'traces_internals.mojom.PageHandler';
traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec = { $: {} };
traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec = { $: {} };
traces_internals.mojom.Page = {};
traces_internals.mojom.Page.$interfaceName = 'traces_internals.mojom.Page';
traces_internals.mojom.Page_OnTraceComplete_ParamsSpec = { $: {} };

// Enum: ReportUploadState
traces_internals.mojom.ReportUploadState = {
  kNotUploaded: 0,
  kPending: 1,
  kPending_UserRequested: 2,
  kUploaded: 3,
};

// Enum: SkipUploadReason
traces_internals.mojom.SkipUploadReason = {
  kNoSkip: 0,
  kSizeLimitExceeded: 1,
  kNotAnonymized: 2,
  kScenarioQuotaExceeded: 3,
  kUploadTimedOut: 4,
  kLocalScenario: 5,
};

// Enum: TracingScenarioState
traces_internals.mojom.TracingScenarioState = {
  kDisabled: 0,
  kEnabled: 1,
  kSetup: 2,
  kStarting: 3,
  kRecording: 4,
  kStopping: 5,
  kFinalizing: 6,
  kCloning: 7,
};

// Struct: ClientTraceReport
mojo.internal.Struct(
    traces_internals.mojom.ClientTraceReportSpec, 'traces_internals.mojom.ClientTraceReport', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('scenario_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('upload_rule_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('upload_rule_value_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'upload_rule_value_$value', originalFieldName: 'upload_rule_value' }),
      mojo.internal.StructField('upload_rule_value_$value', 36, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'upload_rule_value_$flag', originalFieldName: 'upload_rule_value' }),
      mojo.internal.StructField('total_size', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('upload_state', 48, 0, traces_internals.mojom.ReportUploadStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('upload_time', 56, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('skip_reason', 64, 0, traces_internals.mojom.SkipUploadReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_trace_content', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: Scenario
mojo.internal.Struct(
    traces_internals.mojom.ScenarioSpec, 'traces_internals.mojom.Scenario', [
      mojo.internal.StructField('scenario_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_local_scenario', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('current_state', 20, 0, traces_internals.mojom.TracingScenarioStateSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TraceCategory
mojo.internal.Struct(
    traces_internals.mojom.TraceCategorySpec, 'traces_internals.mojom.TraceCategory', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_group', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tags', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: TracesInternalsHandlerFactory
mojo.internal.Struct(
    traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec, 'traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(traces_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(traces_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

traces_internals.mojom.TracesInternalsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'traces_internals.mojom.TracesInternalsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new traces_internals.mojom.TracesInternalsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

traces_internals.mojom.TracesInternalsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

traces_internals.mojom.TracesInternalsHandlerFactory.getRemote = function() {
  let remote = new traces_internals.mojom.TracesInternalsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'traces_internals.mojom.TracesInternalsHandlerFactory',
    'context');
  return remote.$;
};

traces_internals.mojom.TracesInternalsHandlerFactoryPtr = traces_internals.mojom.TracesInternalsHandlerFactoryRemote;
traces_internals.mojom.TracesInternalsHandlerFactoryRequest = traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec, 'traces_internals.mojom.PageHandler_StartTraceSession_Params', [
      mojo.internal.StructField('config_pb', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('enable_privacy_filters', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_StartTraceSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec, 'traces_internals.mojom.PageHandler_CloneTraceSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParams', [
      mojo.internal.StructField('trace', 0, 0, mojo_base.mojom.BigBufferSpec, null, true, 0, undefined),
      mojo.internal.StructField('uuid', 16, 0, mojo_base.mojom.TokenSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec, 'traces_internals.mojom.PageHandler_StopTraceSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_StopTraceSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec, 'traces_internals.mojom.PageHandler_GetTrackEventCategories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParams', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(traces_internals.mojom.TraceCategorySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec, 'traces_internals.mojom.PageHandler_GetBufferUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('percent_full', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('data_loss', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec, 'traces_internals.mojom.PageHandler_GetAllTraceReports_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParams', [
      mojo.internal.StructField('reports', 0, 0, mojo.internal.Array(traces_internals.mojom.ClientTraceReportSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_DeleteSingleTrace_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec, 'traces_internals.mojom.PageHandler_DeleteAllTraces_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_UserUploadSingleTrace_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_DownloadTrace_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DownloadTrace_ResponseParams', [
      mojo.internal.StructField('trace', 0, 0, mojo_base.mojom.BigBufferSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec, 'traces_internals.mojom.PageHandler_GetAllScenarios_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.Array(traces_internals.mojom.ScenarioSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec, 'traces_internals.mojom.PageHandler_SetEnabledScenarios_Params', [
      mojo.internal.StructField('new_config', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromString_Params', [
      mojo.internal.StructField('config_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_Params', [
      mojo.internal.StructField('config_pb', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec, 'traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec, 'traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec, 'traces_internals.mojom.PageHandler_GetSystemTracingState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParams', [
      mojo.internal.StructField('service_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('service_registered', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec, 'traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParams', [
      mojo.internal.StructField('shield_icon_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec, 'traces_internals.mojom.PageHandler_EnableSystemTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec, 'traces_internals.mojom.PageHandler_DisableSystemTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

traces_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

traces_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'traces_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      traces_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new traces_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

traces_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startTraceSession(config_pb, enable_privacy_filters) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec,
      traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec,
      [config_pb, enable_privacy_filters]);
  }

  cloneTraceSession() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec,
      traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec,
      []);
  }

  stopTraceSession() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec,
      traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec,
      []);
  }

  getTrackEventCategories() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec,
      traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec,
      []);
  }

  getBufferUsage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec,
      traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec,
      []);
  }

  getAllTraceReports() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec,
      traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec,
      []);
  }

  deleteSingleTrace(uuid) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec,
      traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec,
      [uuid]);
  }

  deleteAllTraces() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec,
      traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec,
      []);
  }

  userUploadSingleTrace(uuid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec,
      traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec,
      [uuid]);
  }

  downloadTrace(uuid) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec,
      traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec,
      [uuid]);
  }

  getAllScenarios() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec,
      traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec,
      []);
  }

  setEnabledScenarios(new_config) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec,
      traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec,
      [new_config]);
  }

  setScenariosConfigFromString(config_string) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec,
      traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec,
      [config_string]);
  }

  setScenariosConfigFromBuffer(config_pb) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec,
      traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec,
      [config_pb]);
  }

  getPrivacyFilterEnabled() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec,
      traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec,
      []);
  }

  setPrivacyFilterEnabled(enable) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec,
      null,
      [enable]);
  }

  getSystemTracingState() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec,
      traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec,
      []);
  }

  getSecurityShieldIconUrl() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec,
      traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec,
      []);
  }

  enableSystemTracing() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec,
      traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec,
      []);
  }

  disableSystemTracing() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec,
      traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec,
      []);
  }

};

traces_internals.mojom.PageHandler.getRemote = function() {
  let remote = new traces_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'traces_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

traces_internals.mojom.PageHandlerPtr = traces_internals.mojom.PageHandlerRemote;
traces_internals.mojom.PageHandlerRequest = traces_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    traces_internals.mojom.Page_OnTraceComplete_ParamsSpec, 'traces_internals.mojom.Page_OnTraceComplete_Params', [
      mojo.internal.StructField('trace', 0, 0, mojo_base.mojom.BigBufferSpec, null, true, 0, undefined),
      mojo.internal.StructField('uuid', 16, 0, mojo_base.mojom.TokenSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

traces_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

traces_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'traces_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      traces_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new traces_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

traces_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTraceComplete(trace, uuid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      traces_internals.mojom.Page_OnTraceComplete_ParamsSpec,
      null,
      [trace, uuid]);
  }

};

traces_internals.mojom.Page.getRemote = function() {
  let remote = new traces_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'traces_internals.mojom.Page',
    'context');
  return remote.$;
};

traces_internals.mojom.PagePtr = traces_internals.mojom.PageRemote;
traces_internals.mojom.PageRequest = traces_internals.mojom.PagePendingReceiver;

