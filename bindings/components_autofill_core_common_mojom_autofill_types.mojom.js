// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/common/mojom/autofill_types.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};


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
  kTextArea: 12,
  kInputDate: 13,
};
autofill.mojom.FormControlTypeSpec = { $: mojo.internal.Enum() };

// Enum: HtmlFieldMode
autofill.mojom.HtmlFieldMode = {
  kNone: 0,
  kBilling: 1,
  kShipping: 2,
};
autofill.mojom.HtmlFieldModeSpec = { $: mojo.internal.Enum() };

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
  kCreditCardNameFull: 17,
  kCreditCardNameFirst: 18,
  kCreditCardNameLast: 19,
  kCreditCardNumber: 20,
  kCreditCardExp: 21,
  kCreditCardExpMonth: 22,
  kCreditCardExpYear: 23,
  kCreditCardVerificationCode: 24,
  kCreditCardType: 25,
  kTel: 26,
  kTelCountryCode: 27,
  kTelNational: 28,
  kTelAreaCode: 29,
  kTelLocal: 30,
  kTelLocalPrefix: 31,
  kTelLocalSuffix: 32,
  kTelExtension: 33,
  kEmail: 34,
  kBirthdateDay: 35,
  kBirthdateMonth: 36,
  kBirthdateYear: 37,
  kTransactionAmount: 38,
  kTransactionCurrency: 39,
  kAdditionalNameInitial: 40,
  kCreditCardExpDate2DigitYear: 41,
  kCreditCardExpDate4DigitYear: 42,
  kCreditCardExp2DigitYear: 43,
  kCreditCardExp4DigitYear: 44,
  kOneTimeCode: 45,
  kMerchantPromoCode: 46,
  kIban: 47,
  kUnrecognized: 48,
};
autofill.mojom.HtmlFieldTypeSpec = { $: mojo.internal.Enum() };

// Enum: SubmissionIndicatorEvent
autofill.mojom.SubmissionIndicatorEvent = {
  NONE: 0,
  HTML_FORM_SUBMISSION: 1,
  SAME_DOCUMENT_NAVIGATION: 2,
  XHR_SUCCEEDED: 3,
  FRAME_DETACHED: 4,
  PROBABLE_FORM_SUBMISSION: 5,
  CHANGE_PASSWORD_FORM_CLEARED: 6,
  DOM_MUTATION_AFTER_AUTOFILL: 7,
};
autofill.mojom.SubmissionIndicatorEventSpec = { $: mojo.internal.Enum() };

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
autofill.mojom.SubmissionSourceSpec = { $: mojo.internal.Enum() };

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
autofill.mojom.FocusedFieldTypeSpec = { $: mojo.internal.Enum() };

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
autofill.mojom.ButtonTitleTypeSpec = { $: mojo.internal.Enum() };

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
autofill.mojom.SubmissionReadinessStateSpec = { $: mojo.internal.Enum() };

// Enum: CheckStatus
autofill.mojom.CheckStatus = {
  kNotCheckable: 0,
  kCheckableButUnchecked: 1,
  kChecked: 2,
};
autofill.mojom.CheckStatusSpec = { $: mojo.internal.Enum() };

// Enum: RoleAttribute
autofill.mojom.RoleAttribute = {
  kPresentation: 0,
  kOther: 1,
};
autofill.mojom.RoleAttributeSpec = { $: mojo.internal.Enum() };

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
autofill.mojom.LabelSourceSpec = { $: mojo.internal.Enum() };

// Enum: AutofillSuggestionAvailability
autofill.mojom.AutofillSuggestionAvailability = {
  kNoSuggestions: 0,
  kAutofillAvailable: 1,
  kAutocompleteAvailable: 2,
};
autofill.mojom.AutofillSuggestionAvailabilitySpec = { $: mojo.internal.Enum() };

// Enum: ActionPersistence
autofill.mojom.ActionPersistence = {
  kFill: 0,
  kPreview: 1,
};
autofill.mojom.ActionPersistenceSpec = { $: mojo.internal.Enum() };

// Enum: FormActionType
autofill.mojom.FormActionType = {
  kFill: 0,
  kUndo: 1,
};
autofill.mojom.FormActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: FieldActionType
autofill.mojom.FieldActionType = {
  kReplaceAll: 0,
  kReplaceSelection: 1,
  kSelectAll: 2,
};
autofill.mojom.FieldActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: AutofillSuggestionTriggerSource
autofill.mojom.AutofillSuggestionTriggerSource = {
  kUnspecified: 0,
  kFormControlElementClicked: 1,
  kTextareaFocusedWithoutClick: 2,
  kContentEditableClicked: 3,
  kTextFieldValueChanged: 4,
  kTextFieldDidReceiveKeyDown: 5,
  kOpenTextDataListChooser: 6,
  kPasswordManager: 7,
  kiOS: 8,
  kManualFallbackPasswords: 9,
  kManualFallbackPlusAddresses: 10,
  kComposeDialogLostFocus: 11,
  kComposeDelayedProactiveNudge: 12,
  kPasswordManagerProcessedFocusedField: 13,
  kPlusAddressUpdatedInBrowserProcess: 14,
  kProactivePasswordRecovery: 15,
};
autofill.mojom.AutofillSuggestionTriggerSourceSpec = { $: mojo.internal.Enum() };

