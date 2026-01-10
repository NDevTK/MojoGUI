// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


// Enum: SinkIconType
media_router.mojom.mojom.SinkIconType = {
  CAST: 0,
  CAST_AUDIO_GROUP: 1,
  CAST_AUDIO: 2,
  WIRED_DISPLAY: 3,
  GENERIC: 4,
};
media_router.mojom.mojom.SinkIconTypeSpec = { $: mojo.internal.Enum() };

// Enum: RouteControllerType
media_router.mojom.mojom.RouteControllerType = {
  kNone: 0,
  kGeneric: 1,
  kMirroring: 2,
};
media_router.mojom.mojom.RouteControllerTypeSpec = { $: mojo.internal.Enum() };

// Enum: Severity
media_router.mojom.mojom.Severity = {
  WARNING: 0,
  NOTIFICATION: 1,
};
media_router.mojom.mojom.SeveritySpec = { $: mojo.internal.Enum() };

// Enum: Type
media_router.mojom.mojom.Type = {
  TEXT: 0,
  BINARY: 1,
};
media_router.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Union: MediaSinkExtraData
media_router.mojom.mojom.MediaSinkExtraDataSpec = { $: mojo.internal.Union(
    'media_router.mojom.MediaSinkExtraData', {
      'dial_media_sink': {
        'ordinal': 0,
        'type': media_router.mojom.DialMediaSinkSpec,
      }},
      'cast_media_sink': {
        'ordinal': 1,
        'type': media_router.mojom.CastMediaSinkSpec,
      }},
    })
};

// Union: ProviderState
media_router.mojom.mojom.ProviderStateSpec = { $: mojo.internal.Union(
    'media_router.mojom.ProviderState', {
      'cast_provider_state': {
        'ordinal': 0,
        'type': media_router.mojom.CastProviderStateSpec,
      }},
    })
};

