// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/mojo/mojom/remote_interfaces.mojom
// Module: chromecast.mojom

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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromecast.mojom.RemoteInterfacesRemote), null, false, 0, undefined),
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
  bindInterface(interface_name, pipe) {
    return this.$.bindInterface(interface_name, pipe);
  }
  addClient(receiver) {
    return this.$.addClient(receiver);
  }
};

chromecast.mojom.RemoteInterfacesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteInterfaces', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindInterface(interface_name, pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec,
      null,
      [interface_name, pipe],
      false);
  }

  addClient(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteInterfaces', [
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
             decoder.decodeStructInline(chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.RemoteInterfaces_BindInterface_ParamsSpec.$.structSpec);
          const result = this.impl.bindInterface(params.interface_name, params.pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.RemoteInterfaces_AddClient_ParamsSpec.$.structSpec);
          const result = this.impl.addClient(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.RemoteInterfacesReceiver = chromecast.mojom.RemoteInterfacesReceiver;

chromecast.mojom.RemoteInterfacesPtr = chromecast.mojom.RemoteInterfacesRemote;
chromecast.mojom.RemoteInterfacesRequest = chromecast.mojom.RemoteInterfacesPendingReceiver;

