// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/system_tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Interface: SystemTracingService
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
      tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec.$,
      tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for OpenProducerSocket
tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.SystemTracingService.OpenProducerSocket_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.SystemTracingService.OpenProducerSocket_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'traced_socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tracing.mojom.SystemTracingServicePtr = tracing.mojom.SystemTracingServiceRemote;
tracing.mojom.SystemTracingServiceRequest = tracing.mojom.SystemTracingServicePendingReceiver;

