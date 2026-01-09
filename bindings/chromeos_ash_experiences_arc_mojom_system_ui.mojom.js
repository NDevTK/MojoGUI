// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_ui.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ThemeStyleType
arc.mojom.ThemeStyleType = {
  VIBRANT: 0,
  EXPRESSIVE: 1,
  SPRITZ: 2,
  RAINBOW: 3,
  FRUIT_SALAD: 4,
};

// Interface: SystemUiInstance
arc.mojom.SystemUiInstance = {};

arc.mojom.SystemUiInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemUiInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemUiInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemUiInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemUiInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemUiInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.SystemUiInstance.getRemote = function() {
  let remote = new arc.mojom.SystemUiInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemUiInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.SystemUiInstancePtr = arc.mojom.SystemUiInstanceRemote;
arc.mojom.SystemUiInstanceRequest = arc.mojom.SystemUiInstancePendingReceiver;

