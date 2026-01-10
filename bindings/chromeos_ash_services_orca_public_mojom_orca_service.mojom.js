// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/orca/public/mojom/orca_service.mojom
// Module: ash.orca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.orca = ash.orca || {};
ash.orca.orca.mojom = ash.orca.orca.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: PresetTextQueryType
ash.orca.orca.mojom.mojom.PresetTextQueryType = {
  kShorten: 0,
  kElaborate: 1,
  kRephrase: 2,
  kFormalize: 3,
  kEmojify: 4,
};
ash.orca.orca.mojom.mojom.PresetTextQueryTypeSpec = { $: mojo.internal.Enum() };

// Enum: MetricEvent
ash.orca.orca.mojom.mojom.MetricEvent = {
  kRefineRequest: 0,
  kFeedbackThumbsUp: 1,
  kFeedbackThumbsDown: 2,
  kReturnToPreviousSuggestions: 3,
  kWebUIRequest: 4,
};
ash.orca.orca.mojom.mojom.MetricEventSpec = { $: mojo.internal.Enum() };

// Enum: TextQueryErrorCode
ash.orca.orca.mojom.mojom.TextQueryErrorCode = {
  kInvalidArgument: 0,
};
ash.orca.orca.mojom.mojom.TextQueryErrorCodeSpec = { $: mojo.internal.Enum() };

// Union: TextQueryResponse
ash.orca.orca.mojom.mojom.TextQueryResponseSpec = { $: mojo.internal.Union(
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
ash.orca.orca.mojom.mojom.PresetTextQuerySpec = {
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
ash.orca.orca.mojom.mojom.TextQueryRequestSpec = {
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
ash.orca.orca.mojom.mojom.TextQueryResultSpec = {
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
ash.orca.orca.mojom.mojom.TextQueryErrorSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TextQueryError',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: ash.orca.mojom.TextQueryErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SurroundingText
ash.orca.orca.mojom.mojom.SurroundingTextSpec = {
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
ash.orca.orca.mojom.mojom.ContextSpec = {
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
ash.orca.orca.mojom.mojom.EditorConfigSpec = {
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
ash.orca.orca.mojom.mojom.TriggerContextSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.TriggerContext',
      packedSize: 16,
      fields: [
        { name: 'freeform_selected', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'preset_type_selected', packedOffset: 0, packedBitOffset: 0, type: ash.orca.mojom.PresetTextQueryTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: EditorClient
ash.orca.orca.mojom.mojom.EditorClient = {};

ash.orca.orca.mojom.mojom.EditorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.orca.mojom.mojom.EditorClientRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.orca.mojom.mojom.EditorClientPendingReceiver,
      handle);
    this.$ = new ash.orca.orca.mojom.mojom.EditorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.orca.mojom.mojom.EditorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPresetTextQueries() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_GetPresetTextQueries_ParamsSpec,
      ash.orca.orca.mojom.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec,
      []);
  }

  requestPresetRewrite(text_query_id, text_override) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_RequestPresetRewrite_ParamsSpec,
      ash.orca.orca.mojom.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec,
      [text_query_id, text_override]);
  }

  requestFreeformRewrite(input, text_override) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec,
      ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec,
      [input, text_override]);
  }

  requestFreeformWrite(input) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformWrite_ParamsSpec,
      ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec,
      [input]);
  }

  insertText(text) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_InsertText_ParamsSpec,
      null,
      [text]);
  }

  approveConsent() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_ApproveConsent_ParamsSpec,
      null,
      []);
  }

  declineConsent() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_DeclineConsent_ParamsSpec,
      null,
      []);
  }

  dismissConsent() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_DismissConsent_ParamsSpec,
      null,
      []);
  }

  openUrlInNewWindow(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url]);
  }

  showUI() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_CloseUI_ParamsSpec,
      null,
      []);
  }

  appendText(text) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_AppendText_ParamsSpec,
      null,
      [text]);
  }

  previewFeedback(result_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_PreviewFeedback_ParamsSpec,
      ash.orca.orca.mojom.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec,
      [result_id]);
  }

  submitFeedback(result_id, user_description) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_SubmitFeedback_ParamsSpec,
      null,
      [result_id, user_description]);
  }

  onTrigger(trigger_context) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_OnTrigger_ParamsSpec,
      null,
      [trigger_context]);
  }

  emitMetricEvent(metric_event) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClient_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event]);
  }

};

ash.orca.orca.mojom.mojom.EditorClient.getRemote = function() {
  let remote = new ash.orca.orca.mojom.mojom.EditorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClient',
    'context');
  return remote.$;
};

