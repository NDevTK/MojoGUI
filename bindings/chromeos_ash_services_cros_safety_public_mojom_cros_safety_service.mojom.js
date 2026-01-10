// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety_service.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.mojom = ash.cros_safety.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};

ash.cros_safety.mojom.GetCloudSafetySessionResultSpec = { $: mojo.internal.Enum() };
ash.cros_safety.mojom.GetOnDeviceSafetySessionResultSpec = { $: mojo.internal.Enum() };
ash.cros_safety.mojom.CrosSafetyService = {};
ash.cros_safety.mojom.CrosSafetyService.$interfaceName = 'ash.cros_safety.mojom.CrosSafetyService';
ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec = { $: {} };
ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec = { $: {} };
ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec = { $: {} };
ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec = { $: {} };

// Enum: GetCloudSafetySessionResult
ash.cros_safety.mojom.GetCloudSafetySessionResult = {
  kOk: 0,
  kGenericError: 1,
  MinVersion: 1,
};

// Enum: GetOnDeviceSafetySessionResult
ash.cros_safety.mojom.GetOnDeviceSafetySessionResult = {
  kOk: 0,
  kGenericError: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Interface: CrosSafetyService
mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(ash.cros_safety.mojom.OnDeviceSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.cros_safety.mojom.GetOnDeviceSafetySessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(ash.cros_safety.mojom.CloudSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec, 'ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.cros_safety.mojom.GetCloudSafetySessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

  createOnDeviceSafetySession(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ParamsSpec,
      ash.cros_safety.mojom.CrosSafetyService_CreateOnDeviceSafetySession_ResponseParamsSpec,
      [session],
      false);
  }

  createCloudSafetySession(session) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ParamsSpec,
      ash.cros_safety.mojom.CrosSafetyService_CreateCloudSafetySession_ResponseParamsSpec,
      [session],
      false);
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

ash.cros_safety.mojom.CrosSafetyServicePtr = ash.cros_safety.mojom.CrosSafetyServiceRemote;
ash.cros_safety.mojom.CrosSafetyServiceRequest = ash.cros_safety.mojom.CrosSafetyServicePendingReceiver;

