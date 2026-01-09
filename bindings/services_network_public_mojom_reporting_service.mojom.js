// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/reporting_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ReportingApiReportStatus
network.mojom.ReportingApiReportStatus = {
  kQueued: 0,
  kPending: 1,
  kDoomed: 2,
  kSuccess: 3,
};

// Struct: ReportingApiReport
network.mojom.ReportingApiReportSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiReport',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'group', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'body', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'status', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'depth', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'attempts', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ReportingApiEndpoint
network.mojom.ReportingApiEndpointSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiEndpoint',
      packedSize: 72,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'group_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reporting_source', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'attempted_uploads', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'successful_uploads', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'attempted_reports', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'successful_reports', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'priority', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'weight', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ReportingApiObserver
network.mojom.ReportingApiObserver = {};

network.mojom.ReportingApiObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ReportingApiObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ReportingApiObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ReportingApiObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.ReportingApiObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ReportingApiObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReportAdded(report) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec,
      null,
      [report]);
  }

  onReportUpdated(report) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec,
      null,
      [report]);
  }

  onEndpointsUpdatedForOrigin(endpoints) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec,
      null,
      [endpoints]);
  }

};

network.mojom.ReportingApiObserver.getRemote = function() {
  let remote = new network.mojom.ReportingApiObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ReportingApiObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnReportAdded
network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiObserver.OnReportAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportUpdated
network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiObserver.OnReportUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnEndpointsUpdatedForOrigin
network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ReportingApiObserver.OnEndpointsUpdatedForOrigin_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ReportingApiObserverPtr = network.mojom.ReportingApiObserverRemote;
network.mojom.ReportingApiObserverRequest = network.mojom.ReportingApiObserverPendingReceiver;

