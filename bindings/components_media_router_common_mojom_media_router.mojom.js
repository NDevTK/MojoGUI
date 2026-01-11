// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router.mojom
// Module: media_router.mojom

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

media_router.mojom.SinkIconTypeSpec = { $: mojo.internal.Enum() };
media_router.mojom.RouteControllerTypeSpec = { $: mojo.internal.Enum() };
media_router.mojom.SeveritySpec = { $: mojo.internal.Enum() };
media_router.mojom.TypeSpec = { $: mojo.internal.Enum() };
media_router.mojom.MediaSinkExtraDataSpec = { $: {} };
media_router.mojom.ProviderStateSpec = { $: {} };
media_router.mojom.MediaSinkSpec = { $: {} };
media_router.mojom.DialMediaSinkSpec = { $: {} };
media_router.mojom.CastMediaSinkSpec = { $: {} };
media_router.mojom.MediaRouteSpec = { $: {} };
media_router.mojom.IssueSpec = { $: {} };
media_router.mojom.RouteMessageSpec = { $: {} };
media_router.mojom.RoutePresentationConnectionSpec = { $: {} };
media_router.mojom.CastSessionStateSpec = { $: {} };
media_router.mojom.CastProviderStateSpec = { $: {} };
media_router.mojom.MediaRouteProvider = {};
media_router.mojom.MediaRouteProvider.$interfaceName = 'media_router.mojom.MediaRouteProvider';
media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_GetState_ParamsSpec = { $: {} };
media_router.mojom.MediaRouteProvider_GetState_ResponseParamsSpec = { $: {} };
media_router.mojom.MediaRouter = {};
media_router.mojom.MediaRouter.$interfaceName = 'media_router.mojom.MediaRouter';
media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_OnIssue_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec = { $: {} };
media_router.mojom.MediaRouter_GetLogger_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_GetDebugger_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec = { $: {} };
media_router.mojom.MediaRouter_GetLogsAsString_ResponseParamsSpec = { $: {} };

// Enum: SinkIconType
media_router.mojom.SinkIconType = {
  CAST: 0,
  CAST_AUDIO_GROUP: 1,
  CAST_AUDIO: 2,
  WIRED_DISPLAY: 6,
  GENERIC: 7,
};

// Enum: RouteControllerType
media_router.mojom.RouteControllerType = {
  kNone: 0,
  kGeneric: 1,
  kMirroring: 2,
};

// Enum: Severity
media_router.mojom.Severity = {
  WARNING: 0,
  NOTIFICATION: 1,
};

// Enum: Type
media_router.mojom.Type = {
  TEXT: 0,
  BINARY: 1,
};

// Union: MediaSinkExtraData
mojo.internal.Union(
    media_router.mojom.MediaSinkExtraDataSpec, 'media_router.mojom.MediaSinkExtraData', {
      'dial_media_sink': {
        'ordinal': 0,
        'type': media_router.mojom.DialMediaSinkSpec.$,
        'nullable': false,
      },
      'cast_media_sink': {
        'ordinal': 1,
        'type': media_router.mojom.CastMediaSinkSpec.$,
        'nullable': false,
      },
    });

// Union: ProviderState
mojo.internal.Union(
    media_router.mojom.ProviderStateSpec, 'media_router.mojom.ProviderState', {
      'cast_provider_state': {
        'ordinal': 0,
        'type': media_router.mojom.CastProviderStateSpec.$,
        'nullable': false,
      },
    });

