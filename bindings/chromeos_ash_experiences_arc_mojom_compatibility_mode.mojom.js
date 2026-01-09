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

// Interface: CompatibilityModeInstance
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

};

arc.mojom.CompatibilityModeInstance.getRemote = function() {
  let remote = new arc.mojom.CompatibilityModeInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CompatibilityModeInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.CompatibilityModeInstancePtr = arc.mojom.CompatibilityModeInstanceRemote;
arc.mojom.CompatibilityModeInstanceRequest = arc.mojom.CompatibilityModeInstancePendingReceiver;

