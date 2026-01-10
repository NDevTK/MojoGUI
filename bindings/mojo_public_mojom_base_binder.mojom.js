// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/binder.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.Binder = {};
mojo_base.mojom.Binder.$interfaceName = 'mojo_base.mojom.Binder';
mojo_base.mojom.Binder_Bind_ParamsSpec = { $: {} };

// Interface: Binder
mojo.internal.Struct(
    mojo_base.mojom.Binder_Bind_ParamsSpec, 'mojo_base.mojom.Binder_Bind_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo_base.mojom.BinderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo_base.mojom.BinderRemote = class {
  static get $interfaceName() {
    return 'mojo_base.mojom.Binder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo_base.mojom.BinderPendingReceiver,
      handle);
    this.$ = new mojo_base.mojom.BinderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo_base.mojom.BinderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bind(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojo_base.mojom.Binder_Bind_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

mojo_base.mojom.Binder.getRemote = function() {
  let remote = new mojo_base.mojom.BinderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojo_base.mojom.Binder',
    'context');
  return remote.$;
};

mojo_base.mojom.BinderReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Bind
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(mojo_base.mojom.Binder_Bind_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Bind (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojo_base.mojom.Binder_Bind_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bind');
          const result = this.impl.bind(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo_base.mojom.BinderReceiver = mojo_base.mojom.BinderReceiver;

mojo_base.mojom.BinderPtr = mojo_base.mojom.BinderRemote;
mojo_base.mojom.BinderRequest = mojo_base.mojom.BinderPendingReceiver;

