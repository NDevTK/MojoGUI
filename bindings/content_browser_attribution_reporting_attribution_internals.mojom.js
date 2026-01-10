// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/attribution_internals.mojom
// Module: attribution_internals.mojom

'use strict';

// Module namespace
var attribution_internals = attribution_internals || {};
attribution_internals.mojom = attribution_internals.mojom || {};
var components = components || {};
var components = components || {};
var components = components || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var services = services || {};
var url = url || {};
var url = url || {};

attribution_internals.mojom.AttributabilitySpec = { $: mojo.internal.Enum() };
attribution_internals.mojom.WebUIReportDataSpec = { $: {} };
attribution_internals.mojom.NetworkStatusSpec = { $: {} };
attribution_internals.mojom.ReportStatusSpec = { $: {} };
attribution_internals.mojom.SendAggregatableDebugReportResultSpec = { $: {} };
attribution_internals.mojom.ReportIDSpec = { $: {} };
attribution_internals.mojom.WebUIReportEventLevelDataSpec = { $: {} };
attribution_internals.mojom.AggregatableHistogramContributionSpec = { $: {} };
attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec = { $: {} };
attribution_internals.mojom.EmptySpec = { $: {} };
attribution_internals.mojom.WebUIReportSpec = { $: {} };
attribution_internals.mojom.WebUIDebugReportSpec = { $: {} };
attribution_internals.mojom.WebUIAggregatableDebugReportSpec = { $: {} };
attribution_internals.mojom.WebUISourceSpec = { $: {} };
attribution_internals.mojom.WebUIRegistrationSpec = { $: {} };
attribution_internals.mojom.WebUITriggerSpec = { $: {} };
attribution_internals.mojom.WebUISourceRegistrationSpec = { $: {} };
attribution_internals.mojom.WebUIOsRegistrationSpec = { $: {} };
attribution_internals.mojom.Observer = {};
attribution_internals.mojom.Observer.$interfaceName = 'attribution_internals.mojom.Observer';
attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec = { $: {} };
attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec = { $: {} };
attribution_internals.mojom.Handler = {};
attribution_internals.mojom.Handler.$interfaceName = 'attribution_internals.mojom.Handler';
attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec = { $: {} };
attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec = { $: {} };
attribution_internals.mojom.Handler_SendReport_ParamsSpec = { $: {} };
attribution_internals.mojom.Handler_SendReport_ResponseParamsSpec = { $: {} };
attribution_internals.mojom.Handler_ClearStorage_ParamsSpec = { $: {} };
attribution_internals.mojom.Handler_ClearStorage_ResponseParamsSpec = { $: {} };
attribution_internals.mojom.Factory = {};
attribution_internals.mojom.Factory.$interfaceName = 'attribution_internals.mojom.Factory';
attribution_internals.mojom.Factory_Create_ParamsSpec = { $: {} };

// Enum: Attributability
attribution_internals.mojom.Attributability = {
  kAttributable: 0,
  kNoisedNever: 1,
  kNoisedFalsely: 2,
  kReachedEventLevelAttributionLimit: 3,
};

// Union: WebUIReportData
mojo.internal.Union(
    attribution_internals.mojom.WebUIReportDataSpec, 'attribution_internals.mojom.WebUIReportData', {
      'event_level_data': {
        'ordinal': 0,
        'type': attribution_internals.mojom.WebUIReportEventLevelDataSpec,
        'nullable': false,
      },
      'aggregatable_attribution_data': {
        'ordinal': 1,
        'type': attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec,
        'nullable': false,
      },
    });

