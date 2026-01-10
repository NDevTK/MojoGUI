// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_driver.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('updated_forms', 0, 0, mojo.internal.Array(autofill.mojom.FormDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('removed_forms', 8, 0, mojo.internal.Array(autofill.mojom.FormRendererIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec, 'autofill.mojom.AutofillDriver_FormSubmitted_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, autofill.mojom.SubmissionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_CaretMovedInFormField_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('caret_bounds', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec, 'autofill.mojom.AutofillDriver_TextFieldValueChanged_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec, 'autofill.mojom.AutofillDriver_DidEndTextFieldEditing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec, 'autofill.mojom.AutofillDriver_TextFieldDidScroll_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec, 'autofill.mojom.AutofillDriver_SelectControlSelectionChanged_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec, 'autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_FocusOnFormField_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_FocusOnNonFormField_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec, 'autofill.mojom.AutofillDriver_AskForValuesToFill_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('caret_bounds', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger_source', 24, 0, autofill.mojom.AutofillSuggestionTriggerSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_request', 32, 0, autofill.mojom.PasswordSuggestionRequestSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_HidePopup_ParamsSpec, 'autofill.mojom.AutofillDriver_HidePopup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec, 'autofill.mojom.AutofillDriver_DidAutofillForm_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec, 'autofill.mojom.AutofillDriver_SuppressAutomaticRefills_Params', [
      mojo.internal.StructField('fill_id', 0, 0, autofill.mojom.FillIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec, 'autofill.mojom.AutofillDriver_RequestRefill_Params', [
      mojo.internal.StructField('fill_id', 0, 0, autofill.mojom.FillIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec, 'autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('old_value', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
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
      [updated_forms, removed_forms],
      false);
  }

  formSubmitted(form, source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec,
      null,
      [form, source],
      false);
  }

  caretMovedInFormField(form, field_id, caret_bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec,
      null,
      [form, field_id, caret_bounds],
      false);
  }

  textFieldValueChanged(form, field_id, timestamp) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec,
      null,
      [form, field_id, timestamp],
      false);
  }

  didEndTextFieldEditing() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec,
      null,
      [],
      false);
  }

  textFieldDidScroll(form, field_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec,
      null,
      [form, field_id],
      false);
  }

  selectControlSelectionChanged(form, field_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec,
      null,
      [form, field_id],
      false);
  }

  selectFieldOptionsDidChange(form, field_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec,
      null,
      [form, field_id],
      false);
  }

  focusOnFormField(form, field_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec,
      null,
      [form, field_id],
      false);
  }

  focusOnNonFormField() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec,
      null,
      [],
      false);
  }

  askForValuesToFill(form, field_id, caret_bounds, trigger_source, password_request) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec,
      null,
      [form, field_id, caret_bounds, trigger_source, password_request],
      false);
  }

  hidePopup() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.AutofillDriver_HidePopup_ParamsSpec,
      null,
      [],
      false);
  }

  didAutofillForm(form) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec,
      null,
      [form],
      false);
  }

  suppressAutomaticRefills(fill_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec,
      null,
      [fill_id],
      false);
  }

  requestRefill(fill_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec,
      null,
      [fill_id],
      false);
  }

  javaScriptChangedAutofilledValue(form, field_id, old_value) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec,
      null,
      [form, field_id, old_value],
      false);
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