// ParamsSpec for GetPresetTextQueries
ash.orca.orca.mojom.mojom.EditorClient_GetPresetTextQueries_ParamsSpec = {
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

ash.orca.orca.mojom.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_RequestPresetRewrite_ParamsSpec = {
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

ash.orca.orca.mojom.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec = {
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

ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformWrite_ParamsSpec = {
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

ash.orca.orca.mojom.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_InsertText_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_ApproveConsent_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_DeclineConsent_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_DismissConsent_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_ShowUI_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_CloseUI_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_AppendText_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_PreviewFeedback_ParamsSpec = {
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

ash.orca.orca.mojom.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_SubmitFeedback_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_OnTrigger_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClient_EmitMetricEvent_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorClientPtr = ash.orca.orca.mojom.mojom.EditorClientRemote;
ash.orca.orca.mojom.mojom.EditorClientRequest = ash.orca.orca.mojom.mojom.EditorClientPendingReceiver;


// Interface: EditorClientConnector
ash.orca.orca.mojom.mojom.EditorClientConnector = {};

ash.orca.orca.mojom.mojom.EditorClientConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.orca.mojom.mojom.EditorClientConnectorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClientConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.orca.mojom.mojom.EditorClientConnectorPendingReceiver,
      handle);
    this.$ = new ash.orca.orca.mojom.mojom.EditorClientConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.orca.mojom.mojom.EditorClientConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindEditorClient(editor_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.orca.mojom.mojom.EditorClientConnector_BindEditorClient_ParamsSpec,
      null,
      [editor_client]);
  }

};

ash.orca.orca.mojom.mojom.EditorClientConnector.getRemote = function() {
  let remote = new ash.orca.orca.mojom.mojom.EditorClientConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClientConnector',
    'context');
  return remote.$;
};

// ParamsSpec for BindEditorClient
ash.orca.orca.mojom.mojom.EditorClientConnector_BindEditorClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.EditorClientConnector.BindEditorClient_Params',
      packedSize: 16,
      fields: [
        { name: 'editor_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.orca.mojom.EditorClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.orca.orca.mojom.mojom.EditorClientConnectorPtr = ash.orca.orca.mojom.mojom.EditorClientConnectorRemote;
ash.orca.orca.mojom.mojom.EditorClientConnectorRequest = ash.orca.orca.mojom.mojom.EditorClientConnectorPendingReceiver;


// Interface: EditorEventSink
ash.orca.orca.mojom.mojom.EditorEventSink = {};

ash.orca.orca.mojom.mojom.EditorEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.orca.mojom.mojom.EditorEventSinkRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.orca.mojom.mojom.EditorEventSinkPendingReceiver,
      handle);
    this.$ = new ash.orca.orca.mojom.mojom.EditorEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.orca.mojom.mojom.EditorEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onContextUpdated(context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.orca.mojom.mojom.EditorEventSink_OnContextUpdated_ParamsSpec,
      null,
      [context]);
  }

};

ash.orca.orca.mojom.mojom.EditorEventSink.getRemote = function() {
  let remote = new ash.orca.orca.mojom.mojom.EditorEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorEventSink',
    'context');
  return remote.$;
};

// ParamsSpec for OnContextUpdated
ash.orca.orca.mojom.mojom.EditorEventSink_OnContextUpdated_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.EditorEventSinkPtr = ash.orca.orca.mojom.mojom.EditorEventSinkRemote;
ash.orca.orca.mojom.mojom.EditorEventSinkRequest = ash.orca.orca.mojom.mojom.EditorEventSinkPendingReceiver;


// Interface: SystemActuator
ash.orca.orca.mojom.mojom.SystemActuator = {};

ash.orca.orca.mojom.mojom.SystemActuatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.orca.mojom.mojom.SystemActuatorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.SystemActuator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.orca.mojom.mojom.SystemActuatorPendingReceiver,
      handle);
    this.$ = new ash.orca.orca.mojom.mojom.SystemActuatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.orca.mojom.mojom.SystemActuatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  insertText(text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_InsertText_ParamsSpec,
      null,
      [text]);
  }

  approveConsent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_ApproveConsent_ParamsSpec,
      null,
      []);
  }

  declineConsent() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_DeclineConsent_ParamsSpec,
      null,
      []);
  }

  openUrlInNewWindow(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url]);
  }

  showUI() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_CloseUI_ParamsSpec,
      null,
      []);
  }

  submitFeedback(description) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_SubmitFeedback_ParamsSpec,
      null,
      [description]);
  }

  onTrigger(trigger_context) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_OnTrigger_ParamsSpec,
      null,
      [trigger_context]);
  }

  emitMetricEvent(metric_event) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.orca.orca.mojom.mojom.SystemActuator_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event]);
  }

};

