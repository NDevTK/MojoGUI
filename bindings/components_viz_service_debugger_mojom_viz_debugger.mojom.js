// Auto-generated MojoJS binding
// Source: chromium_src/components/viz/service/debugger/mojom/viz_debugger.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: VizDebugOutput
viz.mojom.VizDebugOutput = {};

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
      [frameData]);
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

// ParamsSpec for LogFrame
viz.mojom.VizDebugOutput_LogFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizDebugOutput.LogFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'frameData', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.VizDebugOutputPtr = viz.mojom.VizDebugOutputRemote;
viz.mojom.VizDebugOutputRequest = viz.mojom.VizDebugOutputPendingReceiver;

