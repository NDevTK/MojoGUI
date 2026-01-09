// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_annotation_monitor.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkAnnotationMonitor
network.mojom.NetworkAnnotationMonitor = {};

network.mojom.NetworkAnnotationMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkAnnotationMonitorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkAnnotationMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkAnnotationMonitorPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkAnnotationMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkAnnotationMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  report(hash_code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkAnnotationMonitor_Report_ParamsSpec,
      null,
      [hash_code]);
  }

};

network.mojom.NetworkAnnotationMonitor.getRemote = function() {
  let remote = new network.mojom.NetworkAnnotationMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkAnnotationMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Report
network.mojom.NetworkAnnotationMonitor_Report_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkAnnotationMonitor.Report_Params',
      packedSize: 16,
      fields: [
        { name: 'hash_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkAnnotationMonitorPtr = network.mojom.NetworkAnnotationMonitorRemote;
network.mojom.NetworkAnnotationMonitorRequest = network.mojom.NetworkAnnotationMonitorPendingReceiver;

