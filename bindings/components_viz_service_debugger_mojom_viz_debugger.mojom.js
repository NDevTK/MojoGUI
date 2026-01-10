// Auto-generated MojoJS binding
// Source: chromium_src/components/viz/service/debugger/mojom/viz_debugger.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: VizDebugOutput
viz.mojom.mojom.VizDebugOutput = {};

viz.mojom.mojom.VizDebugOutputPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.VizDebugOutputRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VizDebugOutput';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.VizDebugOutputPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.VizDebugOutputRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.VizDebugOutputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logFrame(frameData) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.VizDebugOutput_LogFrame_ParamsSpec,
      null,
      [frameData]);
  }

};

viz.mojom.mojom.VizDebugOutput.getRemote = function() {
  let remote = new viz.mojom.mojom.VizDebugOutputRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VizDebugOutput',
    'context');
  return remote.$;
};

// ParamsSpec for LogFrame
viz.mojom.mojom.VizDebugOutput_LogFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VizDebugOutput.LogFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'frameData', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.VizDebugOutputPtr = viz.mojom.mojom.VizDebugOutputRemote;
viz.mojom.mojom.VizDebugOutputRequest = viz.mojom.mojom.VizDebugOutputPendingReceiver;

