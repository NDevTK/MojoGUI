// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety_service.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.mojom = ash.cros_safety.mojom || {};


// Enum: GetCloudSafetySessionResult
ash.cros_safety.mojom.GetCloudSafetySessionResult = {
  kOk: 0,
};

// Enum: GetOnDeviceSafetySessionResult
ash.cros_safety.mojom.GetOnDeviceSafetySessionResult = {
  kOk: 0,
};

// Interface: CrosSafetyService
ash.cros_safety.mojom.CrosSafetyService = {};

ash.cros_safety.mojom.CrosSafetyServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.mojom.CrosSafetyServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.CrosSafetyService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.mojom.CrosSafetyServicePendingReceiver,
      handle);
    this.$ = new ash.cros_safety.mojom.CrosSafetyServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.mojom.CrosSafetyServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_safety.mojom.CrosSafetyService.getRemote = function() {
  let remote = new ash.cros_safety.mojom.CrosSafetyServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.CrosSafetyService',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.cros_safety.mojom.CrosSafetyServicePtr = ash.cros_safety.mojom.CrosSafetyServiceRemote;
ash.cros_safety.mojom.CrosSafetyServiceRequest = ash.cros_safety.mojom.CrosSafetyServicePendingReceiver;

