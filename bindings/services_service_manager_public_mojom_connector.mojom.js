// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/connector.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Enum: ConnectResult
service_manager.mojom.ConnectResult = {
  SUCCEEDED: 0,
  INVALID_ARGUMENT: 1,
  ACCESS_DENIED: 2,
};
service_manager.mojom.ConnectResultSpec = { $: mojo.internal.Enum() };

// Enum: BindInterfacePriority
service_manager.mojom.BindInterfacePriority = {
  kImportant: 0,
  kBestEffort: 1,
};
service_manager.mojom.BindInterfacePrioritySpec = { $: mojo.internal.Enum() };

// Struct: Identity
service_manager.mojom.IdentitySpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Identity',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'instance_group', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'instance_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'globally_unique_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ServiceInfo
service_manager.mojom.ServiceInfoSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceInfo',
      packedSize: 16,
      fields: [
        { name: 'sandbox_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ProcessMetadata
service_manager.mojom.ProcessMetadata = {};

service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ProcessMetadata_SetPID_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

service_manager.mojom.ProcessMetadataPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ProcessMetadataRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ProcessMetadata';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ProcessMetadataPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ProcessMetadataRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ProcessMetadataRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPID(pid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec,
      null,
      [pid]);
  }

};

service_manager.mojom.ProcessMetadata.getRemote = function() {
  let remote = new service_manager.mojom.ProcessMetadataRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ProcessMetadata',
    'context');
  return remote.$;
};

// ParamsSpec for SetPID
service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ProcessMetadata.SetPID_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
service_manager.mojom.ProcessMetadataPtr = service_manager.mojom.ProcessMetadataRemote;
service_manager.mojom.ProcessMetadataRequest = service_manager.mojom.ProcessMetadataPendingReceiver;


// Interface: Connector
service_manager.mojom.Connector = {};

service_manager.mojom.Connector_BindInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector_BindInterface_Params',
      packedSize: 40,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.ServiceFilterSpec, nullable: false, minVersion: 0 },
        { name: 'interface_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interface_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 24, packedBitOffset: 0, type: service_manager.mojom.BindInterfacePrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

service_manager.mojom.Connector_QueryService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector_QueryService_Params',
      packedSize: 16,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

service_manager.mojom.Connector_WarmService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector_WarmService_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.ServiceFilterSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector_RegisterServiceInstance_Params',
      packedSize: 32,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.IdentitySpec, nullable: false, minVersion: 0 },
        { name: 'service', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'metadata_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(service_manager.mojom.ProcessMetadataRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

service_manager.mojom.Connector_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector_Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(service_manager.mojom.ConnectorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

service_manager.mojom.ConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ConnectorRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.Connector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ConnectorPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindInterface(filter, interface_name, interface_pipe, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.Connector_BindInterface_ParamsSpec,
      service_manager.mojom.Connector_BindInterface_ResponseParamsSpec,
      [filter, interface_name, interface_pipe, priority]);
  }

  queryService(service_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      service_manager.mojom.Connector_QueryService_ParamsSpec,
      service_manager.mojom.Connector_QueryService_ResponseParamsSpec,
      [service_name]);
  }

  warmService(filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      service_manager.mojom.Connector_WarmService_ParamsSpec,
      service_manager.mojom.Connector_WarmService_ResponseParamsSpec,
      [filter]);
  }

  registerServiceInstance(identity, service, metadata_receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec,
      service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec,
      [identity, service, metadata_receiver]);
  }

  clone(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      service_manager.mojom.Connector_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

service_manager.mojom.Connector.getRemote = function() {
  let remote = new service_manager.mojom.ConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.Connector',
    'context');
  return remote.$;
};

// ParamsSpec for BindInterface
service_manager.mojom.Connector_BindInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.BindInterface_Params',
      packedSize: 40,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.ServiceFilterSpec, nullable: false, minVersion: 0 },
        { name: 'interface_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interface_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 24, packedBitOffset: 0, type: service_manager.mojom.BindInterfacePrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

service_manager.mojom.Connector_BindInterface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.BindInterface_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: service_manager.mojom.ConnectResultSpec, nullable: false, minVersion: 0 },
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.IdentitySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for QueryService
service_manager.mojom.Connector_QueryService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.QueryService_Params',
      packedSize: 16,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

service_manager.mojom.Connector_QueryService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.QueryService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.ServiceInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WarmService
service_manager.mojom.Connector_WarmService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.WarmService_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.ServiceFilterSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

service_manager.mojom.Connector_WarmService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.WarmService_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: service_manager.mojom.ConnectResultSpec, nullable: false, minVersion: 0 },
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.IdentitySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RegisterServiceInstance
service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.RegisterServiceInstance_Params',
      packedSize: 32,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.IdentitySpec, nullable: false, minVersion: 0 },
        { name: 'service', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'metadata_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(service_manager.mojom.ProcessMetadataRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.RegisterServiceInstance_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: service_manager.mojom.ConnectResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
service_manager.mojom.Connector_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.Connector.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(service_manager.mojom.ConnectorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
service_manager.mojom.ConnectorPtr = service_manager.mojom.ConnectorRemote;
service_manager.mojom.ConnectorRequest = service_manager.mojom.ConnectorPendingReceiver;

