// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/on_device_safety.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};

arc.mojom.GetArcSafetySessionResultSpec = { $: mojo.internal.Enum() };
arc.mojom.OnDeviceSafetyHost = {};
arc.mojom.OnDeviceSafetyHost.$interfaceName = 'arc.mojom.OnDeviceSafetyHost';
arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance = {};
arc.mojom.OnDeviceSafetyInstance.$interfaceName = 'arc.mojom.OnDeviceSafetyInstance';
arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec = { $: {} };

// Enum: GetArcSafetySessionResult
arc.mojom.GetArcSafetySessionResult = {
  kOk: 0,
  kGenericError: 1,
  kSafetyServiceNotFound: 2,
  kBindSafetyServiceError: 3,
  MinVersion: 3,
};

// Interface: OnDeviceSafetyHost
mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec, 'arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.OnDeviceSafetyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OnDeviceSafetyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isCrosSafetyServiceEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec,
      arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.OnDeviceSafetyHost.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyHost',
    'context');
  return remote.$;
};

arc.mojom.OnDeviceSafetyHostPtr = arc.mojom.OnDeviceSafetyHostRemote;
arc.mojom.OnDeviceSafetyHostRequest = arc.mojom.OnDeviceSafetyHostPendingReceiver;


// Interface: OnDeviceSafetyInstance
mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(ash.cros_safety.mojom.OnDeviceSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.GetArcSafetySessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.OnDeviceSafetyHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.OnDeviceSafetyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getArcSafetySession(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec,
      arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec,
      [session],
      false);
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec,
      arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.OnDeviceSafetyInstance.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyInstance',
    'context');
  return remote.$;
};

arc.mojom.OnDeviceSafetyInstancePtr = arc.mojom.OnDeviceSafetyInstanceRemote;
arc.mojom.OnDeviceSafetyInstanceRequest = arc.mojom.OnDeviceSafetyInstancePendingReceiver;

