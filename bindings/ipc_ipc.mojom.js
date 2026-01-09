// Auto-generated MojoJS binding
// Source: chromium_src/ipc/ipc.mojom
// Module: IPC.mojom

'use strict';

// Module namespace
var IPC = IPC || {};
IPC.mojom = IPC.mojom || {};


// Interface: Channel
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
      IPC.mojom.Channel_SetPeerPid_ParamsSpec.$,
      null,
      [pid]);
  }

  getAssociatedInterface(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec.$,
      null,
      [receiver]);
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

// ParamsSpec for SetPeerPid
IPC.mojom.Channel_SetPeerPid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'IPC.mojom.Channel.SetPeerPid_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAssociatedInterface
IPC.mojom.Channel_GetAssociatedInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'IPC.mojom.Channel.GetAssociatedInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
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

// Legacy compatibility
IPC.mojom.ChannelBootstrapPtr = IPC.mojom.ChannelBootstrapRemote;
IPC.mojom.ChannelBootstrapRequest = IPC.mojom.ChannelBootstrapPendingReceiver;

