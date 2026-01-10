// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/registration.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};
var url = url || {};
var url = url || {};


// Struct: SuitableOrigin
attribution_reporting.mojom.mojom.SuitableOriginSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.SuitableOrigin',
      packedSize: 16,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FilterData
attribution_reporting.mojom.mojom.FilterDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.FilterData',
      packedSize: 16,
      fields: [
        { name: 'filter_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FilterConfig
attribution_reporting.mojom.mojom.FilterConfigSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.FilterConfig',
      packedSize: 24,
      fields: [
        { name: 'lookback_window', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'filter_values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FilterPair
attribution_reporting.mojom.mojom.FilterPairSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.FilterPair',
      packedSize: 24,
      fields: [
        { name: 'positive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.FilterConfigSpec, false), nullable: false, minVersion: 0 },
        { name: 'negative', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.FilterConfigSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AggregationKeys
attribution_reporting.mojom.mojom.AggregationKeysSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregationKeys',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.Uint128Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AggregatableTriggerData
attribution_reporting.mojom.mojom.AggregatableTriggerDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableTriggerData',
      packedSize: 32,
      fields: [
        { name: 'key_piece', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false, minVersion: 0 },
        { name: 'source_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'filters', packedOffset: 16, packedBitOffset: 0, type: attribution_reporting.mojom.FilterPairSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DestinationSet
attribution_reporting.mojom.mojom.DestinationSetSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.DestinationSet',
      packedSize: 16,
      fields: [
        { name: 'destinations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SchemefulSiteSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: EventReportWindows
attribution_reporting.mojom.mojom.EventReportWindowsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.EventReportWindows',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'end_times', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TriggerDataSet
attribution_reporting.mojom.mojom.TriggerDataSetSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.TriggerDataSet',
      packedSize: 16,
      fields: [
        { name: 'trigger_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AggregatableDebugReportingContribution
attribution_reporting.mojom.mojom.AggregatableDebugReportingContributionSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableDebugReportingContribution',
      packedSize: 24,
      fields: [
        { name: 'key_piece', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AggregatableDebugReportingConfig
attribution_reporting.mojom.mojom.AggregatableDebugReportingConfigSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableDebugReportingConfig',
      packedSize: 32,
      fields: [
        { name: 'key_piece', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false, minVersion: 0 },
        { name: 'debug_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(attribution_reporting.mojom.DebugDataTypeSpec, attribution_reporting.mojom.AggregatableDebugReportingContributionSpec, false), nullable: false, minVersion: 0 },
        { name: 'aggregation_coordinator_origin', packedOffset: 16, packedBitOffset: 0, type: attribution_reporting.mojom.SuitableOriginSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SourceAggregatableDebugReportingConfig
attribution_reporting.mojom.mojom.SourceAggregatableDebugReportingConfigSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.SourceAggregatableDebugReportingConfig',
      packedSize: 24,
      fields: [
        { name: 'budget', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: attribution_reporting.mojom.AggregatableDebugReportingConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AttributionScopesSet
attribution_reporting.mojom.mojom.AttributionScopesSetSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AttributionScopesSet',
      packedSize: 16,
      fields: [
        { name: 'scopes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AttributionScopesData
attribution_reporting.mojom.mojom.AttributionScopesDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AttributionScopesData',
      packedSize: 24,
      fields: [
        { name: 'attribution_scopes_set', packedOffset: 0, packedBitOffset: 0, type: attribution_reporting.mojom.AttributionScopesSetSpec, nullable: false, minVersion: 0 },
        { name: 'attribution_scope_limit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_event_states', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AggregatableNamedBudgetDefs
attribution_reporting.mojom.mojom.AggregatableNamedBudgetDefsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableNamedBudgetDefs',
      packedSize: 16,
      fields: [
        { name: 'budgets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Int32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SourceRegistration
attribution_reporting.mojom.mojom.SourceRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.SourceRegistration',
      packedSize: 144,
      fields: [
        { name: 'destinations', packedOffset: 0, packedBitOffset: 0, type: attribution_reporting.mojom.DestinationSetSpec, nullable: false, minVersion: 0 },
        { name: 'source_event_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'expiry', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'trigger_data', packedOffset: 24, packedBitOffset: 0, type: attribution_reporting.mojom.TriggerDataSetSpec, nullable: false, minVersion: 0 },
        { name: 'event_report_windows', packedOffset: 32, packedBitOffset: 0, type: attribution_reporting.mojom.EventReportWindowsSpec, nullable: false, minVersion: 0 },
        { name: 'max_event_level_reports', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'aggregatable_report_window', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'debug_key_$flag', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' } },
        { name: 'debug_key_$value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' } },
        { name: 'filter_data', packedOffset: 64, packedBitOffset: 0, type: attribution_reporting.mojom.FilterDataSpec, nullable: false, minVersion: 0 },
        { name: 'aggregation_keys', packedOffset: 72, packedBitOffset: 0, type: attribution_reporting.mojom.AggregationKeysSpec, nullable: false, minVersion: 0 },
        { name: 'debug_reporting', packedOffset: 128, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'trigger_data_matching', packedOffset: 124, packedBitOffset: 0, type: attribution_reporting.mojom.TriggerDataMatchingSpec, nullable: false, minVersion: 0 },
        { name: 'event_level_epsilon', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'aggregatable_debug_reporting_config', packedOffset: 88, packedBitOffset: 0, type: attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec, nullable: false, minVersion: 0 },
        { name: 'destination_limit_priority', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'attribution_scopes_data', packedOffset: 104, packedBitOffset: 0, type: attribution_reporting.mojom.AttributionScopesDataSpec, nullable: true, minVersion: 0 },
        { name: 'aggregatable_named_budget_defs', packedOffset: 112, packedBitOffset: 0, type: attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 144}]
    }
  }
};

// Struct: EventTriggerData
attribution_reporting.mojom.mojom.EventTriggerDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.EventTriggerData',
      packedSize: 48,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'dedup_key_$flag', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'dedup_key_$value', originalFieldName: 'dedup_key' } },
        { name: 'dedup_key_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'dedup_key_$flag', originalFieldName: 'dedup_key' } },
        { name: 'filters', packedOffset: 24, packedBitOffset: 0, type: attribution_reporting.mojom.FilterPairSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: AggregatableDedupKey
attribution_reporting.mojom.mojom.AggregatableDedupKeySpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableDedupKey',
      packedSize: 32,
      fields: [
        { name: 'dedup_key_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'dedup_key_$value', originalFieldName: 'dedup_key' } },
        { name: 'dedup_key_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'dedup_key_$flag', originalFieldName: 'dedup_key' } },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.FilterPairSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AggregatableValuesValue
attribution_reporting.mojom.mojom.AggregatableValuesValueSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableValuesValue',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'filtering_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AggregatableValues
attribution_reporting.mojom.mojom.AggregatableValuesSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableValues',
      packedSize: 24,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, attribution_reporting.mojom.AggregatableValuesValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.FilterPairSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AggregatableNamedBudgetCandidate
attribution_reporting.mojom.mojom.AggregatableNamedBudgetCandidateSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableNamedBudgetCandidate',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.FilterPairSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TriggerRegistration
attribution_reporting.mojom.mojom.TriggerRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.TriggerRegistration',
      packedSize: 104,
      fields: [
        { name: 'event_triggers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.EventTriggerDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.FilterPairSpec, nullable: false, minVersion: 0 },
        { name: 'aggregatable_trigger_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.AggregatableTriggerDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'aggregatable_values', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.AggregatableValuesSpec, false), nullable: false, minVersion: 0 },
        { name: 'debug_key_$flag', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' } },
        { name: 'debug_key_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' } },
        { name: 'aggregatable_dedup_keys', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.AggregatableDedupKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'debug_reporting', packedOffset: 92, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'aggregation_coordinator_origin', packedOffset: 48, packedBitOffset: 0, type: attribution_reporting.mojom.SuitableOriginSpec, nullable: true, minVersion: 0 },
        { name: 'source_registration_time_config', packedOffset: 88, packedBitOffset: 0, type: attribution_reporting.mojom.SourceRegistrationTimeConfigSpec, nullable: false, minVersion: 0 },
        { name: 'trigger_context_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'aggregatable_filtering_id_max_bytes', packedOffset: 93, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'aggregatable_debug_reporting_config', packedOffset: 64, packedBitOffset: 0, type: attribution_reporting.mojom.AggregatableDebugReportingConfigSpec, nullable: false, minVersion: 0 },
        { name: 'attribution_scopes', packedOffset: 72, packedBitOffset: 0, type: attribution_reporting.mojom.AttributionScopesSetSpec, nullable: false, minVersion: 0 },
        { name: 'aggregatable_named_budget_candidates', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: OsRegistrationItem
attribution_reporting.mojom.mojom.OsRegistrationItemSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.OsRegistrationItem',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'debug_reporting', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OsRegistration
attribution_reporting.mojom.mojom.OsRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.OsRegistration',
      packedSize: 16,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(attribution_reporting.mojom.OsRegistrationItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
