// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/omnibox_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Enum: AutocompleteControllerType
mojom.AutocompleteControllerType = {
};

// Struct: ACMatchClassification
mojom.ACMatchClassification = class {
  constructor(values = {}) {
    this.style = values.style !== undefined ? values.style : 0;
  }
};

// Struct: Signals
mojom.Signals = class {
  constructor(values = {}) {
    this.is_calculator_suggest = values.is_calculator_suggest !== undefined ? values.is_calculator_suggest : 0;
  }
};

// Struct: AutocompleteMatch
mojom.AutocompleteMatch = class {
  constructor(values = {}) {
    this.additional_info = values.additional_info !== undefined ? values.additional_info : 0;
  }
};

// Struct: AutocompleteResultsForProvider
mojom.AutocompleteResultsForProvider = class {
  constructor(values = {}) {
    this.results = values.results !== undefined ? values.results : "";
  }
};

// Struct: OmniboxResponse
mojom.OmniboxResponse = class {
  constructor(values = {}) {
    this.cursor_position = values.cursor_position !== undefined ? values.cursor_position : 0;
    this.results_by_provider = values.results_by_provider !== undefined ? values.results_by_provider : 0;
  }
};

// Interface: OmniboxPageHandler
mojom.OmniboxPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.OmniboxPageHandler';
  }

  setClientPage(page) {
    // Method: SetClientPage
    // Call: SetClientPage(page)
  }

  startOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification) {
    // Method: StartOmniboxQuery
    // Call: StartOmniboxQuery(input_string, reset_autocomplete_controller, cursor_position, zero_suggest, prevent_inline_autocomplete, prefer_keyword, current_url, page_classification)
  }

  getMlModelVersion() {
    // Method: GetMlModelVersion
    return new Promise((resolve) => {
      // Call: GetMlModelVersion()
      resolve({});
    });
  }

  startMl(signals) {
    // Method: StartMl
    return new Promise((resolve) => {
      // Call: StartMl(signals)
      resolve({});
    });
  }

};

mojom.OmniboxPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OmniboxPage
mojom.OmniboxPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.OmniboxPage';
  }

  handleNewAutocompleteQuery(autocomplete_controller_type, input_text) {
    // Method: HandleNewAutocompleteQuery
    // Call: HandleNewAutocompleteQuery(autocomplete_controller_type, input_text)
  }

  handleNewAutocompleteResponse(autocomplete_controller_type, response) {
    // Method: HandleNewAutocompleteResponse
    // Call: HandleNewAutocompleteResponse(autocomplete_controller_type, response)
  }

  handleNewMlResponse(autocomplete_controller_type, input_text, matches) {
    // Method: HandleNewMlResponse
    // Call: HandleNewMlResponse(autocomplete_controller_type, input_text, matches)
  }

  handleAnswerIconImageData(autocomplete_controller_type, image_url, image_data) {
    // Method: HandleAnswerIconImageData
    // Call: HandleAnswerIconImageData(autocomplete_controller_type, image_url, image_data)
  }

};

mojom.OmniboxPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
