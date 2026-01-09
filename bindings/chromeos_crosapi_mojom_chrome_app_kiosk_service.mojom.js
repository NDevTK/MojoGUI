// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/chrome_app_kiosk_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ChromeKioskInstallResult
crosapi.mojom.ChromeKioskInstallResult = {
  kSuccess: 0,
  kPrimaryAppNotCached: 1,
  kPrimaryAppInstallFailed: 2,
  kSecondaryAppInstallFailed: 3,
  kPrimaryAppNotKioskEnabled: 4,
  kPrimaryAppUpdateFailed: 5,
  kSecondaryAppUpdateFailed: 6,
};

// Enum: ChromeKioskLaunchResult
crosapi.mojom.ChromeKioskLaunchResult = {
  kSuccess: 0,
  kUnableToLaunch: 1,
  kNetworkMissing: 2,
  kChromeAppDeprecated: 3,
};

// Interface: ChromeKioskLaunchController
crosapi.mojom.ChromeKioskLaunchControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ChromeKioskLaunchControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ChromeKioskLaunchController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ChromeKioskLaunchControllerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ChromeKioskLaunchControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ChromeKioskLaunchControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.ChromeKioskLaunchController.getRemote = function() {
  let remote = new crosapi.mojom.ChromeKioskLaunchControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ChromeKioskLaunchController',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.ChromeKioskLaunchControllerPtr = crosapi.mojom.ChromeKioskLaunchControllerRemote;
crosapi.mojom.ChromeKioskLaunchControllerRequest = crosapi.mojom.ChromeKioskLaunchControllerPendingReceiver;


// Interface: ChromeAppKioskService
crosapi.mojom.ChromeAppKioskServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ChromeAppKioskServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ChromeAppKioskService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ChromeAppKioskServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ChromeAppKioskServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ChromeAppKioskServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.ChromeAppKioskService.getRemote = function() {
  let remote = new crosapi.mojom.ChromeAppKioskServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ChromeAppKioskService',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.ChromeAppKioskServicePtr = crosapi.mojom.ChromeAppKioskServiceRemote;
crosapi.mojom.ChromeAppKioskServiceRequest = crosapi.mojom.ChromeAppKioskServicePendingReceiver;

