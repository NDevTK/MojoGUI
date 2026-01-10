// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/compose/compose.mojom
// Module: compose.mojom

'use strict';

// Module namespace
var compose = compose || {};
compose.mojom = compose.mojom || {};


// Enum: InputMode
compose.mojom.mojom.InputMode = {
  kUnset: 0,
  kPolish: 1,
  kElaborate: 2,
  kFormalize: 3,
};
compose.mojom.mojom.InputModeSpec = { $: mojo.internal.Enum() };

// Enum: StyleModifier
compose.mojom.mojom.StyleModifier = {
  kUnset: 0,
  kFormal: 1,
  kCasual: 2,
  kLonger: 3,
  kShorter: 4,
  kRetry: 5,
};
compose.mojom.mojom.StyleModifierSpec = { $: mojo.internal.Enum() };

// Enum: CloseReason
compose.mojom.mojom.CloseReason = {
  kFirstRunCloseButton: 0,
  kCloseButton: 1,
  kInsertButton: 2,
  kMSBBCloseButton: 3,
};
compose.mojom.mojom.CloseReasonSpec = { $: mojo.internal.Enum() };

// Enum: UserFeedback
compose.mojom.mojom.UserFeedback = {
  kUserFeedbackUnspecified: 0,
  kUserFeedbackNegative: 1,
  kUserFeedbackPositive: 2,
};
compose.mojom.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };

// Struct: ComposeResponse
compose.mojom.mojom.ComposeResponseSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeResponse',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: compose.mojom.ComposeStatusSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'undo_available', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'redo_available', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'provided_by_user', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'on_device_evaluation_used', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'triggered_from_modifier', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PartialComposeResponse
compose.mojom.mojom.PartialComposeResponseSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.PartialComposeResponse',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ComposeState
compose.mojom.mojom.ComposeStateSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeState',
      packedSize: 32,
      fields: [
        { name: 'webui_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: compose.mojom.ComposeResponseSpec, nullable: true, minVersion: 0 },
        { name: 'has_pending_request', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'feedback', packedOffset: 16, packedBitOffset: 0, type: compose.mojom.UserFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ConfigurableParams
compose.mojom.mojom.ConfigurableParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ConfigurableParams',
      packedSize: 24,
      fields: [
        { name: 'min_word_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_word_limit', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_character_limit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OpenMetadata
compose.mojom.mojom.OpenMetadataSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.OpenMetadata',
      packedSize: 40,
      fields: [
        { name: 'fre_complete', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'msbb_state', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'initial_input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_selected', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'compose_state', packedOffset: 8, packedBitOffset: 0, type: compose.mojom.ComposeStateSpec, nullable: false, minVersion: 0 },
        { name: 'configurable_params', packedOffset: 16, packedBitOffset: 0, type: compose.mojom.ConfigurableParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ComposeSessionUntrustedPageHandlerFactory
compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactory = {};

compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createComposeSessionUntrustedPageHandler(client_handler, handler, dialog) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec,
      null,
      [client_handler, handler, dialog]);
  }

};

compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactory.getRemote = function() {
  let remote = new compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeSessionUntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateComposeSessionUntrustedPageHandler
compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory.CreateComposeSessionUntrustedPageHandler_Params',
      packedSize: 32,
      fields: [
        { name: 'client_handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(compose.mojom.ComposeClientUntrustedPageHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(compose.mojom.ComposeSessionUntrustedPageHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'dialog', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(compose.mojom.ComposeUntrustedDialogRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryPtr = compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote;
compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryRequest = compose.mojom.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver;


// Interface: ComposeSessionUntrustedPageHandler
compose.mojom.mojom.ComposeSessionUntrustedPageHandler = {};

compose.mojom.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeSessionUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new compose.mojom.mojom.ComposeSessionUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logCancelEdit() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec,
      null,
      []);
  }

  compose(input, mode, edited) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec,
      null,
      [input, mode, edited]);
  }

  rewrite(style) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec,
      null,
      [style]);
  }

  logEditInput() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec,
      null,
      []);
  }

  saveWebUIState(webui_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec,
      null,
      [webui_state]);
  }

  acceptComposeResult() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec,
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec,
      []);
  }

  requestInitialState() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec,
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec,
      []);
  }

  undo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec,
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec,
      []);
  }

  recoverFromErrorState() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec,
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec,
      []);
  }

  redo() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec,
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec,
      []);
  }

  openBugReportingLink() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec,
      null,
      []);
  }

  openComposeLearnMorePage() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec,
      null,
      []);
  }

  openEnterpriseComposeLearnMorePage() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec,
      null,
      []);
  }

  openFeedbackSurveyLink() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec,
      null,
      []);
  }

  openSignInPage() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec,
      null,
      []);
  }

  setUserFeedback(feedback) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec,
      null,
      [feedback]);
  }

  editResult(new_result) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec,
      compose.mojom.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec,
      [new_result]);
  }

};

