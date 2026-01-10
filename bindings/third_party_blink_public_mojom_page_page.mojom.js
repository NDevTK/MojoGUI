// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var skia = skia || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};

blink.mojom.PagehideDispatchSpec = { $: mojo.internal.Enum() };
blink.mojom.PageLifecycleStateSpec = { $: {} };
blink.mojom.PageRestoreParamsSpec = { $: {} };
blink.mojom.ColorProviderColorMapsSpec = { $: {} };
blink.mojom.PrerenderPageActivationParamsSpec = { $: {} };
blink.mojom.PageBroadcast = {};
blink.mojom.PageBroadcast.$interfaceName = 'blink.mojom.PageBroadcast';
blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec = { $: {} };
blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec = { $: {} };

// Enum: PagehideDispatch
blink.mojom.PagehideDispatch = {
  kNotDispatched: 0,
  kDispatchedNotPersisted: 1,
  kDispatchedPersisted: 2,
};

// Struct: PageLifecycleState
mojo.internal.Struct(
    blink.mojom.PageLifecycleStateSpec, 'blink.mojom.PageLifecycleState', [
      mojo.internal.StructField('is_frozen', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.PageVisibilityStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_in_back_forward_cache', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pagehide_dispatch', 4, 0, blink.mojom.PagehideDispatchSpec, null, false, 0, undefined),
      mojo.internal.StructField('eviction_enabled', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PageRestoreParams
mojo.internal.Struct(
    blink.mojom.PageRestoreParamsSpec, 'blink.mojom.PageRestoreParams', [
      mojo.internal.StructField('navigation_start', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('pending_history_list_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('current_history_list_length', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('view_transition_state', 8, 0, blink.mojom.ViewTransitionStateSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ColorProviderColorMaps
mojo.internal.Struct(
    blink.mojom.ColorProviderColorMapsSpec, 'blink.mojom.ColorProviderColorMaps', [
      mojo.internal.StructField('light_colors_map', 0, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec, skia.mojom.SkColorSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('dark_colors_map', 8, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec, skia.mojom.SkColorSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('forced_colors_map', 16, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec, skia.mojom.SkColorSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrerenderPageActivationParams
mojo.internal.Struct(
    blink.mojom.PrerenderPageActivationParamsSpec, 'blink.mojom.PrerenderPageActivationParams', [
      mojo.internal.StructField('was_user_activated', 16, 0, blink.mojom.WasActivatedOptionSpec, null, false, 0, undefined),
      mojo.internal.StructField('activation_start', 0, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
      mojo.internal.StructField('view_transition_state', 8, 0, blink.mojom.ViewTransitionStateSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageBroadcast
mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageLifecycleState_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.PageLifecycleStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_restore_params', 8, 0, blink.mojom.PageRestoreParamsSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec, 'blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec, 'blink.mojom.PageBroadcast_AudioStateChanged_Params', [
      mojo.internal.StructField('is_audio_playing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec, 'blink.mojom.PageBroadcast_ActivatePrerenderedPage_Params', [
      mojo.internal.StructField('prerender_page_activation_params', 0, 0, blink.mojom.PrerenderPageActivationParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec, 'blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateWebPreferences_Params', [
      mojo.internal.StructField('preferences', 0, 0, blink.mojom.WebPreferencesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateRendererPreferences_Params', [
      mojo.internal.StructField('preferences', 0, 0, blink.mojom.RendererPreferencesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec, 'blink.mojom.PageBroadcast_SetHistoryIndexAndLength_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_Params', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec, 'blink.mojom.PageBroadcast_CreateRemoteMainFrame_Params', [
      mojo.internal.StructField('token', 16, 0, blink.mojom.RemoteFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_token', 0, 0, blink.mojom.FrameTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('replication_state', 24, 0, blink.mojom.FrameReplicationStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_loading', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 32, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('navigation_metrics_token', 40, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('remote_frame_interfaces', 48, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_main_frame_interfaces', 56, 0, blink.mojom.RemoteMainFrameInterfacesSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec, 'blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_Params', [
      mojo.internal.StructField('browsing_context_group_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageAttributionSupport_Params', [
      mojo.internal.StructField('support', 0, 0, network.mojom.AttributionSupportSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateColorProviders_Params', [
      mojo.internal.StructField('color_provider_colors', 0, 0, blink.mojom.ColorProviderColorMapsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec, 'blink.mojom.PageBroadcast_SetSupportsDraggableRegions_Params', [
      mojo.internal.StructField('supports_draggable_regions', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PageBroadcastPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PageBroadcastRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PageBroadcast';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PageBroadcastPendingReceiver,
      handle);
    this.$ = new blink.mojom.PageBroadcastRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PageBroadcastRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPageLifecycleState(state, page_restore_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec,
      blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec,
      [state, page_restore_params]);
  }

  audioStateChanged(is_audio_playing) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec,
      null,
      [is_audio_playing]);
  }

  activatePrerenderedPage(prerender_page_activation_params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec,
      blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec,
      [prerender_page_activation_params]);
  }

  updateWebPreferences(preferences) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec,
      null,
      [preferences]);
  }

  updateRendererPreferences(preferences) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec,
      null,
      [preferences]);
  }

  setHistoryIndexAndLength(index, length) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec,
      null,
      [index, length]);
  }

  setPageBaseBackgroundColor(color) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec,
      null,
      [color]);
  }

  createRemoteMainFrame(token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec,
      null,
      [token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces]);
  }

  updatePageBrowsingContextGroup(browsing_context_group_token) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec,
      null,
      [browsing_context_group_token]);
  }

  setPageAttributionSupport(support) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec,
      null,
      [support]);
  }

  updateColorProviders(color_provider_colors) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec,
      null,
      [color_provider_colors]);
  }

  setSupportsDraggableRegions(supports_draggable_regions) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec,
      null,
      [supports_draggable_regions]);
  }

};

blink.mojom.PageBroadcast.getRemote = function() {
  let remote = new blink.mojom.PageBroadcastRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PageBroadcast',
    'context');
  return remote.$;
};

blink.mojom.PageBroadcastPtr = blink.mojom.PageBroadcastRemote;
blink.mojom.PageBroadcastRequest = blink.mojom.PageBroadcastPendingReceiver;

