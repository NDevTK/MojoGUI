// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_agent.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};


// Interface: AutofillAgent
autofill.mojom.AutofillAgent = {};

autofill.mojom.AutofillAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill.mojom.AutofillAgentRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.AutofillAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill.mojom.AutofillAgentPendingReceiver,
      handle);
    this.$ = new autofill.mojom.AutofillAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill.mojom.AutofillAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  triggerFormExtraction() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  triggerFormExtractionWithResponse() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec,
      autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec,
      autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  applyFieldsAction(action_type, action_persistence, fields, fill_id, supports_refill) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec,
      null,
      null,
      [action_type, action_persistence, fields, fill_id, supports_refill],
      undefined,
      undefined
    );
  }

  applyFieldAction(action_type, action_persistence, field, value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec,
      null,
      null,
      [action_type, action_persistence, field, value],
      undefined,
      undefined
    );
  }

  extractFormWithField(field_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec,
      autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec,
      autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec,
      [field_id],
      undefined,
      undefined
    );
  }

  extractLabeledTextNodeValue(value_regex, label_regex, number_of_ancestor_levels_to_search) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec,
      autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec,
      autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec,
      [value_regex, label_regex, number_of_ancestor_levels_to_search],
      undefined,
      undefined
    );
  }

  fieldTypePredictionsAvailable(forms) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec,
      null,
      null,
      [forms],
      undefined,
      undefined
    );
  }

  exposeDomNodeIds() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  clearPreviewedForm() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  triggerSuggestions(field, trigger_source) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec,
      null,
      null,
      [field, trigger_source],
      undefined,
      undefined
    );
  }

  setSuggestionAvailability(field, suggestion_availability) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec,
      null,
      null,
      [field, suggestion_availability],
      undefined,
      undefined
    );
  }

  acceptDataListSuggestion(field, value) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec,
      null,
      null,
      [field, value],
      undefined,
      undefined
    );
  }

  previewPasswordSuggestion(username, password) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec,
      null,
      null,
      [username, password],
      undefined,
      undefined
    );
  }

  previewPasswordGenerationSuggestion(password) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec,
      null,
      null,
      [password],
      undefined,
      undefined
    );
  }

  getPotentialLastFourCombinationsForStandaloneCvc() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec,
      autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec,
      autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  dispatchEmailVerifiedEvent(field_id, presentation_token) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec,
      null,
      null,
      [field_id, presentation_token],
      undefined,
      undefined
    );
  }

};

autofill.mojom.AutofillAgent.getRemote = function() {
  let remote = new autofill.mojom.AutofillAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.AutofillAgent',
    'context');
  return remote.$;
};

// ParamsSpec for TriggerFormExtraction
autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.TriggerFormExtraction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TriggerFormExtractionWithResponse
autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.TriggerFormExtractionWithResponse_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.TriggerFormExtractionWithResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApplyFieldsAction
autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ApplyFieldsAction_Params',
      packedSize: 48,
      fields: [
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action_persistence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'fields', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'fill_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'supports_refill', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for ApplyFieldAction
autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ApplyFieldAction_Params',
      packedSize: 40,
      fields: [
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action_persistence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ExtractFormWithField
autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ExtractFormWithField_Params',
      packedSize: 16,
      fields: [
        { name: 'field_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ExtractFormWithField_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExtractLabeledTextNodeValue
autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ExtractLabeledTextNodeValue_Params',
      packedSize: 32,
      fields: [
        { name: 'value_regex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'label_regex', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'number_of_ancestor_levels_to_search', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ExtractLabeledTextNodeValue_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FieldTypePredictionsAvailable
autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.FieldTypePredictionsAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'forms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExposeDomNodeIds
autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ExposeDomNodeIds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ClearPreviewedForm
autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.ClearPreviewedForm_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TriggerSuggestions
autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.TriggerSuggestions_Params',
      packedSize: 24,
      fields: [
        { name: 'field', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'trigger_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetSuggestionAvailability
autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.SetSuggestionAvailability_Params',
      packedSize: 24,
      fields: [
        { name: 'field', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'suggestion_availability', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AcceptDataListSuggestion
autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.AcceptDataListSuggestion_Params',
      packedSize: 24,
      fields: [
        { name: 'field', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PreviewPasswordSuggestion
autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.PreviewPasswordSuggestion_Params',
      packedSize: 24,
      fields: [
        { name: 'username', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PreviewPasswordGenerationSuggestion
autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.PreviewPasswordGenerationSuggestion_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPotentialLastFourCombinationsForStandaloneCvc
autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.GetPotentialLastFourCombinationsForStandaloneCvc_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'potential_matches', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchEmailVerifiedEvent
autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.AutofillAgent.DispatchEmailVerifiedEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'field_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'presentation_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
autofill.mojom.AutofillAgentPtr = autofill.mojom.AutofillAgentRemote;
autofill.mojom.AutofillAgentRequest = autofill.mojom.AutofillAgentPendingReceiver;


// Interface: PasswordAutofillAgent
autofill.mojom.PasswordAutofillAgent = {};

autofill.mojom.PasswordAutofillAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill.mojom.PasswordAutofillAgentRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.PasswordAutofillAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill.mojom.PasswordAutofillAgentPendingReceiver,
      handle);
    this.$ = new autofill.mojom.PasswordAutofillAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill.mojom.PasswordAutofillAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  applyFillDataOnParsingCompletion(form_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec,
      null,
      null,
      [form_data],
      undefined,
      undefined
    );
  }

  fillPasswordSuggestion(username, password) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec,
      [username, password],
      undefined,
      undefined
    );
  }

  fillPasswordSuggestionById(username_element_id, password_element_id, username, password, suggestion_source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec,
      null,
      null,
      [username_element_id, password_element_id, username, password, suggestion_source],
      undefined,
      undefined
    );
  }

  previewPasswordSuggestionById(username_element_id, password_element_id, username, password) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec,
      null,
      null,
      [username_element_id, password_element_id, username, password],
      undefined,
      undefined
    );
  }

  informNoSavedCredentials(should_show_popup_without_passwords) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec,
      null,
      null,
      [should_show_popup_without_passwords],
      undefined,
      undefined
    );
  }

  fillIntoFocusedField(is_password, credential) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec,
      null,
      null,
      [is_password, credential],
      undefined,
      undefined
    );
  }

  previewField(field_id, value) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec,
      null,
      null,
      [field_id, value],
      undefined,
      undefined
    );
  }

  fillField(field_id, value, field_properties) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec,
      [field_id, value, field_properties],
      undefined,
      undefined
    );
  }

  fillChangePasswordForm(password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec,
      [password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password],
      undefined,
      undefined
    );
  }

  setLoggingState(active) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec,
      null,
      null,
      [active],
      undefined,
      undefined
    );
  }

  triggerFormSubmission() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  annotateFieldsWithParsingResult(parsing_result) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec,
      null,
      null,
      [parsing_result],
      undefined,
      undefined
    );
  }

  checkViewAreaVisible(field_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParamsSpec,
      autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParamsSpec,
      [field_id],
      undefined,
      undefined
    );
  }

};

