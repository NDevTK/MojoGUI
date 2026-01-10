// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/orca/public/mojom/orca_service.mojom
// Module: ash.orca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.orca = ash.orca || {};
ash.orca.mojom = ash.orca.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

ash.orca.mojom.PresetTextQueryTypeSpec = { $: mojo.internal.Enum() };
ash.orca.mojom.MetricEventSpec = { $: mojo.internal.Enum() };
ash.orca.mojom.TextQueryErrorCodeSpec = { $: mojo.internal.Enum() };
ash.orca.mojom.TextQueryResponseSpec = { $: {} };
ash.orca.mojom.PresetTextQuerySpec = { $: {} };
ash.orca.mojom.TextQueryRequestSpec = { $: {} };
ash.orca.mojom.TextQueryResultSpec = { $: {} };
ash.orca.mojom.TextQueryErrorSpec = { $: {} };
ash.orca.mojom.SurroundingTextSpec = { $: {} };
ash.orca.mojom.ContextSpec = { $: {} };
ash.orca.mojom.EditorConfigSpec = { $: {} };
ash.orca.mojom.TriggerContextSpec = { $: {} };
ash.orca.mojom.EditorClient = {};
ash.orca.mojom.EditorClient.$interfaceName = 'ash.orca.mojom.EditorClient';
ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_InsertText_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_ShowUI_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_CloseUI_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_AppendText_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClientConnector = {};
ash.orca.mojom.EditorClientConnector.$interfaceName = 'ash.orca.mojom.EditorClientConnector';
ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec = { $: {} };
ash.orca.mojom.EditorEventSink = {};
ash.orca.mojom.EditorEventSink.$interfaceName = 'ash.orca.mojom.EditorEventSink';
ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator = {};
ash.orca.mojom.SystemActuator.$interfaceName = 'ash.orca.mojom.SystemActuator';
ash.orca.mojom.SystemActuator_InsertText_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec = { $: {} };
ash.orca.mojom.TextQueryProvider = {};
ash.orca.mojom.TextQueryProvider.$interfaceName = 'ash.orca.mojom.TextQueryProvider';
ash.orca.mojom.TextQueryProvider_Process_ParamsSpec = { $: {} };
ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec = { $: {} };
ash.orca.mojom.OrcaService = {};
ash.orca.mojom.OrcaService.$interfaceName = 'ash.orca.mojom.OrcaService';
ash.orca.mojom.OrcaService_BindEditor_ParamsSpec = { $: {} };

// Enum: PresetTextQueryType
ash.orca.mojom.PresetTextQueryType = {
  kUnknown: 0,
  kShorten: 1,
  kElaborate: 2,
  kRephrase: 3,
  kFormalize: 4,
  kEmojify: 5,
  MinVersion: 5,
};

// Enum: MetricEvent
ash.orca.mojom.MetricEvent = {
  kUnknown: 0,
  kRefineRequest: 1,
  kFeedbackThumbsUp: 2,
  kFeedbackThumbsDown: 3,
  kReturnToPreviousSuggestions: 4,
  kWebUIRequest: 5,
};

