// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/close_watcher/close_listener.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: CloseListener
blink.mojom.mojom.CloseListener = {};

blink.mojom.mojom.CloseListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.CloseListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CloseListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.CloseListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.CloseListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.CloseListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  signal() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.CloseListener_Signal_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.CloseListener.getRemote = function() {
  let remote = new blink.mojom.mojom.CloseListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CloseListener',
    'context');
  return remote.$;
};

// ParamsSpec for Signal
blink.mojom.mojom.CloseListener_Signal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CloseListener.Signal_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.CloseListenerPtr = blink.mojom.mojom.CloseListenerRemote;
blink.mojom.mojom.CloseListenerRequest = blink.mojom.mojom.CloseListenerPendingReceiver;

