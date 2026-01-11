// Auto-generated MojoJS binding
 // Source: chromium_src/content/browser/attribution_reporting/attribution_internals.mojom
 // Module: attribution_internals.mojom

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
 

 mojo.internal.bindings.attribution_internals = mojo.internal.bindings.attribution_internals || {};
mojo.internal.bindings.attribution_internals.mojom = mojo.internal.bindings.attribution_internals.mojom || {};
mojo.internal.bindings.attribution_reporting = mojo.internal.bindings.attribution_reporting || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.attribution_internals.mojom.AttributabilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.attribution_internals.mojom.WebUIReportDataSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.NetworkStatusSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.ReportStatusSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.SendAggregatableDebugReportResultSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.ReportIDSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUIReportEventLevelDataSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.AggregatableHistogramContributionSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.EmptySpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUIReportSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUIDebugReportSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUIAggregatableDebugReportSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUISourceSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUIRegistrationSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUITriggerSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUISourceRegistrationSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.WebUIOsRegistrationSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer = {};
mojo.internal.bindings.attribution_internals.mojom.Observer.$interfaceName = 'attribution_internals.mojom.Observer';
mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Handler = {};
mojo.internal.bindings.attribution_internals.mojom.Handler.$interfaceName = 'attribution_internals.mojom.Handler';
mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.attribution_internals.mojom.Factory = {};
mojo.internal.bindings.attribution_internals.mojom.Factory.$interfaceName = 'attribution_internals.mojom.Factory';
mojo.internal.bindings.attribution_internals.mojom.Factory_Create_ParamsSpec = { $: {} };

// Enum: Attributability
mojo.internal.bindings.attribution_internals.mojom.Attributability = {
  kAttributable: 0,
  kNoisedNever: 1,
  kNoisedFalsely: 2,
  kReachedEventLevelAttributionLimit: 3,
};

// Union: WebUIReportData
mojo.internal.Union(
    mojo.internal.bindings.attribution_internals.mojom.WebUIReportDataSpec, 'attribution_internals.mojom.WebUIReportData', {
      'arg_event_level_data': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIReportEventLevelDataSpec.$,
        'nullable': false,
      },
      'arg_aggregatable_attribution_data': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkStatus
mojo.internal.Union(
    mojo.internal.bindings.attribution_internals.mojom.NetworkStatusSpec, 'attribution_internals.mojom.NetworkStatus', {
      'arg_http_response_code': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'arg_network_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: ReportStatus
mojo.internal.Union(
    mojo.internal.bindings.attribution_internals.mojom.ReportStatusSpec, 'attribution_internals.mojom.ReportStatus', {
      'arg_pending': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.EmptySpec.$,
        'nullable': false,
      },
      'arg_replaced_by_higher_priority_report': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_prohibited_by_browser_policy': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.EmptySpec.$,
        'nullable': false,
      },
      'arg_expired': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.EmptySpec.$,
        'nullable': false,
      },
      'arg_network_status': {
        'ordinal': 4,
        'type': mojo.internal.bindings.attribution_internals.mojom.NetworkStatusSpec.$,
        'nullable': false,
      },
      'arg_failed_to_assemble': {
        'ordinal': 5,
        'type': mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.EmptySpec.$,
        'nullable': false,
      },
    });

// Union: SendAggregatableDebugReportResult
mojo.internal.Union(
    mojo.internal.bindings.attribution_internals.mojom.SendAggregatableDebugReportResultSpec, 'attribution_internals.mojom.SendAggregatableDebugReportResult', {
      'arg_assembly_failed': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.EmptySpec.$,
        'nullable': false,
      },
      'arg_network_status': {
        'ordinal': 1,
        'type': mojo.internal.bindings.attribution_internals.mojom.NetworkStatusSpec.$,
        'nullable': false,
      },
    });

