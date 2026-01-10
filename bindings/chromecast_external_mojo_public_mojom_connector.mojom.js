// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/external_mojo/public/mojom/connector.mojom
// Module: chromecast.external_mojo.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.external_mojo = chromecast.external_mojo || {};
chromecast.external_mojo.mojom = chromecast.external_mojo.mojom || {};
var mojo_base = mojo_base || {};

chromecast.external_mojo.mojom.ExternalServiceInfoSpec = { $: {} };
chromecast.external_mojo.mojom.ServiceInstanceInfoSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalService = {};
chromecast.external_mojo.mojom.ExternalService.$interfaceName = 'chromecast.external_mojo.mojom.ExternalService';
chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector = {};
chromecast.external_mojo.mojom.ExternalConnector.$interfaceName = 'chromecast.external_mojo.mojom.ExternalConnector';
chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec = { $: {} };
chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec = { $: {} };

// Struct: ExternalServiceInfo
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalServiceInfoSpec, 'chromecast.external_mojo.mojom.ExternalServiceInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connect_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disconnect_time', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ServiceInstanceInfo
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ServiceInstanceInfoSpec, 'chromecast.external_mojo.mojom.ServiceInstanceInfo', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_remote', 8, 0, mojo.internal.InterfaceProxy(chromecast.external_mojo.mojom.ExternalServiceSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ExternalService
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalService_OnBindInterface_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [interface_name, interface_pipe],
      false);
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

chromecast.external_mojo.mojom.ExternalServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.external_mojo.mojom.ExternalService_OnBindInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBindInterface(params.interface_name, params.interface_pipe);
          break;
        }
      }
    }});
  }
};

chromecast.external_mojo.mojom.ExternalServiceReceiver = chromecast.external_mojo.mojom.ExternalServiceReceiver;

chromecast.external_mojo.mojom.ExternalServicePtr = chromecast.external_mojo.mojom.ExternalServiceRemote;
chromecast.external_mojo.mojom.ExternalServiceRequest = chromecast.external_mojo.mojom.ExternalServicePendingReceiver;


// Interface: ExternalConnector
mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_Params', [
      mojo.internal.StructField('instances_info', 0, 0, mojo.internal.Array(chromecast.external_mojo.mojom.ServiceInstanceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_BindInterface_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromecast.external_mojo.mojom.ExternalConnectorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_Params', [
      mojo.internal.StructField('interface_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec, 'chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParams', [
      mojo.internal.StructField('services', 0, 0, mojo.internal.Array(chromecast.external_mojo.mojom.ExternalServiceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [instances_info],
      false);
  }

  bindInterface(service_name, interface_name, interface_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec,
      null,
      [service_name, interface_name, interface_pipe],
      false);
  }

  clone(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindChromiumConnector(interface_pipe) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec,
      null,
      [interface_pipe],
      false);
  }

  queryServiceList() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec,
      chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec,
      [],
      false);
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

chromecast.external_mojo.mojom.ExternalConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.external_mojo.mojom.ExternalConnector_RegisterServiceInstances_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerServiceInstances(params.instances_info);
          break;
        }
        case 1: {
          const params = chromecast.external_mojo.mojom.ExternalConnector_BindInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindInterface(params.service_name, params.interface_name, params.interface_pipe);
          break;
        }
        case 2: {
          const params = chromecast.external_mojo.mojom.ExternalConnector_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 3: {
          const params = chromecast.external_mojo.mojom.ExternalConnector_BindChromiumConnector_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindChromiumConnector(params.interface_pipe);
          break;
        }
        case 4: {
          const params = chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queryServiceList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.external_mojo.mojom.ExternalConnector_QueryServiceList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

chromecast.external_mojo.mojom.ExternalConnectorReceiver = chromecast.external_mojo.mojom.ExternalConnectorReceiver;

chromecast.external_mojo.mojom.ExternalConnectorPtr = chromecast.external_mojo.mojom.ExternalConnectorRemote;
chromecast.external_mojo.mojom.ExternalConnectorRequest = chromecast.external_mojo.mojom.ExternalConnectorPendingReceiver;

