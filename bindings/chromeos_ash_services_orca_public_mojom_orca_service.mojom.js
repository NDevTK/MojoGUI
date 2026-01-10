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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var ash = ash || {};
ash.orca = ash.orca || {};
ash.orca.mojom = ash.orca.mojom || {};
var sandbox = sandbox || {};
var gfx = gfx || {};
var url = url || {};

ash.orca.mojom.PresetTextQueryTypeSpec = { $: mojo.internal.Enum() };
ash.orca.mojom.MetricEventSpec = { $: mojo.internal.Enum() };
ash.orca.mojom.TextQueryErrorCodeSpec = { $: mojo.internal.Enum() };
ash.orca.mojom.TextQueryResponseSpec = { $: {} };
ash.orca.mojom.PresetTextQuerySpec = { $: {} };
ash.orca.mojom.TextQueryRequestSpec = { $: {} };
ash.orca.mojom.TextQueryResultSpec = { $: {} };
ash.orca.mojom.TextQueryErrorSpec = { $: {} };
ash.orca.mojom.SurroundingTextSpec = { $: {} };
ash.orca.mojom.ContextSpec = { $: {} };
ash.orca.mojom.EditorConfigSpec = { $: {} };
ash.orca.mojom.TriggerContextSpec = { $: {} };
ash.orca.mojom.EditorClient = {};
ash.orca.mojom.EditorClient.$interfaceName = 'ash.orca.mojom.EditorClient';
ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_InsertText_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_ShowUI_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_CloseUI_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_AppendText_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec = { $: {} };
ash.orca.mojom.EditorClientConnector = {};
ash.orca.mojom.EditorClientConnector.$interfaceName = 'ash.orca.mojom.EditorClientConnector';
ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec = { $: {} };
ash.orca.mojom.EditorEventSink = {};
ash.orca.mojom.EditorEventSink.$interfaceName = 'ash.orca.mojom.EditorEventSink';
ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator = {};
ash.orca.mojom.SystemActuator.$interfaceName = 'ash.orca.mojom.SystemActuator';
ash.orca.mojom.SystemActuator_InsertText_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec = { $: {} };
ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec = { $: {} };
ash.orca.mojom.TextQueryProvider = {};
ash.orca.mojom.TextQueryProvider.$interfaceName = 'ash.orca.mojom.TextQueryProvider';
ash.orca.mojom.TextQueryProvider_Process_ParamsSpec = { $: {} };
ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec = { $: {} };
ash.orca.mojom.OrcaService = {};
ash.orca.mojom.OrcaService.$interfaceName = 'ash.orca.mojom.OrcaService';
ash.orca.mojom.OrcaService_BindEditor_ParamsSpec = { $: {} };

// Enum: PresetTextQueryType
ash.orca.mojom.PresetTextQueryType = {
  kUnknown: 0,
  kShorten: 1,
  kElaborate: 2,
  kRephrase: 3,
  kFormalize: 4,
  kEmojify: 5,
  MinVersion: 5,
};

// Enum: MetricEvent
ash.orca.mojom.MetricEvent = {
  kUnknown: 0,
  kRefineRequest: 1,
  kFeedbackThumbsUp: 2,
  kFeedbackThumbsDown: 3,
  kReturnToPreviousSuggestions: 4,
  kWebUIRequest: 5,
};

