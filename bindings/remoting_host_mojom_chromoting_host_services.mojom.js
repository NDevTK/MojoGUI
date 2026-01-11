// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/chromoting_host_services.mojom
// Module: remoting.mojom

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.ChromotingHostServices = {};
remoting.mojom.ChromotingHostServices.$interfaceName = 'remoting.mojom.ChromotingHostServices';
remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices = {};
remoting.mojom.ChromotingSessionServices.$interfaceName = 'remoting.mojom.ChromotingSessionServices';
remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec = { $: {} };

// Interface: ChromotingHostServices
mojo.internal.Struct(
    remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec, 'remoting.mojom.ChromotingHostServices_BindSessionServices_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.ChromotingSessionServicesRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.ChromotingHostServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.ChromotingHostServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingHostServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.ChromotingHostServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.ChromotingHostServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindSessionServices(receiver) {
    return this.$.bindSessionServices(receiver);
  }
};

remoting.mojom.ChromotingHostServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromotingHostServices', [
      { explicit: null },
    ]);
  }

  bindSessionServices(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

remoting.mojom.ChromotingHostServices.getRemote = function() {
  let remote = new remoting.mojom.ChromotingHostServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingHostServices',
    'context');
  return remote.$;
};

remoting.mojom.ChromotingHostServicesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromotingHostServices', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec.$.structSpec);
          const result = this.impl.bindSessionServices(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.ChromotingHostServicesReceiver = remoting.mojom.ChromotingHostServicesReceiver;

remoting.mojom.ChromotingHostServicesPtr = remoting.mojom.ChromotingHostServicesRemote;
remoting.mojom.ChromotingHostServicesRequest = remoting.mojom.ChromotingHostServicesPendingReceiver;


// Interface: ChromotingSessionServices
mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnProxyRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.RemoteUrlOpenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.SecurityKeyForwarderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.ChromotingSessionServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.ChromotingSessionServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingSessionServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.ChromotingSessionServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.ChromotingSessionServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindWebAuthnProxy(receiver) {
    return this.$.bindWebAuthnProxy(receiver);
  }
  bindRemoteUrlOpener(receiver) {
    return this.$.bindRemoteUrlOpener(receiver);
  }
  bindSecurityKeyForwarder(receiver) {
    return this.$.bindSecurityKeyForwarder(receiver);
  }
};

remoting.mojom.ChromotingSessionServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromotingSessionServices', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindWebAuthnProxy(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindRemoteUrlOpener(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSecurityKeyForwarder(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

remoting.mojom.ChromotingSessionServices.getRemote = function() {
  let remote = new remoting.mojom.ChromotingSessionServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingSessionServices',
    'context');
  return remote.$;
};

remoting.mojom.ChromotingSessionServicesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromotingSessionServices', [
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec.$.structSpec);
          const result = this.impl.bindWebAuthnProxy(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec.$.structSpec);
          const result = this.impl.bindRemoteUrlOpener(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec.$.structSpec);
          const result = this.impl.bindSecurityKeyForwarder(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.ChromotingSessionServicesReceiver = remoting.mojom.ChromotingSessionServicesReceiver;

remoting.mojom.ChromotingSessionServicesPtr = remoting.mojom.ChromotingSessionServicesRemote;
remoting.mojom.ChromotingSessionServicesRequest = remoting.mojom.ChromotingSessionServicesPendingReceiver;

