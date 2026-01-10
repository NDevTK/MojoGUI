// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/content/common/mojom/autofill_agent.mojom
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
        
        // Try Method 0: TriggerFormExtraction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerFormExtraction (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TriggerFormExtractionWithResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerFormExtractionWithResponse (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ApplyFieldsAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyFieldsAction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ApplyFieldAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyFieldAction (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ExtractFormWithField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractFormWithField (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ExtractLabeledTextNodeValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractLabeledTextNodeValue (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FieldTypePredictionsAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FieldTypePredictionsAvailable (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ExposeDomNodeIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExposeDomNodeIds (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ClearPreviewedForm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearPreviewedForm (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: TriggerSuggestions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerSuggestions (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetSuggestionAvailability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSuggestionAvailability (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AcceptDataListSuggestion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptDataListSuggestion (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: PreviewPasswordSuggestion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewPasswordSuggestion (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: PreviewPasswordGenerationSuggestion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewPasswordGenerationSuggestion (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetPotentialLastFourCombinationsForStandaloneCvc
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPotentialLastFourCombinationsForStandaloneCvc (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: DispatchEmailVerifiedEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchEmailVerifiedEvent (15)');
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
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtraction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerFormExtraction');
          const result = this.impl.triggerFormExtraction();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerFormExtractionWithResponse_ParamsSpec.$.structSpec);
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
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldsAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyFieldsAction');
          const result = this.impl.applyFieldsAction(params.action_type, params.action_persistence, params.fields, params.fill_id, params.supports_refill);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ApplyFieldAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyFieldAction');
          const result = this.impl.applyFieldAction(params.action_type, params.action_persistence, params.field, params.value);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractFormWithField_ParamsSpec.$.structSpec);
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
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExtractLabeledTextNodeValue_ParamsSpec.$.structSpec);
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
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_FieldTypePredictionsAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fieldTypePredictionsAvailable');
          const result = this.impl.fieldTypePredictionsAvailable(params.forms);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ExposeDomNodeIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exposeDomNodeIds');
          const result = this.impl.exposeDomNodeIds();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_ClearPreviewedForm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearPreviewedForm');
          const result = this.impl.clearPreviewedForm();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_TriggerSuggestions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerSuggestions');
          const result = this.impl.triggerSuggestions(params.field, params.trigger_source);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_SetSuggestionAvailability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSuggestionAvailability');
          const result = this.impl.setSuggestionAvailability(params.field, params.suggestion_availability);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_AcceptDataListSuggestion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptDataListSuggestion');
          const result = this.impl.acceptDataListSuggestion(params.field, params.value);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordSuggestion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previewPasswordSuggestion');
          const result = this.impl.previewPasswordSuggestion(params.username, params.password);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_PreviewPasswordGenerationSuggestion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previewPasswordGenerationSuggestion');
          const result = this.impl.previewPasswordGenerationSuggestion(params.password);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_GetPotentialLastFourCombinationsForStandaloneCvc_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(autofill.mojom.AutofillAgent_DispatchEmailVerifiedEvent_ParamsSpec.$.structSpec);
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
        
        // Try Method 0: ApplyFillDataOnParsingCompletion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyFillDataOnParsingCompletion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FillPasswordSuggestion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillPasswordSuggestion (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FillPasswordSuggestionById
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillPasswordSuggestionById (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PreviewPasswordSuggestionById
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewPasswordSuggestionById (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InformNoSavedCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InformNoSavedCredentials (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FillIntoFocusedField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillIntoFocusedField (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PreviewField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewField (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: FillField
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillField (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: FillChangePasswordForm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillChangePasswordForm (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetLoggingState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLoggingState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: TriggerFormSubmission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerFormSubmission (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AnnotateFieldsWithParsingResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnnotateFieldsWithParsingResult (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CheckViewAreaVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckViewAreaVisible (12)');
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
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_ApplyFillDataOnParsingCompletion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyFillDataOnParsingCompletion');
          const result = this.impl.applyFillDataOnParsingCompletion(params.form_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestion_ParamsSpec.$.structSpec);
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
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillPasswordSuggestionById_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fillPasswordSuggestionById');
          const result = this.impl.fillPasswordSuggestionById(params.username_element_id, params.password_element_id, params.username, params.password, params.suggestion_source);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewPasswordSuggestionById_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previewPasswordSuggestionById');
          const result = this.impl.previewPasswordSuggestionById(params.username_element_id, params.password_element_id, params.username, params.password);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_InformNoSavedCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.informNoSavedCredentials');
          const result = this.impl.informNoSavedCredentials(params.should_show_popup_without_passwords);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillIntoFocusedField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fillIntoFocusedField');
          const result = this.impl.fillIntoFocusedField(params.is_password, params.credential);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_PreviewField_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previewField');
          const result = this.impl.previewField(params.field_id, params.value);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillField_ParamsSpec.$.structSpec);
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
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_FillChangePasswordForm_ParamsSpec.$.structSpec);
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
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_SetLoggingState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLoggingState');
          const result = this.impl.setLoggingState(params.active);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_TriggerFormSubmission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerFormSubmission');
          const result = this.impl.triggerFormSubmission();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_AnnotateFieldsWithParsingResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.annotateFieldsWithParsingResult');
          const result = this.impl.annotateFieldsWithParsingResult(params.parsing_result);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordAutofillAgent_CheckViewAreaVisible_ParamsSpec.$.structSpec);
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
        
        // Try Method 0: GeneratedPasswordAccepted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GeneratedPasswordAccepted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GeneratedPasswordRejected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GeneratedPasswordRejected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TriggeredGeneratePassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggeredGeneratePassword (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FoundFormEligibleForGeneration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FoundFormEligibleForGeneration (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FocusNextFieldAfterPasswords
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusNextFieldAfterPasswords (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordAccepted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generatedPasswordAccepted');
          const result = this.impl.generatedPasswordAccepted(params.generated_password);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_GeneratedPasswordRejected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generatedPasswordRejected');
          const result = this.impl.generatedPasswordRejected();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_TriggeredGeneratePassword_ParamsSpec.$.structSpec);
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
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FoundFormEligibleForGeneration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.foundFormEligibleForGeneration');
          const result = this.impl.foundFormEligibleForGeneration(params.form);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.PasswordGenerationAgent_FocusNextFieldAfterPasswords_ParamsSpec.$.structSpec);
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

