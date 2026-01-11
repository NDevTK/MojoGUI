// Auto-generated MojoJS binding
 // Source: chromium_src/components/autofill/core/common/mojom/autofill_types.mojom
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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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

mojo.internal.bindings.autofill.mojom.FormControlTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.HtmlFieldModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.HtmlFieldTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.SubmissionIndicatorEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.SubmissionSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.FocusedFieldTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.ButtonTitleTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.SubmissionReadinessStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.CheckStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.RoleAttributeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.LabelSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.AutofillSuggestionAvailabilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.ActionPersistenceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.FormActionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.FieldActionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.AutofillSuggestionTriggerSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.autofill.mojom.FrameTokenSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FrameTokenWithPredecessorSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FormRendererIdSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FillIdSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.SelectOptionSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.AutocompleteParsingResultSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FormFieldDataSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FormFieldData_FillDataSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.ButtonTitleInfoSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FormDataSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FormFieldDataPredictionsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.FormDataPredictionsSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordAndMetadataSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordFormFillDataSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordFormGenerationDataSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordGenerationUIDataSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.TriggeringFieldSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.PasswordSuggestionRequestSpec = { $: {} };
mojo.internal.bindings.autofill.mojom.ParsingResultSpec = { $: {} };

// Enum: FormControlType
mojo.internal.bindings.autofill.mojom.FormControlType = {
  kContentEditable: 0,
  kInputCheckbox: 1,
  kInputEmail: 2,
  kInputMonth: 3,
  kInputNumber: 4,
  kInputPassword: 5,
  kInputRadio: 6,
  kInputSearch: 7,
  kInputTelephone: 8,
  kInputText: 9,
  kInputUrl: 10,
  kSelectOne: 11,
  kTextArea: 14,
  kInputDate: 15,
};

// Enum: HtmlFieldMode
mojo.internal.bindings.autofill.mojom.HtmlFieldMode = {
  kNone: 0,
  kBilling: 1,
  kShipping: 2,
};

// Enum: HtmlFieldType
mojo.internal.bindings.autofill.mojom.HtmlFieldType = {
  kUnspecified: 0,
  kName: 1,
  kHonorificPrefix: 2,
  kGivenName: 3,
  kAdditionalName: 4,
  kFamilyName: 5,
  kOrganization: 6,
  kStreetAddress: 7,
  kAddressLine1: 8,
  kAddressLine2: 9,
  kAddressLine3: 10,
  kAddressLevel1: 11,
  kAddressLevel2: 12,
  kAddressLevel3: 13,
  kCountryCode: 14,
  kCountryName: 15,
  kPostalCode: 16,
  kCreditCardNameFull: 18,
  kCreditCardNameFirst: 19,
  kCreditCardNameLast: 20,
  kCreditCardNumber: 21,
  kCreditCardExp: 22,
  kCreditCardExpMonth: 23,
  kCreditCardExpYear: 24,
  kCreditCardVerificationCode: 25,
  kCreditCardType: 26,
  kTel: 27,
  kTelCountryCode: 28,
  kTelNational: 29,
  kTelAreaCode: 30,
  kTelLocal: 31,
  kTelLocalPrefix: 32,
  kTelLocalSuffix: 33,
  kTelExtension: 34,
  kEmail: 35,
  kBirthdateDay: 36,
  kBirthdateMonth: 37,
  kBirthdateYear: 38,
  kTransactionAmount: 39,
  kTransactionCurrency: 40,
  kAdditionalNameInitial: 41,
  kCreditCardExpDate2DigitYear: 42,
  kCreditCardExpDate4DigitYear: 43,
  kCreditCardExp2DigitYear: 44,
  kCreditCardExp4DigitYear: 45,
  kOneTimeCode: 47,
  kMerchantPromoCode: 48,
  kIban: 49,
  kUnrecognized: 50,
};

// Enum: SubmissionIndicatorEvent
mojo.internal.bindings.autofill.mojom.SubmissionIndicatorEvent = {
  NONE: 0,
  HTML_FORM_SUBMISSION: 1,
  SAME_DOCUMENT_NAVIGATION: 2,
  XHR_SUCCEEDED: 3,
  FRAME_DETACHED: 4,
  PROBABLE_FORM_SUBMISSION: 10,
  CHANGE_PASSWORD_FORM_CLEARED: 11,
  DOM_MUTATION_AFTER_AUTOFILL: 12,
};

// Enum: SubmissionSource
mojo.internal.bindings.autofill.mojom.SubmissionSource = {
  NONE: 0,
  SAME_DOCUMENT_NAVIGATION: 1,
  XHR_SUCCEEDED: 2,
  FRAME_DETACHED: 3,
  PROBABLY_FORM_SUBMITTED: 4,
  FORM_SUBMISSION: 5,
  DOM_MUTATION_AFTER_AUTOFILL: 6,
};

