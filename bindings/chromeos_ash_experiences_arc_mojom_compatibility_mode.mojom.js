// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/compatibility_mode.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcResizeLockState
arc.mojom.ArcResizeLockState = {
  UNDEFINED: 0,
  READY: 1,
  ON: 2,
  OFF: 3,
  FULLY_LOCKED: 4,
};
arc.mojom.ArcResizeLockStateSpec = { $: mojo.internal.Enum() };

// Interface: CompatibilityModeInstance
arc.mojom.CompatibilityModeInstance = {};

arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CompatibilityModeInstance_SetResizeLockState_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ArcResizeLockStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.CompatibilityModeInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CompatibilityModeInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CompatibilityModeInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CompatibilityModeInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.CompatibilityModeInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CompatibilityModeInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setResizeLockState(package_name, state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec,
      null,
      [package_name, state]);
  }

  isOptimizedForCrosApp(package_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec,
      arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec,
      [package_name]);
  }

};

arc.mojom.CompatibilityModeInstance.getRemote = function() {
  let remote = new arc.mojom.CompatibilityModeInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CompatibilityModeInstance',
    'context');
  return remote.$;
};

// ParamsSpec for SetResizeLockState
arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec = {
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
arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec = {
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

arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec = {
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
arc.mojom.CompatibilityModeInstancePtr = arc.mojom.CompatibilityModeInstanceRemote;
arc.mojom.CompatibilityModeInstanceRequest = arc.mojom.CompatibilityModeInstancePendingReceiver;

