// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/playback_events_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: PlaybackEventsRecorder
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
      media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec.$,
      null,
      []);
  }

  onPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec.$,
      null,
      []);
  }

  onSeeking() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec.$,
      null,
      []);
  }

  onEnded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec.$,
      null,
      []);
  }

  onError(status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec.$,
      null,
      [status]);
  }

  onBuffering() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec.$,
      null,
      []);
  }

  onBufferingComplete() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec.$,
      null,
      []);
  }

  onNaturalSizeChanged(size) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec.$,
      null,
      [size]);
  }

  onPipelineStatistics(stats) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec.$,
      null,
      [stats]);
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

// ParamsSpec for OnPlaying
media.mojom.PlaybackEventsRecorder_OnPlaying_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnPlaying_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPaused
media.mojom.PlaybackEventsRecorder_OnPaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnPaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSeeking
media.mojom.PlaybackEventsRecorder_OnSeeking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnSeeking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnEnded
media.mojom.PlaybackEventsRecorder_OnEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
media.mojom.PlaybackEventsRecorder_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBuffering
media.mojom.PlaybackEventsRecorder_OnBuffering_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnBuffering_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBufferingComplete
media.mojom.PlaybackEventsRecorder_OnBufferingComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnBufferingComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNaturalSizeChanged
media.mojom.PlaybackEventsRecorder_OnNaturalSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnNaturalSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPipelineStatistics
media.mojom.PlaybackEventsRecorder_OnPipelineStatistics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaybackEventsRecorder.OnPipelineStatistics_Params',
      packedSize: 16,
      fields: [
        { name: 'stats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.PlaybackEventsRecorderPtr = media.mojom.PlaybackEventsRecorderRemote;
media.mojom.PlaybackEventsRecorderRequest = media.mojom.PlaybackEventsRecorderPendingReceiver;

