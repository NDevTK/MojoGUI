// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Enum: SinkIconType
media_router.mojom.SinkIconType = {
  CAST: 0,
  CAST_AUDIO_GROUP: 1,
  CAST_AUDIO: 2,
  WIRED_DISPLAY: 3,
  GENERIC: 4,
};

// Enum: RouteControllerType
media_router.mojom.RouteControllerType = {
  kNone: 0,
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

// Struct: MediaSink
media_router.mojom.MediaSink = class {
  constructor(values = {}) {
    this.sink_id = values.sink_id !== undefined ? values.sink_id : "";
    this.extra_data = values.extra_data !== undefined ? values.extra_data : "";
  }
};

// Struct: DialMediaSink
media_router.mojom.DialMediaSink = class {
  constructor(values = {}) {
    this.ip_address = values.ip_address !== undefined ? values.ip_address : null;
    this.app_url = values.app_url !== undefined ? values.app_url : "";
  }
};

// Struct: CastMediaSink
media_router.mojom.CastMediaSink = class {
  constructor(values = {}) {
    this.ip_endpoint = values.ip_endpoint !== undefined ? values.ip_endpoint : 0;
    this.cast_channel_id = values.cast_channel_id !== undefined ? values.cast_channel_id : 0;
  }
};

// Struct: MediaRoute
media_router.mojom.MediaRoute = class {
  constructor(values = {}) {
    this.media_sink_name = values.media_sink_name !== undefined ? values.media_sink_name : "";
    this.is_connecting = values.is_connecting !== undefined ? values.is_connecting : false;
  }
};

// Struct: Issue
media_router.mojom.Issue = class {
  constructor(values = {}) {
    this.WARNING = values.WARNING !== undefined ? values.WARNING : null;
  }
};

// Struct: RouteMessage
media_router.mojom.RouteMessage = class {
  constructor(values = {}) {
    this.TEXT = values.TEXT !== undefined ? values.TEXT : null;
  }
};

// Struct: RoutePresentationConnection
media_router.mojom.RoutePresentationConnection = class {
  constructor(values = {}) {
    this.connection_receiver = values.connection_receiver !== undefined ? values.connection_receiver : null;
  }
};

// Struct: CastSessionState
media_router.mojom.CastSessionState = class {
  constructor(values = {}) {
    this.session_id = values.session_id !== undefined ? values.session_id : "";
    this.route_description = values.route_description !== undefined ? values.route_description : "";
  }
};

// Struct: CastProviderState
media_router.mojom.CastProviderState = class {
  constructor(values = {}) {
    this.session_state = values.session_state !== undefined ? values.session_state : [];
  }
};

// Interface: MediaRouteProvider
media_router.mojom.MediaRouteProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_router.mojom.MediaRouteProvider';
  }

  createRoute(media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout) {
    // Method: CreateRoute
    return new Promise((resolve) => {
      // Call: CreateRoute(media_source, sink_id, original_presentation_id, origin, frame_tree_node_id, timeout)
      resolve({});
    });
  }

  joinRoute(media_source, presentation_id, origin, frame_tree_node_id, timeout) {
    // Method: JoinRoute
    return new Promise((resolve) => {
      // Call: JoinRoute(media_source, presentation_id, origin, frame_tree_node_id, timeout)
      resolve({});
    });
  }

  terminateRoute(route_id) {
    // Method: TerminateRoute
    return new Promise((resolve) => {
      // Call: TerminateRoute(route_id)
      resolve({});
    });
  }

  sendRouteMessage(media_route_id, message) {
    // Method: SendRouteMessage
    // Call: SendRouteMessage(media_route_id, message)
  }

  sendRouteBinaryMessage(media_route_id, data) {
    // Method: SendRouteBinaryMessage
    // Call: SendRouteBinaryMessage(media_route_id, data)
  }

  startObservingMediaSinks(media_source) {
    // Method: StartObservingMediaSinks
    // Call: StartObservingMediaSinks(media_source)
  }

  stopObservingMediaSinks(media_source) {
    // Method: StopObservingMediaSinks
    // Call: StopObservingMediaSinks(media_source)
  }

  startObservingMediaRoutes() {
    // Method: StartObservingMediaRoutes
    // Call: StartObservingMediaRoutes()
  }

  detachRoute(route_id) {
    // Method: DetachRoute
    // Call: DetachRoute(route_id)
  }

  discoverSinksNow() {
    // Method: DiscoverSinksNow
    // Call: DiscoverSinksNow()
  }

  bindMediaController(route_id, media_controller, observer) {
    // Method: BindMediaController
    return new Promise((resolve) => {
      // Call: BindMediaController(route_id, media_controller, observer)
      resolve({});
    });
  }

  getState() {
    // Method: GetState
    return new Promise((resolve) => {
      // Call: GetState()
      resolve({});
    });
  }

};

media_router.mojom.MediaRouteProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaRouter
media_router.mojom.MediaRouterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_router.mojom.MediaRouter';
  }

  registerMediaRouteProvider(provider_id, media_router_provider) {
    // Method: RegisterMediaRouteProvider
    // Call: RegisterMediaRouteProvider(provider_id, media_router_provider)
  }

  onSinksReceived(provider_id, media_source, sinks, origins) {
    // Method: OnSinksReceived
    // Call: OnSinksReceived(provider_id, media_source, sinks, origins)
  }

  onIssue(issue) {
    // Method: OnIssue
    // Call: OnIssue(issue)
  }

  clearTopIssueForSink(sink_id) {
    // Method: ClearTopIssueForSink
    // Call: ClearTopIssueForSink(sink_id)
  }

  onRoutesUpdated(provider_id, routes) {
    // Method: OnRoutesUpdated
    // Call: OnRoutesUpdated(provider_id, routes)
  }

  onPresentationConnectionStateChanged(route_id, state) {
    // Method: OnPresentationConnectionStateChanged
    // Call: OnPresentationConnectionStateChanged(route_id, state)
  }

  onPresentationConnectionClosed(route_id, reason, message) {
    // Method: OnPresentationConnectionClosed
    // Call: OnPresentationConnectionClosed(route_id, reason, message)
  }

  onRouteMessagesReceived(route_id, messages) {
    // Method: OnRouteMessagesReceived
    // Call: OnRouteMessagesReceived(route_id, messages)
  }

  getMediaSinkServiceStatus() {
    // Method: GetMediaSinkServiceStatus
    return new Promise((resolve) => {
      // Call: GetMediaSinkServiceStatus()
      resolve({});
    });
  }

  getLogger(receiver) {
    // Method: GetLogger
    // Call: GetLogger(receiver)
  }

  getDebugger(receiver) {
    // Method: GetDebugger
    // Call: GetDebugger(receiver)
  }

  getLogsAsString() {
    // Method: GetLogsAsString
    return new Promise((resolve) => {
      // Call: GetLogsAsString()
      resolve({});
    });
  }

};

media_router.mojom.MediaRouterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
