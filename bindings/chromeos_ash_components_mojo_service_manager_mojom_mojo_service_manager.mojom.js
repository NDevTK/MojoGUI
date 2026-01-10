// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mojo_service_manager/mojom/mojo_service_manager.mojom
// Module: chromeos.mojo_service_manager.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.mojo_service_manager = chromeos.mojo_service_manager || {};
chromeos.mojo_service_manager.mojom = chromeos.mojo_service_manager.mojom || {};
var mojo_base = mojo_base || {};

chromeos.mojo_service_manager.mojom.TypeSpec = { $: mojo.internal.Enum() };
chromeos.mojo_service_manager.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };
chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ProcessIdentitySpec = { $: {} };
chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceEventSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ErrorSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager = {};
chromeos.mojo_service_manager.mojom.ServiceManager.$interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceManager';
chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceProvider = {};
chromeos.mojo_service_manager.mojom.ServiceProvider.$interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceProvider';
chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceObserver = {};
chromeos.mojo_service_manager.mojom.ServiceObserver.$interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceObserver';
chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec = { $: {} };

// Enum: Type
chromeos.mojo_service_manager.mojom.Type = {
  kUnknown: 0,
  kRegistered: 1,
  kUnRegistered: 2,
};

// Enum: ErrorCode
chromeos.mojo_service_manager.mojom.ErrorCode = {
  kUnknown: 1,
  kTimeout: 2,
  kPermissionDenied: 3,
  kServiceAlreadyRegistered: 4,
  kServiceNotFound: 5,
  kUnexpectedOsError: 6,
};

// Union: ErrorOrServiceState
mojo.internal.Union(
    chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec, 'chromeos.mojo_service_manager.mojom.ErrorOrServiceState', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'state': {
        'ordinal': 1,
        'type': chromeos.mojo_service_manager.mojom.ServiceStateSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 2,
        'type': chromeos.mojo_service_manager.mojom.ErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ServiceState
mojo.internal.Union(
    chromeos.mojo_service_manager.mojom.ServiceStateSpec, 'chromeos.mojo_service_manager.mojom.ServiceState', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'registered_state': {
        'ordinal': 1,
        'type': chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec.$,
        'nullable': false,
      },
      'unregistered_state': {
        'ordinal': 2,
        'type': chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec.$,
        'nullable': false,
      },
    });

// Struct: ProcessIdentity
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ProcessIdentitySpec, 'chromeos.mojo_service_manager.mojom.ProcessIdentity', [
      mojo.internal.StructField('security_context', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('uid', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('gid', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RegisteredServiceState
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec, 'chromeos.mojo_service_manager.mojom.RegisteredServiceState', [
      mojo.internal.StructField('owner', 0, 0, chromeos.mojo_service_manager.mojom.ProcessIdentitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnregisteredServiceState
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec, 'chromeos.mojo_service_manager.mojom.UnregisteredServiceState', [
    ],
    [[0, 8]]);

// Struct: ServiceEvent
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceEventSpec, 'chromeos.mojo_service_manager.mojom.ServiceEvent', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Error
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ErrorSpec, 'chromeos.mojo_service_manager.mojom.Error', [
      mojo.internal.StructField('code', 0, 0, chromeos.mojo_service_manager.mojom.ErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceManager
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Register_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_provider', 8, 0, mojo.internal.InterfaceProxy(chromeos.mojo_service_manager.mojom.ServiceProviderSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Request_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Query_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.mojo_service_manager.mojom.ServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.mojo_service_manager.mojom.ServiceManagerRemote = class {
  static get $interfaceName() {
    return 'chromeos.mojo_service_manager.mojom.ServiceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver,
      handle);
    this.$ = new chromeos.mojo_service_manager.mojom.ServiceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.mojo_service_manager.mojom.ServiceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(service_name, service_provider) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec,
      null,
      [service_name, service_provider],
      false);
  }

  request(service_name, timeout, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec,
      null,
      [service_name, timeout, receiver],
      false);
  }

  query(service_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec,
      chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec,
      [service_name],
      false);
  }

  addServiceObserver(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromeos.mojo_service_manager.mojom.ServiceManager.getRemote = function() {
  let remote = new chromeos.mojo_service_manager.mojom.ServiceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.mojo_service_manager.mojom.ServiceManager',
    'context');
  return remote.$;
};

chromeos.mojo_service_manager.mojom.ServiceManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec.$.decode(message.payload);
          const result = this.impl.register(params.service_name, params.service_provider);
          break;
        }
        case 1: {
          const params = chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec.$.decode(message.payload);
          const result = this.impl.request(params.service_name, params.timeout, params.receiver);
          break;
        }
        case 2: {
          const params = chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec.$.decode(message.payload);
          const result = this.impl.query(params.service_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addServiceObserver(params.observer);
          break;
        }
      }
    });
  }
};

