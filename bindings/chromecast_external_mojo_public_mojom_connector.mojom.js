// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/external_mojo/public/mojom/connector.mojom
// Module: chromecast.external_mojo.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.external_mojo = chromecast.external_mojo || {};
chromecast.external_mojo.mojom = chromecast.external_mojo.mojom || {};


// Struct: ExternalServiceInfo
chromecast.external_mojo.mojom.ExternalServiceInfoSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalServiceInfo',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'connect_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'disconnect_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ServiceInstanceInfo
chromecast.external_mojo.mojom.ServiceInstanceInfoSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ServiceInstanceInfo',
      packedSize: 24,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'service_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ExternalService
chromecast.external_mojo.mojom.ExternalService = {};

chromecast.external_mojo.mojom.ExternalServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.external_mojo.mojom.ExternalServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.external_mojo.mojom.ExternalService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.external_mojo.mojom.ExternalServicePendingReceiver,
      handle);
    this.$ = new chromecast.external_mojo.mojom.ExternalServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.external_mojo.mojom.ExternalServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBindInterface(interface_name, interface_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec,
      null,
      [interface_name, interface_pipe]);
  }

};

chromecast.external_mojo.mojom.ExternalService.getRemote = function() {
  let remote = new chromecast.external_mojo.mojom.ExternalServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.external_mojo.mojom.ExternalService',
    'context');
  return remote.$;
};

// ParamsSpec for OnBindInterface
chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalService.OnBindInterface_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'interface_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.external_mojo.mojom.ExternalServicePtr = chromecast.external_mojo.mojom.ExternalServiceRemote;
chromecast.external_mojo.mojom.ExternalServiceRequest = chromecast.external_mojo.mojom.ExternalServicePendingReceiver;


// Interface: ExternalConnector
chromecast.external_mojo.mojom.ExternalConnector = {};

chromecast.external_mojo.mojom.ExternalConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.external_mojo.mojom.ExternalConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.external_mojo.mojom.ExternalConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.external_mojo.mojom.ExternalConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.external_mojo.mojom.ExternalConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.external_mojo.mojom.ExternalConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerServiceInstances(instances_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec,
      null,
      [instances_info]);
  }

  bindInterface(service_name, interface_name, interface_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec,
      null,
      [service_name, interface_name, interface_pipe]);
  }

  clone(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec,
      null,
      [receiver]);
  }

  bindChromiumConnector(interface_pipe) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec,
      null,
      [interface_pipe]);
  }

  queryServiceList() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec,
      chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec,
      []);
  }

};

chromecast.external_mojo.mojom.ExternalConnector.getRemote = function() {
  let remote = new chromecast.external_mojo.mojom.ExternalConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.external_mojo.mojom.ExternalConnector',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterServiceInstances
chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalConnector.RegisterServiceInstances_Params',
      packedSize: 16,
      fields: [
        { name: 'instances_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindInterface
chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalConnector.BindInterface_Params',
      packedSize: 32,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'interface_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'interface_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalConnector.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindChromiumConnector
chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalConnector.BindChromiumConnector_Params',
      packedSize: 16,
      fields: [
        { name: 'interface_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueryServiceList
chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalConnector.QueryServiceList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.ExternalConnector.QueryServiceList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'services', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.external_mojo.mojom.ExternalConnectorPtr = chromecast.external_mojo.mojom.ExternalConnectorRemote;
chromecast.external_mojo.mojom.ExternalConnectorRequest = chromecast.external_mojo.mojom.ExternalConnectorPendingReceiver;

