// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_decoder.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};

sharing.mojom.NearbySharingDecoder = {};
sharing.mojom.NearbySharingDecoder.$interfaceName = 'sharing.mojom.NearbySharingDecoder';
sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec = { $: {} };
sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec = { $: {} };
sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec = { $: {} };
sharing.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec = { $: {} };

// Interface: NearbySharingDecoder
mojo.internal.Struct(
    sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec, 'sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec, 'sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParams', [
      mojo.internal.StructField('advertisement', 0, 0, sharing.mojom.AdvertisementSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec, 'sharing.mojom.NearbySharingDecoder_DecodeFrame_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec, 'sharing.mojom.NearbySharingDecoder_DecodeFrame_ResponseParams', [
      mojo.internal.StructField('frame', 0, 0, sharing.mojom.FrameSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

sharing.mojom.NearbySharingDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.NearbySharingDecoderRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.NearbySharingDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.NearbySharingDecoderPendingReceiver,
      handle);
    this.$ = new sharing.mojom.NearbySharingDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.NearbySharingDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  decodeAdvertisement(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec,
      sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec,
      [data],
      false);
  }

  decodeFrame(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec,
      sharing.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec,
      [data],
      false);
  }

};

sharing.mojom.NearbySharingDecoder.getRemote = function() {
  let remote = new sharing.mojom.NearbySharingDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.NearbySharingDecoder',
    'context');
  return remote.$;
};

sharing.mojom.NearbySharingDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DecodeAdvertisement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecodeAdvertisement (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DecodeFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecodeFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.decodeAdvertisement');
          const result = this.impl.decodeAdvertisement(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.decodeFrame');
          const result = this.impl.decodeFrame(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

sharing.mojom.NearbySharingDecoderReceiver = sharing.mojom.NearbySharingDecoderReceiver;

sharing.mojom.NearbySharingDecoderPtr = sharing.mojom.NearbySharingDecoderRemote;
sharing.mojom.NearbySharingDecoderRequest = sharing.mojom.NearbySharingDecoderPendingReceiver;

