// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/traced_process.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};

tracing.mojom.ConnectToTracingRequestSpec = { $: {} };
tracing.mojom.TracedProcess = {};
tracing.mojom.TracedProcess.$interfaceName = 'tracing.mojom.TracedProcess';
tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec = { $: {} };
tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec = { $: {} };

// Struct: ConnectToTracingRequest
mojo.internal.Struct(
    tracing.mojom.ConnectToTracingRequestSpec, 'tracing.mojom.ConnectToTracingRequest', [
      mojo.internal.StructField('perfetto_service', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.PerfettoServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TracedProcess
mojo.internal.Struct(
    tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec, 'tracing.mojom.TracedProcess_ConnectToTracingService_Params', [
      mojo.internal.StructField('request', 0, 0, tracing.mojom.ConnectToTracingRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec, 'tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParams', [
    ],
    [[0, 8]]);

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
      tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec,
      [request],
      false);
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

tracing.mojom.TracedProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToTracingService(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

tracing.mojom.TracedProcessReceiver = tracing.mojom.TracedProcessReceiver;

tracing.mojom.TracedProcessPtr = tracing.mojom.TracedProcessRemote;
tracing.mojom.TracedProcessRequest = tracing.mojom.TracedProcessPendingReceiver;

