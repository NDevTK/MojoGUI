// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/on_device_safety.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: GetArcSafetySessionResult
arc.mojom.GetArcSafetySessionResult = {
  kOk: 0,
  kSafetyServiceNotFound: 1,
  kBindSafetyServiceError: 2,
};
arc.mojom.GetArcSafetySessionResultSpec = { $: mojo.internal.Enum() };

// Interface: OnDeviceSafetyHost
arc.mojom.OnDeviceSafetyHost = {};

arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
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

// ParamsSpec for IsCrosSafetyServiceEnabled
arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec = {
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

arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec = {
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
arc.mojom.OnDeviceSafetyHostPtr = arc.mojom.OnDeviceSafetyHostRemote;
arc.mojom.OnDeviceSafetyHostRequest = arc.mojom.OnDeviceSafetyHostPendingReceiver;


// Interface: OnDeviceSafetyInstance
arc.mojom.OnDeviceSafetyInstance = {};

arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.cros_safety.mojom.OnDeviceSafetySessionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.OnDeviceSafetyHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [session]);
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec,
      null,
      [host_remote]);
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

// ParamsSpec for GetArcSafetySession
arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyInstance.GetArcSafetySession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.cros_safety.mojom.OnDeviceSafetySessionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec = {
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
arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OnDeviceSafetyInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.OnDeviceSafetyHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.OnDeviceSafetyInstancePtr = arc.mojom.OnDeviceSafetyInstanceRemote;
arc.mojom.OnDeviceSafetyInstanceRequest = arc.mojom.OnDeviceSafetyInstancePendingReceiver;

