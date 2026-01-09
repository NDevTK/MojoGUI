// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/traced_process.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Interface: TracedProcess
tracing.mojom.TracedProcess = {};

tracing.mojom.TracedProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracedProcessRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracedProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracedProcessPendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracedProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracedProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToTracingService(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec,
      null,
      null,
      [request],
      undefined,
      undefined
    );
  }

};

tracing.mojom.TracedProcess.getRemote = function() {
  let remote = new tracing.mojom.TracedProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracedProcess',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToTracingService
tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracedProcess.ConnectToTracingService_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.TracedProcessPtr = tracing.mojom.TracedProcessRemote;
tracing.mojom.TracedProcessRequest = tracing.mojom.TracedProcessPendingReceiver;

