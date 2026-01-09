// Auto-generated MojoJS binding
// Source: chromium_src/ipc/ipc.mojom
// Module: IPC.mojom

'use strict';

// Module namespace
var IPC = IPC || {};
IPC.mojom = IPC.mojom || {};


// Struct: Message
IPC.mojom.Message = class {
  constructor(values = {}) {
    this.handles = values.handles !== undefined ? values.handles : 0;
  }
};

// Interface: Channel
IPC.mojom.ChannelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'IPC.mojom.Channel';
  }

  setPeerPid(pid) {
    // Method: SetPeerPid
    // Call: SetPeerPid(pid)
  }

  getAssociatedInterface(receiver) {
    // Method: GetAssociatedInterface
    // Call: GetAssociatedInterface(receiver)
  }

};

IPC.mojom.ChannelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ChannelBootstrap
IPC.mojom.ChannelBootstrapPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'IPC.mojom.ChannelBootstrap';
  }

};

IPC.mojom.ChannelBootstrapRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
