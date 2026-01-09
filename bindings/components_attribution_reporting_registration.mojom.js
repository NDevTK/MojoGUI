// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/registration.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Struct: SuitableOrigin
attribution_reporting.mojom.SuitableOriginSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.SuitableOrigin',
      packedSize: 16,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FilterData
attribution_reporting.mojom.FilterDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.FilterData',
      packedSize: 16,
      fields: [
        { name: 'filter_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FilterConfig
attribution_reporting.mojom.FilterConfigSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.FilterConfig',
      packedSize: 24,
      fields: [
        { name: 'lookback_window', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'filter_values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FilterPair
attribution_reporting.mojom.FilterPairSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.FilterPair',
      packedSize: 24,
      fields: [
        { name: 'positive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'negative', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregationKeys
attribution_reporting.mojom.AggregationKeysSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregationKeys',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableTriggerData
attribution_reporting.mojom.AggregatableTriggerDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableTriggerData',
      packedSize: 32,
      fields: [
        { name: 'key_piece', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'filters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DestinationSet
attribution_reporting.mojom.DestinationSetSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.DestinationSet',
      packedSize: 16,
      fields: [
        { name: 'destinations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EventReportWindows
attribution_reporting.mojom.EventReportWindowsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.EventReportWindows',
      packedSize: 24,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'end_times', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TriggerDataSet
attribution_reporting.mojom.TriggerDataSetSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.TriggerDataSet',
      packedSize: 16,
      fields: [
        { name: 'trigger_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableDebugReportingContribution
attribution_reporting.mojom.AggregatableDebugReportingContributionSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableDebugReportingContribution',
      packedSize: 24,
      fields: [
        { name: 'key_piece', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableDebugReportingConfig
attribution_reporting.mojom.AggregatableDebugReportingConfigSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableDebugReportingConfig',
      packedSize: 32,
      fields: [
        { name: 'key_piece', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'debug_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'aggregation_coordinator_origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SourceAggregatableDebugReportingConfig
attribution_reporting.mojom.SourceAggregatableDebugReportingConfigSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.SourceAggregatableDebugReportingConfig',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'budget', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AttributionScopesSet
attribution_reporting.mojom.AttributionScopesSetSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AttributionScopesSet',
      packedSize: 16,
      fields: [
        { name: 'scopes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AttributionScopesData
attribution_reporting.mojom.AttributionScopesDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AttributionScopesData',
      packedSize: 24,
      fields: [
        { name: 'attribution_scopes_set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'attribution_scope_limit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max_event_states', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableNamedBudgetDefs
attribution_reporting.mojom.AggregatableNamedBudgetDefsSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableNamedBudgetDefs',
      packedSize: 16,
      fields: [
        { name: 'budgets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SourceRegistration
attribution_reporting.mojom.SourceRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.SourceRegistration',
      packedSize: 152,
      fields: [
        { name: 'destinations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_event_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'expiry', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'trigger_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'event_report_windows', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'aggregatable_report_window', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'priority', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'debug_key', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'filter_data', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'aggregation_keys', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'trigger_data_matching', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'event_level_epsilon', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'aggregatable_debug_reporting_config', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'destination_limit_priority', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'attribution_scopes_data', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'aggregatable_named_budget_defs', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_event_level_reports', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'debug_reporting', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EventTriggerData
attribution_reporting.mojom.EventTriggerDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.EventTriggerData',
      packedSize: 40,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'dedup_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'filters', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableDedupKey
attribution_reporting.mojom.AggregatableDedupKeySpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableDedupKey',
      packedSize: 24,
      fields: [
        { name: 'dedup_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableValuesValue
attribution_reporting.mojom.AggregatableValuesValueSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableValuesValue',
      packedSize: 24,
      fields: [
        { name: 'filtering_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableValues
attribution_reporting.mojom.AggregatableValuesSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableValues',
      packedSize: 24,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableNamedBudgetCandidate
attribution_reporting.mojom.AggregatableNamedBudgetCandidateSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.AggregatableNamedBudgetCandidate',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TriggerRegistration
attribution_reporting.mojom.TriggerRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.TriggerRegistration',
      packedSize: 120,
      fields: [
        { name: 'event_triggers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'aggregatable_trigger_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'aggregatable_values', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'debug_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'aggregatable_dedup_keys', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'aggregation_coordinator_origin', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'source_registration_time_config', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'trigger_context_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'aggregatable_debug_reporting_config', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'attribution_scopes', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'aggregatable_named_budget_candidates', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'aggregatable_filtering_id_max_bytes', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'debug_reporting', packedOffset: 97, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OsRegistrationItem
attribution_reporting.mojom.OsRegistrationItemSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.OsRegistrationItem',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'debug_reporting', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OsRegistration
attribution_reporting.mojom.OsRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.OsRegistration',
      packedSize: 16,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