// Struct: ReportID
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.ReportIDSpec, 'attribution_internals.mojom.ReportID', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebUIReportEventLevelData
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUIReportEventLevelDataSpec, 'attribution_internals.mojom.WebUIReportEventLevelData', [
      mojo.internal.StructField('arg_priority', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_attributed_truthfully', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableHistogramContribution
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.AggregatableHistogramContributionSpec, 'attribution_internals.mojom.AggregatableHistogramContribution', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_filtering_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_value', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebUIReportAggregatableAttributionData
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec, 'attribution_internals.mojom.WebUIReportAggregatableAttributionData', [
      mojo.internal.StructField('arg_contributions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.AggregatableHistogramContributionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregation_coordinator', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_null_report', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Empty
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.EmptySpec, 'attribution_internals.mojom.Empty', [
    ],
    [[0, 8]]);

// Struct: WebUIReport
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUIReportSpec, 'attribution_internals.mojom.WebUIReport', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.ReportIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_time', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_report_time', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_report_body', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 40, 0, mojo.internal.bindings.attribution_internals.mojom.ReportStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 48, 0, mojo.internal.bindings.attribution_internals.mojom.WebUIReportDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: WebUIDebugReport
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUIDebugReportSpec, 'attribution_internals.mojom.WebUIDebugReport', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_body', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 24, 0, mojo.internal.bindings.attribution_internals.mojom.NetworkStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WebUIAggregatableDebugReport
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUIAggregatableDebugReportSpec, 'attribution_internals.mojom.WebUIAggregatableDebugReport', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_body', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_process_result', 24, 0, mojo.internal.bindings.attribution_reporting.mojom.ProcessAggregatableDebugReportResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_send_result', 32, 0, mojo.internal.bindings.attribution_internals.mojom.SendAggregatableDebugReportResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebUISource
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUISourceSpec, 'attribution_internals.mojom.WebUISource', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source_event_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_destinations', 24, 0, mojo.internal.bindings.attribution_reporting.mojom.DestinationSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reporting_origin', 32, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_time', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_expiry_time', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_event_report_windows', 56, 0, mojo.internal.bindings.attribution_reporting.mojom.EventReportWindowsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_data', 64, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_report_window_time', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source_type', 80, 0, mojo.internal.bindings.attribution_reporting.mojom.SourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 88, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_debug_key_$value', 96, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_debug_key_$flag', originalFieldName: 'arg_debug_key' }),
      mojo.internal.StructField('arg_dedup_keys', 104, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_filter_data', 112, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregation_keys', 120, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_dedup_keys', 128, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_data_matching', 136, 0, mojo.internal.bindings.attribution_reporting.mojom.TriggerDataMatchingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_level_epsilon', 144, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_debug_key_piece', 152, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribution_scopes_data_json', 160, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_named_budgets', 168, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_kAttributable', 176, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 184, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 192, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 200, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_event_level_reports', 208, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_remaining_aggregatable_attribution_budget', 212, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_remaining_aggregatable_debug_budget', 216, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_debug_key_$flag', 220, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_debug_key_$value', originalFieldName: 'arg_debug_key' }),
      mojo.internal.StructField('arg_cookie_based_debug_allowed', 220, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 232]]);

// Struct: WebUIRegistration
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUIRegistrationSpec, 'attribution_internals.mojom.WebUIRegistration', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_context_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reporting_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_registration_json', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cleared_debug_key_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_cleared_debug_key_$flag', originalFieldName: 'arg_cleared_debug_key' }),
      mojo.internal.StructField('arg_cleared_debug_key_$flag', 40, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_cleared_debug_key_$value', originalFieldName: 'arg_cleared_debug_key' }),
    ],
    [[0, 56]]);

