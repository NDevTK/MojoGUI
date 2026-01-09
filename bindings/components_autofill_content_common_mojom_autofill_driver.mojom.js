// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_driver.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};


// Interface: AutofillDriver
autofill.mojom.AutofillDriver = {};

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

// ParamsSpec for FormsSeen
autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.FormsSeen_Params',
      packedSize: 24,
      fields: [
        { name: 'updated_forms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'removed_forms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FormSubmitted
autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.FormSubmitted_Params',
      packedSize: 24,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CaretMovedInFormField
autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.CaretMovedInFormField_Params',
      packedSize: 32,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'caret_bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TextFieldValueChanged
autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.TextFieldValueChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidEndTextFieldEditing
autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.DidEndTextFieldEditing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TextFieldDidScroll
autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.TextFieldDidScroll_Params',
      packedSize: 24,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectControlSelectionChanged
autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.SelectControlSelectionChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectFieldOptionsDidChange
autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.SelectFieldOptionsDidChange_Params',
      packedSize: 24,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusOnFormField
autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.FocusOnFormField_Params',
      packedSize: 24,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusOnNonFormField
autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.FocusOnNonFormField_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AskForValuesToFill
autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.AskForValuesToFill_Params',
      packedSize: 48,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'caret_bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'trigger_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_request', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HidePopup
autofill.mojom.AutofillDriver_HidePopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.HidePopup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidAutofillForm
autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.DidAutofillForm_Params',
      packedSize: 16,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SuppressAutomaticRefills
autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.SuppressAutomaticRefills_Params',
      packedSize: 16,
      fields: [
        { name: 'fill_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestRefill
autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.RequestRefill_Params',
      packedSize: 16,
      fields: [
        { name: 'fill_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for JavaScriptChangedAutofilledValue
autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillDriver.JavaScriptChangedAutofilledValue_Params',
      packedSize: 32,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'old_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
autofill.mojom.AutofillDriverPtr = autofill.mojom.AutofillDriverRemote;
autofill.mojom.AutofillDriverRequest = autofill.mojom.AutofillDriverPendingReceiver;


// Interface: PasswordManagerDriver
autofill.mojom.PasswordManagerDriver = {};

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

// ParamsSpec for PasswordFormsParsed
autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.PasswordFormsParsed_Params',
      packedSize: 16,
      fields: [
        { name: 'forms_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PasswordFormsRendered
autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.PasswordFormsRendered_Params',
      packedSize: 16,
      fields: [
        { name: 'visible_forms_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PasswordFormSubmitted
autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.PasswordFormSubmitted_Params',
      packedSize: 16,
      fields: [
        { name: 'form_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InformAboutUserInput
autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.InformAboutUserInput_Params',
      packedSize: 16,
      fields: [
        { name: 'form_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DynamicFormSubmission
autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.DynamicFormSubmission_Params',
      packedSize: 16,
      fields: [
        { name: 'submission_indication_event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PasswordFormCleared
autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.PasswordFormCleared_Params',
      packedSize: 16,
      fields: [
        { name: 'form_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordSavePasswordProgress
autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.RecordSavePasswordProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'log', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UserModifiedPasswordField
autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.UserModifiedPasswordField_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UserModifiedNonPasswordField
autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.UserModifiedNonPasswordField_Params',
      packedSize: 40,
      fields: [
        { name: 'renderer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'autocomplete_attribute_has_username', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_likely_otp', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowPasswordSuggestions
autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.ShowPasswordSuggestions_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CheckSafeBrowsingReputation
autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.CheckSafeBrowsingReputation_Params',
      packedSize: 24,
      fields: [
        { name: 'form_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusedInputChanged
autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.FocusedInputChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'focused_field_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'focused_field_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogFirstFillingResult
autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordManagerDriver.LogFirstFillingResult_Params',
      packedSize: 24,
      fields: [
        { name: 'form_renderer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
autofill.mojom.PasswordManagerDriverPtr = autofill.mojom.PasswordManagerDriverRemote;
autofill.mojom.PasswordManagerDriverRequest = autofill.mojom.PasswordManagerDriverPendingReceiver;


// Interface: PasswordGenerationDriver
autofill.mojom.PasswordGenerationDriver = {};

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

// ParamsSpec for AutomaticGenerationAvailable
autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationDriver.AutomaticGenerationAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'password_generation_ui_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PresaveGeneratedPassword
autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationDriver.PresaveGeneratedPassword_Params',
      packedSize: 24,
      fields: [
        { name: 'form_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PasswordNoLongerGenerated
autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationDriver.PasswordNoLongerGenerated_Params',
      packedSize: 16,
      fields: [
        { name: 'form_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowPasswordEditingPopup
autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationDriver.ShowPasswordEditingPopup_Params',
      packedSize: 40,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'form_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_renderer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PasswordGenerationRejectedByTyping
autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationDriver.PasswordGenerationRejectedByTyping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FrameWasScrolled
autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationDriver.FrameWasScrolled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GenerationElementLostFocus
autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationDriver.GenerationElementLostFocus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
autofill.mojom.PasswordGenerationDriverPtr = autofill.mojom.PasswordGenerationDriverRemote;
autofill.mojom.PasswordGenerationDriverRequest = autofill.mojom.PasswordGenerationDriverPendingReceiver;

