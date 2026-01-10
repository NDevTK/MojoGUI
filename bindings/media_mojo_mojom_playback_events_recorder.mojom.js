// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/playback_events_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gfx = gfx || {};

media.mojom.PlaybackEventsRecorder = {};
media.mojom.PlaybackEventsRecorder.$interfaceName = 'media.mojom.PlaybackEventsRecorder';
media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec = { $: {} };
media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec = { $: {} };

// Interface: PlaybackEventsRecorder
mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnPaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnSeeking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnBuffering_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnBufferingComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_Params', [
      mojo.internal.StructField('stats', 0, 0, media.mojom.PipelineStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.PlaybackEventsRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.PlaybackEventsRecorderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.PlaybackEventsRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.PlaybackEventsRecorderPendingReceiver,
      handle);
    this.$ = new media.mojom.PlaybackEventsRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.PlaybackEventsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPlaying() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  onPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec,
      null,
      [],
      false);
  }

  onSeeking() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec,
      null,
      [],
      false);
  }

  onEnded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onError(status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  onBuffering() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec,
      null,
      [],
      false);
  }

  onBufferingComplete() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec,
      null,
      [],
      false);
  }

  onNaturalSizeChanged(size) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec,
      null,
      [size],
      false);
  }

  onPipelineStatistics(stats) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec,
      null,
      [stats],
      false);
  }

};

media.mojom.PlaybackEventsRecorder.getRemote = function() {
  let remote = new media.mojom.PlaybackEventsRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.PlaybackEventsRecorder',
    'context');
  return remote.$;
};

media.mojom.PlaybackEventsRecorderReceiver = class {
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
        
        // Try Method 0: OnPlaying
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPlaying (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPaused (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSeeking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSeeking (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnded (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnBuffering
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBuffering (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnBufferingComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferingComplete (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnNaturalSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNaturalSizeChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnPipelineStatistics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPipelineStatistics (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPlaying');
          const result = this.impl.onPlaying();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPaused');
          const result = this.impl.onPaused();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSeeking');
          const result = this.impl.onSeeking();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onEnded');
          const result = this.impl.onEnded();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBuffering');
          const result = this.impl.onBuffering();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBufferingComplete');
          const result = this.impl.onBufferingComplete();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNaturalSizeChanged');
          const result = this.impl.onNaturalSizeChanged(params.size);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPipelineStatistics');
          const result = this.impl.onPipelineStatistics(params.stats);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.PlaybackEventsRecorderReceiver = media.mojom.PlaybackEventsRecorderReceiver;

media.mojom.PlaybackEventsRecorderPtr = media.mojom.PlaybackEventsRecorderRemote;
media.mojom.PlaybackEventsRecorderRequest = media.mojom.PlaybackEventsRecorderPendingReceiver;