// Enum: FocusedFieldType
mojo.internal.bindings.autofill.mojom.FocusedFieldType = {
  kUnknown: 0,
  kUnfillableElement: 1,
  kFillableTextArea: 2,
  kFillableSearchField: 3,
  kFillableNonSearchField: 4,
  kFillableWebauthnTaggedField: 5,
  kFillableUsernameField: 6,
  kFillablePasswordField: 7,
};

// Enum: ButtonTitleType
mojo.internal.bindings.autofill.mojom.ButtonTitleType = {
  NONE: 0,
  BUTTON_ELEMENT_SUBMIT_TYPE: 1,
  BUTTON_ELEMENT_BUTTON_TYPE: 2,
  INPUT_ELEMENT_SUBMIT_TYPE: 3,
  INPUT_ELEMENT_BUTTON_TYPE: 4,
  HYPERLINK: 5,
  DIV: 6,
  SPAN: 7,
};

// Enum: SubmissionReadinessState
mojo.internal.bindings.autofill.mojom.SubmissionReadinessState = {
  kNoInformation: 0,
  kError: 1,
  kNoUsernameField: 2,
  kFieldBetweenUsernameAndPassword: 3,
  kFieldAfterPasswordField: 4,
  kEmptyFields: 5,
  kMoreThanTwoFields: 6,
  kTwoFields: 7,
  kNoPasswordField: 8,
  kLikelyHasCaptcha: 9,
};

// Enum: CheckStatus
mojo.internal.bindings.autofill.mojom.CheckStatus = {
  kNotCheckable: 0,
  kCheckableButUnchecked: 1,
  kChecked: 2,
};

// Enum: RoleAttribute
mojo.internal.bindings.autofill.mojom.RoleAttribute = {
  kPresentation: 0,
  kOther: 1,
};

// Enum: LabelSource
mojo.internal.bindings.autofill.mojom.LabelSource = {
  kUnknown: 0,
  kLabelTag: 1,
  kPTag: 2,
  kDivTable: 3,
  kTdTag: 4,
  kDdTag: 5,
  kLiTag: 6,
  kPlaceHolder: 7,
  kAriaLabel: 8,
  kCombined: 9,
  kValue: 10,
  kForId: 11,
  kForName: 12,
  kForShadowHostId: 13,
  kForShadowHostName: 14,
  kOverlayingLabel: 15,
};

// Enum: AutofillSuggestionAvailability
mojo.internal.bindings.autofill.mojom.AutofillSuggestionAvailability = {
  kNoSuggestions: 0,
  kAutofillAvailable: 1,
  kAutocompleteAvailable: 2,
};

// Enum: ActionPersistence
mojo.internal.bindings.autofill.mojom.ActionPersistence = {
  kFill: 0,
  kPreview: 1,
};

// Enum: FormActionType
mojo.internal.bindings.autofill.mojom.FormActionType = {
  kFill: 0,
  kUndo: 1,
};

// Enum: FieldActionType
mojo.internal.bindings.autofill.mojom.FieldActionType = {
  kReplaceAll: 0,
  kReplaceSelection: 1,
  kSelectAll: 2,
};

// Enum: AutofillSuggestionTriggerSource
mojo.internal.bindings.autofill.mojom.AutofillSuggestionTriggerSource = {
  kUnspecified: 0,
  kFormControlElementClicked: 1,
  kTextareaFocusedWithoutClick: 2,
  kContentEditableClicked: 3,
  kTextFieldValueChanged: 4,
  kTextFieldDidReceiveKeyDown: 5,
  kOpenTextDataListChooser: 6,
  kPasswordManager: 8,
  kiOS: 9,
  kManualFallbackPasswords: 12,
  kManualFallbackPlusAddresses: 13,
  kComposeDialogLostFocus: 15,
  kComposeDelayedProactiveNudge: 16,
  kPasswordManagerProcessedFocusedField: 17,
  kPlusAddressUpdatedInBrowserProcess: 19,
  kProactivePasswordRecovery: 20,
};

