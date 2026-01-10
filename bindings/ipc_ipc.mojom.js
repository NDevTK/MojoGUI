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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = IPC.mojom.Channel_SetPeerPid_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPeerPid(params.pid);
          break;
        }
        case 1: {
          const params = IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAssociatedInterface(params.receiver);
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
      }
    }});
  }
};

IPC.mojom.ChannelBootstrapReceiver = IPC.mojom.ChannelBootstrapReceiver;

IPC.mojom.ChannelBootstrapPtr = IPC.mojom.ChannelBootstrapRemote;
IPC.mojom.ChannelBootstrapRequest = IPC.mojom.ChannelBootstrapPendingReceiver;

