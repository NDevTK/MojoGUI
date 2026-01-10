// Auto-generated MojoJS binding
// Source: chromium_src/components/cast_streaming/common/public/mojom/demuxer_connector.mojom
// Module: cast_streaming.mojom

'use strict';

// Module namespace
var cast_streaming = cast_streaming || {};
cast_streaming.mojom = cast_streaming.mojom || {};


// Union: GetAudioBufferResponse
cast_streaming.mojom.GetAudioBufferResponseSpec = { $: mojo.internal.Union(
    'cast_streaming.mojom.GetAudioBufferResponse', {
      'stream_info': {
        'ordinal': 0,
        'type': cast_streaming.mojom.AudioStreamInfoSpec,
      }},
      'buffer': {
        'ordinal': 1,
        'type': media.mojom.DecoderBufferSpec,
      }},
    })
};

// Union: GetVideoBufferResponse
cast_streaming.mojom.GetVideoBufferResponseSpec = { $: mojo.internal.Union(
    'cast_streaming.mojom.GetVideoBufferResponse', {
      'stream_info': {
        'ordinal': 0,
        'type': cast_streaming.mojom.VideoStreamInfoSpec,
      }},
      'buffer': {
        'ordinal': 1,
        'type': media.mojom.DecoderBufferSpec,
      }},
    })
};

// Struct: AudioStreamInfo
cast_streaming.mojom.AudioStreamInfoSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.AudioStreamInfo',
      packedSize: 24,
      fields: [
        { name: 'decoder_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDecoderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'data_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoStreamInfo
cast_streaming.mojom.VideoStreamInfoSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.VideoStreamInfo',
      packedSize: 24,
      fields: [
        { name: 'decoder_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoDecoderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'data_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AudioStreamInitializationInfo
cast_streaming.mojom.AudioStreamInitializationInfoSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.AudioStreamInitializationInfo',
      packedSize: 24,
      fields: [
        { name: 'buffer_requester', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'stream_initialization_info', packedOffset: 8, packedBitOffset: 0, type: cast_streaming.mojom.AudioStreamInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoStreamInitializationInfo
cast_streaming.mojom.VideoStreamInitializationInfoSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.VideoStreamInitializationInfo',
      packedSize: 24,
      fields: [
        { name: 'buffer_requester', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'stream_initialization_info', packedOffset: 8, packedBitOffset: 0, type: cast_streaming.mojom.VideoStreamInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: AudioBufferRequester
cast_streaming.mojom.AudioBufferRequester = {};

cast_streaming.mojom.AudioBufferRequesterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cast_streaming.mojom.AudioBufferRequesterRemote = class {
  static get $interfaceName() {
    return 'cast_streaming.mojom.AudioBufferRequester';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cast_streaming.mojom.AudioBufferRequesterPendingReceiver,
      handle);
    this.$ = new cast_streaming.mojom.AudioBufferRequesterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cast_streaming.mojom.AudioBufferRequesterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBuffer() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec,
      cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec,
      []);
  }

  enableBitstreamConverter() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec,
      cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec,
      []);
  }

};

cast_streaming.mojom.AudioBufferRequester.getRemote = function() {
  let remote = new cast_streaming.mojom.AudioBufferRequesterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cast_streaming.mojom.AudioBufferRequester',
    'context');
  return remote.$;
};

// ParamsSpec for GetBuffer
cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.AudioBufferRequester.GetBuffer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.AudioBufferRequester.GetBuffer_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'buffer_response', packedOffset: 0, packedBitOffset: 0, type: cast_streaming.mojom.GetAudioBufferResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableBitstreamConverter
cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.AudioBufferRequester.EnableBitstreamConverter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.AudioBufferRequester.EnableBitstreamConverter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cast_streaming.mojom.AudioBufferRequesterPtr = cast_streaming.mojom.AudioBufferRequesterRemote;
cast_streaming.mojom.AudioBufferRequesterRequest = cast_streaming.mojom.AudioBufferRequesterPendingReceiver;


// Interface: VideoBufferRequester
cast_streaming.mojom.VideoBufferRequester = {};

cast_streaming.mojom.VideoBufferRequesterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cast_streaming.mojom.VideoBufferRequesterRemote = class {
  static get $interfaceName() {
    return 'cast_streaming.mojom.VideoBufferRequester';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cast_streaming.mojom.VideoBufferRequesterPendingReceiver,
      handle);
    this.$ = new cast_streaming.mojom.VideoBufferRequesterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cast_streaming.mojom.VideoBufferRequesterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBuffer() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec,
      cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec,
      []);
  }

  enableBitstreamConverter() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec,
      cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec,
      []);
  }

};

cast_streaming.mojom.VideoBufferRequester.getRemote = function() {
  let remote = new cast_streaming.mojom.VideoBufferRequesterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cast_streaming.mojom.VideoBufferRequester',
    'context');
  return remote.$;
};

// ParamsSpec for GetBuffer
cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.VideoBufferRequester.GetBuffer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.VideoBufferRequester.GetBuffer_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'buffer_response', packedOffset: 0, packedBitOffset: 0, type: cast_streaming.mojom.GetVideoBufferResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableBitstreamConverter
cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.VideoBufferRequester.EnableBitstreamConverter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.VideoBufferRequester.EnableBitstreamConverter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cast_streaming.mojom.VideoBufferRequesterPtr = cast_streaming.mojom.VideoBufferRequesterRemote;
cast_streaming.mojom.VideoBufferRequesterRequest = cast_streaming.mojom.VideoBufferRequesterPendingReceiver;


// Interface: DemuxerConnector
cast_streaming.mojom.DemuxerConnector = {};

cast_streaming.mojom.DemuxerConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cast_streaming.mojom.DemuxerConnectorRemote = class {
  static get $interfaceName() {
    return 'cast_streaming.mojom.DemuxerConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cast_streaming.mojom.DemuxerConnectorPendingReceiver,
      handle);
    this.$ = new cast_streaming.mojom.DemuxerConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cast_streaming.mojom.DemuxerConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableReceiver() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec,
      null,
      []);
  }

  onStreamsInitialized(audio_buffer_requester, video_buffer_requester) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec,
      null,
      [audio_buffer_requester, video_buffer_requester]);
  }

};

cast_streaming.mojom.DemuxerConnector.getRemote = function() {
  let remote = new cast_streaming.mojom.DemuxerConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cast_streaming.mojom.DemuxerConnector',
    'context');
  return remote.$;
};

// ParamsSpec for EnableReceiver
cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.DemuxerConnector.EnableReceiver_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStreamsInitialized
cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.DemuxerConnector.OnStreamsInitialized_Params',
      packedSize: 24,
      fields: [
        { name: 'audio_buffer_requester', packedOffset: 0, packedBitOffset: 0, type: cast_streaming.mojom.AudioStreamInitializationInfoSpec, nullable: true, minVersion: 0 },
        { name: 'video_buffer_requester', packedOffset: 8, packedBitOffset: 0, type: cast_streaming.mojom.VideoStreamInitializationInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
cast_streaming.mojom.DemuxerConnectorPtr = cast_streaming.mojom.DemuxerConnectorRemote;
cast_streaming.mojom.DemuxerConnectorRequest = cast_streaming.mojom.DemuxerConnectorPendingReceiver;

