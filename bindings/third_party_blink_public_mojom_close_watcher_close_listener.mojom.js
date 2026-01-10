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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CloseListener',
    'context');
  return remote.$;
};

blink.mojom.CloseListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.CloseListener_Signal_ParamsSpec.$.decode(message.payload);
          const result = this.impl.signal();
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.CloseListenerReceiver = blink.mojom.CloseListenerReceiver;

blink.mojom.CloseListenerPtr = blink.mojom.CloseListenerRemote;
blink.mojom.CloseListenerRequest = blink.mojom.CloseListenerPendingReceiver;

