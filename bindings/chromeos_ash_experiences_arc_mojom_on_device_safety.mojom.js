// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/on_device_safety.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: GetArcSafetySessionResult
arc.mojom.mojom.GetArcSafetySessionResult = {
  kOk: 0,
  kSafetyServiceNotFound: 1,
  kBindSafetyServiceError: 2,
};
arc.mojom.mojom.GetArcSafetySessionResultSpec = { $: mojo.internal.Enum() };

// Interface: OnDeviceSafetyHost
arc.mojom.mojom.OnDeviceSafetyHost = {};

arc.mojom.mojom.OnDeviceSafetyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.OnDeviceSafetyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.OnDeviceSafetyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.OnDeviceSafetyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.OnDeviceSafetyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isCrosSafetyServiceEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec,
      arc.mojom.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.OnDeviceSafetyHost.getRemote = function() {
  let remote = new arc.mojom.mojom.OnDeviceSafetyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyHost',
    'context');
  return remote.$;
};

// ParamsSpec for IsCrosSafetyServiceEnabled
arc.mojom.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyHost.IsCrosSafetyServiceEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyHost.IsCrosSafetyServiceEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.OnDeviceSafetyHostPtr = arc.mojom.mojom.OnDeviceSafetyHostRemote;
arc.mojom.mojom.OnDeviceSafetyHostRequest = arc.mojom.mojom.OnDeviceSafetyHostPendingReceiver;


// Interface: OnDeviceSafetyInstance
arc.mojom.mojom.OnDeviceSafetyInstance = {};

arc.mojom.mojom.OnDeviceSafetyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.OnDeviceSafetyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.OnDeviceSafetyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.OnDeviceSafetyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.OnDeviceSafetyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getArcSafetySession(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec,
      arc.mojom.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec,
      [session]);
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.OnDeviceSafetyInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.OnDeviceSafetyInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.OnDeviceSafetyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyInstance',
    'context');
  return remote.$;
};

// ParamsSpec for GetArcSafetySession
arc.mojom.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyInstance.GetArcSafetySession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyInstance.GetArcSafetySession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GetArcSafetySessionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Init
arc.mojom.mojom.OnDeviceSafetyInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.OnDeviceSafetyInstancePtr = arc.mojom.mojom.OnDeviceSafetyInstanceRemote;
arc.mojom.mojom.OnDeviceSafetyInstanceRequest = arc.mojom.mojom.OnDeviceSafetyInstancePendingReceiver;