// Struct: MediaSink
mojo.internal.Struct(
    media_router.mojom.MediaSinkSpec, 'media_router.mojom.MediaSink', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_type', 16, 0, media_router.mojom.SinkIconTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('provider_id', 24, 0, media_router.mojom.MediaRouteProviderIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 32, 0, media_router.mojom.MediaSinkExtraDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DialMediaSink
mojo.internal.Struct(
    media_router.mojom.DialMediaSinkSpec, 'media_router.mojom.DialMediaSink', [
      mojo.internal.StructField('ip_address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CastMediaSink
mojo.internal.Struct(
    media_router.mojom.CastMediaSinkSpec, 'media_router.mojom.CastMediaSink', [
      mojo.internal.StructField('ip_endpoint', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('capabilities', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('cast_channel_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: MediaRoute
mojo.internal.Struct(
    media_router.mojom.MediaRouteSpec, 'media_router.mojom.MediaRoute', [
      mojo.internal.StructField('media_route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_source', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('media_sink_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_sink_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('controller_type', 48, 0, media_router.mojom.RouteControllerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_local', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_local_presentation', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_connecting', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: Issue
mojo.internal.Struct(
    media_router.mojom.IssueSpec, 'media_router.mojom.Issue', [
      mojo.internal.StructField('WARNING', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RouteMessage
mojo.internal.Struct(
    media_router.mojom.RouteMessageSpec, 'media_router.mojom.RouteMessage', [
      mojo.internal.StructField('TEXT', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RoutePresentationConnection
mojo.internal.Struct(
    media_router.mojom.RoutePresentationConnectionSpec, 'media_router.mojom.RoutePresentationConnection', [
      mojo.internal.StructField('connection_remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PresentationConnectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('connection_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.PresentationConnectionRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CastSessionState
mojo.internal.Struct(
    media_router.mojom.CastSessionStateSpec, 'media_router.mojom.CastSessionState', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('route_description', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CastProviderState
mojo.internal.Struct(
    media_router.mojom.CastProviderStateSpec, 'media_router.mojom.CastProviderState', [
      mojo.internal.StructField('session_state', 0, 0, mojo.internal.Array(media_router.mojom.CastSessionStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MediaRouteProvider
mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec, 'media_router.mojom.MediaRouteProvider_CreateRoute_Params', [
      mojo.internal.StructField('media_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('original_presentation_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('origin', 24, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_tree_node_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec, 'media_router.mojom.MediaRouteProvider_CreateRoute_ResponseParams', [
      mojo.internal.StructField('route', 0, 0, media_router.mojom.MediaRouteSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connection', 8, 0, media_router.mojom.RoutePresentationConnectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error_text', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('result_code', 24, 0, media_router.mojom.RouteRequestResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec, 'media_router.mojom.MediaRouteProvider_JoinRoute_Params', [
      mojo.internal.StructField('media_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('presentation_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_tree_node_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec, 'media_router.mojom.MediaRouteProvider_JoinRoute_ResponseParams', [
      mojo.internal.StructField('route', 0, 0, media_router.mojom.MediaRouteSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connection', 8, 0, media_router.mojom.RoutePresentationConnectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error_text', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('result_code', 24, 0, media_router.mojom.RouteRequestResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec, 'media_router.mojom.MediaRouteProvider_TerminateRoute_Params', [
      mojo.internal.StructField('route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec, 'media_router.mojom.MediaRouteProvider_TerminateRoute_ResponseParams', [
      mojo.internal.StructField('error_text', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('result_code', 8, 0, media_router.mojom.RouteRequestResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec, 'media_router.mojom.MediaRouteProvider_SendRouteMessage_Params', [
      mojo.internal.StructField('media_route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec, 'media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_Params', [
      mojo.internal.StructField('media_route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec, 'media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_Params', [
      mojo.internal.StructField('media_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec, 'media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_Params', [
      mojo.internal.StructField('media_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec, 'media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec, 'media_router.mojom.MediaRouteProvider_DetachRoute_Params', [
      mojo.internal.StructField('route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec, 'media_router.mojom.MediaRouteProvider_DiscoverSinksNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec, 'media_router.mojom.MediaRouteProvider_BindMediaController_Params', [
      mojo.internal.StructField('route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_controller', 8, 0, mojo.internal.InterfaceRequest(media_router.mojom.MediaControllerRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(media_router.mojom.MediaStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec, 'media_router.mojom.MediaRouteProvider_BindMediaController_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_GetState_ParamsSpec, 'media_router.mojom.MediaRouteProvider_GetState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouteProvider_GetState_ResponseParamsSpec, 'media_router.mojom.MediaRouteProvider_GetState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, media_router.mojom.ProviderStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media_router.mojom.MediaRouteProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.MediaRouteProviderRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaRouteProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.MediaRouteProviderPendingReceiver,
      handle);
    this.$ = new media_router.mojom.MediaRouteProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createRoute(media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout) {
    return this.$.createRoute(media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout);
  }
  joinRoute(media_source, presentation_id, origin, frame_tree_node_id, timeout) {
    return this.$.joinRoute(media_source, presentation_id, origin, frame_tree_node_id, timeout);
  }
  terminateRoute(route_id) {
    return this.$.terminateRoute(route_id);
  }
  sendRouteMessage(media_route_id, message) {
    return this.$.sendRouteMessage(media_route_id, message);
  }
  sendRouteBinaryMessage(media_route_id, data) {
    return this.$.sendRouteBinaryMessage(media_route_id, data);
  }
  startObservingMediaSinks(media_source) {
    return this.$.startObservingMediaSinks(media_source);
  }
  stopObservingMediaSinks(media_source) {
    return this.$.stopObservingMediaSinks(media_source);
  }
  startObservingMediaRoutes() {
    return this.$.startObservingMediaRoutes();
  }
  detachRoute(route_id) {
    return this.$.detachRoute(route_id);
  }
  discoverSinksNow() {
    return this.$.discoverSinksNow();
  }
  bindMediaController(route_id, media_controller, observer) {
    return this.$.bindMediaController(route_id, media_controller, observer);
  }
  getState() {
    return this.$.getState();
  }
};

media_router.mojom.MediaRouteProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaRouteProvider', [
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

  createRoute(media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec,
      media_router.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec,
      [media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout],
      false);
  }

  joinRoute(media_source, presentation_id, origin, frame_tree_node_id, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec,
      media_router.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec,
      [media_source, presentation_id, origin, frame_tree_node_id, timeout],
      false);
  }

  terminateRoute(route_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec,
      media_router.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec,
      [route_id],
      false);
  }

  sendRouteMessage(media_route_id, message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec,
      null,
      [media_route_id, message],
      false);
  }

  sendRouteBinaryMessage(media_route_id, data) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec,
      null,
      [media_route_id, data],
      false);
  }

  startObservingMediaSinks(media_source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec,
      null,
      [media_source],
      false);
  }

  stopObservingMediaSinks(media_source) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec,
      null,
      [media_source],
      false);
  }

  startObservingMediaRoutes() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec,
      null,
      [],
      false);
  }

  detachRoute(route_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec,
      null,
      [route_id],
      false);
  }

  discoverSinksNow() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec,
      null,
      [],
      false);
  }

  bindMediaController(route_id, media_controller, observer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec,
      media_router.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec,
      [route_id, media_controller, observer],
      false);
  }

  getState() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      media_router.mojom.MediaRouteProvider_GetState_ParamsSpec,
      media_router.mojom.MediaRouteProvider_GetState_ResponseParamsSpec,
      [],
      false);
  }

};

media_router.mojom.MediaRouteProvider.getRemote = function() {
  let remote = new media_router.mojom.MediaRouteProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaRouteProvider',
    'context');
  return remote.$;
};

media_router.mojom.MediaRouteProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaRouteProvider', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_GetState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec.$.structSpec);
          const result = this.impl.createRoute(params.media_source, params.sink_id, params.original_presentation_id, params.origin, params.frame_tree_node_id, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec.$.structSpec);
          const result = this.impl.joinRoute(params.media_source, params.presentation_id, params.origin, params.frame_tree_node_id, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec.$.structSpec);
          const result = this.impl.terminateRoute(params.route_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec.$.structSpec);
          const result = this.impl.sendRouteMessage(params.media_route_id, params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec.$.structSpec);
          const result = this.impl.sendRouteBinaryMessage(params.media_route_id, params.data);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec.$.structSpec);
          const result = this.impl.startObservingMediaSinks(params.media_source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec.$.structSpec);
          const result = this.impl.stopObservingMediaSinks(params.media_source);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec.$.structSpec);
          const result = this.impl.startObservingMediaRoutes();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec.$.structSpec);
          const result = this.impl.detachRoute(params.route_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec.$.structSpec);
          const result = this.impl.discoverSinksNow();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec.$.structSpec);
          const result = this.impl.bindMediaController(params.route_id, params.media_controller, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_GetState_ParamsSpec.$.structSpec);
          const result = this.impl.getState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_GetState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_router.mojom.MediaRouteProviderReceiver = media_router.mojom.MediaRouteProviderReceiver;

media_router.mojom.MediaRouteProviderPtr = media_router.mojom.MediaRouteProviderRemote;
media_router.mojom.MediaRouteProviderRequest = media_router.mojom.MediaRouteProviderPendingReceiver;


// Interface: MediaRouter
mojo.internal.Struct(
    media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec, 'media_router.mojom.MediaRouter_RegisterMediaRouteProvider_Params', [
      mojo.internal.StructField('provider_id', 0, 0, media_router.mojom.MediaRouteProviderIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_router_provider', 8, 0, mojo.internal.InterfaceProxy(media_router.mojom.MediaRouteProviderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec, 'media_router.mojom.MediaRouter_OnSinksReceived_Params', [
      mojo.internal.StructField('provider_id', 0, 0, media_router.mojom.MediaRouteProviderIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_source', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sinks', 16, 0, mojo.internal.Array(media_router.mojom.MediaSinkSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('origins', 24, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_OnIssue_ParamsSpec, 'media_router.mojom.MediaRouter_OnIssue_Params', [
      mojo.internal.StructField('issue', 0, 0, media_router.mojom.IssueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec, 'media_router.mojom.MediaRouter_ClearTopIssueForSink_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec, 'media_router.mojom.MediaRouter_OnRoutesUpdated_Params', [
      mojo.internal.StructField('provider_id', 0, 0, media_router.mojom.MediaRouteProviderIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routes', 8, 0, mojo.internal.Array(media_router.mojom.MediaRouteSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec, 'media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_Params', [
      mojo.internal.StructField('route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, blink.mojom.PresentationConnectionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec, 'media_router.mojom.MediaRouter_OnPresentationConnectionClosed_Params', [
      mojo.internal.StructField('route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, blink.mojom.PresentationConnectionCloseReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec, 'media_router.mojom.MediaRouter_OnRouteMessagesReceived_Params', [
      mojo.internal.StructField('route_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('messages', 8, 0, mojo.internal.Array(media_router.mojom.RouteMessageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec, 'media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec, 'media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_GetLogger_ParamsSpec, 'media_router.mojom.MediaRouter_GetLogger_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_router.mojom.LoggerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_GetDebugger_ParamsSpec, 'media_router.mojom.MediaRouter_GetDebugger_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_router.mojom.DebuggerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec, 'media_router.mojom.MediaRouter_GetLogsAsString_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouter_GetLogsAsString_ResponseParamsSpec, 'media_router.mojom.MediaRouter_GetLogsAsString_ResponseParams', [
      mojo.internal.StructField('logs', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

media_router.mojom.MediaRouterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.MediaRouterRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaRouter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.MediaRouterPendingReceiver,
      handle);
    this.$ = new media_router.mojom.MediaRouterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerMediaRouteProvider(provider_id, media_router_provider) {
    return this.$.registerMediaRouteProvider(provider_id, media_router_provider);
  }
  onSinksReceived(provider_id, media_source, sinks, origins) {
    return this.$.onSinksReceived(provider_id, media_source, sinks, origins);
  }
  onIssue(issue) {
    return this.$.onIssue(issue);
  }
  clearTopIssueForSink(sink_id) {
    return this.$.clearTopIssueForSink(sink_id);
  }
  onRoutesUpdated(provider_id, routes) {
    return this.$.onRoutesUpdated(provider_id, routes);
  }
  onPresentationConnectionStateChanged(route_id, state) {
    return this.$.onPresentationConnectionStateChanged(route_id, state);
  }
  onPresentationConnectionClosed(route_id, reason, message) {
    return this.$.onPresentationConnectionClosed(route_id, reason, message);
  }
  onRouteMessagesReceived(route_id, messages) {
    return this.$.onRouteMessagesReceived(route_id, messages);
  }
  getMediaSinkServiceStatus() {
    return this.$.getMediaSinkServiceStatus();
  }
  getLogger(receiver) {
    return this.$.getLogger(receiver);
  }
  getDebugger(receiver) {
    return this.$.getDebugger(receiver);
  }
  getLogsAsString() {
    return this.$.getLogsAsString();
  }
};

media_router.mojom.MediaRouterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaRouter', [
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

  registerMediaRouteProvider(provider_id, media_router_provider) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec,
      null,
      [provider_id, media_router_provider],
      false);
  }

  onSinksReceived(provider_id, media_source, sinks, origins) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec,
      null,
      [provider_id, media_source, sinks, origins],
      false);
  }

  onIssue(issue) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_router.mojom.MediaRouter_OnIssue_ParamsSpec,
      null,
      [issue],
      false);
  }

  clearTopIssueForSink(sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec,
      null,
      [sink_id],
      false);
  }

  onRoutesUpdated(provider_id, routes) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec,
      null,
      [provider_id, routes],
      false);
  }

  onPresentationConnectionStateChanged(route_id, state) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec,
      null,
      [route_id, state],
      false);
  }

  onPresentationConnectionClosed(route_id, reason, message) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec,
      null,
      [route_id, reason, message],
      false);
  }

  onRouteMessagesReceived(route_id, messages) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec,
      null,
      [route_id, messages],
      false);
  }

  getMediaSinkServiceStatus() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec,
      media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec,
      [],
      false);
  }

  getLogger(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      media_router.mojom.MediaRouter_GetLogger_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getDebugger(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      media_router.mojom.MediaRouter_GetDebugger_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getLogsAsString() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec,
      media_router.mojom.MediaRouter_GetLogsAsString_ResponseParamsSpec,
      [],
      false);
  }

};

media_router.mojom.MediaRouter.getRemote = function() {
  let remote = new media_router.mojom.MediaRouterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaRouter',
    'context');
  return remote.$;
};

media_router.mojom.MediaRouterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaRouter', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnIssue_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogger_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetDebugger_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec.$.structSpec);
          const result = this.impl.registerMediaRouteProvider(params.provider_id, params.media_router_provider);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onSinksReceived(params.provider_id, params.media_source, params.sinks, params.origins);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnIssue_ParamsSpec.$.structSpec);
          const result = this.impl.onIssue(params.issue);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec.$.structSpec);
          const result = this.impl.clearTopIssueForSink(params.sink_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onRoutesUpdated(params.provider_id, params.routes);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onPresentationConnectionStateChanged(params.route_id, params.state);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onPresentationConnectionClosed(params.route_id, params.reason, params.message);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onRouteMessagesReceived(params.route_id, params.messages);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec.$.structSpec);
          const result = this.impl.getMediaSinkServiceStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogger_ParamsSpec.$.structSpec);
          const result = this.impl.getLogger(params.receiver);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetDebugger_ParamsSpec.$.structSpec);
          const result = this.impl.getDebugger(params.receiver);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec.$.structSpec);
          const result = this.impl.getLogsAsString();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouter_GetLogsAsString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_router.mojom.MediaRouterReceiver = media_router.mojom.MediaRouterReceiver;

media_router.mojom.MediaRouterPtr = media_router.mojom.MediaRouterRemote;
media_router.mojom.MediaRouterRequest = media_router.mojom.MediaRouterPendingReceiver;

