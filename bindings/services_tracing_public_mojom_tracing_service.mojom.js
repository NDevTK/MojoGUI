// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kUtility;

tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kService;

// Struct: ClientInfo
tracing.mojom.ClientInfoSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ClientInfo',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'process', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: TracingService
tracing.mojom.TracingService = {};

tracing.mojom.TracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(clients) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracingService_Initialize_ParamsSpec,
      null,
      [clients]);
  }

  addClient(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.TracingService_AddClient_ParamsSpec,
      null,
      [client]);
  }

  bindConsumerHost(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.TracingService_BindConsumerHost_ParamsSpec,
      null,
      [receiver]);
  }

};

tracing.mojom.TracingService.getRemote = function() {
  let remote = new tracing.mojom.TracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingService',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
tracing.mojom.TracingService_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingService.Initialize_Params',
      packedSize: 16,
      fields: [
        { name: 'clients', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tracing.mojom.ClientInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddClient
tracing.mojom.TracingService_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingService.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.ClientInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindConsumerHost
tracing.mojom.TracingService_BindConsumerHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingService.BindConsumerHost_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.TracingServicePtr = tracing.mojom.TracingServiceRemote;
tracing.mojom.TracingServiceRequest = tracing.mojom.TracingServicePendingReceiver;

