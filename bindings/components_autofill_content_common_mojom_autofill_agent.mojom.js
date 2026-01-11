// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_agent.mojom
// Module: autofill.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  triggerFormExtraction() {
    return this.$.triggerFormExtraction();
  }
  triggerFormExtractionWithResponse() {
    return this.$.triggerFormExtractionWithResponse();
  }
  applyFieldsAction(action_type, action_persistence, fields, fill_id, supports_refill) {
    return this.$.applyFieldsAction(action_type, action_persistence, fields, fill_id, supports_refill);
  }
  applyFieldAction(action_type, action_persistence, field, value) {
    return this.$.applyFieldAction(action_type, action_persistence, field, value);
  }
  extractFormWithField(field_id) {
    return this.$.extractFormWithField(field_id);
  }
  extractLabeledTextNodeValue(value_regex, label_regex, number_of_ancestor_levels_to_search) {
    return this.$.extractLabeledTextNodeValue(value_regex, label_regex, number_of_ancestor_levels_to_search);
  }
  fieldTypePredictionsAvailable(forms) {
    return this.$.fieldTypePredictionsAvailable(forms);
  }
  exposeDomNodeIds() {
    return this.$.exposeDomNodeIds();
  }
  clearPreviewedForm() {
    return this.$.clearPreviewedForm();
  }
  triggerSuggestions(field, trigger_source) {
    return this.$.triggerSuggestions(field, trigger_source);
  }
  setSuggestionAvailability(field, suggestion_availability) {
    return this.$.setSuggestionAvailability(field, suggestion_availability);
  }
  acceptDataListSuggestion(field, value) {
    return this.$.acceptDataListSuggestion(field, value);
  }
  previewPasswordSuggestion(username, password) {
    return this.$.previewPasswordSuggestion(username, password);
  }
  previewPasswordGenerationSuggestion(password) {
    return this.$.previewPasswordGenerationSuggestion(password);
  }
  getPotentialLastFourCombinationsForStandaloneCvc() {
    return this.$.getPotentialLastFourCombinationsForStandaloneCvc();
  }
  dispatchEmailVerifiedEvent(field_id, presentation_token) {
    return this.$.dispatchEmailVerifiedEvent(field_id, presentation_token);
  }
};

