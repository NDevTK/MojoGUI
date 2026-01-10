// Auto-generated MojoJS binding
// Source: chromium_src/ipc/ipc.mojom
// Module: IPC.mojom

'use strict';

// Module namespace
var IPC = IPC || {};
IPC.mojom = IPC.mojom || {};
var mojo = mojo || {};
var mojo_base = mojo_base || {};

IPC.mojom.MessageSpec = { $: {} };
IPC.mojom.Channel = {};
IPC.mojom.Channel.$interfaceName = 'IPC.mojom.Channel';
IPC.mojom.Channel_SetPeerPid_ParamsSpec = { $: {} };
IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec = { $: {} };
IPC.mojom.ChannelBootstrap = {};
IPC.mojom.ChannelBootstrap.$interfaceName = 'IPC.mojom.ChannelBootstrap';

// Struct: Message
mojo.internal.Struct(
    IPC.mojom.MessageSpec, 'IPC.mojom.Message', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('handles', 8, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: Channel
mojo.internal.Struct(
    IPC.mojom.Channel_SetPeerPid_ParamsSpec, 'IPC.mojom.Channel_SetPeerPid_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec, 'IPC.mojom.Channel_GetAssociatedInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingAssociatedReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

IPC.mojom.ChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

IPC.mojom.ChannelRemote = class {
  static get $interfaceName() {
    return 'IPC.mojom.Channel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      IPC.mojom.ChannelPendingReceiver,
      handle);
    this.$ = new IPC.mojom.ChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

IPC.mojom.ChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPeerPid(pid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      IPC.mojom.Channel_SetPeerPid_ParamsSpec,
      null,
      [pid],
      false);
  }

  getAssociatedInterface(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

IPC.mojom.Channel.getRemote = function() {
  let remote = new IPC.mojom.ChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'IPC.mojom.Channel',
    'context');
  return remote.$;
};

IPC.mojom.ChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: SetPeerPid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(IPC.mojom.Channel_SetPeerPid_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPeerPid (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAssociatedInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAssociatedInterface (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(IPC.mojom.Channel_SetPeerPid_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setPeerPid');
          const result = this.impl.setPeerPid(params.pid);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAssociatedInterface');
          const result = this.impl.getAssociatedInterface(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

IPC.mojom.ChannelReceiver = IPC.mojom.ChannelReceiver;

IPC.mojom.ChannelPtr = IPC.mojom.ChannelRemote;
IPC.mojom.ChannelRequest = IPC.mojom.ChannelPendingReceiver;


// Interface: ChannelBootstrap
IPC.mojom.ChannelBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

IPC.mojom.ChannelBootstrapRemote = class {
  static get $interfaceName() {
    return 'IPC.mojom.ChannelBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      IPC.mojom.ChannelBootstrapPendingReceiver,
      handle);
    this.$ = new IPC.mojom.ChannelBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

IPC.mojom.ChannelBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

IPC.mojom.ChannelBootstrap.getRemote = function() {
  let remote = new IPC.mojom.ChannelBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'IPC.mojom.ChannelBootstrap',
    'context');
  return remote.$;
};

IPC.mojom.ChannelBootstrapReceiver = class {
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

IPC.mojom.ChannelBootstrapReceiver = IPC.mojom.ChannelBootstrapReceiver;

IPC.mojom.ChannelBootstrapPtr = IPC.mojom.ChannelBootstrapRemote;
IPC.mojom.ChannelBootstrapRequest = IPC.mojom.ChannelBootstrapPendingReceiver;

