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
crosapi.mojom.ChromeKioskInstallResultSpec = { $: mojo.internal.Enum() };

// Enum: ChromeKioskLaunchResult
crosapi.mojom.ChromeKioskLaunchResult = {
  kSuccess: 0,
  kUnableToLaunch: 1,
  kNetworkMissing: 2,
  kChromeAppDeprecated: 3,
};
crosapi.mojom.ChromeKioskLaunchResultSpec = { $: mojo.internal.Enum() };

// Struct: AppInstallParams
crosapi.mojom.AppInstallParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AppInstallParams',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'crx_file_location', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_store_app', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ChromeKioskLaunchController
crosapi.mojom.ChromeKioskLaunchController = {};

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

  installKioskApp(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ParamsSpec,
      crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ResponseParamsSpec,
      [params]);
  }

  launchKioskApp(app_id, is_network_ready) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ParamsSpec,
      crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ResponseParamsSpec,
      [app_id, is_network_ready]);
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

// ParamsSpec for InstallKioskApp
crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ChromeKioskLaunchController.InstallKioskApp_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AppInstallParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ChromeKioskInstallResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LaunchKioskApp
crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ChromeKioskLaunchController.LaunchKioskApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_network_ready', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ChromeKioskLaunchResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.ChromeKioskLaunchControllerPtr = crosapi.mojom.ChromeKioskLaunchControllerRemote;
crosapi.mojom.ChromeKioskLaunchControllerRequest = crosapi.mojom.ChromeKioskLaunchControllerPendingReceiver;


// Interface: ChromeAppKioskService
crosapi.mojom.ChromeAppKioskService = {};

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

  bindLaunchController(controller) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.ChromeAppKioskService_BindLaunchController_ParamsSpec,
      null,
      [controller]);
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

// ParamsSpec for BindLaunchController
crosapi.mojom.ChromeAppKioskService_BindLaunchController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ChromeAppKioskService.BindLaunchController_Params',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.ChromeAppKioskServicePtr = crosapi.mojom.ChromeAppKioskServiceRemote;
crosapi.mojom.ChromeAppKioskServiceRequest = crosapi.mojom.ChromeAppKioskServicePendingReceiver;

