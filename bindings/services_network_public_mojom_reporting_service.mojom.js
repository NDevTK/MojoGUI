// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/reporting_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};


// Enum: ReportingApiReportStatus
network.mojom.mojom.ReportingApiReportStatus = {
  kQueued: 0,
  kPending: 1,
  kDoomed: 2,
  kSuccess: 3,
};
network.mojom.mojom.ReportingApiReportStatusSpec = { $: mojo.internal.Enum() };

// Struct: ReportingApiReport
network.mojom.mojom.ReportingApiReportSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiReport',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'group', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'depth', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'attempts', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'body', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ReportingApiReportStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: ReportingApiEndpoint
network.mojom.mojom.ReportingApiEndpointSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiEndpoint',
      packedSize: 80,
      fields: [
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'attempted_uploads', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'successful_uploads', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'attempted_reports', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'successful_reports', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'weight', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'group_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false, minVersion: 0 },
        { name: 'reporting_source', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: ReportingApiObserver
network.mojom.mojom.ReportingApiObserver = {};

network.mojom.mojom.ReportingApiObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.ReportingApiObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ReportingApiObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.ReportingApiObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.ReportingApiObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.ReportingApiObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReportAdded(report) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec,
      null,
      [report]);
  }

  onReportUpdated(report) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec,
      null,
      [report]);
  }

  onEndpointsUpdatedForOrigin(endpoints) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec,
      null,
      [endpoints]);
  }

};

network.mojom.mojom.ReportingApiObserver.getRemote = function() {
  let remote = new network.mojom.mojom.ReportingApiObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ReportingApiObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnReportAdded
network.mojom.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiObserver.OnReportAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ReportingApiReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReportUpdated
network.mojom.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiObserver.OnReportUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ReportingApiReportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnEndpointsUpdatedForOrigin
network.mojom.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiObserver.OnEndpointsUpdatedForOrigin_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ReportingApiEndpointSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.ReportingApiObserverPtr = network.mojom.mojom.ReportingApiObserverRemote;
network.mojom.mojom.ReportingApiObserverRequest = network.mojom.mojom.ReportingApiObserverPendingReceiver;

