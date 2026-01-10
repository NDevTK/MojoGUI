// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var gfx = gfx || {};
var url = url || {};

media.mojom.Renderer = {};
media.mojom.Renderer.$interfaceName = 'media.mojom.Renderer';
media.mojom.Renderer_Initialize_ParamsSpec = { $: {} };
media.mojom.Renderer_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.Renderer_Flush_ParamsSpec = { $: {} };
media.mojom.Renderer_Flush_ResponseParamsSpec = { $: {} };
media.mojom.Renderer_StartPlayingFrom_ParamsSpec = { $: {} };
media.mojom.Renderer_SetPlaybackRate_ParamsSpec = { $: {} };
media.mojom.Renderer_SetVolume_ParamsSpec = { $: {} };
media.mojom.Renderer_SetCdm_ParamsSpec = { $: {} };
media.mojom.Renderer_SetCdm_ResponseParamsSpec = { $: {} };
media.mojom.Renderer_SetLatencyHint_ParamsSpec = { $: {} };
media.mojom.RendererClient = {};
media.mojom.RendererClient.$interfaceName = 'media.mojom.RendererClient';
media.mojom.RendererClient_OnTimeUpdate_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnEnded_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnError_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec = { $: {} };
media.mojom.RendererClient_OnWaiting_ParamsSpec = { $: {} };

// Interface: Renderer
mojo.internal.Struct(
    media.mojom.Renderer_Initialize_ParamsSpec, 'media.mojom.Renderer_Initialize_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('streams', 8, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(media.mojom.DemuxerStreamRemote), false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.Renderer_Initialize_ResponseParamsSpec, 'media.mojom.Renderer_Initialize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Renderer_Flush_ParamsSpec, 'media.mojom.Renderer_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Renderer_Flush_ResponseParamsSpec, 'media.mojom.Renderer_Flush_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Renderer_StartPlayingFrom_ParamsSpec, 'media.mojom.Renderer_StartPlayingFrom_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Renderer_SetPlaybackRate_ParamsSpec, 'media.mojom.Renderer_SetPlaybackRate_Params', [
      mojo.internal.StructField('playback_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Renderer_SetVolume_ParamsSpec, 'media.mojom.Renderer_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Renderer_SetCdm_ParamsSpec, 'media.mojom.Renderer_SetCdm_Params', [
      mojo.internal.StructField('cdm_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Renderer_SetCdm_ResponseParamsSpec, 'media.mojom.Renderer_SetCdm_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Renderer_SetLatencyHint_ParamsSpec, 'media.mojom.Renderer_SetLatencyHint_Params', [
      mojo.internal.StructField('latency_hint', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RendererPendingReceiver,
      handle);
    this.$ = new media.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(client, streams) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.Renderer_Initialize_ParamsSpec,
      media.mojom.Renderer_Initialize_ResponseParamsSpec,
      [client, streams],
      false);
  }

  flush() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Renderer_Flush_ParamsSpec,
      media.mojom.Renderer_Flush_ResponseParamsSpec,
      [],
      false);
  }

  startPlayingFrom(time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Renderer_StartPlayingFrom_ParamsSpec,
      null,
      [time],
      false);
  }

  setPlaybackRate(playback_rate) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Renderer_SetPlaybackRate_ParamsSpec,
      null,
      [playback_rate],
      false);
  }

  setVolume(volume) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Renderer_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  setCdm(cdm_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.Renderer_SetCdm_ParamsSpec,
      media.mojom.Renderer_SetCdm_ResponseParamsSpec,
      [cdm_id],
      false);
  }

  setLatencyHint(latency_hint) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.Renderer_SetLatencyHint_ParamsSpec,
      null,
      [latency_hint],
      false);
  }

};

media.mojom.Renderer.getRemote = function() {
  let remote = new media.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Renderer',
    'context');
  return remote.$;
};

media.mojom.RendererReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.Renderer_Initialize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initialize(params.client, params.streams);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Renderer_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = media.mojom.Renderer_Flush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Renderer_Flush_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = media.mojom.Renderer_StartPlayingFrom_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startPlayingFrom(params.time);
          break;
        }
        case 3: {
          const params = media.mojom.Renderer_SetPlaybackRate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPlaybackRate(params.playback_rate);
          break;
        }
        case 4: {
          const params = media.mojom.Renderer_SetVolume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 5: {
          const params = media.mojom.Renderer_SetCdm_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCdm(params.cdm_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Renderer_SetCdm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = media.mojom.Renderer_SetLatencyHint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setLatencyHint(params.latency_hint);
          break;
        }
      }
    }});
  }
};