chromeos.mojo_service_manager.mojom.ServiceManagerReceiver = chromeos.mojo_service_manager.mojom.ServiceManagerReceiver;

chromeos.mojo_service_manager.mojom.ServiceManagerPtr = chromeos.mojo_service_manager.mojom.ServiceManagerRemote;
chromeos.mojo_service_manager.mojom.ServiceManagerRequest = chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver;


// Interface: ServiceProvider
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceProvider_Request_Params', [
      mojo.internal.StructField('client_identity', 0, 0, chromeos.mojo_service_manager.mojom.ProcessIdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.mojo_service_manager.mojom.ServiceProviderRemote = class {
  static get $interfaceName() {
    return 'chromeos.mojo_service_manager.mojom.ServiceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver,
      handle);
    this.$ = new chromeos.mojo_service_manager.mojom.ServiceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.mojo_service_manager.mojom.ServiceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  request(client_identity, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec,
      null,
      [client_identity, receiver],
      false);
  }

};

chromeos.mojo_service_manager.mojom.ServiceProvider.getRemote = function() {
  let remote = new chromeos.mojo_service_manager.mojom.ServiceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.mojo_service_manager.mojom.ServiceProvider',
    'context');
  return remote.$;
};

chromeos.mojo_service_manager.mojom.ServiceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec.$.decode(message.payload);
          const result = this.impl.request(params.client_identity, params.receiver);
          break;
        }
      }
    });
  }
};

chromeos.mojo_service_manager.mojom.ServiceProviderReceiver = chromeos.mojo_service_manager.mojom.ServiceProviderReceiver;

chromeos.mojo_service_manager.mojom.ServiceProviderPtr = chromeos.mojo_service_manager.mojom.ServiceProviderRemote;
chromeos.mojo_service_manager.mojom.ServiceProviderRequest = chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver;


// Interface: ServiceObserver
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_Params', [
      mojo.internal.StructField('event', 0, 0, chromeos.mojo_service_manager.mojom.ServiceEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.mojo_service_manager.mojom.ServiceObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.mojo_service_manager.mojom.ServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver,
      handle);
    this.$ = new chromeos.mojo_service_manager.mojom.ServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.mojo_service_manager.mojom.ServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onServiceEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

chromeos.mojo_service_manager.mojom.ServiceObserver.getRemote = function() {
  let remote = new chromeos.mojo_service_manager.mojom.ServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.mojo_service_manager.mojom.ServiceObserver',
    'context');
  return remote.$;
};

chromeos.mojo_service_manager.mojom.ServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onServiceEvent(params.event);
          break;
        }
      }
    });
  }
};

chromeos.mojo_service_manager.mojom.ServiceObserverReceiver = chromeos.mojo_service_manager.mojom.ServiceObserverReceiver;

chromeos.mojo_service_manager.mojom.ServiceObserverPtr = chromeos.mojo_service_manager.mojom.ServiceObserverRemote;
chromeos.mojo_service_manager.mojom.ServiceObserverRequest = chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver;