autofill.mojom.AutofillAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AutofillAgent', [
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

  triggerFormExtraction() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec,
      null,
      [],
      false);
  }

  triggerFormExtractionWithResponse() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec,
      autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec,
      [],
      false);
  }

  applyFieldsAction(action_type, action_persistence, fields, fill_id, supports_refill) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec,
      null,
      [action_type, action_persistence, fields, fill_id, supports_refill],
      false);
  }

  applyFieldAction(action_type, action_persistence, field, value) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec,
      null,
      [action_type, action_persistence, field, value],
      false);
  }

  extractFormWithField(field_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec,
      autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec,
      [field_id],
      false);
  }

  extractLabeledTextNodeValue(value_regex, label_regex, number_of_ancestor_levels_to_search) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec,
      autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec,
      [value_regex, label_regex, number_of_ancestor_levels_to_search],
      false);
  }

  fieldTypePredictionsAvailable(forms) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec,
      null,
      [forms],
      false);
  }

  exposeDomNodeIds() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec,
      null,
      [],
      false);
  }

  clearPreviewedForm() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec,
      null,
      [],
      false);
  }

  triggerSuggestions(field, trigger_source) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec,
      null,
      [field, trigger_source],
      false);
  }

  setSuggestionAvailability(field, suggestion_availability) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec,
      null,
      [field, suggestion_availability],
      false);
  }

  acceptDataListSuggestion(field, value) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec,
      null,
      [field, value],
      false);
  }

  previewPasswordSuggestion(username, password) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec,
      null,
      [username, password],
      false);
  }

  previewPasswordGenerationSuggestion(password) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec,
      null,
      [password],
      false);
  }

  getPotentialLastFourCombinationsForStandaloneCvc() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec,
      autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ResponseParamsSpec,
      [],
      false);
  }

  dispatchEmailVerifiedEvent(field_id, presentation_token) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AutofillAgent', [
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec.$.structSpec);
          const result = this.impl.triggerFormExtraction();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec.$.structSpec);
          const result = this.impl.triggerFormExtractionWithResponse();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec.$.structSpec);
          const result = this.impl.applyFieldsAction(params.action_type, params.action_persistence, params.fields, params.fill_id, params.supports_refill);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec.$.structSpec);
          const result = this.impl.applyFieldAction(params.action_type, params.action_persistence, params.field, params.value);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec.$.structSpec);
          const result = this.impl.extractFormWithField(params.field_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.AutofillAgent_ExtractFormWithField_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec.$.structSpec);
          const result = this.impl.extractLabeledTextNodeValue(params.value_regex, params.label_regex, params.number_of_ancestor_levels_to_search);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.fieldTypePredictionsAvailable(params.forms);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec.$.structSpec);
          const result = this.impl.exposeDomNodeIds();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec.$.structSpec);
          const result = this.impl.clearPreviewedForm();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec.$.structSpec);
          const result = this.impl.triggerSuggestions(params.field, params.trigger_source);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec.$.structSpec);
          const result = this.impl.setSuggestionAvailability(params.field, params.suggestion_availability);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec.$.structSpec);
          const result = this.impl.acceptDataListSuggestion(params.field, params.value);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec.$.structSpec);
          const result = this.impl.previewPasswordSuggestion(params.username, params.password);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec.$.structSpec);
          const result = this.impl.previewPasswordGenerationSuggestion(params.password);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchEmailVerifiedEvent(params.field_id, params.presentation_token);
          break;
        }
      }
      } catch (err) {}
    });
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
  applyFillDataOnParsingCompletion(form_data) {
    return this.$.applyFillDataOnParsingCompletion(form_data);
  }
  fillPasswordSuggestion(username, password) {
    return this.$.fillPasswordSuggestion(username, password);
  }
  fillPasswordSuggestionById(username_element_id, password_element_id, username, password, suggestion_source) {
    return this.$.fillPasswordSuggestionById(username_element_id, password_element_id, username, password, suggestion_source);
  }
  previewPasswordSuggestionById(username_element_id, password_element_id, username, password) {
    return this.$.previewPasswordSuggestionById(username_element_id, password_element_id, username, password);
  }
  informNoSavedCredentials(should_show_popup_without_passwords) {
    return this.$.informNoSavedCredentials(should_show_popup_without_passwords);
  }
  fillIntoFocusedField(is_password, credential) {
    return this.$.fillIntoFocusedField(is_password, credential);
  }
  previewField(field_id, value) {
    return this.$.previewField(field_id, value);
  }
  fillField(field_id, value, field_properties) {
    return this.$.fillField(field_id, value, field_properties);
  }
  fillChangePasswordForm(password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password) {
    return this.$.fillChangePasswordForm(password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password);
  }
  setLoggingState(active) {
    return this.$.setLoggingState(active);
  }
  triggerFormSubmission() {
    return this.$.triggerFormSubmission();
  }
  annotateFieldsWithParsingResult(parsing_result) {
    return this.$.annotateFieldsWithParsingResult(parsing_result);
  }
  checkViewAreaVisible(field_id) {
    return this.$.checkViewAreaVisible(field_id);
  }
};

