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
      [hash_code],
      false);
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

network.mojom.NetworkAnnotationMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.NetworkAnnotationMonitor_Report_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.report');
          const result = this.impl.report(params.hash_code);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.NetworkAnnotationMonitorReceiver = network.mojom.NetworkAnnotationMonitorReceiver;

network.mojom.NetworkAnnotationMonitorPtr = network.mojom.NetworkAnnotationMonitorRemote;
network.mojom.NetworkAnnotationMonitorRequest = network.mojom.NetworkAnnotationMonitorPendingReceiver;