// Union: NetworkStatus
mojo.internal.Union(
    attribution_internals.mojom.NetworkStatusSpec, 'attribution_internals.mojom.NetworkStatus', {
      'http_response_code': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'network_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: ReportStatus
mojo.internal.Union(
    attribution_internals.mojom.ReportStatusSpec, 'attribution_internals.mojom.ReportStatus', {
      'pending': {
        'ordinal': 0,
        'type': attribution_internals.mojom.EmptySpec,
        'nullable': false,
      },
      'replaced_by_higher_priority_report': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'prohibited_by_browser_policy': {
        'ordinal': 2,
        'type': attribution_internals.mojom.EmptySpec,
        'nullable': false,
      },
      'expired': {
        'ordinal': 3,
        'type': attribution_internals.mojom.EmptySpec,
        'nullable': false,
      },
      'network_status': {
        'ordinal': 4,
        'type': attribution_internals.mojom.NetworkStatusSpec,
        'nullable': false,
      },
      'failed_to_assemble': {
        'ordinal': 5,
        'type': attribution_internals.mojom.EmptySpec,
        'nullable': false,
      },
    });

// Union: SendAggregatableDebugReportResult
mojo.internal.Union(
    attribution_internals.mojom.SendAggregatableDebugReportResultSpec, 'attribution_internals.mojom.SendAggregatableDebugReportResult', {
      'assembly_failed': {
        'ordinal': 0,
        'type': attribution_internals.mojom.EmptySpec,
        'nullable': false,
      },
      'network_status': {
        'ordinal': 1,
        'type': attribution_internals.mojom.NetworkStatusSpec,
        'nullable': false,
      },
    });

// Struct: ReportID
mojo.internal.Struct(
    attribution_internals.mojom.ReportIDSpec, 'attribution_internals.mojom.ReportID', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebUIReportEventLevelData
mojo.internal.Struct(
    attribution_internals.mojom.WebUIReportEventLevelDataSpec, 'attribution_internals.mojom.WebUIReportEventLevelData', [
      mojo.internal.StructField('priority', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('attributed_truthfully', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AggregatableHistogramContribution
mojo.internal.Struct(
    attribution_internals.mojom.AggregatableHistogramContributionSpec, 'attribution_internals.mojom.AggregatableHistogramContribution', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('filtering_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebUIReportAggregatableAttributionData
mojo.internal.Struct(
    attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec, 'attribution_internals.mojom.WebUIReportAggregatableAttributionData', [
      mojo.internal.StructField('contributions', 0, 0, mojo.internal.Array(attribution_internals.mojom.AggregatableHistogramContributionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_null_report', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Empty
mojo.internal.Struct(
    attribution_internals.mojom.EmptySpec, 'attribution_internals.mojom.Empty', [
    ],
    [[0, 8]]);

// Struct: WebUIReport
mojo.internal.Struct(
    attribution_internals.mojom.WebUIReportSpec, 'attribution_internals.mojom.WebUIReport', [
      mojo.internal.StructField('id', 0, 0, attribution_internals.mojom.ReportIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('report_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('trigger_time', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('report_time', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('report_body', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 40, 0, attribution_internals.mojom.ReportStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 56, 0, attribution_internals.mojom.WebUIReportDataSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: WebUIDebugReport
mojo.internal.Struct(
    attribution_internals.mojom.WebUIDebugReportSpec, 'attribution_internals.mojom.WebUIDebugReport', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('body', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 24, 0, attribution_internals.mojom.NetworkStatusSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebUIAggregatableDebugReport
mojo.internal.Struct(
    attribution_internals.mojom.WebUIAggregatableDebugReportSpec, 'attribution_internals.mojom.WebUIAggregatableDebugReport', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('body', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('process_result', 24, 0, attribution_reporting.mojom.ProcessAggregatableDebugReportResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('send_result', 32, 0, attribution_internals.mojom.SendAggregatableDebugReportResultSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebUISource
mojo.internal.Struct(
    attribution_internals.mojom.WebUISourceSpec, 'attribution_internals.mojom.WebUISource', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('source_event_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('source_origin', 16, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('destinations', 24, 0, attribution_reporting.mojom.DestinationSetSpec, null, false, 0, undefined),
      mojo.internal.StructField('reporting_origin', 32, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_time', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('expiry_time', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('event_report_windows', 56, 0, attribution_reporting.mojom.EventReportWindowsSpec, null, false, 0, undefined),
      mojo.internal.StructField('trigger_data', 64, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('max_event_level_reports', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('aggregatable_report_window_time', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('source_type', 88, 0, attribution_reporting.mojom.SourceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('priority', 96, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('debug_key_$flag', 104, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('debug_key_$value', 112, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('dedup_keys', 120, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('filter_data', 128, 0, attribution_reporting.mojom.FilterDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('aggregation_keys', 136, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('remaining_aggregatable_attribution_budget', 144, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('aggregatable_dedup_keys', 152, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('trigger_data_matching', 160, 0, attribution_reporting.mojom.TriggerDataMatchingSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_level_epsilon', 168, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('cookie_based_debug_allowed', 176, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('remaining_aggregatable_debug_budget', 180, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('aggregatable_debug_key_piece', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_scopes_data_json', 192, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_named_budgets', 200, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('kAttributable', 208, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 224]]);

// Struct: WebUIRegistration
mojo.internal.Struct(
    attribution_internals.mojom.WebUIRegistrationSpec, 'attribution_internals.mojom.WebUIRegistration', [
      mojo.internal.StructField('time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('context_origin', 8, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('reporting_origin', 16, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('registration_json', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cleared_debug_key_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'cleared_debug_key_$value', originalFieldName: 'cleared_debug_key' }),
      mojo.internal.StructField('cleared_debug_key_$value', 40, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'cleared_debug_key_$flag', originalFieldName: 'cleared_debug_key' }),
    ],
    [[0, 56]]);

// Struct: WebUITrigger
mojo.internal.Struct(
    attribution_internals.mojom.WebUITriggerSpec, 'attribution_internals.mojom.WebUITrigger', [
      mojo.internal.StructField('registration', 0, 0, attribution_internals.mojom.WebUIRegistrationSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_level_result', 8, 0, attribution_reporting.mojom.EventLevelResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('aggregatable_result', 12, 0, attribution_reporting.mojom.AggregatableResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebUISourceRegistration
mojo.internal.Struct(
    attribution_internals.mojom.WebUISourceRegistrationSpec, 'attribution_internals.mojom.WebUISourceRegistration', [
      mojo.internal.StructField('registration', 0, 0, attribution_internals.mojom.WebUIRegistrationSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, attribution_reporting.mojom.SourceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('status', 12, 0, attribution_reporting.mojom.StoreSourceResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebUIOsRegistration
mojo.internal.Struct(
    attribution_internals.mojom.WebUIOsRegistrationSpec, 'attribution_internals.mojom.WebUIOsRegistration', [
      mojo.internal.StructField('time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('registration_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('top_level_origin', 16, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_debug_key_allowed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('debug_reporting', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('type', 28, 0, attribution_reporting.mojom.RegistrationTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('result', 32, 0, attribution_reporting.mojom.OsRegistrationResultSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: Observer
mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec, 'attribution_internals.mojom.Observer_OnSourcesChanged_Params', [
      mojo.internal.StructField('sources', 0, 0, mojo.internal.Array(attribution_internals.mojom.WebUISourceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec, 'attribution_internals.mojom.Observer_OnReportsChanged_Params', [
      mojo.internal.StructField('reports', 0, 0, mojo.internal.Array(attribution_internals.mojom.WebUIReportSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec, 'attribution_internals.mojom.Observer_OnSourceHandled_Params', [
      mojo.internal.StructField('source', 0, 0, attribution_internals.mojom.WebUISourceRegistrationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec, 'attribution_internals.mojom.Observer_OnReportHandled_Params', [
      mojo.internal.StructField('report', 0, 0, attribution_internals.mojom.WebUIReportSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec, 'attribution_internals.mojom.Observer_OnDebugReportSent_Params', [
      mojo.internal.StructField('report', 0, 0, attribution_internals.mojom.WebUIDebugReportSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec, 'attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_Params', [
      mojo.internal.StructField('report', 0, 0, attribution_internals.mojom.WebUIAggregatableDebugReportSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec, 'attribution_internals.mojom.Observer_OnTriggerHandled_Params', [
      mojo.internal.StructField('trigger', 0, 0, attribution_internals.mojom.WebUITriggerSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec, 'attribution_internals.mojom.Observer_OnOsRegistration_Params', [
      mojo.internal.StructField('registration', 0, 0, attribution_internals.mojom.WebUIOsRegistrationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec, 'attribution_internals.mojom.Observer_OnDebugModeChanged_Params', [
      mojo.internal.StructField('debug_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

attribution_internals.mojom.ObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.ObserverRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Observer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.ObserverPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.ObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.ObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSourcesChanged(sources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec,
      null,
      [sources]);
  }

  onReportsChanged(reports) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec,
      null,
      [reports]);
  }

  onSourceHandled(source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec,
      null,
      [source]);
  }

  onReportHandled(report) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec,
      null,
      [report]);
  }

  onDebugReportSent(report) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec,
      null,
      [report]);
  }

  onAggregatableDebugReportSent(report) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec,
      null,
      [report]);
  }

  onTriggerHandled(trigger) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec,
      null,
      [trigger]);
  }

  onOsRegistration(registration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec,
      null,
      [registration]);
  }

  onDebugModeChanged(debug_mode) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec,
      null,
      [debug_mode]);
  }

};

attribution_internals.mojom.Observer.getRemote = function() {
  let remote = new attribution_internals.mojom.ObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Observer',
    'context');
  return remote.$;
};

attribution_internals.mojom.ObserverPtr = attribution_internals.mojom.ObserverRemote;
attribution_internals.mojom.ObserverRequest = attribution_internals.mojom.ObserverPendingReceiver;


// Interface: Handler
mojo.internal.Struct(
    attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec, 'attribution_internals.mojom.Handler_IsAttributionReportingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec, 'attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('attribution_support', 4, 0, network.mojom.AttributionSupportSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Handler_SendReport_ParamsSpec, 'attribution_internals.mojom.Handler_SendReport_Params', [
      mojo.internal.StructField('id', 0, 0, attribution_internals.mojom.ReportIDSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    attribution_internals.mojom.Handler_SendReport_ResponseParamsSpec, 'attribution_internals.mojom.Handler_SendReport_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    attribution_internals.mojom.Handler_ClearStorage_ParamsSpec, 'attribution_internals.mojom.Handler_ClearStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    attribution_internals.mojom.Handler_ClearStorage_ResponseParamsSpec, 'attribution_internals.mojom.Handler_ClearStorage_ResponseParams', [
    ],
    [[0, 8]]);

attribution_internals.mojom.HandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.HandlerRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Handler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.HandlerPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.HandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.HandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAttributionReportingEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec,
      attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec,
      []);
  }

  sendReport(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      attribution_internals.mojom.Handler_SendReport_ParamsSpec,
      attribution_internals.mojom.Handler_SendReport_ResponseParamsSpec,
      [id]);
  }

  clearStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_internals.mojom.Handler_ClearStorage_ParamsSpec,
      attribution_internals.mojom.Handler_ClearStorage_ResponseParamsSpec,
      []);
  }

};

attribution_internals.mojom.Handler.getRemote = function() {
  let remote = new attribution_internals.mojom.HandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Handler',
    'context');
  return remote.$;
};

attribution_internals.mojom.HandlerPtr = attribution_internals.mojom.HandlerRemote;
attribution_internals.mojom.HandlerRequest = attribution_internals.mojom.HandlerPendingReceiver;


// Interface: Factory
mojo.internal.Struct(
    attribution_internals.mojom.Factory_Create_ParamsSpec, 'attribution_internals.mojom.Factory_Create_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(attribution_internals.mojom.ObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(attribution_internals.mojom.HandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

attribution_internals.mojom.FactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

attribution_internals.mojom.FactoryRemote = class {
  static get $interfaceName() {
    return 'attribution_internals.mojom.Factory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      attribution_internals.mojom.FactoryPendingReceiver,
      handle);
    this.$ = new attribution_internals.mojom.FactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

attribution_internals.mojom.FactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(observer, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      attribution_internals.mojom.Factory_Create_ParamsSpec,
      null,
      [observer, handler]);
  }

};

attribution_internals.mojom.Factory.getRemote = function() {
  let remote = new attribution_internals.mojom.FactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'attribution_internals.mojom.Factory',
    'context');
  return remote.$;
};

attribution_internals.mojom.FactoryPtr = attribution_internals.mojom.FactoryRemote;
attribution_internals.mojom.FactoryRequest = attribution_internals.mojom.FactoryPendingReceiver;

