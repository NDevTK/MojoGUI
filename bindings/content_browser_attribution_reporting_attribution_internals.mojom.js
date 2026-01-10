// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/attribution_internals.mojom
// Module: attribution_internals.mojom

'use strict';

// Module namespace
var attribution_internals = attribution_internals || {};
attribution_internals.mojom = attribution_internals.mojom || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var url = url || {};
var url = url || {};


// Enum: Attributability
attribution_internals.mojom.mojom.Attributability = {
  kAttributable: 0,
  kNoisedNever: 1,
  kNoisedFalsely: 2,
  kReachedEventLevelAttributionLimit: 3,
};
attribution_internals.mojom.mojom.AttributabilitySpec = { $: mojo.internal.Enum() };

// Union: WebUIReportData
attribution_internals.mojom.mojom.WebUIReportDataSpec = { $: mojo.internal.Union(
    'attribution_internals.mojom.WebUIReportData', {
      'event_level_data': {
        'ordinal': 0,
        'type': attribution_internals.mojom.WebUIReportEventLevelDataSpec,
      }},
      'aggregatable_attribution_data': {
        'ordinal': 1,
        'type': attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec,
      }},
    })
};

// Union: NetworkStatus
attribution_internals.mojom.mojom.NetworkStatusSpec = { $: mojo.internal.Union(
    'attribution_internals.mojom.NetworkStatus', {
      'http_response_code': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
      }},
      'network_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Union: ReportStatus
attribution_internals.mojom.mojom.ReportStatusSpec = { $: mojo.internal.Union(
    'attribution_internals.mojom.ReportStatus', {
      'pending': {
        'ordinal': 0,
        'type': attribution_internals.mojom.EmptySpec,
      }},
      'replaced_by_higher_priority_report': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
      'prohibited_by_browser_policy': {
        'ordinal': 2,
        'type': attribution_internals.mojom.EmptySpec,
      }},
      'expired': {
        'ordinal': 3,
        'type': attribution_internals.mojom.EmptySpec,
      }},
      'network_status': {
        'ordinal': 4,
        'type': attribution_internals.mojom.NetworkStatusSpec,
      }},
      'failed_to_assemble': {
        'ordinal': 5,
        'type': attribution_internals.mojom.EmptySpec,
      }},
    })
};

// Union: SendAggregatableDebugReportResult
attribution_internals.mojom.mojom.SendAggregatableDebugReportResultSpec = { $: mojo.internal.Union(
    'attribution_internals.mojom.SendAggregatableDebugReportResult', {
      'assembly_failed': {
        'ordinal': 0,
        'type': attribution_internals.mojom.EmptySpec,
      }},
      'network_status': {
        'ordinal': 1,
        'type': attribution_internals.mojom.NetworkStatusSpec,
      }},
    })
};

// Struct: ReportID
attribution_internals.mojom.mojom.ReportIDSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.ReportID',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebUIReportEventLevelData
attribution_internals.mojom.mojom.WebUIReportEventLevelDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIReportEventLevelData',
      packedSize: 24,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'attributed_truthfully', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AggregatableHistogramContribution
