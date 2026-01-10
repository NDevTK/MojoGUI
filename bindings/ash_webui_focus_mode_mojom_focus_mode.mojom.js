// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/focus_mode/mojom/focus_mode.mojom
// Module: ash.focus_mode.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.focus_mode = ash.focus_mode || {};
ash.focus_mode.mojom = ash.focus_mode.mojom || {};
var url = url || {};
var mojo_base = mojo_base || {};

ash.focus_mode.mojom.PlaybackStateSpec = { $: mojo.internal.Enum() };
ash.focus_mode.mojom.TrackDefinitionSpec = { $: {} };
ash.focus_mode.mojom.PlaybackDataSpec = { $: {} };
ash.focus_mode.mojom.MediaClient = {};
ash.focus_mode.mojom.MediaClient.$interfaceName = 'ash.focus_mode.mojom.MediaClient';
ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider = {};
ash.focus_mode.mojom.TrackProvider.$interfaceName = 'ash.focus_mode.mojom.TrackProvider';
ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec = { $: {} };

// Enum: PlaybackState
ash.focus_mode.mojom.PlaybackState = {
  kPlaying: 0,
  kPaused: 1,
  kSwitchedToNext: 2,
  kEnded: 3,
  kNone: 4,
};

// Struct: TrackDefinition
mojo.internal.Struct(
    ash.focus_mode.mojom.TrackDefinitionSpec, 'ash.focus_mode.mojom.TrackDefinition', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('artist', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_playback_reporting', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PlaybackData
mojo.internal.Struct(
    ash.focus_mode.mojom.PlaybackDataSpec, 'ash.focus_mode.mojom.PlaybackData', [
      mojo.internal.StructField('state', 0, 0, ash.focus_mode.mojom.PlaybackStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_current_time', 24, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_start_time', 32, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('playback_start_offset', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_time_current', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_start', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_end', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('initial_playback', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: MediaClient
mojo.internal.Struct(
    ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec, 'ash.focus_mode.mojom.MediaClient_StartPlay_Params', [
      mojo.internal.StructField('track', 0, 0, ash.focus_mode.mojom.TrackDefinitionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec,
      null,
      [track],
      false);
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

ash.focus_mode.mojom.MediaClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startPlay(params.track);
          break;
        }
      }
    });
  }
};

ash.focus_mode.mojom.MediaClientReceiver = ash.focus_mode.mojom.MediaClientReceiver;

ash.focus_mode.mojom.MediaClientPtr = ash.focus_mode.mojom.MediaClientRemote;
ash.focus_mode.mojom.MediaClientRequest = ash.focus_mode.mojom.MediaClientPendingReceiver;


// Interface: TrackProvider
mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_GetTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec, 'ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParams', [
      mojo.internal.StructField('track', 0, 0, ash.focus_mode.mojom.TrackDefinitionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_SetMediaClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(ash.focus_mode.mojom.MediaClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_ReportPlayback_Params', [
      mojo.internal.StructField('data', 0, 0, ash.focus_mode.mojom.PlaybackDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_ReportPlayerError_Params', [
    ],
    [[0, 8]]);

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
      ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec,
      ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec,
      [],
      false);
  }

  setMediaClient(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec,
      null,
      [client],
      false);
  }

  reportPlayback(data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec,
      null,
      [data],
      false);
  }

  reportPlayerError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec,
      null,
      [],
      false);
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

ash.focus_mode.mojom.TrackProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getTrack();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMediaClient(params.client);
          break;
        }
        case 2: {
          const params = ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportPlayback(params.data);
          break;
        }
        case 3: {
          const params = ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportPlayerError();
          break;
        }
      }
    });
  }
};

ash.focus_mode.mojom.TrackProviderReceiver = ash.focus_mode.mojom.TrackProviderReceiver;

ash.focus_mode.mojom.TrackProviderPtr = ash.focus_mode.mojom.TrackProviderRemote;
ash.focus_mode.mojom.TrackProviderRequest = ash.focus_mode.mojom.TrackProviderPendingReceiver;

