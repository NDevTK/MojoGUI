// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/registration.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};
var components = components || {};
var components = components || {};
var components = components || {};
var services = services || {};
var url = url || {};
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
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('lookback_window', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('filter_values', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FilterPair
mojo.internal.Struct(
    attribution_reporting.mojom.FilterPairSpec, 'attribution_reporting.mojom.FilterPair', [
      mojo.internal.StructField('positive', 0, 0, mojo.internal.Array(attribution_reporting.mojom.FilterConfigSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('negative', 8, 0, mojo.internal.Array(attribution_reporting.mojom.FilterConfigSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregationKeys
mojo.internal.Struct(
    attribution_reporting.mojom.AggregationKeysSpec, 'attribution_reporting.mojom.AggregationKeys', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.Uint128Spec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AggregatableTriggerData
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableTriggerDataSpec, 'attribution_reporting.mojom.AggregatableTriggerData', [
      mojo.internal.StructField('key_piece', 0, 0, mojo_base.mojom.Uint128Spec, null, false, 0, undefined),
      mojo.internal.StructField('source_keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('filters', 16, 0, attribution_reporting.mojom.FilterPairSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DestinationSet
mojo.internal.Struct(
    attribution_reporting.mojom.DestinationSetSpec, 'attribution_reporting.mojom.DestinationSet', [
      mojo.internal.StructField('destinations', 0, 0, mojo.internal.Array(network.mojom.SchemefulSiteSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EventReportWindows
mojo.internal.Struct(
    attribution_reporting.mojom.EventReportWindowsSpec, 'attribution_reporting.mojom.EventReportWindows', [
      mojo.internal.StructField('start_time', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('end_times', 8, 0, mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('key_piece', 0, 0, mojo_base.mojom.Uint128Spec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableDebugReportingConfig
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableDebugReportingConfigSpec, 'attribution_reporting.mojom.AggregatableDebugReportingConfig', [
      mojo.internal.StructField('key_piece', 0, 0, mojo_base.mojom.Uint128Spec, null, false, 0, undefined),
      mojo.internal.StructField('debug_data', 8, 0, mojo.internal.Map(attribution_reporting.mojom.DebugDataTypeSpec, attribution_reporting.mojom.AggregatableDebugReportingContributionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator_origin', 16, 0, attribution_reporting.mojom.SuitableOriginSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SourceAggregatableDebugReportingConfig
mojo.internal.Struct(
    attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec, 'attribution_reporting.mojom.SourceAggregatableDebugReportingConfig', [
      mojo.internal.StructField('budget', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('config', 0, 0, attribution_reporting.mojom.AggregatableDebugReportingConfigSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('attribution_scopes_set', 0, 0, attribution_reporting.mojom.AttributionScopesSetSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('destinations', 0, 0, attribution_reporting.mojom.DestinationSetSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_event_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expiry', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('trigger_data', 24, 0, attribution_reporting.mojom.TriggerDataSetSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_report_windows', 32, 0, attribution_reporting.mojom.EventReportWindowsSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_event_level_reports', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('aggregatable_report_window', 40, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('priority', 48, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('debug_key_$flag', 128, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('debug_key_$value', 56, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('filter_data', 64, 0, attribution_reporting.mojom.FilterDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('aggregation_keys', 72, 0, attribution_reporting.mojom.AggregationKeysSpec, null, false, 0, undefined),
      mojo.internal.StructField('debug_reporting', 128, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('trigger_data_matching', 124, 0, attribution_reporting.mojom.TriggerDataMatchingSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_level_epsilon', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('aggregatable_debug_reporting_config', 88, 0, attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('destination_limit_priority', 96, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('attribution_scopes_data', 104, 0, attribution_reporting.mojom.AttributionScopesDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('aggregatable_named_budget_defs', 112, 0, attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec, null, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: EventTriggerData
mojo.internal.Struct(
    attribution_reporting.mojom.EventTriggerDataSpec, 'attribution_reporting.mojom.EventTriggerData', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('dedup_key_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'dedup_key_$value', originalFieldName: 'dedup_key' }),
      mojo.internal.StructField('dedup_key_$value', 16, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'dedup_key_$flag', originalFieldName: 'dedup_key' }),
      mojo.internal.StructField('filters', 24, 0, attribution_reporting.mojom.FilterPairSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AggregatableDedupKey
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableDedupKeySpec, 'attribution_reporting.mojom.AggregatableDedupKey', [
      mojo.internal.StructField('dedup_key_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'dedup_key_$value', originalFieldName: 'dedup_key' }),
      mojo.internal.StructField('dedup_key_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'dedup_key_$flag', originalFieldName: 'dedup_key' }),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AggregatableValuesValue
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableValuesValueSpec, 'attribution_reporting.mojom.AggregatableValuesValue', [
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('filtering_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableValues
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableValuesSpec, 'attribution_reporting.mojom.AggregatableValues', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.String, attribution_reporting.mojom.AggregatableValuesValueSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableNamedBudgetCandidate
mojo.internal.Struct(
    attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec, 'attribution_reporting.mojom.AggregatableNamedBudgetCandidate', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TriggerRegistration
mojo.internal.Struct(
    attribution_reporting.mojom.TriggerRegistrationSpec, 'attribution_reporting.mojom.TriggerRegistration', [
      mojo.internal.StructField('event_triggers', 0, 0, mojo.internal.Array(attribution_reporting.mojom.EventTriggerDataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('filters', 8, 0, attribution_reporting.mojom.FilterPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_trigger_data', 16, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableTriggerDataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_values', 24, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableValuesSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('debug_key_$flag', 92, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('debug_key_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('aggregatable_dedup_keys', 40, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableDedupKeySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('debug_reporting', 92, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator_origin', 48, 0, attribution_reporting.mojom.SuitableOriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('source_registration_time_config', 88, 0, attribution_reporting.mojom.SourceRegistrationTimeConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('trigger_context_id', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('aggregatable_filtering_id_max_bytes', 93, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('aggregatable_debug_reporting_config', 64, 0, attribution_reporting.mojom.AggregatableDebugReportingConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('attribution_scopes', 72, 0, attribution_reporting.mojom.AttributionScopesSetSpec, null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_named_budget_candidates', 80, 0, mojo.internal.Array(attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec, false), null, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: OsRegistrationItem
mojo.internal.Struct(
    attribution_reporting.mojom.OsRegistrationItemSpec, 'attribution_reporting.mojom.OsRegistrationItem', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('debug_reporting', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OsRegistration
mojo.internal.Struct(
    attribution_reporting.mojom.OsRegistrationSpec, 'attribution_reporting.mojom.OsRegistration', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(attribution_reporting.mojom.OsRegistrationItemSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
