// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/mojo/mojom/remote_interfaces.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: RemoteInterfaces
chromecast.mojom.RemoteInterfaces = {};

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
      [interface_name, pipe]);
  }

  addClient(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for BindInterface
chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.RemoteInterfaces.BindInterface_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddClient
chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.RemoteInterfaces.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.RemoteInterfacesPtr = chromecast.mojom.RemoteInterfacesRemote;
chromecast.mojom.RemoteInterfacesRequest = chromecast.mojom.RemoteInterfacesPendingReceiver;

