// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/orca/public/mojom/orca_service.mojom
// Module: ash.orca.mojom

// Module namespace
var ash = ash || {};
ash.orca = ash.orca || {};
ash.orca.mojom = ash.orca.mojom || {};
var sandbox = sandbox || {};
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
      mojo.internal.StructField('preset_type_selected', 0, 0, ash.orca.mojom.PresetTextQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('freeform_selected', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
  getPresetTextQueries() {
    return this.$.getPresetTextQueries();
  }
  requestPresetRewrite(text_query_id, text_override) {
    return this.$.requestPresetRewrite(text_query_id, text_override);
  }
  requestFreeformRewrite(input, text_override) {
    return this.$.requestFreeformRewrite(input, text_override);
  }
  requestFreeformWrite(input) {
    return this.$.requestFreeformWrite(input);
  }
  insertText(text) {
    return this.$.insertText(text);
  }
  approveConsent() {
    return this.$.approveConsent();
  }
  declineConsent() {
    return this.$.declineConsent();
  }
  dismissConsent() {
    return this.$.dismissConsent();
  }
  openUrlInNewWindow(url) {
    return this.$.openUrlInNewWindow(url);
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  appendText(text) {
    return this.$.appendText(text);
  }
  previewFeedback(result_id) {
    return this.$.previewFeedback(result_id);
  }
  submitFeedback(result_id, user_description) {
    return this.$.submitFeedback(result_id, user_description);
  }
  onTrigger(trigger_context) {
    return this.$.onTrigger(trigger_context);
  }
  emitMetricEvent(metric_event) {
    return this.$.emitMetricEvent(metric_event);
  }
};

ash.orca.mojom.EditorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
    ]);
  }

  getPresetTextQueries() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec,
      ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec,
      [],
      false);
  }

  requestPresetRewrite(text_query_id, text_override) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec,
      [text_query_id, text_override],
      false);
  }

  requestFreeformRewrite(input, text_override) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec,
      [input, text_override],
      false);
  }

  requestFreeformWrite(input) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec,
      [input],
      false);
  }

  insertText(text) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.orca.mojom.EditorClient_InsertText_ParamsSpec,
      null,
      [text],
      false);
  }

  approveConsent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  dismissConsent() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.orca.mojom.EditorClient_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.orca.mojom.EditorClient_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  appendText(text) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.orca.mojom.EditorClient_AppendText_ParamsSpec,
      null,
      [text],
      false);
  }

  previewFeedback(result_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec,
      ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec,
      [result_id],
      false);
  }

  submitFeedback(result_id, user_description) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec,
      null,
      [result_id, user_description],
      false);
  }

  onTrigger(trigger_context) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec,
      null,
      [trigger_context],
      false);
  }

  emitMetricEvent(metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event],
      false);
  }

};

ash.orca.mojom.EditorClient.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClient',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EditorClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_InsertText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_ShowUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_CloseUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_AppendText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec.$.structSpec);
          const result = this.impl.getPresetTextQueries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec.$.structSpec);
          const result = this.impl.requestPresetRewrite(params.text_query_id, params.text_override);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec.$.structSpec);
          const result = this.impl.requestFreeformRewrite(params.input, params.text_override);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec.$.structSpec);
          const result = this.impl.requestFreeformWrite(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_InsertText_ParamsSpec.$.structSpec);
          const result = this.impl.insertText(params.text);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec.$.structSpec);
          const result = this.impl.approveConsent();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec.$.structSpec);
          const result = this.impl.declineConsent();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec.$.structSpec);
          const result = this.impl.dismissConsent();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec.$.structSpec);
          const result = this.impl.openUrlInNewWindow(params.url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_ShowUI_ParamsSpec.$.structSpec);
          const result = this.impl.showUI();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_CloseUI_ParamsSpec.$.structSpec);
          const result = this.impl.closeUI();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_AppendText_ParamsSpec.$.structSpec);
          const result = this.impl.appendText(params.text);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.previewFeedback(params.result_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.submitFeedback(params.result_id, params.user_description);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec.$.structSpec);
          const result = this.impl.onTrigger(params.trigger_context);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec.$.structSpec);
          const result = this.impl.emitMetricEvent(params.metric_event);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.orca.mojom.EditorClientReceiver = ash.orca.mojom.EditorClientReceiver;

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
  bindEditorClient(editor_client) {
    return this.$.bindEditorClient(editor_client);
  }
};

ash.orca.mojom.EditorClientConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorClientConnector', [
      { explicit: 0 },
    ]);
  }

  bindEditorClient(editor_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec,
      null,
      [editor_client],
      false);
  }

};

ash.orca.mojom.EditorClientConnector.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClientConnector',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorClientConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EditorClientConnector', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec.$.structSpec);
          const result = this.impl.bindEditorClient(params.editor_client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.orca.mojom.EditorClientConnectorReceiver = ash.orca.mojom.EditorClientConnectorReceiver;

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
  onContextUpdated(context) {
    return this.$.onContextUpdated(context);
  }
};

ash.orca.mojom.EditorEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorEventSink', [
      { explicit: 0 },
    ]);
  }

  onContextUpdated(context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec,
      null,
      [context],
      false);
  }

};

