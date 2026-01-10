// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.BindSourceInfoSpec = { $: {} };
service_manager.mojom.Service = {};
service_manager.mojom.Service.$interfaceName = 'service_manager.mojom.Service';
service_manager.mojom.Service_OnStart_ParamsSpec = { $: {} };
service_manager.mojom.Service_OnStart_ResponseParamsSpec = { $: {} };
service_manager.mojom.Service_OnBindInterface_ParamsSpec = { $: {} };
service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec = { $: {} };
service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec = { $: {} };

// Struct: BindSourceInfo
mojo.internal.Struct(
    service_manager.mojom.BindSourceInfoSpec, 'service_manager.mojom.BindSourceInfo', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('required_capabilities', 8, 0, service_manager.mojom.CapabilitySetSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: Service
mojo.internal.Struct(
    service_manager.mojom.Service_OnStart_ParamsSpec, 'service_manager.mojom.Service_OnStart_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.Service_OnStart_ResponseParamsSpec, 'service_manager.mojom.Service_OnStart_ResponseParams', [
      mojo.internal.StructField('connector_receiver', 0, 0, mojo.internal.InterfaceRequest(service_manager.mojom.ConnectorRemote), null, false, 0, undefined),
      mojo.internal.StructField('control_receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    service_manager.mojom.Service_OnBindInterface_ParamsSpec, 'service_manager.mojom.Service_OnBindInterface_Params', [
      mojo.internal.StructField('source', 0, 0, service_manager.mojom.BindSourceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec, 'service_manager.mojom.Service_OnBindInterface_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec, 'service_manager.mojom.Service_CreatePackagedServiceInstance_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(service_manager.mojom.ServiceSpec), null, false, 0, undefined),
      mojo.internal.StructField('metadata', 16, 0, mojo.internal.InterfaceProxy(service_manager.mojom.ProcessMetadataRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

service_manager.mojom.ServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.Service';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServicePendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStart(identity) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.Service_OnStart_ParamsSpec,
      service_manager.mojom.Service_OnStart_ResponseParamsSpec,
      [identity],
      false);
  }

  onBindInterface(source, interface_name, interface_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      service_manager.mojom.Service_OnBindInterface_ParamsSpec,
      service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec,
      [source, interface_name, interface_pipe],
      false);
  }

  createPackagedServiceInstance(identity, receiver, metadata) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec,
      null,
      [identity, receiver, metadata],
      false);
  }

};

service_manager.mojom.Service.getRemote = function() {
  let remote = new service_manager.mojom.ServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.Service',
    'context');
  return remote.$;
};

service_manager.mojom.ServiceReceiver = class {
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
          const params = service_manager.mojom.Service_OnStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStart(params.identity);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, service_manager.mojom.Service_OnStart_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = service_manager.mojom.Service_OnBindInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBindInterface(params.source, params.interface_name, params.interface_pipe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPackagedServiceInstance(params.identity, params.receiver, params.metadata);
          break;
        }
      }
    });
  }
};

service_manager.mojom.ServiceReceiver = service_manager.mojom.ServiceReceiver;

service_manager.mojom.ServicePtr = service_manager.mojom.ServiceRemote;
service_manager.mojom.ServiceRequest = service_manager.mojom.ServicePendingReceiver;

