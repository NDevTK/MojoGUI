// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/mojo/mojom/remote_interfaces.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.RemoteInterfaces = {};
chromecast.mojom.RemoteInterfaces.$interfaceName = 'chromecast.mojom.RemoteInterfaces';
chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec = { $: {} };
chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec = { $: {} };

// Interface: RemoteInterfaces
mojo.internal.Struct(
    chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec, 'chromecast.mojom.RemoteInterfaces_BindInterface_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec, 'chromecast.mojom.RemoteInterfaces_AddClient_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromecast.mojom.RemoteInterfacesSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.RemoteInterfacesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.RemoteInterfacesRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.RemoteInterfaces';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.RemoteInterfacesPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.RemoteInterfacesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.RemoteInterfacesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindInterface(interface_name, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec,
      null,
      [interface_name, pipe],
      false);
  }

  addClient(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

chromecast.mojom.RemoteInterfaces.getRemote = function() {
  let remote = new chromecast.mojom.RemoteInterfacesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.RemoteInterfaces',
    'context');
  return remote.$;
};

chromecast.mojom.RemoteInterfacesReceiver = class {
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
          const params = chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindInterface(params.interface_name, params.pipe);
          break;
        }
        case 1: {
          const params = chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addClient(params.receiver);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.RemoteInterfacesReceiver = chromecast.mojom.RemoteInterfacesReceiver;

chromecast.mojom.RemoteInterfacesPtr = chromecast.mojom.RemoteInterfacesRemote;
chromecast.mojom.RemoteInterfacesRequest = chromecast.mojom.RemoteInterfacesPendingReceiver;

