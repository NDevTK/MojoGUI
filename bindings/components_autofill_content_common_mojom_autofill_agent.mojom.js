// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_agent.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};


// Interface: AutofillAgent
autofill.mojom.AutofillAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill.mojom.AutofillAgent';
  }

  triggerFormExtraction() {
    // Method: TriggerFormExtraction
    // Call: TriggerFormExtraction()
  }

  triggerFormExtractionWithResponse() {
    // Method: TriggerFormExtractionWithResponse
    return new Promise((resolve) => {
      // Call: TriggerFormExtractionWithResponse()
      resolve({});
    });
  }

  applyFieldsAction(action_type, action_persistence, fields, fill_id, supports_refill) {
    // Method: ApplyFieldsAction
    // Call: ApplyFieldsAction(action_type, action_persistence, fields, fill_id, supports_refill)
  }

  applyFieldAction(action_type, action_persistence, field, value) {
    // Method: ApplyFieldAction
    // Call: ApplyFieldAction(action_type, action_persistence, field, value)
  }

  extractFormWithField(field_id) {
    // Method: ExtractFormWithField
    return new Promise((resolve) => {
      // Call: ExtractFormWithField(field_id)
      resolve({});
    });
  }

  extractLabeledTextNodeValue(value_regex, label_regex, number_of_ancestor_levels_to_search) {
    // Method: ExtractLabeledTextNodeValue
    return new Promise((resolve) => {
      // Call: ExtractLabeledTextNodeValue(value_regex, label_regex, number_of_ancestor_levels_to_search)
      resolve({});
    });
  }

  fieldTypePredictionsAvailable(forms) {
    // Method: FieldTypePredictionsAvailable
    // Call: FieldTypePredictionsAvailable(forms)
  }

  exposeDomNodeIds() {
    // Method: ExposeDomNodeIds
    // Call: ExposeDomNodeIds()
  }

  clearPreviewedForm() {
    // Method: ClearPreviewedForm
    // Call: ClearPreviewedForm()
  }

  triggerSuggestions(field, trigger_source) {
    // Method: TriggerSuggestions
    // Call: TriggerSuggestions(field, trigger_source)
  }

  setSuggestionAvailability(field, suggestion_availability) {
    // Method: SetSuggestionAvailability
    // Call: SetSuggestionAvailability(field, suggestion_availability)
  }

  acceptDataListSuggestion(field, value) {
    // Method: AcceptDataListSuggestion
    // Call: AcceptDataListSuggestion(field, value)
  }

  previewPasswordSuggestion(username, password) {
    // Method: PreviewPasswordSuggestion
    // Call: PreviewPasswordSuggestion(username, password)
  }

  previewPasswordGenerationSuggestion(password) {
    // Method: PreviewPasswordGenerationSuggestion
    // Call: PreviewPasswordGenerationSuggestion(password)
  }

  getPotentialLastFourCombinationsForStandaloneCvc() {
    // Method: GetPotentialLastFourCombinationsForStandaloneCvc
    return new Promise((resolve) => {
      // Call: GetPotentialLastFourCombinationsForStandaloneCvc()
      resolve({});
    });
  }

  dispatchEmailVerifiedEvent(field_id, presentation_token) {
    // Method: DispatchEmailVerifiedEvent
    // Call: DispatchEmailVerifiedEvent(field_id, presentation_token)
  }

};

autofill.mojom.AutofillAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PasswordAutofillAgent
autofill.mojom.PasswordAutofillAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill.mojom.PasswordAutofillAgent';
  }

  applyFillDataOnParsingCompletion(form_data) {
    // Method: ApplyFillDataOnParsingCompletion
    // Call: ApplyFillDataOnParsingCompletion(form_data)
  }

  fillPasswordSuggestion(username, password) {
    // Method: FillPasswordSuggestion
    return new Promise((resolve) => {
      // Call: FillPasswordSuggestion(username, password)
      resolve({});
    });
  }

  fillPasswordSuggestionById(username_element_id, password_element_id, username, password, suggestion_source) {
    // Method: FillPasswordSuggestionById
    // Call: FillPasswordSuggestionById(username_element_id, password_element_id, username, password, suggestion_source)
  }

  previewPasswordSuggestionById(username_element_id, password_element_id, username, password) {
    // Method: PreviewPasswordSuggestionById
    // Call: PreviewPasswordSuggestionById(username_element_id, password_element_id, username, password)
  }

  informNoSavedCredentials(should_show_popup_without_passwords) {
    // Method: InformNoSavedCredentials
    // Call: InformNoSavedCredentials(should_show_popup_without_passwords)
  }

  fillIntoFocusedField(is_password, credential) {
    // Method: FillIntoFocusedField
    // Call: FillIntoFocusedField(is_password, credential)
  }

  previewField(field_id, value) {
    // Method: PreviewField
    // Call: PreviewField(field_id, value)
  }

  fillField(field_id, value, field_properties) {
    // Method: FillField
    return new Promise((resolve) => {
      // Call: FillField(field_id, value, field_properties)
      resolve({});
    });
  }

  fillChangePasswordForm(password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password) {
    // Method: FillChangePasswordForm
    return new Promise((resolve) => {
      // Call: FillChangePasswordForm(password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password)
      resolve({});
    });
  }

  setLoggingState(active) {
    // Method: SetLoggingState
    // Call: SetLoggingState(active)
  }

  triggerFormSubmission() {
    // Method: TriggerFormSubmission
    // Call: TriggerFormSubmission()
  }

  annotateFieldsWithParsingResult(parsing_result) {
    // Method: AnnotateFieldsWithParsingResult
    // Call: AnnotateFieldsWithParsingResult(parsing_result)
  }

  checkViewAreaVisible(field_id) {
    // Method: CheckViewAreaVisible
    return new Promise((resolve) => {
      // Call: CheckViewAreaVisible(field_id)
      resolve({});
    });
  }

};

autofill.mojom.PasswordAutofillAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PasswordGenerationAgent
autofill.mojom.PasswordGenerationAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill.mojom.PasswordGenerationAgent';
  }

  generatedPasswordAccepted(generated_password) {
    // Method: GeneratedPasswordAccepted
    // Call: GeneratedPasswordAccepted(generated_password)
  }

  generatedPasswordRejected() {
    // Method: GeneratedPasswordRejected
    // Call: GeneratedPasswordRejected()
  }

  triggeredGeneratePassword() {
    // Method: TriggeredGeneratePassword
    return new Promise((resolve) => {
      // Call: TriggeredGeneratePassword()
      resolve({});
    });
  }

  foundFormEligibleForGeneration(form) {
    // Method: FoundFormEligibleForGeneration
    // Call: FoundFormEligibleForGeneration(form)
  }

  focusNextFieldAfterPasswords() {
    // Method: FocusNextFieldAfterPasswords
    // Call: FocusNextFieldAfterPasswords()
  }

};

autofill.mojom.PasswordGenerationAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
