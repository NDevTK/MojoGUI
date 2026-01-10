// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_decoder.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: NearbySharingDecoder
sharing.mojom.mojom.NearbySharingDecoder = {};

sharing.mojom.mojom.NearbySharingDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.NearbySharingDecoderRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.NearbySharingDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.NearbySharingDecoderPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.NearbySharingDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.NearbySharingDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  decodeAdvertisement(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec,
      sharing.mojom.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec,
      [data]);
  }

  decodeFrame(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec,
      sharing.mojom.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec,
      [data]);
  }

};

sharing.mojom.mojom.NearbySharingDecoder.getRemote = function() {
  let remote = new sharing.mojom.mojom.NearbySharingDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.NearbySharingDecoder',
    'context');
  return remote.$;
};

// ParamsSpec for DecodeAdvertisement
sharing.mojom.mojom.NearbySharingDecoder_DecodeAdvertisement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeAdvertisement_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

sharing.mojom.mojom.NearbySharingDecoder_DecodeAdvertisement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeAdvertisement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'advertisement', packedOffset: 0, packedBitOffset: 0, type: sharing.mojom.AdvertisementSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecodeFrame
sharing.mojom.mojom.NearbySharingDecoder_DecodeFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

sharing.mojom.mojom.NearbySharingDecoder_DecodeFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbySharingDecoder.DecodeFrame_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: sharing.mojom.FrameSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
sharing.mojom.mojom.NearbySharingDecoderPtr = sharing.mojom.mojom.NearbySharingDecoderRemote;
sharing.mojom.mojom.NearbySharingDecoderRequest = sharing.mojom.mojom.NearbySharingDecoderPendingReceiver;

