// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/close_watcher/close_listener.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: CloseListener
blink.mojom.CloseListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CloseListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CloseListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CloseListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.CloseListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.CloseListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  signal() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.CloseListener_Signal_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.CloseListener.getRemote = function() {
  let remote = new blink.mojom.CloseListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CloseListener',
    'context');
  return remote.$;
};

// ParamsSpec for Signal
blink.mojom.CloseListener_Signal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CloseListener.Signal_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.CloseListenerPtr = blink.mojom.CloseListenerRemote;
blink.mojom.CloseListenerRequest = blink.mojom.CloseListenerPendingReceiver;

