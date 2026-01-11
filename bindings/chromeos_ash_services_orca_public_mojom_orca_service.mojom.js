// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/orca/public/mojom/orca_service.mojom
 // Module: ash.orca.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.orca = mojo.internal.bindings.ash.orca || {};
mojo.internal.bindings.ash.orca.mojom = mojo.internal.bindings.ash.orca.mojom || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.ash.orca.mojom.PresetTextQueryTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.orca.mojom.MetricEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.orca.mojom.TextQueryErrorCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.orca.mojom.TextQueryResponseSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.PresetTextQuerySpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.TextQueryRequestSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.TextQueryResultSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.TextQueryErrorSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SurroundingTextSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.ContextSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorConfigSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.TriggerContextSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient = {};
mojo.internal.bindings.ash.orca.mojom.EditorClient.$interfaceName = 'ash.orca.mojom.EditorClient';
mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_InsertText_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_ShowUI_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_CloseUI_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_AppendText_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorClientConnector = {};
mojo.internal.bindings.ash.orca.mojom.EditorClientConnector.$interfaceName = 'ash.orca.mojom.EditorClientConnector';
mojo.internal.bindings.ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.EditorEventSink = {};
mojo.internal.bindings.ash.orca.mojom.EditorEventSink.$interfaceName = 'ash.orca.mojom.EditorEventSink';
mojo.internal.bindings.ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator = {};
mojo.internal.bindings.ash.orca.mojom.SystemActuator.$interfaceName = 'ash.orca.mojom.SystemActuator';
mojo.internal.bindings.ash.orca.mojom.SystemActuator_InsertText_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.TextQueryProvider = {};
mojo.internal.bindings.ash.orca.mojom.TextQueryProvider.$interfaceName = 'ash.orca.mojom.TextQueryProvider';
mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.orca.mojom.OrcaService = {};
mojo.internal.bindings.ash.orca.mojom.OrcaService.$interfaceName = 'ash.orca.mojom.OrcaService';
mojo.internal.bindings.ash.orca.mojom.OrcaService_BindEditor_ParamsSpec = { $: {} };

// Enum: PresetTextQueryType
mojo.internal.bindings.ash.orca.mojom.PresetTextQueryType = {
  kUnknown: 0,
  kShorten: 1,
  kElaborate: 2,
  kRephrase: 3,
  kFormalize: 4,
  kEmojify: 5,
  MinVersion: 5,
};

// Enum: MetricEvent
mojo.internal.bindings.ash.orca.mojom.MetricEvent = {
  kUnknown: 0,
  kRefineRequest: 1,
  kFeedbackThumbsUp: 2,
  kFeedbackThumbsDown: 3,
  kReturnToPreviousSuggestions: 4,
  kWebUIRequest: 5,
};