// Enum: TextQueryErrorCode
ash.orca.mojom.TextQueryErrorCode = {
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
    ash.orca.mojom.TextQueryResponseSpec, 'ash.orca.mojom.TextQueryResponse', {
      'results': {
        'ordinal': 0,
        'type': mojo.internal.Array(ash.orca.mojom.TextQueryResultSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.orca.mojom.TextQueryErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: PresetTextQuery
mojo.internal.Struct(
    ash.orca.mojom.PresetTextQuerySpec, 'ash.orca.mojom.PresetTextQuery', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, ash.orca.mojom.PresetTextQueryTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TextQueryRequest
mojo.internal.Struct(
    ash.orca.mojom.TextQueryRequestSpec, 'ash.orca.mojom.TextQueryRequest', [
      mojo.internal.StructField('text_query_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parameters', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextQueryResult
mojo.internal.Struct(
    ash.orca.mojom.TextQueryResultSpec, 'ash.orca.mojom.TextQueryResult', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextQueryError
mojo.internal.Struct(
    ash.orca.mojom.TextQueryErrorSpec, 'ash.orca.mojom.TextQueryError', [
      mojo.internal.StructField('code', 0, 0, ash.orca.mojom.TextQueryErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SurroundingText
mojo.internal.Struct(
    ash.orca.mojom.SurroundingTextSpec, 'ash.orca.mojom.SurroundingText', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Context
mojo.internal.Struct(
    ash.orca.mojom.ContextSpec, 'ash.orca.mojom.Context', [
      mojo.internal.StructField('surrounding_text', 0, 0, ash.orca.mojom.SurroundingTextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EditorConfig
mojo.internal.Struct(
    ash.orca.mojom.EditorConfigSpec, 'ash.orca.mojom.EditorConfig', [
      mojo.internal.StructField('allowed_query_types', 0, 0, mojo.internal.Array(ash.orca.mojom.PresetTextQueryTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('language_code', 8, 0, mojo.internal.String, null, true, 12, undefined),
    ],
    [[0, 16], [12, 24]]);

// Struct: TriggerContext
mojo.internal.Struct(
    ash.orca.mojom.TriggerContextSpec, 'ash.orca.mojom.TriggerContext', [
      mojo.internal.StructField('preset_type_selected', 0, 0, ash.orca.mojom.PresetTextQueryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('freeform_selected', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: EditorClient
mojo.internal.Struct(
    ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec, 'ash.orca.mojom.EditorClient_GetPresetTextQueries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParams', [
      mojo.internal.StructField('text_queries', 0, 0, mojo.internal.Array(ash.orca.mojom.PresetTextQuerySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestPresetRewrite_Params', [
      mojo.internal.StructField('text_query_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_override', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformRewrite_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_override', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformWrite_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_InsertText_ParamsSpec, 'ash.orca.mojom.EditorClient_InsertText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_ApproveConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_DeclineConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec, 'ash.orca.mojom.EditorClient_DismissConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec, 'ash.orca.mojom.EditorClient_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_ShowUI_ParamsSpec, 'ash.orca.mojom.EditorClient_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_CloseUI_ParamsSpec, 'ash.orca.mojom.EditorClient_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_AppendText_ParamsSpec, 'ash.orca.mojom.EditorClient_AppendText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec, 'ash.orca.mojom.EditorClient_PreviewFeedback_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec, 'ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParams', [
      mojo.internal.StructField('preview', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec, 'ash.orca.mojom.EditorClient_SubmitFeedback_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec, 'ash.orca.mojom.EditorClient_OnTrigger_Params', [
      mojo.internal.StructField('trigger_context', 0, 0, ash.orca.mojom.TriggerContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec, 'ash.orca.mojom.EditorClient_EmitMetricEvent_Params', [
      mojo.internal.StructField('metric_event', 0, 0, ash.orca.mojom.MetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.EditorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorClientRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorClientPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorClientRemoteCallHandler = class {
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
      ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec,
      ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec,
      [],
      false);
  }

  requestPresetRewrite(text_query_id, text_override) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec,
      [text_query_id, text_override],
      false);
  }

  requestFreeformRewrite(input, text_override) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec,
      [input, text_override],
      false);
  }

  requestFreeformWrite(input) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec,
      ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec,
      [input],
      false);
  }

  insertText(text) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.orca.mojom.EditorClient_InsertText_ParamsSpec,
      null,
      [text],
      false);
  }

  approveConsent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  dismissConsent() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.orca.mojom.EditorClient_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.orca.mojom.EditorClient_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  appendText(text) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.orca.mojom.EditorClient_AppendText_ParamsSpec,
      null,
      [text],
      false);
  }

  previewFeedback(result_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec,
      ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec,
      [result_id],
      false);
  }

  submitFeedback(result_id, user_description) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec,
      null,
      [result_id, user_description],
      false);
  }

  onTrigger(trigger_context) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec,
      null,
      [trigger_context],
      false);
  }

  emitMetricEvent(metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event],
      false);
  }

};

ash.orca.mojom.EditorClient.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClient',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorClientReceiver = class {
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_InsertText_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_ShowUI_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_CloseUI_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_AppendText_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_GetPresetTextQueries_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPresetTextQueries');
          const result = this.impl.getPresetTextQueries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_GetPresetTextQueries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestPresetRewrite_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPresetRewrite');
          const result = this.impl.requestPresetRewrite(params.text_query_id, params.text_override);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_RequestPresetRewrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformRewrite_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestFreeformRewrite');
          const result = this.impl.requestFreeformRewrite(params.input, params.text_override);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_RequestFreeformRewrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_RequestFreeformWrite_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestFreeformWrite');
          const result = this.impl.requestFreeformWrite(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_RequestFreeformWrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_InsertText_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.text);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_ApproveConsent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.approveConsent');
          const result = this.impl.approveConsent();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_DeclineConsent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.declineConsent');
          const result = this.impl.declineConsent();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_DismissConsent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dismissConsent');
          const result = this.impl.dismissConsent();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_OpenUrlInNewWindow_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInNewWindow');
          const result = this.impl.openUrlInNewWindow(params.url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_ShowUI_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_CloseUI_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_AppendText_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.appendText');
          const result = this.impl.appendText(params.text);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_PreviewFeedback_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.previewFeedback');
          const result = this.impl.previewFeedback(params.result_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.EditorClient_PreviewFeedback_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_SubmitFeedback_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFeedback');
          const result = this.impl.submitFeedback(params.result_id, params.user_description);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_OnTrigger_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrigger');
          const result = this.impl.onTrigger(params.trigger_context);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClient_EmitMetricEvent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.emitMetricEvent');
          const result = this.impl.emitMetricEvent(params.metric_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.orca.mojom.EditorClientReceiver = ash.orca.mojom.EditorClientReceiver;

ash.orca.mojom.EditorClientPtr = ash.orca.mojom.EditorClientRemote;
ash.orca.mojom.EditorClientRequest = ash.orca.mojom.EditorClientPendingReceiver;


// Interface: EditorClientConnector
mojo.internal.Struct(
    ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec, 'ash.orca.mojom.EditorClientConnector_BindEditorClient_Params', [
      mojo.internal.StructField('editor_client', 0, 0, mojo.internal.InterfaceRequest(ash.orca.mojom.EditorClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.EditorClientConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorClientConnectorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClientConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorClientConnectorPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorClientConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorClientConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorClientConnector', [
      { explicit: 0 },
    ]);
  }

  bindEditorClient(editor_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec,
      null,
      [editor_client],
      false);
  }

};

ash.orca.mojom.EditorClientConnector.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClientConnector',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorClientConnectorReceiver = class {
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
             decoder.decodeStructInline(ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorClientConnector_BindEditorClient_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindEditorClient');
          const result = this.impl.bindEditorClient(params.editor_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.orca.mojom.EditorClientConnectorReceiver = ash.orca.mojom.EditorClientConnectorReceiver;

ash.orca.mojom.EditorClientConnectorPtr = ash.orca.mojom.EditorClientConnectorRemote;
ash.orca.mojom.EditorClientConnectorRequest = ash.orca.mojom.EditorClientConnectorPendingReceiver;


// Interface: EditorEventSink
mojo.internal.Struct(
    ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec, 'ash.orca.mojom.EditorEventSink_OnContextUpdated_Params', [
      mojo.internal.StructField('context', 0, 0, ash.orca.mojom.ContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.EditorEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorEventSinkRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorEventSinkPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EditorEventSink', [
      { explicit: 0 },
    ]);
  }

  onContextUpdated(context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec,
      null,
      [context],
      false);
  }

};

ash.orca.mojom.EditorEventSink.getRemote = function() {
  let remote = new ash.orca.mojom.EditorEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorEventSink',
    'context');
  return remote.$;
};

ash.orca.mojom.EditorEventSinkReceiver = class {
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
             decoder.decodeStructInline(ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.orca.mojom.EditorEventSink_OnContextUpdated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUpdated');
          const result = this.impl.onContextUpdated(params.context);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.orca.mojom.EditorEventSinkReceiver = ash.orca.mojom.EditorEventSinkReceiver;

ash.orca.mojom.EditorEventSinkPtr = ash.orca.mojom.EditorEventSinkRemote;
ash.orca.mojom.EditorEventSinkRequest = ash.orca.mojom.EditorEventSinkPendingReceiver;


// Interface: SystemActuator
mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_InsertText_ParamsSpec, 'ash.orca.mojom.SystemActuator_InsertText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec, 'ash.orca.mojom.SystemActuator_ApproveConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec, 'ash.orca.mojom.SystemActuator_DeclineConsent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec, 'ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec, 'ash.orca.mojom.SystemActuator_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec, 'ash.orca.mojom.SystemActuator_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec, 'ash.orca.mojom.SystemActuator_SubmitFeedback_Params', [
      mojo.internal.StructField('description', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec, 'ash.orca.mojom.SystemActuator_OnTrigger_Params', [
      mojo.internal.StructField('trigger_context', 0, 0, ash.orca.mojom.TriggerContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec, 'ash.orca.mojom.SystemActuator_EmitMetricEvent_Params', [
      mojo.internal.StructField('metric_event', 0, 0, ash.orca.mojom.MetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.SystemActuatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.SystemActuatorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.SystemActuator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.SystemActuatorPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.SystemActuatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.SystemActuatorRemoteCallHandler = class {
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

  insertText(text) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.SystemActuator_InsertText_ParamsSpec,
      null,
      [text],
      false);
  }

  approveConsent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec,
      null,
      [],
      false);
  }

  declineConsent() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInNewWindow(url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  submitFeedback(description) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec,
      null,
      [description],
      false);
  }

  onTrigger(trigger_context) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec,
      null,
      [trigger_context],
      false);
  }

  emitMetricEvent(metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event],
      false);
  }

};

ash.orca.mojom.SystemActuator.getRemote = function() {
  let remote = new ash.orca.mojom.SystemActuatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.SystemActuator',
    'context');
  return remote.$;
};

ash.orca.mojom.SystemActuatorReceiver = class {
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_InsertText_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec);
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
             decoder.decodeStructInline(ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_InsertText_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.text);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ApproveConsent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.approveConsent');
          const result = this.impl.approveConsent();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_DeclineConsent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.declineConsent');
          const result = this.impl.declineConsent();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OpenUrlInNewWindow_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInNewWindow');
          const result = this.impl.openUrlInNewWindow(params.url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_ShowUI_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_CloseUI_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_SubmitFeedback_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFeedback');
          const result = this.impl.submitFeedback(params.description);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_OnTrigger_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrigger');
          const result = this.impl.onTrigger(params.trigger_context);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.orca.mojom.SystemActuator_EmitMetricEvent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.emitMetricEvent');
          const result = this.impl.emitMetricEvent(params.metric_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.orca.mojom.SystemActuatorReceiver = ash.orca.mojom.SystemActuatorReceiver;

ash.orca.mojom.SystemActuatorPtr = ash.orca.mojom.SystemActuatorRemote;
ash.orca.mojom.SystemActuatorRequest = ash.orca.mojom.SystemActuatorPendingReceiver;


// Interface: TextQueryProvider
mojo.internal.Struct(
    ash.orca.mojom.TextQueryProvider_Process_ParamsSpec, 'ash.orca.mojom.TextQueryProvider_Process_Params', [
      mojo.internal.StructField('request', 0, 0, ash.orca.mojom.TextQueryRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec, 'ash.orca.mojom.TextQueryProvider_Process_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.orca.mojom.TextQueryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.orca.mojom.TextQueryProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.TextQueryProviderRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.TextQueryProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.TextQueryProviderPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.TextQueryProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.TextQueryProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextQueryProvider', [
      { explicit: 0 },
    ]);
  }

  process(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.TextQueryProvider_Process_ParamsSpec,
      ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec,
      [request],
      false);
  }

};

ash.orca.mojom.TextQueryProvider.getRemote = function() {
  let remote = new ash.orca.mojom.TextQueryProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.TextQueryProvider',
    'context');
  return remote.$;
};

ash.orca.mojom.TextQueryProviderReceiver = class {
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
             decoder.decodeStructInline(ash.orca.mojom.TextQueryProvider_Process_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.orca.mojom.TextQueryProvider_Process_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.process');
          const result = this.impl.process(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.orca.mojom.TextQueryProvider_Process_ResponseParamsSpec);
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

ash.orca.mojom.TextQueryProviderReceiver = ash.orca.mojom.TextQueryProviderReceiver;

ash.orca.mojom.TextQueryProviderPtr = ash.orca.mojom.TextQueryProviderRemote;
ash.orca.mojom.TextQueryProviderRequest = ash.orca.mojom.TextQueryProviderPendingReceiver;


// Interface: OrcaService
mojo.internal.Struct(
    ash.orca.mojom.OrcaService_BindEditor_ParamsSpec, 'ash.orca.mojom.OrcaService_BindEditor_Params', [
      mojo.internal.StructField('system_actuator', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('text_query_provider', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client_connector', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('event_sink', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('editor_config', 32, 0, ash.orca.mojom.EditorConfigSpec.$, null, true, 9, undefined),
    ],
    [[0, 40], [9, 48]]);

ash.orca.mojom.OrcaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.OrcaServiceRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.OrcaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.OrcaServicePendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.OrcaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.OrcaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OrcaService', [
      { explicit: 0 },
    ]);
  }

  bindEditor(system_actuator, text_query_provider, client_connector, event_sink, editor_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.orca.mojom.OrcaService_BindEditor_ParamsSpec,
      null,
      [system_actuator, text_query_provider, client_connector, event_sink, editor_config],
      false);
  }

};

ash.orca.mojom.OrcaService.getRemote = function() {
  let remote = new ash.orca.mojom.OrcaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.OrcaService',
    'context');
  return remote.$;
};

ash.orca.mojom.OrcaServiceReceiver = class {
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
             decoder.decodeStructInline(ash.orca.mojom.OrcaService_BindEditor_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.orca.mojom.OrcaService_BindEditor_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindEditor');
          const result = this.impl.bindEditor(params.system_actuator, params.text_query_provider, params.client_connector, params.event_sink, params.editor_config);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.orca.mojom.OrcaServiceReceiver = ash.orca.mojom.OrcaServiceReceiver;

ash.orca.mojom.OrcaServicePtr = ash.orca.mojom.OrcaServiceRemote;
ash.orca.mojom.OrcaServiceRequest = ash.orca.mojom.OrcaServicePendingReceiver;

