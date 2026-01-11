// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router.mojom
// Module: media_router.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateRoute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRoute (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: JoinRoute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JoinRoute (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TerminateRoute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TerminateRoute (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SendRouteMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendRouteMessage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SendRouteBinaryMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendRouteBinaryMessage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: StartObservingMediaSinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartObservingMediaSinks (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StopObservingMediaSinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopObservingMediaSinks (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: StartObservingMediaRoutes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartObservingMediaRoutes (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DetachRoute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetachRoute (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DiscoverSinksNow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DiscoverSinksNow (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: BindMediaController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMediaController (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_GetState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetState (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_CreateRoute_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRoute');
          const result = this.impl.createRoute(params.media_source, params.sink_id, params.original_presentation_id, params.origin, params.frame_tree_node_id, params.timeout);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_CreateRoute_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateRoute FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_JoinRoute_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.joinRoute');
          const result = this.impl.joinRoute(params.media_source, params.presentation_id, params.origin, params.frame_tree_node_id, params.timeout);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_JoinRoute_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] JoinRoute FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_TerminateRoute_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.terminateRoute');
          const result = this.impl.terminateRoute(params.route_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_TerminateRoute_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TerminateRoute FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendRouteMessage');
          const result = this.impl.sendRouteMessage(params.media_route_id, params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_SendRouteBinaryMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendRouteBinaryMessage');
          const result = this.impl.sendRouteBinaryMessage(params.media_route_id, params.data);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaSinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startObservingMediaSinks');
          const result = this.impl.startObservingMediaSinks(params.media_source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StopObservingMediaSinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopObservingMediaSinks');
          const result = this.impl.stopObservingMediaSinks(params.media_source);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_StartObservingMediaRoutes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startObservingMediaRoutes');
          const result = this.impl.startObservingMediaRoutes();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DetachRoute_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detachRoute');
          const result = this.impl.detachRoute(params.route_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_DiscoverSinksNow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discoverSinksNow');
          const result = this.impl.discoverSinksNow();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_BindMediaController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMediaController');
          const result = this.impl.bindMediaController(params.route_id, params.media_controller, params.observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_BindMediaController_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] BindMediaController FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouteProvider_GetState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getState');
          const result = this.impl.getState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouteProvider_GetState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetState FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RegisterMediaRouteProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterMediaRouteProvider (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSinksReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSinksReceived (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnIssue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnIssue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIssue (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClearTopIssueForSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTopIssueForSink (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnRoutesUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRoutesUpdated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnPresentationConnectionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPresentationConnectionStateChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnPresentationConnectionClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPresentationConnectionClosed (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnRouteMessagesReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRouteMessagesReceived (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetMediaSinkServiceStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMediaSinkServiceStatus (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetLogger
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogger_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLogger (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetDebugger
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetDebugger_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugger (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetLogsAsString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLogsAsString (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_RegisterMediaRouteProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerMediaRouteProvider');
          const result = this.impl.registerMediaRouteProvider(params.provider_id, params.media_router_provider);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnSinksReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSinksReceived');
          const result = this.impl.onSinksReceived(params.provider_id, params.media_source, params.sinks, params.origins);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnIssue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIssue');
          const result = this.impl.onIssue(params.issue);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_ClearTopIssueForSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTopIssueForSink');
          const result = this.impl.clearTopIssueForSink(params.sink_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRoutesUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRoutesUpdated');
          const result = this.impl.onRoutesUpdated(params.provider_id, params.routes);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPresentationConnectionStateChanged');
          const result = this.impl.onPresentationConnectionStateChanged(params.route_id, params.state);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnPresentationConnectionClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPresentationConnectionClosed');
          const result = this.impl.onPresentationConnectionClosed(params.route_id, params.reason, params.message);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_OnRouteMessagesReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRouteMessagesReceived');
          const result = this.impl.onRouteMessagesReceived(params.route_id, params.messages);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMediaSinkServiceStatus');
          const result = this.impl.getMediaSinkServiceStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouter_GetMediaSinkServiceStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMediaSinkServiceStatus FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogger_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLogger');
          const result = this.impl.getLogger(params.receiver);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetDebugger_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDebugger');
          const result = this.impl.getDebugger(params.receiver);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouter_GetLogsAsString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLogsAsString');
          const result = this.impl.getLogsAsString();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouter_GetLogsAsString_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLogsAsString FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_router.mojom.MediaRouterReceiver = media_router.mojom.MediaRouterReceiver;

media_router.mojom.MediaRouterPtr = media_router.mojom.MediaRouterRemote;
media_router.mojom.MediaRouterRequest = media_router.mojom.MediaRouterPendingReceiver;