autofill.mojom.PasswordAutofillAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PasswordAutofillAgent', [
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

  applyFillDataOnParsingCompletion(form_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec,
      null,
      [form_data],
      false);
  }

  fillPasswordSuggestion(username, password) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec,
      [username, password],
      false);
  }

  fillPasswordSuggestionById(username_element_id, password_element_id, username, password, suggestion_source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec,
      null,
      [username_element_id, password_element_id, username, password, suggestion_source],
      false);
  }

  previewPasswordSuggestionById(username_element_id, password_element_id, username, password) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec,
      null,
      [username_element_id, password_element_id, username, password],
      false);
  }

  informNoSavedCredentials(should_show_popup_without_passwords) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec,
      null,
      [should_show_popup_without_passwords],
      false);
  }

  fillIntoFocusedField(is_password, credential) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec,
      null,
      [is_password, credential],
      false);
  }

  previewField(field_id, value) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec,
      null,
      [field_id, value],
      false);
  }

  fillField(field_id, value, field_properties) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec,
      [field_id, value, field_properties],
      false);
  }

  fillChangePasswordForm(password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec,
      autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec,
      [password_element_id, new_password_element_id, confirm_password_element_id, old_password, new_password],
      false);
  }

  setLoggingState(active) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec,
      null,
      [active],
      false);
  }

  triggerFormSubmission() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec,
      null,
      [],
      false);
  }

  annotateFieldsWithParsingResult(parsing_result) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec,
      null,
      [parsing_result],
      false);
  }

  checkViewAreaVisible(field_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PasswordAutofillAgent', [
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec.$.structSpec);
          const result = this.impl.applyFillDataOnParsingCompletion(params.form_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec.$.structSpec);
          const result = this.impl.fillPasswordSuggestion(params.username, params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec.$.structSpec);
          const result = this.impl.fillPasswordSuggestionById(params.username_element_id, params.password_element_id, params.username, params.password, params.suggestion_source);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec.$.structSpec);
          const result = this.impl.previewPasswordSuggestionById(params.username_element_id, params.password_element_id, params.username, params.password);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec.$.structSpec);
          const result = this.impl.informNoSavedCredentials(params.should_show_popup_without_passwords);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec.$.structSpec);
          const result = this.impl.fillIntoFocusedField(params.is_password, params.credential);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec.$.structSpec);
          const result = this.impl.previewField(params.field_id, params.value);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec.$.structSpec);
          const result = this.impl.fillField(params.field_id, params.value, params.field_properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordAutofillAgent_FillField_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec.$.structSpec);
          const result = this.impl.fillChangePasswordForm(params.password_element_id, params.new_password_element_id, params.confirm_password_element_id, params.old_password, params.new_password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec.$.structSpec);
          const result = this.impl.setLoggingState(params.active);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec.$.structSpec);
          const result = this.impl.triggerFormSubmission();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec.$.structSpec);
          const result = this.impl.annotateFieldsWithParsingResult(params.parsing_result);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
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
  generatedPasswordAccepted(generated_password) {
    return this.$.generatedPasswordAccepted(generated_password);
  }
  generatedPasswordRejected() {
    return this.$.generatedPasswordRejected();
  }
  triggeredGeneratePassword() {
    return this.$.triggeredGeneratePassword();
  }
  foundFormEligibleForGeneration(form) {
    return this.$.foundFormEligibleForGeneration(form);
  }
  focusNextFieldAfterPasswords() {
    return this.$.focusNextFieldAfterPasswords();
  }
};

autofill.mojom.PasswordGenerationAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PasswordGenerationAgent', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  generatedPasswordAccepted(generated_password) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec,
      null,
      [generated_password],
      false);
  }

  generatedPasswordRejected() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec,
      null,
      [],
      false);
  }

  triggeredGeneratePassword() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec,
      autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec,
      [],
      false);
  }

  foundFormEligibleForGeneration(form) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec,
      null,
      [form],
      false);
  }

  focusNextFieldAfterPasswords() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PasswordGenerationAgent', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec.$.structSpec);
          const result = this.impl.generatedPasswordAccepted(params.generated_password);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec.$.structSpec);
          const result = this.impl.generatedPasswordRejected();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec.$.structSpec);
          const result = this.impl.triggeredGeneratePassword();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec.$.structSpec);
          const result = this.impl.foundFormEligibleForGeneration(params.form);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec.$.structSpec);
          const result = this.impl.focusNextFieldAfterPasswords();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

autofill.mojom.PasswordGenerationAgentReceiver = autofill.mojom.PasswordGenerationAgentReceiver;

autofill.mojom.PasswordGenerationAgentPtr = autofill.mojom.PasswordGenerationAgentRemote;
autofill.mojom.PasswordGenerationAgentRequest = autofill.mojom.PasswordGenerationAgentPendingReceiver;

