// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: Renderer
media.mojom.Renderer = {};

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
      [client, streams]);
  }

  flush() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Renderer_Flush_ParamsSpec,
      null,
      []);
  }

  startPlayingFrom(time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Renderer_StartPlayingFrom_ParamsSpec,
      null,
      [time]);
  }

  setPlaybackRate(playback_rate) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Renderer_SetPlaybackRate_ParamsSpec,
      null,
      [playback_rate]);
  }

  setVolume(volume) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Renderer_SetVolume_ParamsSpec,
      null,
      [volume]);
  }

  setCdm(cdm_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.Renderer_SetCdm_ParamsSpec,
      media.mojom.Renderer_SetCdm_ResponseParamsSpec,
      [cdm_id]);
  }

  setLatencyHint(latency_hint) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.Renderer_SetLatencyHint_ParamsSpec,
      null,
      [latency_hint]);
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

// ParamsSpec for Initialize
media.mojom.Renderer_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Renderer.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'streams', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.InterfaceProxy, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.Renderer_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
media.mojom.Renderer_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Renderer.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartPlayingFrom
media.mojom.Renderer_StartPlayingFrom_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Renderer.StartPlayingFrom_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPlaybackRate
media.mojom.Renderer_SetPlaybackRate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Renderer.SetPlaybackRate_Params',
      packedSize: 16,
      fields: [
        { name: 'playback_rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVolume
media.mojom.Renderer_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Renderer.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCdm
media.mojom.Renderer_SetCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Renderer.SetCdm_Params',
      packedSize: 16,
      fields: [
        { name: 'cdm_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.Renderer_SetCdm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLatencyHint
media.mojom.Renderer_SetLatencyHint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Renderer.SetLatencyHint_Params',
      packedSize: 16,
      fields: [
        { name: 'latency_hint', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.RendererPtr = media.mojom.RendererRemote;
media.mojom.RendererRequest = media.mojom.RendererPendingReceiver;


// Interface: RendererClient
media.mojom.RendererClient = {};

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
      [time, max_time, capture_time]);
  }

  onBufferingStateChange(state, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec,
      null,
      [state, reason]);
  }

  onEnded() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.RendererClient_OnEnded_ParamsSpec,
      null,
      []);
  }

  onError(status) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.RendererClient_OnError_ParamsSpec,
      null,
      [status]);
  }

  onAudioConfigChange(config) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec,
      null,
      [config]);
  }

  onVideoConfigChange(config) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec,
      null,
      [config]);
  }

  onVideoNaturalSizeChange(size) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec,
      null,
      [size]);
  }

  onVideoOpacityChange(opaque) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec,
      null,
      [opaque]);
  }

  onStatisticsUpdate(stats) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec,
      null,
      [stats]);
  }

  onWaiting(reason) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.RendererClient_OnWaiting_ParamsSpec,
      null,
      [reason]);
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

// ParamsSpec for OnTimeUpdate
media.mojom.RendererClient_OnTimeUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnTimeUpdate_Params',
      packedSize: 32,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'max_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'capture_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnBufferingStateChange
media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnBufferingStateChange_Params',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: media.mojom.BufferingStateSpec, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: media.mojom.BufferingStateChangeReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnEnded
media.mojom.RendererClient_OnEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnError
media.mojom.RendererClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PipelineStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAudioConfigChange
media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnAudioConfigChange_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDecoderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnVideoConfigChange
media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnVideoConfigChange_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoDecoderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnVideoNaturalSizeChange
media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnVideoNaturalSizeChange_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnVideoOpacityChange
media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnVideoOpacityChange_Params',
      packedSize: 16,
      fields: [
        { name: 'opaque', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnStatisticsUpdate
media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnStatisticsUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'stats', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PipelineStatisticsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWaiting
media.mojom.RendererClient_OnWaiting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RendererClient.OnWaiting_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.WaitingReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.RendererClientPtr = media.mojom.RendererClientRemote;
media.mojom.RendererClientRequest = media.mojom.RendererClientPendingReceiver;

