// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_annotation_monitor.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkAnnotationMonitor
network.mojom.mojom.NetworkAnnotationMonitor = {};

network.mojom.mojom.NetworkAnnotationMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetworkAnnotationMonitorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkAnnotationMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetworkAnnotationMonitorPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetworkAnnotationMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetworkAnnotationMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  report(hash_code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetworkAnnotationMonitor_Report_ParamsSpec,
      null,
      [hash_code]);
  }

};

network.mojom.mojom.NetworkAnnotationMonitor.getRemote = function() {
  let remote = new network.mojom.mojom.NetworkAnnotationMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkAnnotationMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Report
network.mojom.mojom.NetworkAnnotationMonitor_Report_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkAnnotationMonitor.Report_Params',
      packedSize: 16,
      fields: [
        { name: 'hash_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.NetworkAnnotationMonitorPtr = network.mojom.mojom.NetworkAnnotationMonitorRemote;
network.mojom.mojom.NetworkAnnotationMonitorRequest = network.mojom.mojom.NetworkAnnotationMonitorPendingReceiver;

