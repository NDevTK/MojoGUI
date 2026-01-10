// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browser_interface_broker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.BrowserInterfaceBroker = {};
blink.mojom.BrowserInterfaceBroker.$interfaceName = 'blink.mojom.BrowserInterfaceBroker';
blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec = { $: {} };

// Interface: BrowserInterfaceBroker
mojo.internal.Struct(
    blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec, 'blink.mojom.BrowserInterfaceBroker_GetInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BrowserInterfaceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BrowserInterfaceBrokerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BrowserInterfaceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BrowserInterfaceBrokerPendingReceiver,
      handle);
    this.$ = new blink.mojom.BrowserInterfaceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BrowserInterfaceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInterface(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

blink.mojom.BrowserInterfaceBroker.getRemote = function() {
  let remote = new blink.mojom.BrowserInterfaceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BrowserInterfaceBroker',
    'context');
  return remote.$;
};

blink.mojom.BrowserInterfaceBrokerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getInterface');
          const result = this.impl.getInterface(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BrowserInterfaceBrokerReceiver = blink.mojom.BrowserInterfaceBrokerReceiver;

blink.mojom.BrowserInterfaceBrokerPtr = blink.mojom.BrowserInterfaceBrokerRemote;
blink.mojom.BrowserInterfaceBrokerRequest = blink.mojom.BrowserInterfaceBrokerPendingReceiver;

