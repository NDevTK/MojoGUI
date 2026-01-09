// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/tracing/traces_internals/traces_internals.mojom
// Module: traces_internals.mojom

'use strict';

// Module namespace
var traces_internals = traces_internals || {};
traces_internals.mojom = traces_internals.mojom || {};


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
traces_internals.mojom.ClientTraceReportSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.ClientTraceReport',
      packedSize: 88,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false },
        { name: 'creation_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'scenario_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'upload_rule_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'upload_rule_value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'total_size', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'upload_state', packedOffset: 48, packedBitOffset: 0, type: traces_internals.mojom.ReportUploadStateSpec, nullable: false },
        { name: 'upload_time', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'skip_reason', packedOffset: 64, packedBitOffset: 0, type: traces_internals.mojom.SkipUploadReasonSpec, nullable: false },
        { name: 'has_trace_content', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Scenario
traces_internals.mojom.ScenarioSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.Scenario',
      packedSize: 40,
      fields: [
        { name: 'scenario_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_local_scenario', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_enabled', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'current_state', packedOffset: 24, packedBitOffset: 0, type: traces_internals.mojom.TracingScenarioStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TraceCategory
traces_internals.mojom.TraceCategorySpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.TraceCategory',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tags', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TracesInternalsHandlerFactory
traces_internals.mojom.TracesInternalsHandlerFactory = {};

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

// ParamsSpec for CreatePageHandler
traces_internals.mojom.TracesInternalsHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.TracesInternalsHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
traces_internals.mojom.TracesInternalsHandlerFactoryPtr = traces_internals.mojom.TracesInternalsHandlerFactoryRemote;
traces_internals.mojom.TracesInternalsHandlerFactoryRequest = traces_internals.mojom.TracesInternalsHandlerFactoryPendingReceiver;


// Interface: PageHandler
traces_internals.mojom.PageHandler = {};

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

// ParamsSpec for StartTraceSession
traces_internals.mojom.PageHandler_StartTraceSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.StartTraceSession_Params',
      packedSize: 24,
      fields: [
        { name: 'config_pb', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'enable_privacy_filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_StartTraceSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.StartTraceSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloneTraceSession
traces_internals.mojom.PageHandler_CloneTraceSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.CloneTraceSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_CloneTraceSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.CloneTraceSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'trace', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: true },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopTraceSession
traces_internals.mojom.PageHandler_StopTraceSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.StopTraceSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_StopTraceSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.StopTraceSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTrackEventCategories
traces_internals.mojom.PageHandler_GetTrackEventCategories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetTrackEventCategories_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_GetTrackEventCategories_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetTrackEventCategories_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBufferUsage
traces_internals.mojom.PageHandler_GetBufferUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetBufferUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_GetBufferUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetBufferUsage_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'percent_full', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'data_loss', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllTraceReports
traces_internals.mojom.PageHandler_GetAllTraceReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetAllTraceReports_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_GetAllTraceReports_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetAllTraceReports_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'reports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteSingleTrace
traces_internals.mojom.PageHandler_DeleteSingleTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DeleteSingleTrace_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_DeleteSingleTrace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DeleteSingleTrace_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteAllTraces
traces_internals.mojom.PageHandler_DeleteAllTraces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DeleteAllTraces_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_DeleteAllTraces_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DeleteAllTraces_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UserUploadSingleTrace
traces_internals.mojom.PageHandler_UserUploadSingleTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.UserUploadSingleTrace_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_UserUploadSingleTrace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.UserUploadSingleTrace_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DownloadTrace
traces_internals.mojom.PageHandler_DownloadTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DownloadTrace_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_DownloadTrace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DownloadTrace_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'trace', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllScenarios
traces_internals.mojom.PageHandler_GetAllScenarios_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetAllScenarios_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_GetAllScenarios_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetAllScenarios_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEnabledScenarios
traces_internals.mojom.PageHandler_SetEnabledScenarios_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.SetEnabledScenarios_Params',
      packedSize: 16,
      fields: [
        { name: 'new_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_SetEnabledScenarios_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.SetEnabledScenarios_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetScenariosConfigFromString
traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.SetScenariosConfigFromString_Params',
      packedSize: 16,
      fields: [
        { name: 'config_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_SetScenariosConfigFromString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.SetScenariosConfigFromString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetScenariosConfigFromBuffer
traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.SetScenariosConfigFromBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'config_pb', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_SetScenariosConfigFromBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.SetScenariosConfigFromBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPrivacyFilterEnabled
traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetPrivacyFilterEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_GetPrivacyFilterEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetPrivacyFilterEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPrivacyFilterEnabled
traces_internals.mojom.PageHandler_SetPrivacyFilterEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.SetPrivacyFilterEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSystemTracingState
traces_internals.mojom.PageHandler_GetSystemTracingState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetSystemTracingState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_GetSystemTracingState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetSystemTracingState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'service_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'service_registered', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSecurityShieldIconUrl
traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetSecurityShieldIconUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_GetSecurityShieldIconUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.GetSecurityShieldIconUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'shield_icon_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableSystemTracing
traces_internals.mojom.PageHandler_EnableSystemTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.EnableSystemTracing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_EnableSystemTracing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.EnableSystemTracing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableSystemTracing
traces_internals.mojom.PageHandler_DisableSystemTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DisableSystemTracing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

traces_internals.mojom.PageHandler_DisableSystemTracing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.PageHandler.DisableSystemTracing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
traces_internals.mojom.PageHandlerPtr = traces_internals.mojom.PageHandlerRemote;
traces_internals.mojom.PageHandlerRequest = traces_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
traces_internals.mojom.Page = {};

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

// ParamsSpec for OnTraceComplete
traces_internals.mojom.Page_OnTraceComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'traces_internals.mojom.Page.OnTraceComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'trace', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: true },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
traces_internals.mojom.PagePtr = traces_internals.mojom.PageRemote;
traces_internals.mojom.PageRequest = traces_internals.mojom.PagePendingReceiver;