// Struct: MediaSink
media_router.mojom.mojom.MediaSinkSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaSink',
      packedSize: 48,
      fields: [
        { name: 'sink_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_type', packedOffset: 32, packedBitOffset: 0, type: media_router.mojom.SinkIconTypeSpec, nullable: false, minVersion: 0 },
        { name: 'provider_id', packedOffset: 36, packedBitOffset: 0, type: media_router.mojom.MediaRouteProviderIdSpec, nullable: false, minVersion: 0 },
        { name: 'extra_data', packedOffset: 0, packedBitOffset: 0, type: media_router.mojom.MediaSinkExtraDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DialMediaSink
media_router.mojom.mojom.DialMediaSinkSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.DialMediaSink',
      packedSize: 32,
      fields: [
        { name: 'ip_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
        { name: 'model_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CastMediaSink
media_router.mojom.mojom.CastMediaSinkSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.CastMediaSink',
      packedSize: 40,
      fields: [
        { name: 'ip_endpoint', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'model_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'capabilities', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'cast_channel_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: MediaRoute
media_router.mojom.mojom.MediaRouteSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRoute',
      packedSize: 64,
      fields: [
        { name: 'media_route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'presentation_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media_source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'media_sink_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media_sink_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_local', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'controller_type', packedOffset: 48, packedBitOffset: 0, type: media_router.mojom.RouteControllerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_local_presentation', packedOffset: 52, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_connecting', packedOffset: 52, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: Issue
media_router.mojom.mojom.IssueSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Issue',
      packedSize: 16,
      fields: [
        { name: 'WARNING', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RouteMessage
media_router.mojom.mojom.RouteMessageSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.RouteMessage',
      packedSize: 16,
      fields: [
        { name: 'TEXT', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RoutePresentationConnection
media_router.mojom.mojom.RoutePresentationConnectionSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.RoutePresentationConnection',
      packedSize: 24,
      fields: [
        { name: 'connection_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.PresentationConnectionRemote), nullable: false, minVersion: 0 },
        { name: 'connection_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.PresentationConnectionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CastSessionState
media_router.mojom.mojom.CastSessionStateSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.CastSessionState',
      packedSize: 40,
      fields: [
        { name: 'sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'route_description', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CastProviderState
media_router.mojom.mojom.CastProviderStateSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.CastProviderState',
      packedSize: 16,
      fields: [
        { name: 'session_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_router.mojom.CastSessionStateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: MediaRouteProvider
media_router.mojom.mojom.MediaRouteProvider = {};

media_router.mojom.mojom.MediaRouteProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.mojom.MediaRouteProviderRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaRouteProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.mojom.MediaRouteProviderPendingReceiver,
      handle);
    this.$ = new media_router.mojom.mojom.MediaRouteProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.mojom.MediaRouteProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createRoute(media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_CreateRoute_ParamsSpec,
      media_router.mojom.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec,
      [media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout]);
  }

  joinRoute(media_source, presentation_id, origin, frame_tree_node_id, timeout) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_JoinRoute_ParamsSpec,
      media_router.mojom.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec,
      [media_source, presentation_id, origin, frame_tree_node_id, timeout]);
  }

  terminateRoute(route_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec,
      media_router.mojom.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec,
      [route_id]);
  }

  sendRouteMessage(media_route_id, message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec,
      null,
      [media_route_id, message]);
  }

  sendRouteBinaryMessage(media_route_id, data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec,
      null,
      [media_route_id, data]);
  }

  startObservingMediaSinks(media_source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec,
      null,
      [media_source]);
  }

  stopObservingMediaSinks(media_source) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec,
      null,
      [media_source]);
  }

  startObservingMediaRoutes() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec,
      null,
      []);
  }

  detachRoute(route_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_DetachRoute_ParamsSpec,
      null,
      [route_id]);
  }

  discoverSinksNow() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec,
      null,
      []);
  }

  bindMediaController(route_id, media_controller, observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_BindMediaController_ParamsSpec,
      media_router.mojom.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec,
      [route_id, media_controller, observer]);
  }

  getState() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_router.mojom.mojom.MediaRouteProvider_GetState_ParamsSpec,
      media_router.mojom.mojom.MediaRouteProvider_GetState_ResponseParamsSpec,
      []);
  }

};

media_router.mojom.mojom.MediaRouteProvider.getRemote = function() {
  let remote = new media_router.mojom.mojom.MediaRouteProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaRouteProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateRoute
media_router.mojom.mojom.MediaRouteProvider_CreateRoute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.CreateRoute_Params',
      packedSize: 56,
      fields: [
        { name: 'media_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'original_presentation_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'frame_tree_node_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

media_router.mojom.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.CreateRoute_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'route', packedOffset: 0, packedBitOffset: 0, type: media_router.mojom.MediaRouteSpec, nullable: true, minVersion: 0 },
        { name: 'connection', packedOffset: 8, packedBitOffset: 0, type: media_router.mojom.RoutePresentationConnectionSpec, nullable: true, minVersion: 0 },
        { name: 'error_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'result_code', packedOffset: 24, packedBitOffset: 0, type: media_router.mojom.RouteRequestResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for JoinRoute
media_router.mojom.mojom.MediaRouteProvider_JoinRoute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.JoinRoute_Params',
      packedSize: 48,
      fields: [
        { name: 'media_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'presentation_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'frame_tree_node_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

media_router.mojom.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.JoinRoute_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'route', packedOffset: 0, packedBitOffset: 0, type: media_router.mojom.MediaRouteSpec, nullable: true, minVersion: 0 },
        { name: 'connection', packedOffset: 8, packedBitOffset: 0, type: media_router.mojom.RoutePresentationConnectionSpec, nullable: true, minVersion: 0 },
        { name: 'error_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'result_code', packedOffset: 24, packedBitOffset: 0, type: media_router.mojom.RouteRequestResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for TerminateRoute
media_router.mojom.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.TerminateRoute_Params',
      packedSize: 16,
      fields: [
        { name: 'route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_router.mojom.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.TerminateRoute_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: media_router.mojom.RouteRequestResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendRouteMessage
media_router.mojom.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.SendRouteMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'media_route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendRouteBinaryMessage
media_router.mojom.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.SendRouteBinaryMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'media_route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartObservingMediaSinks
media_router.mojom.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.StartObservingMediaSinks_Params',
      packedSize: 16,
      fields: [
        { name: 'media_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopObservingMediaSinks
media_router.mojom.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.StopObservingMediaSinks_Params',
      packedSize: 16,
      fields: [
        { name: 'media_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartObservingMediaRoutes
media_router.mojom.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.StartObservingMediaRoutes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DetachRoute
media_router.mojom.mojom.MediaRouteProvider_DetachRoute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.DetachRoute_Params',
      packedSize: 16,
      fields: [
        { name: 'route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DiscoverSinksNow
media_router.mojom.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.DiscoverSinksNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BindMediaController
media_router.mojom.mojom.MediaRouteProvider_BindMediaController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.BindMediaController_Params',
      packedSize: 32,
      fields: [
        { name: 'route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media_controller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_router.mojom.MediaControllerRemote), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_router.mojom.MediaStatusObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media_router.mojom.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.BindMediaController_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetState
media_router.mojom.mojom.MediaRouteProvider_GetState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.GetState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_router.mojom.mojom.MediaRouteProvider_GetState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouteProvider.GetState_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: media_router.mojom.ProviderStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media_router.mojom.mojom.MediaRouteProviderPtr = media_router.mojom.mojom.MediaRouteProviderRemote;
media_router.mojom.mojom.MediaRouteProviderRequest = media_router.mojom.mojom.MediaRouteProviderPendingReceiver;


// Interface: MediaRouter
media_router.mojom.mojom.MediaRouter = {};

media_router.mojom.mojom.MediaRouterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.mojom.MediaRouterRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaRouter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.mojom.MediaRouterPendingReceiver,
      handle);
    this.$ = new media_router.mojom.mojom.MediaRouterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.mojom.MediaRouterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerMediaRouteProvider(provider_id, media_router_provider) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec,
      null,
      [provider_id, media_router_provider]);
  }

  onSinksReceived(provider_id, media_source, sinks, origins) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.mojom.MediaRouter_OnSinksReceived_ParamsSpec,
      null,
      [provider_id, media_source, sinks, origins]);
  }

  onIssue(issue) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.mojom.MediaRouter_OnIssue_ParamsSpec,
      null,
      [issue]);
  }

  clearTopIssueForSink(sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec,
      null,
      [sink_id]);
  }

  onRoutesUpdated(provider_id, routes) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_router.mojom.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec,
      null,
      [provider_id, routes]);
  }

  onPresentationConnectionStateChanged(route_id, state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_router.mojom.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec,
      null,
      [route_id, state]);
  }

  onPresentationConnectionClosed(route_id, reason, message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_router.mojom.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec,
      null,
      [route_id, reason, message]);
  }

  onRouteMessagesReceived(route_id, messages) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_router.mojom.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec,
      null,
      [route_id, messages]);
  }

  getMediaSinkServiceStatus() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_router.mojom.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec,
      media_router.mojom.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec,
      []);
  }

  getLogger(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_router.mojom.mojom.MediaRouter_GetLogger_ParamsSpec,
      null,
      [receiver]);
  }

  getDebugger(receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_router.mojom.mojom.MediaRouter_GetDebugger_ParamsSpec,
      null,
      [receiver]);
  }

  getLogsAsString() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_router.mojom.mojom.MediaRouter_GetLogsAsString_ParamsSpec,
      media_router.mojom.mojom.MediaRouter_GetLogsAsString_ResponseParamsSpec,
      []);
  }

};

