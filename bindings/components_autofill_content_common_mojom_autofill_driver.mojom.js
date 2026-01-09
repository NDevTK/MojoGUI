// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_driver.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};


// Interface: AutofillDriver
autofill.mojom.AutofillDriverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill.mojom.AutofillDriver';
  }

  formsSeen(updated_forms, removed_forms) {
    // Method: FormsSeen
    // Call: FormsSeen(updated_forms, removed_forms)
  }

  formSubmitted(form, source) {
    // Method: FormSubmitted
    // Call: FormSubmitted(form, source)
  }

  caretMovedInFormField(form, field_id, caret_bounds) {
    // Method: CaretMovedInFormField
    // Call: CaretMovedInFormField(form, field_id, caret_bounds)
  }

  textFieldValueChanged(form, field_id, timestamp) {
    // Method: TextFieldValueChanged
    // Call: TextFieldValueChanged(form, field_id, timestamp)
  }

  didEndTextFieldEditing() {
    // Method: DidEndTextFieldEditing
    // Call: DidEndTextFieldEditing()
  }

  textFieldDidScroll(form, field_id) {
    // Method: TextFieldDidScroll
    // Call: TextFieldDidScroll(form, field_id)
  }

  selectControlSelectionChanged(form, field_id) {
    // Method: SelectControlSelectionChanged
    // Call: SelectControlSelectionChanged(form, field_id)
  }

  selectFieldOptionsDidChange(form, field_id) {
    // Method: SelectFieldOptionsDidChange
    // Call: SelectFieldOptionsDidChange(form, field_id)
  }

  focusOnFormField(form, field_id) {
    // Method: FocusOnFormField
    // Call: FocusOnFormField(form, field_id)
  }

  focusOnNonFormField() {
    // Method: FocusOnNonFormField
    // Call: FocusOnNonFormField()
  }

  askForValuesToFill(form, field_id, caret_bounds, trigger_source, password_request) {
    // Method: AskForValuesToFill
    // Call: AskForValuesToFill(form, field_id, caret_bounds, trigger_source, password_request)
  }

  hidePopup() {
    // Method: HidePopup
    // Call: HidePopup()
  }

  didAutofillForm(form) {
    // Method: DidAutofillForm
    // Call: DidAutofillForm(form)
  }

  suppressAutomaticRefills(fill_id) {
    // Method: SuppressAutomaticRefills
    // Call: SuppressAutomaticRefills(fill_id)
  }

  requestRefill(fill_id) {
    // Method: RequestRefill
    // Call: RequestRefill(fill_id)
  }

  javaScriptChangedAutofilledValue(form, field_id, old_value) {
    // Method: JavaScriptChangedAutofilledValue
    // Call: JavaScriptChangedAutofilledValue(form, field_id, old_value)
  }

};

autofill.mojom.AutofillDriverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PasswordManagerDriver
autofill.mojom.PasswordManagerDriverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill.mojom.PasswordManagerDriver';
  }

  passwordFormsParsed(forms_data) {
    // Method: PasswordFormsParsed
    // Call: PasswordFormsParsed(forms_data)
  }

  passwordFormsRendered(visible_forms_data) {
    // Method: PasswordFormsRendered
    // Call: PasswordFormsRendered(visible_forms_data)
  }

  passwordFormSubmitted(form_data) {
    // Method: PasswordFormSubmitted
    // Call: PasswordFormSubmitted(form_data)
  }

  informAboutUserInput(form_data) {
    // Method: InformAboutUserInput
    // Call: InformAboutUserInput(form_data)
  }

  dynamicFormSubmission(submission_indication_event) {
    // Method: DynamicFormSubmission
    // Call: DynamicFormSubmission(submission_indication_event)
  }

  passwordFormCleared(form_data) {
    // Method: PasswordFormCleared
    // Call: PasswordFormCleared(form_data)
  }

  recordSavePasswordProgress(log) {
    // Method: RecordSavePasswordProgress
    // Call: RecordSavePasswordProgress(log)
  }

  userModifiedPasswordField() {
    // Method: UserModifiedPasswordField
    // Call: UserModifiedPasswordField()
  }

  userModifiedNonPasswordField(renderer_id, value, autocomplete_attribute_has_username, is_likely_otp) {
    // Method: UserModifiedNonPasswordField
    // Call: UserModifiedNonPasswordField(renderer_id, value, autocomplete_attribute_has_username, is_likely_otp)
  }

  showPasswordSuggestions(request) {
    // Method: ShowPasswordSuggestions
    // Call: ShowPasswordSuggestions(request)
  }

  checkSafeBrowsingReputation(form_action, frame_url) {
    // Method: CheckSafeBrowsingReputation
    // Call: CheckSafeBrowsingReputation(form_action, frame_url)
  }

  focusedInputChanged(focused_field_id, focused_field_type) {
    // Method: FocusedInputChanged
    // Call: FocusedInputChanged(focused_field_id, focused_field_type)
  }

  logFirstFillingResult(form_renderer_id, result) {
    // Method: LogFirstFillingResult
    // Call: LogFirstFillingResult(form_renderer_id, result)
  }

};

autofill.mojom.PasswordManagerDriverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PasswordGenerationDriver
autofill.mojom.PasswordGenerationDriverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill.mojom.PasswordGenerationDriver';
  }

  automaticGenerationAvailable(password_generation_ui_data) {
    // Method: AutomaticGenerationAvailable
    // Call: AutomaticGenerationAvailable(password_generation_ui_data)
  }

  presaveGeneratedPassword(form_data, password_value) {
    // Method: PresaveGeneratedPassword
    // Call: PresaveGeneratedPassword(form_data, password_value)
  }

  passwordNoLongerGenerated(form_data) {
    // Method: PasswordNoLongerGenerated
    // Call: PasswordNoLongerGenerated(form_data)
  }

  showPasswordEditingPopup(bounds, form_data, field_renderer_id, password_value) {
    // Method: ShowPasswordEditingPopup
    // Call: ShowPasswordEditingPopup(bounds, form_data, field_renderer_id, password_value)
  }

  passwordGenerationRejectedByTyping() {
    // Method: PasswordGenerationRejectedByTyping
    // Call: PasswordGenerationRejectedByTyping()
  }

  frameWasScrolled() {
    // Method: FrameWasScrolled
    // Call: FrameWasScrolled()
  }

  generationElementLostFocus() {
    // Method: GenerationElementLostFocus
    // Call: GenerationElementLostFocus()
  }

};

autofill.mojom.PasswordGenerationDriverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
