// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/attribution_internals.mojom
// Module: attribution_internals.mojom

'use strict';

// Module namespace
var attribution_internals = attribution_internals || {};
attribution_internals.mojom = attribution_internals.mojom || {};


// Enum: Attributability
attribution_internals.mojom.Attributability = {
  kAttributable: 0,
  kNoisedNever: 1,
  kNoisedFalsely: 2,
  kReachedEventLevelAttributionLimit: 3,
};

// Struct: ReportID
attribution_internals.mojom.ReportIDSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.ReportID',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIReportEventLevelData
attribution_internals.mojom.WebUIReportEventLevelDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIReportEventLevelData',
      packedSize: 24,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'attributed_truthfully', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableHistogramContribution
attribution_internals.mojom.AggregatableHistogramContributionSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.AggregatableHistogramContribution',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'filtering_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIReportAggregatableAttributionData
attribution_internals.mojom.WebUIReportAggregatableAttributionDataSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIReportAggregatableAttributionData',
      packedSize: 32,
      fields: [
        { name: 'contributions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'aggregation_coordinator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_null_report', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Empty
attribution_internals.mojom.EmptySpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Empty',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIReport
attribution_internals.mojom.WebUIReportSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIReport',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.ReportIDSpec, nullable: false },
        { name: 'report_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'trigger_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'report_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'report_body', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'status', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIDebugReport
attribution_internals.mojom.WebUIDebugReportSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIDebugReport',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'body', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'status', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIAggregatableDebugReport
attribution_internals.mojom.WebUIAggregatableDebugReportSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIAggregatableDebugReport',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'body', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'process_result', packedOffset: 24, packedBitOffset: 0, type: attribution_reporting.mojom.ProcessAggregatableDebugReportResultSpec, nullable: false },
        { name: 'send_result', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUISource
attribution_internals.mojom.WebUISourceSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUISource',
      packedSize: 216,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'source_event_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'source_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'destinations', packedOffset: 24, packedBitOffset: 0, type: attribution_reporting.mojom.DestinationSetSpec, nullable: false },
        { name: 'reporting_origin', packedOffset: 32, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'source_time', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'expiry_time', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'event_report_windows', packedOffset: 56, packedBitOffset: 0, type: attribution_reporting.mojom.EventReportWindowsSpec, nullable: false },
        { name: 'trigger_data', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'aggregatable_report_window_time', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'source_type', packedOffset: 80, packedBitOffset: 0, type: attribution_reporting.mojom.SourceTypeSpec, nullable: false },
        { name: 'priority', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'debug_key', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'dedup_keys', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'filter_data', packedOffset: 112, packedBitOffset: 0, type: attribution_reporting.mojom.FilterDataSpec, nullable: false },
        { name: 'aggregation_keys', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'aggregatable_dedup_keys', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'trigger_data_matching', packedOffset: 136, packedBitOffset: 0, type: attribution_reporting.mojom.TriggerDataMatchingSpec, nullable: false },
        { name: 'event_level_epsilon', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'aggregatable_debug_key_piece', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'attribution_scopes_data_json', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'aggregatable_named_budgets', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'kAttributable', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_event_level_reports', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'remaining_aggregatable_attribution_budget', packedOffset: 188, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'remaining_aggregatable_debug_budget', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cookie_based_debug_allowed', packedOffset: 196, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIRegistration
attribution_internals.mojom.WebUIRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIRegistration',
      packedSize: 48,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'context_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'reporting_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'registration_json', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cleared_debug_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUITrigger
attribution_internals.mojom.WebUITriggerSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUITrigger',
      packedSize: 32,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIRegistrationSpec, nullable: false },
        { name: 'event_level_result', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.EventLevelResultSpec, nullable: false },
        { name: 'aggregatable_result', packedOffset: 16, packedBitOffset: 0, type: attribution_reporting.mojom.AggregatableResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUISourceRegistration
attribution_internals.mojom.WebUISourceRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUISourceRegistration',
      packedSize: 32,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIRegistrationSpec, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.SourceTypeSpec, nullable: false },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: attribution_reporting.mojom.StoreSourceResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIOsRegistration
attribution_internals.mojom.WebUIOsRegistrationSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.WebUIOsRegistration',
      packedSize: 56,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'registration_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'top_level_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: attribution_reporting.mojom.RegistrationTypeSpec, nullable: false },
        { name: 'result', packedOffset: 32, packedBitOffset: 0, type: attribution_reporting.mojom.OsRegistrationResultSpec, nullable: false },
        { name: 'is_debug_key_allowed', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'debug_reporting', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: Observer
attribution_internals.mojom.Observer = {};

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

// ParamsSpec for OnSourcesChanged
attribution_internals.mojom.Observer_OnSourcesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnSourcesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportsChanged
attribution_internals.mojom.Observer_OnReportsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnReportsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'reports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSourceHandled
attribution_internals.mojom.Observer_OnSourceHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnSourceHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUISourceRegistrationSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportHandled
attribution_internals.mojom.Observer_OnReportHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnReportHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIReportSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDebugReportSent
attribution_internals.mojom.Observer_OnDebugReportSent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnDebugReportSent_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIDebugReportSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAggregatableDebugReportSent
attribution_internals.mojom.Observer_OnAggregatableDebugReportSent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnAggregatableDebugReportSent_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIAggregatableDebugReportSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTriggerHandled
attribution_internals.mojom.Observer_OnTriggerHandled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnTriggerHandled_Params',
      packedSize: 16,
      fields: [
        { name: 'trigger', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUITriggerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnOsRegistration
attribution_internals.mojom.Observer_OnOsRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnOsRegistration_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.WebUIOsRegistrationSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDebugModeChanged
attribution_internals.mojom.Observer_OnDebugModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Observer.OnDebugModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'debug_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.ObserverPtr = attribution_internals.mojom.ObserverRemote;
attribution_internals.mojom.ObserverRequest = attribution_internals.mojom.ObserverPendingReceiver;


// Interface: Handler
attribution_internals.mojom.Handler = {};

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
      null,
      [id]);
  }

  clearStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      attribution_internals.mojom.Handler_ClearStorage_ParamsSpec,
      null,
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

// ParamsSpec for IsAttributionReportingEnabled
attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.IsAttributionReportingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

attribution_internals.mojom.Handler_IsAttributionReportingEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.IsAttributionReportingEnabled_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'attribution_support', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AttributionSupportSpec, nullable: false },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendReport
attribution_internals.mojom.Handler_SendReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.SendReport_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: attribution_internals.mojom.ReportIDSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearStorage
attribution_internals.mojom.Handler_ClearStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Handler.ClearStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.HandlerPtr = attribution_internals.mojom.HandlerRemote;
attribution_internals.mojom.HandlerRequest = attribution_internals.mojom.HandlerPendingReceiver;


// Interface: Factory
attribution_internals.mojom.Factory = {};

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

// ParamsSpec for Create
attribution_internals.mojom.Factory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'attribution_internals.mojom.Factory.Create_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
attribution_internals.mojom.FactoryPtr = attribution_internals.mojom.FactoryRemote;
attribution_internals.mojom.FactoryRequest = attribution_internals.mojom.FactoryPendingReceiver;

