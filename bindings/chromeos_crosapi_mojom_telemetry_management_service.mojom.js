// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_management_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: TelemetryManagementService
crosapi.mojom.TelemetryManagementServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryManagementServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryManagementService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryManagementServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryManagementServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryManagementServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.TelemetryManagementService.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryManagementServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryManagementService',
    'context');
  return remote.$;
}};

// Legacy compatibility
crosapi.mojom.TelemetryManagementServicePtr = crosapi.mojom.TelemetryManagementServiceRemote;
crosapi.mojom.TelemetryManagementServiceRequest = crosapi.mojom.TelemetryManagementServicePendingReceiver;

