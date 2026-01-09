// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/producer.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: Producer
video_capture.mojom.ProducerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.ProducerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.Producer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.ProducerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.ProducerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.ProducerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.Producer_OnNewBuffer_ParamsSpec.$,
      null,
      [buffer_id, buffer_handle]);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.Producer_OnBufferRetired_ParamsSpec.$,
      null,
      [buffer_id]);
  }

};

video_capture.mojom.Producer.getRemote = function() {
  let remote = new video_capture.mojom.ProducerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.Producer',
    'context');
  return remote.$;
}};

// ParamsSpec for OnNewBuffer
video_capture.mojom.Producer_OnNewBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Producer.OnNewBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'buffer_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnBufferRetired
video_capture.mojom.Producer_OnBufferRetired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Producer.OnBufferRetired_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
video_capture.mojom.ProducerPtr = video_capture.mojom.ProducerRemote;
video_capture.mojom.ProducerRequest = video_capture.mojom.ProducerPendingReceiver;

