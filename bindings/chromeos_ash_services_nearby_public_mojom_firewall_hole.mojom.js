// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/firewall_hole.mojom
// Module: sharing.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};

sharing.mojom.FirewallHole = {};
sharing.mojom.FirewallHole.$interfaceName = 'sharing.mojom.FirewallHole';
sharing.mojom.FirewallHoleFactory = {};
sharing.mojom.FirewallHoleFactory.$interfaceName = 'sharing.mojom.FirewallHoleFactory';
sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec = { $: {} };
sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec = { $: {} };

// Interface: FirewallHole
sharing.mojom.FirewallHolePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.FirewallHoleRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.FirewallHole';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.FirewallHolePendingReceiver,
      handle);
    this.$ = new sharing.mojom.FirewallHoleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.FirewallHoleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FirewallHole', [
    ]);
  }

};

sharing.mojom.FirewallHole.getRemote = function() {
  let remote = new sharing.mojom.FirewallHoleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.FirewallHole',
    'context');
  return remote.$;
};

sharing.mojom.FirewallHoleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FirewallHole', [
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
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    });
  }
};

sharing.mojom.FirewallHoleReceiver = sharing.mojom.FirewallHoleReceiver;

sharing.mojom.FirewallHolePtr = sharing.mojom.FirewallHoleRemote;
sharing.mojom.FirewallHoleRequest = sharing.mojom.FirewallHolePendingReceiver;


// Interface: FirewallHoleFactory
mojo.internal.Struct(
    sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec, 'sharing.mojom.FirewallHoleFactory_OpenFirewallHole_Params', [
      mojo.internal.StructField('port', 0, 0, sharing.mojom.TcpServerSocketPortSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec, 'sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParams', [
      mojo.internal.StructField('firewall_hole', 0, 0, mojo.internal.InterfaceProxy(sharing.mojom.FirewallHoleRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

sharing.mojom.FirewallHoleFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.FirewallHoleFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.FirewallHoleFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.FirewallHoleFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.FirewallHoleFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openFirewallHole(port) {
    return this.$.openFirewallHole(port);
  }
};

sharing.mojom.FirewallHoleFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FirewallHoleFactory', [
      { explicit: null },
    ]);
  }

  openFirewallHole(port) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec,
      sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec,
      [port],
      false);
  }

};

sharing.mojom.FirewallHoleFactory.getRemote = function() {
  let remote = new sharing.mojom.FirewallHoleFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.FirewallHoleFactory',
    'context');
  return remote.$;
};

sharing.mojom.FirewallHoleFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FirewallHoleFactory', [
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
             decoder.decodeStructInline(sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec.$.structSpec);
          const result = this.impl.openFirewallHole(params.port);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

sharing.mojom.FirewallHoleFactoryReceiver = sharing.mojom.FirewallHoleFactoryReceiver;

sharing.mojom.FirewallHoleFactoryPtr = sharing.mojom.FirewallHoleFactoryRemote;
sharing.mojom.FirewallHoleFactoryRequest = sharing.mojom.FirewallHoleFactoryPendingReceiver;

