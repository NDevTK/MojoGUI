// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/orca/public/mojom/orca_service.mojom
// Module: ash.orca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.orca = ash.orca || {};
ash.orca.mojom = ash.orca.mojom || {};


// Enum: PresetTextQueryType
ash.orca.mojom.PresetTextQueryType = {
  kShorten: 0,
  kElaborate: 1,
  kRephrase: 2,
  kFormalize: 3,
  kEmojify: 4,
};
ash.orca.mojom.PresetTextQueryTypeSpec = { $: mojo.internal.Enum() };

// Enum: MetricEvent
ash.orca.mojom.MetricEvent = {
  kRefineRequest: 0,
  kFeedbackThumbsUp: 1,
  kFeedbackThumbsDown: 2,
  kReturnToPreviousSuggestions: 3,
  kWebUIRequest: 4,
};
ash.orca.mojom.MetricEventSpec = { $: mojo.internal.Enum() };

// Enum: TextQueryErrorCode
ash.orca.mojom.TextQueryErrorCode = {
  kInvalidArgument: 0,
};
ash.orca.mojom.TextQueryErrorCodeSpec = { $: mojo.internal.Enum() };

// Union: TextQueryResponse
ash.orca.mojom.TextQueryResponseSpec = { $: mojo.internal.Union(
    'ash.orca.mojom.TextQueryResponse', {
      'results': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.orca.mojom.TextQueryResultSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': ash.orca.mojom.TextQueryErrorSpec,
      }},
    })
};

// Struct: PresetTextQuery
ash.orca.mojom.PresetTextQuerySpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.PresetTextQuery',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: ash.orca.mojom.PresetTextQueryTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TextQueryRequest
ash.orca.mojom.TextQueryRequestSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TextQueryRequest',
      packedSize: 32,
      fields: [
        { name: 'text_query_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parameters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TextQueryResult
ash.orca.mojom.TextQueryResultSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TextQueryResult',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextQueryError
ash.orca.mojom.TextQueryErrorSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TextQueryError',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TextQueryErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SurroundingText
ash.orca.mojom.SurroundingTextSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SurroundingText',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'range', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Context
ash.orca.mojom.ContextSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.Context',
      packedSize: 16,
      fields: [
        { name: 'surrounding_text', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.SurroundingTextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: EditorConfig
ash.orca.mojom.EditorConfigSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorConfig',
      packedSize: 24,
      fields: [
        { name: 'allowed_query_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.orca.mojom.PresetTextQueryTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'language_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 12 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 12, packedSize: 24}]
    }
  }
};

// Struct: TriggerContext
ash.orca.mojom.TriggerContextSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TriggerContext',
      packedSize: 16,
      fields: [
        { name: 'freeform_selected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'preset_type_selected', packedOffset: 4, packedBitOffset: 0, type: ash.orca.mojom.PresetTextQueryTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: EditorClient
ash.orca.mojom.EditorClient = {};

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
      []);
  }

  requestPresetRewrite(text_query_id, text_override) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec,
      [text_query_id, text_override]);
  }

  requestFreeformRewrite(input, text_override) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec,
      [input, text_override]);
  }

  requestFreeformWrite(input) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec,
      [input]);
  }

  insertText(text) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.orca.mojom.EditorClient_InsertText_ParamsSpec,
      null,
      [text]);
  }

  approveConsent() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec,
      null,
      []);
  }

  declineConsent() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec,
      null,
      []);
  }

  dismissConsent() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec,
      null,
      []);
  }

  openUrlInNewWindow(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url]);
  }

  showUI() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.orca.mojom.EditorClient_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.orca.mojom.EditorClient_CloseUI_ParamsSpec,
      null,
      []);
  }

  appendText(text) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.orca.mojom.EditorClient_AppendText_ParamsSpec,
      null,
      [text]);
  }

  previewFeedback(result_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec,
      ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec,
      [result_id]);
  }

  submitFeedback(result_id, user_description) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec,
      null,
      [result_id, user_description]);
  }

  onTrigger(trigger_context) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec,
      null,
      [trigger_context]);
  }

  emitMetricEvent(metric_event) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event]);
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