// Enum: TextQueryErrorCode
mojo.internal.bindings.ash.orca.mojom.TextQueryErrorCode = {
  kUnknown: 0,
  kInvalidArgument: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Union: TextQueryResponse
mojo.internal.Union(
    mojo.internal.bindings.ash.orca.mojom.TextQueryResponseSpec, 'ash.orca.mojom.TextQueryResponse', {
      'arg_results': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.TextQueryResultSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.TextQueryErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: PresetTextQuery
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.PresetTextQuerySpec, 'ash.orca.mojom.PresetTextQuery', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.PresetTextQueryTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TextQueryRequest
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.TextQueryRequestSpec, 'ash.orca.mojom.TextQueryRequest', [
      mojo.internal.StructField('arg_text_query_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parameters', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextQueryResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.TextQueryResultSpec, 'ash.orca.mojom.TextQueryResult', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextQueryError
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.TextQueryErrorSpec, 'ash.orca.mojom.TextQueryError', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.TextQueryErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SurroundingText
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SurroundingTextSpec, 'ash.orca.mojom.SurroundingText', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_range', 8, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Context
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.ContextSpec, 'ash.orca.mojom.Context', [
      mojo.internal.StructField('arg_surrounding_text', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.SurroundingTextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EditorConfig
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorConfigSpec, 'ash.orca.mojom.EditorConfig', [
      mojo.internal.StructField('arg_allowed_query_types', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.PresetTextQueryTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_language_code', 8, 0, mojo.internal.String, null, true, 12, undefined),
    ],
    [[0, 16], [12, 24]]);

// Struct: TriggerContext
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.TriggerContextSpec, 'ash.orca.mojom.TriggerContext', [
      mojo.internal.StructField('arg_preset_type_selected', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.PresetTextQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_freeform_selected', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: EditorClient
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec, 'ash.orca.mojom.EditorClient_GetPresetTextQueries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParams', [
      mojo.internal.StructField('arg_text_queries', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.PresetTextQuerySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestPresetRewrite_Params', [
      mojo.internal.StructField('arg_text_query_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_override', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformRewrite_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_override', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformWrite_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_InsertText_ParamsSpec, 'ash.orca.mojom.EditorClient_InsertText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_ApproveConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_DeclineConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_DismissConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec, 'ash.orca.mojom.EditorClient_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_ShowUI_ParamsSpec, 'ash.orca.mojom.EditorClient_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_CloseUI_ParamsSpec, 'ash.orca.mojom.EditorClient_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_AppendText_ParamsSpec, 'ash.orca.mojom.EditorClient_AppendText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec, 'ash.orca.mojom.EditorClient_PreviewFeedback_Params', [
      mojo.internal.StructField('arg_result_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParams', [
      mojo.internal.StructField('arg_preview', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec, 'ash.orca.mojom.EditorClient_SubmitFeedback_Params', [
      mojo.internal.StructField('arg_result_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec, 'ash.orca.mojom.EditorClient_OnTrigger_Params', [
      mojo.internal.StructField('arg_trigger_context', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.TriggerContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec, 'ash.orca.mojom.EditorClient_EmitMetricEvent_Params', [
      mojo.internal.StructField('arg_metric_event', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.MetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.orca.mojom.EditorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorClientRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.orca.mojom.EditorClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.orca.mojom.EditorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPresetTextQueries() {
    return this.$.getPresetTextQueries();
  }
  requestPresetRewrite(arg_text_query_id, arg_text_override) {
    return this.$.requestPresetRewrite(arg_text_query_id, arg_text_override);
  }
  requestFreeformRewrite(arg_input, arg_text_override) {
    return this.$.requestFreeformRewrite(arg_input, arg_text_override);
  }
  requestFreeformWrite(arg_input) {
    return this.$.requestFreeformWrite(arg_input);
  }
  insertText(arg_text) {
    return this.$.insertText(arg_text);
  }
  approveConsent() {
    return this.$.approveConsent();
  }
  declineConsent() {
    return this.$.declineConsent();
  }
  dismissConsent() {
    return this.$.dismissConsent();
  }
  openUrlInNewWindow(arg_url) {
    return this.$.openUrlInNewWindow(arg_url);
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  appendText(arg_text) {
    return this.$.appendText(arg_text);
  }
  previewFeedback(arg_result_id) {
    return this.$.previewFeedback(arg_result_id);
  }
  submitFeedback(arg_result_id, arg_user_description) {
    return this.$.submitFeedback(arg_result_id, arg_user_description);
  }
  onTrigger(arg_trigger_context) {
    return this.$.onTrigger(arg_trigger_context);
  }
  emitMetricEvent(arg_metric_event) {
    return this.$.emitMetricEvent(arg_metric_event);
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
    ]);
  }

  getPresetTextQueries() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec,
      mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec,
      [],
      false);
  }

  requestPresetRewrite(arg_text_query_id, arg_text_override) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec,
      mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec,
      [arg_text_query_id, arg_text_override],
      false);
  }

  requestFreeformRewrite(arg_input, arg_text_override) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec,
      mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec,
      [arg_input, arg_text_override],
      false);
  }

  requestFreeformWrite(arg_input) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec,
      mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec,
      [arg_input],
      false);
  }

  insertText(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_InsertText_ParamsSpec,
      null,
      [arg_text],
      false);
  }

  approveConsent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  dismissConsent() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  appendText(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_AppendText_ParamsSpec,
      null,
      [arg_text],
      false);
  }

  previewFeedback(arg_result_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec,
      mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec,
      [arg_result_id],
      false);
  }

  submitFeedback(arg_result_id, arg_user_description) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec,
      null,
      [arg_result_id, arg_user_description],
      false);
  }

  onTrigger(arg_trigger_context) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec,
      null,
      [arg_trigger_context],
      false);
  }

  emitMetricEvent(arg_metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec,
      null,
      [arg_metric_event],
      false);
  }

};

mojo.internal.bindings.ash.orca.mojom.EditorClient.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.orca.mojom.EditorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.orca.mojom.EditorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EditorClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
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
        
        // Try Method 0: GetPresetTextQueries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPresetTextQueries (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestPresetRewrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPresetRewrite (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestFreeformRewrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestFreeformRewrite (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestFreeformWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestFreeformWrite (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InsertText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_InsertText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ApproveConsent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApproveConsent (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeclineConsent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeclineConsent (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DismissConsent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissConsent (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OpenUrlInNewWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInNewWindow (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_ShowUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_CloseUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AppendText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_AppendText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AppendText (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: PreviewFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewFeedback (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SubmitFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitFeedback (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnTrigger
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTrigger (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EmitMetricEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EmitMetricEvent (15)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPresetTextQueries');
          const result = this.impl.getPresetTextQueries();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPresetTextQueries FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPresetRewrite');
          const result = this.impl.requestPresetRewrite(params.arg_text_query_id, params.arg_text_override);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPresetRewrite FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestFreeformRewrite');
          const result = this.impl.requestFreeformRewrite(params.arg_input, params.arg_text_override);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestFreeformRewrite FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestFreeformWrite');
          const result = this.impl.requestFreeformWrite(params.arg_input);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestFreeformWrite FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_InsertText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.arg_text);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.approveConsent');
          const result = this.impl.approveConsent();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.declineConsent');
          const result = this.impl.declineConsent();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dismissConsent');
          const result = this.impl.dismissConsent();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInNewWindow');
          const result = this.impl.openUrlInNewWindow(params.arg_url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_CloseUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_AppendText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.appendText');
          const result = this.impl.appendText(params.arg_text);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previewFeedback');
          const result = this.impl.previewFeedback(params.arg_result_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PreviewFeedback FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFeedback');
          const result = this.impl.submitFeedback(params.arg_result_id, params.arg_user_description);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrigger');
          const result = this.impl.onTrigger(params.arg_trigger_context);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.emitMetricEvent');
          const result = this.impl.emitMetricEvent(params.arg_metric_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorClientReceiver = mojo.internal.bindings.ash.orca.mojom.EditorClientReceiver;

mojo.internal.bindings.ash.orca.mojom.EditorClientPtr = mojo.internal.bindings.ash.orca.mojom.EditorClientRemote;
mojo.internal.bindings.ash.orca.mojom.EditorClientRequest = mojo.internal.bindings.ash.orca.mojom.EditorClientPendingReceiver;


// Interface: EditorClientConnector
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec, 'ash.orca.mojom.EditorClientConnector_BindEditorClient_Params', [
      mojo.internal.StructField('arg_editor_client', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.orca.mojom.EditorClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClientConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindEditorClient(arg_editor_client) {
    return this.$.bindEditorClient(arg_editor_client);
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorClientConnector', [
      { explicit: 0 },
    ]);
  }

  bindEditorClient(arg_editor_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec,
      null,
      [arg_editor_client],
      false);
  }

};

mojo.internal.bindings.ash.orca.mojom.EditorClientConnector.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClientConnector',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EditorClientConnector', [
      { explicit: 0 },
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
        
        // Try Method 0: BindEditorClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindEditorClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindEditorClient');
          const result = this.impl.bindEditorClient(params.arg_editor_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorReceiver = mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorReceiver;

mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorPtr = mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorRemote;
mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorRequest = mojo.internal.bindings.ash.orca.mojom.EditorClientConnectorPendingReceiver;


// Interface: EditorEventSink
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec, 'ash.orca.mojom.EditorEventSink_OnContextUpdated_Params', [
      mojo.internal.StructField('arg_context', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.ContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.orca.mojom.EditorEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorEventSinkRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.orca.mojom.EditorEventSinkPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.orca.mojom.EditorEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onContextUpdated(arg_context) {
    return this.$.onContextUpdated(arg_context);
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorEventSink', [
      { explicit: 0 },
    ]);
  }

  onContextUpdated(arg_context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec,
      null,
      [arg_context],
      false);
  }

};

mojo.internal.bindings.ash.orca.mojom.EditorEventSink.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.orca.mojom.EditorEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorEventSink',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.orca.mojom.EditorEventSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EditorEventSink', [
      { explicit: 0 },
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
        
        // Try Method 0: OnContextUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUpdated');
          const result = this.impl.onContextUpdated(params.arg_context);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.orca.mojom.EditorEventSinkReceiver = mojo.internal.bindings.ash.orca.mojom.EditorEventSinkReceiver;

mojo.internal.bindings.ash.orca.mojom.EditorEventSinkPtr = mojo.internal.bindings.ash.orca.mojom.EditorEventSinkRemote;
mojo.internal.bindings.ash.orca.mojom.EditorEventSinkRequest = mojo.internal.bindings.ash.orca.mojom.EditorEventSinkPendingReceiver;


// Interface: SystemActuator
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_InsertText_ParamsSpec, 'ash.orca.mojom.SystemActuator_InsertText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec, 'ash.orca.mojom.SystemActuator_ApproveConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec, 'ash.orca.mojom.SystemActuator_DeclineConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec, 'ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec, 'ash.orca.mojom.SystemActuator_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec, 'ash.orca.mojom.SystemActuator_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec, 'ash.orca.mojom.SystemActuator_SubmitFeedback_Params', [
      mojo.internal.StructField('arg_description', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec, 'ash.orca.mojom.SystemActuator_OnTrigger_Params', [
      mojo.internal.StructField('arg_trigger_context', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.TriggerContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec, 'ash.orca.mojom.SystemActuator_EmitMetricEvent_Params', [
      mojo.internal.StructField('arg_metric_event', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.MetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.orca.mojom.SystemActuatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.orca.mojom.SystemActuatorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.SystemActuator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.orca.mojom.SystemActuatorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.orca.mojom.SystemActuatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  insertText(arg_text) {
    return this.$.insertText(arg_text);
  }
  approveConsent() {
    return this.$.approveConsent();
  }
  declineConsent() {
    return this.$.declineConsent();
  }
  openUrlInNewWindow(arg_url) {
    return this.$.openUrlInNewWindow(arg_url);
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  submitFeedback(arg_description) {
    return this.$.submitFeedback(arg_description);
  }
  onTrigger(arg_trigger_context) {
    return this.$.onTrigger(arg_trigger_context);
  }
  emitMetricEvent(arg_metric_event) {
    return this.$.emitMetricEvent(arg_metric_event);
  }
};

mojo.internal.bindings.ash.orca.mojom.SystemActuatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemActuator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  insertText(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_InsertText_ParamsSpec,
      null,
      [arg_text],
      false);
  }

  approveConsent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  submitFeedback(arg_description) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec,
      null,
      [arg_description],
      false);
  }

  onTrigger(arg_trigger_context) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec,
      null,
      [arg_trigger_context],
      false);
  }

  emitMetricEvent(arg_metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec,
      null,
      [arg_metric_event],
      false);
  }

};

mojo.internal.bindings.ash.orca.mojom.SystemActuator.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.orca.mojom.SystemActuatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.SystemActuator',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.orca.mojom.SystemActuatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemActuator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
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
        
        // Try Method 0: InsertText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_InsertText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertText (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ApproveConsent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApproveConsent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeclineConsent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeclineConsent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenUrlInNewWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInNewWindow (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SubmitFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitFeedback (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnTrigger
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTrigger (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: EmitMetricEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EmitMetricEvent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_InsertText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.arg_text);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.approveConsent');
          const result = this.impl.approveConsent();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.declineConsent');
          const result = this.impl.declineConsent();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInNewWindow');
          const result = this.impl.openUrlInNewWindow(params.arg_url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFeedback');
          const result = this.impl.submitFeedback(params.arg_description);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrigger');
          const result = this.impl.onTrigger(params.arg_trigger_context);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.emitMetricEvent');
          const result = this.impl.emitMetricEvent(params.arg_metric_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.orca.mojom.SystemActuatorReceiver = mojo.internal.bindings.ash.orca.mojom.SystemActuatorReceiver;

mojo.internal.bindings.ash.orca.mojom.SystemActuatorPtr = mojo.internal.bindings.ash.orca.mojom.SystemActuatorRemote;
mojo.internal.bindings.ash.orca.mojom.SystemActuatorRequest = mojo.internal.bindings.ash.orca.mojom.SystemActuatorPendingReceiver;


// Interface: TextQueryProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ParamsSpec, 'ash.orca.mojom.TextQueryProvider_Process_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.TextQueryRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec, 'ash.orca.mojom.TextQueryProvider_Process_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.orca.mojom.TextQueryProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.orca.mojom.TextQueryProviderRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.TextQueryProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.orca.mojom.TextQueryProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.orca.mojom.TextQueryProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  process(arg_request) {
    return this.$.process(arg_request);
  }
};

mojo.internal.bindings.ash.orca.mojom.TextQueryProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextQueryProvider', [
      { explicit: 0 },
    ]);
  }

  process(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ParamsSpec,
      mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec,
      [arg_request],
      false);
  }

};

