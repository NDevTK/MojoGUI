// Auto-generated MojoJS binding
// Source: chromium_src/components/system_media_controls/mac/remote_cocoa/system_media_controls.mojom
// Module: system_media_controls.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  setIsNextEnabled(enabled) {
    return this.$.setIsNextEnabled(enabled);
  }
  setIsPreviousEnabled(enabled) {
    return this.$.setIsPreviousEnabled(enabled);
  }
  setIsPlayPauseEnabled(enabled) {
    return this.$.setIsPlayPauseEnabled(enabled);
  }
  setIsStopEnabled(enabled) {
    return this.$.setIsStopEnabled(enabled);
  }
  setIsSeekToEnabled(enabled) {
    return this.$.setIsSeekToEnabled(enabled);
  }
  setPlaybackStatus(status) {
    return this.$.setPlaybackStatus(status);
  }
  setTitle(title) {
    return this.$.setTitle(title);
  }
  setArtist(artist) {
    return this.$.setArtist(artist);
  }
  setAlbum(album) {
    return this.$.setAlbum(album);
  }
  setThumbnail(thumbnail) {
    return this.$.setThumbnail(thumbnail);
  }
  setPosition(position) {
    return this.$.setPosition(position);
  }
  clearMetadata() {
    return this.$.clearMetadata();
  }
};

system_media_controls.mojom.SystemMediaControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemMediaControls', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  setIsNextEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsPreviousEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsPlayPauseEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsStopEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setIsSeekToEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setPlaybackStatus(status) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec,
      null,
      [status],
      false);
  }

  setTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setArtist(artist) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec,
      null,
      [artist],
      false);
  }

  setAlbum(album) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec,
      null,
      [album],
      false);
  }

  setThumbnail(thumbnail) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec,
      null,
      [thumbnail],
      false);
  }

  setPosition(position) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec,
      null,
      [position],
      false);
  }

  clearMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemMediaControls', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setIsNextEnabled(params.enabled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setIsPreviousEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setIsPlayPauseEnabled(params.enabled);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setIsStopEnabled(params.enabled);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setIsSeekToEnabled(params.enabled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec.$.structSpec);
          const result = this.impl.setPlaybackStatus(params.status);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec.$.structSpec);
          const result = this.impl.setTitle(params.title);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec.$.structSpec);
          const result = this.impl.setArtist(params.artist);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec.$.structSpec);
          const result = this.impl.setAlbum(params.album);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec.$.structSpec);
          const result = this.impl.setThumbnail(params.thumbnail);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec.$.structSpec);
          const result = this.impl.setPosition(params.position);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.clearMetadata();
          break;
        }
      }
      } catch (err) {}
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
  onNext() {
    return this.$.onNext();
  }
  onPrevious() {
    return this.$.onPrevious();
  }
  onPause() {
    return this.$.onPause();
  }
  onPlayPause() {
    return this.$.onPlayPause();
  }
  onStop() {
    return this.$.onStop();
  }
  onPlay() {
    return this.$.onPlay();
  }
  onSeekTo(seek_time) {
    return this.$.onSeekTo(seek_time);
  }
  onBridgeCreatedForTesting() {
    return this.$.onBridgeCreatedForTesting();
  }
  onMetadataClearedForTesting() {
    return this.$.onMetadataClearedForTesting();
  }
};

system_media_controls.mojom.SystemMediaControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemMediaControlsObserver', [
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

  onNext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec,
      null,
      [],
      false);
  }

  onPrevious() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec,
      null,
      [],
      false);
  }

  onPause() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec,
      null,
      [],
      false);
  }

  onPlayPause() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec,
      null,
      [],
      false);
  }

  onStop() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec,
      null,
      [],
      false);
  }

  onPlay() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec,
      null,
      [],
      false);
  }

  onSeekTo(seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  onBridgeCreatedForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec,
      null,
      [],
      false);
  }

  onMetadataClearedForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemMediaControlsObserver', [
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
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec.$.structSpec);
          const result = this.impl.onNext();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec.$.structSpec);
          const result = this.impl.onPrevious();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec.$.structSpec);
          const result = this.impl.onPause();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec.$.structSpec);
          const result = this.impl.onPlayPause();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec.$.structSpec);
          const result = this.impl.onStop();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec.$.structSpec);
          const result = this.impl.onPlay();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec.$.structSpec);
          const result = this.impl.onSeekTo(params.seek_time);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.onBridgeCreatedForTesting();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.onMetadataClearedForTesting();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

system_media_controls.mojom.SystemMediaControlsObserverReceiver = system_media_controls.mojom.SystemMediaControlsObserverReceiver;

system_media_controls.mojom.SystemMediaControlsObserverPtr = system_media_controls.mojom.SystemMediaControlsObserverRemote;
system_media_controls.mojom.SystemMediaControlsObserverRequest = system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver;

