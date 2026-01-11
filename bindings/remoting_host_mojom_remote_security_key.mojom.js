// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_security_key.mojom
// Module: remoting.mojom

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var mojo_base = mojo_base || {};

remoting.mojom.SecurityKeyForwarder = {};
remoting.mojom.SecurityKeyForwarder.$interfaceName = 'remoting.mojom.SecurityKeyForwarder';
remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec = { $: {} };
remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec = { $: {} };

// Interface: SecurityKeyForwarder
mojo.internal.Struct(
    remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec, 'remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_Params', [
      mojo.internal.StructField('request_data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec, 'remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParams', [
      mojo.internal.StructField('response_data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.SecurityKeyForwarderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.SecurityKeyForwarderRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.SecurityKeyForwarder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.SecurityKeyForwarderPendingReceiver,
      handle);
    this.$ = new remoting.mojom.SecurityKeyForwarderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSecurityKeyRequest(request_data) {
    return this.$.onSecurityKeyRequest(request_data);
  }
};

remoting.mojom.SecurityKeyForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SecurityKeyForwarder', [
      { explicit: null },
    ]);
  }

  onSecurityKeyRequest(request_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec,
      remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec,
      [request_data],
      false);
  }

};

remoting.mojom.SecurityKeyForwarder.getRemote = function() {
  let remote = new remoting.mojom.SecurityKeyForwarderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.SecurityKeyForwarder',
    'context');
  return remote.$;
};

remoting.mojom.SecurityKeyForwarderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SecurityKeyForwarder', [
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
             decoder.decodeStructInline(remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec.$.structSpec);
          const result = this.impl.onSecurityKeyRequest(params.request_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec);
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

remoting.mojom.SecurityKeyForwarderReceiver = remoting.mojom.SecurityKeyForwarderReceiver;

remoting.mojom.SecurityKeyForwarderPtr = remoting.mojom.SecurityKeyForwarderRemote;
remoting.mojom.SecurityKeyForwarderRequest = remoting.mojom.SecurityKeyForwarderPendingReceiver;

