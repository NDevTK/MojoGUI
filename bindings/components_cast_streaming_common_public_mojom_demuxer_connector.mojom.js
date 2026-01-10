// Auto-generated MojoJS binding
// Source: chromium_src/components/cast_streaming/common/public/mojom/demuxer_connector.mojom
// Module: cast_streaming.mojom

'use strict';

// Module namespace
var cast_streaming = cast_streaming || {};
cast_streaming.mojom = cast_streaming.mojom || {};
var media = media || {};

cast_streaming.mojom.GetAudioBufferResponseSpec = { $: {} };
cast_streaming.mojom.GetVideoBufferResponseSpec = { $: {} };
cast_streaming.mojom.AudioStreamInfoSpec = { $: {} };
cast_streaming.mojom.VideoStreamInfoSpec = { $: {} };
cast_streaming.mojom.AudioStreamInitializationInfoSpec = { $: {} };
cast_streaming.mojom.VideoStreamInitializationInfoSpec = { $: {} };
cast_streaming.mojom.AudioBufferRequester = {};
cast_streaming.mojom.AudioBufferRequester.$interfaceName = 'cast_streaming.mojom.AudioBufferRequester';
cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec = { $: {} };
cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec = { $: {} };
cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec = { $: {} };
cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec = { $: {} };
cast_streaming.mojom.VideoBufferRequester = {};
cast_streaming.mojom.VideoBufferRequester.$interfaceName = 'cast_streaming.mojom.VideoBufferRequester';
cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec = { $: {} };
cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec = { $: {} };
cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec = { $: {} };
cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec = { $: {} };
cast_streaming.mojom.DemuxerConnector = {};
cast_streaming.mojom.DemuxerConnector.$interfaceName = 'cast_streaming.mojom.DemuxerConnector';
cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec = { $: {} };
cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec = { $: {} };
cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec = { $: {} };

// Union: GetAudioBufferResponse
mojo.internal.Union(
    cast_streaming.mojom.GetAudioBufferResponseSpec, 'cast_streaming.mojom.GetAudioBufferResponse', {
      'stream_info': {
        'ordinal': 0,
        'type': cast_streaming.mojom.AudioStreamInfoSpec.$,
        'nullable': false,
      },
      'buffer': {
        'ordinal': 1,
        'type': media.mojom.DecoderBufferSpec.$,
        'nullable': false,
      },
    });

// Union: GetVideoBufferResponse
mojo.internal.Union(
    cast_streaming.mojom.GetVideoBufferResponseSpec, 'cast_streaming.mojom.GetVideoBufferResponse', {
      'stream_info': {
        'ordinal': 0,
        'type': cast_streaming.mojom.VideoStreamInfoSpec.$,
        'nullable': false,
      },
      'buffer': {
        'ordinal': 1,
        'type': media.mojom.DecoderBufferSpec.$,
        'nullable': false,
      },
    });

