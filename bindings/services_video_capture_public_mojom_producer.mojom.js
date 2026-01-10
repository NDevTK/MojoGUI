// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/producer.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};

video_capture.mojom.Producer = {};
video_capture.mojom.Producer.$interfaceName = 'video_capture.mojom.Producer';
video_capture.mojom.Producer_OnNewBuffer_ParamsSpec = { $: {} };
video_capture.mojom.Producer_OnNewBuffer_ResponseParamsSpec = { $: {} };
video_capture.mojom.Producer_OnBufferRetired_ParamsSpec = { $: {} };

// Interface: Producer
mojo.internal.Struct(
    video_capture.mojom.Producer_OnNewBuffer_ParamsSpec, 'video_capture.mojom.Producer_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_handle', 8, 0, media.mojom.VideoBufferHandleSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    video_capture.mojom.Producer_OnNewBuffer_ResponseParamsSpec, 'video_capture.mojom.Producer_OnNewBuffer_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.Producer_OnBufferRetired_ParamsSpec, 'video_capture.mojom.Producer_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      video_capture.mojom.Producer_OnNewBuffer_ParamsSpec,
      video_capture.mojom.Producer_OnNewBuffer_ResponseParamsSpec,
      [buffer_id, buffer_handle],
      false);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.Producer_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
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
};

video_capture.mojom.ProducerPtr = video_capture.mojom.ProducerRemote;
video_capture.mojom.ProducerRequest = video_capture.mojom.ProducerPendingReceiver;

