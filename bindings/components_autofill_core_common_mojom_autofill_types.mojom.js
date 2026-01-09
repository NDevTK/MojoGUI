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

// Struct: FrameToken
autofill.mojom.FrameTokenSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FrameToken',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_local', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'predecessor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AutocompleteParsingResult
autofill.mojom.AutocompleteParsingResultSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutocompleteParsingResult',
      packedSize: 40,
      fields: [
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'webauthn', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'webidentity', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kNotCheckable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'renderer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'host_form_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_autofilled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_override', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FormData
autofill.mojom.FormDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.FormData',
      packedSize: 96,
      fields: [
        { name: 'id_attribute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'name_attribute', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'button_titles', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'action', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'renderer_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'child_frames', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'submission_event', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'fields', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'username_predictions', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_action_empty', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_gaia_with_skip_save_password_form', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'likely_contains_captcha', packedOffset: 80, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'host_form_signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'heuristic_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pwm_ml_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'server_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'html_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'overall_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'attribute_types', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'format_string', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'parseable_name', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'parseable_label', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'section', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'rank', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'rank_in_signature_group', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'rank_in_host_form', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'rank_in_host_form_signature_group', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alternative_signature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'structural_form_signature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'fields', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'username_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'realm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'uses_account_store', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_grouped_affiliation', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'form_renderer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'username_element_renderer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_element_renderer_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'preferred_login', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'additional_logins', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'suggestion_banned_fields', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'wait_for_username', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'notify_browser_of_successful_filling', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'new_password_renderer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'confirmation_password_renderer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasswordGenerationUIData
autofill.mojom.PasswordGenerationUIDataSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationUIData',
      packedSize: 64,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'generation_element', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'generation_element_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_direction', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'form_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_length', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_generation_element_password_type', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'generation_rejected', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TriggeringField
autofill.mojom.TriggeringFieldSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TriggeringField',
      packedSize: 56,
      fields: [
        { name: 'element_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'trigger_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_direction', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'typed_username', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bounds', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'show_webauthn_credentials', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'show_identity_credentials', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'field', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'form_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'username_field_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'password_field_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'username_renderer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_renderer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_password_renderer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'confirm_password_renderer_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
