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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.Renderer_Initialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.Renderer_Flush_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartPlayingFrom
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.Renderer_StartPlayingFrom_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPlayingFrom (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetPlaybackRate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.Renderer_SetPlaybackRate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPlaybackRate (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.Renderer_SetVolume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetCdm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.Renderer_SetCdm_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCdm (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetLatencyHint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.Renderer_SetLatencyHint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLatencyHint (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.Renderer_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.Renderer_Flush_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flush');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.Renderer_StartPlayingFrom_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startPlayingFrom');
          const result = this.impl.startPlayingFrom(params.time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.Renderer_SetPlaybackRate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPlaybackRate');
          const result = this.impl.setPlaybackRate(params.playback_rate);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.Renderer_SetVolume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.Renderer_SetCdm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCdm');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.Renderer_SetLatencyHint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setLatencyHint');
          const result = this.impl.setLatencyHint(params.latency_hint);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnTimeUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnTimeUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTimeUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBufferingStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferingStateChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnEnded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnded (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnAudioConfigChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioConfigChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnVideoConfigChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoConfigChange (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnVideoNaturalSizeChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoNaturalSizeChange (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnVideoOpacityChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoOpacityChange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnStatisticsUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStatisticsUpdate (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnWaiting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.RendererClient_OnWaiting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWaiting (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnTimeUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTimeUpdate');
          const result = this.impl.onTimeUpdate(params.time, params.max_time, params.capture_time);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnBufferingStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBufferingStateChange');
          const result = this.impl.onBufferingStateChange(params.state, params.reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnEnded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onEnded');
          const result = this.impl.onEnded();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.status);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnAudioConfigChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAudioConfigChange');
          const result = this.impl.onAudioConfigChange(params.config);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnVideoConfigChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVideoConfigChange');
          const result = this.impl.onVideoConfigChange(params.config);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnVideoNaturalSizeChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVideoNaturalSizeChange');
          const result = this.impl.onVideoNaturalSizeChange(params.size);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnVideoOpacityChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVideoOpacityChange');
          const result = this.impl.onVideoOpacityChange(params.opaque);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnStatisticsUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStatisticsUpdate');
          const result = this.impl.onStatisticsUpdate(params.stats);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.RendererClient_OnWaiting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWaiting');
          const result = this.impl.onWaiting(params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.RendererClientReceiver = media.mojom.RendererClientReceiver;

media.mojom.RendererClientPtr = media.mojom.RendererClientRemote;
media.mojom.RendererClientRequest = media.mojom.RendererClientPendingReceiver;

