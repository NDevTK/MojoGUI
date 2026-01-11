// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/dhcp_wpad_url_client.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.DhcpWpadUrlClient = {};
network.mojom.DhcpWpadUrlClient.$interfaceName = 'network.mojom.DhcpWpadUrlClient';
network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec = { $: {} };
network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec = { $: {} };

// Interface: DhcpWpadUrlClient
mojo.internal.Struct(
    network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec, 'network.mojom.DhcpWpadUrlClient_GetPacUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec, 'network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.DhcpWpadUrlClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DhcpWpadUrlClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DhcpWpadUrlClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DhcpWpadUrlClientPendingReceiver,
      handle);
    this.$ = new network.mojom.DhcpWpadUrlClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPacUrl() {
    return this.$.getPacUrl();
  }
};

network.mojom.DhcpWpadUrlClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DhcpWpadUrlClient', [
      { explicit: null },
    ]);
  }

  getPacUrl() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec,
      network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec,
      [],
      false);
  }

};

network.mojom.DhcpWpadUrlClient.getRemote = function() {
  let remote = new network.mojom.DhcpWpadUrlClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DhcpWpadUrlClient',
    'context');
  return remote.$;
};

network.mojom.DhcpWpadUrlClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DhcpWpadUrlClient', [
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
             decoder.decodeStructInline(network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getPacUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.DhcpWpadUrlClientReceiver = network.mojom.DhcpWpadUrlClientReceiver;

network.mojom.DhcpWpadUrlClientPtr = network.mojom.DhcpWpadUrlClientRemote;
network.mojom.DhcpWpadUrlClientRequest = network.mojom.DhcpWpadUrlClientPendingReceiver;

