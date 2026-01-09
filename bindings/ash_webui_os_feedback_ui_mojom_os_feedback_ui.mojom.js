// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/os_feedback_ui/mojom/os_feedback_ui.mojom
// Module: ash.os_feedback_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.os_feedback_ui = ash.os_feedback_ui || {};
ash.os_feedback_ui.mojom = ash.os_feedback_ui.mojom || {};


// Enum: HelpContentType
ash.os_feedback_ui.mojom.HelpContentType = {
};

// Enum: SendReportStatus
ash.os_feedback_ui.mojom.SendReportStatus = {
  the: 0,
};

// Enum: FeedbackAppPostSubmitAction
ash.os_feedback_ui.mojom.FeedbackAppPostSubmitAction = {
  you: 0,
};

// Enum: FeedbackAppPreSubmitAction
ash.os_feedback_ui.mojom.FeedbackAppPreSubmitAction = {
};

// Enum: FeedbackAppExitPath
ash.os_feedback_ui.mojom.FeedbackAppExitPath = {
};

// Enum: FeedbackAppHelpContentOutcome
ash.os_feedback_ui.mojom.FeedbackAppHelpContentOutcome = {
};

// Struct: HelpContent
ash.os_feedback_ui.mojom.HelpContent = class {
  constructor(values = {}) {
    this.content_type = values.content_type !== undefined ? values.content_type : "";
  }
};

// Struct: SearchRequest
ash.os_feedback_ui.mojom.SearchRequest = class {
  constructor(values = {}) {
    this.max_results = values.max_results !== undefined ? values.max_results : 0;
  }
};

// Struct: SearchResponse
ash.os_feedback_ui.mojom.SearchResponse = class {
  constructor(values = {}) {
    this.total_results = values.total_results !== undefined ? values.total_results : 0;
  }
};

// Struct: FeedbackContext
ash.os_feedback_ui.mojom.FeedbackContext = class {
  constructor(values = {}) {
    this.page_url = values.page_url !== undefined ? values.page_url : 0;
    this.text = values.text !== undefined ? values.text : null;
    this.extra_diagnostics = values.extra_diagnostics !== undefined ? values.extra_diagnostics : "";
    this.trace_id = values.trace_id !== undefined ? values.trace_id : 0;
  }
};

// Struct: AttachedFile
ash.os_feedback_ui.mojom.AttachedFile = class {
  constructor(values = {}) {
    this.file_name = values.file_name !== undefined ? values.file_name : null;
  }
};

// Struct: Report
ash.os_feedback_ui.mojom.Report = class {
  constructor(values = {}) {
    this.include_autofill_metadata = values.include_autofill_metadata !== undefined ? values.include_autofill_metadata : false;
  }
};

// Interface: HelpContentProvider
ash.os_feedback_ui.mojom.HelpContentProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.os_feedback_ui.mojom.HelpContentProvider';
  }

  getHelpContents(request) {
    // Method: GetHelpContents
    return new Promise((resolve) => {
      // Call: GetHelpContents(request)
      resolve({});
    });
  }

};

ash.os_feedback_ui.mojom.HelpContentProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FeedbackServiceProvider
ash.os_feedback_ui.mojom.FeedbackServiceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.os_feedback_ui.mojom.FeedbackServiceProvider';
  }

  getFeedbackContext() {
    // Method: GetFeedbackContext
    return new Promise((resolve) => {
      // Call: GetFeedbackContext()
      resolve({});
    });
  }

  getScreenshotPng() {
    // Method: GetScreenshotPng
    return new Promise((resolve) => {
      // Call: GetScreenshotPng()
      resolve({});
    });
  }

  sendReport(report) {
    // Method: SendReport
    return new Promise((resolve) => {
      // Call: SendReport(report)
      resolve({});
    });
  }

  openDiagnosticsApp() {
    // Method: OpenDiagnosticsApp
    // Call: OpenDiagnosticsApp()
  }

  openExploreApp() {
    // Method: OpenExploreApp
    // Call: OpenExploreApp()
  }

  openMetricsDialog() {
    // Method: OpenMetricsDialog
    // Call: OpenMetricsDialog()
  }

  openSystemInfoDialog() {
    // Method: OpenSystemInfoDialog
    // Call: OpenSystemInfoDialog()
  }

  openAutofillDialog(autofill_metadata) {
    // Method: OpenAutofillDialog
    // Call: OpenAutofillDialog(autofill_metadata)
  }

  recordPostSubmitAction(action) {
    // Method: RecordPostSubmitAction
    // Call: RecordPostSubmitAction(action)
  }

  recordPreSubmitAction(action) {
    // Method: RecordPreSubmitAction
    // Call: RecordPreSubmitAction(action)
  }

  recordExitPath(exit_path) {
    // Method: RecordExitPath
    // Call: RecordExitPath(exit_path)
  }

  recordHelpContentOutcome(outcome) {
    // Method: RecordHelpContentOutcome
    // Call: RecordHelpContentOutcome(outcome)
  }

  recordHelpContentSearchResultCount(count) {
    // Method: RecordHelpContentSearchResultCount
    // Call: RecordHelpContentSearchResultCount(count)
  }

};

ash.os_feedback_ui.mojom.FeedbackServiceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
