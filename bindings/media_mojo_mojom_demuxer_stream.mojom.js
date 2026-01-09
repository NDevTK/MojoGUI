// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/demuxer_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: DemuxerStream
media.mojom.DemuxerStream = {};

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

// ParamsSpec for Initialize
media.mojom.DemuxerStream_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DemuxerStream.Initialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.DemuxerStream_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DemuxerStream.Initialize_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'audio_config', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'video_config', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Read
media.mojom.DemuxerStream_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DemuxerStream.Read_Params',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.DemuxerStream_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DemuxerStream.Read_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'batch_buffers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'audio_config', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'video_config', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableBitstreamConverter
media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DemuxerStream.EnableBitstreamConverter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.DemuxerStreamPtr = media.mojom.DemuxerStreamRemote;
media.mojom.DemuxerStreamRequest = media.mojom.DemuxerStreamPendingReceiver;

