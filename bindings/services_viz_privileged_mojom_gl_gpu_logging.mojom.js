// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_logging.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.GpuLogging = {};
viz.mojom.GpuLogging.$interfaceName = 'viz.mojom.GpuLogging';
viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec = { $: {} };

// Interface: GpuLogging
mojo.internal.Struct(
    viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec, 'viz.mojom.GpuLogging_RecordLogMessage_Params', [
      mojo.internal.StructField('severity', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('header', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
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
};

viz.mojom.GpuLoggingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordLogMessage(severity, header, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec,
      null,
      [severity, header, message]);
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

viz.mojom.GpuLoggingPtr = viz.mojom.GpuLoggingRemote;
viz.mojom.GpuLoggingRequest = viz.mojom.GpuLoggingPendingReceiver;

