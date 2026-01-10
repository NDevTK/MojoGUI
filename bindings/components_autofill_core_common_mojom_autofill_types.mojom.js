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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

autofill.mojom.FormControlTypeSpec = { $: mojo.internal.Enum() };
autofill.mojom.HtmlFieldModeSpec = { $: mojo.internal.Enum() };
autofill.mojom.HtmlFieldTypeSpec = { $: mojo.internal.Enum() };
autofill.mojom.SubmissionIndicatorEventSpec = { $: mojo.internal.Enum() };
autofill.mojom.SubmissionSourceSpec = { $: mojo.internal.Enum() };
autofill.mojom.FocusedFieldTypeSpec = { $: mojo.internal.Enum() };
autofill.mojom.ButtonTitleTypeSpec = { $: mojo.internal.Enum() };
autofill.mojom.SubmissionReadinessStateSpec = { $: mojo.internal.Enum() };
autofill.mojom.CheckStatusSpec = { $: mojo.internal.Enum() };
autofill.mojom.RoleAttributeSpec = { $: mojo.internal.Enum() };
autofill.mojom.LabelSourceSpec = { $: mojo.internal.Enum() };
autofill.mojom.AutofillSuggestionAvailabilitySpec = { $: mojo.internal.Enum() };
autofill.mojom.ActionPersistenceSpec = { $: mojo.internal.Enum() };
autofill.mojom.FormActionTypeSpec = { $: mojo.internal.Enum() };
autofill.mojom.FieldActionTypeSpec = { $: mojo.internal.Enum() };
autofill.mojom.AutofillSuggestionTriggerSourceSpec = { $: mojo.internal.Enum() };
autofill.mojom.FrameTokenSpec = { $: {} };
autofill.mojom.FrameTokenWithPredecessorSpec = { $: {} };
autofill.mojom.FormRendererIdSpec = { $: {} };
autofill.mojom.FieldRendererIdSpec = { $: {} };
autofill.mojom.FillIdSpec = { $: {} };
autofill.mojom.SelectOptionSpec = { $: {} };
autofill.mojom.AutocompleteParsingResultSpec = { $: {} };
autofill.mojom.FormFieldDataSpec = { $: {} };
autofill.mojom.FormFieldData_FillDataSpec = { $: {} };
autofill.mojom.ButtonTitleInfoSpec = { $: {} };
autofill.mojom.FormDataSpec = { $: {} };
autofill.mojom.FormFieldDataPredictionsSpec = { $: {} };
autofill.mojom.FormDataPredictionsSpec = { $: {} };
autofill.mojom.PasswordAndMetadataSpec = { $: {} };
autofill.mojom.PasswordFormFillDataSpec = { $: {} };
autofill.mojom.PasswordFormGenerationDataSpec = { $: {} };
autofill.mojom.PasswordGenerationUIDataSpec = { $: {} };
autofill.mojom.TriggeringFieldSpec = { $: {} };
autofill.mojom.PasswordSuggestionRequestSpec = { $: {} };
autofill.mojom.ParsingResultSpec = { $: {} };

