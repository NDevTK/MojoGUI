// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_engine.mojom
// Module: ash.ime.mojom

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};

ash.ime.mojom.InputChannel = {};
ash.ime.mojom.InputChannel.$interfaceName = 'ash.ime.mojom.InputChannel';
ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec = { $: {} };
ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec = { $: {} };

// Interface: InputChannel
mojo.internal.Struct(
    ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec, 'ash.ime.mojom.InputChannel_ProcessMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec, 'ash.ime.mojom.InputChannel_ProcessMessage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.InputChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputChannelRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputChannelPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  processMessage(message) {
    return this.$.processMessage(message);
  }
};

ash.ime.mojom.InputChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputChannel', [
      { explicit: null },
    ]);
  }

  processMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec,
      ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec,
      [message],
      false);
  }

};

ash.ime.mojom.InputChannel.getRemote = function() {
  let remote = new ash.ime.mojom.InputChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputChannel',
    'context');
  return remote.$;
};

ash.ime.mojom.InputChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputChannel', [
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
             decoder.decodeStructInline(ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec.$.structSpec);
          const result = this.impl.processMessage(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec);
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

ash.ime.mojom.InputChannelReceiver = ash.ime.mojom.InputChannelReceiver;

ash.ime.mojom.InputChannelPtr = ash.ime.mojom.InputChannelRemote;
ash.ime.mojom.InputChannelRequest = ash.ime.mojom.InputChannelPendingReceiver;