media_router.mojom.mojom.MediaRouter.getRemote = function() {
  let remote = new media_router.mojom.mojom.MediaRouterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaRouter',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterMediaRouteProvider
media_router.mojom.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.RegisterMediaRouteProvider_Params',
      packedSize: 24,
      fields: [
        { name: 'provider_id', packedOffset: 8, packedBitOffset: 0, type: media_router.mojom.MediaRouteProviderIdSpec, nullable: false, minVersion: 0 },
        { name: 'media_router_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_router.mojom.MediaRouteProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnSinksReceived
media_router.mojom.mojom.MediaRouter_OnSinksReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.OnSinksReceived_Params',
      packedSize: 40,
      fields: [
        { name: 'provider_id', packedOffset: 24, packedBitOffset: 0, type: media_router.mojom.MediaRouteProviderIdSpec, nullable: false, minVersion: 0 },
        { name: 'media_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sinks', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(media_router.mojom.MediaSinkSpec, false), nullable: false, minVersion: 0 },
        { name: 'origins', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for OnIssue
media_router.mojom.mojom.MediaRouter_OnIssue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.OnIssue_Params',
      packedSize: 16,
      fields: [
        { name: 'issue', packedOffset: 0, packedBitOffset: 0, type: media_router.mojom.IssueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearTopIssueForSink
media_router.mojom.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.ClearTopIssueForSink_Params',
      packedSize: 16,
      fields: [
        { name: 'sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRoutesUpdated
media_router.mojom.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.OnRoutesUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'provider_id', packedOffset: 8, packedBitOffset: 0, type: media_router.mojom.MediaRouteProviderIdSpec, nullable: false, minVersion: 0 },
        { name: 'routes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_router.mojom.MediaRouteSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnPresentationConnectionStateChanged
media_router.mojom.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.OnPresentationConnectionStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PresentationConnectionStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnPresentationConnectionClosed
media_router.mojom.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.OnPresentationConnectionClosed_Params',
      packedSize: 32,
      fields: [
        { name: 'route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PresentationConnectionCloseReasonSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnRouteMessagesReceived
media_router.mojom.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.OnRouteMessagesReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'messages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(media_router.mojom.RouteMessageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetMediaSinkServiceStatus
media_router.mojom.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.GetMediaSinkServiceStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_router.mojom.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.GetMediaSinkServiceStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLogger
media_router.mojom.mojom.MediaRouter_GetLogger_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.GetLogger_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_router.mojom.LoggerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDebugger
media_router.mojom.mojom.MediaRouter_GetDebugger_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.GetDebugger_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_router.mojom.DebuggerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLogsAsString
media_router.mojom.mojom.MediaRouter_GetLogsAsString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.GetLogsAsString_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_router.mojom.mojom.MediaRouter_GetLogsAsString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaRouter.GetLogsAsString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'logs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_router.mojom.mojom.MediaRouterPtr = media_router.mojom.mojom.MediaRouterRemote;
media_router.mojom.mojom.MediaRouterRequest = media_router.mojom.mojom.MediaRouterPendingReceiver;

