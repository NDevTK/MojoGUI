// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/associated_interfaces/associated_interfaces.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AssociatedInterface = {};
blink.mojom.AssociatedInterface.$interfaceName = 'blink.mojom.AssociatedInterface';
blink.mojom.AssociatedInterfaceProvider = {};
blink.mojom.AssociatedInterfaceProvider.$interfaceName = 'blink.mojom.AssociatedInterfaceProvider';
blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec = { $: {} };

// Interface: AssociatedInterface
blink.mojom.AssociatedInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AssociatedInterfaceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AssociatedInterfacePendingReceiver,
      handle);
    this.$ = new blink.mojom.AssociatedInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AssociatedInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.AssociatedInterface.getRemote = function() {
  let remote = new blink.mojom.AssociatedInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterface',
    'context');
  return remote.$;
};

blink.mojom.AssociatedInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AssociatedInterfaceReceiver = blink.mojom.AssociatedInterfaceReceiver;

blink.mojom.AssociatedInterfacePtr = blink.mojom.AssociatedInterfaceRemote;
blink.mojom.AssociatedInterfaceRequest = blink.mojom.AssociatedInterfacePendingReceiver;


// Interface: AssociatedInterfaceProvider
mojo.internal.Struct(
    blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec, 'blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AssociatedInterfaceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AssociatedInterfaceProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterfaceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AssociatedInterfaceProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.AssociatedInterfaceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AssociatedInterfaceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAssociatedInterface(name, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver],
      false);
  }

};

blink.mojom.AssociatedInterfaceProvider.getRemote = function() {
  let remote = new blink.mojom.AssociatedInterfaceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterfaceProvider',
    'context');
  return remote.$;
};

blink.mojom.AssociatedInterfaceProviderReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetAssociatedInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAssociatedInterface (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAssociatedInterface');
          const result = this.impl.getAssociatedInterface(params.name, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AssociatedInterfaceProviderReceiver = blink.mojom.AssociatedInterfaceProviderReceiver;

blink.mojom.AssociatedInterfaceProviderPtr = blink.mojom.AssociatedInterfaceProviderRemote;
blink.mojom.AssociatedInterfaceProviderRequest = blink.mojom.AssociatedInterfaceProviderPendingReceiver;

