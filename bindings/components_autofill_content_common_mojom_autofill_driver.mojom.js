// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_driver.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};
var components = components || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

autofill.mojom.AutofillDriver = {};
autofill.mojom.AutofillDriver.$interfaceName = 'autofill.mojom.AutofillDriver';
autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_HidePopup_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec = { $: {} };
autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver = {};
autofill.mojom.PasswordManagerDriver.$interfaceName = 'autofill.mojom.PasswordManagerDriver';
autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec = { $: {} };
autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationDriver = {};
autofill.mojom.PasswordGenerationDriver.$interfaceName = 'autofill.mojom.PasswordGenerationDriver';
autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec = { $: {} };

// Interface: AutofillDriver
mojo.internal.Struct(
    autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec, 'autofill.mojom.AutofillDriver_FormsSeen_Params', [
      mojo.internal.StructField('updated_forms', 0, 0, mojo.internal.Array(autofill.mojom.FormDataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('removed_forms', 8, 0, mojo.internal.Array(autofill.mojom.FormRendererIdSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec, 'autofill.mojom.AutofillDriver_FormSubmitted_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, autofill.mojom.SubmissionSourceSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_CaretMovedInFormField_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('caret_bounds', 16, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec, 'autofill.mojom.AutofillDriver_TextFieldValueChanged_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec, 'autofill.mojom.AutofillDriver_DidEndTextFieldEditing_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec, 'autofill.mojom.AutofillDriver_TextFieldDidScroll_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec, 'autofill.mojom.AutofillDriver_SelectControlSelectionChanged_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec, 'autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_FocusOnFormField_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_FocusOnNonFormField_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec, 'autofill.mojom.AutofillDriver_AskForValuesToFill_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('caret_bounds', 16, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('trigger_source', 32, 0, autofill.mojom.AutofillSuggestionTriggerSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('password_request', 24, 0, autofill.mojom.PasswordSuggestionRequestSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_HidePopup_ParamsSpec, 'autofill.mojom.AutofillDriver_HidePopup_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec, 'autofill.mojom.AutofillDriver_DidAutofillForm_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec, 'autofill.mojom.AutofillDriver_SuppressAutomaticRefills_Params', [
      mojo.internal.StructField('fill_id', 0, 0, autofill.mojom.FillIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec, 'autofill.mojom.AutofillDriver_RequestRefill_Params', [
      mojo.internal.StructField('fill_id', 0, 0, autofill.mojom.FillIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec, 'autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('old_value', 16, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 32]]);

autofill.mojom.AutofillDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill.mojom.AutofillDriverRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.AutofillDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill.mojom.AutofillDriverPendingReceiver,
      handle);
    this.$ = new autofill.mojom.AutofillDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill.mojom.AutofillDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  formsSeen(updated_forms, removed_forms) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec,
      null,
      [updated_forms, removed_forms]);
  }

  formSubmitted(form, source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec,
      null,
      [form, source]);
  }

  caretMovedInFormField(form, field_id, caret_bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec,
      null,
      [form, field_id, caret_bounds]);
  }

  textFieldValueChanged(form, field_id, timestamp) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec,
      null,
      [form, field_id, timestamp]);
  }

  didEndTextFieldEditing() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec,
      null,
      []);
  }

  textFieldDidScroll(form, field_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec,
      null,
      [form, field_id]);
  }

  selectControlSelectionChanged(form, field_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec,
      null,
      [form, field_id]);
  }

  selectFieldOptionsDidChange(form, field_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec,
      null,
      [form, field_id]);
  }

  focusOnFormField(form, field_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec,
      null,
      [form, field_id]);
  }

  focusOnNonFormField() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec,
      null,
      []);
  }

  askForValuesToFill(form, field_id, caret_bounds, trigger_source, password_request) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec,
      null,
      [form, field_id, caret_bounds, trigger_source, password_request]);
  }

  hidePopup() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.AutofillDriver_HidePopup_ParamsSpec,
      null,
      []);
  }

  didAutofillForm(form) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec,
      null,
      [form]);
  }

  suppressAutomaticRefills(fill_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec,
      null,
      [fill_id]);
  }

  requestRefill(fill_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec,
      null,
      [fill_id]);
  }

  javaScriptChangedAutofilledValue(form, field_id, old_value) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec,
      null,
      [form, field_id, old_value]);
  }

};

autofill.mojom.AutofillDriver.getRemote = function() {
  let remote = new autofill.mojom.AutofillDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.AutofillDriver',
    'context');
  return remote.$;
};

autofill.mojom.AutofillDriverPtr = autofill.mojom.AutofillDriverRemote;
autofill.mojom.AutofillDriverRequest = autofill.mojom.AutofillDriverPendingReceiver;


