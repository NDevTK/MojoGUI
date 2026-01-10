// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Struct: BindSourceInfo
service_manager.mojom.mojom.BindSourceInfoSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.BindSourceInfo',
      packedSize: 24,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.IdentitySpec, nullable: false, minVersion: 0 },
        { name: 'required_capabilities', packedOffset: 8, packedBitOffset: 0, type: service_manager.mojom.CapabilitySetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: Service
service_manager.mojom.mojom.Service = {};

service_manager.mojom.mojom.ServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.mojom.ServiceRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.Service';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.mojom.ServicePendingReceiver,
      handle);
    this.$ = new service_manager.mojom.mojom.ServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.mojom.ServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStart(identity) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.mojom.Service_OnStart_ParamsSpec,
      service_manager.mojom.mojom.Service_OnStart_ResponseParamsSpec,
      [identity]);
  }

  onBindInterface(source, interface_name, interface_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      service_manager.mojom.mojom.Service_OnBindInterface_ParamsSpec,
      null,
      [source, interface_name, interface_pipe]);
  }

  createPackagedServiceInstance(identity, receiver, metadata) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      service_manager.mojom.mojom.Service_CreatePackagedServiceInstance_ParamsSpec,
      null,
      [identity, receiver, metadata]);
  }

};

service_manager.mojom.mojom.Service.getRemote = function() {
  let remote = new service_manager.mojom.mojom.ServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.Service',
    'context');
  return remote.$;
};

// ParamsSpec for OnStart
service_manager.mojom.mojom.Service_OnStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Service.OnStart_Params',
      packedSize: 16,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.IdentitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

service_manager.mojom.mojom.Service_OnStart_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Service.OnStart_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'connector_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(service_manager.mojom.ConnectorRemote), nullable: false, minVersion: 0 },
        { name: 'control_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(service_manager.mojom.ServiceControlRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnBindInterface
service_manager.mojom.mojom.Service_OnBindInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Service.OnBindInterface_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.BindSourceInfoSpec, nullable: false, minVersion: 0 },
        { name: 'interface_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interface_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CreatePackagedServiceInstance
service_manager.mojom.mojom.Service_CreatePackagedServiceInstance_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Service.CreatePackagedServiceInstance_Params',
      packedSize: 32,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.IdentitySpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(service_manager.mojom.ServiceRemote), nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(service_manager.mojom.ProcessMetadataRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
service_manager.mojom.mojom.ServicePtr = service_manager.mojom.mojom.ServiceRemote;
service_manager.mojom.mojom.ServiceRequest = service_manager.mojom.mojom.ServicePendingReceiver;

