// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/quick_start_decoder.mojom
// Module: ash.quick_start.mojom

// Module namespace
var ash = ash || {};
ash.quick_start = ash.quick_start || {};
ash.quick_start.mojom = ash.quick_start.mojom || {};
var sandbox = sandbox || {};

ash.quick_start.mojom.QuickStartDecoder = {};
ash.quick_start.mojom.QuickStartDecoder.$interfaceName = 'ash.quick_start.mojom.QuickStartDecoder';
ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec = { $: {} };
ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec = { $: {} };

// Interface: QuickStartDecoder
mojo.internal.Struct(
    ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec, 'ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec, 'ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.quick_start.mojom.QuickStartMessageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, ash.quick_start.mojom.QuickStartDecoderErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

ash.quick_start.mojom.QuickStartDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.quick_start.mojom.QuickStartDecoderRemote = class {
  static get $interfaceName() {
    return 'ash.quick_start.mojom.QuickStartDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.quick_start.mojom.QuickStartDecoderPendingReceiver,
      handle);
    this.$ = new ash.quick_start.mojom.QuickStartDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  decodeQuickStartMessage(data) {
    return this.$.decodeQuickStartMessage(data);
  }
};

ash.quick_start.mojom.QuickStartDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('QuickStartDecoder', [
      { explicit: null },
    ]);
  }

  decodeQuickStartMessage(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec,
      ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec,
      [data],
      false);
  }

};

ash.quick_start.mojom.QuickStartDecoder.getRemote = function() {
  let remote = new ash.quick_start.mojom.QuickStartDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.quick_start.mojom.QuickStartDecoder',
    'context');
  return remote.$;
};

ash.quick_start.mojom.QuickStartDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('QuickStartDecoder', [
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
             decoder.decodeStructInline(ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec.$.structSpec);
          const result = this.impl.decodeQuickStartMessage(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec);
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

ash.quick_start.mojom.QuickStartDecoderReceiver = ash.quick_start.mojom.QuickStartDecoderReceiver;

ash.quick_start.mojom.QuickStartDecoderPtr = ash.quick_start.mojom.QuickStartDecoderRemote;
ash.quick_start.mojom.QuickStartDecoderRequest = ash.quick_start.mojom.QuickStartDecoderPendingReceiver;

