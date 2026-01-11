// Auto-generated MojoJS binding
 // Source: chromium_src/components/attribution_reporting/registration.mojom
 // Module: attribution_reporting.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.attribution_reporting = mojo.internal.bindings.attribution_reporting || {};
mojo.internal.bindings.attribution_reporting.mojom = mojo.internal.bindings.attribution_reporting.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.attribution_reporting.mojom.SuitableOriginSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.FilterDataSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.FilterConfigSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregationKeysSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableTriggerDataSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.DestinationSetSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.EventReportWindowsSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.TriggerDataSetSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableDebugReportingContributionSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableDebugReportingConfigSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AttributionScopesSetSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AttributionScopesDataSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.SourceRegistrationSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.EventTriggerDataSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableDedupKeySpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableValuesValueSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableValuesSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.TriggerRegistrationSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.OsRegistrationItemSpec = { $: {} };
mojo.internal.bindings.attribution_reporting.mojom.OsRegistrationSpec = { $: {} };

// Struct: SuitableOrigin
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.SuitableOriginSpec, 'attribution_reporting.mojom.SuitableOrigin', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilterData
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.FilterDataSpec, 'attribution_reporting.mojom.FilterData', [
      mojo.internal.StructField('arg_filter_values', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilterConfig
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.FilterConfigSpec, 'attribution_reporting.mojom.FilterConfig', [
      mojo.internal.StructField('arg_lookback_window', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_filter_values', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FilterPair
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec, 'attribution_reporting.mojom.FilterPair', [
      mojo.internal.StructField('arg_positive', 0, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.FilterConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_negative', 8, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.FilterConfigSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregationKeys
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregationKeysSpec, 'attribution_reporting.mojom.AggregationKeys', [
      mojo.internal.StructField('arg_keys', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.Uint128Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AggregatableTriggerData
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableTriggerDataSpec, 'attribution_reporting.mojom.AggregatableTriggerData', [
      mojo.internal.StructField('arg_key_piece', 0, 0, mojo.internal.bindings.mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_filters', 16, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DestinationSet
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.DestinationSetSpec, 'attribution_reporting.mojom.DestinationSet', [
      mojo.internal.StructField('arg_destinations', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SchemefulSiteSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EventReportWindows
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.EventReportWindowsSpec, 'attribution_reporting.mojom.EventReportWindows', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_times', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TriggerDataSet
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.TriggerDataSetSpec, 'attribution_reporting.mojom.TriggerDataSet', [
      mojo.internal.StructField('arg_trigger_data', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AggregatableDebugReportingContribution
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableDebugReportingContributionSpec, 'attribution_reporting.mojom.AggregatableDebugReportingContribution', [
      mojo.internal.StructField('arg_key_piece', 0, 0, mojo.internal.bindings.mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableDebugReportingConfig
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableDebugReportingConfigSpec, 'attribution_reporting.mojom.AggregatableDebugReportingConfig', [
      mojo.internal.StructField('arg_key_piece', 0, 0, mojo.internal.bindings.mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_debug_data', 8, 0, mojo.internal.Map(mojo.internal.bindings.attribution_reporting.mojom.DebugDataTypeSpec.$, mojo.internal.bindings.attribution_reporting.mojom.AggregatableDebugReportingContributionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregation_coordinator_origin', 16, 0, mojo.internal.bindings.attribution_reporting.mojom.SuitableOriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SourceAggregatableDebugReportingConfig
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec, 'attribution_reporting.mojom.SourceAggregatableDebugReportingConfig', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.attribution_reporting.mojom.AggregatableDebugReportingConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_budget', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AttributionScopesSet
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AttributionScopesSetSpec, 'attribution_reporting.mojom.AttributionScopesSet', [
      mojo.internal.StructField('arg_scopes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AttributionScopesData
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AttributionScopesDataSpec, 'attribution_reporting.mojom.AttributionScopesData', [
      mojo.internal.StructField('arg_attribution_scopes_set', 0, 0, mojo.internal.bindings.attribution_reporting.mojom.AttributionScopesSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribution_scope_limit', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_event_states', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableNamedBudgetDefs
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec, 'attribution_reporting.mojom.AggregatableNamedBudgetDefs', [
      mojo.internal.StructField('arg_budgets', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SourceRegistration
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.SourceRegistrationSpec, 'attribution_reporting.mojom.SourceRegistration', [
      mojo.internal.StructField('arg_destinations', 0, 0, mojo.internal.bindings.attribution_reporting.mojom.DestinationSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_event_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_expiry', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_data', 24, 0, mojo.internal.bindings.attribution_reporting.mojom.TriggerDataSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_report_windows', 32, 0, mojo.internal.bindings.attribution_reporting.mojom.EventReportWindowsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_report_window', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 48, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_debug_key_$value', 56, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_debug_key_$flag', originalFieldName: 'arg_debug_key' }),
      mojo.internal.StructField('arg_filter_data', 64, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregation_keys', 72, 0, mojo.internal.bindings.attribution_reporting.mojom.AggregationKeysSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_data_matching', 80, 0, mojo.internal.bindings.attribution_reporting.mojom.TriggerDataMatchingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_level_epsilon', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_debug_reporting_config', 96, 0, mojo.internal.bindings.attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_destination_limit_priority', 104, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_attribution_scopes_data', 112, 0, mojo.internal.bindings.attribution_reporting.mojom.AttributionScopesDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_named_budget_defs', 120, 0, mojo.internal.bindings.attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_event_level_reports', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_debug_key_$flag', 132, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_debug_key_$value', originalFieldName: 'arg_debug_key' }),
      mojo.internal.StructField('arg_debug_reporting', 132, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: EventTriggerData
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.EventTriggerDataSpec, 'attribution_reporting.mojom.EventTriggerData', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dedup_key_$value', 16, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_dedup_key_$flag', originalFieldName: 'arg_dedup_key' }),
      mojo.internal.StructField('arg_filters', 24, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dedup_key_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_dedup_key_$value', originalFieldName: 'arg_dedup_key' }),
    ],
    [[0, 48]]);

// Struct: AggregatableDedupKey
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableDedupKeySpec, 'attribution_reporting.mojom.AggregatableDedupKey', [
      mojo.internal.StructField('arg_dedup_key_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_dedup_key_$flag', originalFieldName: 'arg_dedup_key' }),
      mojo.internal.StructField('arg_filters', 8, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dedup_key_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_dedup_key_$value', originalFieldName: 'arg_dedup_key' }),
    ],
    [[0, 32]]);

// Struct: AggregatableValuesValue
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableValuesValueSpec, 'attribution_reporting.mojom.AggregatableValuesValue', [
      mojo.internal.StructField('arg_filtering_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableValues
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableValuesSpec, 'attribution_reporting.mojom.AggregatableValues', [
      mojo.internal.StructField('arg_values', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.attribution_reporting.mojom.AggregatableValuesValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_filters', 8, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableNamedBudgetCandidate
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec, 'attribution_reporting.mojom.AggregatableNamedBudgetCandidate', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_filters', 8, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TriggerRegistration
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.TriggerRegistrationSpec, 'attribution_reporting.mojom.TriggerRegistration', [
      mojo.internal.StructField('arg_event_triggers', 0, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.EventTriggerDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_filters', 8, 0, mojo.internal.bindings.attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_trigger_data', 16, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.AggregatableTriggerDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_values', 24, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.AggregatableValuesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_debug_key_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_debug_key_$flag', originalFieldName: 'arg_debug_key' }),
      mojo.internal.StructField('arg_aggregatable_dedup_keys', 40, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.AggregatableDedupKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregation_coordinator_origin', 48, 0, mojo.internal.bindings.attribution_reporting.mojom.SuitableOriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_registration_time_config', 56, 0, mojo.internal.bindings.attribution_reporting.mojom.SourceRegistrationTimeConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_trigger_context_id', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_debug_reporting_config', 72, 0, mojo.internal.bindings.attribution_reporting.mojom.AggregatableDebugReportingConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribution_scopes', 80, 0, mojo.internal.bindings.attribution_reporting.mojom.AttributionScopesSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_named_budget_candidates', 88, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_debug_key_$flag', 96, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_debug_key_$value', originalFieldName: 'arg_debug_key' }),
      mojo.internal.StructField('arg_debug_reporting', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_aggregatable_filtering_id_max_bytes', 97, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: OsRegistrationItem
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.OsRegistrationItemSpec, 'attribution_reporting.mojom.OsRegistrationItem', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_debug_reporting', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OsRegistration
mojo.internal.Struct(
    mojo.internal.bindings.attribution_reporting.mojom.OsRegistrationSpec, 'attribution_reporting.mojom.OsRegistration', [
      mojo.internal.StructField('arg_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.attribution_reporting.mojom.OsRegistrationItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
