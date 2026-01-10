// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/compose/compose.mojom
// Module: compose.mojom

'use strict';

// Module namespace
var compose = compose || {};
compose.mojom = compose.mojom || {};
var components = components || {};

compose.mojom.InputModeSpec = { $: mojo.internal.Enum() };
compose.mojom.StyleModifierSpec = { $: mojo.internal.Enum() };
compose.mojom.CloseReasonSpec = { $: mojo.internal.Enum() };
compose.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
compose.mojom.ComposeResponseSpec = { $: {} };
compose.mojom.PartialComposeResponseSpec = { $: {} };
compose.mojom.ComposeStateSpec = { $: {} };
compose.mojom.ConfigurableParamsSpec = { $: {} };
compose.mojom.OpenMetadataSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandlerFactory = {};
compose.mojom.ComposeSessionUntrustedPageHandlerFactory.$interfaceName = 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory';
compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler = {};
compose.mojom.ComposeSessionUntrustedPageHandler.$interfaceName = 'compose.mojom.ComposeSessionUntrustedPageHandler';
compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler = {};
compose.mojom.ComposeClientUntrustedPageHandler.$interfaceName = 'compose.mojom.ComposeClientUntrustedPageHandler';
compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec = { $: {} };
compose.mojom.ComposeUntrustedDialog = {};
compose.mojom.ComposeUntrustedDialog.$interfaceName = 'compose.mojom.ComposeUntrustedDialog';
compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec = { $: {} };
compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec = { $: {} };

// Enum: InputMode
compose.mojom.InputMode = {
  kUnset: 0,
  kPolish: 1,
  kElaborate: 2,
  kFormalize: 3,
};

// Enum: StyleModifier
compose.mojom.StyleModifier = {
  kUnset: 0,
  kFormal: 1,
  kCasual: 2,
  kLonger: 3,
  kShorter: 4,
  kRetry: 5,
};

// Enum: CloseReason
compose.mojom.CloseReason = {
  kFirstRunCloseButton: 0,
  kCloseButton: 1,
  kInsertButton: 2,
  kMSBBCloseButton: 3,
};

// Enum: UserFeedback
compose.mojom.UserFeedback = {
  kUserFeedbackUnspecified: 0,
  kUserFeedbackNegative: 1,
  kUserFeedbackPositive: 2,
};

// Struct: ComposeResponse
mojo.internal.Struct(
    compose.mojom.ComposeResponseSpec, 'compose.mojom.ComposeResponse', [
      mojo.internal.StructField('status', 0, 0, compose.mojom.ComposeStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('undo_available', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('redo_available', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('provided_by_user', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('on_device_evaluation_used', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('triggered_from_modifier', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PartialComposeResponse
mojo.internal.Struct(
    compose.mojom.PartialComposeResponseSpec, 'compose.mojom.PartialComposeResponse', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ComposeState
mojo.internal.Struct(
    compose.mojom.ComposeStateSpec, 'compose.mojom.ComposeState', [
      mojo.internal.StructField('webui_state', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, compose.mojom.ComposeResponseSpec, null, true, 0, undefined),
      mojo.internal.StructField('has_pending_request', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feedback', 20, 0, compose.mojom.UserFeedbackSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConfigurableParams
mojo.internal.Struct(
    compose.mojom.ConfigurableParamsSpec, 'compose.mojom.ConfigurableParams', [
      mojo.internal.StructField('min_word_limit', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_word_limit', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_character_limit', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenMetadata
mojo.internal.Struct(
    compose.mojom.OpenMetadataSpec, 'compose.mojom.OpenMetadata', [
      mojo.internal.StructField('fre_complete', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('msbb_state', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('initial_input', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_selected', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('compose_state', 24, 0, compose.mojom.ComposeStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('configurable_params', 32, 0, compose.mojom.ConfigurableParamsSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: ComposeSessionUntrustedPageHandlerFactory
mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_Params', [
      mojo.internal.StructField('client_handler', 0, 0, mojo.internal.InterfaceRequest(compose.mojom.ComposeClientUntrustedPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(compose.mojom.ComposeSessionUntrustedPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('dialog', 16, 0, mojo.internal.InterfaceProxy(compose.mojom.ComposeUntrustedDialogRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createComposeSessionUntrustedPageHandler(client_handler, handler, dialog) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec,
      null,
      [client_handler, handler, dialog]);
  }

};

compose.mojom.ComposeSessionUntrustedPageHandlerFactory.getRemote = function() {
  let remote = new compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeSessionUntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPtr = compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote;
compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRequest = compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver;


// Interface: ComposeSessionUntrustedPageHandler
mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Compose_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, compose.mojom.InputModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('edited', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_Params', [
      mojo.internal.StructField('style', 0, 0, compose.mojom.StyleModifierSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_Params', [
      mojo.internal.StructField('webui_state', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParams', [
      mojo.internal.StructField('initial_state', 0, 0, compose.mojom.OpenMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParams', [
      mojo.internal.StructField('last_state', 0, 0, compose.mojom.ComposeStateSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParams', [
      mojo.internal.StructField('state_before_error', 0, 0, compose.mojom.ComposeStateSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParams', [
      mojo.internal.StructField('next_state', 0, 0, compose.mojom.ComposeStateSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, compose.mojom.UserFeedbackSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_Params', [
      mojo.internal.StructField('new_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParams', [
      mojo.internal.StructField('is_edited', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

compose.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeSessionUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeSessionUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logCancelEdit() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec,
      null,
      []);
  }

  compose(input, mode, edited) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec,
      null,
      [input, mode, edited]);
  }

  rewrite(style) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec,
      null,
      [style]);
  }

  logEditInput() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec,
      null,
      []);
  }

  saveWebUIState(webui_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec,
      null,
      [webui_state]);
  }

  acceptComposeResult() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec,
      []);
  }

  requestInitialState() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec,
      []);
  }

  undo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec,
      []);
  }

  recoverFromErrorState() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec,
      []);
  }

  redo() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec,
      []);
  }

  openBugReportingLink() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec,
      null,
      []);
  }

  openComposeLearnMorePage() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec,
      null,
      []);
  }

  openEnterpriseComposeLearnMorePage() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec,
      null,
      []);
  }

  openFeedbackSurveyLink() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec,
      null,
      []);
  }

  openSignInPage() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec,
      null,
      []);
  }

  setUserFeedback(feedback) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec,
      null,
      [feedback]);
  }

  editResult(new_result) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec,
      [new_result]);
  }

};

