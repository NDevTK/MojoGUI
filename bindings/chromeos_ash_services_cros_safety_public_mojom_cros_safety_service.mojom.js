// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety_service.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.cros_safety.mojom = ash.cros_safety.cros_safety.mojom || {};


// Enum: GetCloudSafetySessionResult
ash.cros_safety.cros_safety.mojom.mojom.GetCloudSafetySessionResult = {
  kOk: 0,
};
ash.cros_safety.cros_safety.mojom.mojom.GetCloudSafetySessionResultSpec = { $: mojo.internal.Enum() };

// Enum: GetOnDeviceSafetySessionResult
ash.cros_safety.cros_safety.mojom.mojom.GetOnDeviceSafetySessionResult = {
  kOk: 0,
};
ash.cros_safety.cros_safety.mojom.mojom.GetOnDeviceSafetySessionResultSpec = { $: mojo.internal.Enum() };

// Interface: CrosSafetyService
ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService = {};

ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.CrosSafetyService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServicePendingReceiver,
      handle);
    this.$ = new ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createOnDeviceSafetySession(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec,
      ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec,
      [session]);
  }

  createCloudSafetySession(session) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec,
      ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec,
      [session]);
  }

};

ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService.getRemote = function() {
  let remote = new ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.CrosSafetyService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateOnDeviceSafetySession
ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CrosSafetyService.CreateOnDeviceSafetySession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CrosSafetyService.CreateOnDeviceSafetySession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.cros_safety.mojom.GetOnDeviceSafetySessionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateCloudSafetySession
ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CrosSafetyService.CreateCloudSafetySession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CrosSafetyService.CreateCloudSafetySession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.cros_safety.mojom.GetCloudSafetySessionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServicePtr = ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServiceRemote;
ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServiceRequest = ash.cros_safety.cros_safety.mojom.mojom.CrosSafetyServicePendingReceiver;

