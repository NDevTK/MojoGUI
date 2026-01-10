// Auto-generated MojoJS binding
// Source: chromium_src/components/system_media_controls/mac/remote_cocoa/system_media_controls.mojom
// Module: system_media_controls.mojom

'use strict';

// Module namespace
var system_media_controls = system_media_controls || {};
system_media_controls.mojom = system_media_controls.mojom || {};
var mojo_base = mojo_base || {};
var media_session = media_session || {};

system_media_controls.mojom.PlaybackStatusSpec = { $: mojo.internal.Enum() };
system_media_controls.mojom.SystemMediaControls = {};
system_media_controls.mojom.SystemMediaControls.$interfaceName = 'system_media_controls.mojom.SystemMediaControls';
system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver = {};
system_media_controls.mojom.SystemMediaControlsObserver.$interfaceName = 'system_media_controls.mojom.SystemMediaControlsObserver';
system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec = { $: {} };
system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec = { $: {} };

// Enum: PlaybackStatus
system_media_controls.mojom.PlaybackStatus = {
  kPlaying: 0,
  kPaused: 1,
  kStopped: 2,
};

// Interface: SystemMediaControls
mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_Params', [
      mojo.internal.StructField('status', 0, 0, system_media_controls.mojom.PlaybackStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetArtist_Params', [
      mojo.internal.StructField('artist', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetAlbum_Params', [
      mojo.internal.StructField('album', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetThumbnail_Params', [
      mojo.internal.StructField('thumbnail', 0, 0, media_session.mojom.MediaImageBitmapSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_SetPosition_Params', [
      mojo.internal.StructField('position', 0, 0, media_session.mojom.MediaPositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec, 'system_media_controls.mojom.SystemMediaControls_ClearMetadata_Params', [
    ],
    [[0, 8]]);

system_media_controls.mojom.SystemMediaControlsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

system_media_controls.mojom.SystemMediaControlsRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControls';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      system_media_controls.mojom.SystemMediaControlsPendingReceiver,
      handle);
    this.$ = new system_media_controls.mojom.SystemMediaControlsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

system_media_controls.mojom.SystemMediaControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setIsNextEnabled(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsPreviousEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsPlayPauseEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsStopEnabled(enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsSeekToEnabled(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setPlaybackStatus(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec,
      null,
      [status],
      false);
  }

  setTitle(title) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setArtist(artist) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec,
      null,
      [artist],
      false);
  }

  setAlbum(album) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec,
      null,
      [album],
      false);
  }

  setThumbnail(thumbnail) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec,
      null,
      [thumbnail],
      false);
  }

  setPosition(position) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec,
      null,
      [position],
      false);
  }

  clearMetadata() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec,
      null,
      [],
      false);
  }

};

system_media_controls.mojom.SystemMediaControls.getRemote = function() {
  let remote = new system_media_controls.mojom.SystemMediaControlsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControls',
    'context');
  return remote.$;
};

system_media_controls.mojom.SystemMediaControlsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsNextEnabled(params.enabled);
          break;
        }
        case 1: {
          const params = system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsPreviousEnabled(params.enabled);
          break;
        }
        case 2: {
          const params = system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsPlayPauseEnabled(params.enabled);
          break;
        }
        case 3: {
          const params = system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsStopEnabled(params.enabled);
          break;
        }
        case 4: {
          const params = system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsSeekToEnabled(params.enabled);
          break;
        }
        case 5: {
          const params = system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPlaybackStatus(params.status);
          break;
        }
        case 6: {
          const params = system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTitle(params.title);
          break;
        }
        case 7: {
          const params = system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setArtist(params.artist);
          break;
        }
        case 8: {
          const params = system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAlbum(params.album);
          break;
        }
        case 9: {
          const params = system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setThumbnail(params.thumbnail);
          break;
        }
        case 10: {
          const params = system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPosition(params.position);
          break;
        }
        case 11: {
          const params = system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearMetadata();
          break;
        }
      }
    }});
  }
};

system_media_controls.mojom.SystemMediaControlsReceiver = system_media_controls.mojom.SystemMediaControlsReceiver;

system_media_controls.mojom.SystemMediaControlsPtr = system_media_controls.mojom.SystemMediaControlsRemote;
system_media_controls.mojom.SystemMediaControlsRequest = system_media_controls.mojom.SystemMediaControlsPendingReceiver;


// Interface: SystemMediaControlsObserver
mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnNext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec, 'system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_Params', [
    ],
    [[0, 8]]);

system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

system_media_controls.mojom.SystemMediaControlsObserverRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControlsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver,
      handle);
    this.$ = new system_media_controls.mojom.SystemMediaControlsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

system_media_controls.mojom.SystemMediaControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec,
      null,
      [],
      false);
  }

  onPrevious() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec,
      null,
      [],
      false);
  }

  onPause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec,
      null,
      [],
      false);
  }

  onPlayPause() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec,
      null,
      [],
      false);
  }

  onStop() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec,
      null,
      [],
      false);
  }

  onPlay() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec,
      null,
      [],
      false);
  }

  onSeekTo(seek_time) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  onBridgeCreatedForTesting() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec,
      null,
      [],
      false);
  }

  onMetadataClearedForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec,
      null,
      [],
      false);
  }

};

system_media_controls.mojom.SystemMediaControlsObserver.getRemote = function() {
  let remote = new system_media_controls.mojom.SystemMediaControlsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControlsObserver',
    'context');
  return remote.$;
};

system_media_controls.mojom.SystemMediaControlsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNext();
          break;
        }
        case 1: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPrevious();
          break;
        }
        case 2: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPause();
          break;
        }
        case 3: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPlayPause();
          break;
        }
        case 4: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStop();
          break;
        }
        case 5: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPlay();
          break;
        }
        case 6: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSeekTo(params.seek_time);
          break;
        }
        case 7: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBridgeCreatedForTesting();
          break;
        }
        case 8: {
          const params = system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMetadataClearedForTesting();
          break;
        }
      }
    }});
  }
};

system_media_controls.mojom.SystemMediaControlsObserverReceiver = system_media_controls.mojom.SystemMediaControlsObserverReceiver;

system_media_controls.mojom.SystemMediaControlsObserverPtr = system_media_controls.mojom.SystemMediaControlsObserverRemote;
system_media_controls.mojom.SystemMediaControlsObserverRequest = system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver;

