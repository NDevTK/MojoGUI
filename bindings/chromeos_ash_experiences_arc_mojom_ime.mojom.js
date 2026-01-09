// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/ime.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: TextInputType
arc.mojom.TextInputType = {
  TEXT: 0,
  PASSWORD: 1,
  SEARCH: 2,
  EMAIL: 3,
  NUMBER: 4,
  TELEPHONE: 5,
  URL: 6,
  DATE: 7,
  TIME: 8,
  DATETIME: 9,
  ANDROID_NULL: 10,
};

// Enum: SegmentStyle
arc.mojom.SegmentStyle = {
  DEFAULT: 0,
  EMPHASIZED: 1,
  NONE: 2,
};

// Enum: CursorCoordinateSpace
arc.mojom.CursorCoordinateSpace = {
  SCREEN: 0,
  DISPLAY: 1,
  NOTIFICATION: 2,
};

// Interface: ImeHost
arc.mojom.ImeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ImeHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ImeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ImeHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ImeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ImeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ImeHost.getRemote = function() {
  let remote = new arc.mojom.ImeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ImeHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.ImeHostPtr = arc.mojom.ImeHostRemote;
arc.mojom.ImeHostRequest = arc.mojom.ImeHostPendingReceiver;


// Interface: ImeInstance
arc.mojom.ImeInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ImeInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ImeInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ImeInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ImeInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ImeInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ImeInstance.getRemote = function() {
  let remote = new arc.mojom.ImeInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ImeInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.ImeInstancePtr = arc.mojom.ImeInstanceRemote;
arc.mojom.ImeInstanceRequest = arc.mojom.ImeInstancePendingReceiver;

