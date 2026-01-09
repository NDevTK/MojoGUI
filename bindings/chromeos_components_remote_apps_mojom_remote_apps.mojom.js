// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/remote_apps/mojom/remote_apps.mojom
// Module: chromeos.remote_apps.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.remote_apps = chromeos.remote_apps || {};
chromeos.remote_apps.mojom = chromeos.remote_apps.mojom || {};


// Interface: RemoteApps
chromeos.remote_apps.mojom.RemoteAppsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.mojom.RemoteAppsRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteApps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.mojom.RemoteAppsPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.mojom.RemoteAppsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.mojom.RemoteAppsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.remote_apps.mojom.RemoteApps.getRemote = function() {
  let remote = new chromeos.remote_apps.mojom.RemoteAppsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteApps',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.remote_apps.mojom.RemoteAppsPtr = chromeos.remote_apps.mojom.RemoteAppsRemote;
chromeos.remote_apps.mojom.RemoteAppsRequest = chromeos.remote_apps.mojom.RemoteAppsPendingReceiver;


// Interface: RemoteAppsFactory
chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.mojom.RemoteAppsFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppsFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.mojom.RemoteAppsFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.mojom.RemoteAppsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.remote_apps.mojom.RemoteAppsFactory.getRemote = function() {
  let remote = new chromeos.remote_apps.mojom.RemoteAppsFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppsFactory',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.remote_apps.mojom.RemoteAppsFactoryPtr = chromeos.remote_apps.mojom.RemoteAppsFactoryRemote;
chromeos.remote_apps.mojom.RemoteAppsFactoryRequest = chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver;


// Interface: RemoteAppLaunchObserver
chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver,
      handle);
    this.$ = new chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.remote_apps.mojom.RemoteAppLaunchObserver.getRemote = function() {
  let remote = new chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppLaunchObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.remote_apps.mojom.RemoteAppLaunchObserverPtr = chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote;
chromeos.remote_apps.mojom.RemoteAppLaunchObserverRequest = chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver;

