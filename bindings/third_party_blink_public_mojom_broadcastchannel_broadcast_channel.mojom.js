// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/broadcastchannel/broadcast_channel.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BroadcastChannelClient = {};
blink.mojom.BroadcastChannelClient.$interfaceName = 'blink.mojom.BroadcastChannelClient';
blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec = { $: {} };
blink.mojom.BroadcastChannelProvider = {};
blink.mojom.BroadcastChannelProvider.$interfaceName = 'blink.mojom.BroadcastChannelProvider';
blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec = { $: {} };

// Interface: BroadcastChannelClient
mojo.internal.Struct(
    blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec, 'blink.mojom.BroadcastChannelClient_OnMessage_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BroadcastChannelClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BroadcastChannelClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BroadcastChannelClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BroadcastChannelClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.BroadcastChannelClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BroadcastChannelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

blink.mojom.BroadcastChannelClient.getRemote = function() {
  let remote = new blink.mojom.BroadcastChannelClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BroadcastChannelClient',
    'context');
  return remote.$;
};

blink.mojom.BroadcastChannelClientReceiver = class {
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
        
        // Try Method 0: OnMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMessage (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.BroadcastChannelClient_OnMessage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMessage');
          const result = this.impl.onMessage(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BroadcastChannelClientReceiver = blink.mojom.BroadcastChannelClientReceiver;

blink.mojom.BroadcastChannelClientPtr = blink.mojom.BroadcastChannelClientRemote;
blink.mojom.BroadcastChannelClientRequest = blink.mojom.BroadcastChannelClientPendingReceiver;


// Interface: BroadcastChannelProvider
mojo.internal.Struct(
    blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec, 'blink.mojom.BroadcastChannelProvider_ConnectToChannel_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('connection', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.BroadcastChannelProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BroadcastChannelProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BroadcastChannelProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BroadcastChannelProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.BroadcastChannelProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BroadcastChannelProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToChannel(name, client, connection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec,
      null,
      [name, client, connection],
      false);
  }

};

blink.mojom.BroadcastChannelProvider.getRemote = function() {
  let remote = new blink.mojom.BroadcastChannelProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BroadcastChannelProvider',
    'context');
  return remote.$;
};

blink.mojom.BroadcastChannelProviderReceiver = class {
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
        
        // Try Method 0: ConnectToChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToChannel (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.BroadcastChannelProvider_ConnectToChannel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.connectToChannel');
          const result = this.impl.connectToChannel(params.name, params.client, params.connection);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BroadcastChannelProviderReceiver = blink.mojom.BroadcastChannelProviderReceiver;

blink.mojom.BroadcastChannelProviderPtr = blink.mojom.BroadcastChannelProviderRemote;
blink.mojom.BroadcastChannelProviderRequest = blink.mojom.BroadcastChannelProviderPendingReceiver;

