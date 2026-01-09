// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health.mojom
// Module: chromeos.network_health.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};


// Interface: NetworkEventsObserver
chromeos.network_health.mojom.NetworkEventsObserver = {};

chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkEventsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.network_health.mojom.NetworkEventsObserver.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkEventsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkEventsObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.network_health.mojom.NetworkEventsObserverPtr = chromeos.network_health.mojom.NetworkEventsObserverRemote;
chromeos.network_health.mojom.NetworkEventsObserverRequest = chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver;


// Interface: NetworkHealthService
chromeos.network_health.mojom.NetworkHealthService = {};

chromeos.network_health.mojom.NetworkHealthServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkHealthService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkHealthServicePendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.network_health.mojom.NetworkHealthService.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkHealthServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkHealthService',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.network_health.mojom.NetworkHealthServicePtr = chromeos.network_health.mojom.NetworkHealthServiceRemote;
chromeos.network_health.mojom.NetworkHealthServiceRequest = chromeos.network_health.mojom.NetworkHealthServicePendingReceiver;