// Struct: AudioStreamInfo
mojo.internal.Struct(
    cast_streaming.mojom.AudioStreamInfoSpec, 'cast_streaming.mojom.AudioStreamInfo', [
      mojo.internal.StructField('decoder_config', 0, 0, media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoStreamInfo
mojo.internal.Struct(
    cast_streaming.mojom.VideoStreamInfoSpec, 'cast_streaming.mojom.VideoStreamInfo', [
      mojo.internal.StructField('decoder_config', 0, 0, media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioStreamInitializationInfo
mojo.internal.Struct(
    cast_streaming.mojom.AudioStreamInitializationInfoSpec, 'cast_streaming.mojom.AudioStreamInitializationInfo', [
      mojo.internal.StructField('buffer_requester', 0, 0, mojo.internal.InterfaceProxy(cast_streaming.mojom.AudioBufferRequesterSpec), null, false, 0, undefined),
      mojo.internal.StructField('stream_initialization_info', 8, 0, cast_streaming.mojom.AudioStreamInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoStreamInitializationInfo
mojo.internal.Struct(
    cast_streaming.mojom.VideoStreamInitializationInfoSpec, 'cast_streaming.mojom.VideoStreamInitializationInfo', [
      mojo.internal.StructField('buffer_requester', 0, 0, mojo.internal.InterfaceProxy(cast_streaming.mojom.VideoBufferRequesterSpec), null, false, 0, undefined),
      mojo.internal.StructField('stream_initialization_info', 8, 0, cast_streaming.mojom.VideoStreamInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AudioBufferRequester
mojo.internal.Struct(
    cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_GetBuffer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParams', [
      mojo.internal.StructField('buffer_response', 0, 0, cast_streaming.mojom.GetAudioBufferResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec, 'cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  enableBitstreamConverter() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec,
      cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec,
      [],
      false);
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

cast_streaming.mojom.AudioBufferRequesterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = cast_streaming.mojom.AudioBufferRequester_GetBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBuffer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cast_streaming.mojom.AudioBufferRequester_GetBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableBitstreamConverter();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cast_streaming.mojom.AudioBufferRequester_EnableBitstreamConverter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

cast_streaming.mojom.AudioBufferRequesterReceiver = cast_streaming.mojom.AudioBufferRequesterReceiver;

cast_streaming.mojom.AudioBufferRequesterPtr = cast_streaming.mojom.AudioBufferRequesterRemote;
cast_streaming.mojom.AudioBufferRequesterRequest = cast_streaming.mojom.AudioBufferRequesterPendingReceiver;


// Interface: VideoBufferRequester
mojo.internal.Struct(
    cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_GetBuffer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParams', [
      mojo.internal.StructField('buffer_response', 0, 0, cast_streaming.mojom.GetVideoBufferResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec, 'cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  enableBitstreamConverter() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec,
      cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec,
      [],
      false);
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

cast_streaming.mojom.VideoBufferRequesterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = cast_streaming.mojom.VideoBufferRequester_GetBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBuffer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cast_streaming.mojom.VideoBufferRequester_GetBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableBitstreamConverter();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cast_streaming.mojom.VideoBufferRequester_EnableBitstreamConverter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

cast_streaming.mojom.VideoBufferRequesterReceiver = cast_streaming.mojom.VideoBufferRequesterReceiver;

cast_streaming.mojom.VideoBufferRequesterPtr = cast_streaming.mojom.VideoBufferRequesterRemote;
cast_streaming.mojom.VideoBufferRequesterRequest = cast_streaming.mojom.VideoBufferRequesterPendingReceiver;


// Interface: DemuxerConnector
mojo.internal.Struct(
    cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec, 'cast_streaming.mojom.DemuxerConnector_EnableReceiver_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec, 'cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec, 'cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_Params', [
      mojo.internal.StructField('audio_buffer_requester', 0, 0, cast_streaming.mojom.AudioStreamInitializationInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('video_buffer_requester', 8, 0, cast_streaming.mojom.VideoStreamInitializationInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec,
      [],
      false);
  }

  onStreamsInitialized(audio_buffer_requester, video_buffer_requester) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec,
      null,
      [audio_buffer_requester, video_buffer_requester],
      false);
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

cast_streaming.mojom.DemuxerConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = cast_streaming.mojom.DemuxerConnector_EnableReceiver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableReceiver();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cast_streaming.mojom.DemuxerConnector_EnableReceiver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = cast_streaming.mojom.DemuxerConnector_OnStreamsInitialized_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStreamsInitialized(params.audio_buffer_requester, params.video_buffer_requester);
          break;
        }
      }
    }});
  }
};

cast_streaming.mojom.DemuxerConnectorReceiver = cast_streaming.mojom.DemuxerConnectorReceiver;

cast_streaming.mojom.DemuxerConnectorPtr = cast_streaming.mojom.DemuxerConnectorRemote;
cast_streaming.mojom.DemuxerConnectorRequest = cast_streaming.mojom.DemuxerConnectorPendingReceiver;

