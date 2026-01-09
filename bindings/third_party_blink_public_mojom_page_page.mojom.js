// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PagehideDispatch
blink.mojom.PagehideDispatch = {
  kNotDispatched: 0,
  kDispatchedNotPersisted: 1,
  kDispatchedPersisted: 2,
};
blink.mojom.PagehideDispatchSpec = { $: mojo.internal.Enum() };

// Struct: PageLifecycleState
blink.mojom.PageLifecycleStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageLifecycleState',
      packedSize: 24,
      fields: [
        { name: 'is_frozen', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visibility', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.PageVisibilityStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_in_back_forward_cache', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pagehide_dispatch', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PagehideDispatchSpec, nullable: false, minVersion: 0 },
        { name: 'eviction_enabled', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PageRestoreParams
blink.mojom.PageRestoreParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageRestoreParams',
      packedSize: 32,
      fields: [
        { name: 'navigation_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'pending_history_list_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'current_history_list_length', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'view_transition_state', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ViewTransitionStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ColorProviderColorMaps
blink.mojom.ColorProviderColorMapsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ColorProviderColorMaps',
      packedSize: 32,
      fields: [
        { name: 'light_colors_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(color.mojom.RendererColorIdSpec, skia.mojom.SkColorSpec, false), nullable: false, minVersion: 0 },
        { name: 'dark_colors_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(color.mojom.RendererColorIdSpec, skia.mojom.SkColorSpec, false), nullable: false, minVersion: 0 },
        { name: 'forced_colors_map', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(color.mojom.RendererColorIdSpec, skia.mojom.SkColorSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PrerenderPageActivationParams
blink.mojom.PrerenderPageActivationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrerenderPageActivationParams',
      packedSize: 32,
      fields: [
        { name: 'was_user_activated', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WasActivatedOptionSpec, nullable: false, minVersion: 0 },
        { name: 'activation_start', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'view_transition_state', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ViewTransitionStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageBroadcast
blink.mojom.PageBroadcast = {};

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
      null,
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
      null,
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

// ParamsSpec for SetPageLifecycleState
blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.SetPageLifecycleState_Params',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PageLifecycleStateSpec, nullable: false, minVersion: 0 },
        { name: 'page_restore_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PageRestoreParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AudioStateChanged
blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.AudioStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_audio_playing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ActivatePrerenderedPage
blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.ActivatePrerenderedPage_Params',
      packedSize: 16,
      fields: [
        { name: 'prerender_page_activation_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PrerenderPageActivationParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateWebPreferences
blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.UpdateWebPreferences_Params',
      packedSize: 16,
      fields: [
        { name: 'preferences', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPreferencesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateRendererPreferences
blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.UpdateRendererPreferences_Params',
      packedSize: 16,
      fields: [
        { name: 'preferences', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RendererPreferencesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHistoryIndexAndLength
blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.SetHistoryIndexAndLength_Params',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPageBaseBackgroundColor
blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.SetPageBaseBackgroundColor_Params',
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateRemoteMainFrame
blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.CreateRemoteMainFrame_Params',
      packedSize: 80,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RemoteFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'opener_frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'replication_state', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.FrameReplicationStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_loading', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'devtools_frame_token', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_metrics_token', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'remote_frame_interfaces', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.RemoteFrameInterfacesFromBrowserSpec, nullable: false, minVersion: 0 },
        { name: 'remote_main_frame_interfaces', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.RemoteMainFrameInterfacesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// ParamsSpec for UpdatePageBrowsingContextGroup
blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.UpdatePageBrowsingContextGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'browsing_context_group_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPageAttributionSupport
blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.SetPageAttributionSupport_Params',
      packedSize: 16,
      fields: [
        { name: 'support', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AttributionSupportSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateColorProviders
blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.UpdateColorProviders_Params',
      packedSize: 16,
      fields: [
        { name: 'color_provider_colors', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ColorProviderColorMapsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSupportsDraggableRegions
blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageBroadcast.SetSupportsDraggableRegions_Params',
      packedSize: 16,
      fields: [
        { name: 'supports_draggable_regions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.PageBroadcastPtr = blink.mojom.PageBroadcastRemote;
blink.mojom.PageBroadcastRequest = blink.mojom.PageBroadcastPendingReceiver;

