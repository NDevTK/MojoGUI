// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/compatibility_mode.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ArcResizeLockStateSpec = { $: mojo.internal.Enum() };
arc.mojom.CompatibilityModeInstance = {};
arc.mojom.CompatibilityModeInstance.$interfaceName = 'arc.mojom.CompatibilityModeInstance';
arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec = { $: {} };
arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec = { $: {} };
arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec = { $: {} };

// Enum: ArcResizeLockState
arc.mojom.ArcResizeLockState = {
  UNDEFINED: 0,
  READY: 1,
  ON: 2,
  OFF: 3,
  FULLY_LOCKED: 4,
};

// Interface: CompatibilityModeInstance
mojo.internal.Struct(
    arc.mojom.CompatibilityModeInstance_SetResizeLockState_ParamsSpec, 'arc.mojom.CompatibilityModeInstance_SetResizeLockState_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, arc.mojom.ArcResizeLockStateSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec, 'arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec, 'arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParams', [
      mojo.internal.StructField('is_o4c_app', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [package_name, state],
      false);
  }

  isOptimizedForCrosApp(package_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ParamsSpec,
      arc.mojom.CompatibilityModeInstance_IsOptimizedForCrosApp_ResponseParamsSpec,
      [package_name],
      false);
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

arc.mojom.CompatibilityModeInstancePtr = arc.mojom.CompatibilityModeInstanceRemote;
arc.mojom.CompatibilityModeInstanceRequest = arc.mojom.CompatibilityModeInstancePendingReceiver;

