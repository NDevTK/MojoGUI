// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_annotation_monitor.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.NetworkAnnotationMonitor = {};
network.mojom.NetworkAnnotationMonitor.$interfaceName = 'network.mojom.NetworkAnnotationMonitor';
network.mojom.NetworkAnnotationMonitor_Report_ParamsSpec = { $: {} };

// Interface: NetworkAnnotationMonitor
mojo.internal.Struct(
    network.mojom.NetworkAnnotationMonitor_Report_ParamsSpec, 'network.mojom.NetworkAnnotationMonitor_Report_Params', [
      mojo.internal.StructField('hash_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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

network.mojom.NetworkAnnotationMonitorPtr = network.mojom.NetworkAnnotationMonitorRemote;
network.mojom.NetworkAnnotationMonitorRequest = network.mojom.NetworkAnnotationMonitorPendingReceiver;