ash.orca.orca.mojom.mojom.SystemActuator.getRemote = function() {
  let remote = new ash.orca.orca.mojom.mojom.SystemActuatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.SystemActuator',
    'context');
  return remote.$;
};

// ParamsSpec for InsertText
ash.orca.orca.mojom.mojom.SystemActuator_InsertText_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_ApproveConsent_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_DeclineConsent_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_ShowUI_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_CloseUI_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_SubmitFeedback_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_OnTrigger_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuator_EmitMetricEvent_ParamsSpec = {
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
ash.orca.orca.mojom.mojom.SystemActuatorPtr = ash.orca.orca.mojom.mojom.SystemActuatorRemote;
ash.orca.orca.mojom.mojom.SystemActuatorRequest = ash.orca.orca.mojom.mojom.SystemActuatorPendingReceiver;


// Interface: TextQueryProvider
ash.orca.orca.mojom.mojom.TextQueryProvider = {};

ash.orca.orca.mojom.mojom.TextQueryProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.orca.mojom.mojom.TextQueryProviderRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.TextQueryProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.orca.mojom.mojom.TextQueryProviderPendingReceiver,
      handle);
    this.$ = new ash.orca.orca.mojom.mojom.TextQueryProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.orca.mojom.mojom.TextQueryProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  process(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.orca.mojom.mojom.TextQueryProvider_Process_ParamsSpec,
      ash.orca.orca.mojom.mojom.TextQueryProvider_Process_ResponseParamsSpec,
      [request]);
  }

};

ash.orca.orca.mojom.mojom.TextQueryProvider.getRemote = function() {
  let remote = new ash.orca.orca.mojom.mojom.TextQueryProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.TextQueryProvider',
    'context');
  return remote.$;
};

// ParamsSpec for Process
ash.orca.orca.mojom.mojom.TextQueryProvider_Process_ParamsSpec = {
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

ash.orca.orca.mojom.mojom.TextQueryProvider_Process_ResponseParamsSpec = {
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
ash.orca.orca.mojom.mojom.TextQueryProviderPtr = ash.orca.orca.mojom.mojom.TextQueryProviderRemote;
ash.orca.orca.mojom.mojom.TextQueryProviderRequest = ash.orca.orca.mojom.mojom.TextQueryProviderPendingReceiver;


// Interface: OrcaService
ash.orca.orca.mojom.mojom.OrcaService = {};

ash.orca.orca.mojom.mojom.OrcaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.orca.mojom.mojom.OrcaServiceRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.OrcaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.orca.mojom.mojom.OrcaServicePendingReceiver,
      handle);
    this.$ = new ash.orca.orca.mojom.mojom.OrcaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.orca.mojom.mojom.OrcaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindEditor(system_actuator, text_query_provider, client_connector, event_sink, editor_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.orca.orca.mojom.mojom.OrcaService_BindEditor_ParamsSpec,
      null,
      [system_actuator, text_query_provider, client_connector, event_sink, editor_config]);
  }

};

ash.orca.orca.mojom.mojom.OrcaService.getRemote = function() {
  let remote = new ash.orca.orca.mojom.mojom.OrcaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.OrcaService',
    'context');
  return remote.$;
};

// ParamsSpec for BindEditor
ash.orca.orca.mojom.mojom.OrcaService_BindEditor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.orca.mojom.OrcaService.BindEditor_Params',
      packedSize: 48,
      fields: [
        { name: 'system_actuator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(ash.orca.mojom.SystemActuatorRemote), nullable: false, minVersion: 0 },
        { name: 'text_query_provider', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(ash.orca.mojom.TextQueryProviderRemote), nullable: false, minVersion: 0 },
        { name: 'client_connector', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(ash.orca.mojom.EditorClientConnectorRemote), nullable: false, minVersion: 0 },
        { name: 'event_sink', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(ash.orca.mojom.EditorEventSinkRemote), nullable: false, minVersion: 0 },
        { name: 'editor_config', packedOffset: 32, packedBitOffset: 0, type: ash.orca.mojom.EditorConfigSpec, nullable: true, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 9, packedSize: 48}]
    }
  }
};

// Legacy compatibility
ash.orca.orca.mojom.mojom.OrcaServicePtr = ash.orca.orca.mojom.mojom.OrcaServiceRemote;
ash.orca.orca.mojom.mojom.OrcaServiceRequest = ash.orca.orca.mojom.mojom.OrcaServicePendingReceiver;

