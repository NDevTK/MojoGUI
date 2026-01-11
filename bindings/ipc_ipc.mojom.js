// Auto-generated MojoJS binding
// Source: chromium_src/ipc/ipc.mojom
// Module: IPC.mojom

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
  setPeerPid(pid) {
    return this.$.setPeerPid(pid);
  }
  getAssociatedInterface(receiver) {
    return this.$.getAssociatedInterface(receiver);
  }
};

IPC.mojom.ChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Channel', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPeerPid(pid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      IPC.mojom.Channel_SetPeerPid_ParamsSpec,
      null,
      [pid],
      false);
  }

  getAssociatedInterface(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Channel', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(IPC.mojom.Channel_SetPeerPid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(IPC.mojom.Channel_SetPeerPid_ParamsSpec.$.structSpec);
          const result = this.impl.setPeerPid(params.pid);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec.$.structSpec);
          const result = this.impl.getAssociatedInterface(params.receiver);
          break;
        }
      }
      } catch (err) {}
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
    this.ordinals = window.mojoScrambler.getOrdinals('ChannelBootstrap', [
    ]);
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
    const ordinals = window.mojoScrambler.getOrdinals('ChannelBootstrap', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

IPC.mojom.ChannelBootstrapReceiver = IPC.mojom.ChannelBootstrapReceiver;

IPC.mojom.ChannelBootstrapPtr = IPC.mojom.ChannelBootstrapRemote;
IPC.mojom.ChannelBootstrapRequest = IPC.mojom.ChannelBootstrapPendingReceiver;

