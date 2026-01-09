// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/compose/compose.mojom
// Module: compose.mojom

'use strict';

// Module namespace
var compose = compose || {};
compose.mojom = compose.mojom || {};


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
};

// Enum: UserFeedback
compose.mojom.UserFeedback = {
};

// Struct: ComposeResponse
compose.mojom.ComposeResponse = class {
  constructor(values = {}) {
    this.triggered_from_modifier = values.triggered_from_modifier !== undefined ? values.triggered_from_modifier : false;
  }
};

// Struct: PartialComposeResponse
compose.mojom.PartialComposeResponse = class {
  constructor(values = {}) {
    this.result = values.result !== undefined ? values.result : "";
  }
};

// Struct: ComposeState
compose.mojom.ComposeState = class {
  constructor(values = {}) {
    this.webui_state = values.webui_state !== undefined ? values.webui_state : "";
    this.feedback = values.feedback !== undefined ? values.feedback : false;
  }
};

// Struct: ConfigurableParams
compose.mojom.ConfigurableParams = class {
  constructor(values = {}) {
    this.max_character_limit = values.max_character_limit !== undefined ? values.max_character_limit : 0;
  }
};

// Struct: OpenMetadata
compose.mojom.OpenMetadata = class {
  constructor(values = {}) {
    this.configurable_params = values.configurable_params !== undefined ? values.configurable_params : false;
  }
};

// Interface: ComposeSessionUntrustedPageHandlerFactory
compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory';
  }

  createComposeSessionUntrustedPageHandler(client_handler, handler, dialog) {
    // Method: CreateComposeSessionUntrustedPageHandler
    // Call: CreateComposeSessionUntrustedPageHandler(client_handler, handler, dialog)
  }

};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ComposeSessionUntrustedPageHandler
compose.mojom.ComposeSessionUntrustedPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'compose.mojom.ComposeSessionUntrustedPageHandler';
  }

  logCancelEdit() {
    // Method: LogCancelEdit
    // Call: LogCancelEdit()
  }

  compose(input, mode, edited) {
    // Method: Compose
    // Call: Compose(input, mode, edited)
  }

  rewrite(style) {
    // Method: Rewrite
    // Call: Rewrite(style)
  }

  logEditInput() {
    // Method: LogEditInput
    // Call: LogEditInput()
  }

  saveWebUIState(webui_state) {
    // Method: SaveWebUIState
    // Call: SaveWebUIState(webui_state)
  }

  acceptComposeResult() {
    // Method: AcceptComposeResult
    return new Promise((resolve) => {
      // Call: AcceptComposeResult()
      resolve({});
    });
  }

  requestInitialState() {
    // Method: RequestInitialState
    return new Promise((resolve) => {
      // Call: RequestInitialState()
      resolve({});
    });
  }

  undo() {
    // Method: Undo
    return new Promise((resolve) => {
      // Call: Undo()
      resolve({});
    });
  }

  recoverFromErrorState() {
    // Method: RecoverFromErrorState
    return new Promise((resolve) => {
      // Call: RecoverFromErrorState()
      resolve({});
    });
  }

  redo() {
    // Method: Redo
    return new Promise((resolve) => {
      // Call: Redo()
      resolve({});
    });
  }

  openBugReportingLink() {
    // Method: OpenBugReportingLink
    // Call: OpenBugReportingLink()
  }

  openComposeLearnMorePage() {
    // Method: OpenComposeLearnMorePage
    // Call: OpenComposeLearnMorePage()
  }

  openEnterpriseComposeLearnMorePage() {
    // Method: OpenEnterpriseComposeLearnMorePage
    // Call: OpenEnterpriseComposeLearnMorePage()
  }

  openFeedbackSurveyLink() {
    // Method: OpenFeedbackSurveyLink
    // Call: OpenFeedbackSurveyLink()
  }

  openSignInPage() {
    // Method: OpenSignInPage
    // Call: OpenSignInPage()
  }

  setUserFeedback(feedback) {
    // Method: SetUserFeedback
    // Call: SetUserFeedback(feedback)
  }

  editResult(new_result) {
    // Method: EditResult
    return new Promise((resolve) => {
      // Call: EditResult(new_result)
      resolve({});
    });
  }

};

compose.mojom.ComposeSessionUntrustedPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ComposeClientUntrustedPageHandler
compose.mojom.ComposeClientUntrustedPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'compose.mojom.ComposeClientUntrustedPageHandler';
  }

  showUI() {
    // Method: ShowUI
    // Call: ShowUI()
  }

  closeUI(reason) {
    // Method: CloseUI
    // Call: CloseUI(reason)
  }

  completeFirstRun() {
    // Method: CompleteFirstRun
    // Call: CompleteFirstRun()
  }

  openComposeSettings() {
    // Method: OpenComposeSettings
    // Call: OpenComposeSettings()
  }

};

compose.mojom.ComposeClientUntrustedPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ComposeUntrustedDialog
compose.mojom.ComposeUntrustedDialogPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'compose.mojom.ComposeUntrustedDialog';
  }

  responseReceived(response) {
    // Method: ResponseReceived
    // Call: ResponseReceived(response)
  }

  partialResponseReceived(partial_response) {
    // Method: PartialResponseReceived
    // Call: PartialResponseReceived(partial_response)
  }

};

compose.mojom.ComposeUntrustedDialogRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