// ParamsSpec for GetPresetTextQueries
ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.GetPresetTextQueries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.GetPresetTextQueries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'text_queries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.orca.mojom.PresetTextQuerySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestPresetRewrite
ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.RequestPresetRewrite_Params',
      packedSize: 24,
      fields: [
        { name: 'text_query_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_override', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.RequestPresetRewrite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TextQueryResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestFreeformRewrite
ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.RequestFreeformRewrite_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_override', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.RequestFreeformRewrite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TextQueryResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestFreeformWrite
ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.RequestFreeformWrite_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.RequestFreeformWrite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TextQueryResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InsertText
ash.orca.mojom.EditorClient_InsertText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.InsertText_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApproveConsent
ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.ApproveConsent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DeclineConsent
ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.DeclineConsent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DismissConsent
ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.DismissConsent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenUrlInNewWindow
ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.OpenUrlInNewWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowUI
ash.orca.mojom.EditorClient_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CloseUI
ash.orca.mojom.EditorClient_CloseUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.CloseUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AppendText
ash.orca.mojom.EditorClient_AppendText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.AppendText_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreviewFeedback
ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.PreviewFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'result_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.PreviewFeedback_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'preview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubmitFeedback
ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.SubmitFeedback_Params',
      packedSize: 24,
      fields: [
        { name: 'result_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnTrigger
ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.OnTrigger_Params',
      packedSize: 16,
      fields: [
        { name: 'trigger_context', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TriggerContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EmitMetricEvent
ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClient.EmitMetricEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'metric_event', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.MetricEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.orca.mojom.EditorClientPtr = ash.orca.mojom.EditorClientRemote;
ash.orca.mojom.EditorClientRequest = ash.orca.mojom.EditorClientPendingReceiver;


// Interface: EditorClientConnector
ash.orca.mojom.EditorClientConnector = {};

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
      [editor_client]);
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

// ParamsSpec for BindEditorClient
ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClientConnector.BindEditorClient_Params',
      packedSize: 16,
      fields: [
        { name: 'editor_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.orca.mojom.EditorClientConnectorPtr = ash.orca.mojom.EditorClientConnectorRemote;
ash.orca.mojom.EditorClientConnectorRequest = ash.orca.mojom.EditorClientConnectorPendingReceiver;


// Interface: EditorEventSink
ash.orca.mojom.EditorEventSink = {};

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
      [context]);
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

// ParamsSpec for OnContextUpdated
ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorEventSink.OnContextUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.ContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.orca.mojom.EditorEventSinkPtr = ash.orca.mojom.EditorEventSinkRemote;
ash.orca.mojom.EditorEventSinkRequest = ash.orca.mojom.EditorEventSinkPendingReceiver;


// Interface: SystemActuator
ash.orca.mojom.SystemActuator = {};

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
      [text]);
  }

  approveConsent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec,
      null,
      []);
  }

  declineConsent() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec,
      null,
      []);
  }

  openUrlInNewWindow(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url]);
  }

  showUI() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec,
      null,
      []);
  }

  submitFeedback(description) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec,
      null,
      [description]);
  }

  onTrigger(trigger_context) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec,
      null,
      [trigger_context]);
  }

  emitMetricEvent(metric_event) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event]);
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

// ParamsSpec for InsertText
ash.orca.mojom.SystemActuator_InsertText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.InsertText_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApproveConsent
ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.ApproveConsent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DeclineConsent
ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.DeclineConsent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenUrlInNewWindow
ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.OpenUrlInNewWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowUI
ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CloseUI
ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.CloseUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SubmitFeedback
ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.SubmitFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTrigger
ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.OnTrigger_Params',
      packedSize: 16,
      fields: [
        { name: 'trigger_context', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TriggerContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EmitMetricEvent
ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.SystemActuator.EmitMetricEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'metric_event', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.MetricEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.orca.mojom.SystemActuatorPtr = ash.orca.mojom.SystemActuatorRemote;
ash.orca.mojom.SystemActuatorRequest = ash.orca.mojom.SystemActuatorPendingReceiver;


// Interface: TextQueryProvider
ash.orca.mojom.TextQueryProvider = {};

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
      [request]);
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

// ParamsSpec for Process
ash.orca.mojom.TextQueryProvider_Process_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TextQueryProvider.Process_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TextQueryRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TextQueryProvider.Process_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.TextQueryResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.orca.mojom.TextQueryProviderPtr = ash.orca.mojom.TextQueryProviderRemote;
ash.orca.mojom.TextQueryProviderRequest = ash.orca.mojom.TextQueryProviderPendingReceiver;


// Interface: OrcaService
ash.orca.mojom.OrcaService = {};

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
      [system_actuator, text_query_provider, client_connector, event_sink, editor_config]);
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

// ParamsSpec for BindEditor
ash.orca.mojom.OrcaService_BindEditor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.OrcaService.BindEditor_Params',
      packedSize: 32,
      fields: [
        { name: 'system_actuator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'text_query_provider', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'client_connector', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'event_sink', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'editor_config', packedOffset: 16, packedBitOffset: 0, type: ash.orca.mojom.EditorConfigSpec, nullable: true, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 9, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ash.orca.mojom.OrcaServicePtr = ash.orca.mojom.OrcaServiceRemote;
ash.orca.mojom.OrcaServiceRequest = ash.orca.mojom.OrcaServicePendingReceiver;

