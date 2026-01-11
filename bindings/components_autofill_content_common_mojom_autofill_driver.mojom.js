// Auto-generated MojoJS binding
 // Source: chromium_src/components/autofill/content/common/mojom/autofill_driver.mojom
 // Module: autofill.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.autofill = mojo.internal.bindings.autofill || {};
mojo.internal.bindings.autofill.mojom = mojo.internal.bindings.autofill.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.autofill.mojom.AutofillDriver = {};
mojo.internal.bindings.autofill.mojom.AutofillDriver.$interfaceName = 'autofill.mojom.AutofillDriver';
mojo.internal.bindings.autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_HidePopup_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver = {};
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver.$interfaceName = 'autofill.mojom.PasswordManagerDriver';
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver = {};
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver.$interfaceName = 'autofill.mojom.PasswordGenerationDriver';
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec = { $: {} };

// Interface: AutofillDriver
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec, 'autofill.mojom.AutofillDriver_FormsSeen_Params', [
      mojo.internal.StructField('arg_updated_forms', 0, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FormDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_removed_forms', 8, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FormRendererIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec, 'autofill.mojom.AutofillDriver_FormSubmitted_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 8, 0, mojo.internal.bindings.autofill.mojom.SubmissionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_CaretMovedInFormField_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_caret_bounds', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec, 'autofill.mojom.AutofillDriver_TextFieldValueChanged_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec, 'autofill.mojom.AutofillDriver_DidEndTextFieldEditing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec, 'autofill.mojom.AutofillDriver_TextFieldDidScroll_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec, 'autofill.mojom.AutofillDriver_SelectControlSelectionChanged_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec, 'autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_FocusOnFormField_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec, 'autofill.mojom.AutofillDriver_FocusOnNonFormField_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec, 'autofill.mojom.AutofillDriver_AskForValuesToFill_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_caret_bounds', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_source', 24, 0, mojo.internal.bindings.autofill.mojom.AutofillSuggestionTriggerSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_password_request', 32, 0, mojo.internal.bindings.autofill.mojom.PasswordSuggestionRequestSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_HidePopup_ParamsSpec, 'autofill.mojom.AutofillDriver_HidePopup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec, 'autofill.mojom.AutofillDriver_DidAutofillForm_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec, 'autofill.mojom.AutofillDriver_SuppressAutomaticRefills_Params', [
      mojo.internal.StructField('arg_fill_id', 0, 0, mojo.internal.bindings.autofill.mojom.FillIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec, 'autofill.mojom.AutofillDriver_RequestRefill_Params', [
      mojo.internal.StructField('arg_fill_id', 0, 0, mojo.internal.bindings.autofill.mojom.FillIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec, 'autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_old_value', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.autofill.mojom.AutofillDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.autofill.mojom.AutofillDriverRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.AutofillDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.autofill.mojom.AutofillDriverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.autofill.mojom.AutofillDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  formsSeen(arg_updated_forms, arg_removed_forms) {
    return this.$.formsSeen(arg_updated_forms, arg_removed_forms);
  }
  formSubmitted(arg_form, arg_source) {
    return this.$.formSubmitted(arg_form, arg_source);
  }
  caretMovedInFormField(arg_form, arg_field_id, arg_caret_bounds) {
    return this.$.caretMovedInFormField(arg_form, arg_field_id, arg_caret_bounds);
  }
  textFieldValueChanged(arg_form, arg_field_id, arg_timestamp) {
    return this.$.textFieldValueChanged(arg_form, arg_field_id, arg_timestamp);
  }
  didEndTextFieldEditing() {
    return this.$.didEndTextFieldEditing();
  }
  textFieldDidScroll(arg_form, arg_field_id) {
    return this.$.textFieldDidScroll(arg_form, arg_field_id);
  }
  selectControlSelectionChanged(arg_form, arg_field_id) {
    return this.$.selectControlSelectionChanged(arg_form, arg_field_id);
  }
  selectFieldOptionsDidChange(arg_form, arg_field_id) {
    return this.$.selectFieldOptionsDidChange(arg_form, arg_field_id);
  }
  focusOnFormField(arg_form, arg_field_id) {
    return this.$.focusOnFormField(arg_form, arg_field_id);
  }
  focusOnNonFormField() {
    return this.$.focusOnNonFormField();
  }
  askForValuesToFill(arg_form, arg_field_id, arg_caret_bounds, arg_trigger_source, arg_password_request) {
    return this.$.askForValuesToFill(arg_form, arg_field_id, arg_caret_bounds, arg_trigger_source, arg_password_request);
  }
  hidePopup() {
    return this.$.hidePopup();
  }
  didAutofillForm(arg_form) {
    return this.$.didAutofillForm(arg_form);
  }
  suppressAutomaticRefills(arg_fill_id) {
    return this.$.suppressAutomaticRefills(arg_fill_id);
  }
  requestRefill(arg_fill_id) {
    return this.$.requestRefill(arg_fill_id);
  }
  javaScriptChangedAutofilledValue(arg_form, arg_field_id, arg_old_value) {
    return this.$.javaScriptChangedAutofilledValue(arg_form, arg_field_id, arg_old_value);
  }
};

mojo.internal.bindings.autofill.mojom.AutofillDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AutofillDriver', [
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

  formsSeen(arg_updated_forms, arg_removed_forms) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec,
      null,
      [arg_updated_forms, arg_removed_forms],
      false);
  }

  formSubmitted(arg_form, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec,
      null,
      [arg_form, arg_source],
      false);
  }

  caretMovedInFormField(arg_form, arg_field_id, arg_caret_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec,
      null,
      [arg_form, arg_field_id, arg_caret_bounds],
      false);
  }

  textFieldValueChanged(arg_form, arg_field_id, arg_timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec,
      null,
      [arg_form, arg_field_id, arg_timestamp],
      false);
  }

  didEndTextFieldEditing() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec,
      null,
      [],
      false);
  }

  textFieldDidScroll(arg_form, arg_field_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec,
      null,
      [arg_form, arg_field_id],
      false);
  }

  selectControlSelectionChanged(arg_form, arg_field_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec,
      null,
      [arg_form, arg_field_id],
      false);
  }

  selectFieldOptionsDidChange(arg_form, arg_field_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec,
      null,
      [arg_form, arg_field_id],
      false);
  }

  focusOnFormField(arg_form, arg_field_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec,
      null,
      [arg_form, arg_field_id],
      false);
  }

  focusOnNonFormField() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec,
      null,
      [],
      false);
  }

  askForValuesToFill(arg_form, arg_field_id, arg_caret_bounds, arg_trigger_source, arg_password_request) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec,
      null,
      [arg_form, arg_field_id, arg_caret_bounds, arg_trigger_source, arg_password_request],
      false);
  }

  hidePopup() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_HidePopup_ParamsSpec,
      null,
      [],
      false);
  }

  didAutofillForm(arg_form) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec,
      null,
      [arg_form],
      false);
  }

  suppressAutomaticRefills(arg_fill_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec,
      null,
      [arg_fill_id],
      false);
  }

  requestRefill(arg_fill_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec,
      null,
      [arg_fill_id],
      false);
  }

  javaScriptChangedAutofilledValue(arg_form, arg_field_id, arg_old_value) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec,
      null,
      [arg_form, arg_field_id, arg_old_value],
      false);
  }

};

