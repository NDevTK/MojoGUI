// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/protected_buffer_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ProtectedBufferManager
arc.mojom.ProtectedBufferManager = {};

arc.mojom.ProtectedBufferManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ProtectedBufferManagerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ProtectedBufferManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ProtectedBufferManagerPendingReceiver,
      handle);
    this.$ = new arc.mojom.ProtectedBufferManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ProtectedBufferManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ProtectedBufferManager.getRemote = function() {
  let remote = new arc.mojom.ProtectedBufferManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ProtectedBufferManager',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ProtectedBufferManagerPtr = arc.mojom.ProtectedBufferManagerRemote;
arc.mojom.ProtectedBufferManagerRequest = arc.mojom.ProtectedBufferManagerPendingReceiver;

