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
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

attribution_reporting.mojom.SuitableOriginSpec = { $: {} };
attribution_reporting.mojom.FilterDataSpec = { $: {} };
attribution_reporting.mojom.FilterConfigSpec = { $: {} };
attribution_reporting.mojom.FilterPairSpec = { $: {} };
attribution_reporting.mojom.AggregationKeysSpec = { $: {} };
attribution_reporting.mojom.AggregatableTriggerDataSpec = { $: {} };
attribution_reporting.mojom.DestinationSetSpec = { $: {} };
attribution_reporting.mojom.EventReportWindowsSpec = { $: {} };
attribution_reporting.mojom.TriggerDataSetSpec = { $: {} };
attribution_reporting.mojom.AggregatableDebugReportingContributionSpec = { $: {} };
attribution_reporting.mojom.AggregatableDebugReportingConfigSpec = { $: {} };
attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec = { $: {} };
attribution_reporting.mojom.AttributionScopesSetSpec = { $: {} };
attribution_reporting.mojom.AttributionScopesDataSpec = { $: {} };
attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec = { $: {} };
attribution_reporting.mojom.SourceRegistrationSpec = { $: {} };
attribution_reporting.mojom.EventTriggerDataSpec = { $: {} };
attribution_reporting.mojom.AggregatableDedupKeySpec = { $: {} };
attribution_reporting.mojom.AggregatableValuesValueSpec = { $: {} };
attribution_reporting.mojom.AggregatableValuesSpec = { $: {} };
attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec = { $: {} };
attribution_reporting.mojom.TriggerRegistrationSpec = { $: {} };
attribution_reporting.mojom.OsRegistrationItemSpec = { $: {} };
attribution_reporting.mojom.OsRegistrationSpec = { $: {} };