media.mojom.RendererReceiver = media.mojom.RendererReceiver;

media.mojom.RendererPtr = media.mojom.RendererRemote;
media.mojom.RendererRequest = media.mojom.RendererPendingReceiver;


// Interface: RendererClient
mojo.internal.Struct(
    media.mojom.RendererClient_OnTimeUpdate_ParamsSpec, 'media.mojom.RendererClient_OnTimeUpdate_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_time', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec, 'media.mojom.RendererClient_OnBufferingStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, media.mojom.BufferingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, media.mojom.BufferingStateChangeReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnEnded_ParamsSpec, 'media.mojom.RendererClient_OnEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnError_ParamsSpec, 'media.mojom.RendererClient_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec, 'media.mojom.RendererClient_OnAudioConfigChange_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec, 'media.mojom.RendererClient_OnVideoConfigChange_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec, 'media.mojom.RendererClient_OnVideoNaturalSizeChange_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec, 'media.mojom.RendererClient_OnVideoOpacityChange_Params', [
      mojo.internal.StructField('opaque', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec, 'media.mojom.RendererClient_OnStatisticsUpdate_Params', [
      mojo.internal.StructField('stats', 0, 0, media.mojom.PipelineStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RendererClient_OnWaiting_ParamsSpec, 'media.mojom.RendererClient_OnWaiting_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.WaitingReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.RendererClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RendererClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RendererClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RendererClientPendingReceiver,
      handle);
    this.$ = new media.mojom.RendererClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RendererClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTimeUpdate(time, max_time, capture_time) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.RendererClient_OnTimeUpdate_ParamsSpec,
      null,
      [time, max_time, capture_time],
      false);
  }

  onBufferingStateChange(state, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec,
      null,
      [state, reason],
      false);
  }

  onEnded() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.RendererClient_OnEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onError(status) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.RendererClient_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  onAudioConfigChange(config) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec,
      null,
      [config],
      false);
  }

  onVideoConfigChange(config) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec,
      null,
      [config],
      false);
  }

  onVideoNaturalSizeChange(size) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec,
      null,
      [size],
      false);
  }

  onVideoOpacityChange(opaque) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec,
      null,
      [opaque],
      false);
  }

  onStatisticsUpdate(stats) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec,
      null,
      [stats],
      false);
  }

  onWaiting(reason) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.RendererClient_OnWaiting_ParamsSpec,
      null,
      [reason],
      false);
  }

};

media.mojom.RendererClient.getRemote = function() {
  let remote = new media.mojom.RendererClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RendererClient',
    'context');
  return remote.$;
};

media.mojom.RendererClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.RendererClient_OnTimeUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTimeUpdate(params.time, params.max_time, params.capture_time);
          break;
        }
        case 1: {
          const params = media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBufferingStateChange(params.state, params.reason);
          break;
        }
        case 2: {
          const params = media.mojom.RendererClient_OnEnded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEnded();
          break;
        }
        case 3: {
          const params = media.mojom.RendererClient_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.status);
          break;
        }
        case 4: {
          const params = media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAudioConfigChange(params.config);
          break;
        }
        case 5: {
          const params = media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoConfigChange(params.config);
          break;
        }
        case 6: {
          const params = media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoNaturalSizeChange(params.size);
          break;
        }
        case 7: {
          const params = media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoOpacityChange(params.opaque);
          break;
        }
        case 8: {
          const params = media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStatisticsUpdate(params.stats);
          break;
        }
        case 9: {
          const params = media.mojom.RendererClient_OnWaiting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWaiting(params.reason);
          break;
        }
      }
    }});
  }
};

media.mojom.RendererClientReceiver = media.mojom.RendererClientReceiver;

media.mojom.RendererClientPtr = media.mojom.RendererClientRemote;
media.mojom.RendererClientRequest = media.mojom.RendererClientPendingReceiver;

