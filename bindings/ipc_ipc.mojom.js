// Auto-generated MojoJS binding
// Source: chromium_src/ipc/ipc.mojom
// Module: IPC.mojom

'use strict';

// Module namespace
var IPC = IPC || {};
IPC.mojom = IPC.mojom || {};


// Struct: Message
IPC.mojom.mojom.MessageSpec = {
  $: {
    structSpec: {
      name: 'IPC.mojom.Message',
      packedSize: 24,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'handles', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.native.SerializedHandleSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: Channel
IPC.mojom.mojom.Channel = {};

IPC.mojom.mojom.ChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

IPC.mojom.mojom.ChannelRemote = class {
  static get $interfaceName() {
    return 'IPC.mojom.Channel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      IPC.mojom.mojom.ChannelPendingReceiver,
      handle);
    this.$ = new IPC.mojom.mojom.ChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

IPC.mojom.mojom.ChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPeerPid(pid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      IPC.mojom.mojom.Channel_SetPeerPid_ParamsSpec,
      null,
      [pid]);
  }

  getAssociatedInterface(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      IPC.mojom.mojom.Channel_GetAssociatedInterface_ParamsSpec,
      null,
      [receiver]);
  }

};

IPC.mojom.mojom.Channel.getRemote = function() {
  let remote = new IPC.mojom.mojom.ChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'IPC.mojom.Channel',
    'context');
  return remote.$;
};

// ParamsSpec for SetPeerPid
IPC.mojom.mojom.Channel_SetPeerPid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'IPC.mojom.Channel.SetPeerPid_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAssociatedInterface
IPC.mojom.mojom.Channel_GetAssociatedInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'IPC.mojom.Channel.GetAssociatedInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingAssociatedReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
IPC.mojom.mojom.ChannelPtr = IPC.mojom.mojom.ChannelRemote;
IPC.mojom.mojom.ChannelRequest = IPC.mojom.mojom.ChannelPendingReceiver;


// Interface: ChannelBootstrap
IPC.mojom.mojom.ChannelBootstrap = {};

IPC.mojom.mojom.ChannelBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

IPC.mojom.mojom.ChannelBootstrapRemote = class {
  static get $interfaceName() {
    return 'IPC.mojom.ChannelBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      IPC.mojom.mojom.ChannelBootstrapPendingReceiver,
      handle);
    this.$ = new IPC.mojom.mojom.ChannelBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

IPC.mojom.mojom.ChannelBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

IPC.mojom.mojom.ChannelBootstrap.getRemote = function() {
  let remote = new IPC.mojom.mojom.ChannelBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'IPC.mojom.ChannelBootstrap',
    'context');
  return remote.$;
};

// Legacy compatibility
IPC.mojom.mojom.ChannelBootstrapPtr = IPC.mojom.mojom.ChannelBootstrapRemote;
IPC.mojom.mojom.ChannelBootstrapRequest = IPC.mojom.mojom.ChannelBootstrapPendingReceiver;

