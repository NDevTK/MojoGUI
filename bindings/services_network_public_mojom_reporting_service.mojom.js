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
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'endpoints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ReportingApiObserverPtr = network.mojom.ReportingApiObserverRemote;
network.mojom.ReportingApiObserverRequest = network.mojom.ReportingApiObserverPendingReceiver;

