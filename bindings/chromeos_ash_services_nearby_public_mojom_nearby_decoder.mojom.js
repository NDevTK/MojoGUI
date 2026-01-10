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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec.$.decode(message.payload);
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
          const params = sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

sharing.mojom.NearbySharingDecoderReceiver = sharing.mojom.NearbySharingDecoderReceiver;

sharing.mojom.NearbySharingDecoderPtr = sharing.mojom.NearbySharingDecoderRemote;
sharing.mojom.NearbySharingDecoderRequest = sharing.mojom.NearbySharingDecoderPendingReceiver;