attribution_internals.mojom.mojom.AggregatableHistogramContributionSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.AggregatableHistogramContribution',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'filtering_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: WebUIReportAggregatableAttributionData
attribution_internals.mojom.mojom.WebUIReportAggregatableAttributionDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIReportAggregatableAttributionData',
      packedSize: 32,
      fields: [
        { name: 'contributions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(attribution_internals.mojom.AggregatableHistogramContributionSpec, false), nullable: false, minVersion: 0 },
        { name: 'aggregation_coordinator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_null_report', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Empty
attribution_internals.mojom.mojom.EmptySpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Empty',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: WebUIReport
attribution_internals.mojom.mojom.WebUIReportSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIReport',
      packedSize: 80,
      fields: [
        { name: 'id', packedOffset: 32, packedBitOffset: 0, type: attribution_internals.mojom.ReportIDSpec, nullable: false, minVersion: 0 },
        { name: 'report_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'trigger_time', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'report_time', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'report_body', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.ReportStatusSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: attribution_internals.mojom.WebUIReportDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: WebUIDebugReport
attribution_internals.mojom.mojom.WebUIDebugReportSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIDebugReport',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'body', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.NetworkStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: WebUIAggregatableDebugReport
attribution_internals.mojom.mojom.WebUIAggregatableDebugReportSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIAggregatableDebugReport',
      packedSize: 56,
      fields: [
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'body', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'process_result', packedOffset: 40, packedBitOffset: 0, type: attribution_reporting.mojom.ProcessAggregatableDebugReportResultSpec, nullable: false, minVersion: 0 },
        { name: 'send_result', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.SendAggregatableDebugReportResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: WebUISource
attribution_internals.mojom.mojom.WebUISourceSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUISource',
      packedSize: 200,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'source_event_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'source_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'destinations', packedOffset: 24, packedBitOffset: 0, type: attribution_reporting.mojom.DestinationSetSpec, nullable: false, minVersion: 0 },
        { name: 'reporting_origin', packedOffset: 32, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'source_time', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'expiry_time', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'event_report_windows', packedOffset: 56, packedBitOffset: 0, type: attribution_reporting.mojom.EventReportWindowsSpec, nullable: false, minVersion: 0 },
        { name: 'trigger_data', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'max_event_level_reports', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'aggregatable_report_window_time', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'source_type', packedOffset: 172, packedBitOffset: 0, type: attribution_reporting.mojom.SourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'debug_key_$flag', packedOffset: 188, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' } },
        { name: 'debug_key_$value', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' } },
        { name: 'dedup_keys', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'filter_data', packedOffset: 104, packedBitOffset: 0, type: attribution_reporting.mojom.FilterDataSpec, nullable: false, minVersion: 0 },
        { name: 'aggregation_keys', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'remaining_aggregatable_attribution_budget', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'aggregatable_dedup_keys', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'trigger_data_matching', packedOffset: 180, packedBitOffset: 0, type: attribution_reporting.mojom.TriggerDataMatchingSpec, nullable: false, minVersion: 0 },
        { name: 'event_level_epsilon', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'cookie_based_debug_allowed', packedOffset: 188, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'remaining_aggregatable_debug_budget', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'aggregatable_debug_key_piece', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'attribution_scopes_data_json', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'aggregatable_named_budgets', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'kAttributable', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 200}]
    }
  }
};

// Struct: WebUIRegistration
attribution_internals.mojom.mojom.WebUIRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIRegistration',
      packedSize: 56,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'context_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'reporting_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'registration_json', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cleared_debug_key_$flag', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'cleared_debug_key_$value', originalFieldName: 'cleared_debug_key' } },
        { name: 'cleared_debug_key_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'cleared_debug_key_$flag', originalFieldName: 'cleared_debug_key' } },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: WebUITrigger
attribution_internals.mojom.mojom.WebUITriggerSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUITrigger',
      packedSize: 24,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIRegistrationSpec, nullable: false, minVersion: 0 },
        { name: 'event_level_result', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.EventLevelResultSpec, nullable: false, minVersion: 0 },
        { name: 'aggregatable_result', packedOffset: 12, packedBitOffset: 0, type: attribution_reporting.mojom.AggregatableResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebUISourceRegistration
attribution_internals.mojom.mojom.WebUISourceRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUISourceRegistration',
      packedSize: 24,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIRegistrationSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.SourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 12, packedBitOffset: 0, type: attribution_reporting.mojom.StoreSourceResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebUIOsRegistration
attribution_internals.mojom.mojom.WebUIOsRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIOsRegistration',
      packedSize: 48,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'registration_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'top_level_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'is_debug_key_allowed', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_reporting', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: attribution_reporting.mojom.RegistrationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 28, packedBitOffset: 0, type: attribution_reporting.mojom.OsRegistrationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: Observer
attribution_internals.mojom.mojom.Observer = {};

attribution_internals.mojom.mojom.ObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.mojom.ObserverRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Observer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.mojom.ObserverPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.mojom.ObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.mojom.ObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSourcesChanged(sources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnSourcesChanged_ParamsSpec,
      null,
      [sources]);
  }

  onReportsChanged(reports) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnReportsChanged_ParamsSpec,
      null,
      [reports]);
  }

  onSourceHandled(source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnSourceHandled_ParamsSpec,
      null,
      [source]);
  }

  onReportHandled(report) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnReportHandled_ParamsSpec,
      null,
      [report]);
  }

  onDebugReportSent(report) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnDebugReportSent_ParamsSpec,
      null,
      [report]);
  }

  onAggregatableDebugReportSent(report) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec,
      null,
      [report]);
  }

  onTriggerHandled(trigger) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnTriggerHandled_ParamsSpec,
      null,
      [trigger]);
  }

  onOsRegistration(registration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnOsRegistration_ParamsSpec,
      null,
      [registration]);
  }

  onDebugModeChanged(debug_mode) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      attribution_internals.mojom.mojom.Observer_OnDebugModeChanged_ParamsSpec,
      null,
      [debug_mode]);
  }

};

