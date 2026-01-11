// Auto-generated MojoJS binding
// Source: chromium_src/components/viz/service/debugger/mojom/viz_debugger.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.VizDebugOutput = {};
viz.mojom.VizDebugOutput.$interfaceName = 'viz.mojom.VizDebugOutput';
viz.mojom.VizDebugOutput_LogFrame_ParamsSpec = { $: {} };

// Interface: VizDebugOutput
mojo.internal.Struct(
    viz.mojom.VizDebugOutput_LogFrame_ParamsSpec, 'viz.mojom.VizDebugOutput_LogFrame_Params', [
      mojo.internal.StructField('frameData', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.VizDebugOutputPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.VizDebugOutputRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VizDebugOutput';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.VizDebugOutputPendingReceiver,
      handle);
    this.$ = new viz.mojom.VizDebugOutputRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  logFrame(frameData) {
    return this.$.logFrame(frameData);
  }
};

viz.mojom.VizDebugOutputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VizDebugOutput', [
      { explicit: null },
    ]);
  }

  logFrame(frameData) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.VizDebugOutput_LogFrame_ParamsSpec,
      null,
      [frameData],
      false);
  }

};

viz.mojom.VizDebugOutput.getRemote = function() {
  let remote = new viz.mojom.VizDebugOutputRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VizDebugOutput',
    'context');
  return remote.$;
};

viz.mojom.VizDebugOutputReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VizDebugOutput', [
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
             decoder.decodeStructInline(viz.mojom.VizDebugOutput_LogFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.VizDebugOutput_LogFrame_ParamsSpec.$.structSpec);
          const result = this.impl.logFrame(params.frameData);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.VizDebugOutputReceiver = viz.mojom.VizDebugOutputReceiver;

viz.mojom.VizDebugOutputPtr = viz.mojom.VizDebugOutputRemote;
viz.mojom.VizDebugOutputRequest = viz.mojom.VizDebugOutputPendingReceiver;

