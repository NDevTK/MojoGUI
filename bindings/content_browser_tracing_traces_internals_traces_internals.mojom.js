// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/tracing/traces_internals/traces_internals.mojom
// Module: traces_internals.mojom

'use strict';

// Module namespace
var traces_internals = traces_internals || {};
traces_internals.mojom = traces_internals.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scenario_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('upload_rule_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('total_size', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('upload_state', 40, 0, traces_internals.mojom.ReportUploadStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('upload_time', 48, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('skip_reason', 56, 0, traces_internals.mojom.SkipUploadReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('upload_rule_value_$value', 64, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'upload_rule_value_$flag', originalFieldName: 'upload_rule_value' }),
      mojo.internal.StructField('upload_rule_value_$flag', 68, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'upload_rule_value_$value', originalFieldName: 'upload_rule_value' }),
      mojo.internal.StructField('has_trace_content', 68, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: Scenario
mojo.internal.Struct(
    traces_internals.mojom.ScenarioSpec, 'traces_internals.mojom.Scenario', [
      mojo.internal.StructField('scenario_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('current_state', 16, 0, traces_internals.mojom.TracingScenarioStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_local_scenario', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TraceCategory
mojo.internal.Struct(
    traces_internals.mojom.TraceCategorySpec, 'traces_internals.mojom.TraceCategory', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tags', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('is_group', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: TracesInternalsHandlerFactory
mojo.internal.Struct(
    traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec, 'traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(traces_internals.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(traces_internals.mojom.PageHandlerSpec), null, false, 0, undefined),
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
      [page, handler],
      false);
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

traces_internals.mojom.TracesInternalsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
  }
};

traces_internals.mojom.TracesInternalsHandlerFactoryReceiver = traces_internals.mojom.TracesInternalsHandlerFactoryReceiver;

traces_internals.mojom.TracesInternalsHandlerFactoryPtr = traces_internals.mojom.TracesInternalsHandlerFactoryRemote;
traces_internals.mojom.TracesInternalsHandlerFactoryRequest = traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec, 'traces_internals.mojom.PageHandler_StartTraceSession_Params', [
      mojo.internal.StructField('config_pb', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_privacy_filters', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
      mojo.internal.StructField('trace', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(traces_internals.mojom.TraceCategorySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec, 'traces_internals.mojom.PageHandler_GetBufferUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParams', [
      mojo.internal.StructField('percent_full', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('success', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data_loss', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec, 'traces_internals.mojom.PageHandler_GetAllTraceReports_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParams', [
      mojo.internal.StructField('reports', 0, 0, mojo.internal.Array(traces_internals.mojom.ClientTraceReportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_DeleteSingleTrace_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec, 'traces_internals.mojom.PageHandler_DownloadTrace_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_DownloadTrace_ResponseParams', [
      mojo.internal.StructField('trace', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec, 'traces_internals.mojom.PageHandler_GetAllScenarios_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec, 'traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.Array(traces_internals.mojom.ScenarioSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('config_pb', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      mojo.internal.StructField('shield_icon_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
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
      [config_pb, enable_privacy_filters],
      false);
  }

  cloneTraceSession() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec,
      traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec,
      [],
      false);
  }

  stopTraceSession() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec,
      traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec,
      [],
      false);
  }

  getTrackEventCategories() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec,
      traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec,
      [],
      false);
  }

  getBufferUsage() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec,
      traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec,
      [],
      false);
  }

  getAllTraceReports() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec,
      traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec,
      [],
      false);
  }

  deleteSingleTrace(uuid) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec,
      traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec,
      [uuid],
      false);
  }

  deleteAllTraces() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec,
      traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec,
      [],
      false);
  }

  userUploadSingleTrace(uuid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec,
      traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec,
      [uuid],
      false);
  }

  downloadTrace(uuid) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec,
      traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec,
      [uuid],
      false);
  }

  getAllScenarios() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec,
      traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec,
      [],
      false);
  }

  setEnabledScenarios(new_config) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec,
      traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec,
      [new_config],
      false);
  }

  setScenariosConfigFromString(config_string) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec,
      traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec,
      [config_string],
      false);
  }

  setScenariosConfigFromBuffer(config_pb) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec,
      traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec,
      [config_pb],
      false);
  }

  getPrivacyFilterEnabled() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec,
      traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setPrivacyFilterEnabled(enable) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec,
      null,
      [enable],
      false);
  }

  getSystemTracingState() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec,
      traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec,
      [],
      false);
  }

  getSecurityShieldIconUrl() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec,
      traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec,
      [],
      false);
  }

  enableSystemTracing() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec,
      traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec,
      [],
      false);
  }

  disableSystemTracing() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec,
      traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec,
      [],
      false);
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

traces_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startTraceSession(params.config_pb, params.enable_privacy_filters);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cloneTraceSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopTraceSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTrackEventCategories();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBufferUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAllTraceReports();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteSingleTrace(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteAllTraces();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.userUploadSingleTrace(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.downloadTrace(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAllScenarios();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEnabledScenarios(params.new_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setScenariosConfigFromString(params.config_string);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setScenariosConfigFromBuffer(params.config_pb);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPrivacyFilterEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPrivacyFilterEnabled(params.enable);
          break;
        }
        case 16: {
          const params = traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSystemTracingState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const params = traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSecurityShieldIconUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const params = traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableSystemTracing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const params = traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disableSystemTracing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

traces_internals.mojom.PageHandlerReceiver = traces_internals.mojom.PageHandlerReceiver;

traces_internals.mojom.PageHandlerPtr = traces_internals.mojom.PageHandlerRemote;
traces_internals.mojom.PageHandlerRequest = traces_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    traces_internals.mojom.Page_OnTraceComplete_ParamsSpec, 'traces_internals.mojom.Page_OnTraceComplete_Params', [
      mojo.internal.StructField('trace', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [trace, uuid],
      false);
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

traces_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = traces_internals.mojom.Page_OnTraceComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTraceComplete(params.trace, params.uuid);
          break;
        }
      }
    });
  }
};

traces_internals.mojom.PageReceiver = traces_internals.mojom.PageReceiver;

traces_internals.mojom.PagePtr = traces_internals.mojom.PageRemote;
traces_internals.mojom.PageRequest = traces_internals.mojom.PagePendingReceiver;