// Enum: TextQueryErrorCode
ash.orca.mojom.TextQueryErrorCode = {
  kUnknown: 0,
  kInvalidArgument: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Union: TextQueryResponse
mojo.internal.Union(
    ash.orca.mojom.TextQueryResponseSpec, 'ash.orca.mojom.TextQueryResponse', {
      'results': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.orca.mojom.TextQueryResultSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.orca.mojom.TextQueryErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: PresetTextQuery
mojo.internal.Struct(
    ash.orca.mojom.PresetTextQuerySpec, 'ash.orca.mojom.PresetTextQuery', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, ash.orca.mojom.PresetTextQueryTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TextQueryRequest
mojo.internal.Struct(
    ash.orca.mojom.TextQueryRequestSpec, 'ash.orca.mojom.TextQueryRequest', [
      mojo.internal.StructField('text_query_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parameters', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextQueryResult
mojo.internal.Struct(
    ash.orca.mojom.TextQueryResultSpec, 'ash.orca.mojom.TextQueryResult', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextQueryError
mojo.internal.Struct(
    ash.orca.mojom.TextQueryErrorSpec, 'ash.orca.mojom.TextQueryError', [
      mojo.internal.StructField('code', 0, 0, ash.orca.mojom.TextQueryErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SurroundingText
mojo.internal.Struct(
    ash.orca.mojom.SurroundingTextSpec, 'ash.orca.mojom.SurroundingText', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Context
mojo.internal.Struct(
    ash.orca.mojom.ContextSpec, 'ash.orca.mojom.Context', [
      mojo.internal.StructField('surrounding_text', 0, 0, ash.orca.mojom.SurroundingTextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EditorConfig
mojo.internal.Struct(
    ash.orca.mojom.EditorConfigSpec, 'ash.orca.mojom.EditorConfig', [
      mojo.internal.StructField('allowed_query_types', 0, 0, mojo.internal.Array(ash.orca.mojom.PresetTextQueryTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('language_code', 8, 0, mojo.internal.String, null, true, 12, undefined),
    ],
    [[0, 16], [12, 24]]);

// Struct: TriggerContext
mojo.internal.Struct(
    ash.orca.mojom.TriggerContextSpec, 'ash.orca.mojom.TriggerContext', [
      mojo.internal.StructField('freeform_selected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('preset_type_selected', 8, 0, ash.orca.mojom.PresetTextQueryTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: EditorClient
mojo.internal.Struct(
    ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec, 'ash.orca.mojom.EditorClient_GetPresetTextQueries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParams', [
      mojo.internal.StructField('text_queries', 0, 0, mojo.internal.Array(ash.orca.mojom.PresetTextQuerySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestPresetRewrite_Params', [
      mojo.internal.StructField('text_query_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_override', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformRewrite_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_override', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformWrite_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_InsertText_ParamsSpec, 'ash.orca.mojom.EditorClient_InsertText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_ApproveConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_DeclineConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_DismissConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec, 'ash.orca.mojom.EditorClient_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_ShowUI_ParamsSpec, 'ash.orca.mojom.EditorClient_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_CloseUI_ParamsSpec, 'ash.orca.mojom.EditorClient_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_AppendText_ParamsSpec, 'ash.orca.mojom.EditorClient_AppendText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec, 'ash.orca.mojom.EditorClient_PreviewFeedback_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParams', [
      mojo.internal.StructField('preview', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec, 'ash.orca.mojom.EditorClient_SubmitFeedback_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec, 'ash.orca.mojom.EditorClient_OnTrigger_Params', [
      mojo.internal.StructField('trigger_context', 0, 0, ash.orca.mojom.TriggerContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec, 'ash.orca.mojom.EditorClient_EmitMetricEvent_Params', [
      mojo.internal.StructField('metric_event', 0, 0, ash.orca.mojom.MetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.EditorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorClientRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorClientPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPresetTextQueries() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec,
      ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec,
      [],
      false);
  }

  requestPresetRewrite(text_query_id, text_override) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec,
      [text_query_id, text_override],
      false);
  }

  requestFreeformRewrite(input, text_override) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec,
      [input, text_override],
      false);
  }

  requestFreeformWrite(input) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec,
      [input],
      false);
  }

  insertText(text) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.orca.mojom.EditorClient_InsertText_ParamsSpec,
      null,
      [text],
      false);
  }

  approveConsent() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  dismissConsent() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url],
      false);
  }

  showUI() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.orca.mojom.EditorClient_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.orca.mojom.EditorClient_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  appendText(text) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.orca.mojom.EditorClient_AppendText_ParamsSpec,
      null,
      [text],
      false);
  }

  previewFeedback(result_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec,
      ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec,
      [result_id],
      false);
  }

  submitFeedback(result_id, user_description) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec,
      null,
      [result_id, user_description],
      false);
  }

  onTrigger(trigger_context) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec,
      null,
      [trigger_context],
      false);
  }

  emitMetricEvent(metric_event) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event],
      false);
  }

};

ash.orca.mojom.EditorClient.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.orca.mojom.EditorClient',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorClientPtr = ash.orca.mojom.EditorClientRemote;
ash.orca.mojom.EditorClientRequest = ash.orca.mojom.EditorClientPendingReceiver;


// Interface: EditorClientConnector
mojo.internal.Struct(
    ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec, 'ash.orca.mojom.EditorClientConnector_BindEditorClient_Params', [
      mojo.internal.StructField('editor_client', 0, 0, mojo.internal.InterfaceRequest(ash.orca.mojom.EditorClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.EditorClientConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorClientConnectorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClientConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorClientConnectorPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorClientConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorClientConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindEditorClient(editor_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec,
      null,
      [editor_client],
      false);
  }

};

ash.orca.mojom.EditorClientConnector.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientConnectorRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.orca.mojom.EditorClientConnector',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorClientConnectorPtr = ash.orca.mojom.EditorClientConnectorRemote;
ash.orca.mojom.EditorClientConnectorRequest = ash.orca.mojom.EditorClientConnectorPendingReceiver;


// Interface: EditorEventSink
mojo.internal.Struct(
    ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec, 'ash.orca.mojom.EditorEventSink_OnContextUpdated_Params', [
      mojo.internal.StructField('context', 0, 0, ash.orca.mojom.ContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.EditorEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorEventSinkRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorEventSinkPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onContextUpdated(context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec,
      null,
      [context],
      false);
  }

};

ash.orca.mojom.EditorEventSink.getRemote = function() {
  let remote = new ash.orca.mojom.EditorEventSinkRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.orca.mojom.EditorEventSink',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorEventSinkPtr = ash.orca.mojom.EditorEventSinkRemote;
ash.orca.mojom.EditorEventSinkRequest = ash.orca.mojom.EditorEventSinkPendingReceiver;


// Interface: SystemActuator
mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_InsertText_ParamsSpec, 'ash.orca.mojom.SystemActuator_InsertText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec, 'ash.orca.mojom.SystemActuator_ApproveConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec, 'ash.orca.mojom.SystemActuator_DeclineConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec, 'ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec, 'ash.orca.mojom.SystemActuator_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec, 'ash.orca.mojom.SystemActuator_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec, 'ash.orca.mojom.SystemActuator_SubmitFeedback_Params', [
      mojo.internal.StructField('description', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec, 'ash.orca.mojom.SystemActuator_OnTrigger_Params', [
      mojo.internal.StructField('trigger_context', 0, 0, ash.orca.mojom.TriggerContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec, 'ash.orca.mojom.SystemActuator_EmitMetricEvent_Params', [
      mojo.internal.StructField('metric_event', 0, 0, ash.orca.mojom.MetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.SystemActuatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.SystemActuatorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.SystemActuator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.SystemActuatorPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.SystemActuatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.SystemActuatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  insertText(text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.mojom.SystemActuator_InsertText_ParamsSpec,
      null,
      [text],
      false);
  }

  approveConsent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url],
      false);
  }

  showUI() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  submitFeedback(description) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec,
      null,
      [description],
      false);
  }

  onTrigger(trigger_context) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec,
      null,
      [trigger_context],
      false);
  }

  emitMetricEvent(metric_event) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event],
      false);
  }

};

ash.orca.mojom.SystemActuator.getRemote = function() {
  let remote = new ash.orca.mojom.SystemActuatorRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.orca.mojom.SystemActuator',
    'context');
  return remote.$;
};

ash.orca.mojom.SystemActuatorPtr = ash.orca.mojom.SystemActuatorRemote;
ash.orca.mojom.SystemActuatorRequest = ash.orca.mojom.SystemActuatorPendingReceiver;


// Interface: TextQueryProvider
mojo.internal.Struct(
    ash.orca.mojom.TextQueryProvider_Process_ParamsSpec, 'ash.orca.mojom.TextQueryProvider_Process_Params', [
      mojo.internal.StructField('request', 0, 0, ash.orca.mojom.TextQueryRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec, 'ash.orca.mojom.TextQueryProvider_Process_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.TextQueryProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.TextQueryProviderRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.TextQueryProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.TextQueryProviderPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.TextQueryProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.TextQueryProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  process(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.mojom.TextQueryProvider_Process_ParamsSpec,
      ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec,
      [request],
      false);
  }

};

ash.orca.mojom.TextQueryProvider.getRemote = function() {
  let remote = new ash.orca.mojom.TextQueryProviderRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.orca.mojom.TextQueryProvider',
    'context');
  return remote.$;
};

ash.orca.mojom.TextQueryProviderPtr = ash.orca.mojom.TextQueryProviderRemote;
ash.orca.mojom.TextQueryProviderRequest = ash.orca.mojom.TextQueryProviderPendingReceiver;


// Interface: OrcaService
mojo.internal.Struct(
    ash.orca.mojom.OrcaService_BindEditor_ParamsSpec, 'ash.orca.mojom.OrcaService_BindEditor_Params', [
      mojo.internal.StructField('system_actuator', 0, 0, mojo.internal.AssociatedInterfaceProxy(ash.orca.mojom.SystemActuatorRemote), null, false, 0, undefined),
      mojo.internal.StructField('text_query_provider', 8, 0, mojo.internal.AssociatedInterfaceProxy(ash.orca.mojom.TextQueryProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_connector', 16, 0, mojo.internal.AssociatedInterfaceRequest(ash.orca.mojom.EditorClientConnectorRemote), null, false, 0, undefined),
      mojo.internal.StructField('event_sink', 24, 0, mojo.internal.AssociatedInterfaceRequest(ash.orca.mojom.EditorEventSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('editor_config', 32, 0, ash.orca.mojom.EditorConfigSpec.$, null, true, 9, undefined),
    ],
    [[0, 40], [9, 48]]);

ash.orca.mojom.OrcaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.OrcaServiceRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.OrcaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.OrcaServicePendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.OrcaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.OrcaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindEditor(system_actuator, text_query_provider, client_connector, event_sink, editor_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.mojom.OrcaService_BindEditor_ParamsSpec,
      null,
      [system_actuator, text_query_provider, client_connector, event_sink, editor_config],
      false);
  }

};

ash.orca.mojom.OrcaService.getRemote = function() {
  let remote = new ash.orca.mojom.OrcaServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.orca.mojom.OrcaService',
    'context');
  return remote.$;
};

ash.orca.mojom.OrcaServicePtr = ash.orca.mojom.OrcaServiceRemote;
ash.orca.mojom.OrcaServiceRequest = ash.orca.mojom.OrcaServicePendingReceiver;