ash.orca.mojom.EditorEventSink.getRemote = function() {
  let remote = new ash.orca.mojom.EditorEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorEventSink',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorEventSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EditorEventSink', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onContextUpdated(params.context);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.orca.mojom.EditorEventSinkReceiver = ash.orca.mojom.EditorEventSinkReceiver;

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
  insertText(text) {
    return this.$.insertText(text);
  }
  approveConsent() {
    return this.$.approveConsent();
  }
  declineConsent() {
    return this.$.declineConsent();
  }
  openUrlInNewWindow(url) {
    return this.$.openUrlInNewWindow(url);
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  submitFeedback(description) {
    return this.$.submitFeedback(description);
  }
  onTrigger(trigger_context) {
    return this.$.onTrigger(trigger_context);
  }
  emitMetricEvent(metric_event) {
    return this.$.emitMetricEvent(metric_event);
  }
};

ash.orca.mojom.SystemActuatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemActuator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  insertText(text) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.SystemActuator_InsertText_ParamsSpec,
      null,
      [text],
      false);
  }

  approveConsent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  submitFeedback(description) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec,
      null,
      [description],
      false);
  }

  onTrigger(trigger_context) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec,
      null,
      [trigger_context],
      false);
  }

  emitMetricEvent(metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event],
      false);
  }

};

ash.orca.mojom.SystemActuator.getRemote = function() {
  let remote = new ash.orca.mojom.SystemActuatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.SystemActuator',
    'context');
  return remote.$;
};

ash.orca.mojom.SystemActuatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemActuator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_InsertText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_InsertText_ParamsSpec.$.structSpec);
          const result = this.impl.insertText(params.text);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec.$.structSpec);
          const result = this.impl.approveConsent();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec.$.structSpec);
          const result = this.impl.declineConsent();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec.$.structSpec);
          const result = this.impl.openUrlInNewWindow(params.url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec.$.structSpec);
          const result = this.impl.showUI();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec.$.structSpec);
          const result = this.impl.closeUI();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.submitFeedback(params.description);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec.$.structSpec);
          const result = this.impl.onTrigger(params.trigger_context);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec.$.structSpec);
          const result = this.impl.emitMetricEvent(params.metric_event);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.orca.mojom.SystemActuatorReceiver = ash.orca.mojom.SystemActuatorReceiver;

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
  process(request) {
    return this.$.process(request);
  }
};

ash.orca.mojom.TextQueryProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextQueryProvider', [
      { explicit: 0 },
    ]);
  }

  process(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.TextQueryProvider_Process_ParamsSpec,
      ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec,
      [request],
      false);
  }

};

ash.orca.mojom.TextQueryProvider.getRemote = function() {
  let remote = new ash.orca.mojom.TextQueryProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.TextQueryProvider',
    'context');
  return remote.$;
};

ash.orca.mojom.TextQueryProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextQueryProvider', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.TextQueryProvider_Process_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.TextQueryProvider_Process_ParamsSpec.$.structSpec);
          const result = this.impl.process(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.orca.mojom.TextQueryProviderReceiver = ash.orca.mojom.TextQueryProviderReceiver;

ash.orca.mojom.TextQueryProviderPtr = ash.orca.mojom.TextQueryProviderRemote;
ash.orca.mojom.TextQueryProviderRequest = ash.orca.mojom.TextQueryProviderPendingReceiver;


// Interface: OrcaService
mojo.internal.Struct(
    ash.orca.mojom.OrcaService_BindEditor_ParamsSpec, 'ash.orca.mojom.OrcaService_BindEditor_Params', [
      mojo.internal.StructField('system_actuator', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('text_query_provider', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client_connector', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('event_sink', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
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
  bindEditor(system_actuator, text_query_provider, client_connector, event_sink, editor_config) {
    return this.$.bindEditor(system_actuator, text_query_provider, client_connector, event_sink, editor_config);
  }
};

ash.orca.mojom.OrcaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OrcaService', [
      { explicit: 0 },
    ]);
  }

  bindEditor(system_actuator, text_query_provider, client_connector, event_sink, editor_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.OrcaService_BindEditor_ParamsSpec,
      null,
      [system_actuator, text_query_provider, client_connector, event_sink, editor_config],
      false);
  }

};

ash.orca.mojom.OrcaService.getRemote = function() {
  let remote = new ash.orca.mojom.OrcaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.OrcaService',
    'context');
  return remote.$;
};

ash.orca.mojom.OrcaServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OrcaService', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.orca.mojom.OrcaService_BindEditor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.OrcaService_BindEditor_ParamsSpec.$.structSpec);
          const result = this.impl.bindEditor(params.system_actuator, params.text_query_provider, params.client_connector, params.event_sink, params.editor_config);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.orca.mojom.OrcaServiceReceiver = ash.orca.mojom.OrcaServiceReceiver;

ash.orca.mojom.OrcaServicePtr = ash.orca.mojom.OrcaServiceRemote;
ash.orca.mojom.OrcaServiceRequest = ash.orca.mojom.OrcaServicePendingReceiver;