// Interface: PasswordManagerDriver
mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_Params', [
      mojo.internal.StructField('forms_data', 0, 0, mojo.internal.Array(autofill.mojom.FormDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_Params', [
      mojo.internal.StructField('visible_forms_data', 0, 0, mojo.internal.Array(autofill.mojom.FormDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_InformAboutUserInput_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_Params', [
      mojo.internal.StructField('submission_indication_event', 0, 0, autofill.mojom.SubmissionIndicatorEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormCleared_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_Params', [
      mojo.internal.StructField('log', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_Params', [
      mojo.internal.StructField('renderer_id', 0, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('autocomplete_attribute_has_username', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_likely_otp', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_Params', [
      mojo.internal.StructField('request', 0, 0, autofill.mojom.PasswordSuggestionRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_Params', [
      mojo.internal.StructField('form_action', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_FocusedInputChanged_Params', [
      mojo.internal.StructField('focused_field_id', 0, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('focused_field_type', 8, 0, autofill.mojom.FocusedFieldTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_Params', [
      mojo.internal.StructField('form_renderer_id', 0, 0, autofill.mojom.FormRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

autofill.mojom.PasswordManagerDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill.mojom.PasswordManagerDriverRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.PasswordManagerDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill.mojom.PasswordManagerDriverPendingReceiver,
      handle);
    this.$ = new autofill.mojom.PasswordManagerDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill.mojom.PasswordManagerDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  passwordFormsParsed(forms_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec,
      null,
      [forms_data]);
  }

  passwordFormsRendered(visible_forms_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec,
      null,
      [visible_forms_data]);
  }

  passwordFormSubmitted(form_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec,
      null,
      [form_data]);
  }

  informAboutUserInput(form_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec,
      null,
      [form_data]);
  }

  dynamicFormSubmission(submission_indication_event) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec,
      null,
      [submission_indication_event]);
  }

  passwordFormCleared(form_data) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec,
      null,
      [form_data]);
  }

  recordSavePasswordProgress(log) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec,
      null,
      [log]);
  }

  userModifiedPasswordField() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec,
      null,
      []);
  }

  userModifiedNonPasswordField(renderer_id, value, autocomplete_attribute_has_username, is_likely_otp) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec,
      null,
      [renderer_id, value, autocomplete_attribute_has_username, is_likely_otp]);
  }

  showPasswordSuggestions(request) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec,
      null,
      [request]);
  }

  checkSafeBrowsingReputation(form_action, frame_url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec,
      null,
      [form_action, frame_url]);
  }

  focusedInputChanged(focused_field_id, focused_field_type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec,
      null,
      [focused_field_id, focused_field_type]);
  }

  logFirstFillingResult(form_renderer_id, result) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec,
      null,
      [form_renderer_id, result]);
  }

};

autofill.mojom.PasswordManagerDriver.getRemote = function() {
  let remote = new autofill.mojom.PasswordManagerDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.PasswordManagerDriver',
    'context');
  return remote.$;
};

autofill.mojom.PasswordManagerDriverPtr = autofill.mojom.PasswordManagerDriverRemote;
autofill.mojom.PasswordManagerDriverRequest = autofill.mojom.PasswordManagerDriverPendingReceiver;


// Interface: PasswordGenerationDriver
mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_Params', [
      mojo.internal.StructField('password_generation_ui_data', 0, 0, autofill.mojom.PasswordGenerationUIDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('password_value', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('form_data', 8, 0, autofill.mojom.FormDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('field_renderer_id', 16, 0, autofill.mojom.FieldRendererIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('password_value', 24, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_Params', [
    ],
    [{version: 0, packedSize: 8}]);

autofill.mojom.PasswordGenerationDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill.mojom.PasswordGenerationDriverRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.PasswordGenerationDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill.mojom.PasswordGenerationDriverPendingReceiver,
      handle);
    this.$ = new autofill.mojom.PasswordGenerationDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill.mojom.PasswordGenerationDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  automaticGenerationAvailable(password_generation_ui_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec,
      null,
      [password_generation_ui_data]);
  }

  presaveGeneratedPassword(form_data, password_value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec,
      null,
      [form_data, password_value]);
  }

  passwordNoLongerGenerated(form_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec,
      null,
      [form_data]);
  }

  showPasswordEditingPopup(bounds, form_data, field_renderer_id, password_value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec,
      null,
      [bounds, form_data, field_renderer_id, password_value]);
  }

  passwordGenerationRejectedByTyping() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec,
      null,
      []);
  }

  frameWasScrolled() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec,
      null,
      []);
  }

  generationElementLostFocus() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec,
      null,
      []);
  }

};

autofill.mojom.PasswordGenerationDriver.getRemote = function() {
  let remote = new autofill.mojom.PasswordGenerationDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.PasswordGenerationDriver',
    'context');
  return remote.$;
};

autofill.mojom.PasswordGenerationDriverPtr = autofill.mojom.PasswordGenerationDriverRemote;
autofill.mojom.PasswordGenerationDriverRequest = autofill.mojom.PasswordGenerationDriverPendingReceiver;