autofill.mojom.PasswordAutofillAgent.getRemote = function() {
  let remote = new autofill.mojom.PasswordAutofillAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.PasswordAutofillAgent',
    'context');
  return remote.$;
};

// ParamsSpec for ApplyFillDataOnParsingCompletion
autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.ApplyFillDataOnParsingCompletion_Params',
      packedSize: 16,
      fields: [
        { name: 'form_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FillPasswordSuggestion
autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillPasswordSuggestion_Params',
      packedSize: 24,
      fields: [
        { name: 'username', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillPasswordSuggestion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FillPasswordSuggestionById
autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillPasswordSuggestionById_Params',
      packedSize: 48,
      fields: [
        { name: 'username_element_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_element_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'username', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'suggestion_source', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for PreviewPasswordSuggestionById
autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.PreviewPasswordSuggestionById_Params',
      packedSize: 40,
      fields: [
        { name: 'username_element_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password_element_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'username', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for InformNoSavedCredentials
autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.InformNoSavedCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'should_show_popup_without_passwords', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FillIntoFocusedField
autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillIntoFocusedField_Params',
      packedSize: 24,
      fields: [
        { name: 'is_password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'credential', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PreviewField
autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.PreviewField_Params',
      packedSize: 24,
      fields: [
        { name: 'field_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for FillField
autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillField_Params',
      packedSize: 32,
      fields: [
        { name: 'field_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'field_properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillField_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FillChangePasswordForm
autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillChangePasswordForm_Params',
      packedSize: 48,
      fields: [
        { name: 'password_element_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_password_element_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'confirm_password_element_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'old_password', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_password', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.FillChangePasswordForm_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'form_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLoggingState
autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.SetLoggingState_Params',
      packedSize: 16,
      fields: [
        { name: 'active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerFormSubmission
autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.TriggerFormSubmission_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AnnotateFieldsWithParsingResult
autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.AnnotateFieldsWithParsingResult_Params',
      packedSize: 16,
      fields: [
        { name: 'parsing_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckViewAreaVisible
autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.CheckViewAreaVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'field_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordAutofillAgent.CheckViewAreaVisible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
autofill.mojom.PasswordAutofillAgentPtr = autofill.mojom.PasswordAutofillAgentRemote;
autofill.mojom.PasswordAutofillAgentRequest = autofill.mojom.PasswordAutofillAgentPendingReceiver;


// Interface: PasswordGenerationAgent
autofill.mojom.PasswordGenerationAgent = {};

autofill.mojom.PasswordGenerationAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill.mojom.PasswordGenerationAgentRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.PasswordGenerationAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill.mojom.PasswordGenerationAgentPendingReceiver,
      handle);
    this.$ = new autofill.mojom.PasswordGenerationAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill.mojom.PasswordGenerationAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generatedPasswordAccepted(generated_password) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec,
      null,
      null,
      [generated_password],
      undefined,
      undefined
    );
  }

  generatedPasswordRejected() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  triggeredGeneratePassword() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec,
      autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec,
      autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  foundFormEligibleForGeneration(form) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec,
      null,
      null,
      [form],
      undefined,
      undefined
    );
  }

  focusNextFieldAfterPasswords() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

autofill.mojom.PasswordGenerationAgent.getRemote = function() {
  let remote = new autofill.mojom.PasswordGenerationAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.PasswordGenerationAgent',
    'context');
  return remote.$;
};

// ParamsSpec for GeneratedPasswordAccepted
autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationAgent.GeneratedPasswordAccepted_Params',
      packedSize: 16,
      fields: [
        { name: 'generated_password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GeneratedPasswordRejected
autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationAgent.GeneratedPasswordRejected_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TriggeredGeneratePassword
autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationAgent.TriggeredGeneratePassword_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationAgent.TriggeredGeneratePassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FoundFormEligibleForGeneration
autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationAgent.FoundFormEligibleForGeneration_Params',
      packedSize: 16,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FocusNextFieldAfterPasswords
autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.PasswordGenerationAgent.FocusNextFieldAfterPasswords_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
autofill.mojom.PasswordGenerationAgentPtr = autofill.mojom.PasswordGenerationAgentRemote;
autofill.mojom.PasswordGenerationAgentRequest = autofill.mojom.PasswordGenerationAgentPendingReceiver;