// Struct: FrameToken
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FrameTokenSpec, 'autofill.mojom.FrameToken', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_local', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FrameTokenWithPredecessor
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FrameTokenWithPredecessorSpec, 'autofill.mojom.FrameTokenWithPredecessor', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.autofill.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_predecessor', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FormRendererId
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FormRendererIdSpec, 'autofill.mojom.FormRendererId', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FieldRendererId
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec, 'autofill.mojom.FieldRendererId', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FillId
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FillIdSpec, 'autofill.mojom.FillId', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SelectOption
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.SelectOptionSpec, 'autofill.mojom.SelectOption', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AutocompleteParsingResult
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.AutocompleteParsingResultSpec, 'autofill.mojom.AutocompleteParsingResult', [
      mojo.internal.StructField('arg_section', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 8, 0, mojo.internal.bindings.autofill.mojom.HtmlFieldModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_type', 16, 0, mojo.internal.bindings.autofill.mojom.HtmlFieldTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_webauthn', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_webidentity', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FormFieldData
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FormFieldDataSpec, 'autofill.mojom.FormFieldData', [
      mojo.internal.StructField('arg_kNotCheckable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FormFieldData_FillData
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FormFieldData_FillDataSpec, 'autofill.mojom.FormFieldData_FillData', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_renderer_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_form_id', 16, 0, mojo.internal.bindings.autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_autofilled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_override', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ButtonTitleInfo
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.ButtonTitleInfoSpec, 'autofill.mojom.ButtonTitleInfo', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.autofill.mojom.ButtonTitleTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FormData
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FormDataSpec, 'autofill.mojom.FormData', [
      mojo.internal.StructField('arg_id_attribute', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name_attribute', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_button_titles', 24, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.ButtonTitleInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_action', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_renderer_id', 40, 0, mojo.internal.bindings.autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_child_frames', 48, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FrameTokenWithPredecessorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_submission_event', 56, 0, mojo.internal.bindings.autofill.mojom.SubmissionIndicatorEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fields', 64, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FormFieldDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_username_predictions', 72, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_action_empty', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_gaia_with_skip_save_password_form', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_likely_contains_captcha', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: FormFieldDataPredictions
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FormFieldDataPredictionsSpec, 'autofill.mojom.FormFieldDataPredictions', [
      mojo.internal.StructField('arg_host_form_signature', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_heuristic_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pwm_ml_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_server_type', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_html_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_overall_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribute_types', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_format_string', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parseable_name', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parseable_label', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_section', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_rank', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rank_in_signature_group', 100, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rank_in_host_form', 104, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rank_in_host_form_signature_group', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: FormDataPredictions
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.FormDataPredictionsSpec, 'autofill.mojom.FormDataPredictions', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alternative_signature', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_structural_form_signature', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_fields', 32, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FormFieldDataPredictionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PasswordAndMetadata
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordAndMetadataSpec, 'autofill.mojom.PasswordAndMetadata', [
      mojo.internal.StructField('arg_username_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_password_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uses_account_store', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_grouped_affiliation', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PasswordFormFillData
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordFormFillDataSpec, 'autofill.mojom.PasswordFormFillData', [
      mojo.internal.StructField('arg_form_renderer_id', 0, 0, mojo.internal.bindings.autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_username_element_renderer_id', 16, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_password_element_renderer_id', 24, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_preferred_login', 32, 0, mojo.internal.bindings.autofill.mojom.PasswordAndMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_additional_logins', 40, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.PasswordAndMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_suggestion_banned_fields', 48, 0, mojo.internal.Array(mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_username', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_notify_browser_of_successful_filling', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: PasswordFormGenerationData
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordFormGenerationDataSpec, 'autofill.mojom.PasswordFormGenerationData', [
      mojo.internal.StructField('arg_new_password_renderer_id', 0, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_confirmation_password_renderer_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PasswordGenerationUIData
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordGenerationUIDataSpec, 'autofill.mojom.PasswordGenerationUIData', [
      mojo.internal.StructField('arg_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_generation_element', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_generation_element_id', 16, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_direction', 24, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_form_data', 32, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_length', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_generation_element_password_type', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_generation_rejected', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TriggeringField
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.TriggeringFieldSpec, 'autofill.mojom.TriggeringField', [
      mojo.internal.StructField('arg_element_id', 0, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_source', 8, 0, mojo.internal.bindings.autofill.mojom.AutofillSuggestionTriggerSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_direction', 16, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_typed_username', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 32, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_show_webauthn_credentials', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_show_identity_credentials', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PasswordSuggestionRequest
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.PasswordSuggestionRequestSpec, 'autofill.mojom.PasswordSuggestionRequest', [
      mojo.internal.StructField('arg_field', 0, 0, mojo.internal.bindings.autofill.mojom.TriggeringFieldSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_form_data', 8, 0, mojo.internal.bindings.autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_username_field_index', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_password_field_index', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ParsingResult
mojo.internal.Struct(
    mojo.internal.bindings.autofill.mojom.ParsingResultSpec, 'autofill.mojom.ParsingResult', [
      mojo.internal.StructField('arg_username_renderer_id', 0, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_password_renderer_id', 8, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_password_renderer_id', 16, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_confirm_password_renderer_id', 24, 0, mojo.internal.bindings.autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