// Struct: FrameToken
autofill.mojom.FrameTokenSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FrameToken',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'is_local', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FrameTokenWithPredecessor
autofill.mojom.FrameTokenWithPredecessorSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FrameTokenWithPredecessor',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'predecessor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FormRendererId
autofill.mojom.FormRendererIdSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FormRendererId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FieldRendererId
autofill.mojom.FieldRendererIdSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FieldRendererId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FillId
autofill.mojom.FillIdSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FillId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SelectOption
autofill.mojom.SelectOptionSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.SelectOption',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AutocompleteParsingResult
autofill.mojom.AutocompleteParsingResultSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutocompleteParsingResult',
      packedSize: 32,
      fields: [
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: autofill.mojom.HtmlFieldModeSpec, nullable: false, minVersion: 0 },
        { name: 'field_type', packedOffset: 12, packedBitOffset: 0, type: autofill.mojom.HtmlFieldTypeSpec, nullable: false, minVersion: 0 },
        { name: 'webauthn', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webidentity', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FormFieldData
autofill.mojom.FormFieldDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FormFieldData',
      packedSize: 16,
      fields: [
        { name: 'kNotCheckable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FormFieldData_FillData
autofill.mojom.FormFieldData_FillDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FormFieldData_FillData',
      packedSize: 40,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'renderer_id', packedOffset: 8, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'host_form_id', packedOffset: 16, packedBitOffset: 0, type: autofill.mojom.FormRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'is_autofilled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_override', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ButtonTitleInfo
autofill.mojom.ButtonTitleInfoSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.ButtonTitleInfo',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: autofill.mojom.ButtonTitleTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FormData
autofill.mojom.FormDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FormData',
      packedSize: 88,
      fields: [
        { name: 'id_attribute', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'name_attribute', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'button_titles', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(autofill.mojom.ButtonTitleInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'is_action_empty', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'renderer_id', packedOffset: 48, packedBitOffset: 0, type: autofill.mojom.FormRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'child_frames', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(autofill.mojom.FrameTokenWithPredecessorSpec, false), nullable: false, minVersion: 0 },
        { name: 'submission_event', packedOffset: 44, packedBitOffset: 0, type: autofill.mojom.SubmissionIndicatorEventSpec, nullable: false, minVersion: 0 },
        { name: 'fields', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(autofill.mojom.FormFieldDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'username_predictions', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(autofill.mojom.FieldRendererIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_gaia_with_skip_save_password_form', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'likely_contains_captcha', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: FormFieldDataPredictions
autofill.mojom.FormFieldDataPredictionsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FormFieldDataPredictions',
      packedSize: 120,
      fields: [
        { name: 'host_form_signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'heuristic_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pwm_ml_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'server_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'html_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'overall_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'attribute_types', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'format_string', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parseable_name', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parseable_label', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'section', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'rank', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rank_in_signature_group', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rank_in_host_form', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rank_in_host_form_signature_group', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 120}]
    }
  }
};

// Struct: FormDataPredictions
autofill.mojom.FormDataPredictionsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FormDataPredictions',
      packedSize: 48,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormDataSpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'alternative_signature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'structural_form_signature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fields', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(autofill.mojom.FormFieldDataPredictionsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PasswordAndMetadata
autofill.mojom.PasswordAndMetadataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAndMetadata',
      packedSize: 40,
      fields: [
        { name: 'username_value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'password_value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'realm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uses_account_store', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_grouped_affiliation', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PasswordFormFillData
autofill.mojom.PasswordFormFillDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordFormFillData',
      packedSize: 72,
      fields: [
        { name: 'form_renderer_id', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'username_element_renderer_id', packedOffset: 16, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'password_element_renderer_id', packedOffset: 24, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'preferred_login', packedOffset: 32, packedBitOffset: 0, type: autofill.mojom.PasswordAndMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'additional_logins', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(autofill.mojom.PasswordAndMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'wait_for_username', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'suggestion_banned_fields', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(autofill.mojom.FieldRendererIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'notify_browser_of_successful_filling', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: PasswordFormGenerationData
autofill.mojom.PasswordFormGenerationDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordFormGenerationData',
      packedSize: 24,
      fields: [
        { name: 'new_password_renderer_id', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'confirmation_password_renderer_id', packedOffset: 8, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PasswordGenerationUIData
autofill.mojom.PasswordGenerationUIDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationUIData',
      packedSize: 56,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'max_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'generation_element', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'generation_element_id', packedOffset: 24, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'is_generation_element_password_type', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_direction', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'form_data', packedOffset: 40, packedBitOffset: 0, type: autofill.mojom.FormDataSpec, nullable: false, minVersion: 0 },
        { name: 'generation_rejected', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TriggeringField
autofill.mojom.TriggeringFieldSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TriggeringField',
      packedSize: 48,
      fields: [
        { name: 'element_id', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'trigger_source', packedOffset: 8, packedBitOffset: 0, type: autofill.mojom.AutofillSuggestionTriggerSourceSpec, nullable: false, minVersion: 0 },
        { name: 'text_direction', packedOffset: 12, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'typed_username', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'show_webauthn_credentials', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_identity_credentials', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PasswordSuggestionRequest
autofill.mojom.PasswordSuggestionRequestSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordSuggestionRequest',
      packedSize: 40,
      fields: [
        { name: 'field', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.TriggeringFieldSpec, nullable: false, minVersion: 0 },
        { name: 'form_data', packedOffset: 8, packedBitOffset: 0, type: autofill.mojom.FormDataSpec, nullable: false, minVersion: 0 },
        { name: 'username_field_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'password_field_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ParsingResult
autofill.mojom.ParsingResultSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.ParsingResult',
      packedSize: 40,
      fields: [
        { name: 'username_renderer_id', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'password_renderer_id', packedOffset: 8, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'new_password_renderer_id', packedOffset: 16, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
        { name: 'confirm_password_renderer_id', packedOffset: 24, packedBitOffset: 0, type: autofill.mojom.FieldRendererIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
