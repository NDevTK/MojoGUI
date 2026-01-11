// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/playback_events_recorder.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onPlaying() {
    return this.$.onPlaying();
  }
  onPaused() {
    return this.$.onPaused();
  }
  onSeeking() {
    return this.$.onSeeking();
  }
  onEnded() {
    return this.$.onEnded();
  }
  onError(status) {
    return this.$.onError(status);
  }
  onBuffering() {
    return this.$.onBuffering();
  }
  onBufferingComplete() {
    return this.$.onBufferingComplete();
  }
  onNaturalSizeChanged(size) {
    return this.$.onNaturalSizeChanged(size);
  }
  onPipelineStatistics(stats) {
    return this.$.onPipelineStatistics(stats);
  }
};

media.mojom.PlaybackEventsRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PlaybackEventsRecorder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPlaying() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  onPaused() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec,
      null,
      [],
      false);
  }

  onSeeking() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec,
      null,
      [],
      false);
  }

  onEnded() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onError(status) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  onBuffering() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec,
      null,
      [],
      false);
  }

  onBufferingComplete() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec,
      null,
      [],
      false);
  }

  onNaturalSizeChanged(size) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec,
      null,
      [size],
      false);
  }

  onPipelineStatistics(stats) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PlaybackEventsRecorder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec.$.structSpec);
          const result = this.impl.onPlaying();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec.$.structSpec);
          const result = this.impl.onPaused();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec.$.structSpec);
          const result = this.impl.onSeeking();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec.$.structSpec);
          const result = this.impl.onEnded();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec.$.structSpec);
          const result = this.impl.onBuffering();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferingComplete();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNaturalSizeChanged(params.size);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec.$.structSpec);
          const result = this.impl.onPipelineStatistics(params.stats);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.PlaybackEventsRecorderReceiver = media.mojom.PlaybackEventsRecorderReceiver;

media.mojom.PlaybackEventsRecorderPtr = media.mojom.PlaybackEventsRecorderRemote;
media.mojom.PlaybackEventsRecorderRequest = media.mojom.PlaybackEventsRecorderPendingReceiver;