// Struct: SuitableOrigin
mojo.internal.Struct(
    attribution_reporting.mojom.SuitableOriginSpec, 'attribution_reporting.mojom.SuitableOrigin', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilterData
mojo.internal.Struct(
    attribution_reporting.mojom.FilterDataSpec, 'attribution_reporting.mojom.FilterData', [
      mojo.internal.StructField('filter_values', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilterConfig
mojo.internal.Struct(
    attribution_reporting.mojom.FilterConfigSpec, 'attribution_reporting.mojom.FilterConfig', [
      mojo.internal.StructField('lookback_window', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('filter_values', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FilterPair
mojo.internal.Struct(
    attribution_reporting.mojom.FilterPairSpec, 'attribution_reporting.mojom.FilterPair', [
      mojo.internal.StructField('positive', 0, 0, mojo.internal.Array(attribution_reporting.mojom.FilterConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('negative', 8, 0, mojo.internal.Array(attribution_reporting.mojom.FilterConfigSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregationKeys
mojo.internal.Struct(
    attribution_reporting.mojom.AggregationKeysSpec, 'attribution_reporting.mojom.AggregationKeys', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.Uint128Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AggregatableTriggerData
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableTriggerDataSpec, 'attribution_reporting.mojom.AggregatableTriggerData', [
      mojo.internal.StructField('key_piece', 0, 0, mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('filters', 16, 0, attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DestinationSet
mojo.internal.Struct(
    attribution_reporting.mojom.DestinationSetSpec, 'attribution_reporting.mojom.DestinationSet', [
      mojo.internal.StructField('destinations', 0, 0, mojo.internal.Array(network.mojom.SchemefulSiteSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EventReportWindows
mojo.internal.Struct(
    attribution_reporting.mojom.EventReportWindowsSpec, 'attribution_reporting.mojom.EventReportWindows', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_times', 8, 0, mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TriggerDataSet
mojo.internal.Struct(
    attribution_reporting.mojom.TriggerDataSetSpec, 'attribution_reporting.mojom.TriggerDataSet', [
      mojo.internal.StructField('trigger_data', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AggregatableDebugReportingContribution
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableDebugReportingContributionSpec, 'attribution_reporting.mojom.AggregatableDebugReportingContribution', [
      mojo.internal.StructField('key_piece', 0, 0, mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableDebugReportingConfig
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableDebugReportingConfigSpec, 'attribution_reporting.mojom.AggregatableDebugReportingConfig', [
      mojo.internal.StructField('key_piece', 0, 0, mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_data', 8, 0, mojo.internal.Map(attribution_reporting.mojom.DebugDataTypeSpec.$, attribution_reporting.mojom.AggregatableDebugReportingContributionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator_origin', 16, 0, attribution_reporting.mojom.SuitableOriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SourceAggregatableDebugReportingConfig
mojo.internal.Struct(
    attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec, 'attribution_reporting.mojom.SourceAggregatableDebugReportingConfig', [
      mojo.internal.StructField('config', 0, 0, attribution_reporting.mojom.AggregatableDebugReportingConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('budget', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AttributionScopesSet
mojo.internal.Struct(
    attribution_reporting.mojom.AttributionScopesSetSpec, 'attribution_reporting.mojom.AttributionScopesSet', [
      mojo.internal.StructField('scopes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AttributionScopesData
mojo.internal.Struct(
    attribution_reporting.mojom.AttributionScopesDataSpec, 'attribution_reporting.mojom.AttributionScopesData', [
      mojo.internal.StructField('attribution_scopes_set', 0, 0, attribution_reporting.mojom.AttributionScopesSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution_scope_limit', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_event_states', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableNamedBudgetDefs
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec, 'attribution_reporting.mojom.AggregatableNamedBudgetDefs', [
      mojo.internal.StructField('budgets', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SourceRegistration
mojo.internal.Struct(
    attribution_reporting.mojom.SourceRegistrationSpec, 'attribution_reporting.mojom.SourceRegistration', [
      mojo.internal.StructField('destinations', 0, 0, attribution_reporting.mojom.DestinationSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_event_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expiry', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger_data', 24, 0, attribution_reporting.mojom.TriggerDataSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_report_windows', 32, 0, attribution_reporting.mojom.EventReportWindowsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_report_window', 40, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 48, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('debug_key_$value', 56, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('filter_data', 64, 0, attribution_reporting.mojom.FilterDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aggregation_keys', 72, 0, attribution_reporting.mojom.AggregationKeysSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger_data_matching', 80, 0, attribution_reporting.mojom.TriggerDataMatchingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_level_epsilon', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('aggregatable_debug_reporting_config', 96, 0, attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination_limit_priority', 104, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('attribution_scopes_data', 112, 0, attribution_reporting.mojom.AttributionScopesDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('aggregatable_named_budget_defs', 120, 0, attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_event_level_reports', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('debug_key_$flag', 132, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('debug_reporting', 132, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: EventTriggerData
mojo.internal.Struct(
    attribution_reporting.mojom.EventTriggerDataSpec, 'attribution_reporting.mojom.EventTriggerData', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('dedup_key_$value', 16, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'dedup_key_$flag', originalFieldName: 'dedup_key' }),
      mojo.internal.StructField('filters', 24, 0, attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dedup_key_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'dedup_key_$value', originalFieldName: 'dedup_key' }),
    ],
    [[0, 48]]);

// Struct: AggregatableDedupKey
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableDedupKeySpec, 'attribution_reporting.mojom.AggregatableDedupKey', [
      mojo.internal.StructField('dedup_key_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'dedup_key_$flag', originalFieldName: 'dedup_key' }),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dedup_key_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'dedup_key_$value', originalFieldName: 'dedup_key' }),
    ],
    [[0, 32]]);

// Struct: AggregatableValuesValue
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableValuesValueSpec, 'attribution_reporting.mojom.AggregatableValuesValue', [
      mojo.internal.StructField('filtering_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableValues
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableValuesSpec, 'attribution_reporting.mojom.AggregatableValues', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.String, attribution_reporting.mojom.AggregatableValuesValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableNamedBudgetCandidate
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec, 'attribution_reporting.mojom.AggregatableNamedBudgetCandidate', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TriggerRegistration
mojo.internal.Struct(
    attribution_reporting.mojom.TriggerRegistrationSpec, 'attribution_reporting.mojom.TriggerRegistration', [
      mojo.internal.StructField('event_triggers', 0, 0, mojo.internal.Array(attribution_reporting.mojom.EventTriggerDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_trigger_data', 16, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableTriggerDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_values', 24, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableValuesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('debug_key_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('aggregatable_dedup_keys', 40, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableDedupKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator_origin', 48, 0, attribution_reporting.mojom.SuitableOriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_registration_time_config', 56, 0, attribution_reporting.mojom.SourceRegistrationTimeConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger_context_id', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('aggregatable_debug_reporting_config', 72, 0, attribution_reporting.mojom.AggregatableDebugReportingConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribution_scopes', 80, 0, attribution_reporting.mojom.AttributionScopesSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_named_budget_candidates', 88, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('debug_key_$flag', 96, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('debug_reporting', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('aggregatable_filtering_id_max_bytes', 97, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: OsRegistrationItem
mojo.internal.Struct(
    attribution_reporting.mojom.OsRegistrationItemSpec, 'attribution_reporting.mojom.OsRegistrationItem', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_reporting', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OsRegistration
mojo.internal.Struct(
    attribution_reporting.mojom.OsRegistrationSpec, 'attribution_reporting.mojom.OsRegistration', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(attribution_reporting.mojom.OsRegistrationItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
