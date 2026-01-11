// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_annotation_monitor.mojom
// Module: network.mojom

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
  report(hash_code) {
    return this.$.report(hash_code);
  }
};

network.mojom.NetworkAnnotationMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkAnnotationMonitor', [
      { explicit: null },
    ]);
  }

  report(hash_code) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkAnnotationMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkAnnotationMonitor_Report_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkAnnotationMonitor_Report_ParamsSpec.$.structSpec);
          const result = this.impl.report(params.hash_code);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.NetworkAnnotationMonitorReceiver = network.mojom.NetworkAnnotationMonitorReceiver;

network.mojom.NetworkAnnotationMonitorPtr = network.mojom.NetworkAnnotationMonitorRemote;
network.mojom.NetworkAnnotationMonitorRequest = network.mojom.NetworkAnnotationMonitorPendingReceiver;

