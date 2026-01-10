// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/connector.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};
var mojo_base = mojo_base || {};

service_manager.mojom.ConnectResultSpec = { $: mojo.internal.Enum() };
service_manager.mojom.BindInterfacePrioritySpec = { $: mojo.internal.Enum() };
service_manager.mojom.IdentitySpec = { $: {} };
service_manager.mojom.ServiceInfoSpec = { $: {} };
service_manager.mojom.ProcessMetadata = {};
service_manager.mojom.ProcessMetadata.$interfaceName = 'service_manager.mojom.ProcessMetadata';
service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec = { $: {} };
service_manager.mojom.Connector = {};
service_manager.mojom.Connector.$interfaceName = 'service_manager.mojom.Connector';
service_manager.mojom.Connector_BindInterface_ParamsSpec = { $: {} };
service_manager.mojom.Connector_BindInterface_ResponseParamsSpec = { $: {} };
service_manager.mojom.Connector_QueryService_ParamsSpec = { $: {} };
service_manager.mojom.Connector_QueryService_ResponseParamsSpec = { $: {} };
service_manager.mojom.Connector_WarmService_ParamsSpec = { $: {} };
service_manager.mojom.Connector_WarmService_ResponseParamsSpec = { $: {} };
service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec = { $: {} };
service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec = { $: {} };
service_manager.mojom.Connector_Clone_ParamsSpec = { $: {} };

// Enum: ConnectResult
service_manager.mojom.ConnectResult = {
  SUCCEEDED: 0,
  INVALID_ARGUMENT: 1,
  ACCESS_DENIED: 2,
};

// Enum: BindInterfacePriority
service_manager.mojom.BindInterfacePriority = {
  kImportant: 0,
  kBestEffort: 1,
};

// Struct: Identity
mojo.internal.Struct(
    service_manager.mojom.IdentitySpec, 'service_manager.mojom.Identity', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('instance_group', 8, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('instance_id', 16, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('globally_unique_id', 24, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ServiceInfo
mojo.internal.Struct(
    service_manager.mojom.ServiceInfoSpec, 'service_manager.mojom.ServiceInfo', [
      mojo.internal.StructField('sandbox_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ProcessMetadata
mojo.internal.Struct(
    service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec, 'service_manager.mojom.ProcessMetadata_SetPID_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [pid],
      false);
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

service_manager.mojom.ProcessMetadataReceiver = class {
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
          const params = service_manager.mojom.ProcessMetadata_SetPID_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPID(params.pid);
          break;
        }
      }
    });
  }
};

service_manager.mojom.ProcessMetadataReceiver = service_manager.mojom.ProcessMetadataReceiver;

service_manager.mojom.ProcessMetadataPtr = service_manager.mojom.ProcessMetadataRemote;
service_manager.mojom.ProcessMetadataRequest = service_manager.mojom.ProcessMetadataPendingReceiver;


// Interface: Connector
mojo.internal.Struct(
    service_manager.mojom.Connector_BindInterface_ParamsSpec, 'service_manager.mojom.Connector_BindInterface_Params', [
      mojo.internal.StructField('filter', 0, 0, service_manager.mojom.ServiceFilterSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('priority', 24, 0, service_manager.mojom.BindInterfacePrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_BindInterface_ResponseParamsSpec, 'service_manager.mojom.Connector_BindInterface_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, service_manager.mojom.ConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('identity', 8, 0, service_manager.mojom.IdentitySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_QueryService_ParamsSpec, 'service_manager.mojom.Connector_QueryService_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_QueryService_ResponseParamsSpec, 'service_manager.mojom.Connector_QueryService_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, service_manager.mojom.ServiceInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_WarmService_ParamsSpec, 'service_manager.mojom.Connector_WarmService_Params', [
      mojo.internal.StructField('filter', 0, 0, service_manager.mojom.ServiceFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_WarmService_ResponseParamsSpec, 'service_manager.mojom.Connector_WarmService_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, service_manager.mojom.ConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('identity', 8, 0, service_manager.mojom.IdentitySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec, 'service_manager.mojom.Connector_RegisterServiceInstance_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('metadata_receiver', 16, 0, mojo.internal.InterfaceRequest(service_manager.mojom.ProcessMetadataRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec, 'service_manager.mojom.Connector_RegisterServiceInstance_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, service_manager.mojom.ConnectResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.Connector_Clone_ParamsSpec, 'service_manager.mojom.Connector_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(service_manager.mojom.ConnectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [filter, interface_name, interface_pipe, priority],
      false);
  }

  queryService(service_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      service_manager.mojom.Connector_QueryService_ParamsSpec,
      service_manager.mojom.Connector_QueryService_ResponseParamsSpec,
      [service_name],
      false);
  }

  warmService(filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      service_manager.mojom.Connector_WarmService_ParamsSpec,
      service_manager.mojom.Connector_WarmService_ResponseParamsSpec,
      [filter],
      false);
  }

  registerServiceInstance(identity, service, metadata_receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec,
      service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec,
      [identity, service, metadata_receiver],
      false);
  }

  clone(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      service_manager.mojom.Connector_Clone_ParamsSpec,
      null,
      [receiver],
      false);
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

service_manager.mojom.ConnectorReceiver = class {
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
          const params = service_manager.mojom.Connector_BindInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindInterface(params.filter, params.interface_name, params.interface_pipe, params.priority);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, service_manager.mojom.Connector_BindInterface_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = service_manager.mojom.Connector_QueryService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queryService(params.service_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, service_manager.mojom.Connector_QueryService_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = service_manager.mojom.Connector_WarmService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.warmService(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, service_manager.mojom.Connector_WarmService_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = service_manager.mojom.Connector_RegisterServiceInstance_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerServiceInstance(params.identity, params.service, params.metadata_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, service_manager.mojom.Connector_RegisterServiceInstance_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = service_manager.mojom.Connector_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
    });
  }
};

service_manager.mojom.ConnectorReceiver = service_manager.mojom.ConnectorReceiver;

service_manager.mojom.ConnectorPtr = service_manager.mojom.ConnectorRemote;
service_manager.mojom.ConnectorRequest = service_manager.mojom.ConnectorPendingReceiver;

