// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/system_tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'tracing.mojom.SystemTracingService',
    'context');
  return remote.$;
};

tracing.mojom.SystemTracingServicePtr = tracing.mojom.SystemTracingServiceRemote;
tracing.mojom.SystemTracingServiceRequest = tracing.mojom.SystemTracingServicePendingReceiver;