// Enum: FormControlType
autofill.mojom.FormControlType = {
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
autofill.mojom.HtmlFieldMode = {
  kNone: 0,
  kBilling: 1,
  kShipping: 2,
};

// Enum: HtmlFieldType
autofill.mojom.HtmlFieldType = {
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
autofill.mojom.SubmissionIndicatorEvent = {
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
autofill.mojom.SubmissionSource = {
  NONE: 0,
  SAME_DOCUMENT_NAVIGATION: 1,
  XHR_SUCCEEDED: 2,
  FRAME_DETACHED: 3,
  PROBABLY_FORM_SUBMITTED: 4,
  FORM_SUBMISSION: 5,
  DOM_MUTATION_AFTER_AUTOFILL: 6,
};

// Enum: FocusedFieldType
autofill.mojom.FocusedFieldType = {
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
autofill.mojom.ButtonTitleType = {
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
autofill.mojom.SubmissionReadinessState = {
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
autofill.mojom.CheckStatus = {
  kNotCheckable: 0,
  kCheckableButUnchecked: 1,
  kChecked: 2,
};

// Enum: RoleAttribute
autofill.mojom.RoleAttribute = {
  kPresentation: 0,
  kOther: 1,
};

// Enum: LabelSource
autofill.mojom.LabelSource = {
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
autofill.mojom.AutofillSuggestionAvailability = {
  kNoSuggestions: 0,
  kAutofillAvailable: 1,
  kAutocompleteAvailable: 2,
};

// Enum: ActionPersistence
autofill.mojom.ActionPersistence = {
  kFill: 0,
  kPreview: 1,
};

// Enum: FormActionType
autofill.mojom.FormActionType = {
  kFill: 0,
  kUndo: 1,
};

// Enum: FieldActionType
autofill.mojom.FieldActionType = {
  kReplaceAll: 0,
  kReplaceSelection: 1,
  kSelectAll: 2,
};

// Enum: AutofillSuggestionTriggerSource
autofill.mojom.AutofillSuggestionTriggerSource = {
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
    autofill.mojom.FrameTokenSpec, 'autofill.mojom.FrameToken', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_local', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FrameTokenWithPredecessor
mojo.internal.Struct(
    autofill.mojom.FrameTokenWithPredecessorSpec, 'autofill.mojom.FrameTokenWithPredecessor', [
      mojo.internal.StructField('token', 0, 0, autofill.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('predecessor', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FormRendererId
mojo.internal.Struct(
    autofill.mojom.FormRendererIdSpec, 'autofill.mojom.FormRendererId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FieldRendererId
mojo.internal.Struct(
    autofill.mojom.FieldRendererIdSpec, 'autofill.mojom.FieldRendererId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FillId
mojo.internal.Struct(
    autofill.mojom.FillIdSpec, 'autofill.mojom.FillId', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SelectOption
mojo.internal.Struct(
    autofill.mojom.SelectOptionSpec, 'autofill.mojom.SelectOption', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AutocompleteParsingResult
mojo.internal.Struct(
    autofill.mojom.AutocompleteParsingResultSpec, 'autofill.mojom.AutocompleteParsingResult', [
      mojo.internal.StructField('section', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, autofill.mojom.HtmlFieldModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_type', 16, 0, autofill.mojom.HtmlFieldTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('webauthn', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webidentity', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FormFieldData
mojo.internal.Struct(
    autofill.mojom.FormFieldDataSpec, 'autofill.mojom.FormFieldData', [
      mojo.internal.StructField('kNotCheckable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FormFieldData_FillData
mojo.internal.Struct(
    autofill.mojom.FormFieldData_FillDataSpec, 'autofill.mojom.FormFieldData_FillData', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_form_id', 16, 0, autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_autofilled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_override', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ButtonTitleInfo
mojo.internal.Struct(
    autofill.mojom.ButtonTitleInfoSpec, 'autofill.mojom.ButtonTitleInfo', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, autofill.mojom.ButtonTitleTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FormData
mojo.internal.Struct(
    autofill.mojom.FormDataSpec, 'autofill.mojom.FormData', [
      mojo.internal.StructField('id_attribute', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('name_attribute', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('button_titles', 24, 0, mojo.internal.Array(autofill.mojom.ButtonTitleInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('action', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_id', 40, 0, autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_frames', 48, 0, mojo.internal.Array(autofill.mojom.FrameTokenWithPredecessorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('submission_event', 56, 0, autofill.mojom.SubmissionIndicatorEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fields', 64, 0, mojo.internal.Array(autofill.mojom.FormFieldDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('username_predictions', 72, 0, mojo.internal.Array(autofill.mojom.FieldRendererIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_action_empty', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_gaia_with_skip_save_password_form', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('likely_contains_captcha', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: FormFieldDataPredictions
mojo.internal.Struct(
    autofill.mojom.FormFieldDataPredictionsSpec, 'autofill.mojom.FormFieldDataPredictions', [
      mojo.internal.StructField('host_form_signature', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('heuristic_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pwm_ml_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('server_type', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('html_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('overall_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribute_types', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('format_string', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parseable_name', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parseable_label', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('section', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rank', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rank_in_signature_group', 100, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rank_in_host_form', 104, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rank_in_host_form_signature_group', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: FormDataPredictions
mojo.internal.Struct(
    autofill.mojom.FormDataPredictionsSpec, 'autofill.mojom.FormDataPredictions', [
      mojo.internal.StructField('data', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alternative_signature', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('structural_form_signature', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fields', 32, 0, mojo.internal.Array(autofill.mojom.FormFieldDataPredictionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PasswordAndMetadata
mojo.internal.Struct(
    autofill.mojom.PasswordAndMetadataSpec, 'autofill.mojom.PasswordAndMetadata', [
      mojo.internal.StructField('username_value', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uses_account_store', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_grouped_affiliation', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PasswordFormFillData
mojo.internal.Struct(
    autofill.mojom.PasswordFormFillDataSpec, 'autofill.mojom.PasswordFormFillData', [
      mojo.internal.StructField('form_renderer_id', 0, 0, autofill.mojom.FormRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('username_element_renderer_id', 16, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_element_renderer_id', 24, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preferred_login', 32, 0, autofill.mojom.PasswordAndMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('additional_logins', 40, 0, mojo.internal.Array(autofill.mojom.PasswordAndMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('suggestion_banned_fields', 48, 0, mojo.internal.Array(autofill.mojom.FieldRendererIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('wait_for_username', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('notify_browser_of_successful_filling', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: PasswordFormGenerationData
mojo.internal.Struct(
    autofill.mojom.PasswordFormGenerationDataSpec, 'autofill.mojom.PasswordFormGenerationData', [
      mojo.internal.StructField('new_password_renderer_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('confirmation_password_renderer_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PasswordGenerationUIData
mojo.internal.Struct(
    autofill.mojom.PasswordGenerationUIDataSpec, 'autofill.mojom.PasswordGenerationUIData', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('generation_element', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('generation_element_id', 16, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_direction', 24, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('form_data', 32, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_length', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_generation_element_password_type', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('generation_rejected', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TriggeringField
mojo.internal.Struct(
    autofill.mojom.TriggeringFieldSpec, 'autofill.mojom.TriggeringField', [
      mojo.internal.StructField('element_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger_source', 8, 0, autofill.mojom.AutofillSuggestionTriggerSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_direction', 16, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('typed_username', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 32, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('show_webauthn_credentials', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_identity_credentials', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PasswordSuggestionRequest
mojo.internal.Struct(
    autofill.mojom.PasswordSuggestionRequestSpec, 'autofill.mojom.PasswordSuggestionRequest', [
      mojo.internal.StructField('field', 0, 0, autofill.mojom.TriggeringFieldSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('form_data', 8, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('username_field_index', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('password_field_index', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ParsingResult
mojo.internal.Struct(
    autofill.mojom.ParsingResultSpec, 'autofill.mojom.ParsingResult', [
      mojo.internal.StructField('username_renderer_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_renderer_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_password_renderer_id', 16, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('confirm_password_renderer_id', 24, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
