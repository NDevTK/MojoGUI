// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tracing.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: TracingInstance
arc.mojom.TracingInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TracingInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TracingInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TracingInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.TracingInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TracingInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.TracingInstance.getRemote = function() {
  let remote = new arc.mojom.TracingInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TracingInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.TracingInstancePtr = arc.mojom.TracingInstanceRemote;
arc.mojom.TracingInstanceRequest = arc.mojom.TracingInstancePendingReceiver;

