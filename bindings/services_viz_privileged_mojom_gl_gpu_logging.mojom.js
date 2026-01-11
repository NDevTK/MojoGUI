// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_logging.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.GpuLogging = {};
viz.mojom.GpuLogging.$interfaceName = 'viz.mojom.GpuLogging';
viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec = { $: {} };

// Interface: GpuLogging
mojo.internal.Struct(
    viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec, 'viz.mojom.GpuLogging_RecordLogMessage_Params', [
      mojo.internal.StructField('header', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('severity', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

viz.mojom.GpuLoggingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.GpuLoggingRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.GpuLogging';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.GpuLoggingPendingReceiver,
      handle);
    this.$ = new viz.mojom.GpuLoggingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  recordLogMessage(severity, header, message) {
    return this.$.recordLogMessage(severity, header, message);
  }
};

viz.mojom.GpuLoggingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GpuLogging', [
      { explicit: null },
    ]);
  }

  recordLogMessage(severity, header, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec,
      null,
      [severity, header, message],
      false);
  }

};

viz.mojom.GpuLogging.getRemote = function() {
  let remote = new viz.mojom.GpuLoggingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.GpuLogging',
    'context');
  return remote.$;
};

viz.mojom.GpuLoggingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GpuLogging', [
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
             decoder.decodeStructInline(viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec.$.structSpec);
          const result = this.impl.recordLogMessage(params.severity, params.header, params.message);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.GpuLoggingReceiver = viz.mojom.GpuLoggingReceiver;

viz.mojom.GpuLoggingPtr = viz.mojom.GpuLoggingRemote;
viz.mojom.GpuLoggingRequest = viz.mojom.GpuLoggingPendingReceiver;

