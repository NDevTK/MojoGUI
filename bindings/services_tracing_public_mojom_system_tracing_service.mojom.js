// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/system_tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Interface: SystemTracingService
tracing.mojom.mojom.SystemTracingService = {};

tracing.mojom.mojom.SystemTracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.mojom.SystemTracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.SystemTracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.mojom.SystemTracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.mojom.SystemTracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.mojom.SystemTracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openProducerSocket() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec,
      tracing.mojom.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec,
      []);
  }

};

tracing.mojom.mojom.SystemTracingService.getRemote = function() {
  let remote = new tracing.mojom.mojom.SystemTracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.SystemTracingService',
    'context');
  return remote.$;
};

// ParamsSpec for OpenProducerSocket
tracing.mojom.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.SystemTracingService.OpenProducerSocket_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tracing.mojom.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.SystemTracingService.OpenProducerSocket_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'traced_socket', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.mojom.SystemTracingServicePtr = tracing.mojom.mojom.SystemTracingServiceRemote;
tracing.mojom.mojom.SystemTracingServiceRequest = tracing.mojom.mojom.SystemTracingServicePendingReceiver;