// Struct: WebUITrigger
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUITriggerSpec, 'attribution_internals.mojom.WebUITrigger', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIRegistrationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_level_result', 8, 0, mojo.internal.bindings.attribution_reporting.mojom.EventLevelResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_result', 16, 0, mojo.internal.bindings.attribution_reporting.mojom.AggregatableResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebUISourceRegistration
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUISourceRegistrationSpec, 'attribution_internals.mojom.WebUISourceRegistration', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIRegistrationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.attribution_reporting.mojom.SourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 16, 0, mojo.internal.bindings.attribution_reporting.mojom.StoreSourceResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebUIOsRegistration
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.WebUIOsRegistrationSpec, 'attribution_internals.mojom.WebUIOsRegistration', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_registration_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_level_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.bindings.attribution_reporting.mojom.RegistrationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 32, 0, mojo.internal.bindings.attribution_reporting.mojom.OsRegistrationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_debug_key_allowed', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_debug_reporting', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: Observer
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec, 'attribution_internals.mojom.Observer_OnSourcesChanged_Params', [
      mojo.internal.StructField('arg_sources', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUISourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec, 'attribution_internals.mojom.Observer_OnReportsChanged_Params', [
      mojo.internal.StructField('arg_reports', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIReportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec, 'attribution_internals.mojom.Observer_OnSourceHandled_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUISourceRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec, 'attribution_internals.mojom.Observer_OnReportHandled_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec, 'attribution_internals.mojom.Observer_OnDebugReportSent_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIDebugReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec, 'attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIAggregatableDebugReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec, 'attribution_internals.mojom.Observer_OnTriggerHandled_Params', [
      mojo.internal.StructField('arg_trigger', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUITriggerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec, 'attribution_internals.mojom.Observer_OnOsRegistration_Params', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.WebUIOsRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec, 'attribution_internals.mojom.Observer_OnDebugModeChanged_Params', [
      mojo.internal.StructField('arg_debug_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.attribution_internals.mojom.ObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.attribution_internals.mojom.ObserverRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Observer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.attribution_internals.mojom.ObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.attribution_internals.mojom.ObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSourcesChanged(arg_sources) {
    return this.$.onSourcesChanged(arg_sources);
  }
  onReportsChanged(arg_reports) {
    return this.$.onReportsChanged(arg_reports);
  }
  onSourceHandled(arg_source) {
    return this.$.onSourceHandled(arg_source);
  }
  onReportHandled(arg_report) {
    return this.$.onReportHandled(arg_report);
  }
  onDebugReportSent(arg_report) {
    return this.$.onDebugReportSent(arg_report);
  }
  onAggregatableDebugReportSent(arg_report) {
    return this.$.onAggregatableDebugReportSent(arg_report);
  }
  onTriggerHandled(arg_trigger) {
    return this.$.onTriggerHandled(arg_trigger);
  }
  onOsRegistration(arg_registration) {
    return this.$.onOsRegistration(arg_registration);
  }
  onDebugModeChanged(arg_debug_mode) {
    return this.$.onDebugModeChanged(arg_debug_mode);
  }
};

mojo.internal.bindings.attribution_internals.mojom.ObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Observer', [
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

  onSourcesChanged(arg_sources) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec,
      null,
      [arg_sources],
      false);
  }

  onReportsChanged(arg_reports) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec,
      null,
      [arg_reports],
      false);
  }

  onSourceHandled(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec,
      null,
      [arg_source],
      false);
  }

  onReportHandled(arg_report) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec,
      null,
      [arg_report],
      false);
  }

  onDebugReportSent(arg_report) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec,
      null,
      [arg_report],
      false);
  }

  onAggregatableDebugReportSent(arg_report) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec,
      null,
      [arg_report],
      false);
  }

  onTriggerHandled(arg_trigger) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec,
      null,
      [arg_trigger],
      false);
  }

  onOsRegistration(arg_registration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec,
      null,
      [arg_registration],
      false);
  }

  onDebugModeChanged(arg_debug_mode) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec,
      null,
      [arg_debug_mode],
      false);
  }

};

mojo.internal.bindings.attribution_internals.mojom.Observer.getRemote = function() {
  let remote = new mojo.internal.bindings.attribution_internals.mojom.ObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Observer',
    'context');
  return remote.$;
};

