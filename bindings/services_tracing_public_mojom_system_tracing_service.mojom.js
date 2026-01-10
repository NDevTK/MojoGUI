// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/system_tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};
var mojo_base = mojo_base || {};

tracing.mojom.SystemTracingService = {};
tracing.mojom.SystemTracingService.$interfaceName = 'tracing.mojom.SystemTracingService';
tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec = { $: {} };
tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec = { $: {} };

// Interface: SystemTracingService
mojo.internal.Struct(
    tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec, 'tracing.mojom.SystemTracingService_OpenProducerSocket_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec, 'tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParams', [
      mojo.internal.StructField('traced_socket', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

tracing.mojom.SystemTracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.SystemTracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.SystemTracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.SystemTracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.SystemTracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.SystemTracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openProducerSocket() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec,
      tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec,
      [],
      false);
  }

};

tracing.mojom.SystemTracingService.getRemote = function() {
  let remote = new tracing.mojom.SystemTracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.SystemTracingService',
    'context');
  return remote.$;
};

tracing.mojom.SystemTracingServiceReceiver = class {
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
          const params = tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openProducerSocket();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

tracing.mojom.SystemTracingServiceReceiver = tracing.mojom.SystemTracingServiceReceiver;

tracing.mojom.SystemTracingServicePtr = tracing.mojom.SystemTracingServiceRemote;
tracing.mojom.SystemTracingServiceRequest = tracing.mojom.SystemTracingServicePendingReceiver;

