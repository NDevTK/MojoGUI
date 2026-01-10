// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_agent.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};
var mojo_base = mojo_base || {};

autofill.mojom.AutofillAgent = {};
autofill.mojom.AutofillAgent.$interfaceName = 'autofill.mojom.AutofillAgent';
autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec = { $: {} };
autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent = {};
autofill.mojom.PasswordAutofillAgent.$interfaceName = 'autofill.mojom.PasswordAutofillAgent';
autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec = { $: {} };
autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationAgent = {};
autofill.mojom.PasswordGenerationAgent.$interfaceName = 'autofill.mojom.PasswordGenerationAgent';
autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec = { $: {} };
autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec = { $: {} };

// Interface: AutofillAgent
mojo.internal.Struct(
    autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec, 'autofill.mojom.AutofillAgent_TriggerFormExtraction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec, 'autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec, 'autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec, 'autofill.mojom.AutofillAgent_ApplyFieldsAction_Params', [
      mojo.internal.StructField('action_type', 0, 0, autofill.mojom.FormActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_persistence', 8, 0, autofill.mojom.ActionPersistenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fields', 16, 0, mojo.internal.Array(autofill.mojom.FormFieldData_FillDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('fill_id', 24, 0, autofill.mojom.FillIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supports_refill', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec, 'autofill.mojom.AutofillAgent_ApplyFieldAction_Params', [
      mojo.internal.StructField('action_type', 0, 0, autofill.mojom.FieldActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_persistence', 8, 0, autofill.mojom.ActionPersistenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field', 16, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec, 'autofill.mojom.AutofillAgent_ExtractFormWithField_Params', [
      mojo.internal.StructField('field_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec, 'autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParams', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.FormDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec, 'autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_Params', [
      mojo.internal.StructField('value_regex', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('label_regex', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('number_of_ancestor_levels_to_search', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec, 'autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec, 'autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_Params', [
      mojo.internal.StructField('forms', 0, 0, mojo.internal.Array(autofill.mojom.FormDataPredictionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec, 'autofill.mojom.AutofillAgent_ExposeDomNodeIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec, 'autofill.mojom.AutofillAgent_ClearPreviewedForm_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec, 'autofill.mojom.AutofillAgent_TriggerSuggestions_Params', [
      mojo.internal.StructField('field', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger_source', 8, 0, autofill.mojom.AutofillSuggestionTriggerSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec, 'autofill.mojom.AutofillAgent_SetSuggestionAvailability_Params', [
      mojo.internal.StructField('field', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('suggestion_availability', 8, 0, autofill.mojom.AutofillSuggestionAvailabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec, 'autofill.mojom.AutofillAgent_AcceptDataListSuggestion_Params', [
      mojo.internal.StructField('field', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec, 'autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_Params', [
      mojo.internal.StructField('username', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec, 'autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_Params', [
      mojo.internal.StructField('password', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec, 'autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec, 'autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParams', [
      mojo.internal.StructField('potential_matches', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec, 'autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_Params', [
      mojo.internal.StructField('field_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presentation_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  triggerFormExtractionWithResponse() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec,
      autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec,
      [],
      false);
  }

  applyFieldsAction(action_type, action_persistence, fields, fill_id, supports_refill) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec,
      null,
      [action_type, action_persistence, fields, fill_id, supports_refill],
      false);
  }

  applyFieldAction(action_type, action_persistence, field, value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec,
      null,
      [action_type, action_persistence, field, value],
      false);
  }

  extractFormWithField(field_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec,
      autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec,
      [field_id],
      false);
  }

  extractLabeledTextNodeValue(value_regex, label_regex, number_of_ancestor_levels_to_search) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec,
      autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec,
      [value_regex, label_regex, number_of_ancestor_levels_to_search],
      false);
  }

  fieldTypePredictionsAvailable(forms) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec,
      null,
      [forms],
      false);
  }

  exposeDomNodeIds() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec,
      null,
      [],
      false);
  }

  clearPreviewedForm() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec,
      null,
      [],
      false);
  }

  triggerSuggestions(field, trigger_source) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec,
      null,
      [field, trigger_source],
      false);
  }

  setSuggestionAvailability(field, suggestion_availability) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec,
      null,
      [field, suggestion_availability],
      false);
  }

  acceptDataListSuggestion(field, value) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec,
      null,
      [field, value],
      false);
  }

  previewPasswordSuggestion(username, password) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec,
      null,
      [username, password],
      false);
  }

  previewPasswordGenerationSuggestion(password) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec,
      null,
      [password],
      false);
  }

  getPotentialLastFourCombinationsForStandaloneCvc() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec,
      autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec,
      [],
      false);
  }

  dispatchEmailVerifiedEvent(field_id, presentation_token) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec,
      null,
      [field_id, presentation_token],
      false);
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

