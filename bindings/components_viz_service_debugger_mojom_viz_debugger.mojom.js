// Auto-generated MojoJS binding
// Source: chromium_src/components/viz/service/debugger/mojom/viz_debugger.mojom
// Module: viz.mojom

'use strict';

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
};

viz.mojom.VizDebugOutputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logFrame(frameData) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.VizDebugOutput_LogFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logFrame(params.frameData);
          break;
        }
      }
    }});
  }
};

viz.mojom.VizDebugOutputReceiver = viz.mojom.VizDebugOutputReceiver;

viz.mojom.VizDebugOutputPtr = viz.mojom.VizDebugOutputRemote;
viz.mojom.VizDebugOutputRequest = viz.mojom.VizDebugOutputPendingReceiver;

