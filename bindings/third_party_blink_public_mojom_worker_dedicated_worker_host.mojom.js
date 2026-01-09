// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/dedicated_worker_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DedicatedWorkerHost
blink.mojom.DedicatedWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DedicatedWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DedicatedWorkerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DedicatedWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DedicatedWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.DedicatedWorkerHost.getRemote = function() {
  let remote = new blink.mojom.DedicatedWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
blink.mojom.DedicatedWorkerHostPtr = blink.mojom.DedicatedWorkerHostRemote;
blink.mojom.DedicatedWorkerHostRequest = blink.mojom.DedicatedWorkerHostPendingReceiver;

