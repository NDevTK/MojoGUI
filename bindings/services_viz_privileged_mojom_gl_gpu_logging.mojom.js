// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_logging.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: GpuLogging
viz.mojom.GpuLogging = {};

viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuLogging_RecordLogMessage_Params',
      packedSize: 32,
      fields: [
        { name: 'severity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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

// ParamsSpec for RecordLogMessage
viz.mojom.GpuLogging_RecordLogMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuLogging.RecordLogMessage_Params',
      packedSize: 32,
      fields: [
        { name: 'severity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
viz.mojom.GpuLoggingPtr = viz.mojom.GpuLoggingRemote;
viz.mojom.GpuLoggingRequest = viz.mojom.GpuLoggingPendingReceiver;

