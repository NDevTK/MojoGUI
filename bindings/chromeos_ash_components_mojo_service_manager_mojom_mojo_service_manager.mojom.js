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

// Enum: ErrorCode
chromeos.mojo_service_manager.mojom.ErrorCode = {
  kTimeout: 0,
  kPermissionDenied: 1,
  kServiceAlreadyRegistered: 2,
  kServiceNotFound: 3,
  kUnexpectedOsError: 4,
};

// Interface: ServiceManager
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

// Legacy compatibility
chromeos.mojo_service_manager.mojom.ServiceManagerPtr = chromeos.mojo_service_manager.mojom.ServiceManagerRemote;
chromeos.mojo_service_manager.mojom.ServiceManagerRequest = chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver;


// Interface: ServiceProvider
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

// Legacy compatibility
chromeos.mojo_service_manager.mojom.ServiceProviderPtr = chromeos.mojo_service_manager.mojom.ServiceProviderRemote;
chromeos.mojo_service_manager.mojom.ServiceProviderRequest = chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver;


// Interface: ServiceObserver
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

// Legacy compatibility
chromeos.mojo_service_manager.mojom.ServiceObserverPtr = chromeos.mojo_service_manager.mojom.ServiceObserverRemote;
chromeos.mojo_service_manager.mojom.ServiceObserverRequest = chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver;

