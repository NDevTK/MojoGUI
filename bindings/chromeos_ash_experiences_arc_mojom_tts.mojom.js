// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tts.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: TtsEventType
arc.mojom.TtsEventType = {
  START: 0,
  END: 1,
  INTERRUPTED: 2,
  ERROR: 3,
  WORD: 4,
};

// Interface: TtsHost
arc.mojom.TtsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TtsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TtsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.TtsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TtsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.TtsHost.getRemote = function() {
  let remote = new arc.mojom.TtsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.TtsHostPtr = arc.mojom.TtsHostRemote;
arc.mojom.TtsHostRequest = arc.mojom.TtsHostPendingReceiver;


// Interface: TtsInstance
arc.mojom.TtsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TtsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TtsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.TtsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TtsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.TtsInstance.getRemote = function() {
  let remote = new arc.mojom.TtsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.TtsInstancePtr = arc.mojom.TtsInstanceRemote;
arc.mojom.TtsInstanceRequest = arc.mojom.TtsInstancePendingReceiver;