autofill.mojom.AutofillDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: FormsSeen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FormsSeen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: FormSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FormSubmitted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: CaretMovedInFormField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CaretMovedInFormField (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: TextFieldValueChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextFieldValueChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: DidEndTextFieldEditing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidEndTextFieldEditing (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: TextFieldDidScroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextFieldDidScroll (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: SelectControlSelectionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectControlSelectionChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SelectFieldOptionsDidChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectFieldOptionsDidChange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: FocusOnFormField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusOnFormField (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: FocusOnNonFormField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusOnNonFormField (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: AskForValuesToFill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskForValuesToFill (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: HidePopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_HidePopup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HidePopup (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: DidAutofillForm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidAutofillForm (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: SuppressAutomaticRefills
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuppressAutomaticRefills (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: RequestRefill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestRefill (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 15: JavaScriptChangedAutofilledValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JavaScriptChangedAutofilledValue (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.formsSeen');
          const result = this.impl.formsSeen(params.updated_forms, params.removed_forms);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.formSubmitted');
          const result = this.impl.formSubmitted(params.form, params.source);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.caretMovedInFormField');
          const result = this.impl.caretMovedInFormField(params.form, params.field_id, params.caret_bounds);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.textFieldValueChanged');
          const result = this.impl.textFieldValueChanged(params.form, params.field_id, params.timestamp);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didEndTextFieldEditing');
          const result = this.impl.didEndTextFieldEditing();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.textFieldDidScroll');
          const result = this.impl.textFieldDidScroll(params.form, params.field_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectControlSelectionChanged');
          const result = this.impl.selectControlSelectionChanged(params.form, params.field_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectFieldOptionsDidChange');
          const result = this.impl.selectFieldOptionsDidChange(params.form, params.field_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focusOnFormField');
          const result = this.impl.focusOnFormField(params.form, params.field_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focusOnNonFormField');
          const result = this.impl.focusOnNonFormField();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.askForValuesToFill');
          const result = this.impl.askForValuesToFill(params.form, params.field_id, params.caret_bounds, params.trigger_source, params.password_request);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_HidePopup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hidePopup');
          const result = this.impl.hidePopup();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didAutofillForm');
          const result = this.impl.didAutofillForm(params.form);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suppressAutomaticRefills');
          const result = this.impl.suppressAutomaticRefills(params.fill_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestRefill');
          const result = this.impl.requestRefill(params.fill_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.javaScriptChangedAutofilledValue');
          const result = this.impl.javaScriptChangedAutofilledValue(params.form, params.field_id, params.old_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

autofill.mojom.AutofillDriverReceiver = autofill.mojom.AutofillDriverReceiver;

autofill.mojom.AutofillDriverPtr = autofill.mojom.AutofillDriverRemote;
autofill.mojom.AutofillDriverRequest = autofill.mojom.AutofillDriverPendingReceiver;


// Interface: PasswordManagerDriver
mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_Params', [
      mojo.internal.StructField('forms_data', 0, 0, mojo.internal.Array(autofill.mojom.FormDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_Params', [
      mojo.internal.StructField('visible_forms_data', 0, 0, mojo.internal.Array(autofill.mojom.FormDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_InformAboutUserInput_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_Params', [
      mojo.internal.StructField('submission_indication_event', 0, 0, autofill.mojom.SubmissionIndicatorEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormCleared_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
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
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_Params', [
      mojo.internal.StructField('renderer_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('autocomplete_attribute_has_username', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_likely_otp', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_Params', [
      mojo.internal.StructField('request', 0, 0, autofill.mojom.PasswordSuggestionRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_Params', [
      mojo.internal.StructField('form_action', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_FocusedInputChanged_Params', [
      mojo.internal.StructField('focused_field_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focused_field_type', 8, 0, autofill.mojom.FocusedFieldTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_Params', [
      mojo.internal.StructField('form_renderer_id', 0, 0, autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
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
      [forms_data],
      false);
  }

  passwordFormsRendered(visible_forms_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec,
      null,
      [visible_forms_data],
      false);
  }

  passwordFormSubmitted(form_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec,
      null,
      [form_data],
      false);
  }

  informAboutUserInput(form_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec,
      null,
      [form_data],
      false);
  }

  dynamicFormSubmission(submission_indication_event) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec,
      null,
      [submission_indication_event],
      false);
  }

  passwordFormCleared(form_data) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec,
      null,
      [form_data],
      false);
  }

  recordSavePasswordProgress(log) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec,
      null,
      [log],
      false);
  }

  userModifiedPasswordField() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec,
      null,
      [],
      false);
  }

  userModifiedNonPasswordField(renderer_id, value, autocomplete_attribute_has_username, is_likely_otp) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec,
      null,
      [renderer_id, value, autocomplete_attribute_has_username, is_likely_otp],
      false);
  }

  showPasswordSuggestions(request) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec,
      null,
      [request],
      false);
  }

  checkSafeBrowsingReputation(form_action, frame_url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec,
      null,
      [form_action, frame_url],
      false);
  }

  focusedInputChanged(focused_field_id, focused_field_type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec,
      null,
      [focused_field_id, focused_field_type],
      false);
  }

  logFirstFillingResult(form_renderer_id, result) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec,
      null,
      [form_renderer_id, result],
      false);
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

autofill.mojom.PasswordManagerDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PasswordFormsParsed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormsParsed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: PasswordFormsRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormsRendered (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: PasswordFormSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormSubmitted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: InformAboutUserInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InformAboutUserInput (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: DynamicFormSubmission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DynamicFormSubmission (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: PasswordFormCleared
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormCleared (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: RecordSavePasswordProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordSavePasswordProgress (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: UserModifiedPasswordField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UserModifiedPasswordField (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: UserModifiedNonPasswordField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UserModifiedNonPasswordField (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: ShowPasswordSuggestions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPasswordSuggestions (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: CheckSafeBrowsingReputation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckSafeBrowsingReputation (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: FocusedInputChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusedInputChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: LogFirstFillingResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogFirstFillingResult (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passwordFormsParsed');
          const result = this.impl.passwordFormsParsed(params.forms_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passwordFormsRendered');
          const result = this.impl.passwordFormsRendered(params.visible_forms_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passwordFormSubmitted');
          const result = this.impl.passwordFormSubmitted(params.form_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.informAboutUserInput');
          const result = this.impl.informAboutUserInput(params.form_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dynamicFormSubmission');
          const result = this.impl.dynamicFormSubmission(params.submission_indication_event);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passwordFormCleared');
          const result = this.impl.passwordFormCleared(params.form_data);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordSavePasswordProgress');
          const result = this.impl.recordSavePasswordProgress(params.log);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.userModifiedPasswordField');
          const result = this.impl.userModifiedPasswordField();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.userModifiedNonPasswordField');
          const result = this.impl.userModifiedNonPasswordField(params.renderer_id, params.value, params.autocomplete_attribute_has_username, params.is_likely_otp);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showPasswordSuggestions');
          const result = this.impl.showPasswordSuggestions(params.request);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.checkSafeBrowsingReputation');
          const result = this.impl.checkSafeBrowsingReputation(params.form_action, params.frame_url);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focusedInputChanged');
          const result = this.impl.focusedInputChanged(params.focused_field_id, params.focused_field_type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logFirstFillingResult');
          const result = this.impl.logFirstFillingResult(params.form_renderer_id, params.result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

autofill.mojom.PasswordManagerDriverReceiver = autofill.mojom.PasswordManagerDriverReceiver;

autofill.mojom.PasswordManagerDriverPtr = autofill.mojom.PasswordManagerDriverRemote;
autofill.mojom.PasswordManagerDriverRequest = autofill.mojom.PasswordManagerDriverPendingReceiver;


// Interface: PasswordGenerationDriver
mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_Params', [
      mojo.internal.StructField('password_generation_ui_data', 0, 0, autofill.mojom.PasswordGenerationUIDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('form_data', 8, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_renderer_id', 16, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_value', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_Params', [
    ],
    [[0, 8]]);

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
      [password_generation_ui_data],
      false);
  }

  presaveGeneratedPassword(form_data, password_value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec,
      null,
      [form_data, password_value],
      false);
  }

  passwordNoLongerGenerated(form_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec,
      null,
      [form_data],
      false);
  }

  showPasswordEditingPopup(bounds, form_data, field_renderer_id, password_value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec,
      null,
      [bounds, form_data, field_renderer_id, password_value],
      false);
  }

  passwordGenerationRejectedByTyping() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec,
      null,
      [],
      false);
  }

  frameWasScrolled() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec,
      null,
      [],
      false);
  }

  generationElementLostFocus() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec,
      null,
      [],
      false);
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

autofill.mojom.PasswordGenerationDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AutomaticGenerationAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutomaticGenerationAvailable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: PresaveGeneratedPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PresaveGeneratedPassword (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: PasswordNoLongerGenerated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordNoLongerGenerated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ShowPasswordEditingPopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPasswordEditingPopup (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: PasswordGenerationRejectedByTyping
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordGenerationRejectedByTyping (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: FrameWasScrolled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FrameWasScrolled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: GenerationElementLostFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerationElementLostFocus (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.automaticGenerationAvailable');
          const result = this.impl.automaticGenerationAvailable(params.password_generation_ui_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.presaveGeneratedPassword');
          const result = this.impl.presaveGeneratedPassword(params.form_data, params.password_value);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passwordNoLongerGenerated');
          const result = this.impl.passwordNoLongerGenerated(params.form_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showPasswordEditingPopup');
          const result = this.impl.showPasswordEditingPopup(params.bounds, params.form_data, params.field_renderer_id, params.password_value);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passwordGenerationRejectedByTyping');
          const result = this.impl.passwordGenerationRejectedByTyping();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.frameWasScrolled');
          const result = this.impl.frameWasScrolled();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generationElementLostFocus');
          const result = this.impl.generationElementLostFocus();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

autofill.mojom.PasswordGenerationDriverReceiver = autofill.mojom.PasswordGenerationDriverReceiver;

autofill.mojom.PasswordGenerationDriverPtr = autofill.mojom.PasswordGenerationDriverRemote;
autofill.mojom.PasswordGenerationDriverRequest = autofill.mojom.PasswordGenerationDriverPendingReceiver;

