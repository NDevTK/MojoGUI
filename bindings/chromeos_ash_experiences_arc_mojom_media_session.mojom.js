// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/media_session.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: MediaSessionInstance
arc.mojom.MediaSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MediaSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MediaSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MediaSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MediaSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MediaSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.MediaSessionInstance.getRemote = function() {
  let remote = new arc.mojom.MediaSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MediaSessionInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.MediaSessionInstancePtr = arc.mojom.MediaSessionInstanceRemote;
arc.mojom.MediaSessionInstanceRequest = arc.mojom.MediaSessionInstancePendingReceiver;

