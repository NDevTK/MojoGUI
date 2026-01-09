// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_decoder.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: NearbySharingDecoder
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
      sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec.$,
      sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec.$,
      [data]);
  }

  decodeFrame(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec.$,
      sharing.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec.$,
      [data]);
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
}};

// ParamsSpec for DecodeAdvertisement
sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeAdvertisement_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

sharing.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeAdvertisement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'advertisement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DecodeFrame
sharing.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

sharing.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeFrame_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
sharing.mojom.NearbySharingDecoderPtr = sharing.mojom.NearbySharingDecoderRemote;
sharing.mojom.NearbySharingDecoderRequest = sharing.mojom.NearbySharingDecoderPendingReceiver;

