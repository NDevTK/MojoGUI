// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/remoting.mojom
// Module: crosapi.mojom

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var remoting = remoting || {};

crosapi.mojom.Remoting = {};
crosapi.mojom.Remoting.$interfaceName = 'crosapi.mojom.Remoting';
crosapi.mojom.Remoting_GetSupportHostDetails_ParamsSpec = { $: {} };
crosapi.mojom.Remoting_GetSupportHostDetails_ResponseParamsSpec = { $: {} };
crosapi.mojom.Remoting_StartSupportSession_ParamsSpec = { $: {} };
crosapi.mojom.Remoting_StartSupportSession_ResponseParamsSpec = { $: {} };

// Interface: Remoting
mojo.internal.Struct(
    crosapi.mojom.Remoting_GetSupportHostDetails_ParamsSpec, 'crosapi.mojom.Remoting_GetSupportHostDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.Remoting_GetSupportHostDetails_ResponseParamsSpec, 'crosapi.mojom.Remoting_GetSupportHostDetails_ResponseParams', [
      mojo.internal.StructField('host_details', 0, 0, remoting.mojom.SupportHostDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Remoting_StartSupportSession_ParamsSpec, 'crosapi.mojom.Remoting_StartSupportSession_Params', [
      mojo.internal.StructField('params', 0, 0, remoting.mojom.SupportSessionParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Remoting_StartSupportSession_ResponseParamsSpec, 'crosapi.mojom.Remoting_StartSupportSession_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, remoting.mojom.StartSupportSessionResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.RemotingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.RemotingRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Remoting';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.RemotingPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.RemotingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSupportHostDetails() {
    return this.$.getSupportHostDetails();
  }
  startSupportSession(params) {
    return this.$.startSupportSession(params);
  }
};

crosapi.mojom.RemotingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Remoting', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  getSupportHostDetails() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.Remoting_GetSupportHostDetails_ParamsSpec,
      crosapi.mojom.Remoting_GetSupportHostDetails_ResponseParamsSpec,
      [],
      false);
  }

  startSupportSession(params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.Remoting_StartSupportSession_ParamsSpec,
      crosapi.mojom.Remoting_StartSupportSession_ResponseParamsSpec,
      [params],
      false);
  }

};

crosapi.mojom.Remoting.getRemote = function() {
  let remote = new crosapi.mojom.RemotingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Remoting',
    'context');
  return remote.$;
};

crosapi.mojom.RemotingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Remoting', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(crosapi.mojom.Remoting_GetSupportHostDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Remoting_StartSupportSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Remoting_GetSupportHostDetails_ParamsSpec.$.structSpec);
          const result = this.impl.getSupportHostDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Remoting_GetSupportHostDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Remoting_StartSupportSession_ParamsSpec.$.structSpec);
          const result = this.impl.startSupportSession(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Remoting_StartSupportSession_ResponseParamsSpec);
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

crosapi.mojom.RemotingReceiver = crosapi.mojom.RemotingReceiver;

crosapi.mojom.RemotingPtr = crosapi.mojom.RemotingRemote;
crosapi.mojom.RemotingRequest = crosapi.mojom.RemotingPendingReceiver;