compose.mojom.ComposeSessionUntrustedPageHandler.getRemote = function() {
  let remote = new compose.mojom.ComposeSessionUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeSessionUntrustedPageHandler',
    'context');
  return remote.$;
};

compose.mojom.ComposeSessionUntrustedPageHandlerPtr = compose.mojom.ComposeSessionUntrustedPageHandlerRemote;
compose.mojom.ComposeSessionUntrustedPageHandlerRequest = compose.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver;


// Interface: ComposeClientUntrustedPageHandler
mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_Params', [
      mojo.internal.StructField('reason', 0, 0, compose.mojom.CloseReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_Params', [
    ],
    [[0, 8]]);

compose.mojom.ComposeClientUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeClientUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeClientUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeClientUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeClientUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.ComposeClientUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showUI() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec,
      null,
      [reason]);
  }

  completeFirstRun() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec,
      null,
      []);
  }

  openComposeSettings() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec,
      null,
      []);
  }

};

compose.mojom.ComposeClientUntrustedPageHandler.getRemote = function() {
  let remote = new compose.mojom.ComposeClientUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeClientUntrustedPageHandler',
    'context');
  return remote.$;
};

compose.mojom.ComposeClientUntrustedPageHandlerPtr = compose.mojom.ComposeClientUntrustedPageHandlerRemote;
compose.mojom.ComposeClientUntrustedPageHandlerRequest = compose.mojom.ComposeClientUntrustedPageHandlerPendingReceiver;


// Interface: ComposeUntrustedDialog
mojo.internal.Struct(
    compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec, 'compose.mojom.ComposeUntrustedDialog_ResponseReceived_Params', [
      mojo.internal.StructField('response', 0, 0, compose.mojom.ComposeResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec, 'compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_Params', [
      mojo.internal.StructField('partial_response', 0, 0, compose.mojom.PartialComposeResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

compose.mojom.ComposeUntrustedDialogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeUntrustedDialogRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeUntrustedDialog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeUntrustedDialogPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeUntrustedDialogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.ComposeUntrustedDialogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  responseReceived(response) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec,
      null,
      [response]);
  }

  partialResponseReceived(partial_response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec,
      null,
      [partial_response]);
  }

};

compose.mojom.ComposeUntrustedDialog.getRemote = function() {
  let remote = new compose.mojom.ComposeUntrustedDialogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeUntrustedDialog',
    'context');
  return remote.$;
};

compose.mojom.ComposeUntrustedDialogPtr = compose.mojom.ComposeUntrustedDialogRemote;
compose.mojom.ComposeUntrustedDialogRequest = compose.mojom.ComposeUntrustedDialogPendingReceiver;