mojo.internal.bindings.ash.orca.mojom.TextQueryProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.orca.mojom.TextQueryProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.TextQueryProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.orca.mojom.TextQueryProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextQueryProvider', [
      { explicit: 0 },
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
        
        // Try Method 0: Process
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Process (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.process');
          const result = this.impl.process(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Process FAILED:', e));
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

mojo.internal.bindings.ash.orca.mojom.TextQueryProviderReceiver = mojo.internal.bindings.ash.orca.mojom.TextQueryProviderReceiver;

mojo.internal.bindings.ash.orca.mojom.TextQueryProviderPtr = mojo.internal.bindings.ash.orca.mojom.TextQueryProviderRemote;
mojo.internal.bindings.ash.orca.mojom.TextQueryProviderRequest = mojo.internal.bindings.ash.orca.mojom.TextQueryProviderPendingReceiver;


// Interface: OrcaService
mojo.internal.Struct(
    mojo.internal.bindings.ash.orca.mojom.OrcaService_BindEditor_ParamsSpec, 'ash.orca.mojom.OrcaService_BindEditor_Params', [
      mojo.internal.StructField('arg_system_actuator', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_query_provider', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_connector', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_sink', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_editor_config', 32, 0, mojo.internal.bindings.mojo.internal.bindings.ash.orca.mojom.EditorConfigSpec.$, null, true, 9, undefined),
    ],
    [[0, 40], [9, 48]]);

mojo.internal.bindings.ash.orca.mojom.OrcaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.orca.mojom.OrcaServiceRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.OrcaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.orca.mojom.OrcaServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.orca.mojom.OrcaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindEditor(arg_system_actuator, arg_text_query_provider, arg_client_connector, arg_event_sink, arg_editor_config) {
    return this.$.bindEditor(arg_system_actuator, arg_text_query_provider, arg_client_connector, arg_event_sink, arg_editor_config);
  }
};

mojo.internal.bindings.ash.orca.mojom.OrcaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OrcaService', [
      { explicit: 0 },
    ]);
  }

  bindEditor(arg_system_actuator, arg_text_query_provider, arg_client_connector, arg_event_sink, arg_editor_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.orca.mojom.OrcaService_BindEditor_ParamsSpec,
      null,
      [arg_system_actuator, arg_text_query_provider, arg_client_connector, arg_event_sink, arg_editor_config],
      false);
  }

};

mojo.internal.bindings.ash.orca.mojom.OrcaService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.orca.mojom.OrcaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.OrcaService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.orca.mojom.OrcaServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OrcaService', [
      { explicit: 0 },
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
        
        // Try Method 0: BindEditor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.OrcaService_BindEditor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindEditor (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.orca.mojom.OrcaService_BindEditor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindEditor');
          const result = this.impl.bindEditor(params.arg_system_actuator, params.arg_text_query_provider, params.arg_client_connector, params.arg_event_sink, params.arg_editor_config);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.orca.mojom.OrcaServiceReceiver = mojo.internal.bindings.ash.orca.mojom.OrcaServiceReceiver;

mojo.internal.bindings.ash.orca.mojom.OrcaServicePtr = mojo.internal.bindings.ash.orca.mojom.OrcaServiceRemote;
mojo.internal.bindings.ash.orca.mojom.OrcaServiceRequest = mojo.internal.bindings.ash.orca.mojom.OrcaServicePendingReceiver;