attribution_internals.mojom.mojom.Observer.getRemote = function() {
  let remote = new attribution_internals.mojom.mojom.ObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Observer',
    'context');
  return remote.$;
};

// ParamsSpec for OnSourcesChanged
attribution_internals.mojom.mojom.Observer_OnSourcesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnSourcesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(attribution_internals.mojom.WebUISourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReportsChanged
attribution_internals.mojom.mojom.Observer_OnReportsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnReportsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'reports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(attribution_internals.mojom.WebUIReportSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSourceHandled
attribution_internals.mojom.mojom.Observer_OnSourceHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnSourceHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUISourceRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReportHandled
attribution_internals.mojom.mojom.Observer_OnReportHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnReportHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDebugReportSent
attribution_internals.mojom.mojom.Observer_OnDebugReportSent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnDebugReportSent_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIDebugReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAggregatableDebugReportSent
attribution_internals.mojom.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnAggregatableDebugReportSent_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIAggregatableDebugReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTriggerHandled
attribution_internals.mojom.mojom.Observer_OnTriggerHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnTriggerHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'trigger', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUITriggerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOsRegistration
attribution_internals.mojom.mojom.Observer_OnOsRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnOsRegistration_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIOsRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDebugModeChanged
attribution_internals.mojom.mojom.Observer_OnDebugModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnDebugModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'debug_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.mojom.ObserverPtr = attribution_internals.mojom.mojom.ObserverRemote;
attribution_internals.mojom.mojom.ObserverRequest = attribution_internals.mojom.mojom.ObserverPendingReceiver;


// Interface: Handler
attribution_internals.mojom.mojom.Handler = {};

attribution_internals.mojom.mojom.HandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.mojom.HandlerRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Handler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.mojom.HandlerPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.mojom.HandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.mojom.HandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAttributionReportingEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec,
      attribution_internals.mojom.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec,
      []);
  }

  sendReport(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_internals.mojom.mojom.Handler_SendReport_ParamsSpec,
      null,
      [id]);
  }

  clearStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_internals.mojom.mojom.Handler_ClearStorage_ParamsSpec,
      null,
      []);
  }

};

attribution_internals.mojom.mojom.Handler.getRemote = function() {
  let remote = new attribution_internals.mojom.mojom.HandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Handler',
    'context');
  return remote.$;
};

// ParamsSpec for IsAttributionReportingEnabled
attribution_internals.mojom.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.IsAttributionReportingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

attribution_internals.mojom.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.IsAttributionReportingEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'attribution_support', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AttributionSupportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendReport
attribution_internals.mojom.mojom.Handler_SendReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.SendReport_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.ReportIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearStorage
attribution_internals.mojom.mojom.Handler_ClearStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.ClearStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.mojom.HandlerPtr = attribution_internals.mojom.mojom.HandlerRemote;
attribution_internals.mojom.mojom.HandlerRequest = attribution_internals.mojom.mojom.HandlerPendingReceiver;


// Interface: Factory
attribution_internals.mojom.mojom.Factory = {};

attribution_internals.mojom.mojom.FactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.mojom.FactoryRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Factory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.mojom.FactoryPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.mojom.FactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.mojom.FactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(observer, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.mojom.Factory_Create_ParamsSpec,
      null,
      [observer, handler]);
  }

};

attribution_internals.mojom.mojom.Factory.getRemote = function() {
  let remote = new attribution_internals.mojom.mojom.FactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Factory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
attribution_internals.mojom.mojom.Factory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Factory.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(attribution_internals.mojom.ObserverRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(attribution_internals.mojom.HandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.mojom.FactoryPtr = attribution_internals.mojom.mojom.FactoryRemote;
attribution_internals.mojom.mojom.FactoryRequest = attribution_internals.mojom.mojom.FactoryPendingReceiver;