mojo.internal.bindings.autofill.mojom.AutofillDriver.getRemote = function() {
  let remote = new mojo.internal.bindings.autofill.mojom.AutofillDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.AutofillDriver',
    'context');
  return remote.$;
};

mojo.internal.bindings.autofill.mojom.AutofillDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AutofillDriver', [
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: FormsSeen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FormsSeen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FormSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FormSubmitted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CaretMovedInFormField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CaretMovedInFormField (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: TextFieldValueChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextFieldValueChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DidEndTextFieldEditing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidEndTextFieldEditing (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TextFieldDidScroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextFieldDidScroll (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SelectControlSelectionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectControlSelectionChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SelectFieldOptionsDidChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectFieldOptionsDidChange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: FocusOnFormField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusOnFormField (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: FocusOnNonFormField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusOnNonFormField (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AskForValuesToFill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskForValuesToFill (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: HidePopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_HidePopup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HidePopup (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: DidAutofillForm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidAutofillForm (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SuppressAutomaticRefills
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuppressAutomaticRefills (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RequestRefill
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestRefill (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: JavaScriptChangedAutofilledValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JavaScriptChangedAutofilledValue (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FormsSeen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.formsSeen');
          const result = this.impl.formsSeen(params.arg_updated_forms, params.arg_removed_forms);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FormSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.formSubmitted');
          const result = this.impl.formSubmitted(params.arg_form, params.arg_source);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_CaretMovedInFormField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.caretMovedInFormField');
          const result = this.impl.caretMovedInFormField(params.arg_form, params.arg_field_id, params.arg_caret_bounds);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldValueChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textFieldValueChanged');
          const result = this.impl.textFieldValueChanged(params.arg_form, params.arg_field_id, params.arg_timestamp);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_DidEndTextFieldEditing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didEndTextFieldEditing');
          const result = this.impl.didEndTextFieldEditing();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_TextFieldDidScroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textFieldDidScroll');
          const result = this.impl.textFieldDidScroll(params.arg_form, params.arg_field_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectControlSelectionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectControlSelectionChanged');
          const result = this.impl.selectControlSelectionChanged(params.arg_form, params.arg_field_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_SelectFieldOptionsDidChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectFieldOptionsDidChange');
          const result = this.impl.selectFieldOptionsDidChange(params.arg_form, params.arg_field_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnFormField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusOnFormField');
          const result = this.impl.focusOnFormField(params.arg_form, params.arg_field_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_FocusOnNonFormField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusOnNonFormField');
          const result = this.impl.focusOnNonFormField();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_AskForValuesToFill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.askForValuesToFill');
          const result = this.impl.askForValuesToFill(params.arg_form, params.arg_field_id, params.arg_caret_bounds, params.arg_trigger_source, params.arg_password_request);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_HidePopup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hidePopup');
          const result = this.impl.hidePopup();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_DidAutofillForm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didAutofillForm');
          const result = this.impl.didAutofillForm(params.arg_form);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_SuppressAutomaticRefills_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suppressAutomaticRefills');
          const result = this.impl.suppressAutomaticRefills(params.arg_fill_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_RequestRefill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestRefill');
          const result = this.impl.requestRefill(params.arg_fill_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.AutofillDriver_JavaScriptChangedAutofilledValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptChangedAutofilledValue');
          const result = this.impl.javaScriptChangedAutofilledValue(params.arg_form, params.arg_field_id, params.arg_old_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.autofill.mojom.AutofillDriverReceiver = mojo.internal.bindings.autofill.mojom.AutofillDriverReceiver;

mojo.internal.bindings.autofill.mojom.AutofillDriverPtr = mojo.internal.bindings.autofill.mojom.AutofillDriverRemote;
mojo.internal.bindings.autofill.mojom.AutofillDriverRequest = mojo.internal.bindings.autofill.mojom.AutofillDriverPendingReceiver;


// Interface: PasswordManagerDriver
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_Params', [
      mojo.internal.StructField('arg_forms_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FormDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_Params', [
      mojo.internal.StructField('arg_visible_forms_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FormDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_Params', [
      mojo.internal.StructField('arg_form_data', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_InformAboutUserInput_Params', [
      mojo.internal.StructField('arg_form_data', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_Params', [
      mojo.internal.StructField('arg_submission_indication_event', 0, 0, mojo.internal.bindings.autofill.mojom.SubmissionIndicatorEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_PasswordFormCleared_Params', [
      mojo.internal.StructField('arg_form_data', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_Params', [
      mojo.internal.StructField('arg_log', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_Params', [
      mojo.internal.StructField('arg_renderer_id', 0, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_autocomplete_attribute_has_username', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_likely_otp', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.autofill.mojom.PasswordSuggestionRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_Params', [
      mojo.internal.StructField('arg_form_action', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_FocusedInputChanged_Params', [
      mojo.internal.StructField('arg_focused_field_id', 0, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_focused_field_type', 8, 0, mojo.internal.bindings.autofill.mojom.FocusedFieldTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec, 'autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_Params', [
      mojo.internal.StructField('arg_form_renderer_id', 0, 0, mojo.internal.bindings.autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.autofill.mojom.PasswordManagerDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.autofill.mojom.PasswordManagerDriverRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.PasswordManagerDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.autofill.mojom.PasswordManagerDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  passwordFormsParsed(arg_forms_data) {
    return this.$.passwordFormsParsed(arg_forms_data);
  }
  passwordFormsRendered(arg_visible_forms_data) {
    return this.$.passwordFormsRendered(arg_visible_forms_data);
  }
  passwordFormSubmitted(arg_form_data) {
    return this.$.passwordFormSubmitted(arg_form_data);
  }
  informAboutUserInput(arg_form_data) {
    return this.$.informAboutUserInput(arg_form_data);
  }
  dynamicFormSubmission(arg_submission_indication_event) {
    return this.$.dynamicFormSubmission(arg_submission_indication_event);
  }
  passwordFormCleared(arg_form_data) {
    return this.$.passwordFormCleared(arg_form_data);
  }
  recordSavePasswordProgress(arg_log) {
    return this.$.recordSavePasswordProgress(arg_log);
  }
  userModifiedPasswordField() {
    return this.$.userModifiedPasswordField();
  }
  userModifiedNonPasswordField(arg_renderer_id, arg_value, arg_autocomplete_attribute_has_username, arg_is_likely_otp) {
    return this.$.userModifiedNonPasswordField(arg_renderer_id, arg_value, arg_autocomplete_attribute_has_username, arg_is_likely_otp);
  }
  showPasswordSuggestions(arg_request) {
    return this.$.showPasswordSuggestions(arg_request);
  }
  checkSafeBrowsingReputation(arg_form_action, arg_frame_url) {
    return this.$.checkSafeBrowsingReputation(arg_form_action, arg_frame_url);
  }
  focusedInputChanged(arg_focused_field_id, arg_focused_field_type) {
    return this.$.focusedInputChanged(arg_focused_field_id, arg_focused_field_type);
  }
  logFirstFillingResult(arg_form_renderer_id, arg_result) {
    return this.$.logFirstFillingResult(arg_form_renderer_id, arg_result);
  }
};

mojo.internal.bindings.autofill.mojom.PasswordManagerDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PasswordManagerDriver', [
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

  passwordFormsParsed(arg_forms_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec,
      null,
      [arg_forms_data],
      false);
  }

  passwordFormsRendered(arg_visible_forms_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec,
      null,
      [arg_visible_forms_data],
      false);
  }

  passwordFormSubmitted(arg_form_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec,
      null,
      [arg_form_data],
      false);
  }

  informAboutUserInput(arg_form_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec,
      null,
      [arg_form_data],
      false);
  }

  dynamicFormSubmission(arg_submission_indication_event) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec,
      null,
      [arg_submission_indication_event],
      false);
  }

  passwordFormCleared(arg_form_data) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec,
      null,
      [arg_form_data],
      false);
  }

  recordSavePasswordProgress(arg_log) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec,
      null,
      [arg_log],
      false);
  }

  userModifiedPasswordField() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec,
      null,
      [],
      false);
  }

  userModifiedNonPasswordField(arg_renderer_id, arg_value, arg_autocomplete_attribute_has_username, arg_is_likely_otp) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec,
      null,
      [arg_renderer_id, arg_value, arg_autocomplete_attribute_has_username, arg_is_likely_otp],
      false);
  }

  showPasswordSuggestions(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec,
      null,
      [arg_request],
      false);
  }

  checkSafeBrowsingReputation(arg_form_action, arg_frame_url) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec,
      null,
      [arg_form_action, arg_frame_url],
      false);
  }

  focusedInputChanged(arg_focused_field_id, arg_focused_field_type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec,
      null,
      [arg_focused_field_id, arg_focused_field_type],
      false);
  }

  logFirstFillingResult(arg_form_renderer_id, arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec,
      null,
      [arg_form_renderer_id, arg_result],
      false);
  }

};

mojo.internal.bindings.autofill.mojom.PasswordManagerDriver.getRemote = function() {
  let remote = new mojo.internal.bindings.autofill.mojom.PasswordManagerDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.PasswordManagerDriver',
    'context');
  return remote.$;
};

mojo.internal.bindings.autofill.mojom.PasswordManagerDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PasswordManagerDriver', [
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PasswordFormsParsed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormsParsed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PasswordFormsRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormsRendered (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PasswordFormSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormSubmitted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: InformAboutUserInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InformAboutUserInput (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DynamicFormSubmission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DynamicFormSubmission (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PasswordFormCleared
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordFormCleared (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RecordSavePasswordProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordSavePasswordProgress (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UserModifiedPasswordField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UserModifiedPasswordField (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UserModifiedNonPasswordField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UserModifiedNonPasswordField (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ShowPasswordSuggestions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPasswordSuggestions (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CheckSafeBrowsingReputation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckSafeBrowsingReputation (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: FocusedInputChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusedInputChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: LogFirstFillingResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogFirstFillingResult (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsParsed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passwordFormsParsed');
          const result = this.impl.passwordFormsParsed(params.arg_forms_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormsRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passwordFormsRendered');
          const result = this.impl.passwordFormsRendered(params.arg_visible_forms_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passwordFormSubmitted');
          const result = this.impl.passwordFormSubmitted(params.arg_form_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_InformAboutUserInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.informAboutUserInput');
          const result = this.impl.informAboutUserInput(params.arg_form_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_DynamicFormSubmission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dynamicFormSubmission');
          const result = this.impl.dynamicFormSubmission(params.arg_submission_indication_event);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_PasswordFormCleared_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passwordFormCleared');
          const result = this.impl.passwordFormCleared(params.arg_form_data);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_RecordSavePasswordProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordSavePasswordProgress');
          const result = this.impl.recordSavePasswordProgress(params.arg_log);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedPasswordField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.userModifiedPasswordField');
          const result = this.impl.userModifiedPasswordField();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_UserModifiedNonPasswordField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.userModifiedNonPasswordField');
          const result = this.impl.userModifiedNonPasswordField(params.arg_renderer_id, params.arg_value, params.arg_autocomplete_attribute_has_username, params.arg_is_likely_otp);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_ShowPasswordSuggestions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPasswordSuggestions');
          const result = this.impl.showPasswordSuggestions(params.arg_request);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_CheckSafeBrowsingReputation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkSafeBrowsingReputation');
          const result = this.impl.checkSafeBrowsingReputation(params.arg_form_action, params.arg_frame_url);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_FocusedInputChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusedInputChanged');
          const result = this.impl.focusedInputChanged(params.arg_focused_field_id, params.arg_focused_field_type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordManagerDriver_LogFirstFillingResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logFirstFillingResult');
          const result = this.impl.logFirstFillingResult(params.arg_form_renderer_id, params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.autofill.mojom.PasswordManagerDriverReceiver = mojo.internal.bindings.autofill.mojom.PasswordManagerDriverReceiver;

mojo.internal.bindings.autofill.mojom.PasswordManagerDriverPtr = mojo.internal.bindings.autofill.mojom.PasswordManagerDriverRemote;
mojo.internal.bindings.autofill.mojom.PasswordManagerDriverRequest = mojo.internal.bindings.autofill.mojom.PasswordManagerDriverPendingReceiver;


// Interface: PasswordGenerationDriver
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_Params', [
      mojo.internal.StructField('arg_password_generation_ui_data', 0, 0, mojo.internal.bindings.autofill.mojom.PasswordGenerationUIDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_Params', [
      mojo.internal.StructField('arg_form_data', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_password_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_Params', [
      mojo.internal.StructField('arg_form_data', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_Params', [
      mojo.internal.StructField('arg_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_form_data', 8, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_renderer_id', 16, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_password_value', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec, 'autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.PasswordGenerationDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  automaticGenerationAvailable(arg_password_generation_ui_data) {
    return this.$.automaticGenerationAvailable(arg_password_generation_ui_data);
  }
  presaveGeneratedPassword(arg_form_data, arg_password_value) {
    return this.$.presaveGeneratedPassword(arg_form_data, arg_password_value);
  }
  passwordNoLongerGenerated(arg_form_data) {
    return this.$.passwordNoLongerGenerated(arg_form_data);
  }
  showPasswordEditingPopup(arg_bounds, arg_form_data, arg_field_renderer_id, arg_password_value) {
    return this.$.showPasswordEditingPopup(arg_bounds, arg_form_data, arg_field_renderer_id, arg_password_value);
  }
  passwordGenerationRejectedByTyping() {
    return this.$.passwordGenerationRejectedByTyping();
  }
  frameWasScrolled() {
    return this.$.frameWasScrolled();
  }
  generationElementLostFocus() {
    return this.$.generationElementLostFocus();
  }
};

mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PasswordGenerationDriver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  automaticGenerationAvailable(arg_password_generation_ui_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec,
      null,
      [arg_password_generation_ui_data],
      false);
  }

  presaveGeneratedPassword(arg_form_data, arg_password_value) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec,
      null,
      [arg_form_data, arg_password_value],
      false);
  }

  passwordNoLongerGenerated(arg_form_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec,
      null,
      [arg_form_data],
      false);
  }

  showPasswordEditingPopup(arg_bounds, arg_form_data, arg_field_renderer_id, arg_password_value) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec,
      null,
      [arg_bounds, arg_form_data, arg_field_renderer_id, arg_password_value],
      false);
  }

  passwordGenerationRejectedByTyping() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec,
      null,
      [],
      false);
  }

  frameWasScrolled() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec,
      null,
      [],
      false);
  }

  generationElementLostFocus() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver.getRemote = function() {
  let remote = new mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.PasswordGenerationDriver',
    'context');
  return remote.$;
};

mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PasswordGenerationDriver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AutomaticGenerationAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutomaticGenerationAvailable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PresaveGeneratedPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PresaveGeneratedPassword (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PasswordNoLongerGenerated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordNoLongerGenerated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowPasswordEditingPopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPasswordEditingPopup (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: PasswordGenerationRejectedByTyping
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasswordGenerationRejectedByTyping (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FrameWasScrolled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FrameWasScrolled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GenerationElementLostFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerationElementLostFocus (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_AutomaticGenerationAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.automaticGenerationAvailable');
          const result = this.impl.automaticGenerationAvailable(params.arg_password_generation_ui_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PresaveGeneratedPassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.presaveGeneratedPassword');
          const result = this.impl.presaveGeneratedPassword(params.arg_form_data, params.arg_password_value);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordNoLongerGenerated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passwordNoLongerGenerated');
          const result = this.impl.passwordNoLongerGenerated(params.arg_form_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_ShowPasswordEditingPopup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPasswordEditingPopup');
          const result = this.impl.showPasswordEditingPopup(params.arg_bounds, params.arg_form_data, params.arg_field_renderer_id, params.arg_password_value);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_PasswordGenerationRejectedByTyping_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passwordGenerationRejectedByTyping');
          const result = this.impl.passwordGenerationRejectedByTyping();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_FrameWasScrolled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.frameWasScrolled');
          const result = this.impl.frameWasScrolled();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.autofill.mojom.PasswordGenerationDriver_GenerationElementLostFocus_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverReceiver = mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverReceiver;

mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverPtr = mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverRemote;
mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverRequest = mojo.internal.bindings.autofill.mojom.PasswordGenerationDriverPendingReceiver;

