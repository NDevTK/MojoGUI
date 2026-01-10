// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/close_watcher/close_listener.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.CloseListener = {};
blink.mojom.CloseListener.$interfaceName = 'blink.mojom.CloseListener';
blink.mojom.CloseListener_Signal_ParamsSpec = { $: {} };

// Interface: CloseListener
mojo.internal.Struct(
    blink.mojom.CloseListener_Signal_ParamsSpec, 'blink.mojom.CloseListener_Signal_Params', [
    ],
    [[0, 8]]);

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
      blink.mojom.CloseListener_Signal_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.CloseListener.getRemote = function() {
  let remote = new blink.mojom.CloseListenerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.CloseListener',
    'context');
  return remote.$;
};

blink.mojom.CloseListenerPtr = blink.mojom.CloseListenerRemote;
blink.mojom.CloseListenerRequest = blink.mojom.CloseListenerPendingReceiver;

