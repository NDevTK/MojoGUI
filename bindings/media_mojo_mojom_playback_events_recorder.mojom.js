// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/playback_events_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
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
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec, 'media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_Params', [
      mojo.internal.StructField('stats', 0, 0, media.mojom.PipelineStatisticsSpec, null, false, 0, undefined),
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

media.mojom.PlaybackEventsRecorderPtr = media.mojom.PlaybackEventsRecorderRemote;
media.mojom.PlaybackEventsRecorderRequest = media.mojom.PlaybackEventsRecorderPendingReceiver;

