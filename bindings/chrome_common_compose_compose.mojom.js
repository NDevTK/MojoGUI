// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/compose/compose.mojom
// Module: compose.mojom

// Module namespace
var compose = compose || {};
compose.mojom = compose.mojom || {};

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
      mojo.internal.StructField('status', 0, 0, compose.mojom.ComposeStatusSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('response', 8, 0, compose.mojom.ComposeResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('feedback', 16, 0, compose.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_pending_request', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

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
      mojo.internal.StructField('initial_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('compose_state', 8, 0, compose.mojom.ComposeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('configurable_params', 16, 0, compose.mojom.ConfigurableParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fre_complete', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('msbb_state', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_selected', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

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
  createComposeSessionUntrustedPageHandler(client_handler, handler, dialog) {
    return this.$.createComposeSessionUntrustedPageHandler(client_handler, handler, dialog);
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createComposeSessionUntrustedPageHandler(client_handler, handler, dialog) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec,
      null,
      [client_handler, handler, dialog],
      false);
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

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandlerFactory', [
      { explicit: null },
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
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createComposeSessionUntrustedPageHandler(params.client_handler, params.handler, params.dialog);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryReceiver = compose.mojom.ComposeSessionUntrustedPageHandlerFactoryReceiver;

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
      mojo.internal.StructField('mode', 8, 0, compose.mojom.InputModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edited', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_Params', [
      mojo.internal.StructField('style', 0, 0, compose.mojom.StyleModifierSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('initial_state', 0, 0, compose.mojom.OpenMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParams', [
      mojo.internal.StructField('last_state', 0, 0, compose.mojom.ComposeStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParams', [
      mojo.internal.StructField('state_before_error', 0, 0, compose.mojom.ComposeStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParams', [
      mojo.internal.StructField('next_state', 0, 0, compose.mojom.ComposeStateSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('feedback', 0, 0, compose.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
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
  logCancelEdit() {
    return this.$.logCancelEdit();
  }
  compose(input, mode, edited) {
    return this.$.compose(input, mode, edited);
  }
  rewrite(style) {
    return this.$.rewrite(style);
  }
  logEditInput() {
    return this.$.logEditInput();
  }
  saveWebUIState(webui_state) {
    return this.$.saveWebUIState(webui_state);
  }
  acceptComposeResult() {
    return this.$.acceptComposeResult();
  }
  requestInitialState() {
    return this.$.requestInitialState();
  }
  undo() {
    return this.$.undo();
  }
  recoverFromErrorState() {
    return this.$.recoverFromErrorState();
  }
  redo() {
    return this.$.redo();
  }
  openBugReportingLink() {
    return this.$.openBugReportingLink();
  }
  openComposeLearnMorePage() {
    return this.$.openComposeLearnMorePage();
  }
  openEnterpriseComposeLearnMorePage() {
    return this.$.openEnterpriseComposeLearnMorePage();
  }
  openFeedbackSurveyLink() {
    return this.$.openFeedbackSurveyLink();
  }
  openSignInPage() {
    return this.$.openSignInPage();
  }
  setUserFeedback(feedback) {
    return this.$.setUserFeedback(feedback);
  }
  editResult(new_result) {
    return this.$.editResult(new_result);
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  logCancelEdit() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec,
      null,
      [],
      false);
  }

  compose(input, mode, edited) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec,
      null,
      [input, mode, edited],
      false);
  }

  rewrite(style) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec,
      null,
      [style],
      false);
  }

  logEditInput() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec,
      null,
      [],
      false);
  }

  saveWebUIState(webui_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec,
      null,
      [webui_state],
      false);
  }

  acceptComposeResult() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec,
      [],
      false);
  }

  requestInitialState() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec,
      [],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec,
      [],
      false);
  }

  recoverFromErrorState() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec,
      [],
      false);
  }

  redo() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec,
      [],
      false);
  }

  openBugReportingLink() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec,
      null,
      [],
      false);
  }

  openComposeLearnMorePage() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec,
      null,
      [],
      false);
  }

  openEnterpriseComposeLearnMorePage() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec,
      null,
      [],
      false);
  }

  openFeedbackSurveyLink() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec,
      null,
      [],
      false);
  }

  openSignInPage() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec,
      null,
      [],
      false);
  }

  setUserFeedback(feedback) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  editResult(new_result) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec,
      [new_result],
      false);
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

