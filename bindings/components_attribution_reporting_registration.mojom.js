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
      packedSize: 16,
      fields: [
        { name: 'filter_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'negative', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'end_times', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'aggregation_coordinator_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'max_event_states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'aggregatable_named_budget_defs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'filtering_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'aggregatable_named_budget_candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'debug_reporting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
