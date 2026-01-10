// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/demuxer_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.DemuxerStream = {};
media.mojom.DemuxerStream.$interfaceName = 'media.mojom.DemuxerStream';
media.mojom.DemuxerStream_Initialize_ParamsSpec = { $: {} };
media.mojom.DemuxerStream_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.DemuxerStream_Read_ParamsSpec = { $: {} };
media.mojom.DemuxerStream_Read_ResponseParamsSpec = { $: {} };
media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec = { $: {} };

// Interface: DemuxerStream
mojo.internal.Struct(
    media.mojom.DemuxerStream_Initialize_ParamsSpec, 'media.mojom.DemuxerStream_Initialize_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_Initialize_ResponseParamsSpec, 'media.mojom.DemuxerStream_Initialize_ResponseParams', [
      mojo.internal.StructField('type', 24, 0, media.mojom.TypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('audio_config', 8, 0, media.mojom.AudioDecoderConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('video_config', 16, 0, media.mojom.VideoDecoderConfigSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_Read_ParamsSpec, 'media.mojom.DemuxerStream_Read_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_Read_ResponseParamsSpec, 'media.mojom.DemuxerStream_Read_ResponseParams', [
      mojo.internal.StructField('status', 24, 0, media.mojom.StatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('batch_buffers', 0, 0, mojo.internal.Array(media.mojom.DecoderBufferSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('audio_config', 8, 0, media.mojom.AudioDecoderConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('video_config', 16, 0, media.mojom.VideoDecoderConfigSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec, 'media.mojom.DemuxerStream_EnableBitstreamConverter_Params', [
    ],
    [{version: 0, packedSize: 8}]);

media.mojom.DemuxerStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DemuxerStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DemuxerStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DemuxerStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.DemuxerStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.DemuxerStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.DemuxerStream_Initialize_ParamsSpec,
      media.mojom.DemuxerStream_Initialize_ResponseParamsSpec,
      []);
  }

  read(count) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.DemuxerStream_Read_ParamsSpec,
      media.mojom.DemuxerStream_Read_ResponseParamsSpec,
      [count]);
  }

  enableBitstreamConverter() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec,
      null,
      []);
  }

};

media.mojom.DemuxerStream.getRemote = function() {
  let remote = new media.mojom.DemuxerStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DemuxerStream',
    'context');
  return remote.$;
};

media.mojom.DemuxerStreamPtr = media.mojom.DemuxerStreamRemote;
media.mojom.DemuxerStreamRequest = media.mojom.DemuxerStreamPendingReceiver;