compose.mojom.ComposeSessionUntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec.$.structSpec);
          const result = this.impl.logCancelEdit();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec.$.structSpec);
          const result = this.impl.compose(params.input, params.mode, params.edited);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec.$.structSpec);
          const result = this.impl.rewrite(params.style);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec.$.structSpec);
          const result = this.impl.logEditInput();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec.$.structSpec);
          const result = this.impl.saveWebUIState(params.webui_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec.$.structSpec);
          const result = this.impl.acceptComposeResult();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec.$.structSpec);
          const result = this.impl.requestInitialState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec.$.structSpec);
          const result = this.impl.undo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec.$.structSpec);
          const result = this.impl.recoverFromErrorState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec.$.structSpec);
          const result = this.impl.redo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec.$.structSpec);
          const result = this.impl.openBugReportingLink();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec.$.structSpec);
          const result = this.impl.openComposeLearnMorePage();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec.$.structSpec);
          const result = this.impl.openEnterpriseComposeLearnMorePage();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec.$.structSpec);
          const result = this.impl.openFeedbackSurveyLink();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec.$.structSpec);
          const result = this.impl.openSignInPage();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.setUserFeedback(params.feedback);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec.$.structSpec);
          const result = this.impl.editResult(params.new_result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec);
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

compose.mojom.ComposeSessionUntrustedPageHandlerReceiver = compose.mojom.ComposeSessionUntrustedPageHandlerReceiver;

compose.mojom.ComposeSessionUntrustedPageHandlerPtr = compose.mojom.ComposeSessionUntrustedPageHandlerRemote;
compose.mojom.ComposeSessionUntrustedPageHandlerRequest = compose.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver;


// Interface: ComposeClientUntrustedPageHandler
mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_Params', [
      mojo.internal.StructField('reason', 0, 0, compose.mojom.CloseReasonSpec.$, null, false, 0, undefined),
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
  showUI() {
    return this.$.showUI();
  }
  closeUI(reason) {
    return this.$.closeUI(reason);
  }
  completeFirstRun() {
    return this.$.completeFirstRun();
  }
  openComposeSettings() {
    return this.$.openComposeSettings();
  }
};

compose.mojom.ComposeClientUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeClientUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI(reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec,
      null,
      [reason],
      false);
  }

  completeFirstRun() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec,
      null,
      [],
      false);
  }

  openComposeSettings() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec,
      null,
      [],
      false);
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

compose.mojom.ComposeClientUntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeClientUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec.$.structSpec);
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec.$.structSpec);
          const result = this.impl.closeUI(params.reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec.$.structSpec);
          const result = this.impl.completeFirstRun();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec.$.structSpec);
          const result = this.impl.openComposeSettings();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

compose.mojom.ComposeClientUntrustedPageHandlerReceiver = compose.mojom.ComposeClientUntrustedPageHandlerReceiver;

compose.mojom.ComposeClientUntrustedPageHandlerPtr = compose.mojom.ComposeClientUntrustedPageHandlerRemote;
compose.mojom.ComposeClientUntrustedPageHandlerRequest = compose.mojom.ComposeClientUntrustedPageHandlerPendingReceiver;


// Interface: ComposeUntrustedDialog
mojo.internal.Struct(
    compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec, 'compose.mojom.ComposeUntrustedDialog_ResponseReceived_Params', [
      mojo.internal.StructField('response', 0, 0, compose.mojom.ComposeResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec, 'compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_Params', [
      mojo.internal.StructField('partial_response', 0, 0, compose.mojom.PartialComposeResponseSpec.$, null, false, 0, undefined),
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
  responseReceived(response) {
    return this.$.responseReceived(response);
  }
  partialResponseReceived(partial_response) {
    return this.$.partialResponseReceived(partial_response);
  }
};

compose.mojom.ComposeUntrustedDialogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeUntrustedDialog', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  responseReceived(response) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec,
      null,
      [response],
      false);
  }

  partialResponseReceived(partial_response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec,
      null,
      [partial_response],
      false);
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

compose.mojom.ComposeUntrustedDialogReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeUntrustedDialog', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec.$.structSpec);
          const result = this.impl.responseReceived(params.response);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec.$.structSpec);
          const result = this.impl.partialResponseReceived(params.partial_response);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

compose.mojom.ComposeUntrustedDialogReceiver = compose.mojom.ComposeUntrustedDialogReceiver;

compose.mojom.ComposeUntrustedDialogPtr = compose.mojom.ComposeUntrustedDialogRemote;
compose.mojom.ComposeUntrustedDialogRequest = compose.mojom.ComposeUntrustedDialogPendingReceiver;

