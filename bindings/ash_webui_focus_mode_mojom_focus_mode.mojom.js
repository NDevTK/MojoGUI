// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/focus_mode/mojom/focus_mode.mojom
// Module: ash.focus_mode.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.focus_mode = ash.focus_mode || {};
ash.focus_mode.mojom = ash.focus_mode.mojom || {};


// Enum: PlaybackState
ash.focus_mode.mojom.PlaybackState = {
  kPlaying: 0,
  kPaused: 1,
  kSwitchedToNext: 2,
  kEnded: 3,
  kNone: 4,
};

// Interface: MediaClient
ash.focus_mode.mojom.MediaClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.focus_mode.mojom.MediaClientRemote = class {
  static get $interfaceName() {
    return 'ash.focus_mode.mojom.MediaClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.focus_mode.mojom.MediaClientPendingReceiver,
      handle);
    this.$ = new ash.focus_mode.mojom.MediaClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.focus_mode.mojom.MediaClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startPlay(track) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec.$,
      null,
      [track]);
  }

};

ash.focus_mode.mojom.MediaClient.getRemote = function() {
  let remote = new ash.focus_mode.mojom.MediaClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.focus_mode.mojom.MediaClient',
    'context');
  return remote.$;
};

// ParamsSpec for StartPlay
ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.focus_mode.mojom.MediaClient.StartPlay_Params',
      packedSize: 16,
      fields: [
        { name: 'track', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.focus_mode.mojom.MediaClientPtr = ash.focus_mode.mojom.MediaClientRemote;
ash.focus_mode.mojom.MediaClientRequest = ash.focus_mode.mojom.MediaClientPendingReceiver;


// Interface: TrackProvider
ash.focus_mode.mojom.TrackProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.focus_mode.mojom.TrackProviderRemote = class {
  static get $interfaceName() {
    return 'ash.focus_mode.mojom.TrackProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.focus_mode.mojom.TrackProviderPendingReceiver,
      handle);
    this.$ = new ash.focus_mode.mojom.TrackProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.focus_mode.mojom.TrackProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTrack() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec.$,
      ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec.$,
      []);
  }

  setMediaClient(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec.$,
      null,
      [client]);
  }

  reportPlayback(data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec.$,
      null,
      [data]);
  }

  reportPlayerError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec.$,
      null,
      []);
  }

};

ash.focus_mode.mojom.TrackProvider.getRemote = function() {
  let remote = new ash.focus_mode.mojom.TrackProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.focus_mode.mojom.TrackProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetTrack
ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.focus_mode.mojom.TrackProvider.GetTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.focus_mode.mojom.TrackProvider.GetTrack_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'track', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMediaClient
ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.focus_mode.mojom.TrackProvider.SetMediaClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportPlayback
ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.focus_mode.mojom.TrackProvider.ReportPlayback_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportPlayerError
ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.focus_mode.mojom.TrackProvider.ReportPlayerError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.focus_mode.mojom.TrackProviderPtr = ash.focus_mode.mojom.TrackProviderRemote;
ash.focus_mode.mojom.TrackProviderRequest = ash.focus_mode.mojom.TrackProviderPendingReceiver;

