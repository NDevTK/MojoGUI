// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mojo_service_manager/mojom/mojo_service_manager.mojom
// Module: chromeos.mojo_service_manager.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.mojo_service_manager = chromeos.mojo_service_manager || {};
chromeos.mojo_service_manager.mojom = chromeos.mojo_service_manager.mojom || {};


// Enum: Type
chromeos.mojo_service_manager.mojom.Type = {
  kRegistered: 0,
  kUnRegistered: 1,
};
chromeos.mojo_service_manager.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: ErrorCode
chromeos.mojo_service_manager.mojom.ErrorCode = {
  kTimeout: 0,
  kPermissionDenied: 1,
  kServiceAlreadyRegistered: 2,
  kServiceNotFound: 3,
  kUnexpectedOsError: 4,
};
chromeos.mojo_service_manager.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };

// Union: ErrorOrServiceState
chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec = { $: mojo.internal.Union(
    'chromeos.mojo_service_manager.mojom.ErrorOrServiceState', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'state': {
        'ordinal': 1,
        'type': chromeos.mojo_service_manager.mojom.ServiceStateSpec,
      }},
      'error': {
        'ordinal': 2,
        'type': chromeos.mojo_service_manager.mojom.ErrorSpec,
      }},
    })
};

// Union: ServiceState
chromeos.mojo_service_manager.mojom.ServiceStateSpec = { $: mojo.internal.Union(
    'chromeos.mojo_service_manager.mojom.ServiceState', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'registered_state': {
        'ordinal': 1,
        'type': chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec,
      }},
      'unregistered_state': {
        'ordinal': 2,
        'type': chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec,
      }},
    })
};

// Struct: ProcessIdentity
chromeos.mojo_service_manager.mojom.ProcessIdentitySpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ProcessIdentity',
      packedSize: 32,
      fields: [
        { name: 'security_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'uid', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'gid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RegisteredServiceState
chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.RegisteredServiceState',
      packedSize: 16,
      fields: [
        { name: 'owner', packedOffset: 0, packedBitOffset: 0, type: chromeos.mojo_service_manager.mojom.ProcessIdentitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UnregisteredServiceState
chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.UnregisteredServiceState',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ServiceEvent
chromeos.mojo_service_manager.mojom.ServiceEventSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ServiceEvent',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Error
chromeos.mojo_service_manager.mojom.ErrorSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.Error',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: chromeos.mojo_service_manager.mojom.ErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ServiceManager
chromeos.mojo_service_manager.mojom.ServiceManager = {};

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
      [service_name, service_provider]);
  }

  request(service_name, timeout, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec,
      null,
      [service_name, timeout, receiver]);
  }

  query(service_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec,
      chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec,
      [service_name]);
  }

  addServiceObserver(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for Register
chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ServiceManager.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'service_provider', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Request
chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ServiceManager.Request_Params',
      packedSize: 32,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Query
chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ServiceManager.Query_Params',
      packedSize: 16,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddServiceObserver
chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ServiceManager.AddServiceObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.mojo_service_manager.mojom.ServiceManagerPtr = chromeos.mojo_service_manager.mojom.ServiceManagerRemote;
chromeos.mojo_service_manager.mojom.ServiceManagerRequest = chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver;


// Interface: ServiceProvider
chromeos.mojo_service_manager.mojom.ServiceProvider = {};

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
      [client_identity, receiver]);
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

// ParamsSpec for Request
chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ServiceProvider.Request_Params',
      packedSize: 24,
      fields: [
        { name: 'client_identity', packedOffset: 0, packedBitOffset: 0, type: chromeos.mojo_service_manager.mojom.ProcessIdentitySpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.mojo_service_manager.mojom.ServiceProviderPtr = chromeos.mojo_service_manager.mojom.ServiceProviderRemote;
chromeos.mojo_service_manager.mojom.ServiceProviderRequest = chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver;


// Interface: ServiceObserver
chromeos.mojo_service_manager.mojom.ServiceObserver = {};

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
      [event]);
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

// ParamsSpec for OnServiceEvent
chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.mojo_service_manager.mojom.ServiceObserver.OnServiceEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: chromeos.mojo_service_manager.mojom.ServiceEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.mojo_service_manager.mojom.ServiceObserverPtr = chromeos.mojo_service_manager.mojom.ServiceObserverRemote;
chromeos.mojo_service_manager.mojom.ServiceObserverRequest = chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver;

