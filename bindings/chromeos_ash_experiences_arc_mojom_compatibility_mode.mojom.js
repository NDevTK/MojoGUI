// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/compatibility_mode.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcResizeLockState
arc.mojom.mojom.ArcResizeLockState = {
  UNDEFINED: 0,
  READY: 1,
  ON: 2,
  OFF: 3,
  FULLY_LOCKED: 4,
};
arc.mojom.mojom.ArcResizeLockStateSpec = { $: mojo.internal.Enum() };

// Interface: CompatibilityModeInstance
arc.mojom.mojom.CompatibilityModeInstance = {};

arc.mojom.mojom.CompatibilityModeInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.CompatibilityModeInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CompatibilityModeInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.CompatibilityModeInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.CompatibilityModeInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.CompatibilityModeInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setResizeLockState(package_name, state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec,
      null,
      [package_name, state]);
  }

  isOptimizedForCrosApp(package_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec,
      arc.mojom.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec,
      [package_name]);
  }

};

arc.mojom.mojom.CompatibilityModeInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.CompatibilityModeInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CompatibilityModeInstance',
    'context');
  return remote.$;
};

// ParamsSpec for SetResizeLockState
arc.mojom.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CompatibilityModeInstance.SetResizeLockState_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ArcResizeLockStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsOptimizedForCrosApp
arc.mojom.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CompatibilityModeInstance.IsOptimizedForCrosApp_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CompatibilityModeInstance.IsOptimizedForCrosApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_o4c_app', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.CompatibilityModeInstancePtr = arc.mojom.mojom.CompatibilityModeInstanceRemote;
arc.mojom.mojom.CompatibilityModeInstanceRequest = arc.mojom.mojom.CompatibilityModeInstancePendingReceiver;