compose.mojom.mojom.ComposeSessionUntrustedPageHandler.getRemote = function() {
  let remote = new compose.mojom.mojom.ComposeSessionUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeSessionUntrustedPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for LogCancelEdit
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.LogCancelEdit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Compose
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.Compose_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: compose.mojom.InputModeSpec, nullable: false, minVersion: 0 },
        { name: 'edited', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Rewrite
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.Rewrite_Params',
      packedSize: 16,
      fields: [
        { name: 'style', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.StyleModifierSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogEditInput
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.LogEditInput_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SaveWebUIState
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.SaveWebUIState_Params',
      packedSize: 16,
      fields: [
        { name: 'webui_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AcceptComposeResult
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.AcceptComposeResult_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.AcceptComposeResult_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestInitialState
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.RequestInitialState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.RequestInitialState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'initial_state', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.OpenMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Undo
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.Undo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.Undo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'last_state', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.ComposeStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecoverFromErrorState
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.RecoverFromErrorState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.RecoverFromErrorState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_before_error', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.ComposeStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Redo
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.Redo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.Redo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'next_state', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.ComposeStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenBugReportingLink
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.OpenBugReportingLink_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenComposeLearnMorePage
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.OpenComposeLearnMorePage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenEnterpriseComposeLearnMorePage
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.OpenEnterpriseComposeLearnMorePage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenFeedbackSurveyLink
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.OpenFeedbackSurveyLink_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenSignInPage
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.OpenSignInPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetUserFeedback
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.SetUserFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.UserFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EditResult
compose.mojom.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.EditResult_Params',
      packedSize: 16,
      fields: [
        { name: 'new_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

compose.mojom.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeSessionUntrustedPageHandler.EditResult_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_edited', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
compose.mojom.mojom.ComposeSessionUntrustedPageHandlerPtr = compose.mojom.mojom.ComposeSessionUntrustedPageHandlerRemote;
compose.mojom.mojom.ComposeSessionUntrustedPageHandlerRequest = compose.mojom.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver;


// Interface: ComposeClientUntrustedPageHandler
compose.mojom.mojom.ComposeClientUntrustedPageHandler = {};

compose.mojom.mojom.ComposeClientUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.mojom.ComposeClientUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeClientUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.mojom.ComposeClientUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new compose.mojom.mojom.ComposeClientUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.mojom.ComposeClientUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showUI() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      compose.mojom.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec,
      null,
      [reason]);
  }

  completeFirstRun() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      compose.mojom.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec,
      null,
      []);
  }

  openComposeSettings() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      compose.mojom.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec,
      null,
      []);
  }

};

compose.mojom.mojom.ComposeClientUntrustedPageHandler.getRemote = function() {
  let remote = new compose.mojom.mojom.ComposeClientUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeClientUntrustedPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ShowUI
compose.mojom.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeClientUntrustedPageHandler.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CloseUI
compose.mojom.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeClientUntrustedPageHandler.CloseUI_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.CloseReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CompleteFirstRun
compose.mojom.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeClientUntrustedPageHandler.CompleteFirstRun_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenComposeSettings
compose.mojom.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeClientUntrustedPageHandler.OpenComposeSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
compose.mojom.mojom.ComposeClientUntrustedPageHandlerPtr = compose.mojom.mojom.ComposeClientUntrustedPageHandlerRemote;
compose.mojom.mojom.ComposeClientUntrustedPageHandlerRequest = compose.mojom.mojom.ComposeClientUntrustedPageHandlerPendingReceiver;


// Interface: ComposeUntrustedDialog
compose.mojom.mojom.ComposeUntrustedDialog = {};

compose.mojom.mojom.ComposeUntrustedDialogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.mojom.ComposeUntrustedDialogRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeUntrustedDialog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.mojom.ComposeUntrustedDialogPendingReceiver,
      handle);
    this.$ = new compose.mojom.mojom.ComposeUntrustedDialogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

compose.mojom.mojom.ComposeUntrustedDialogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  responseReceived(response) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      compose.mojom.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec,
      null,
      [response]);
  }

  partialResponseReceived(partial_response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      compose.mojom.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec,
      null,
      [partial_response]);
  }

};

compose.mojom.mojom.ComposeUntrustedDialog.getRemote = function() {
  let remote = new compose.mojom.mojom.ComposeUntrustedDialogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeUntrustedDialog',
    'context');
  return remote.$;
};

// ParamsSpec for ResponseReceived
compose.mojom.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeUntrustedDialog.ResponseReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.ComposeResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PartialResponseReceived
compose.mojom.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'compose.mojom.ComposeUntrustedDialog.PartialResponseReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'partial_response', packedOffset: 0, packedBitOffset: 0, type: compose.mojom.PartialComposeResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
compose.mojom.mojom.ComposeUntrustedDialogPtr = compose.mojom.mojom.ComposeUntrustedDialogRemote;
compose.mojom.mojom.ComposeUntrustedDialogRequest = compose.mojom.mojom.ComposeUntrustedDialogPendingReceiver;