autofill.mojom.AutofillAgentReceiver = class {
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
        
        // Try Method 0: TriggerFormExtraction
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerFormExtraction (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: TriggerFormExtractionWithResponse
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerFormExtractionWithResponse (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ApplyFieldsAction
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyFieldsAction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ApplyFieldAction
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyFieldAction (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: ExtractFormWithField
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractFormWithField (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: ExtractLabeledTextNodeValue
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractLabeledTextNodeValue (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: FieldTypePredictionsAvailable
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FieldTypePredictionsAvailable (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: ExposeDomNodeIds
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExposeDomNodeIds (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: ClearPreviewedForm
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearPreviewedForm (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: TriggerSuggestions
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerSuggestions (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: SetSuggestionAvailability
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSuggestionAvailability (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: AcceptDataListSuggestion
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptDataListSuggestion (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: PreviewPasswordSuggestion
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewPasswordSuggestion (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: PreviewPasswordGenerationSuggestion
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewPasswordGenerationSuggestion (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: GetPotentialLastFourCombinationsForStandaloneCvc
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPotentialLastFourCombinationsForStandaloneCvc (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: DispatchEmailVerifiedEvent
        try {
             decoder.decodeStruct(autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchEmailVerifiedEvent (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerFormExtraction');
          const result = this.impl.triggerFormExtraction();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerFormExtractionWithResponse');
          const result = this.impl.triggerFormExtractionWithResponse();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyFieldsAction');
          const result = this.impl.applyFieldsAction(params.action_type, params.action_persistence, params.fields, params.fill_id, params.supports_refill);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyFieldAction');
          const result = this.impl.applyFieldAction(params.action_type, params.action_persistence, params.field, params.value);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extractFormWithField');
          const result = this.impl.extractFormWithField(params.field_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extractLabeledTextNodeValue');
          const result = this.impl.extractLabeledTextNodeValue(params.value_regex, params.label_regex, params.number_of_ancestor_levels_to_search);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fieldTypePredictionsAvailable');
          const result = this.impl.fieldTypePredictionsAvailable(params.forms);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.exposeDomNodeIds');
          const result = this.impl.exposeDomNodeIds();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearPreviewedForm');
          const result = this.impl.clearPreviewedForm();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerSuggestions');
          const result = this.impl.triggerSuggestions(params.field, params.trigger_source);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSuggestionAvailability');
          const result = this.impl.setSuggestionAvailability(params.field, params.suggestion_availability);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acceptDataListSuggestion');
          const result = this.impl.acceptDataListSuggestion(params.field, params.value);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.previewPasswordSuggestion');
          const result = this.impl.previewPasswordSuggestion(params.username, params.password);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.previewPasswordGenerationSuggestion');
          const result = this.impl.previewPasswordGenerationSuggestion(params.password);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPotentialLastFourCombinationsForStandaloneCvc');
          const result = this.impl.getPotentialLastFourCombinationsForStandaloneCvc();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchEmailVerifiedEvent');
          const result = this.impl.dispatchEmailVerifiedEvent(params.field_id, params.presentation_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

autofill.mojom.AutofillAgentReceiver = autofill.mojom.AutofillAgentReceiver;

autofill.mojom.AutofillAgentPtr = autofill.mojom.AutofillAgentRemote;
autofill.mojom.AutofillAgentRequest = autofill.mojom.AutofillAgentPendingReceiver;


// Interface: PasswordAutofillAgent
mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_Params', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.PasswordFormFillDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_Params', [
      mojo.internal.StructField('username', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_Params', [
      mojo.internal.StructField('username_element_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_element_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('username', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('suggestion_source', 32, 0, autofill.mojom.AutofillSuggestionTriggerSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_Params', [
      mojo.internal.StructField('username_element_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password_element_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('username', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_Params', [
      mojo.internal.StructField('should_show_popup_without_passwords', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_Params', [
      mojo.internal.StructField('credential', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_password', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_PreviewField_Params', [
      mojo.internal.StructField('field_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillField_Params', [
      mojo.internal.StructField('field_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('field_properties', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillField_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_Params', [
      mojo.internal.StructField('password_element_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_password_element_id', 8, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('confirm_password_element_id', 16, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('old_password', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec, 'autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParams', [
      mojo.internal.StructField('form_data', 0, 0, autofill.mojom.FormDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_SetLoggingState_Params', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_Params', [
      mojo.internal.StructField('parsing_result', 0, 0, autofill.mojom.ParsingResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec, 'autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_Params', [
      mojo.internal.StructField('field_id', 0, 0, autofill.mojom.FieldRendererIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParamsSpec, 'autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParams', [
      mojo.internal.StructField('is_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [form_data],
      false);
  }

  fillPasswordSuggestion(username, password) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec,
      [username, password],
      false);
  }

  fillPasswordSuggestionById(username_element_id, password_element_id, username, password, suggestion_source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec,
      null,
      [username_element_id, password_element_id, username, password, suggestion_source],
      false);
  }

  previewPasswordSuggestionById(username_element_id, password_element_id, username, password) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec,
      null,
      [username_element_id, password_element_id, username, password],
      false);
  }

  informNoSavedCredentials(should_show_popup_without_passwords) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec,
      null,
      [should_show_popup_without_passwords],
      false);
  }

  fillIntoFocusedField(is_password, credential) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec,
      null,
      [is_password, credential],
      false);
  }

  previewField(field_id, value) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec,
      null,
      [field_id, value],
      false);
  }

  fillField(field_id, value, field_properties) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec,
      [field_id, value, field_properties],
      false);
  }

  fillChangePasswordForm(password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec,
      [password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password],
      false);
  }

  setLoggingState(active) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec,
      null,
      [active],
      false);
  }

  triggerFormSubmission() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec,
      null,
      [],
      false);
  }

  annotateFieldsWithParsingResult(parsing_result) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec,
      null,
      [parsing_result],
      false);
  }

  checkViewAreaVisible(field_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParamsSpec,
      [field_id],
      false);
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

autofill.mojom.PasswordAutofillAgentReceiver = class {
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
        
        // Try Method 0: ApplyFillDataOnParsingCompletion
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyFillDataOnParsingCompletion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: FillPasswordSuggestion
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillPasswordSuggestion (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: FillPasswordSuggestionById
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillPasswordSuggestionById (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: PreviewPasswordSuggestionById
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewPasswordSuggestionById (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: InformNoSavedCredentials
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InformNoSavedCredentials (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: FillIntoFocusedField
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillIntoFocusedField (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: PreviewField
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewField (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: FillField
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillField (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: FillChangePasswordForm
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillChangePasswordForm (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: SetLoggingState
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLoggingState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: TriggerFormSubmission
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerFormSubmission (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: AnnotateFieldsWithParsingResult
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnnotateFieldsWithParsingResult (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: CheckViewAreaVisible
        try {
             decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckViewAreaVisible (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyFillDataOnParsingCompletion');
          const result = this.impl.applyFillDataOnParsingCompletion(params.form_data);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fillPasswordSuggestion');
          const result = this.impl.fillPasswordSuggestion(params.username, params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fillPasswordSuggestionById');
          const result = this.impl.fillPasswordSuggestionById(params.username_element_id, params.password_element_id, params.username, params.password, params.suggestion_source);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.previewPasswordSuggestionById');
          const result = this.impl.previewPasswordSuggestionById(params.username_element_id, params.password_element_id, params.username, params.password);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.informNoSavedCredentials');
          const result = this.impl.informNoSavedCredentials(params.should_show_popup_without_passwords);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fillIntoFocusedField');
          const result = this.impl.fillIntoFocusedField(params.is_password, params.credential);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.previewField');
          const result = this.impl.previewField(params.field_id, params.value);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fillField');
          const result = this.impl.fillField(params.field_id, params.value, params.field_properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fillChangePasswordForm');
          const result = this.impl.fillChangePasswordForm(params.password_element_id, params.new_password_element_id, params.confirm_password_element_id, params.old_password, params.new_password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setLoggingState');
          const result = this.impl.setLoggingState(params.active);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerFormSubmission');
          const result = this.impl.triggerFormSubmission();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.annotateFieldsWithParsingResult');
          const result = this.impl.annotateFieldsWithParsingResult(params.parsing_result);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.checkViewAreaVisible');
          const result = this.impl.checkViewAreaVisible(params.field_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

autofill.mojom.PasswordAutofillAgentReceiver = autofill.mojom.PasswordAutofillAgentReceiver;

autofill.mojom.PasswordAutofillAgentPtr = autofill.mojom.PasswordAutofillAgentRemote;
autofill.mojom.PasswordAutofillAgentRequest = autofill.mojom.PasswordAutofillAgentPendingReceiver;


// Interface: PasswordGenerationAgent
mojo.internal.Struct(
    autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec, 'autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_Params', [
      mojo.internal.StructField('generated_password', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec, 'autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec, 'autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec, 'autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, autofill.mojom.PasswordGenerationUIDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec, 'autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_Params', [
      mojo.internal.StructField('form', 0, 0, autofill.mojom.PasswordFormGenerationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec, 'autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_Params', [
    ],
    [[0, 8]]);

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
      [generated_password],
      false);
  }

  generatedPasswordRejected() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec,
      null,
      [],
      false);
  }

  triggeredGeneratePassword() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec,
      autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec,
      [],
      false);
  }

  foundFormEligibleForGeneration(form) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec,
      null,
      [form],
      false);
  }

  focusNextFieldAfterPasswords() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec,
      null,
      [],
      false);
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

autofill.mojom.PasswordGenerationAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: GeneratedPasswordAccepted
        try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GeneratedPasswordAccepted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GeneratedPasswordRejected
        try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GeneratedPasswordRejected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: TriggeredGeneratePassword
        try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggeredGeneratePassword (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: FoundFormEligibleForGeneration
        try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FoundFormEligibleForGeneration (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: FocusNextFieldAfterPasswords
        try {
             decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusNextFieldAfterPasswords (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generatedPasswordAccepted');
          const result = this.impl.generatedPasswordAccepted(params.generated_password);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generatedPasswordRejected');
          const result = this.impl.generatedPasswordRejected();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggeredGeneratePassword');
          const result = this.impl.triggeredGeneratePassword();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.foundFormEligibleForGeneration');
          const result = this.impl.foundFormEligibleForGeneration(params.form);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.focusNextFieldAfterPasswords');
          const result = this.impl.focusNextFieldAfterPasswords();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

autofill.mojom.PasswordGenerationAgentReceiver = autofill.mojom.PasswordGenerationAgentReceiver;

autofill.mojom.PasswordGenerationAgentPtr = autofill.mojom.PasswordGenerationAgentRemote;
autofill.mojom.PasswordGenerationAgentRequest = autofill.mojom.PasswordGenerationAgentPendingReceiver;

