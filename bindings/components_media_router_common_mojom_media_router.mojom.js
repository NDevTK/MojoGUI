// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router.mojom
// Module: media_router.mojom

'use strict';

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
};

media_router.mojom.MediaRouteProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createRoute(media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec,
      media_router.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec,
      [media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout],
      false);
  }

  joinRoute(media_source, presentation_id, origin, frame_tree_node_id, timeout) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec,
      media_router.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec,
      [media_source, presentation_id, origin, frame_tree_node_id, timeout],
      false);
  }

  terminateRoute(route_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec,
      media_router.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec,
      [route_id],
      false);
  }

  sendRouteMessage(media_route_id, message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec,
      null,
      [media_route_id, message],
      false);
  }

  sendRouteBinaryMessage(media_route_id, data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec,
      null,
      [media_route_id, data],
      false);
  }

  startObservingMediaSinks(media_source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec,
      null,
      [media_source],
      false);
  }

  stopObservingMediaSinks(media_source) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec,
      null,
      [media_source],
      false);
  }

  startObservingMediaRoutes() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec,
      null,
      [],
      false);
  }

  detachRoute(route_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec,
      null,
      [route_id],
      false);
  }

  discoverSinksNow() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec,
      null,
      [],
      false);
  }

  bindMediaController(route_id, media_controller, observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec,
      media_router.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec,
      [route_id, media_controller, observer],
      false);
  }

  getState() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec.$.decode(message.payload);
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
          const params = media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec.$.decode(message.payload);
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
          const params = media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec.$.decode(message.payload);
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
          const params = media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendRouteMessage(params.media_route_id, params.message);
          break;
        }
        case 4: {
          const params = media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendRouteBinaryMessage(params.media_route_id, params.data);
          break;
        }
        case 5: {
          const params = media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startObservingMediaSinks(params.media_source);
          break;
        }
        case 6: {
          const params = media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopObservingMediaSinks(params.media_source);
          break;
        }
        case 7: {
          const params = media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startObservingMediaRoutes();
          break;
        }
        case 8: {
          const params = media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec.$.decode(message.payload);
          const result = this.impl.detachRoute(params.route_id);
          break;
        }
        case 9: {
          const params = media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.discoverSinksNow();
          break;
        }
        case 10: {
          const params = media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec.$.decode(message.payload);
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
          const params = media_router.mojom.MediaRouteProvider_GetState_ParamsSpec.$.decode(message.payload);
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
      mojo.internal.StructField('media_router_provider', 8, 0, mojo.internal.InterfaceProxy(media_router.mojom.MediaRouteProviderSpec), null, false, 0, undefined),
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
};

media_router.mojom.MediaRouterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerMediaRouteProvider(provider_id, media_router_provider) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec,
      null,
      [provider_id, media_router_provider],
      false);
  }

  onSinksReceived(provider_id, media_source, sinks, origins) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec,
      null,
      [provider_id, media_source, sinks, origins],
      false);
  }

  onIssue(issue) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.MediaRouter_OnIssue_ParamsSpec,
      null,
      [issue],
      false);
  }

  clearTopIssueForSink(sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec,
      null,
      [sink_id],
      false);
  }

  onRoutesUpdated(provider_id, routes) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec,
      null,
      [provider_id, routes],
      false);
  }

  onPresentationConnectionStateChanged(route_id, state) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec,
      null,
      [route_id, state],
      false);
  }

  onPresentationConnectionClosed(route_id, reason, message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec,
      null,
      [route_id, reason, message],
      false);
  }

  onRouteMessagesReceived(route_id, messages) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec,
      null,
      [route_id, messages],
      false);
  }

  getMediaSinkServiceStatus() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec,
      media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec,
      [],
      false);
  }

  getLogger(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_router.mojom.MediaRouter_GetLogger_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getDebugger(receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_router.mojom.MediaRouter_GetDebugger_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getLogsAsString() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerMediaRouteProvider(params.provider_id, params.media_router_provider);
          break;
        }
        case 1: {
          const params = media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSinksReceived(params.provider_id, params.media_source, params.sinks, params.origins);
          break;
        }
        case 2: {
          const params = media_router.mojom.MediaRouter_OnIssue_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onIssue(params.issue);
          break;
        }
        case 3: {
          const params = media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearTopIssueForSink(params.sink_id);
          break;
        }
        case 4: {
          const params = media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRoutesUpdated(params.provider_id, params.routes);
          break;
        }
        case 5: {
          const params = media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPresentationConnectionStateChanged(params.route_id, params.state);
          break;
        }
        case 6: {
          const params = media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPresentationConnectionClosed(params.route_id, params.reason, params.message);
          break;
        }
        case 7: {
          const params = media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRouteMessagesReceived(params.route_id, params.messages);
          break;
        }
        case 8: {
          const params = media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec.$.decode(message.payload);
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
          const params = media_router.mojom.MediaRouter_GetLogger_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLogger(params.receiver);
          break;
        }
        case 10: {
          const params = media_router.mojom.MediaRouter_GetDebugger_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDebugger(params.receiver);
          break;
        }
        case 11: {
          const params = media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

media_router.mojom.MediaRouterReceiver = media_router.mojom.MediaRouterReceiver;

media_router.mojom.MediaRouterPtr = media_router.mojom.MediaRouterRemote;
media_router.mojom.MediaRouterRequest = media_router.mojom.MediaRouterPendingReceiver;