mojo.internal.bindings.attribution_internals.mojom.ObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Observer', [
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
        
        // Try Method 0: OnSourcesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSourcesChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnReportsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportsChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSourceHandled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSourceHandled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnReportHandled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportHandled (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnDebugReportSent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDebugReportSent (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnAggregatableDebugReportSent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAggregatableDebugReportSent (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnTriggerHandled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTriggerHandled (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnOsRegistration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOsRegistration (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnDebugModeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDebugModeChanged (8)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSourcesChanged');
          const result = this.impl.onSourcesChanged(params.arg_sources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportsChanged');
          const result = this.impl.onReportsChanged(params.arg_reports);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSourceHandled');
          const result = this.impl.onSourceHandled(params.arg_source);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportHandled');
          const result = this.impl.onReportHandled(params.arg_report);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDebugReportSent');
          const result = this.impl.onDebugReportSent(params.arg_report);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAggregatableDebugReportSent');
          const result = this.impl.onAggregatableDebugReportSent(params.arg_report);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTriggerHandled');
          const result = this.impl.onTriggerHandled(params.arg_trigger);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOsRegistration');
          const result = this.impl.onOsRegistration(params.arg_registration);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDebugModeChanged');
          const result = this.impl.onDebugModeChanged(params.arg_debug_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.attribution_internals.mojom.ObserverReceiver = mojo.internal.bindings.attribution_internals.mojom.ObserverReceiver;

mojo.internal.bindings.attribution_internals.mojom.ObserverPtr = mojo.internal.bindings.attribution_internals.mojom.ObserverRemote;
mojo.internal.bindings.attribution_internals.mojom.ObserverRequest = mojo.internal.bindings.attribution_internals.mojom.ObserverPendingReceiver;


// Interface: Handler
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec, 'attribution_internals.mojom.Handler_IsAttributionReportingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec, 'attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParams', [
      mojo.internal.StructField('arg_attribution_support', 0, 0, mojo.internal.bindings.network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ParamsSpec, 'attribution_internals.mojom.Handler_SendReport_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.attribution_internals.mojom.ReportIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ResponseParamsSpec, 'attribution_internals.mojom.Handler_SendReport_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ParamsSpec, 'attribution_internals.mojom.Handler_ClearStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ResponseParamsSpec, 'attribution_internals.mojom.Handler_ClearStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.attribution_internals.mojom.HandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.attribution_internals.mojom.HandlerRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Handler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.attribution_internals.mojom.HandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.attribution_internals.mojom.HandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isAttributionReportingEnabled() {
    return this.$.isAttributionReportingEnabled();
  }
  sendReport(arg_id) {
    return this.$.sendReport(arg_id);
  }
  clearStorage() {
    return this.$.clearStorage();
  }
};

mojo.internal.bindings.attribution_internals.mojom.HandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Handler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  isAttributionReportingEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec,
      mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec,
      [],
      false);
  }

  sendReport(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ParamsSpec,
      mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ResponseParamsSpec,
      [arg_id],
      false);
  }

  clearStorage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ParamsSpec,
      mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.attribution_internals.mojom.Handler.getRemote = function() {
  let remote = new mojo.internal.bindings.attribution_internals.mojom.HandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Handler',
    'context');
  return remote.$;
};

mojo.internal.bindings.attribution_internals.mojom.HandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Handler', [
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
        
        // Try Method 0: IsAttributionReportingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAttributionReportingEnabled (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendReport (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ClearStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearStorage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isAttributionReportingEnabled');
          const result = this.impl.isAttributionReportingEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsAttributionReportingEnabled FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendReport');
          const result = this.impl.sendReport(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.attribution_internals.mojom.Handler_SendReport_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SendReport FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearStorage');
          const result = this.impl.clearStorage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.attribution_internals.mojom.Handler_ClearStorage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearStorage FAILED:', e));
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

mojo.internal.bindings.attribution_internals.mojom.HandlerReceiver = mojo.internal.bindings.attribution_internals.mojom.HandlerReceiver;

mojo.internal.bindings.attribution_internals.mojom.HandlerPtr = mojo.internal.bindings.attribution_internals.mojom.HandlerRemote;
mojo.internal.bindings.attribution_internals.mojom.HandlerRequest = mojo.internal.bindings.attribution_internals.mojom.HandlerPendingReceiver;


// Interface: Factory
mojo.internal.Struct(
    mojo.internal.bindings.attribution_internals.mojom.Factory_Create_ParamsSpec, 'attribution_internals.mojom.Factory_Create_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.attribution_internals.mojom.ObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.attribution_internals.mojom.HandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.attribution_internals.mojom.FactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.attribution_internals.mojom.FactoryRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Factory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.attribution_internals.mojom.FactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.attribution_internals.mojom.FactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  create(arg_observer, arg_handler) {
    return this.$.create(arg_observer, arg_handler);
  }
};

mojo.internal.bindings.attribution_internals.mojom.FactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Factory', [
      { explicit: null },
    ]);
  }

  create(arg_observer, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.attribution_internals.mojom.Factory_Create_ParamsSpec,
      null,
      [arg_observer, arg_handler],
      false);
  }

};

mojo.internal.bindings.attribution_internals.mojom.Factory.getRemote = function() {
  let remote = new mojo.internal.bindings.attribution_internals.mojom.FactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Factory',
    'context');
  return remote.$;
};

mojo.internal.bindings.attribution_internals.mojom.FactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Factory', [
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
        
        // Try Method 0: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Factory_Create_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.attribution_internals.mojom.Factory_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.arg_observer, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.attribution_internals.mojom.FactoryReceiver = mojo.internal.bindings.attribution_internals.mojom.FactoryReceiver;

mojo.internal.bindings.attribution_internals.mojom.FactoryPtr = mojo.internal.bindings.attribution_internals.mojom.FactoryRemote;
mojo.internal.bindings.attribution_internals.mojom.FactoryRequest = mojo.internal.bindings.attribution_internals.mojom.FactoryPendingReceiver;

